import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { getNicheContent, professionalizeName } from "@/lib/niche-content";
import { getGalleryImages, getNicheColors } from "@/lib/gallery-images";
import { MessageCircle, Star, MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import LeadSiteGallery from "@/components/LeadSiteGallery";

const LeadSite = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: lead, isLoading, error } = useQuery({
    queryKey: ["lead-site", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .eq("slug", slug)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground animate-pulse">Carregando...</p>
      </div>
    );
  }

  if (error || !lead) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-3xl font-semibold mb-2 text-foreground">Site não encontrado</h1>
          <p className="text-muted-foreground">Verifique o link e tente novamente.</p>
        </div>
      </div>
    );
  }

  const content = getNicheContent(lead.niche);
  const displayName = professionalizeName(lead.company_name, lead.niche);
  const gallery = getGalleryImages(lead.niche);
  const colors = getNicheColors(lead.niche);
  const whatsappLink = `https://wa.me/${lead.phone}?text=${encodeURIComponent(content.whatsappMessage)}`;
  const mapsQuery = encodeURIComponent(`${displayName} ${lead.city}`);
  const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/${mapsQuery}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(mapsLink)}`;

  // Dynamic niche color CSS variables
  const nicheStyle = {
    "--niche-primary": colors.primary,
    "--niche-primary-fg": colors.primaryForeground,
    "--niche-accent": colors.accent,
    "--niche-secondary": colors.secondary,
  } as React.CSSProperties;

  return (
    <div
      style={nicheStyle}
      className="[--primary:var(--niche-primary)] [--primary-foreground:var(--niche-primary-fg)] [--accent:var(--niche-accent)] [--gold:var(--niche-accent)] [--secondary:var(--niche-secondary)]"
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-5 py-3 max-w-5xl mx-auto">
          <h1 className="font-display text-xl font-semibold tracking-tight text-foreground">
            {displayName}
          </h1>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded transition-colors"
            style={{ backgroundColor: `hsl(${colors.primary})`, color: `hsl(${colors.primaryForeground})` }}
          >
            <MessageCircle className="w-4 h-4" />
            {content.ctaText}
          </a>
        </div>
      </header>

      <main className="pt-[52px]">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-end">
          <img
            src={content.heroImage}
            alt={`${displayName} - ${lead.niche} em ${lead.city}`}
            className="absolute inset-0 w-full h-full object-cover"
            width={1280}
            height={832}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
          <div className="relative z-10 px-5 pb-16 md:pb-24 max-w-5xl mx-auto w-full">
            <div className="w-16 h-0.5 mb-6" style={{ backgroundColor: `hsl(${colors.accent})` }} />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4 whitespace-pre-line" style={{ color: `hsl(${colors.primaryForeground})` }}>
              {content.heroTitle}
            </h2>
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="w-4 h-4" style={{ color: `hsl(${colors.accent})` }} />
              <span className="text-white/80 text-sm font-medium">{lead.city}</span>
            </div>
            <p className="text-white/75 text-base md:text-lg max-w-md mb-10 font-body">
              {content.heroSubtitle}
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded transition-all hover:brightness-110 shadow-lg"
              style={{ backgroundColor: `hsl(${colors.accent})`, color: `hsl(${colors.primary})` }}
            >
              <MessageCircle className="w-5 h-5" />
              Agendar agora
            </a>
          </div>
        </section>

        {/* About */}
        <section className="py-20 px-5 md:px-8 lg:px-16 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <p className="uppercase text-xs tracking-[0.2em] font-medium mb-3" style={{ color: `hsl(${colors.accent})` }}>{content.aboutLabel}</p>
            <h2 className="salon-heading mb-5 whitespace-pre-line">{content.aboutHeading}</h2>
            <div className="w-16 h-0.5 mx-auto mb-8" style={{ backgroundColor: `hsl(${colors.accent})` }} />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{content.aboutText}</p>
          </div>
        </section>

        {/* Gallery */}
        <LeadSiteGallery
          images={gallery}
          label="Nosso espaço"
          heading="Conheça nossa estrutura"
        />

        {/* Services */}
        <section className="py-20" style={{ backgroundColor: `hsl(${colors.secondary})` }}>
          <div className="px-5 md:px-8 lg:px-16 max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="uppercase text-xs tracking-[0.2em] font-medium mb-3" style={{ color: `hsl(${colors.accent})` }}>{content.servicesLabel}</p>
              <h2 className="salon-heading mb-5">{content.servicesHeading}</h2>
              <div className="w-16 h-0.5 mx-auto" style={{ backgroundColor: `hsl(${colors.accent})` }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.services.map((s) => (
                <div key={s.title} className="bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews / Social Proof */}
        <section className="py-20 px-5 md:px-8 lg:px-16 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase text-xs tracking-[0.2em] font-medium mb-3" style={{ color: `hsl(${colors.accent})` }}>Depoimentos</p>
            <h2 className="salon-heading mb-5">Clientes satisfeitos</h2>
            <div className="w-16 h-0.5 mx-auto mb-5" style={{ backgroundColor: `hsl(${colors.accent})` }} />
            {content.reviewCount > 0 && (
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5" style={{ fill: `hsl(${colors.accent})`, color: `hsl(${colors.accent})` }} />
                  ))}
                </div>
                <span className="text-muted-foreground text-sm font-medium">
                  {content.reviewCount} avaliações
                </span>
              </div>
            )}
          </div>
          {content.reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.reviews.map((r) => (
                <div key={r.name} className="rounded-lg p-8 shadow-sm" style={{ backgroundColor: `hsl(${colors.secondary})` }}>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4" style={{ fill: `hsl(${colors.accent})`, color: `hsl(${colors.accent})` }} />
                    ))}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed mb-5 italic">"{r.text}"</p>
                  <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">— {r.name}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground text-lg">Seja o primeiro cliente a avaliar!</p>
            </div>
          )}
        </section>

        {/* Google Maps */}
        <section className="py-20" style={{ backgroundColor: `hsl(${colors.secondary})` }}>
          <div className="px-5 md:px-8 lg:px-16 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="uppercase text-xs tracking-[0.2em] font-medium mb-3" style={{ color: `hsl(${colors.accent})` }}>Localização</p>
              <h2 className="salon-heading mb-5">Onde estamos</h2>
              <div className="w-16 h-0.5 mx-auto" style={{ backgroundColor: `hsl(${colors.accent})` }} />
            </div>
            <div className="rounded-lg overflow-hidden mb-8 shadow-md">
              <iframe
                title={`Localização de ${displayName}`}
                src={mapsEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="text-center">
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg transition-colors"
                style={{ backgroundColor: `hsl(${colors.primary})`, color: `hsl(${colors.primaryForeground})` }}
              >
                <ExternalLink className="w-4 h-4" />
                Ver no Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* QR Code */}
        <section className="py-20 px-5 md:px-8 lg:px-16 max-w-5xl mx-auto">
          <div className="text-center max-w-md mx-auto">
            <p className="uppercase text-xs tracking-[0.2em] font-medium mb-3" style={{ color: `hsl(${colors.accent})` }}>Avalie-nos</p>
            <h2 className="salon-heading mb-5">Sua opinião importa</h2>
            <div className="w-16 h-0.5 mx-auto mb-8" style={{ backgroundColor: `hsl(${colors.accent})` }} />
            <p className="text-muted-foreground text-sm mb-8">
              Escaneie o QR Code e avalie no Google
            </p>
            <div className="inline-block bg-white p-5 rounded-xl shadow-lg">
              <img
                src={qrCodeUrl}
                alt="QR Code para avaliar no Google"
                width={200}
                height={200}
                loading="lazy"
                className="block"
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20" style={{ backgroundColor: `hsl(${colors.primary})` }}>
          <div className="px-5 md:px-8 lg:px-16 max-w-5xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5" style={{ color: `hsl(${colors.primaryForeground})` }}>
              Pronto para começar?
            </h2>
            <p className="text-base md:text-lg max-w-md mx-auto mb-10 font-body" style={{ color: `hsl(${colors.primaryForeground} / 0.7)` }}>
              Entre em contato agora mesmo e agende seu horário.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-5 text-lg font-semibold rounded-lg transition-all hover:brightness-110 shadow-xl"
              style={{ backgroundColor: `hsl(${colors.accent})`, color: `hsl(${colors.primary})` }}
            >
              <MessageCircle className="w-6 h-6" />
              {content.ctaText}
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: `hsl(${colors.primary})` }}>
        <div className="px-5 md:px-8 lg:px-16 max-w-5xl mx-auto py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-display text-lg font-semibold mb-4" style={{ color: `hsl(${colors.primaryForeground})` }}>{displayName}</h3>
              <p className="text-sm leading-relaxed" style={{ color: `hsl(${colors.primaryForeground} / 0.7)` }}>{content.footerTagline}</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm" style={{ color: `hsl(${colors.primaryForeground} / 0.8)` }}>
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: `hsl(${colors.accent})` }} />
                <span>{lead.city}</span>
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: `hsl(${colors.primaryForeground} / 0.8)` }}>
                <Phone className="w-4 h-4 shrink-0" style={{ color: `hsl(${colors.accent})` }} />
                <span>{lead.phone}</span>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-3 text-sm" style={{ color: `hsl(${colors.primaryForeground} / 0.8)` }}>
                <Clock className="w-4 h-4 mt-0.5 shrink-0" style={{ color: `hsl(${colors.accent})` }} />
                <div>
                  <p>Seg a Sex: 9h às 20h</p>
                  <p>Sáb: 9h às 18h</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 text-center" style={{ borderTop: `1px solid hsl(${colors.primaryForeground} / 0.1)` }}>
            <p className="text-xs" style={{ color: `hsl(${colors.primaryForeground} / 0.5)` }}>
              © {new Date().getFullYear()} {displayName}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default LeadSite;

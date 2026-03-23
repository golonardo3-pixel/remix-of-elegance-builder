import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { getNicheContent } from "@/lib/niche-content";
import { MessageCircle, Star, MapPin, Phone, Clock } from "lucide-react";

// Reuses the same template design as the original salon site
// but dynamically replaces content based on lead data

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
  const whatsappLink = `https://wa.me/${lead.phone}?text=${encodeURIComponent("Olá! Gostaria de agendar um horário.")}`;

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-5 py-3 max-w-5xl mx-auto">
          <h1 className="font-display text-xl font-semibold tracking-tight text-foreground">
            {lead.company_name}
          </h1>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm font-medium rounded transition-colors hover:bg-primary/90"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar
          </a>
        </div>
      </header>

      <main className="pt-[52px]">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end bg-primary">
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
          <div className="relative z-10 px-5 pb-12 md:pb-20 max-w-5xl mx-auto w-full">
            <div className="gold-divider mb-5 mx-0" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-4 whitespace-pre-line">
              {content.heroTitle}
            </h2>
            <p className="text-primary-foreground/80 text-base md:text-lg max-w-md mb-8 font-body">
              {content.heroSubtitle}
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-foreground px-6 py-3 font-medium rounded transition-all hover:brightness-110"
            >
              <MessageCircle className="w-5 h-5" />
              Agende pelo WhatsApp
            </a>
          </div>
        </section>

        {/* About */}
        <section className="salon-section">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gold uppercase text-xs tracking-[0.2em] font-medium mb-3">{content.aboutLabel}</p>
            <h2 className="salon-heading mb-4 whitespace-pre-line">{content.aboutHeading}</h2>
            <div className="gold-divider mb-6" />
            <p className="salon-subheading">{content.aboutText}</p>
          </div>
        </section>

        {/* Services */}
        <section className="bg-secondary py-16">
          <div className="px-5 md:px-8 lg:px-16 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gold uppercase text-xs tracking-[0.2em] font-medium mb-3">{content.servicesLabel}</p>
              <h2 className="salon-heading mb-4">{content.servicesHeading}</h2>
              <div className="gold-divider" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {content.services.map((s) => (
                <div key={s.title} className="bg-background rounded p-6">
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="salon-section">
          <div className="text-center mb-12">
            <p className="text-gold uppercase text-xs tracking-[0.2em] font-medium mb-3">Depoimentos</p>
            <h2 className="salon-heading mb-4">O que nossos clientes dizem</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.reviews.map((r) => (
              <div key={r.name} className="bg-secondary rounded p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4 italic">"{r.text}"</p>
                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">— {r.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="px-5 md:px-8 lg:px-16 max-w-5xl mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-lg font-semibold mb-3">{lead.company_name}</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">{content.footerTagline}</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <span>{lead.city}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4 shrink-0 text-gold" />
                <span>{lead.phone}</span>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <div>
                  <p>Seg a Sex: 9h às 20h</p>
                  <p>Sáb: 9h às 18h</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
            <p className="text-primary-foreground/50 text-xs">
              © {new Date().getFullYear()} {lead.company_name}. Todos os direitos reservados.
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
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </a>
    </>
  );
};

export default LeadSite;

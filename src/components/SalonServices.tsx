import serviceHair from "@/assets/service-hair.jpg";
import serviceNails from "@/assets/service-nails.jpg";
import serviceSkin from "@/assets/service-skin.jpg";
import serviceMakeup from "@/assets/service-makeup.jpg";

const services = [
  {
    title: "Cabelos",
    desc: "Cortes, coloração, mechas e tratamentos capilares com produtos premium.",
    image: serviceHair,
    alt: "Resultado de cabelo com brilho e movimento",
  },
  {
    title: "Unhas",
    desc: "Manicure, pedicure, alongamento em gel e nail art personalizada.",
    image: serviceNails,
    alt: "Manicure elegante com acabamento perfeito",
  },
  {
    title: "Estética Facial",
    desc: "Limpeza de pele, hidratação profunda, peeling e protocolos anti-idade.",
    image: serviceSkin,
    alt: "Produtos premium de cuidados com a pele",
  },
  {
    title: "Maquiagem",
    desc: "Maquiagem social, para noivas, debutantes e produções especiais.",
    image: serviceMakeup,
    alt: "Aplicação de maquiagem profissional",
  },
];

const SalonServices = () => (
  <section className="bg-secondary py-16">
    <div className="px-5 md:px-8 lg:px-16 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-gold uppercase text-xs tracking-[0.2em] font-medium mb-3">Nossos serviços</p>
        <h2 className="salon-heading mb-4">Feitos para você brilhar</h2>
        <div className="gold-divider" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {services.map((s) => (
          <div key={s.title} className="group relative overflow-hidden rounded bg-background">
            <img
              src={s.image}
              alt={s.alt}
              loading="lazy"
              width={640}
              height={640}
              className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-5">
              <h3 className="font-display text-lg font-semibold mb-1 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SalonServices;

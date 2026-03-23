import { Star } from "lucide-react";

const reviews = [
  {
    name: "Camila R.",
    text: "Melhor salão que já fui! A equipe é super atenciosa e o resultado ficou incrível. Meu cabelo nunca esteve tão bonito.",
    rating: 5,
  },
  {
    name: "Fernanda S.",
    text: "Fiz minhas mechas e amei o resultado. Ambiente lindo, aconchegante e com um atendimento impecável do início ao fim.",
    rating: 5,
  },
  {
    name: "Juliana M.",
    text: "A maquiagem do meu casamento ficou perfeita e durou a noite toda. Recomendo de olhos fechados!",
    rating: 5,
  },
];

const SalonReviews = () => (
  <section className="salon-section">
    <div className="text-center mb-12">
      <p className="text-gold uppercase text-xs tracking-[0.2em] font-medium mb-3">Depoimentos</p>
      <h2 className="salon-heading mb-4">O que nossas clientes dizem</h2>
      <div className="gold-divider" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {reviews.map((r) => (
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
);

export default SalonReviews;

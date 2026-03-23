import heroImage from "@/assets/hero-salon.jpg";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de agendar um horário.");

const SalonHero = () => (
  <section className="relative min-h-[85vh] flex items-end">
    <img
      src={heroImage}
      alt="Interior do Studio Élise - salão de beleza premium"
      className="absolute inset-0 w-full h-full object-cover"
      width={1280}
      height={832}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
    <div className="relative z-10 px-5 pb-12 md:pb-20 max-w-5xl mx-auto w-full">
      <div className="gold-divider mb-5 mx-0" />
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight mb-4">
        Sua beleza merece<br />um cuidado exclusivo
      </h2>
      <p className="text-primary-foreground/80 text-base md:text-lg max-w-md mb-8 font-body">
        Transformações que realçam o que você tem de mais bonito, com técnicas premium e atendimento personalizado.
      </p>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-gold text-foreground px-6 py-3 font-medium rounded transition-all hover:brightness-110"
      >
        <MessageCircle className="w-5 h-5" />
        Agende pelo WhatsApp
      </a>
    </div>
  </section>
);

export default SalonHero;

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de agendar um horário.");

const SalonHeader = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
    <div className="flex items-center justify-between px-5 py-3 max-w-5xl mx-auto">
      <h1 className="font-display text-xl font-semibold tracking-tight text-foreground">
        Studio <span className="text-gold">Élise</span>
      </h1>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm font-medium rounded transition-colors hover:bg-primary/90"
      >
        <MessageCircle className="w-4 h-4" />
        Agendar
      </a>
    </div>
  </header>
);

export default SalonHeader;

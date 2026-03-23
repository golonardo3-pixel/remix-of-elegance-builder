import { MapPin, Phone, Clock } from "lucide-react";

const SalonFooter = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="px-5 md:px-8 lg:px-16 max-w-5xl mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-lg font-semibold mb-3">
            Studio <span className="text-gold">Élise</span>
          </h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Beleza, sofisticação e cuidado em cada detalhe.
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
            <span>Rua das Flores, 123 — Centro<br />São Paulo, SP</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-primary-foreground/80">
            <Phone className="w-4 h-4 shrink-0 text-gold" />
            <span>(11) 99999-9999</span>
          </div>
        </div>
        <div>
          <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
            <Clock className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
            <div>
              <p>Seg a Sex: 9h às 20h</p>
              <p>Sáb: 9h às 18h</p>
              <p>Dom: Fechado</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
        <p className="text-primary-foreground/50 text-xs">
          © {new Date().getFullYear()} Studio Élise. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default SalonFooter;

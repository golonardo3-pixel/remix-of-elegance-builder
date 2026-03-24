// Content templates per niche for dynamic site generation
import heroSalon from "@/assets/hero-salon.jpg";
import heroBarbershop from "@/assets/hero-barbershop.jpg";
import heroDental from "@/assets/hero-dental.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import heroGym from "@/assets/hero-gym.jpg";
import heroDefault from "@/assets/hero-default.jpg";

export interface NicheContent {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  aboutLabel: string;
  aboutHeading: string;
  aboutText: string;
  servicesLabel: string;
  servicesHeading: string;
  services: { title: string; desc: string }[];
  reviews: { name: string; text: string; rating: number }[];
  reviewCount: number;
  footerTagline: string;
  ctaText: string;
  whatsappMessage: string;
}

const nicheContentMap: Record<string, NicheContent> = {
  "salão de beleza": {
    heroTitle: "Sua beleza merece\num cuidado exclusivo",
    heroSubtitle: "Transformações que realçam o que você tem de mais bonito, com técnicas premium e atendimento personalizado.",
    heroImage: heroSalon,
    aboutLabel: "Sobre nós",
    aboutHeading: "Mais do que um salão,\numa experiência",
    aboutText: "Com mais de 8 anos de experiência, nossa equipe combina técnicas atualizadas com produtos de alta performance para entregar resultados que você vai amar. Do corte à coloração, cada detalhe é pensado para você.",
    servicesLabel: "Nossos serviços",
    servicesHeading: "Feitos para você brilhar",
    services: [
      { title: "Cabelos", desc: "Cortes, coloração, mechas e tratamentos capilares com produtos premium." },
      { title: "Unhas", desc: "Manicure, pedicure, alongamento em gel e nail art personalizada." },
      { title: "Estética Facial", desc: "Limpeza de pele, hidratação profunda, peeling e protocolos anti-idade." },
      { title: "Maquiagem", desc: "Maquiagem social, para noivas, debutantes e produções especiais." },
    ],
    reviews: [
      { name: "Camila R.", text: "Melhor salão que já fui! A equipe é super atenciosa e o resultado ficou incrível.", rating: 5 },
      { name: "Fernanda S.", text: "Fiz minhas mechas e amei o resultado. Ambiente lindo e atendimento impecável.", rating: 5 },
      { name: "Juliana M.", text: "A maquiagem do meu casamento ficou perfeita e durou a noite toda!", rating: 5 },
    ],
    reviewCount: 127,
    footerTagline: "Beleza, sofisticação e cuidado em cada detalhe.",
    ctaText: "Agendar agora",
    whatsappMessage: "Olá! Gostaria de agendar um horário no salão.",
  },
  "barbearia": {
    heroTitle: "Estilo e atitude\nno mesmo lugar",
    heroSubtitle: "Cortes precisos, barba impecável e um ambiente feito para quem valoriza o cuidado pessoal.",
    heroImage: heroBarbershop,
    aboutLabel: "Sobre nós",
    aboutHeading: "Mais do que uma barbearia,\num ritual masculino",
    aboutText: "Um espaço pensado para o homem moderno que não abre mão de estilo. Nossa equipe é especializada em cortes clássicos e contemporâneos, barba modelada e tratamentos exclusivos.",
    servicesLabel: "Nossos serviços",
    servicesHeading: "Precisão em cada detalhe",
    services: [
      { title: "Corte Masculino", desc: "Cortes modernos e clássicos com acabamento perfeito." },
      { title: "Barba", desc: "Barba modelada, aparada e hidratada com produtos premium." },
      { title: "Pigmentação", desc: "Pigmentação capilar para um visual mais denso e natural." },
      { title: "Tratamentos", desc: "Hidratação capilar, limpeza de pele e cuidados especiais." },
    ],
    reviews: [
      { name: "Ricardo L.", text: "Melhor barbearia da cidade! Corte impecável e ambiente top.", rating: 5 },
      { name: "Lucas M.", text: "Barba e corte sempre no ponto. Recomendo demais!", rating: 5 },
      { name: "André P.", text: "Atendimento diferenciado, saio sempre satisfeito.", rating: 5 },
    ],
    reviewCount: 89,
    footerTagline: "Estilo, precisão e atitude masculina.",
    ctaText: "Agendar horário",
    whatsappMessage: "Olá! Quero agendar um corte.",
  },
  "clínica odontológica": {
    heroTitle: "Seu sorriso merece\no melhor cuidado",
    heroSubtitle: "Tratamentos odontológicos modernos com tecnologia de ponta e atendimento humanizado.",
    heroImage: heroDental,
    aboutLabel: "Sobre nós",
    aboutHeading: "Odontologia moderna\ncom toque humano",
    aboutText: "Nossa clínica oferece tratamentos completos com equipamentos de última geração. Cada procedimento é planejado para garantir conforto, segurança e resultados naturais.",
    servicesLabel: "Tratamentos",
    servicesHeading: "Cuidados completos para seu sorriso",
    services: [
      { title: "Clareamento", desc: "Clareamento dental profissional com resultados visíveis e duradouros." },
      { title: "Implantes", desc: "Implantes dentários com planejamento digital e precisão cirúrgica." },
      { title: "Ortodontia", desc: "Aparelhos fixos, alinhadores invisíveis e ortodontia estética." },
      { title: "Lentes de Contato", desc: "Lentes de contato dental para um sorriso perfeito e harmônico." },
    ],
    reviews: [
      { name: "Mariana T.", text: "Fiz meu clareamento aqui e o resultado superou todas as expectativas!", rating: 5 },
      { name: "Carlos H.", text: "Equipe incrível, atendimento humanizado e muito profissional.", rating: 5 },
      { name: "Patrícia A.", text: "Meus implantes ficaram perfeitos. Recomendo de olhos fechados!", rating: 5 },
    ],
    reviewCount: 203,
    footerTagline: "Saúde e beleza para o seu sorriso.",
    ctaText: "Agendar consulta",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta.",
  },
  "restaurante": {
    heroTitle: "Sabores que contam\nhistórias",
    heroSubtitle: "Uma experiência gastronômica única com ingredientes selecionados e um ambiente acolhedor.",
    heroImage: heroRestaurant,
    aboutLabel: "Sobre nós",
    aboutHeading: "Mais do que comida,\numa experiência",
    aboutText: "Cada prato é preparado com carinho e ingredientes frescos, combinando tradição e inovação. Nosso ambiente foi pensado para proporcionar momentos especiais em cada refeição.",
    servicesLabel: "Nosso cardápio",
    servicesHeading: "Pratos que encantam",
    services: [
      { title: "Entradas", desc: "Opções sofisticadas para abrir o apetite com elegância." },
      { title: "Pratos Principais", desc: "Receitas autorais com ingredientes frescos e selecionados." },
      { title: "Sobremesas", desc: "Doces artesanais que são o encerramento perfeito da refeição." },
      { title: "Drinks", desc: "Coquetéis exclusivos e uma carta de vinhos cuidadosamente selecionada." },
    ],
    reviews: [
      { name: "Ana C.", text: "Comida maravilhosa! Ambiente perfeito para um jantar especial.", rating: 5 },
      { name: "Roberto F.", text: "Os pratos são incríveis e o atendimento é impecável.", rating: 5 },
      { name: "Beatriz L.", text: "Melhor restaurante da região! Voltarei com certeza.", rating: 5 },
    ],
    reviewCount: 156,
    footerTagline: "Sabor, tradição e momentos inesquecíveis.",
    ctaText: "Fazer reserva",
    whatsappMessage: "Olá! Gostaria de fazer uma reserva.",
  },
  "academia": {
    heroTitle: "Seu corpo,\nsua melhor versão",
    heroSubtitle: "Treinos personalizados, equipamentos modernos e uma equipe que te motiva a superar seus limites.",
    heroImage: heroGym,
    aboutLabel: "Sobre nós",
    aboutHeading: "Mais do que uma academia,\num estilo de vida",
    aboutText: "Oferecemos uma estrutura completa com equipamentos de última geração, profissionais qualificados e um ambiente motivador para você alcançar seus objetivos de saúde e bem-estar.",
    servicesLabel: "Modalidades",
    servicesHeading: "Treinos que transformam",
    services: [
      { title: "Musculação", desc: "Equipamentos modernos e acompanhamento profissional personalizado." },
      { title: "Funcional", desc: "Treinos dinâmicos que trabalham força, resistência e mobilidade." },
      { title: "Spinning", desc: "Aulas energéticas de ciclismo indoor com instrutores motivadores." },
      { title: "Yoga", desc: "Práticas para equilíbrio, flexibilidade e bem-estar mental." },
    ],
    reviews: [
      { name: "Diego S.", text: "A melhor academia que já treinei! Instrutores excelentes.", rating: 5 },
      { name: "Larissa K.", text: "Mudou minha vida! Perdi 15kg com o acompanhamento deles.", rating: 5 },
      { name: "Felipe G.", text: "Equipamentos top e ambiente super motivador.", rating: 5 },
    ],
    reviewCount: 94,
    footerTagline: "Saúde, movimento e superação.",
    ctaText: "Agendar aula experimental",
    whatsappMessage: "Olá! Quero agendar uma aula experimental.",
  },
};

// Default fallback for unknown niches
const defaultContent: NicheContent = {
  heroTitle: "Excelência e qualidade\nno que fazemos",
  heroSubtitle: "Atendimento personalizado com profissionais qualificados e dedicados ao seu bem-estar.",
  heroImage: heroDefault,
  aboutLabel: "Sobre nós",
  aboutHeading: "Tradição e\ninovação juntas",
  aboutText: "Com anos de experiência no mercado, nossa equipe é referência em qualidade e atendimento. Cada cliente recebe atenção individualizada para garantir a melhor experiência possível.",
  servicesLabel: "Nossos serviços",
  servicesHeading: "O que oferecemos",
  services: [
    { title: "Atendimento Premium", desc: "Experiência personalizada do início ao fim." },
    { title: "Profissionais Qualificados", desc: "Equipe treinada e certificada para o melhor resultado." },
    { title: "Ambiente Acolhedor", desc: "Espaço pensado para seu conforto e bem-estar." },
    { title: "Tecnologia Moderna", desc: "Equipamentos e técnicas de última geração." },
  ],
  reviews: [],
  reviewCount: 0,
  footerTagline: "Qualidade e dedicação em cada detalhe.",
  ctaText: "Falar no WhatsApp",
  whatsappMessage: "Olá! Gostaria de mais informações.",
};

export function getNicheContent(niche: string): NicheContent {
  const key = niche.toLowerCase().trim();
  if (nicheContentMap[key]) return nicheContentMap[key];
  for (const [k, v] of Object.entries(nicheContentMap)) {
    if (key.includes(k) || k.includes(key)) return v;
  }
  return defaultContent;
}

export const availableNiches = Object.keys(nicheContentMap);

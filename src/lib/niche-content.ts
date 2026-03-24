// Content templates per niche for dynamic site generation
import heroSalon from "@/assets/hero-salon.jpg";
import heroBarbershop from "@/assets/hero-barbershop.jpg";
import heroDental from "@/assets/hero-dental.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import heroGym from "@/assets/hero-gym.jpg";
import heroDefault from "@/assets/hero-default.jpg";
import heroAesthetics from "@/assets/hero-aesthetics.jpg";
import heroPhysiotherapy from "@/assets/hero-physiotherapy.jpg";
import heroPetshop from "@/assets/hero-petshop.jpg";
import heroMechanic from "@/assets/hero-mechanic.jpg";
import heroBatteries from "@/assets/hero-batteries.jpg";
import heroMarmitaria from "@/assets/hero-marmitaria.jpg";
import heroRealestate from "@/assets/hero-realestate.jpg";
import heroAccounting from "@/assets/hero-accounting.jpg";

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
  nameSuffix?: string;
}

const nicheContentMap: Record<string, NicheContent> = {
  "salão de beleza": {
    heroTitle: "Especialistas em realçar\nsua beleza natural",
    heroSubtitle: "Cortes, coloração e tratamentos com técnicas premium e atendimento personalizado.",
    heroImage: heroSalon,
    aboutLabel: "Sobre nós",
    aboutHeading: "Beleza com técnica\ne dedicação",
    aboutText: "Nossa equipe combina anos de experiência com produtos de alta performance para entregar resultados que você vai amar. Cada detalhe é pensado para realçar o que você tem de melhor.",
    servicesLabel: "Nossos serviços",
    servicesHeading: "Feitos para você brilhar",
    services: [
      { title: "Cabelos", desc: "Cortes, coloração, mechas e tratamentos capilares com produtos premium." },
      { title: "Unhas", desc: "Manicure, pedicure, alongamento em gel e nail art personalizada." },
      { title: "Estética Facial", desc: "Limpeza de pele, hidratação profunda e protocolos anti-idade." },
      { title: "Maquiagem", desc: "Maquiagem social, para noivas, debutantes e produções especiais." },
    ],
    reviews: [
      { name: "Camila R.", text: "Melhor salão que já fui! A equipe é super atenciosa e o resultado ficou incrível.", rating: 5 },
      { name: "Fernanda S.", text: "Fiz minhas mechas e amei. Ambiente lindo e atendimento impecável.", rating: 5 },
      { name: "Juliana M.", text: "A maquiagem do meu casamento ficou perfeita e durou a noite toda!", rating: 5 },
    ],
    reviewCount: 127,
    footerTagline: "Beleza, sofisticação e cuidado em cada detalhe.",
    ctaText: "Agendar agora",
    whatsappMessage: "Olá! Gostaria de agendar um horário no salão.",
    nameSuffix: "Hair Studio",
  },
  "barbearia": {
    heroTitle: "Cortes precisos e\nbarba impecável",
    heroSubtitle: "Estilo e atitude com profissionais especializados no cuidado masculino.",
    heroImage: heroBarbershop,
    aboutLabel: "Sobre nós",
    aboutHeading: "Tradição e estilo\nmasculino",
    aboutText: "Espaço pensado para o homem que valoriza o cuidado pessoal. Equipe especializada em cortes clássicos e contemporâneos, barba modelada e tratamentos exclusivos.",
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
    nameSuffix: "Barber Shop",
  },
  "estética": {
    heroTitle: "Harmonização e estética\ncom resultados reais",
    heroSubtitle: "Procedimentos estéticos avançados com segurança, técnica e naturalidade.",
    heroImage: heroAesthetics,
    aboutLabel: "Sobre nós",
    aboutHeading: "Estética avançada\ncom responsabilidade",
    aboutText: "Utilizamos as técnicas mais modernas do mercado com equipamentos de ponta. Cada procedimento é planejado para realçar sua beleza de forma natural e segura.",
    servicesLabel: "Procedimentos",
    servicesHeading: "Tratamentos que transformam",
    services: [
      { title: "Harmonização Facial", desc: "Preenchimento labial, malar e mandibular com ácido hialurônico." },
      { title: "Botox", desc: "Toxina botulínica para suavização de rugas e linhas de expressão." },
      { title: "Limpeza de Pele", desc: "Limpeza profunda com extração, peeling e hidratação intensiva." },
      { title: "Microagulhamento", desc: "Estímulo de colágeno para rejuvenescimento e tratamento de cicatrizes." },
    ],
    reviews: [
      { name: "Isabela F.", text: "Resultado super natural! A profissional é muito cuidadosa.", rating: 5 },
      { name: "Renata C.", text: "Fiz harmonização e amei. Atendimento excelente.", rating: 5 },
      { name: "Priscila D.", text: "Ambiente impecável e resultados incríveis.", rating: 5 },
    ],
    reviewCount: 78,
    footerTagline: "Beleza natural com técnica e segurança.",
    ctaText: "Agendar avaliação",
    whatsappMessage: "Olá! Gostaria de agendar uma avaliação estética.",
    nameSuffix: "Estética Avançada",
  },
  "clínica odontológica": {
    heroTitle: "Seu sorriso merece\no melhor tratamento",
    heroSubtitle: "Odontologia moderna com tecnologia de ponta e atendimento humanizado.",
    heroImage: heroDental,
    aboutLabel: "Sobre nós",
    aboutHeading: "Cuidado dental\ncom excelência",
    aboutText: "Tratamentos completos com equipamentos de última geração. Cada procedimento é planejado para garantir conforto, segurança e resultados naturais.",
    servicesLabel: "Tratamentos",
    servicesHeading: "Cuidados completos para seu sorriso",
    services: [
      { title: "Clareamento", desc: "Clareamento dental profissional com resultados visíveis e duradouros." },
      { title: "Implantes", desc: "Implantes dentários com planejamento digital e precisão cirúrgica." },
      { title: "Ortodontia", desc: "Aparelhos fixos, alinhadores invisíveis e ortodontia estética." },
      { title: "Lentes de Contato", desc: "Lentes de contato dental para um sorriso perfeito e harmônico." },
    ],
    reviews: [
      { name: "Mariana T.", text: "Fiz meu clareamento aqui e o resultado superou minhas expectativas!", rating: 5 },
      { name: "Carlos H.", text: "Equipe incrível, atendimento humanizado e profissional.", rating: 5 },
      { name: "Patrícia A.", text: "Meus implantes ficaram perfeitos. Recomendo!", rating: 5 },
    ],
    reviewCount: 203,
    footerTagline: "Saúde e beleza para o seu sorriso.",
    ctaText: "Agendar consulta",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta.",
    nameSuffix: "Odontologia",
  },
  "fisioterapia": {
    heroTitle: "Recuperação e bem-estar\ncom tratamento especializado",
    heroSubtitle: "Fisioterapia personalizada para reabilitação, alívio de dores e qualidade de vida.",
    heroImage: heroPhysiotherapy,
    aboutLabel: "Sobre nós",
    aboutHeading: "Cuidado especializado\npara seu corpo",
    aboutText: "Profissionais qualificados com abordagem individualizada. Cada sessão é planejada para acelerar sua recuperação e melhorar sua qualidade de vida.",
    servicesLabel: "Especialidades",
    servicesHeading: "Tratamentos especializados",
    services: [
      { title: "Ortopédica", desc: "Reabilitação de lesões musculares, articulares e pós-operatórias." },
      { title: "Pilates Clínico", desc: "Fortalecimento e correção postural com acompanhamento profissional." },
      { title: "Terapia Manual", desc: "Técnicas manuais para alívio de dores e tensões musculares." },
      { title: "RPG", desc: "Reeducação postural global para correção e prevenção de problemas." },
    ],
    reviews: [
      { name: "Roberto N.", text: "Recuperei meu joelho em poucas semanas. Profissionais excelentes!", rating: 5 },
      { name: "Sandra L.", text: "O pilates mudou minha postura. Me sinto muito melhor.", rating: 5 },
      { name: "Marcos V.", text: "Atendimento personalizado e resultados rápidos.", rating: 5 },
    ],
    reviewCount: 64,
    footerTagline: "Movimento, recuperação e qualidade de vida.",
    ctaText: "Agendar sessão",
    whatsappMessage: "Olá! Gostaria de agendar uma sessão de fisioterapia.",
    nameSuffix: "Fisioterapia",
  },
  "pet shop": {
    heroTitle: "Cuidado completo\npara seu pet",
    heroSubtitle: "Banho, tosa, veterinário e tudo que seu animal de estimação precisa.",
    heroImage: heroPetshop,
    aboutLabel: "Sobre nós",
    aboutHeading: "Amor e cuidado\ncom seu melhor amigo",
    aboutText: "Tratamos cada pet como se fosse nosso. Equipe apaixonada por animais com estrutura completa para banho, tosa, consultas veterinárias e produtos de qualidade.",
    servicesLabel: "Nossos serviços",
    servicesHeading: "Tudo para o seu pet",
    services: [
      { title: "Banho e Tosa", desc: "Banho completo com produtos hipoalergênicos e tosa personalizada." },
      { title: "Veterinário", desc: "Consultas, vacinas, exames e acompanhamento de saúde animal." },
      { title: "Ração e Acessórios", desc: "Rações premium, brinquedos, camas e acessórios selecionados." },
      { title: "Hotel Pet", desc: "Hospedagem segura e confortável para seu pet enquanto você viaja." },
    ],
    reviews: [
      { name: "Daniela P.", text: "Meu cachorro ama ir lá! Equipe super carinhosa.", rating: 5 },
      { name: "Gustavo R.", text: "Melhor pet shop da região. Produtos de qualidade e bom preço.", rating: 5 },
      { name: "Tatiana S.", text: "A veterinária é excelente. Cuida do meu gato com muito carinho.", rating: 5 },
    ],
    reviewCount: 112,
    footerTagline: "Carinho e cuidado para quem você mais ama.",
    ctaText: "Agendar banho",
    whatsappMessage: "Olá! Gostaria de agendar um banho para meu pet.",
    nameSuffix: "Pet Shop",
  },
  "oficina mecânica": {
    heroTitle: "Mecânica de confiança\ncom garantia de serviço",
    heroSubtitle: "Diagnóstico preciso, manutenção preventiva e reparos com peças de qualidade.",
    heroImage: heroMechanic,
    aboutLabel: "Sobre nós",
    aboutHeading: "Confiança e qualidade\nno seu veículo",
    aboutText: "Mecânicos experientes com equipamentos de diagnóstico moderno. Trabalhamos com transparência, mostrando cada etapa do serviço para sua total confiança.",
    servicesLabel: "Nossos serviços",
    servicesHeading: "Serviços automotivos completos",
    services: [
      { title: "Revisão Completa", desc: "Revisão geral com checklist de todos os sistemas do veículo." },
      { title: "Motor e Câmbio", desc: "Reparo e manutenção de motor, câmbio e sistema de transmissão." },
      { title: "Suspensão e Freios", desc: "Troca de amortecedores, pastilhas, discos e alinhamento." },
      { title: "Ar Condicionado", desc: "Carga de gás, limpeza de dutos e manutenção do sistema." },
    ],
    reviews: [
      { name: "Rodrigo A.", text: "Oficina honesta e competente. Sempre levo meu carro lá.", rating: 5 },
      { name: "Paulo C.", text: "Fizeram a revisão completa rápido e com ótimo preço.", rating: 5 },
      { name: "Marcelo F.", text: "Consertaram um problema que outras oficinas não acharam.", rating: 5 },
    ],
    reviewCount: 76,
    footerTagline: "Confiança e qualidade no cuidado do seu veículo.",
    ctaText: "Agendar serviço",
    whatsappMessage: "Olá! Gostaria de agendar um serviço para meu veículo.",
    nameSuffix: "Auto Center",
  },
  "baterias": {
    heroTitle: "Baterias automotivas\ncom entrega e instalação",
    heroSubtitle: "As melhores marcas com garantia de fábrica. Entrega rápida e instalação no local.",
    heroImage: heroBatteries,
    aboutLabel: "Sobre nós",
    aboutHeading: "Especialistas em\nbaterias automotivas",
    aboutText: "Trabalhamos com as melhores marcas do mercado: Moura, Heliar, Zetta e ACDelco. Entrega e instalação rápida para você não ficar na mão.",
    servicesLabel: "Nossos serviços",
    servicesHeading: "Soluções em baterias",
    services: [
      { title: "Baterias para Carros", desc: "Baterias novas para todos os modelos com garantia de fábrica." },
      { title: "Baterias para Motos", desc: "Baterias específicas para motos com instalação inclusa." },
      { title: "Carga e Teste", desc: "Teste de bateria gratuito e serviço de carga quando possível." },
      { title: "Entrega Expressa", desc: "Entrega e instalação no local em até 40 minutos." },
    ],
    reviews: [
      { name: "João V.", text: "Entregaram e instalaram em 30 minutos. Serviço excelente!", rating: 5 },
      { name: "Eduardo M.", text: "Melhor preço da região e bateria de qualidade.", rating: 5 },
      { name: "Fábio L.", text: "Atendimento rápido, resolveram meu problema na hora.", rating: 5 },
    ],
    reviewCount: 58,
    footerTagline: "Energia e confiança para o seu veículo.",
    ctaText: "Pedir orçamento",
    whatsappMessage: "Olá! Preciso de uma bateria. Qual o preço?",
    nameSuffix: "Baterias",
  },
  "restaurante": {
    heroTitle: "Sabores autênticos\ne ingredientes frescos",
    heroSubtitle: "Pratos preparados com carinho, ingredientes selecionados e um ambiente acolhedor.",
    heroImage: heroRestaurant,
    aboutLabel: "Sobre nós",
    aboutHeading: "Gastronomia feita\ncom paixão",
    aboutText: "Cada prato é preparado com ingredientes frescos, combinando tradição e criatividade. Nosso ambiente foi pensado para proporcionar momentos especiais em cada refeição.",
    servicesLabel: "Nosso cardápio",
    servicesHeading: "Pratos que encantam",
    services: [
      { title: "Entradas", desc: "Opções variadas para abrir o apetite com sabor." },
      { title: "Pratos Principais", desc: "Receitas autorais com ingredientes frescos e selecionados." },
      { title: "Sobremesas", desc: "Doces artesanais que encerram a refeição com chave de ouro." },
      { title: "Drinks", desc: "Coquetéis exclusivos e carta de vinhos selecionada." },
    ],
    reviews: [
      { name: "Ana C.", text: "Comida maravilhosa! Ambiente perfeito para um jantar especial.", rating: 5 },
      { name: "Roberto F.", text: "Pratos incríveis e atendimento impecável.", rating: 5 },
      { name: "Beatriz L.", text: "Melhor restaurante da região! Voltarei com certeza.", rating: 5 },
    ],
    reviewCount: 156,
    footerTagline: "Sabor, tradição e momentos especiais.",
    ctaText: "Fazer reserva",
    whatsappMessage: "Olá! Gostaria de fazer uma reserva.",
  },
  "hamburgueria": {
    heroTitle: "Hambúrgueres artesanais\nde verdade",
    heroSubtitle: "Blend exclusivo, pão artesanal e ingredientes selecionados. Sabor que conquista.",
    heroImage: heroRestaurant,
    aboutLabel: "Sobre nós",
    aboutHeading: "Hambúrguer feito\ncom paixão",
    aboutText: "Nosso blend é preparado diariamente com carnes nobres. Cada hambúrguer é montado na hora com ingredientes frescos e combinações que surpreendem.",
    servicesLabel: "Cardápio",
    servicesHeading: "Nossos hambúrgueres",
    services: [
      { title: "Smash Burgers", desc: "Hambúrgueres prensados na chapa com crosta crocante e suculenta." },
      { title: "Burgers Premium", desc: "Blend de costela, fraldinha e acém com acompanhamentos especiais." },
      { title: "Combos", desc: "Hambúrguer + batata + bebida com preço especial." },
      { title: "Delivery", desc: "Entrega rápida na sua casa com embalagem que mantém a qualidade." },
    ],
    reviews: [
      { name: "Thiago R.", text: "Melhor hambúrguer que já comi! Blend absurdo.", rating: 5 },
      { name: "Camila N.", text: "Batata rústica e milk shake incríveis. Voltarei sempre!", rating: 5 },
      { name: "Diego S.", text: "Delivery rápido e hambúrguer chegou quente e perfeito.", rating: 5 },
    ],
    reviewCount: 134,
    footerTagline: "Hambúrgueres artesanais que conquistam.",
    ctaText: "Fazer pedido",
    whatsappMessage: "Olá! Quero fazer um pedido.",
  },
  "marmitaria": {
    heroTitle: "Comida caseira de qualidade\ntodo dia na sua mesa",
    heroSubtitle: "Marmitas frescas, saborosas e com porções generosas. Entrega rápida.",
    heroImage: heroMarmitaria,
    aboutLabel: "Sobre nós",
    aboutHeading: "Comida de verdade,\nfeita com carinho",
    aboutText: "Preparamos refeições completas todos os dias com ingredientes frescos e tempero caseiro. Porções generosas e opções variadas para seu almoço e jantar.",
    servicesLabel: "Cardápio",
    servicesHeading: "Nossas opções",
    services: [
      { title: "Marmita Tradicional", desc: "Arroz, feijão, salada, proteína e acompanhamento do dia." },
      { title: "Marmita Fitness", desc: "Opções com baixo carboidrato, grelhados e salada reforçada." },
      { title: "Marmita Executiva", desc: "Porção reforçada com duas proteínas e acompanhamentos extras." },
      { title: "Entrega", desc: "Entrega rápida no seu trabalho ou residência." },
    ],
    reviews: [
      { name: "Alessandra M.", text: "Comida caseira de verdade! Tempero perfeito e porção generosa.", rating: 5 },
      { name: "Bruno T.", text: "Peço todo dia pro trabalho. Sempre chega quente e no horário.", rating: 5 },
      { name: "Carla P.", text: "As marmitas fitness são ótimas. Sabor sem culpa!", rating: 5 },
    ],
    reviewCount: 87,
    footerTagline: "Comida caseira, fresca e com sabor de verdade.",
    ctaText: "Fazer pedido",
    whatsappMessage: "Olá! Gostaria de fazer um pedido de marmita.",
  },
  "academia": {
    heroTitle: "Treinos que transformam\nseu corpo e mente",
    heroSubtitle: "Equipamentos modernos, profissionais qualificados e ambiente motivador.",
    heroImage: heroGym,
    aboutLabel: "Sobre nós",
    aboutHeading: "Saúde e resultado\ncom acompanhamento",
    aboutText: "Estrutura completa com equipamentos de última geração, profissionais qualificados e ambiente motivador para você alcançar seus objetivos.",
    servicesLabel: "Modalidades",
    servicesHeading: "Treinos que transformam",
    services: [
      { title: "Musculação", desc: "Equipamentos modernos e acompanhamento profissional personalizado." },
      { title: "Funcional", desc: "Treinos dinâmicos que trabalham força, resistência e mobilidade." },
      { title: "Spinning", desc: "Aulas energéticas de ciclismo indoor com instrutores motivadores." },
      { title: "Yoga", desc: "Práticas para equilíbrio, flexibilidade e bem-estar mental." },
    ],
    reviews: [
      { name: "Diego S.", text: "Melhor academia que já treinei! Instrutores excelentes.", rating: 5 },
      { name: "Larissa K.", text: "Perdi 15kg com o acompanhamento deles. Mudou minha vida!", rating: 5 },
      { name: "Felipe G.", text: "Equipamentos top e ambiente super motivador.", rating: 5 },
    ],
    reviewCount: 94,
    footerTagline: "Saúde, movimento e superação.",
    ctaText: "Agendar aula experimental",
    whatsappMessage: "Olá! Quero agendar uma aula experimental.",
  },
  "imobiliária": {
    heroTitle: "O imóvel ideal\nestá aqui",
    heroSubtitle: "Compra, venda e locação com atendimento personalizado e consultoria especializada.",
    heroImage: heroRealestate,
    aboutLabel: "Sobre nós",
    aboutHeading: "Realizando sonhos\ncom segurança",
    aboutText: "Atuamos no mercado imobiliário com seriedade e transparência. Nossa equipe conhece cada detalhe da região para encontrar o imóvel perfeito para você.",
    servicesLabel: "Serviços",
    servicesHeading: "Como podemos ajudar",
    services: [
      { title: "Compra e Venda", desc: "Assessoria completa na compra e venda de imóveis residenciais e comerciais." },
      { title: "Locação", desc: "Administração de aluguéis com contratos seguros e suporte contínuo." },
      { title: "Avaliação", desc: "Avaliação de mercado para precificação justa do seu imóvel." },
      { title: "Financiamento", desc: "Orientação e simulação de financiamento com os melhores bancos." },
    ],
    reviews: [
      { name: "Marina B.", text: "Encontraram o apartamento perfeito para minha família!", rating: 5 },
      { name: "Carlos E.", text: "Processo de compra super tranquilo. Equipe muito profissional.", rating: 5 },
      { name: "Luciana R.", text: "Aluguei meu imóvel em menos de uma semana. Excelente!", rating: 5 },
    ],
    reviewCount: 145,
    footerTagline: "Seu próximo imóvel começa aqui.",
    ctaText: "Falar com corretor",
    whatsappMessage: "Olá! Tenho interesse em imóveis disponíveis.",
    nameSuffix: "Imóveis",
  },
  "contabilidade": {
    heroTitle: "Contabilidade que\nfaz seu negócio crescer",
    heroSubtitle: "Gestão contábil, fiscal e trabalhista com atendimento próximo e personalizado.",
    heroImage: heroAccounting,
    aboutLabel: "Sobre nós",
    aboutHeading: "Parceiros do seu\ncrescimento",
    aboutText: "Cuidamos da burocracia para você focar no que importa: seu negócio. Atendimento personalizado com soluções sob medida para cada tipo de empresa.",
    servicesLabel: "Serviços",
    servicesHeading: "Soluções contábeis completas",
    services: [
      { title: "Abertura de Empresa", desc: "Abertura de MEI, ME e demais tipos com orientação tributária." },
      { title: "Contabilidade Mensal", desc: "Escrituração contábil, balanços e demonstrações financeiras." },
      { title: "Departamento Pessoal", desc: "Folha de pagamento, admissão, rescisão e obrigações trabalhistas." },
      { title: "Planejamento Tributário", desc: "Análise e escolha do melhor regime tributário para sua empresa." },
    ],
    reviews: [
      { name: "Marcos R.", text: "Escritório sério e competente. Resolvem tudo rapidamente.", rating: 5 },
      { name: "Amanda S.", text: "Abriram minha empresa em poucos dias. Atendimento excelente.", rating: 5 },
      { name: "Pedro H.", text: "Economizei muito com o planejamento tributário deles.", rating: 5 },
    ],
    reviewCount: 92,
    footerTagline: "Contabilidade inteligente para seu negócio.",
    ctaText: "Falar com contador",
    whatsappMessage: "Olá! Gostaria de informações sobre serviços contábeis.",
    nameSuffix: "Contabilidade",
  },
};

// Default fallback for unknown niches
const defaultContent: NicheContent = {
  heroTitle: "Excelência e qualidade\nno que fazemos",
  heroSubtitle: "Atendimento personalizado com profissionais qualificados e dedicados ao seu bem-estar.",
  heroImage: heroDefault,
  aboutLabel: "Sobre nós",
  aboutHeading: "Tradição e\ninovação juntas",
  aboutText: "Com anos de experiência, nossa equipe é referência em qualidade e atendimento. Cada cliente recebe atenção individualizada para a melhor experiência possível.",
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

// Professional name transformation
const nicheNamePatterns: Record<string, (name: string) => string> = {
  "salão de beleza": (name) => `${name} Hair Studio`,
  "barbearia": (name) => `${name} Barber Shop`,
  "estética": (name) => `${name} Estética`,
  "clínica odontológica": (name) => `${name} Odontologia`,
  "fisioterapia": (name) => `${name} Fisioterapia`,
  "pet shop": (name) => `${name} Pet Shop`,
  "oficina mecânica": (name) => `${name} Auto Center`,
  "baterias": (name) => `${name} Baterias`,
  "imobiliária": (name) => `${name} Imóveis`,
  "contabilidade": (name) => `${name} Contabilidade`,
};

const professionalSuffixes = [
  "hair", "studio", "barber", "shop", "center", "auto", "pet",
  "clínica", "odonto", "estética", "fisio", "imóveis", "contabil",
  "baterias", "marmit", "burger", "grill", "fitness", "gym",
];

export function professionalizeName(rawName: string, niche: string): string {
  const name = rawName.trim();
  const lower = name.toLowerCase();

  // If the name already has a professional suffix, keep it
  if (professionalSuffixes.some((s) => lower.includes(s))) {
    return name;
  }

  const nicheKey = niche.toLowerCase().trim();

  // Find matching pattern
  for (const [k, transform] of Object.entries(nicheNamePatterns)) {
    if (nicheKey.includes(k) || k.includes(nicheKey)) {
      return transform(name);
    }
  }

  return name;
}

export const availableNiches = Object.keys(nicheContentMap);

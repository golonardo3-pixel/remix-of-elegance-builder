// Gallery images per niche - imported separately to keep niche-content.ts clean
import salon1 from "@/assets/gallery/salon-1.jpg";
import salon2 from "@/assets/gallery/salon-2.jpg";
import salon3 from "@/assets/gallery/salon-3.jpg";
import salon4 from "@/assets/gallery/salon-4.jpg";
import salon5 from "@/assets/gallery/salon-5.jpg";
import salon6 from "@/assets/gallery/salon-6.jpg";
import salon7 from "@/assets/gallery/salon-7.jpg";
import salon8 from "@/assets/gallery/salon-8.jpg";
import salon9 from "@/assets/gallery/salon-9.jpg";
import salon10 from "@/assets/gallery/salon-10.jpg";

import barber1 from "@/assets/gallery/barber-1.jpg";
import barber2 from "@/assets/gallery/barber-2.jpg";
import barber3 from "@/assets/gallery/barber-3.jpg";
import barber4 from "@/assets/gallery/barber-4.jpg";
import barber5 from "@/assets/gallery/barber-5.jpg";

import dental1 from "@/assets/gallery/dental-1.jpg";
import burger1 from "@/assets/gallery/burger-1.jpg";
import gym1 from "@/assets/gallery/gym-1.jpg";
import mechanic1 from "@/assets/gallery/mechanic-1.jpg";
import petshop1 from "@/assets/gallery/petshop-1.jpg";
import aesthetics1 from "@/assets/gallery/aesthetics-1.jpg";
import restaurant1 from "@/assets/gallery/restaurant-1.jpg";
import batteries1 from "@/assets/gallery/batteries-1.jpg";

// Hero images reused in gallery for extra variety
import heroSalon from "@/assets/hero-salon.jpg";
import heroBarbershop from "@/assets/hero-barbershop.jpg";
import heroDental from "@/assets/hero-dental.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import heroGym from "@/assets/hero-gym.jpg";
import heroAesthetics from "@/assets/hero-aesthetics.jpg";
import heroPetshop from "@/assets/hero-petshop.jpg";
import heroMechanic from "@/assets/hero-mechanic.jpg";
import heroBatteries from "@/assets/hero-batteries.jpg";
import heroMarmitaria from "@/assets/hero-marmitaria.jpg";
import heroRealestate from "@/assets/hero-realestate.jpg";
import heroAccounting from "@/assets/hero-accounting.jpg";
import heroPhysiotherapy from "@/assets/hero-physiotherapy.jpg";
import heroDefault from "@/assets/hero-default.jpg";

export interface GalleryImage {
  src: string;
  alt: string;
}

const galleryMap: Record<string, GalleryImage[]> = {
  "salão de beleza": [
    { src: salon1, alt: "Interior do salão com cadeiras e espelhos" },
    { src: salon2, alt: "Coloração profissional de cabelo" },
    { src: salon3, alt: "Lavagem e tratamento capilar" },
    { src: salon4, alt: "Manicure profissional" },
    { src: salon5, alt: "Fachada elegante do salão" },
    { src: salon6, alt: "Produtos de beleza premium" },
    { src: salon7, alt: "Linha de produtos capilares" },
    { src: salon8, alt: "Alisamento com chapinha profissional" },
    { src: salon9, alt: "Recepção e área de espera" },
    { src: salon10, alt: "Resultado de penteado finalizado" },
  ],
  "barbearia": [
    { src: barber1, alt: "Interior da barbearia com cadeiras" },
    { src: barber2, alt: "Corte degradê preciso" },
    { src: barber3, alt: "Tratamento de barba com toalha" },
    { src: barber4, alt: "Ferramentas profissionais de barbeiro" },
    { src: barber5, alt: "Cliente satisfeito com o corte" },
    { src: heroBarbershop, alt: "Ambiente da barbearia" },
    { src: salon1, alt: "Cadeiras de atendimento" },
    { src: salon7, alt: "Produtos de cuidado masculino" },
    { src: salon9, alt: "Área de espera" },
    { src: salon5, alt: "Fachada do estabelecimento" },
  ],
  "estética": [
    { src: aesthetics1, alt: "Sala de tratamento estético" },
    { src: heroAesthetics, alt: "Ambiente da clínica de estética" },
    { src: salon6, alt: "Produtos dermatológicos" },
    { src: salon3, alt: "Procedimento facial" },
    { src: salon4, alt: "Cuidados com as mãos" },
    { src: salon7, alt: "Linha de produtos de pele" },
    { src: salon9, alt: "Recepção da clínica" },
    { src: salon1, alt: "Sala de atendimento" },
    { src: dental1, alt: "Equipamentos modernos" },
    { src: salon5, alt: "Fachada da clínica" },
  ],
  "clínica odontológica": [
    { src: dental1, alt: "Consultório odontológico moderno" },
    { src: heroDental, alt: "Equipamentos de odontologia" },
    { src: aesthetics1, alt: "Sala de procedimento" },
    { src: salon6, alt: "Materiais odontológicos" },
    { src: salon9, alt: "Recepção da clínica" },
    { src: salon5, alt: "Fachada da clínica" },
    { src: salon1, alt: "Sala de espera" },
    { src: salon7, alt: "Produtos de higiene bucal" },
    { src: dental1, alt: "Cadeira odontológica" },
    { src: heroDefault, alt: "Atendimento profissional" },
  ],
  "fisioterapia": [
    { src: heroPhysiotherapy, alt: "Sessão de fisioterapia" },
    { src: aesthetics1, alt: "Sala de tratamento" },
    { src: gym1, alt: "Equipamentos de reabilitação" },
    { src: salon9, alt: "Recepção da clínica" },
    { src: dental1, alt: "Sala equipada" },
    { src: salon5, alt: "Fachada da clínica" },
    { src: salon1, alt: "Ambiente de atendimento" },
    { src: heroDefault, alt: "Profissional qualificado" },
    { src: salon7, alt: "Produtos terapêuticos" },
    { src: salon6, alt: "Materiais de tratamento" },
  ],
  "pet shop": [
    { src: petshop1, alt: "Tosa profissional de cachorro" },
    { src: heroPetshop, alt: "Pet shop acolhedor" },
    { src: salon9, alt: "Recepção do pet shop" },
    { src: salon5, alt: "Fachada do pet shop" },
    { src: salon6, alt: "Produtos para pets" },
    { src: salon7, alt: "Linha de rações e acessórios" },
    { src: petshop1, alt: "Banho e tosa" },
    { src: salon1, alt: "Área de atendimento" },
    { src: heroDefault, alt: "Cuidado animal" },
    { src: salon4, alt: "Cuidados especiais" },
  ],
  "oficina mecânica": [
    { src: mechanic1, alt: "Mecânico trabalhando no motor" },
    { src: heroMechanic, alt: "Oficina mecânica equipada" },
    { src: batteries1, alt: "Peças e componentes" },
    { src: salon5, alt: "Fachada da oficina" },
    { src: salon9, alt: "Recepção da oficina" },
    { src: mechanic1, alt: "Diagnóstico automotivo" },
    { src: heroDefault, alt: "Profissionais qualificados" },
    { src: salon1, alt: "Área de serviço" },
    { src: salon7, alt: "Ferramentas profissionais" },
    { src: batteries1, alt: "Equipamentos de teste" },
  ],
  "baterias": [
    { src: batteries1, alt: "Baterias automotivas em estoque" },
    { src: heroBatteries, alt: "Loja de baterias" },
    { src: mechanic1, alt: "Instalação de bateria" },
    { src: salon5, alt: "Fachada da loja" },
    { src: batteries1, alt: "Marcas de qualidade" },
    { src: heroMechanic, alt: "Serviço automotivo" },
    { src: salon9, alt: "Atendimento ao cliente" },
    { src: heroDefault, alt: "Entrega rápida" },
    { src: salon1, alt: "Balcão de atendimento" },
    { src: salon7, alt: "Acessórios automotivos" },
  ],
  "restaurante": [
    { src: restaurant1, alt: "Salão do restaurante" },
    { src: heroRestaurant, alt: "Ambiente gastronômico" },
    { src: burger1, alt: "Prato especial" },
    { src: salon9, alt: "Área de recepção" },
    { src: salon5, alt: "Fachada do restaurante" },
    { src: restaurant1, alt: "Mesas preparadas para jantar" },
    { src: salon6, alt: "Carta de vinhos" },
    { src: salon7, alt: "Ingredientes selecionados" },
    { src: heroDefault, alt: "Experiência gastronômica" },
    { src: salon1, alt: "Bar do restaurante" },
  ],
  "hamburgueria": [
    { src: burger1, alt: "Hambúrguer artesanal" },
    { src: heroRestaurant, alt: "Ambiente da hamburgueria" },
    { src: restaurant1, alt: "Salão de atendimento" },
    { src: salon5, alt: "Fachada da hamburgueria" },
    { src: burger1, alt: "Smash burger na chapa" },
    { src: salon9, alt: "Área de espera" },
    { src: salon7, alt: "Ingredientes frescos" },
    { src: salon6, alt: "Molhos artesanais" },
    { src: heroDefault, alt: "Delivery rápido" },
    { src: salon1, alt: "Balcão de pedidos" },
  ],
  "marmitaria": [
    { src: heroMarmitaria, alt: "Marmitas frescas e saborosas" },
    { src: burger1, alt: "Refeição completa" },
    { src: restaurant1, alt: "Cozinha profissional" },
    { src: salon5, alt: "Fachada da marmitaria" },
    { src: salon7, alt: "Ingredientes frescos" },
    { src: salon9, alt: "Atendimento ao cliente" },
    { src: salon6, alt: "Temperos e condimentos" },
    { src: heroDefault, alt: "Entrega rápida" },
    { src: salon1, alt: "Área de preparo" },
    { src: heroRestaurant, alt: "Ambiente gastronômico" },
  ],
  "academia": [
    { src: gym1, alt: "Área de musculação" },
    { src: heroGym, alt: "Academia equipada" },
    { src: salon9, alt: "Recepção da academia" },
    { src: salon5, alt: "Fachada da academia" },
    { src: gym1, alt: "Esteiras e cardio" },
    { src: heroDefault, alt: "Treino funcional" },
    { src: salon1, alt: "Vestiário" },
    { src: salon7, alt: "Suplementos e acessórios" },
    { src: aesthetics1, alt: "Sala de avaliação" },
    { src: salon6, alt: "Produtos fitness" },
  ],
  "imobiliária": [
    { src: heroRealestate, alt: "Imóvel de alto padrão" },
    { src: salon9, alt: "Escritório da imobiliária" },
    { src: salon5, alt: "Fachada do escritório" },
    { src: restaurant1, alt: "Imóvel comercial" },
    { src: salon1, alt: "Sala de reuniões" },
    { src: heroDefault, alt: "Consultoria imobiliária" },
    { src: salon7, alt: "Documentação organizada" },
    { src: dental1, alt: "Imóvel residencial" },
    { src: aesthetics1, alt: "Imóvel moderno" },
    { src: salon6, alt: "Acabamentos de qualidade" },
  ],
  "contabilidade": [
    { src: heroAccounting, alt: "Escritório contábil" },
    { src: salon9, alt: "Sala de reuniões" },
    { src: salon5, alt: "Fachada do escritório" },
    { src: salon1, alt: "Área de atendimento" },
    { src: dental1, alt: "Equipamentos de escritório" },
    { src: heroDefault, alt: "Equipe contábil" },
    { src: salon7, alt: "Documentos organizados" },
    { src: salon6, alt: "Material de trabalho" },
    { src: aesthetics1, alt: "Sala limpa e organizada" },
    { src: restaurant1, alt: "Ambiente profissional" },
  ],
};

const defaultGallery: GalleryImage[] = [
  { src: heroDefault, alt: "Nosso espaço" },
  { src: salon1, alt: "Ambiente profissional" },
  { src: salon5, alt: "Fachada do estabelecimento" },
  { src: salon9, alt: "Recepção" },
  { src: salon7, alt: "Produtos de qualidade" },
  { src: salon6, alt: "Materiais premium" },
  { src: salon3, alt: "Atendimento" },
  { src: salon4, alt: "Serviço especializado" },
  { src: salon2, alt: "Detalhes do serviço" },
  { src: salon10, alt: "Resultado do trabalho" },
];

export function getGalleryImages(niche: string): GalleryImage[] {
  const key = niche.toLowerCase().trim();
  if (galleryMap[key]) return galleryMap[key];
  for (const [k, v] of Object.entries(galleryMap)) {
    if (key.includes(k) || k.includes(key)) return v;
  }
  return defaultGallery;
}

// Niche-specific color schemes (HSL values)
export interface NicheColors {
  primary: string;
  primaryForeground: string;
  accent: string;
  secondary: string;
}

const nicheColorMap: Record<string, NicheColors> = {
  "salão de beleza": { primary: "30 10% 12%", primaryForeground: "40 30% 95%", accent: "38 60% 55%", secondary: "30 15% 94%" },
  "barbearia": { primary: "25 15% 15%", primaryForeground: "35 30% 95%", accent: "30 50% 45%", secondary: "25 10% 92%" },
  "estética": { primary: "340 15% 20%", primaryForeground: "340 20% 95%", accent: "340 40% 65%", secondary: "340 15% 95%" },
  "clínica odontológica": { primary: "200 30% 20%", primaryForeground: "200 20% 97%", accent: "200 60% 50%", secondary: "200 20% 95%" },
  "fisioterapia": { primary: "170 25% 20%", primaryForeground: "170 20% 97%", accent: "170 50% 45%", secondary: "170 15% 95%" },
  "pet shop": { primary: "25 30% 18%", primaryForeground: "40 30% 97%", accent: "35 65% 55%", secondary: "35 20% 94%" },
  "oficina mecânica": { primary: "220 20% 18%", primaryForeground: "220 15% 97%", accent: "40 80% 50%", secondary: "220 10% 93%" },
  "baterias": { primary: "220 25% 15%", primaryForeground: "45 90% 97%", accent: "45 90% 50%", secondary: "220 10% 93%" },
  "restaurante": { primary: "15 20% 15%", primaryForeground: "30 25% 95%", accent: "15 60% 50%", secondary: "15 15% 94%" },
  "hamburgueria": { primary: "0 20% 15%", primaryForeground: "40 30% 97%", accent: "40 70% 50%", secondary: "0 10% 94%" },
  "marmitaria": { primary: "120 15% 18%", primaryForeground: "120 15% 97%", accent: "45 60% 50%", secondary: "120 10% 95%" },
  "academia": { primary: "0 0% 10%", primaryForeground: "0 0% 98%", accent: "0 75% 50%", secondary: "0 0% 94%" },
  "imobiliária": { primary: "215 30% 18%", primaryForeground: "215 20% 97%", accent: "38 55% 50%", secondary: "215 15% 95%" },
  "contabilidade": { primary: "210 20% 18%", primaryForeground: "210 15% 97%", accent: "170 45% 45%", secondary: "210 10% 95%" },
};

const defaultColors: NicheColors = {
  primary: "30 10% 12%",
  primaryForeground: "40 30% 95%",
  accent: "38 60% 55%",
  secondary: "30 15% 94%",
};

export function getNicheColors(niche: string): NicheColors {
  const key = niche.toLowerCase().trim();
  if (nicheColorMap[key]) return nicheColorMap[key];
  for (const [k, v] of Object.entries(nicheColorMap)) {
    if (key.includes(k) || k.includes(key)) return v;
  }
  return defaultColors;
}

import SalonHeader from "@/components/SalonHeader";
import SalonHero from "@/components/SalonHero";
import SalonAbout from "@/components/SalonAbout";
import SalonServices from "@/components/SalonServices";
import SalonReviews from "@/components/SalonReviews";
import SalonWhatsAppFloat from "@/components/SalonWhatsAppFloat";
import SalonFooter from "@/components/SalonFooter";

const Index = () => (
  <>
    <SalonHeader />
    <main className="pt-[52px]">
      <SalonHero />
      <SalonAbout />
      <SalonServices />
      <SalonReviews />
    </main>
    <SalonFooter />
    <SalonWhatsAppFloat />
  </>
);

export default Index;

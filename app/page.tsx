import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import BusinessTransformation from "@/components/home/BusinessTransformation";
import Services from "@/components/home/Services";
import BusinessSolutions from "@/components/home/BusinessSolutions";
import Portfolio from "@/components/home/Portfolio";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import ContactQuote from "@/components/home/ContactQuote";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden bg-[#F7F9FC] pt-20">
        <Hero />
        <BusinessTransformation />
        <Services />
        <BusinessSolutions />
        <Portfolio />
        <Pricing />
        <FAQ />
        <ContactQuote />
      </main>

      <Footer />
    </>
  );
}
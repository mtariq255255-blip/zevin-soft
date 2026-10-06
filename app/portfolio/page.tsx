import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#F7F9FC] pt-[80px]">
        <PortfolioGallery />
      </main>

      <Footer />
    </>
  );
}
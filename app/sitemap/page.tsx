import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "AI Business Builder", href: "/ai-business-builder" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

export default function SitemapPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F6F9FD] pt-[80px]">
        <section className="border-b border-[#E5EBF2] bg-[#F3F7FB]">
          <div className="mx-auto flex h-[58px] max-w-[1240px] items-center gap-3 px-5 text-[12px] text-[#66758A] sm:px-6">
            <Link href="/" className="transition-colors hover:text-[#2463D4]">
              Home
            </Link>
            <span className="text-[#A7B3C2]">›</span>
            <span className="font-medium text-[#425166]">Sitemap</span>
          </div>
        </section>

        <section className="relative py-16 sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-x-0 top-[-80px] h-[260px] bg-[radial-gradient(circle,_rgba(36,99,212,0.12),_transparent_62%)]" />

          <div className="relative z-10 mx-auto max-w-[1100px] px-5 sm:px-6">
            <div className="mx-auto max-w-[760px] text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2463D4]">
                Sitemap
              </span>
              <h1 className="mt-5 text-[38px] font-extrabold tracking-[-0.04em] text-[#0F1B2D] sm:text-[48px]">
                Explore Our Site
              </h1>
              <p className="mt-5 text-[15px] leading-[1.8] text-[#53657B]">
                Find the key pages and resources across the Zevin Soft website in one place.
              </p>
            </div>

            <div className="mt-12 rounded-[18px] border border-[#E3EAF4] bg-white p-7 shadow-[0_16px_40px_rgba(15,27,45,0.04)] sm:p-9">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="rounded-[12px] border border-[#E5ECF5] bg-[#F8FBFF] px-4 py-3 text-[15px] font-medium text-[#1B2B3F] transition-colors hover:border-[#2463D4]/50 hover:text-[#2463D4]"
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

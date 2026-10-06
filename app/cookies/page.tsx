import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const details = [
  {
    title: "What Are Cookies?",
    body:
      "Cookies are small text files stored on your device when you visit a website. They help websites remember preferences, understand how visitors use the site and improve user experience over time.",
  },
  {
    title: "How We Use Cookies",
    body:
      "We use cookies to keep our website functioning properly, remember user preferences, understand traffic and engagement patterns, and improve the relevance of our content and services. This may include analytics, performance monitoring and marketing optimisation tools.",
  },
  {
    title: "Types of Cookies We Use",
    body:
      "We may use essential cookies necessary for security and navigation, performance cookies to understand how pages are used, functionality cookies to remember preferences, and third-party cookies used by analytics or marketing tools we trust to measure effectiveness.",
  },
  {
    title: "Managing Cookies",
    body:
      "You can change your browser settings to block or delete cookies at any time. Please note that disabling cookies may affect some parts of the website, including forms, personalised experiences or analytics features.",
  },
];

export default function CookiesPage() {
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
            <span className="font-medium text-[#425166]">Cookies</span>
          </div>
        </section>

        <section className="relative py-16 sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-x-0 top-[-80px] h-[260px] bg-[radial-gradient(circle,_rgba(36,99,212,0.12),_transparent_62%)]" />

          <div className="relative z-10 mx-auto max-w-[1100px] px-5 sm:px-6">
            <div className="mx-auto max-w-[760px] text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2463D4]">
                Cookies
              </span>
              <h1 className="mt-5 text-[38px] font-extrabold tracking-[-0.04em] text-[#0F1B2D] sm:text-[48px]">
                Cookies Policy
              </h1>
              <p className="mt-5 text-[15px] leading-[1.8] text-[#53657B]">
                This Cookies Policy explains how Zevin Soft uses cookies and similar technologies to improve the experience of visitors to our website.
              </p>
            </div>

            <div className="mt-12 grid gap-7 lg:grid-cols-2">
              {details.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[18px] border border-[#E3EAF4] bg-white p-7 shadow-[0_16px_40px_rgba(15,27,45,0.04)]"
                >
                  <h2 className="text-[20px] font-bold text-[#0F1B2D]">{item.title}</h2>
                  <p className="mt-4 text-[15px] leading-[1.8] text-[#53657B]">{item.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[18px] border border-[#E3EAF4] bg-[#F8FBFF] p-7 sm:p-9">
              <h2 className="text-[20px] font-bold text-[#0F1B2D]">Contact</h2>
              <p className="mt-4 text-[15px] leading-[1.8] text-[#53657B]">
                If you have questions about cookie usage or your preferences, contact us at <a href="mailto:hello@zevinsoft.com" className="font-semibold text-[#2463D4] hover:text-[#1f58c0]">hello@zevinsoft.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const sections = [
  {
    title: "Information We Collect",
    body:
      "We collect information you provide directly to us, such as your name, business details, email address, phone number, project goals and any supporting documents shared during the discovery or onboarding process. We may also collect technical information about your use of our website, including browser type, device information, pages visited and referral sources for service improvement and analytics.",
  },
  {
    title: "How We Use Your Information",
    body:
      "We use personal and business information to respond to enquiries, provide consulting and development services, manage project delivery, communicate updates, produce proposals and invoices, and improve the quality of our digital offerings. We may also use contact details to send important service-related notices, product updates or project communications where legally appropriate.",
  },
  {
    title: "Cookies and Analytics",
    body:
      "Our website may use cookies, analytics tools and similar technologies to understand visitor behaviour, improve performance, remember preferences and evaluate marketing effectiveness. You can manage browser settings to refuse cookies or alert you when cookies are sent, though some website functions may be limited as a result.",
  },
  {
    title: "Data Security",
    body:
      "We apply reasonable technical and organisational safeguards to protect personal and business data from unauthorised access, misuse, loss or disclosure. While no online platform is completely risk-free, we take practical steps to maintain a secure environment for project and client information.",
  },
  {
    title: "Third-Party Services",
    body:
      "We may work with trusted tools and service providers for hosting, marketing, customer support, payment processing, analytics and communication. These providers may process data on our behalf under contractual safeguards and are expected to comply with applicable privacy and security obligations.",
  },
  {
    title: "Your Rights",
    body:
      "Depending on your jurisdiction, you may have rights to access, correct, delete or restrict the personal information we hold about you, or to object to certain processing activities. If you would like to exercise those rights or ask questions about your information, please contact us using the details below.",
  },
];

export default function PrivacyPage() {
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
            <span className="font-medium text-[#425166]">Privacy Policy</span>
          </div>
        </section>

        <section className="relative py-16 sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-x-0 top-[-80px] h-[260px] bg-[radial-gradient(circle,_rgba(36,99,212,0.12),_transparent_62%)]" />

          <div className="relative z-10 mx-auto max-w-[1100px] px-5 sm:px-6">
            <div className="mx-auto max-w-[760px] text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2463D4]">
                Privacy Policy
              </span>
              <h1 className="mt-5 text-[38px] font-extrabold tracking-[-0.04em] text-[#0F1B2D] sm:text-[48px]">
                Privacy Policy
              </h1>
              <p className="mt-5 text-[15px] leading-[1.8] text-[#53657B]">
                At Zevin Soft, we respect the privacy of our clients, visitors and partners. This policy explains how we collect, manage and protect information when you interact with our website, services and business communications.
              </p>
            </div>

            <div className="mt-12 grid gap-7 lg:grid-cols-2">
              {sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-[18px] border border-[#E3EAF4] bg-white p-7 shadow-[0_16px_40px_rgba(15,27,45,0.04)]"
                >
                  <h2 className="text-[20px] font-bold text-[#0F1B2D]">{section.title}</h2>
                  <p className="mt-4 text-[15px] leading-[1.8] text-[#53657B]">{section.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[18px] border border-[#E3EAF4] bg-[#F8FBFF] p-7 sm:p-9">
              <h2 className="text-[20px] font-bold text-[#0F1B2D]">Contact Us</h2>
              <p className="mt-4 text-[15px] leading-[1.8] text-[#53657B]">
                If you have questions about this Privacy Policy or how we handle your information, please contact our team at <a href="mailto:hello@zevinsoft.com" className="font-semibold text-[#2463D4] hover:text-[#1f58c0]">hello@zevinsoft.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

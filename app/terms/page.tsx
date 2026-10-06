import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const sections = [
  {
    title: "Introduction",
    body:
      "These Terms & Conditions govern the use of the Zevin Soft website and the services we provide to clients. By accessing our website or engaging with our team, you agree to these terms and conditions in full. If you do not agree with any part of these terms, you should not use our services or continue interacting with our website.",
  },
  {
    title: "Scope of Services",
    body:
      "Zevin Soft provides digital strategy, website development, software design, mobile applications, AI and automation solutions, CRM systems, cloud consulting, digital marketing support and ongoing technical assistance. The exact scope, deliverables, timelines and responsibilities for each project will be defined in a proposal, statement of work or client agreement before work begins.",
  },
  {
    title: "Client Responsibilities",
    body:
      "Clients are responsible for providing clear project objectives, required content, access permissions, decision-making, timely feedback and any third-party accounts or systems necessary for project delivery. Delays caused by missing information, approvals or technical access may affect project timelines and associated milestones.",
  },
  {
    title: "Payments and Fees",
    body:
      "Unless otherwise agreed in writing, project fees, consultancy rates and payment terms will be set out in the relevant proposal or agreement. Late payments may be subject to interest, suspension of work or additional administrative charges as permitted by applicable law. Any approved change requests may require revised estimates and timelines.",
  },
  {
    title: "Intellectual Property",
    body:
      "We retain ownership of our pre-existing tools, templates, methods, frameworks, source code libraries and general business materials used in the course of our work. Any custom work created specifically for a client remains subject to the project agreement and may be assigned to the client as concluded in writing. We may use anonymised learnings from delivered projects for internal improvement, only where such usage does not compromise client confidentiality.",
  },
  {
    title: "Confidentiality and Data",
    body:
      "We will hold confidential information shared by clients in accordance with applicable confidentiality obligations and professional care. Clients remain responsible for the accuracy and lawful use of any data or content they provide. Where applicable, both parties will take reasonable steps to protect personal and proprietary information throughout the engagement.",
  },
  {
    title: "Warranties and Limitation of Liability",
    body:
      "We aim to provide quality services and deliver solutions in a professional manner. However, we do not guarantee uninterrupted performance, error-free operation or business outcomes beyond the agreed deliverables and scope. Our liability is limited to the fees paid for the relevant services, except where required by law or where gross negligence or misconduct is involved.",
  },
  {
    title: "Termination",
    body:
      "Either party may terminate a project or service arrangement according to the terms outlined in the signed agreement or proposal. Upon termination, fees for work completed and any reasonably incurred costs will remain payable. We may suspend services where there is a material breach, non-payment, unreasonable delay or security concern.",
  },
  {
    title: "Governing Law",
    body:
      "These terms are governed by the laws of the jurisdiction in which Zevin Soft operates, without regard to conflict of law principles. Any disputes arising from these terms or related services will be resolved through good-faith negotiation, and where necessary, through the appropriate courts or dispute resolution process under applicable law.",
  },
];

export default function TermsPage() {
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
            <span className="font-medium text-[#425166]">Terms & Conditions</span>
          </div>
        </section>

        <section className="relative py-16 sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-x-0 top-[-80px] h-[260px] bg-[radial-gradient(circle,_rgba(36,99,212,0.12),_transparent_62%)]" />

          <div className="relative z-10 mx-auto max-w-[1100px] px-5 sm:px-6">
            <div className="mx-auto max-w-[760px] text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2463D4]">
                Terms & Conditions
              </span>
              <h1 className="mt-5 text-[38px] font-extrabold tracking-[-0.04em] text-[#0F1B2D] sm:text-[48px]">
                Terms & Conditions
              </h1>
              <p className="mt-5 text-[15px] leading-[1.8] text-[#53657B]">
                These terms outline our working relationship, responsibilities and expectations for clients and collaborators using Zevin Soft services. Please read them carefully before beginning a project.
              </p>
            </div>

            <div className="mt-12 space-y-7">
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
              <h2 className="text-[20px] font-bold text-[#0F1B2D]">Questions</h2>
              <p className="mt-4 text-[15px] leading-[1.8] text-[#53657B]">
                For any questions regarding these Terms & Conditions, please contact us at <a href="mailto:hello@zevinsoft.com" className="font-semibold text-[#2463D4] hover:text-[#1f58c0]">hello@zevinsoft.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

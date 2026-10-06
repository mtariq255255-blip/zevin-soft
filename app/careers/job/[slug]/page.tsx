import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getJob, jobs } from "@/data/jobs";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export default async function JobDescriptionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJob(slug);

  if (!job) {
    notFound();
  }

  const detailSections = [
    { title: "Responsibilities", items: job.responsibilities },
    { title: "Requirements", items: job.requirements },
    { title: "Preferred Qualifications", items: job.preferred },
    { title: "What We Offer", items: job.benefits },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#F7F9FC] pt-[80px]">
        <div className="border-b border-[#E3EBF2] bg-[#F4F8FB]">
          <nav
            aria-label="Breadcrumb"
            className="mx-auto flex h-[56px] max-w-[1240px] items-center gap-3 px-5 text-[12px] text-[#68778C] sm:px-6"
          >
            <Link href="/" className="transition-colors hover:text-[#1677EA]">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/careers"
              className="transition-colors hover:text-[#1677EA]"
            >
              Careers
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-[#415067]">{job.title}</span>
          </nav>
        </div>

        <section className="border-b border-[#E3EBF2] bg-white">
          <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-6 sm:py-16">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#52647C] transition-colors hover:text-[#0878EA]"
            >
              <ArrowLeft className="h-4 w-4" />
              All open positions
            </Link>

            <div className="mt-8 max-w-[850px]">
              <span className="inline-flex rounded-full bg-[#E7F2FD] px-3 py-1.5 text-[11px] font-semibold text-[#1674D7]">
                {job.category}
              </span>
              <h1 className="mt-4 text-[38px] font-extrabold leading-[1.08] text-[#0F1B2D] sm:text-[52px]">
                {job.title}
              </h1>
              <p className="mt-5 max-w-[760px] text-[16px] leading-[1.65] text-[#5D6C81] sm:text-[18px]">
                {job.overview}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 text-[13px] text-[#59697F]">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#1677EA]" />
                  {job.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <BriefcaseBusiness className="h-4 w-4 text-[#1677EA]" />
                  {job.type}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1240px] gap-12 px-5 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16 lg:py-16">
          <div className="space-y-10">
            {detailSections.map((section) => (
              <section key={section.title}>
                <h2 className="text-[22px] font-bold text-[#0F1B2D] sm:text-[26px]">
                  {section.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[14px] leading-[1.65] text-[#53627A]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1682F4]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <aside className="h-fit border-t border-[#DCE5EE] pt-6 lg:sticky lg:top-[104px] lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
            <h2 className="text-[18px] font-bold text-[#0F1B2D]">
              Skills for this role
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[#EEF3F8] px-3 py-1.5 text-[11px] font-medium text-[#425166]"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 border-t border-[#DCE5EE] pt-6">
              <p className="text-[14px] leading-[1.6] text-[#5D6C81]">
                Interested in joining the team? Get in touch with us about this
                position.
              </p>
              <Link
                href={`/careers/apply?role=${job.slug}`}
                className="mt-5 inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-[7px] bg-[#0878EA] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#1762C4]"
              >
                Apply for this role
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </>
  );
}
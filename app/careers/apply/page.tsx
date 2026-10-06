import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import ApplicationForm from "@/components/careers/ApplicationForm";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { getJob, jobs } from "@/data/jobs";

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string | string[] }>;
}) {
  const query = await searchParams;
  const roleSlug = Array.isArray(query.role) ? query.role[0] : query.role;
  const selectedJob = roleSlug ? getJob(roleSlug) : undefined;

  return (
    <>
      <Navbar />

      <main className="min-h-[70vh] bg-[#F7F9FC] pt-[80px]">
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
            <span className="font-medium text-[#415067]">Apply</span>
          </nav>
        </div>

        <section className="mx-auto max-w-[900px] px-5 py-12 sm:px-6 sm:py-16">
          <Link
            href={selectedJob ? `/careers/job/${selectedJob.slug}` : "/careers"}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#52647C] transition-colors hover:text-[#0878EA]"
          >
            <ArrowLeft className="h-4 w-4" />
            {selectedJob ? `Back to ${selectedJob.title}` : "All open positions"}
          </Link>

          <div className="mt-7 max-w-[720px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1677EA]">
              Careers at Zevin Soft
            </p>
            <h1 className="mt-3 text-[36px] font-extrabold leading-[1.08] text-[#0F1B2D] sm:text-[48px]">
              {selectedJob ? `Apply for ${selectedJob.title}` : "Apply to join our team"}
            </h1>
            <p className="mt-4 text-[15px] leading-[1.65] text-[#5D6C81]">
              Share a few details about yourself and your experience. Your
              application will be prepared as an email for our team.
            </p>
          </div>

          <div className="mt-8">
            <ApplicationForm
              jobs={jobs.map(({ slug, title }) => ({ slug, title }))}
              selectedJobSlug={selectedJob?.slug}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
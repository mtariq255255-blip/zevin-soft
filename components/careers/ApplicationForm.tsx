"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import SubmissionSuccessDialog from "@/components/ui/SubmissionSuccessDialog";

type JobOption = {
  slug: string;
  title: string;
};

export default function ApplicationForm({
  jobs,
  selectedJobSlug,
}: {
  jobs: JobOption[];
  selectedJobSlug?: string;
}) {
  const [status, setStatus] = useState<{
    message: string;
    error: boolean;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("kind", "application");
    setIsSubmitting(true);
    setStatus({ message: "Sending your application...", error: false });

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "We could not send your application.");
      }

      setStatus(null);
      setIsSuccessOpen(true);
      form.reset();
    } catch (error) {
      setStatus({
        message:
          error instanceof Error
            ? error.message
            : "We could not send your application. Please try again.",
        error: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[8px] border border-[#DCE5EE] bg-white p-5 shadow-[0_8px_28px_rgba(15,27,45,0.04)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-[13px] font-semibold text-[#29384D]">
          Full name <span className="text-[#C33B46]">*</span>
          <input
            autoComplete="name"
            className="mt-2 min-h-[46px] w-full rounded-[6px] border border-[#CFD9E4] bg-white px-3 text-[14px] font-normal outline-none transition focus:border-[#1677EA] focus:ring-2 focus:ring-[#1677EA]/15"
            name="name"
            required
          />
        </label>

        <label className="block text-[13px] font-semibold text-[#29384D]">
          Email address <span className="text-[#C33B46]">*</span>
          <input
            autoComplete="email"
            className="mt-2 min-h-[46px] w-full rounded-[6px] border border-[#CFD9E4] bg-white px-3 text-[14px] font-normal outline-none transition focus:border-[#1677EA] focus:ring-2 focus:ring-[#1677EA]/15"
            name="email"
            required
            type="email"
          />
        </label>

        <label className="block text-[13px] font-semibold text-[#29384D]">
          Position <span className="text-[#C33B46]">*</span>
          <select
            className="mt-2 min-h-[46px] w-full rounded-[6px] border border-[#CFD9E4] bg-white px-3 text-[14px] font-normal outline-none transition focus:border-[#1677EA] focus:ring-2 focus:ring-[#1677EA]/15"
            defaultValue={selectedJobSlug ?? ""}
            name="role"
            required
          >
            <option disabled value="">
              Select a position
            </option>
            {jobs.map((job) => (
              <option key={job.slug} value={job.slug}>
                {job.title}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-[13px] font-semibold text-[#29384D]">
          Phone number
          <input
            autoComplete="tel"
            className="mt-2 min-h-[46px] w-full rounded-[6px] border border-[#CFD9E4] bg-white px-3 text-[14px] font-normal outline-none transition focus:border-[#1677EA] focus:ring-2 focus:ring-[#1677EA]/15"
            name="phone"
            type="tel"
          />
        </label>

        <label className="block text-[13px] font-semibold text-[#29384D] sm:col-span-2">
          Portfolio or LinkedIn URL
          <input
            autoComplete="url"
            className="mt-2 min-h-[46px] w-full rounded-[6px] border border-[#CFD9E4] bg-white px-3 text-[14px] font-normal outline-none transition focus:border-[#1677EA] focus:ring-2 focus:ring-[#1677EA]/15"
            name="portfolio"
            type="url"
          />
        </label>

        <label className="block text-[13px] font-semibold text-[#29384D] sm:col-span-2">
          Resume <span className="text-[#C33B46">*</span>
          <input
            accept=".pdf,.doc,.docx"
            className="mt-2 min-h-[46px] w-full rounded-[6px] border border-[#CFD9E4] bg-white px-3 py-2 text-[13px] font-normal outline-none transition file:mr-3 file:rounded-[4px] file:border-0 file:bg-[#EAF3FD] file:px-3 file:py-2 file:text-[12px] file:font-semibold file:text-[#1672D9] focus:border-[#1677EA] focus:ring-2 focus:ring-[#1677EA]/15"
            name="resume"
            required
            type="file"
          />
          <span className="mt-2 block text-[12px] font-normal text-[#69788B]">
            PDF, DOC, or DOCX. Maximum file size: 5 MB.
          </span>
        </label>

        <label className="block text-[13px] font-semibold text-[#29384D] sm:col-span-2">
          Tell us about your interest in this role
          <textarea
            className="mt-2 min-h-[140px] w-full resize-y rounded-[6px] border border-[#CFD9E4] bg-white px-3 py-3 text-[14px] font-normal outline-none transition focus:border-[#1677EA] focus:ring-2 focus:ring-[#1677EA]/15"
            name="message"
            placeholder="Share relevant experience, skills, or a short introduction."
            rows={5}
          />
        </label>
      </div>

      <div className="mt-5 flex flex-col gap-4 border-t border-[#E6ECF2] pt-5 sm:flex-row sm:items-center sm:justify-end">
        <button
          disabled={isSubmitting}
          className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-[7px] bg-[#0878EA] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#1762C4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0878EA]"
          type="submit"
        >
          {isSubmitting ? "Sending..." : "Submit"}
          {!isSubmitting && <ArrowRight className="h-4 w-4" />}
        </button>
      </div>

      {status && (
        <p
          className={`mt-4 text-[13px] leading-[1.6] ${
            status.error ? "text-[#B42318]" : "text-[#25613F]"
          }`}
          role={status.error ? "alert" : "status"}
        >
          {status.message}
        </p>
      )}

      <SubmissionSuccessDialog
        open={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Application submitted"
        message="Your application and resume have been sent to our team. Thank you for your interest."
      />
    </form>
  );
}
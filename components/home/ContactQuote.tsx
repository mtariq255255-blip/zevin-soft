"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import SubmissionSuccessDialog from "@/components/ui/SubmissionSuccessDialog";
import {
  ArrowRight,
  FileText,
  Lightbulb,
  MessageSquareMore,
} from "lucide-react";

const points = [
  {
    title: "Tell us about your project",
    description: "Share your goals, ideas or requirements.",
    Icon: MessageSquareMore,
  },
  {
    title: "Get expert advice",
    description:
      "Our team will review your requirements and suggest the best approach.",
    Icon: Lightbulb,
  },
  {
    title: "Receive a tailored quote",
    description:
      "Get a clear proposal with timeline and next steps.",
    Icon: FileText,
  },
];

export default function ContactQuote() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    message: string;
    error: boolean;
  } | null>(null);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("kind", "contact");
    setIsSubmitting(true);
    setStatus({ message: "Sending your message...", error: false });

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "We could not send your message.");
      }

      setStatus(null);
      setIsSuccessOpen(true);
      form.reset();
    } catch (error) {
      setStatus({
        message:
          error instanceof Error
            ? error.message
            : "We could not send your message. Please try again.",
        error: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        scroll-mt-[80px]
        bg-[#F7F9FC]
        py-8
        lg:py-14
      "
    >
      {/* ===================================================== */}
      {/* BACKGROUND DECORATION */}
      {/* ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-170px]
          top-[-170px]
          h-[480px]
          w-[480px]
          rounded-full
          border-[70px]
          border-[#E7F0FC]
          opacity-75
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-260px]
          left-[-160px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#E4F0FD]
          opacity-90
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-220px]
          right-[-110px]
          h-[420px]
          w-[520px]
          rounded-[50%]
          bg-[#EAF3FD]
          opacity-75
        "
      />

      {/* ===================================================== */}
      {/* MAIN CONTAINER */}
      {/* ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1240px]
          grid-cols-1
          gap-12
          px-5
          sm:px-6

          lg:grid-cols-[0.72fr_1.28fr]
          lg:items-center
          lg:gap-14
        "
      >
        {/* =================================================== */}
        {/* LEFT SIDE */}
        {/* =================================================== */}

        <div>
          {/* EYEBROW */}

          <div className="flex flex-col items-start">
            <span
              className="
                mb-4
                block
                h-[2px]
                w-[44px]
              "
              style={{
                background:
                  "linear-gradient(90deg,#2463D4 0%,rgba(36,99,212,0.15) 100%)",
              }}
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.34em]
                text-[#2463D4]

                sm:text-[11px]
              "
            >
              Get A Quote
            </span>
          </div>

          {/* ================================================= */}
          {/* SMALLER HEADING */}
          {/* ================================================= */}

          <h2
            className="
              mt-6
              max-w-[440px]
              font-display
              text-[34px]
              font-extrabold
              leading-[1.04]
              tracking-[-0.04em]
              text-[#0F1B2D]

              sm:text-[40px]

              lg:text-[44px]
            "
          >
            Let&apos;s Build
            <br />
            Something Great
            <br />
            <span className="text-[#1674F5]">
              Together
            </span>
          </h2>

          {/* ================================================= */}
          {/* BENEFITS */}
          {/* ================================================= */}

          <div className="mt-9 space-y-7">
            {points.map((point) => {
              const Icon = point.Icon;

              return (
                <div
                  key={point.title}
                  className="
                    flex
                    items-start
                    gap-5
                  "
                >
                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-[52px]
                      w-[52px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#E7F0FC]
                      text-[#1674F5]
                    "
                  >
                    <Icon
                      className="h-[24px] w-[24px]"
                      strokeWidth={2}
                    />
                  </div>

                  {/* TEXT */}

                  <div className="pt-1">
                    <h3
                      className="
                        text-[15px]
                        font-bold
                        text-[#0F1B2D]

                        sm:text-[16px]
                      "
                    >
                      {point.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        max-w-[310px]
                        text-[13px]
                        leading-[1.5]
                        text-[#66758A]

                        sm:text-[14px]
                      "
                    >
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =================================================== */}
        {/* RIGHT FORM */}
        {/* =================================================== */}

        <div
          className="
            rounded-[16px]
            border
            border-[#DCE3EC]
            bg-white
            p-6
            shadow-[0_18px_45px_rgba(15,27,45,0.07)]

            sm:p-8
          "
        >
          {/* FORM TITLE */}

          <h3
            className="
              text-[26px]
              font-extrabold
              tracking-[-0.03em]
              text-[#0F1B2D]
            "
          >
            Send Us a Message
          </h3>

          {/* ================================================= */}
          {/* FORM */}
          {/* ================================================= */}

          <form className="mt-7" onSubmit={handleSubmit}>
            {/* FIRST ROW */}

            <div
              className="
                grid
                grid-cols-1
                gap-5

                md:grid-cols-2
              "
            >
              {/* FULL NAME */}

              <div>
                <label
                  htmlFor="fullName"
                  className="
                    mb-2
                    block
                    text-[12px]
                    font-semibold
                    text-[#0F1B2D]
                  "
                >
                  Full Name *
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="
                    h-[46px]
                    w-full
                    rounded-[7px]
                    border
                    border-[#CDD9E8]
                    bg-white
                    px-4
                    text-[13px]
                    text-[#0F1B2D]
                    outline-none
                    transition-all
                    duration-200

                    placeholder:text-[#8A9AB0]

                    focus:border-[#2463D4]
                    focus:ring-2
                    focus:ring-[#2463D4]/10
                  "
                />
              </div>

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-[12px]
                    font-semibold
                    text-[#0F1B2D]
                  "
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="
                    h-[46px]
                    w-full
                    rounded-[7px]
                    border
                    border-[#CDD9E8]
                    bg-white
                    px-4
                    text-[13px]
                    text-[#0F1B2D]
                    outline-none
                    transition-all
                    duration-200

                    placeholder:text-[#8A9AB0]

                    focus:border-[#2463D4]
                    focus:ring-2
                    focus:ring-[#2463D4]/10
                  "
                />
              </div>
            </div>

            {/* ================================================= */}
            {/* COMPANY NAME */}
            {/* ================================================= */}

            <div className="mt-5">
              <label
                htmlFor="company"
                className="
                  mb-2
                  block
                  text-[12px]
                  font-semibold
                  text-[#0F1B2D]
                "
              >
                Company Name
              </label>

              <input
                id="company"
                name="company"
                type="text"
                placeholder="Your Company"
                className="
                  h-[46px]
                  w-full
                  rounded-[7px]
                  border
                  border-[#CDD9E8]
                  bg-white
                  px-4
                  text-[13px]
                  text-[#0F1B2D]
                  outline-none
                  transition-all
                  duration-200

                  placeholder:text-[#8A9AB0]

                  focus:border-[#2463D4]
                  focus:ring-2
                  focus:ring-[#2463D4]/10
                "
              />
            </div>

            {/* ================================================= */}
            {/* PROJECT DETAILS */}
            {/* ================================================= */}

            <div className="mt-5">
              <label
                htmlFor="projectDetails"
                className="
                  mb-2
                  block
                  text-[12px]
                  font-semibold
                  text-[#0F1B2D]
                "
              >
                Project Details *
              </label>

              <textarea
                id="projectDetails"
                name="projectDetails"
                required
                rows={5}
                placeholder="Tell us about your project, goals, and any specific requirements..."
                className="
                  min-h-[112px]
                  w-full
                  resize-none
                  rounded-[7px]
                  border
                  border-[#CDD9E8]
                  bg-white
                  px-4
                  py-3
                  text-[13px]
                  leading-[1.5]
                  text-[#0F1B2D]
                  outline-none
                  transition-all
                  duration-200

                  placeholder:text-[#8A9AB0]

                  focus:border-[#2463D4]
                  focus:ring-2
                  focus:ring-[#2463D4]/10
                "
              />
            </div>

            {/* ================================================= */}
            {/* SUBMIT */}
            {/* ================================================= */}

            <button
              disabled={isSubmitting}
              type="submit"
              className="
                mt-5
                inline-flex
                h-[50px]
                w-full
                items-center
                justify-center
                gap-4
                rounded-[7px]
                bg-[#1674F5]
                px-6
                text-[14px]
                font-semibold
                text-white
                shadow-[0_8px_20px_rgba(22,116,245,0.18)]
                transition-all
                duration-200

                hover:-translate-y-[1px]
                hover:bg-[#125FCB]
                hover:shadow-[0_12px_25px_rgba(22,116,245,0.24)]
              "
            >
              <span>{isSubmitting ? "Sending..." : "Send Request"}</span>

              {!isSubmitting && <ArrowRight className="h-[18px] w-[18px]" />}
            </button>

            {status && (
              <p
                className={`mt-4 text-center text-[13px] leading-[1.6] ${
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
              title="Message sent"
              message="Thanks for reaching out. Our team has received your request and will get back to you."
            />

            {/* PRIVACY */}

            <p
              className="
                mt-4
                text-center
                text-[10px]
                leading-[1.5]
                text-[#7A899D]
              "
            >
              By submitting this form, you agree to our{" "}
              <Link
                href="/privacy"
                className="
                  font-semibold
                  text-[#1674F5]

                  hover:underline
                "
              >
                privacy policy.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
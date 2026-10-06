"use client";

import { FormEvent, useState } from "react";

import {
  ArrowRight,
  Building2,
  ChevronDown,
  FileText,
  Layers3,
  Link2,
  Mail,
  UserRound,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SubmissionSuccessDialog from "@/components/ui/SubmissionSuccessDialog";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  "Website Development",
  "Mobile Applications",
  "AI & Automation",
  "CRM Solutions",
  "E-Commerce",
  "Business Automation",
  "Custom Software",
  "Cloud & DevOps",
  "Digital Consultation",
  "Social Media Marketing",
];

/* =========================================================
   PAGE
========================================================= */

export default function ContactPage() {
  const [projectDetails, setProjectDetails] = useState("");
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [status, setStatus] = useState<{
    message: string;
    error: boolean;
  } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("kind", "contact");
    setIsSubmitting(true);
    setStatus({ message: "Sending your quote request...", error: false });

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "We could not send your quote request.");
      }

      setStatus(null);
      setIsSuccessOpen(true);
      setProjectDetails("");
      setService("");
      form.reset();
    } catch (error) {
      setStatus({
        message:
          error instanceof Error
            ? error.message
            : "We could not send your quote request. Please try again.",
        error: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ===================================================== */}
      {/* EXISTING HEADER */}
      {/* ===================================================== */}

      <Navbar />

      <main
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#F6F9FD]
          pt-[80px]
        "
      >
        {/* =================================================== */}
        {/* BACKGROUND DECORATION */}
        {/* =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-[-155px]
            top-[85px]
            h-[430px]
            w-[430px]
            rounded-full
            bg-[#E5F0FC]
            opacity-80
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-210px]
            top-[185px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#E7F1FC]
            opacity-80
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[-140px]
            h-[560px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-[#EDF6FF]
            opacity-65
            blur-[100px]
          "
        />

        {/* =================================================== */}
        {/* PAGE CONTENT */}
        {/* =================================================== */}

        <section
          className="
            relative
            z-10
            pb-20
            pt-14

            sm:pt-16

            lg:pb-24
            lg:pt-[62px]
          "
        >
          <div
            className="
              mx-auto
              max-w-[1240px]
              px-5

              sm:px-6
            "
          >
            {/* ================================================= */}
            {/* PAGE INTRO */}
            {/* ================================================= */}

            <div className="text-center">
              {/* GET A QUOTE */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-4
                "
              >
                <span
                  className="h-[1px] w-[50px]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #2463D4)",
                  }}
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.32em]
                    text-[#2463D4]

                    sm:text-[11px]
                  "
                >
                  Get a Quote
                </span>

                <span
                  className="h-[1px] w-[50px]"
                  style={{
                    background:
                      "linear-gradient(90deg, #2463D4, transparent)",
                  }}
                />
              </div>

              {/* MAIN HEADING */}

              <h1
                className="
                  mx-auto
                  mt-6
                  max-w-[900px]
                  text-[38px]
                  font-extrabold
                  leading-[1.05]
                  tracking-[-0.045em]
                  text-[#0A1530]

                  sm:text-[48px]

                  lg:text-[55px]
                "
              >
                Let&apos;s Build Something{" "}
                <span className="text-[#1677EA]">
                  Together.
                </span>
              </h1>

              {/* DESCRIPTION */}

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-[760px]
                  text-[15px]
                  leading-[1.65]
                  text-[#5C6B82]

                  sm:text-[17px]
                "
              >
                Tell us about your project, goals and requirements.
                We&apos;ll review your request
                <br className="hidden sm:block" />
                and get back to you with the right approach.
              </p>
            </div>

            {/* ================================================= */}
            {/* FORM CARD */}
            {/* ================================================= */}

            <div
              className="
                mx-auto
                mt-14
                max-w-[820px]
                rounded-[14px]
                border
                border-[#DFE7F0]
                bg-white
                px-6
                py-7
                shadow-[0_18px_55px_rgba(31,73,125,0.06)]

                sm:px-8
                sm:py-8

                lg:px-[30px]
                lg:py-[30px]
              "
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-7"
              >
                {/* ============================================= */}
                {/* ROW 1 */}
                {/* ============================================= */}

                <div
                  className="
                    grid
                    gap-6

                    md:grid-cols-2
                  "
                >
                  {/* FULL NAME */}

                  <div>
                    <label
                      htmlFor="fullName"
                      className="
                        mb-3
                        block
                        text-[14px]
                        font-semibold
                        text-[#111B34]
                      "
                    >
                      Full Name{" "}
                      <span className="text-[#E63333]">
                        *
                      </span>
                    </label>

                    <div
                      className="
                        flex
                        h-[56px]
                        items-center
                        rounded-[8px]
                        border
                        border-[#CCD8E5]
                        bg-white
                        px-4
                        transition

                        focus-within:border-[#1677EA]
                        focus-within:ring-2
                        focus-within:ring-[#1677EA]/10
                      "
                    >
                      <UserRound
                        className="
                          mr-3
                          h-[20px]
                          w-[20px]
                          shrink-0
                          text-[#53668D]
                        "
                        strokeWidth={1.9}
                      />

                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Enter your full name"
                        className="
                          min-w-0
                          flex-1
                          bg-transparent
                          text-[14px]
                          text-[#18253A]
                          outline-none
                          placeholder:text-[#697791]
                        "
                      />
                    </div>
                  </div>

                  {/* EMAIL */}

                  <div>
                    <label
                      htmlFor="email"
                      className="
                        mb-3
                        block
                        text-[14px]
                        font-semibold
                        text-[#111B34]
                      "
                    >
                      Email Address{" "}
                      <span className="text-[#E63333]">
                        *
                      </span>
                    </label>

                    <div
                      className="
                        flex
                        h-[56px]
                        items-center
                        rounded-[8px]
                        border
                        border-[#CCD8E5]
                        bg-white
                        px-4
                        transition

                        focus-within:border-[#1677EA]
                        focus-within:ring-2
                        focus-within:ring-[#1677EA]/10
                      "
                    >
                      <Mail
                        className="
                          mr-3
                          h-[20px]
                          w-[20px]
                          shrink-0
                          text-[#53668D]
                        "
                        strokeWidth={1.9}
                      />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="Enter your email address"
                        className="
                          min-w-0
                          flex-1
                          bg-transparent
                          text-[14px]
                          text-[#18253A]
                          outline-none
                          placeholder:text-[#697791]
                        "
                      />
                    </div>
                  </div>
                </div>

                {/* ============================================= */}
                {/* ROW 2 */}
                {/* ============================================= */}

                <div
                  className="
                    grid
                    gap-6

                    md:grid-cols-2
                  "
                >
                  {/* COMPANY */}

                  <div>
                    <label
                      htmlFor="company"
                      className="
                        mb-3
                        block
                        text-[14px]
                        font-semibold
                        text-[#111B34]
                      "
                    >
                      Company Name{" "}
                      <span className="font-normal text-[#52617A]">
                        (Optional)
                      </span>
                    </label>

                    <div
                      className="
                        flex
                        h-[56px]
                        items-center
                        rounded-[8px]
                        border
                        border-[#CCD8E5]
                        bg-white
                        px-4
                        transition

                        focus-within:border-[#1677EA]
                        focus-within:ring-2
                        focus-within:ring-[#1677EA]/10
                      "
                    >
                      <Building2
                        className="
                          mr-3
                          h-[20px]
                          w-[20px]
                          shrink-0
                          text-[#53668D]
                        "
                        strokeWidth={1.9}
                      />

                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Enter your company name"
                        className="
                          min-w-0
                          flex-1
                          bg-transparent
                          text-[14px]
                          text-[#18253A]
                          outline-none
                          placeholder:text-[#697791]
                        "
                      />
                    </div>
                  </div>

                  {/* WEBSITE */}

                  <div>
                    <label
                      htmlFor="website"
                      className="
                        mb-3
                        block
                        text-[14px]
                        font-semibold
                        text-[#111B34]
                      "
                    >
                      Website{" "}
                      <span className="font-normal text-[#52617A]">
                        (Optional)
                      </span>
                    </label>

                    <div
                      className="
                        flex
                        h-[56px]
                        items-center
                        rounded-[8px]
                        border
                        border-[#CCD8E5]
                        bg-white
                        px-4
                        transition

                        focus-within:border-[#1677EA]
                        focus-within:ring-2
                        focus-within:ring-[#1677EA]/10
                      "
                    >
                      <Link2
                        className="
                          mr-3
                          h-[20px]
                          w-[20px]
                          shrink-0
                          text-[#53668D]
                        "
                        strokeWidth={1.9}
                      />

                      <input
                        id="website"
                        name="website"
                        type="url"
                        placeholder="https://yourwebsite.com"
                        className="
                          min-w-0
                          flex-1
                          bg-transparent
                          text-[14px]
                          text-[#18253A]
                          outline-none
                          placeholder:text-[#697791]
                        "
                      />
                    </div>
                  </div>
                </div>

                {/* ============================================= */}
                {/* SERVICE */}
                {/* ============================================= */}

                <div>
                  <label
                    htmlFor="service"
                    className="
                      mb-3
                      block
                      text-[14px]
                      font-semibold
                      text-[#111B34]
                    "
                  >
                    What do you need?{" "}
                    <span className="text-[#E63333]">
                      *
                    </span>
                  </label>

                  <div
                    className="
                      relative
                      flex
                      h-[56px]
                      items-center
                      rounded-[8px]
                      border
                      border-[#CCD8E5]
                      bg-white
                      transition

                      focus-within:border-[#1677EA]
                      focus-within:ring-2
                      focus-within:ring-[#1677EA]/10
                    "
                  >
                    {/* ICON */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        z-10
                        -translate-y-1/2
                      "
                    >
                      <Layers3
                        className="
                          h-[20px]
                          w-[20px]
                          text-[#53668D]
                        "
                        strokeWidth={1.9}
                      />
                    </div>

                    {/* SELECT */}

                    <select
                      id="service"
                      name="service"
                      required
                      value={service}
                      onChange={(event) =>
                        setService(event.target.value)
                      }
                      className={`
                        h-full
                        w-full
                        appearance-none
                        rounded-[8px]
                        bg-transparent
                        pb-0
                        pl-[52px]
                        pr-[50px]
                        pt-0
                        text-[14px]
                        outline-none

                        ${
                          service
                            ? "text-[#18253A]"
                            : "text-[#697791]"
                        }
                      `}
                    >
                      <option value="">
                        Select a service
                      </option>

                      {services.map((item) => (
                        <option
                          key={item}
                          value={item}
                          className="text-[#18253A]"
                        >
                          {item}
                        </option>
                      ))}
                    </select>

                    {/* ARROW */}

                    <ChevronDown
                      className="
                        pointer-events-none
                        absolute
                        right-4
                        top-1/2
                        h-[18px]
                        w-[18px]
                        -translate-y-1/2
                        text-[#53668D]
                      "
                    />
                  </div>
                </div>

                {/* ============================================= */}
                {/* PROJECT DETAILS */}
                {/* ============================================= */}

                <div>
                  <label
                    htmlFor="projectDetails"
                    className="
                      mb-3
                      block
                      text-[14px]
                      font-semibold
                      text-[#111B34]
                    "
                  >
                    Project Details{" "}
                    <span className="text-[#E63333]">
                      *
                    </span>
                  </label>

                  <div
                    className="
                      relative
                      rounded-[8px]
                      border
                      border-[#CCD8E5]
                      bg-white
                      transition

                      focus-within:border-[#1677EA]
                      focus-within:ring-2
                      focus-within:ring-[#1677EA]/10
                    "
                  >
                    {/* ICON */}

                    <FileText
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-[18px]
                        h-[20px]
                        w-[20px]
                        text-[#53668D]
                      "
                      strokeWidth={1.9}
                    />

                    {/* TEXTAREA */}

                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      required
                      maxLength={1000}
                      rows={6}
                      value={projectDetails}
                      onChange={(event) =>
                        setProjectDetails(
                          event.target.value,
                        )
                      }
                      placeholder="Tell us about your project, goals and requirements..."
                      className="
                        min-h-[170px]
                        w-full
                        resize-none
                        rounded-[8px]
                        bg-transparent
                        pb-11
                        pl-[52px]
                        pr-5
                        pt-[17px]
                        text-[14px]
                        leading-[1.65]
                        text-[#18253A]
                        outline-none
                        placeholder:text-[#697791]
                      "
                    />

                    {/* COUNT */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        bottom-4
                        right-4
                        text-[12px]
                        text-[#5C6A83]
                      "
                    >
                      {projectDetails.length}/1000
                    </div>
                  </div>
                </div>

                {/* ============================================= */}
                {/* SUBMIT BUTTON */}
                {/* ============================================= */}

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="
                    flex
                    min-h-[58px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-[8px]
                    bg-[#0878F9]
                    px-6
                    text-[17px]
                    font-semibold
                    text-white
                    shadow-[0_8px_22px_rgba(8,120,249,0.18)]
                    transition-all
                    duration-200

                    hover:bg-[#066BDC]
                    hover:shadow-[0_10px_28px_rgba(8,120,249,0.24)]

                    active:translate-y-[1px]
                  "
                >
                  {isSubmitting ? "Sending..." : "Send Quote Request"}

                  {!isSubmitting && (
                    <ArrowRight
                      className="h-[19px] w-[19px]"
                      strokeWidth={2}
                    />
                  )}
                </button>

                {status && (
                  <p
                    className={`text-center text-[13px] leading-[1.6] ${
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
                  title="Quote request sent"
                  message="Thanks for sharing your project. Our team has received your request and will be in touch."
                />
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ===================================================== */}
      {/* EXISTING FOOTER */}
      {/* ===================================================== */}

      <Footer />
    </>
  );
}
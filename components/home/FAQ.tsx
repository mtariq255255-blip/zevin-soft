"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const faqs = [
  {
    number: "01",
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on the scope, features and complexity of the solution. During the initial discussion, we define the requirements and provide a realistic delivery timeline.",
  },
  {
    number: "02",
    question: "Do you provide maintenance and support after launch?",
    answer:
      "Yes. We can provide ongoing maintenance, updates, monitoring, troubleshooting, cloud management and technical support based on your business requirements.",
  },
  {
    number: "03",
    question: "Can you work with our existing in-house team?",
    answer:
      "Yes. We can work alongside your developers, designers, marketing team or management team, providing additional development capacity, technical expertise or specialised support.",
  },
  {
    number: "04",
    question: "What technologies do you use?",
    answer:
      "We select technologies based on the project's requirements rather than forcing every project into the same stack. Our capabilities include modern web and mobile development, AI, APIs, databases, cloud infrastructure and DevOps.",
  },
  {
    number: "05",
    question: "Can you integrate our existing systems?",
    answer:
      "Yes. We can connect websites, mobile applications, CRMs, APIs, databases, cloud services and third-party platforms to create a more connected business environment.",
  },
  {
    number: "06",
    question: "Can you build both websites and mobile applications?",
    answer:
      "Yes. We provide website development and mobile application development as part of our digital solutions services.",
  },
  {
    number: "07",
    question: "Can you help automate our business processes?",
    answer:
      "Yes. We can identify repetitive processes and develop workflow automation, AI-powered solutions and system integrations to reduce manual work.",
  },
  {
    number: "08",
    question: "How do you communicate project progress?",
    answer:
      "Projects can include structured planning, regular progress updates, sprint reviews and direct communication with the project team. The exact process is agreed at the beginning of the engagement.",
  },
  {
    number: "09",
    question: "Who owns the software and intellectual property?",
    answer:
      "Ownership and intellectual-property rights are defined in the project agreement. We clearly establish what is delivered, licensed and owned before development begins.",
  },
  {
    number: "10",
    question: "How do you start a project with Zevin Soft?",
    answer:
      "We start by understanding your business, objectives and requirements. We then recommend an appropriate solution, define the scope and discuss the project timeline and engagement model.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        bg-[#F7F9FC]
        py-8
        lg:py-14
      "
    >
      {/* SOFT BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-160px]
          h-[430px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          opacity-50
        "
        style={{
          background:
            "radial-gradient(circle, rgba(220,234,255,0.55) 0%, rgba(247,249,252,0) 72%)",
        }}
      />

      {/* MAIN CONTAINER */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1240px]
          grid-cols-1
          gap-6
          px-5
          sm:px-6
          lg:grid-cols-[0.72fr_1.55fr]
          lg:gap-5
        "
      >
        {/* =================================================== */}
        {/* LEFT PANEL */}
        {/* =================================================== */}

        <div
          className="
            relative
            min-h-[470px]
            overflow-hidden
            rounded-[16px]
            border
            border-[#D9E6F4]
            bg-[#EAF3FE]
            px-8
            py-10
            sm:px-10
            lg:min-h-full
          "
        >
          {/* decorative top right arc */}
          <div
            className="
              pointer-events-none
              absolute
              right-[-90px]
              top-[-100px]
              h-[260px]
              w-[260px]
              rounded-full
              bg-[#F5F9FE]
            "
          />

          {/* decorative bottom circles */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-[-130px]
              left-[-95px]
              h-[280px]
              w-[280px]
              rounded-full
              bg-[#D9E9FD]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-155px]
              left-[110px]
              h-[260px]
              w-[260px]
              rounded-full
              bg-[#EEF5FD]
            "
          />

          <div className="relative z-10">
            {/* small line */}
            <div className="mb-7 h-[2px] w-[52px] bg-[#2463D4]" />

            {/* heading */}
            <h2
              className="
                font-display
                text-[40px]
                font-extrabold
                leading-[1.02]
                tracking-[-0.04em]
                text-[#0F1B2D]
                sm:text-[46px]
              "
            >
              Frequently
              <br />
              Asked
              <br />
              <span className="text-[#1674F5]">
                Questions
              </span>
            </h2>

            <div className="mt-7 h-[2px] w-[32px] bg-[#75A7F5]" />

            {/* custom CTA copy */}
            <div className="mt-8 max-w-[270px]">
              <h3
                className="
                  text-[18px]
                  font-bold
                  text-[#0F1B2D]
                "
              >
                Still have questions?
              </h3>

              <p
                className="
                  mt-3
                  text-[13px]
                  leading-[1.55]
                  text-[#5E6F8D]
                "
              >
                Tell us what you&apos;re trying to build and we&apos;ll
                help you understand the right approach.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="
                mt-7
                inline-flex
                h-[48px]
                min-w-[180px]
                items-center
                justify-center
                gap-3
                rounded-[8px]
                bg-[#1674F5]
                px-6
                text-[14px]
                font-semibold
                text-white
                shadow-[0_8px_20px_rgba(22,116,245,0.20)]
                transition-all
                duration-200
                hover:-translate-y-[2px]
                hover:bg-[#125FCB]
                hover:shadow-[0_12px_26px_rgba(22,116,245,0.25)]
              "
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* =================================================== */}
        {/* FAQ ACCORDION */}
        {/* =================================================== */}

        <div className="flex flex-col gap-[7px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.number}
                className={`
                  overflow-hidden
                  rounded-[10px]
                  border
                  bg-white
                  transition-all
                  duration-300

                  ${
                    isOpen
                      ? "border-[#CFE0F5] shadow-[0_8px_24px_rgba(15,27,45,0.045)]"
                      : "border-[#DCE6F1] shadow-[0_3px_10px_rgba(15,27,45,0.018)]"
                  }
                `}
              >
                {/* QUESTION BUTTON */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-center
                    gap-4
                    px-4
                    py-[13px]
                    text-left
                    transition-colors
                    duration-200
                    hover:bg-[#FBFCFE]
                    sm:px-5
                  "
                >
                  {/* number */}
                  <span
                    className="
                      flex
                      h-[30px]
                      min-w-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-[7px]
                      bg-[#E7F0FC]
                      px-2
                      text-[12px]
                      font-bold
                      text-[#1674F5]
                    "
                  >
                    {faq.number}
                  </span>

                  {/* question */}
                  <span
                    className="
                      flex-1
                      text-[13px]
                      font-bold
                      leading-[1.35]
                      text-[#0F1B2D]
                      sm:text-[14px]
                    "
                  >
                    {faq.question}
                  </span>

                  {/* arrow */}
                  <ChevronDown
                    className={`
                      h-[18px]
                      w-[18px]
                      shrink-0
                      text-[#1674F5]
                      transition-transform
                      duration-300

                      ${isOpen ? "rotate-180" : ""}
                    `}
                    strokeWidth={2.4}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out

                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div
                      className="
                        pb-5
                        pl-[70px]
                        pr-6
                        text-[12.5px]
                        leading-[1.6]
                        text-[#66758A]
                        sm:pl-[76px]
                        sm:text-[13px]
                      "
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
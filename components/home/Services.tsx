import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "High-performing, responsive websites designed to represent your brand and turn visitors into customers.",
    tags: ["Corporate", "Business", "Web Apps"],
  },
  {
    number: "02",
    title: "Mobile Applications",
    description:
      "Build modern, scalable mobile applications for iOS and Android that deliver seamless user experiences.",
    tags: ["iOS", "Android", "Cross-Platform"],
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Use AI and intelligent automation to reduce repetitive work, improve workflows and make faster business decisions.",
    tags: ["AI Agents", "Workflow Automation", "AI Integration"],
  },
  {
    number: "04",
    title: "CRM Solutions",
    description:
      "Centralise customer information, manage leads and create better processes for sales, support and customer relationships.",
    tags: ["CRM", "Lead Management", "Customer Data"],
  },
  {
    number: "05",
    title: "Social Media Marketing",
    description:
      "Grow your brand with data-driven social media strategies and campaigns that reach the right audience.",
    tags: ["Social Media", "Content", "Campaigns"],
  },
  {
    number: "06",
    title: "Custom Software",
    description:
      "Build tailored software and connect the systems your business already relies on.",
    tags: ["Custom Software", "APIs", "System Integration"],
  },
  {
    number: "07",
    title: "Cloud & DevOps",
    description:
      "Design, deploy and manage secure, scalable cloud infrastructure with modern DevOps practices.",
    tags: ["AWS", "Azure", "CI/CD"],
  },
  {
    number: "08",
    title: "Digital Consultation",
    description:
      "Get expert advice and a clear technology roadmap to help your business grow, innovate and stay competitive.",
    tags: ["Strategy", "Digital Strategy", "IT Advisory"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
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
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-140px]
          h-[440px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          opacity-60
        "
        style={{
          background:
            "radial-gradient(circle, rgba(220,234,255,0.60) 0%, rgba(247,249,252,0) 72%)",
        }}
      />

      {/* ===================================================== */}
      {/* CONTAINER */}
      {/* ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1320px]
          px-5
          sm:px-6
        "
      >
        {/* =================================================== */}
        {/* SECTION TITLE */}
        {/* =================================================== */}

        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span
              className="block h-[1.5px] w-[48px]"
              style={{
                background:
                  "linear-gradient(90deg,rgba(36,99,212,0.06),#2463D4)",
              }}
            />

            <span
              className="
                whitespace-nowrap
                text-[10px]
                font-bold
                uppercase
                tracking-[0.32em]
                text-[#2463D4]
                sm:text-[11px]
              "
            >
              What We Do
            </span>

            <span
              className="block h-[1.5px] w-[48px]"
              style={{
                background:
                  "linear-gradient(90deg,#2463D4,rgba(36,99,212,0.06))",
              }}
            />
          </div>

          <h2
            className="
              mx-auto
              mt-5
              max-w-[820px]
              font-display
              text-[34px]
              font-extrabold
              leading-[1.06]
              tracking-[-0.04em]
              text-[#0F1B2D]

              sm:text-[42px]
              lg:text-[50px]
            "
          >
            Digital Solutions Built Around
            <br />

            <span className="text-[#2463D4]">
              Your Business.
            </span>
          </h2>
        </div>

        {/* =================================================== */}
        {/* SERVICE CARDS */}
        {/* =================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5

            md:grid-cols-2

            xl:grid-cols-4
          "
        >
          {services.map((service) => (
            <article
              key={service.number}
              className="
                group
                relative
                flex
                min-h-[238px]
                flex-col
                overflow-hidden
                rounded-[18px]
                border
                border-[#DCE3EC]
                bg-white
                px-5
                pb-[18px]
                pt-5
                shadow-[0_6px_20px_rgba(15,27,45,0.035)]
                transition-all
                duration-300
                ease-out

                hover:-translate-y-[5px]
                hover:border-[#B8CEE9]
                hover:shadow-[0_18px_42px_rgba(15,27,45,0.09)]
              "
            >
              {/* ============================================= */}
              {/* TOP BLUE HOVER BORDER */}
              {/* ============================================= */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-[3px]
                  w-0
                  bg-[#2463D4]
                  transition-all
                  duration-300

                  group-hover:w-full
                "
              />

              {/* ============================================= */}
              {/* SUBTLE HOVER GLOW */}
              {/* ============================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-90px]
                  top-[-90px]
                  h-[180px]
                  w-[180px]
                  rounded-full
                  bg-[#E7F0FC]
                  opacity-0
                  blur-3xl
                  transition-opacity
                  duration-300

                  group-hover:opacity-80
                "
              />

              {/* ============================================= */}
              {/* TITLE AREA */}
              {/* ============================================= */}

              <div
                className="
                  relative
                  z-10
                  flex
                  min-h-[48px]
                  items-start
                  justify-between
                  gap-3
                "
              >
                <h3
                  className="
                    max-w-[82%]
                    text-[18px]
                    font-extrabold
                    leading-[1.22]
                    tracking-[-0.025em]
                    text-[#0F1B2D]
                    transition-colors
                    duration-300

                    group-hover:text-[#2463D4]

                    2xl:text-[19px]
                  "
                >
                  {service.title}
                </h3>

                <span
                  className="
                    inline-flex
                    h-[32px]
                    min-w-[32px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EEF5FD]
                    px-2
                    text-[11px]
                    font-bold
                    text-[#7899E6]
                    transition-all
                    duration-300

                    group-hover:bg-[#2463D4]
                    group-hover:text-white
                  "
                >
                  {service.number}
                </span>
              </div>

              {/* ============================================= */}
              {/* DESCRIPTION */}
              {/* ============================================= */}

              <div
                className="
                  relative
                  z-10
                  min-h-[105px]
                  pt-2
                "
              >
                <p
                  className="
                    text-[13.5px]
                    leading-[1.52]
                    text-[#5E6F8D]

                    2xl:text-[14px]
                  "
                >
                  {service.description}
                </p>
              </div>

              {/* ============================================= */}
              {/* TAGS */}
              {/* SAME LEVEL + ONE LINE + LITTLE BOTTOM SPACE */}
              {/* ============================================= */}

              <div
                className="
                  relative
                  z-10
                  mt-[5px]
                  flex
                  w-full
                  flex-nowrap
                  items-center
                  gap-[5px]
                "
              >
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      inline-flex
                      shrink-0
                      items-center
                      justify-center
                      whitespace-nowrap
                      rounded-full
                      bg-[#EEF3F8]
                      px-[8px]
                      py-[6px]
                      text-[8.5px]
                      font-semibold
                      leading-none
                      text-[#2463D4]
                      transition-all
                      duration-300

                      group-hover:bg-[#E7F0FC]

                      2xl:px-[9px]
                      2xl:text-[9px]
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* ============================================= */}
              {/* BOTTOM HOVER EFFECT */}
              {/* ============================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-[15%]
                  right-[15%]
                  h-[1px]
                  bg-gradient-to-r
                  from-transparent
                  via-[#2463D4]/30
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-300

                  group-hover:opacity-100
                "
              />
            </article>
          ))}
        </div>

        {/* =================================================== */}
        {/* CTA PANEL */}
        {/* =================================================== */}

        <div
          className="
            mt-6
            flex
            flex-col
            gap-6
            rounded-[18px]
            border
            border-[#DCE7F3]
            bg-[#EEF5FC]
            px-6
            py-6
            shadow-[0_8px_24px_rgba(15,27,45,0.025)]

            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-8
          "
        >
          {/* CTA LEFT */}

          <div>
            <div
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.32em]
                text-[#2463D4]

                sm:text-[10px]
              "
            >
              Not Sure What You Need?
            </div>

            <h3
              className="
                mt-2
                font-display
                text-[22px]
                font-extrabold
                leading-tight
                tracking-[-0.025em]
                text-[#0F1B2D]

                sm:text-[27px]
              "
            >
              Let&apos;s Find the Right Solution for Your Business.
            </h3>
          </div>

          {/* CTA RIGHT */}

          <div className="shrink-0">
            <div
              className="
                flex
                flex-col
                gap-3

                sm:flex-row
                sm:items-center
              "
            >
              {/* TALK TO ZEVIN */}

              <Link
                href="/contact"
                className="
                  inline-flex
                  h-[47px]
                  min-w-[190px]
                  items-center
                  justify-center
                  gap-3
                  rounded-[9px]
                  bg-[#2463D4]
                  px-6
                  text-[13px]
                  font-semibold
                  text-white
                  shadow-[0_7px_18px_rgba(36,99,212,0.17)]
                  transition-all
                  duration-200

                  hover:-translate-y-[2px]
                  hover:bg-[#174EA6]
                  hover:shadow-[0_10px_24px_rgba(36,99,212,0.24)]
                "
              >
                <span>Talk to Zevin Soft</span>

                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* AI BUSINESS BUILDER */}

              <Link
                href="/ai-business-builder"
                className="
                  inline-flex
                  h-[47px]
                  min-w-[190px]
                  items-center
                  justify-center
                  rounded-[9px]
                  border
                  border-[#BFADEB]
                  bg-white
                  px-6
                  text-[13px]
                  font-semibold
                  text-[#7048C8]
                  transition-all
                  duration-200

                  hover:-translate-y-[2px]
                  hover:border-[#7048C8]
                  hover:bg-[#F1ECFA]
                "
              >
                Try AI Business Builder
              </Link>
            </div>

            {/* =============================================== */}
            {/* TRUST ITEMS */}
            {/* =============================================== */}

            <div
              className="
                mt-3
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-2
                text-[10px]
                text-[#66758A]
              "
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#2463D4]" />
                Free Consultation
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#2463D4]" />
                Tailored Recommendations
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#2463D4]" />
                No Obligation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
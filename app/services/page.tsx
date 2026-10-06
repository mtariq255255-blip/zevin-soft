import Link from "next/link";

import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cloud,
  Code2,
  Lightbulb,
  Megaphone,
  Monitor,
  Smartphone,
  UsersRound,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "High-performing, responsive websites designed to represent your brand and turn visitors into customers.",
    Icon: Monitor,
    color: "#1682F4",
    iconBg: "#E7F0FC",
    featured: false,
  },
  {
    number: "02",
    title: "Mobile Applications",
    description:
      "Build modern, scalable mobile applications for iOS and Android that deliver seamless user experiences.",
    Icon: Smartphone,
    color: "#7B2CE8",
    iconBg: "#F1E8FC",
    featured: false,
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Use AI and intelligent automation to reduce repetitive work, improve workflows and make faster business decisions.",
    Icon: Bot,
    color: "#7B2CE8",
    iconBg: "#EEDFFD",
    featured: true,
  },
  {
    number: "04",
    title: "CRM Solutions",
    description:
      "Centralise customer information, manage leads and create better processes for sales, support and customer relationships.",
    Icon: UsersRound,
    color: "#1682F4",
    iconBg: "#E7F0FC",
    featured: false,
  },
  {
    number: "05",
    title: "Social Media Marketing",
    description:
      "Grow your brand with data-driven social media strategies and campaigns that reach the right audience.",
    Icon: Megaphone,
    color: "#1682F4",
    iconBg: "#E7F0FC",
    featured: false,
  },
  {
    number: "06",
    title: "Custom Software",
    description:
      "Build tailored software and connect the systems your business already relies on.",
    Icon: Code2,
    color: "#7B2CE8",
    iconBg: "#F1E8FC",
    featured: false,
  },
  {
    number: "07",
    title: "Cloud & DevOps",
    description:
      "Design, deploy and manage secure, scalable cloud infrastructure with modern DevOps practices.",
    Icon: Cloud,
    color: "#1682F4",
    iconBg: "#E7F0FC",
    featured: false,
  },
  {
    number: "08",
    title: "Digital Consultation",
    description:
      "Get expert advice and a clear technology roadmap to help your business grow, innovate and stay competitive.",
    Icon: Lightbulb,
    color: "#F5A914",
    iconBg: "#FFF3DC",
    featured: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Keep your existing header */}
      <Navbar />

      <main className="overflow-hidden bg-[#F7F9FC] pt-[80px]">
        {/* ===================================================== */}
        {/* SERVICES INTRO */}
        {/* ===================================================== */}

        <section className="relative pb-6 pt-14 sm:pt-16 lg:pt-[58px]">
          {/* soft background */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-[420px]
              w-[900px]
              -translate-x-1/2
              rounded-full
              opacity-50
              blur-[100px]
            "
            style={{
              background:
                "radial-gradient(circle, rgba(220,234,255,.85), transparent 70%)",
            }}
          />

          <div className="relative z-10 mx-auto max-w-[1240px] px-5 text-center sm:px-6">
            {/* eyebrow */}

            <div className="flex items-center justify-center gap-4">
              <span
                className="h-[1px] w-[54px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #2463D4)",
                }}
              />

              <span className="text-[11px] font-bold uppercase tracking-[0.30em] text-[#2463D4] sm:text-[12px]">
                What We Do
              </span>

              <span
                className="h-[1px] w-[54px]"
                style={{
                  background:
                    "linear-gradient(90deg, #2463D4, transparent)",
                }}
              />
            </div>

            {/* heading */}

            <h1
              className="
                mx-auto
                mt-7
                max-w-[900px]
                text-[38px]
                font-extrabold
                leading-[1.03]
                tracking-[-0.04em]
                text-[#0F1B2D]

                sm:text-[48px]
                lg:text-[58px]
              "
            >
              Digital Solutions Built Around
              <br />

              <span className="text-[#1672EB]">
                Your Business.
              </span>
            </h1>

            {/* description */}

            <p
              className="
                mx-auto
                mt-5
                max-w-[720px]
                text-[15px]
                leading-[1.55]
                text-[#52627A]

                sm:text-[17px]
              "
            >
              From websites and mobile applications to AI, CRM and cloud
              solutions,
              <br className="hidden md:block" />
              we build digital systems around the way your business actually
              works.
            </p>
          </div>
        </section>

        {/* ===================================================== */}
        {/* SERVICE CARDS */}
        {/* ===================================================== */}

        <section id="services" className="pb-8 pt-5">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
            <div
              className="
                grid
                grid-cols-1
                gap-[18px]

                sm:grid-cols-2

                lg:grid-cols-4
              "
            >
              {services.map((service) => {
                const Icon = service.Icon;

                return (
                  <article
                    key={service.number}
                    className={`
                      group
                      relative
                      flex
                      min-h-[320px]
                      flex-col
                      rounded-[12px]
                      border
                      p-[18px]
                      transition-all
                      duration-300

                      ${
                        service.featured
                          ? `
                            border-[#E6CFFB]
                            bg-gradient-to-br
                            from-[#FFFFFF]
                            via-[#FCF7FF]
                            to-[#F8EFFF]
                            shadow-[0_12px_36px_rgba(112,72,200,0.08)]
                          `
                          : `
                            border-[#E0E7F0]
                            bg-white
                            shadow-[0_7px_22px_rgba(15,27,45,0.035)]
                          `
                      }

                      hover:-translate-y-1
                      hover:shadow-[0_15px_35px_rgba(15,27,45,0.08)]
                    `}
                  >
                    {/* number */}

                    <span
                      className={`
                        absolute
                        right-5
                        top-5
                        text-[14px]
                        font-bold

                        ${
                          service.featured
                            ? "text-[#7026DB]"
                            : "text-[#9AAEE1]"
                        }
                      `}
                    >
                      {service.number}
                    </span>

                    {/* icon */}

                    <div
                      className="
                        flex
                        h-[72px]
                        w-[72px]
                        items-center
                        justify-center
                        rounded-[14px]
                      "
                      style={{
                        backgroundColor: service.iconBg,
                        color: service.color,
                      }}
                    >
                      <Icon
                        className="h-[38px] w-[38px]"
                        strokeWidth={2}
                      />
                    </div>

                    {/* title */}

                    <h2
                      className="
                        mt-3
                        text-[18px]
                        font-bold
                        leading-[1.15]
                        tracking-[-0.02em]
                        text-[#101A30]
                      "
                    >
                      {service.title}
                    </h2>

                    {/* description */}

                    <p
                      className="
                        mt-2
                        text-[13px]
                        leading-[1.55]
                        text-[#53627A]

                        lg:text-[13.5px]
                      "
                    >
                      {service.description}
                    </p>

                    {/* bottom action */}

                    <div className="mt-auto flex justify-end pt-3">
                      <Link
                        href="/contact"
                        aria-label={`Contact us about ${service.title}`}
                        className={`
                          flex
                          h-[38px]
                          w-[38px]
                          items-center
                          justify-center
                          rounded-full
                          border
                          bg-white
                          transition-all
                          duration-200

                          ${
                            service.featured
                              ? `
                                border-[#8746E7]
                                text-[#7026DB]
                                hover:bg-[#7026DB]
                              `
                              : `
                                border-[#8FBCEC]
                                text-[#0872E4]
                                hover:bg-[#0872E4]
                              `
                          }

                          hover:text-white
                        `}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* BOTTOM CTA */}
        {/* ===================================================== */}

        <section className="pb-16 pt-3 lg:pb-20">
          <div className="mx-auto max-w-[1240px] px-5 sm:px-6">
            <div
              className="
                relative
                overflow-hidden
                rounded-[12px]
                border
                border-[#E3EBF5]
                bg-[#EEF5FC]
                px-7
                py-8

                md:px-10

                lg:px-[62px]
                lg:py-[38px]
              "
            >
              {/* background glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-120px]
                  top-[-100px]
                  h-[300px]
                  w-[420px]
                  rounded-full
                  bg-[#E8F3FF]
                  blur-[70px]
                "
              />

              <div
                className="
                  relative
                  z-10
                  grid
                  gap-10

                  lg:grid-cols-[1.12fr_0.88fr]
                  lg:items-center
                "
              >
                {/* LEFT */}

                <div>
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.30em]
                      text-[#126CD7]

                      sm:text-[11px]
                    "
                  >
                    Not Sure What You Need?
                  </p>

                  <h2
                    className="
                      mt-4
                      max-w-[570px]
                      text-[32px]
                      font-extrabold
                      leading-[1.08]
                      tracking-[-0.035em]
                      text-[#0D1830]

                      sm:text-[38px]
                      lg:text-[42px]
                    "
                  >
                    Let&apos;s Find the Right Solution
                    <br className="hidden sm:block" />
                    for Your Business.
                  </h2>
                </div>

                {/* RIGHT */}

                <div>
                  <p
                    className="
                      max-w-[470px]
                      text-[14px]
                      leading-[1.55]
                      text-[#52627A]
                    "
                  >
                    Tell us about your goals and our team will recommend the best
                    solution tailored to your industry and business needs.
                  </p>

                  {/* buttons */}

                  <div
                    className="
                      mt-5
                      grid
                      gap-3

                      sm:grid-cols-2
                    "
                  >
                    <Link
                      href="/contact"
                      className="
                        inline-flex
                        min-h-[48px]
                        items-center
                        justify-center
                        gap-3
                        rounded-[7px]
                        bg-[#0878EA]
                        px-5
                        text-[13px]
                        font-semibold
                        text-white
                        shadow-[0_7px_18px_rgba(8,120,234,0.18)]
                        transition
                        duration-200

                        hover:bg-[#1762C4]
                      "
                    >
                      Talk to Zevin Soft

                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <Link
                      href="/ai-business-builder"
                      className="
                        inline-flex
                        min-h-[48px]
                        items-center
                        justify-center
                        rounded-[7px]
                        border
                        border-[#7C3BD7]
                        bg-white
                        px-5
                        text-[13px]
                        font-semibold
                        text-[#6A27C5]
                        transition
                        duration-200

                        hover:bg-[#F5EEFD]
                      "
                    >
                      Try AI Business Builder
                    </Link>
                  </div>

                  {/* trust row */}

                  <div
                    className="
                      mt-5
                      flex
                      flex-wrap
                      gap-x-7
                      gap-y-3
                    "
                  >
                    {[
                      "Free Consultation",
                      "Tailored Recommendations",
                      "No Obligation",
                    ].map((item) => (
                      <div
                        key={item}
                        className="
                          flex
                          items-center
                          gap-2
                          text-[10px]
                          text-[#637288]
                        "
                      >
                        <CheckCircle2
                          className="
                            h-[15px]
                            w-[15px]
                            fill-[#0878EA]
                            text-white
                          "
                          strokeWidth={3}
                        />

                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Keep your existing footer */}
      <Footer />
    </>
  );
}
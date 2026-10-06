import Link from "next/link";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    number: "01",
    title: "Development",
    description:
      "Build your digital presence with modern websites and mobile app development solutions that help you reach more customers and grow your business.",
    numberColor: "#4F86F7",
    background:
      "linear-gradient(135deg, #F7FBFF 0%, #EDF6FF 100%)",
    border: "#DBEAFE",
  },
  {
    number: "02",
    title: "Automate Your Business",
    description:
      "Reduce repetitive work, streamline processes and save time with AI-driven automation and intelligent workflows.",
    numberColor: "#A855F7",
    background:
      "linear-gradient(135deg, #FFFCFF 0%, #F8F2FF 100%)",
    border: "#EADCF8",
  },
  {
    number: "03",
    title: "Manage Customers",
    description:
      "Organise leads, customers and relationships with smart CRM solutions that help you sell more and provide better service.",
    numberColor: "#0DB99A",
    background:
      "linear-gradient(135deg, #F7FFFD 0%, #ECFAF7 100%)",
    border: "#D7F1EA",
  },
  {
    number: "04",
    title: "Connect Your Systems",
    description:
      "Integrate your tools, platforms and data with custom software, APIs and secure cloud infrastructure for a more connected business.",
    numberColor: "#6794F5",
    background:
      "linear-gradient(135deg, #F8FBFF 0%, #EFF6FF 100%)",
    border: "#DBE8FA",
  },
];

export default function BusinessSolutions() {
  return (
    <section
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
          top-[-100px]
          h-[420px]
          w-[850px]
          -translate-x-1/2
          rounded-full
          opacity-50
        "
        style={{
          background:
            "radial-gradient(circle, rgba(220,234,255,0.55) 0%, rgba(247,249,252,0) 72%)",
        }}
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1240px]
          px-5
          sm:px-6
        "
      >
        {/* =================================================== */}
        {/* SECTION EYEBROW */}
        {/* =================================================== */}

        <div className="flex items-center justify-center gap-4">
          <span
            className="block h-[1.5px] w-[44px]"
            style={{
              background:
                "linear-gradient(90deg,rgba(36,99,212,0.08),#2463D4)",
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
            Solutions For Your Business
          </span>

          <span
            className="block h-[1.5px] w-[44px]"
            style={{
              background:
                "linear-gradient(90deg,#2463D4,rgba(36,99,212,0.08))",
            }}
          />
        </div>

        {/* =================================================== */}
        {/* HEADING */}
        {/* =================================================== */}

        <h2
          className="
            mx-auto
            mt-5
            max-w-[980px]
            text-center
            font-display
            text-[36px]
            font-extrabold
            leading-[1.05]
            tracking-[-0.045em]
            text-[#0F1B2D]

            sm:text-[44px]
            lg:text-[54px]
          "
        >
          What Are You Looking to{" "}
          <span className="text-[#1674F5]">Improve?</span>
        </h2>

        {/* =================================================== */}
        {/* SOLUTION CARDS */}
        {/* =================================================== */}

        <div
          className="
            mt-9
            grid
            grid-cols-1
            gap-4

            md:grid-cols-2
          "
        >
          {solutions.map((solution) => (
            <article
              key={solution.number}
              className="
                group
                relative
                min-h-[220px]
                overflow-hidden
                rounded-[14px]
                border
                px-7
                py-6
                transition-all
                duration-300

                hover:-translate-y-[4px]
                hover:shadow-[0_16px_38px_rgba(15,27,45,0.08)]
              "
              style={{
                background: solution.background,
                borderColor: solution.border,
              }}
            >
              {/* subtle hover light */}
              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-80px]
                  top-[-80px]
                  h-[180px]
                  w-[180px]
                  rounded-full
                  bg-white
                  opacity-0
                  blur-3xl
                  transition-opacity
                  duration-300

                  group-hover:opacity-70
                "
              />

              <div className="relative z-10">
                {/* NUMBER */}
                <div
                  className="
                    text-[15px]
                    font-bold
                  "
                  style={{
                    color: solution.numberColor,
                  }}
                >
                  {solution.number}
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-3
                    text-[26px]
                    font-extrabold
                    leading-[1.15]
                    tracking-[-0.025em]
                    text-[#0F1B2D]

                    sm:text-[27px]
                  "
                >
                  {solution.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-3
                    max-w-[530px]
                    text-[16px]
                    leading-[1.45]
                    text-[#596B8B]

                    sm:text-[17px]
                  "
                >
                  {solution.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* =================================================== */}
        {/* CTA */}
        {/* =================================================== */}

        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="
              inline-flex
              h-[54px]
              min-w-[210px]
              items-center
              justify-center
              gap-4
              rounded-[8px]
              bg-[#1674F5]
              px-7
              text-[15px]
              font-semibold
              text-white
              shadow-[0_8px_20px_rgba(22,116,245,0.20)]
              transition-all
              duration-200

              hover:-translate-y-[2px]
              hover:bg-[#125FCB]
              hover:shadow-[0_12px_28px_rgba(22,116,245,0.26)]
            "
          >
            <span>Get in Touch</span>

            <ArrowRight className="h-[18px] w-[18px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
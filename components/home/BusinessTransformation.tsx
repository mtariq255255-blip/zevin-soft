import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  FileText,
  Globe2,
  Lightbulb,
  Play,
  Settings2,
  Star,
  UsersRound,
} from "lucide-react";

const processSteps = [
  {
    title: "Understand",
    description: "We listen, analyse and identify opportunities.",
    Icon: Lightbulb,
    iconColor: "#2463D4",
    iconBg: "#E7F0FC",
  },
  {
    title: "Build & Integrate",
    description: "We develop, automate and connect your systems.",
    Icon: Settings2,
    iconColor: "#7048C8",
    iconBg: "#F1ECFA",
  },
  {
    title: "Drive Real Impact",
    description: "We help you achieve measurable business growth.",
    Icon: BarChart3,
    iconColor: "#09B89C",
    iconBg: "#E7FAF5",
  },
];

const stats = [
  {
    value: "150+",
    label: "Projects Delivered",
    Icon: FileText,
    iconColor: "#2463D4",
    iconBg: "#E7F0FC",
  },
  {
    value: "80+",
    label: "Happy Clients",
    Icon: UsersRound,
    iconColor: "#7048C8",
    iconBg: "#F1ECFA",
  },
  {
    value: "12+",
    label: "Industries Served",
    Icon: Globe2,
    iconColor: "#09B89C",
    iconBg: "#E7FAF5",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    Icon: Star,
    iconColor: "#F59A1B",
    iconBg: "#FFF5DF",
  },
];

export default function BusinessTransformation() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#F7F9FC]
        scroll-mt-[80px]
        py-8
              "
    >
      {/* RIGHT DOTTED DECORATION */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-[270px]
          w-[220px]
          opacity-45
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, #B8D3F7 1.2px, transparent 1.2px)",
          backgroundSize: "13px 13px",
        }}
      />

      {/* BOTTOM SOFT DECORATION */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-60px]
          left-[-8%]
          h-[120px]
          w-[60%]
          rounded-[50%]
          bg-[#EEF5FD]
          opacity-80
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-70px]
          right-[-8%]
          h-[120px]
          w-[65%]
          rounded-[50%]
          bg-[#F1F6FC]
        "
      />

      {/* MAIN CONTAINER */}
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
        {/* TOP CONTENT */}
        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-[0.92fr_1.08fr]
            lg:gap-14
          "
        >
          {/* LEFT IMAGE */}
          <div className="relative">
            <Image
              src="/images/business-transformation-office.png"
              alt="Zevin Soft modern digital business office"
              width={900}
              height={900}
              priority
              className="
                block
                h-auto
                w-full
                object-contain
              "
            />

            {/* FLOATING CARD */}
            <div
              className="
                absolute
                bottom-[2%]
                left-[9%]
                flex
                w-[72%]
                items-center
                justify-between
                gap-4
                rounded-[18px]
                bg-white
                px-5
                py-4
                shadow-[0_12px_32px_rgba(15,27,45,0.12)]
                sm:w-[66%]
                lg:bottom-[3%]
              "
            >
              <div className="flex items-start gap-3">
                <div
                  className="
                    mt-1
                    h-[55px]
                    w-[3px]
                    shrink-0
                    rounded-full
                    bg-[#2463D4]
                  "
                />

                <p
                  className="
                    text-[12px]
                    font-semibold
                    leading-[1.45]
                    text-[#0F1B2D]
                    sm:text-[13px]
                    lg:text-[14px]
                  "
                >
                  Empowering Businesses
                  <br />
                  with Technology for
                  <br />
                  a Brighter Tomorrow
                </p>
              </div>

              <Link
                href="/about"
                aria-label="Learn more about Zevin Soft"
                className="
                  flex
                  h-[44px]
                  w-[44px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#EEF4FD]
                  text-[#2463D4]
                  transition-all
                  duration-200
                  hover:bg-[#2463D4]
                  hover:text-white
                "
              >
                <ArrowRight className="h-[18px] w-[18px]" />
              </Link>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="pt-3 lg:pt-0">
            {/* EYEBROW */}
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="
                  block
                  h-[2px]
                  w-[42px]
                  shrink-0
                "
                style={{
                  background:
                    "linear-gradient(90deg,#2463D4 0%,rgba(36,99,212,0.12) 100%)",
                }}
              />

              <span
                className="
                  whitespace-nowrap
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.30em]
                  text-[#2463D4]
                  sm:text-[11px]
                "
              >
                Our Approach
              </span>
            </div>

            {/* HEADING */}
            <h2
              className="
                mt-5
                font-display
                text-[34px]
                font-extrabold
                leading-[1.06]
                tracking-[-0.035em]
                text-[#0F1B2D]
                sm:text-[42px]
                lg:text-[48px]
              "
            >
              Transform Ideas Into
              <br />
              <span className="text-[#2463D4]">
                Real Business Growth.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                max-w-[600px]
                text-[15px]
                leading-[1.6]
                text-[#425166]
                sm:text-[16px]
              "
            >
              We combine strategy, technology and automation to help
              businesses work smarter, serve customers better and grow
              faster in the digital world.
            </p>

            {/* PROCESS STEPS */}
            <div
              className="
                mt-7
                grid
                gap-7
                sm:grid-cols-3
                sm:gap-0
              "
            >
              {processSteps.map((step, index) => {
                const Icon = step.Icon;

                return (
                  <div
                    key={step.title}
                    className={`
                      relative
                      ${
                        index !== 0
                          ? "sm:border-l sm:border-[#DCE3EC] sm:pl-7"
                          : ""
                      }
                      ${
                        index !== processSteps.length - 1
                          ? "sm:pr-7"
                          : ""
                      }
                    `}
                  >
                    <div
                      className="
                        flex
                        h-[52px]
                        w-[52px]
                        items-center
                        justify-center
                        rounded-full
                      "
                      style={{
                        backgroundColor: step.iconBg,
                        color: step.iconColor,
                      }}
                    >
                      <Icon
                        className="h-[25px] w-[25px]"
                        strokeWidth={2.2}
                      />
                    </div>

                    <h3
                      className="
                        mt-3
                        text-[15px]
                        font-bold
                        text-[#0F1B2D]
                        lg:text-[16px]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[13px]
                        leading-[1.45]
                        text-[#66758A]
                      "
                    >
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* STATISTICS */}
        <div
          className="
            mt-8
            grid
            overflow-hidden
            rounded-[18px]
            border
            border-[#E3EBF5]
            bg-[#EEF5FC]
            sm:grid-cols-2
            lg:mt-9
            lg:grid-cols-4
          "
        >
          {stats.map((stat, index) => {
            const Icon = stat.Icon;

            return (
              <div
                key={stat.label}
                className={`
                  flex
                  items-center
                  justify-center
                  gap-5
                  px-6
                  py-6

                  ${
                    index !== stats.length - 1
                      ? "lg:border-r lg:border-[#D9E5F2]"
                      : ""
                  }

                  ${
                    index < 2
                      ? "sm:border-b sm:border-[#D9E5F2] lg:border-b-0"
                      : ""
                  }
                `}
              >
                <div
                  className="
                    flex
                    h-[56px]
                    w-[56px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                  "
                  style={{
                    backgroundColor: stat.iconBg,
                    color: stat.iconColor,
                  }}
                >
                  <Icon
                    className="h-[26px] w-[26px]"
                    strokeWidth={2.2}
                  />
                </div>

                <div>
                  <div
                    className="
                      font-display
                      text-[29px]
                      font-extrabold
                      leading-none
                      tracking-[-0.03em]
                      text-[#0F1B2D]
                    "
                  >
                    {stat.value}
                  </div>

                  <div
                    className="
                      mt-2
                      text-[12px]
                      font-medium
                      text-[#66758A]
                    "
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM BUTTONS */}
        <div
          className="
            mt-7
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-center
            md:justify-end
          "
        >
          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/about"
              className="
                inline-flex
                h-[48px]
                items-center
                justify-center
                gap-3
                rounded-[8px]
                bg-[#2463D4]
                px-7
                text-[14px]
                font-semibold
                text-white
                shadow-[0_8px_18px_rgba(36,99,212,0.18)]
                transition-all
                duration-200
                hover:bg-[#174EA6]
              "
            >
              <span>Learn More About Us</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/about"
              className="
                inline-flex
                items-center
                gap-3
                text-[13px]
                font-medium
                text-[#425166]
                transition-colors
                duration-200
                hover:text-[#2463D4]
              "
            >
              <span
                className="
                  flex
                  h-[36px]
                  w-[36px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#2463D4]
                  text-white
                  shadow-[0_5px_14px_rgba(36,99,212,0.20)]
                "
              >
                <Play className="ml-[2px] h-[14px] w-[14px] fill-current" />
              </span>

              <span>Watch Our Story</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
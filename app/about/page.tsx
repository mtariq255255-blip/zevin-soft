import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  Link2,
  Target,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* =========================================================
   VALUES
========================================================= */

const values = [
  {
    title: "Business First",
    description:
      "We focus on your business goals before choosing the technology.",
    Icon: Target,
    color: "#1677EA",
    bg: "#E7F0FC",
  },
  {
    title: "Practical Solutions",
    description:
      "We build solutions that are useful, maintainable and aligned with your real needs.",
    Icon: Layers3,
    color: "#7048C8",
    bg: "#F1E8FC",
  },
  {
    title: "Connected Systems",
    description:
      "We help you connect websites, applications, CRM and other systems so everything works together.",
    Icon: Link2,
    color: "#10B394",
    bg: "#E7FAF5",
  },
];

/* =========================================================
   PROCESS
========================================================= */

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, challenges and goals.",
    color: "#1677EA",
    bg: "#E7F0FC",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We design and develop the right digital solution using modern technologies.",
    color: "#7048C8",
    bg: "#F1E8FC",
  },
  {
    number: "03",
    title: "Improve",
    description:
      "We refine, integrate and support your solution as your business evolves.",
    color: "#10B394",
    bg: "#E7FAF5",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ===================================================== */}
      {/* EXISTING HEADER */}
      {/* ===================================================== */}

      <Navbar />

      <main className="overflow-hidden bg-[#F7F9FC] pt-[80px]">
        {/* =================================================== */}
        {/* BREADCRUMB */}
        {/* =================================================== */}

        <section className="border-b border-[#E5EBF2] bg-[#F3F7FB]">
          <div
            className="
              mx-auto
              flex
              h-[58px]
              max-w-[1240px]
              items-center
              gap-3
              px-5
              text-[12px]
              text-[#66758A]

              sm:px-6
            "
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#2463D4]"
            >
              Home
            </Link>

            <span className="text-[#A7B3C2]">
              ›
            </span>

            <span className="font-medium text-[#425166]">
              About
            </span>
          </div>
        </section>

        {/* =================================================== */}
        {/* ABOUT HERO */}
        {/* =================================================== */}

        <section
          className="
            relative
            bg-white
            py-14

            sm:py-16

            lg:py-[72px]
          "
        >
          {/* subtle glow */}
          <div
            className="
              pointer-events-none
              absolute
              right-[-160px]
              top-[-120px]
              h-[420px]
              w-[520px]
              rounded-full
              bg-[#EDF5FF]
              opacity-60
              blur-[100px]
            "
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
            <div className="max-w-[830px]">
              {/* eyebrow */}

              <div className="flex items-center gap-3">
                <span
                  className="
                    block
                    h-[1px]
                    w-[42px]
                  "
                  style={{
                    background:
                      "linear-gradient(90deg,#2463D4,rgba(36,99,212,.15))",
                  }}
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.27em]
                    text-[#2463D4]

                    sm:text-[11px]
                  "
                >
                  About Zevin Soft
                </span>

                <span
                  className="
                    block
                    h-[1px]
                    w-[42px]
                  "
                  style={{
                    background:
                      "linear-gradient(90deg,#2463D4,rgba(36,99,212,.15))",
                  }}
                />
              </div>

              {/* heading */}

              <h1
                className="
                  mt-6
                  text-[38px]
                  font-extrabold
                  leading-[1.07]
                  tracking-[-0.04em]
                  text-[#0F1B2D]

                  sm:text-[48px]

                  lg:text-[56px]
                "
              >
                A Digital Solutions Company
                <br />
                Focused on{" "}
                <span className="text-[#1672EA]">
                  Your Business.
                </span>
              </h1>

              {/* description */}

              <p
                className="
                  mt-6
                  max-w-[850px]
                  text-[15px]
                  leading-[1.7]
                  text-[#53627A]

                  sm:text-[17px]
                "
              >
                Zevin Soft helps businesses turn ideas and challenges
                into practical digital solutions.
                <br className="hidden md:block" />
                We work with modern technologies to build, improve and
                connect digital systems
                <br className="hidden md:block" />
                that support the way your business operates and grows.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================== */}
        {/* WHAT WE STAND FOR */}
        {/* =================================================== */}

        <section
          className="
            border-y
            border-[#E8EEF5]
            bg-[#F0F6FC]
            py-14

            lg:py-[62px]
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-[1240px]
              gap-12
              px-5

              sm:px-6

              lg:grid-cols-[0.9fr_1.1fr]
              lg:items-center
              lg:gap-14
            "
          >
            {/* LEFT */}

            <div>
              <div className="flex items-center gap-3">
                <span
                  className="
                    block
                    h-[1px]
                    w-[42px]
                    bg-[#2463D4]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.27em]
                    text-[#2463D4]

                    sm:text-[11px]
                  "
                >
                  What We Stand For
                </span>
              </div>

              <h2
                className="
                  mt-5
                  text-[33px]
                  font-extrabold
                  leading-[1.12]
                  tracking-[-0.035em]
                  text-[#0F1B2D]

                  sm:text-[39px]

                  lg:text-[43px]
                "
              >
                Technology Should
                <br />
                Make Business Simpler.
              </h2>

              <p
                className="
                  mt-5
                  max-w-[510px]
                  text-[14px]
                  leading-[1.7]
                  text-[#53627A]

                  sm:text-[15px]
                "
              >
                We believe technology is most valuable when it solves
                real business problems. Our focus is on understanding
                your goals, finding the right approach and building
                solutions that are useful, reliable and easy to grow
                with.
              </p>
            </div>

            {/* RIGHT CARDS */}

            <div
              className="
                grid
                gap-4

                sm:grid-cols-3
              "
            >
              {values.map((value) => {
                const Icon = value.Icon;

                return (
                  <article
                    key={value.title}
                    className="
                      min-h-[245px]
                      rounded-[10px]
                      border
                      border-[#DDE6F0]
                      bg-white
                      p-5
                      shadow-[0_6px_22px_rgba(15,27,45,.035)]
                    "
                  >
                    <div
                      className="
                        flex
                        h-[55px]
                        w-[55px]
                        items-center
                        justify-center
                        rounded-[14px]
                      "
                      style={{
                        backgroundColor: value.bg,
                        color: value.color,
                      }}
                    >
                      <Icon
                        className="h-[28px] w-[28px]"
                        strokeWidth={2.2}
                      />
                    </div>

                    <h3
                      className="
                        mt-5
                        text-[15px]
                        font-bold
                        text-[#0F1B2D]
                      "
                    >
                      {value.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[13px]
                        leading-[1.6]
                        text-[#607088]
                      "
                    >
                      {value.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =================================================== */}
        {/* OUR APPROACH */}
        {/* =================================================== */}

        <section
          className="
            bg-white
            py-14

            lg:py-[62px]
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
            {/* HEADER */}

            <div className="max-w-[650px]">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-[42px] bg-[#2463D4]" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.27em]
                    text-[#2463D4]

                    sm:text-[11px]
                  "
                >
                  Our Approach
                </span>
              </div>

              <h2
                className="
                  mt-5
                  text-[33px]
                  font-extrabold
                  leading-[1.1]
                  tracking-[-0.035em]
                  text-[#0F1B2D]

                  sm:text-[40px]
                "
              >
                Understand. Build. Improve.
              </h2>

              <p
                className="
                  mt-3
                  text-[14px]
                  leading-[1.65]
                  text-[#53627A]

                  sm:text-[15px]
                "
              >
                We follow a simple and transparent approach to turn
                your requirements
                <br className="hidden md:block" />
                into a working digital solution.
              </p>
            </div>

            {/* PROCESS */}

            <div
              className="
                mt-10
                grid
                gap-8

                md:grid-cols-3
                md:gap-5
              "
            >
              {process.map((item, index) => (
                <div
                  key={item.number}
                  className="
                    relative
                    flex
                    items-start
                    gap-5
                  "
                >
                  {/* number */}

                  <div
                    className="
                      flex
                      h-[60px]
                      w-[60px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      text-[18px]
                      font-extrabold
                    "
                    style={{
                      color: item.color,
                      backgroundColor: item.bg,
                    }}
                  >
                    {item.number}
                  </div>

                  {/* content */}

                  <div className="pt-2">
                    <h3
                      className="
                        text-[16px]
                        font-bold
                        text-[#0F1B2D]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-[230px]
                        text-[13px]
                        leading-[1.55]
                        text-[#607088]
                      "
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* arrow */}

                  {index !== process.length - 1 && (
                    <ArrowRight
                      className="
                        absolute
                        right-[-5px]
                        top-[21px]
                        hidden
                        h-[20px]
                        w-[20px]
                        text-[#1677EA]

                        md:block
                      "
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================== */}
        {/* BOTTOM CTA */}
        {/* =================================================== */}

        <section
          className="
            bg-white
            pb-16

            lg:pb-20
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
            <div
              className="
                relative
                overflow-hidden
                rounded-[12px]
                border
                border-[#E1EAF4]
                bg-[#EEF5FC]
                px-7
                py-8

                md:px-10

                lg:px-12
                lg:py-10
              "
            >
              {/* decorative circle */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-130px]
                  left-[-100px]
                  h-[240px]
                  w-[240px]
                  rounded-full
                  bg-[#E5F1FC]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-80px]
                  top-[-120px]
                  h-[230px]
                  w-[230px]
                  rounded-full
                  bg-[#E9F0FF]
                  opacity-70
                "
              />

              <div
                className="
                  relative
                  z-10
                  grid
                  gap-9

                  lg:grid-cols-[1fr_1fr]
                  lg:items-center
                "
              >
                {/* LEFT */}

                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        h-[1px]
                        w-[40px]
                        bg-[#2463D4]
                      "
                    />

                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.27em]
                        text-[#2463D4]
                      "
                    >
                      Ready To Build?
                    </span>

                    <span
                      className="
                        h-[1px]
                        w-[40px]
                        bg-[#2463D4]
                      "
                    />
                  </div>

                  <h2
                    className="
                      mt-5
                      text-[31px]
                      font-extrabold
                      leading-[1.1]
                      tracking-[-0.035em]
                      text-[#0F1B2D]

                      sm:text-[37px]
                    "
                  >
                    Have a Business Challenge?
                  </h2>

                  <p
                    className="
                      mt-3
                      text-[14px]
                      text-[#607088]

                      sm:text-[15px]
                    "
                  >
                    Let&apos;s find the right digital solution for your
                    business.
                  </p>
                </div>

                {/* RIGHT */}

                <div>
                  {/* BUTTONS */}

                  <div
                    className="
                      grid
                      gap-3

                      sm:grid-cols-2
                    "
                  >
                    <Link
                      href="/contact"
                      className="
                        inline-flex
                        min-h-[50px]
                        items-center
                        justify-center
                        gap-3
                        rounded-[7px]
                        bg-[#0878EA]
                        px-6
                        text-[13px]
                        font-semibold
                        text-white
                        shadow-[0_7px_18px_rgba(8,120,234,.18)]
                        transition-colors
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
                        min-h-[50px]
                        items-center
                        justify-center
                        rounded-[7px]
                        border
                        border-[#7A36D4]
                        bg-white/75
                        px-6
                        text-[13px]
                        font-semibold
                        text-[#6B26C6]
                        transition-colors
                        duration-200

                        hover:bg-[#F6EEFE]
                      "
                    >
                      Try AI Business Builder
                    </Link>
                  </div>

                  {/* TRUST ITEMS */}

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

      {/* ===================================================== */}
      {/* EXISTING FOOTER */}
      {/* ===================================================== */}

      <Footer />
    </>
  );
}
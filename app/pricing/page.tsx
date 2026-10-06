import Link from "next/link";
import { Check } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* =========================================================
   PRICING DATA
========================================================= */

const plans = [
  {
    name: "Starter",
    description: "Perfect for MVPs and validation.",
    price: "$999",
    suffix: "/mo",
    featured: false,
    theme: "blue",
    button: "Get Started",
    href: "/contact",
    features: [
      "Dedicated Full-stack developer",
      "Project planning & setup",
      "Weekly sprint reviews",
      "Basic UI/UX support",
      "Project Manager",
    ],
  },

  {
    name: "Growth",
    description: "Scale-up and product refinement.",
    price: "$2,099",
    suffix: "/mo",
    featured: true,
    theme: "purple",
    button: "Talk to Sales",
    href: "/contact",
    features: [
      "3 Dedicated Experts",
      "UI/UX Designer included",
      "Product strategy & consultation",
      "24/7 Priority Support",
      "Cloud infrastructure & deployment",
      "Ongoing optimisation",
    ],
  },

  {
    name: "Enterprise",
    description: "Custom teams for large organizations.",
    price: "Custom",
    suffix: "",
    featured: false,
    theme: "blue",
    button: "Contact Us",
    href: "/contact",
    features: [
      "Full Feature Squads",
      "Dedicated Project Manager",
      "CTO Advisory & Technical Consulting",
      "Scalable team (on-demand)",
      "Advanced Security & Compliance",
      "Dedicated DevOps & Cloud Management",
      "SLA & Long-term Support",
    ],
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function PricingPage() {
  return (
    <>
      {/* EXISTING NAVBAR */}
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#F5F8FC] pt-[80px]">
        {/* =================================================== */}
        {/* PAGE INTRO */}
        {/* =================================================== */}

        <section className="relative pb-12 pt-14">
          {/* background glows */}

          <div
            className="
              pointer-events-none
              absolute
              left-[-140px]
              top-[-180px]
              h-[420px]
              w-[420px]
              rounded-full
              bg-[#E8F1FC]
              opacity-80
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              right-[-180px]
              top-[-150px]
              h-[460px]
              w-[460px]
              rounded-full
              bg-[#EDF3FC]
              opacity-80
            "
          />

          <div
            className="
              relative
              z-10
              mx-auto
              max-w-[1240px]
              px-5
              text-center
              sm:px-6
            "
          >
            {/* eyebrow */}

            <div className="flex items-center justify-center gap-4">
              <span
                className="h-[1px] w-[45px]"
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
                  tracking-[0.30em]
                  text-[#2463D4]
                  sm:text-[11px]
                "
              >
                Pricing Plans
              </span>

              <span
                className="h-[1px] w-[45px]"
                style={{
                  background:
                    "linear-gradient(90deg, #2463D4, transparent)",
                }}
              />
            </div>

            {/* title */}

            <h1
              className="
                mx-auto
                mt-5
                max-w-[800px]
                text-[38px]
                font-extrabold
                leading-[1.05]
                tracking-[-0.045em]
                text-[#07162C]

                sm:text-[48px]

                lg:text-[54px]
              "
            >
              Flexible Plans for
              <br />

              Different{" "}
              <span className="text-[#1677EA]">
                Business Needs.
              </span>
            </h1>

            {/* description */}

            <p
              className="
                mx-auto
                mt-5
                max-w-[730px]
                text-[15px]
                leading-[1.65]
                text-[#63728A]

                sm:text-[16px]
              "
            >
              Choose a plan that fits your goals. Whether you&apos;re
              starting small or scaling your digital product, our
              flexible plans are designed around your business.
            </p>
          </div>
        </section>

        {/* =================================================== */}
        {/* PRICING CARDS */}
        {/* =================================================== */}

        <section className="relative pb-20">
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
                grid
                gap-6
                lg:grid-cols-3
                lg:gap-[22px]
              "
            >
              {plans.map((plan) => {
                const isPurple = plan.theme === "purple";

                return (
                  <article
                    key={plan.name}
                    className={`
                      relative
                      flex
                      min-h-[630px]
                      flex-col
                      rounded-[18px]
                      border
                      px-8
                      pb-8
                      pt-10

                      ${
                        plan.featured
                          ? `
                            border-[#8A52F0]
                            bg-[#FBF8FF]
                            shadow-[0_10px_30px_rgba(112,72,200,0.06)]
                          `
                          : `
                            border-[#D5DEE9]
                            bg-white
                            shadow-[0_8px_26px_rgba(15,27,45,0.035)]
                          `
                      }
                    `}
                  >
                    {/* ======================================= */}
                    {/* MOST POPULAR */}
                    {/* ======================================= */}

                    {plan.featured && (
                      <div
                        className="
                          absolute
                          left-1/2
                          top-0
                          z-20
                          -translate-x-1/2
                          -translate-y-1/2
                        "
                      >
                        <div
                          className="
                            flex
                            h-[38px]
                            min-w-[158px]
                            items-center
                            justify-center
                            rounded-full
                            bg-[#7048D2]
                            px-7
                            text-[13px]
                            font-bold
                            text-white
                            shadow-[0_7px_18px_rgba(112,72,210,.18)]
                          "
                        >
                          Most Popular
                        </div>
                      </div>
                    )}

                    {/* ======================================= */}
                    {/* PLAN HEADER */}
                    {/* ======================================= */}

                    <div>
                      <h2
                        className="
                          text-[31px]
                          font-extrabold
                          leading-none
                          tracking-[-0.03em]
                          text-[#07162C]
                        "
                      >
                        {plan.name}
                      </h2>

                      <p
                        className="
                          mt-4
                          text-[16px]
                          leading-[1.5]
                          text-[#627189]
                        "
                      >
                        {plan.description}
                      </p>

                      {/* ===================================== */}
                      {/* PRICE */}
                      {/* ===================================== */}

                      <div className="mt-5 flex items-end gap-1.5">
                        <span
                          className={`
                            text-[51px]
                            font-extrabold
                            leading-none
                            tracking-[-0.045em]

                            ${
                              isPurple
                                ? "text-[#7048D2]"
                                : "text-[#1577EE]"
                            }
                          `}
                        >
                          {plan.price}
                        </span>

                        {plan.suffix && (
                          <span
                            className="
                              pb-[7px]
                              text-[17px]
                              font-medium
                              text-[#5E6E86]
                            "
                          >
                            {plan.suffix}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* ======================================= */}
                    {/* DIVIDER */}
                    {/* ======================================= */}

                    <div className="my-7 h-px w-full bg-[#D9E1EA]" />

                    {/* ======================================= */}
                    {/* FEATURES */}
                    {/* ======================================= */}

                    <div
                      className="
                        flex
                        flex-col
                        gap-[18px]
                      "
                    >
                      {plan.features.map((feature) => (
                        <div
                          key={feature}
                          className="
                            flex
                            items-center
                            gap-3
                          "
                        >
                          {/* check circle */}

                          <span
                            className={`
                              flex
                              h-[27px]
                              w-[27px]
                              shrink-0
                              items-center
                              justify-center
                              rounded-full

                              ${
                                isPurple
                                  ? "bg-[#F0E8FC] text-[#7549D5]"
                                  : "bg-[#E8F2FD] text-[#1580F4]"
                              }
                            `}
                          >
                            <Check
                              className="h-[14px] w-[14px]"
                              strokeWidth={2.7}
                            />
                          </span>

                          <span
                            className="
                              text-[16px]
                              leading-[1.45]
                              text-[#566680]
                            "
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* ======================================= */}
                    {/* BUTTON */}
                    {/* ======================================= */}

                    <div className="mt-auto pt-10">
                      <Link
                        href={plan.href}
                        className={`
                          flex
                          min-h-[56px]
                          w-full
                          items-center
                          justify-center
                          rounded-[9px]
                          px-6
                          text-[15px]
                          font-bold
                          transition-all
                          duration-200

                          ${
                            plan.name === "Enterprise"
                              ? `
                                border
                                border-[#1478EE]
                                bg-white
                                text-[#126FDF]

                                hover:bg-[#EEF6FF]
                              `
                              : isPurple
                                ? `
                                  bg-[#7048D2]
                                  text-white
                                  shadow-[0_7px_18px_rgba(112,72,210,.16)]

                                  hover:bg-[#6339C8]
                                `
                                : `
                                  bg-[#2179EE]
                                  text-white
                                  shadow-[0_7px_18px_rgba(33,121,238,.16)]

                                  hover:bg-[#1768D3]
                                `
                          }
                        `}
                      >
                        {plan.button}
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =================================================== */}
        {/* SIMPLE CTA UNDER PRICING */}
        {/* =================================================== */}

        <section className="pb-20">
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
                rounded-[16px]
                border
                border-[#DCE6F0]
                bg-[#EDF5FC]
                px-7
                py-8

                md:flex
                md:items-center
                md:justify-between

                lg:px-10
              "
            >
              <div>
                <div
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#2463D4]
                  "
                >
                  Not Sure Which Plan?
                </div>

                <h2
                  className="
                    mt-3
                    text-[28px]
                    font-extrabold
                    tracking-[-0.035em]
                    text-[#07162C]
                  "
                >
                  Let&apos;s Discuss Your Requirements.
                </h2>
              </div>

              <Link
                href="/contact"
                className="
                  mt-6
                  inline-flex
                  min-h-[50px]
                  items-center
                  justify-center
                  rounded-[8px]
                  bg-[#1677EA]
                  px-8
                  text-[14px]
                  font-bold
                  text-white
                  transition-colors

                  hover:bg-[#1268CF]

                  md:mt-0
                "
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* EXISTING FOOTER */}
      <Footer />
    </>
  );
}
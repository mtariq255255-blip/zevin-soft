import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for MVPs and validation.",
    price: "$999",
    suffix: "/mo",
    featured: false,
    features: [
      "Dedicated Full-stack developer",
      "Project planning & setup",
      "Weekly sprint reviews",
      "Basic UI/UX support",
      "Project Manager",
    ],
    buttonText: "Get Started",
    buttonHref: "/contact",
  },
  {
    name: "Growth",
    description: "Scale-up and product refinement.",
    price: "$2,099",
    suffix: "/mo",
    featured: true,
    features: [
      "3 Dedicated Experts",
      "UI/UX Designer included",
      "Product strategy & consultation",
      "24/7 Priority Support",
      "Cloud infrastructure & deployment",
      "Ongoing optimisation",
    ],
    buttonText: "Talk to Sales",
    buttonHref: "/contact",
  },
  {
    name: "Enterprise",
    description: "Custom teams for large organizations.",
    price: "Custom",
    suffix: "",
    featured: false,
    features: [
      "Full Feature Squads",
      "Dedicated Project Manager",
      "CTO Advisory & Technical Consulting",
      "Scalable team (on-demand)",
      "Advanced Security & Compliance",
      "Dedicated DevOps & Cloud Management",
      "SLA & Long-term Support",
    ],
    buttonText: "Contact Us",
    buttonHref: "/contact",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="
        relative
        overflow-hidden
        scroll-mt-[80px]
        bg-[#F7F9FC]
        py-8
        lg:py-14
      "
    >
      {/* LEFT DECORATION */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-130px]
          top-[80px]
          h-[360px]
          w-[360px]
          rounded-full
          border-[42px]
          border-[#E7F0FC]
          opacity-70
        "
      />

      {/* RIGHT DECORATION */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-150px]
          top-[75px]
          h-[380px]
          w-[380px]
          rounded-full
          border-[42px]
          border-[#E7F0FC]
          opacity-70
        "
      />

      {/* SOFT CENTER GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-150px]
          h-[500px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          opacity-50
        "
        style={{
          background:
            "radial-gradient(circle, rgba(220,234,255,0.60) 0%, rgba(247,249,252,0) 72%)",
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
        {/* SECTION HEADER */}
        {/* =================================================== */}

        <div className="text-center">
          <div className="flex items-center justify-center gap-4">
            <span
              className="block h-[1.5px] w-[48px]"
              style={{
                background:
                  "linear-gradient(90deg,rgba(36,99,212,0.08),#2463D4)",
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
              Pricing
            </span>

            <span
              className="block h-[1.5px] w-[48px]"
              style={{
                background:
                  "linear-gradient(90deg,#2463D4,rgba(36,99,212,0.08))",
              }}
            />
          </div>

          <h2
            className="
              mt-5
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
            Flexible{" "}
            <span className="text-[#1674F5]">
              Engagement
            </span>
          </h2>

          <p
            className="
              mt-3
              text-[16px]
              text-[#66758A]
              sm:text-[18px]
            "
          >
            Pricing that fits every stage of your growth.
          </p>
        </div>

        {/* =================================================== */}
        {/* PRICING CARDS */}
        {/* =================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-3
          "
        >
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`
                group
                relative
                flex
                min-h-[560px]
                flex-col
                rounded-[16px]
                border
                px-7
                pb-7
                pt-7
                transition-all
                duration-300

                ${
                  plan.featured
                    ? `
                      border-[#9B74F0]
                      bg-[#FCF9FF]
                      shadow-[0_18px_45px_rgba(112,72,200,0.10)]
                    `
                    : `
                      border-[#DCE3EC]
                      bg-white
                      shadow-[0_8px_26px_rgba(15,27,45,0.04)]
                    `
                }

                hover:-translate-y-[5px]
                hover:shadow-[0_22px_48px_rgba(15,27,45,0.10)]
              `}
            >
              {/* MOST POPULAR */}
              {plan.featured && (
                <div
                  className="
                    absolute
                    left-1/2
                    top-[-15px]
                    -translate-x-1/2
                    rounded-full
                    bg-[#7048C8]
                    px-8
                    py-[7px]
                    text-[12px]
                    font-semibold
                    text-white
                    shadow-[0_6px_16px_rgba(112,72,200,0.20)]
                  "
                >
                  Most Popular
                </div>
              )}

              {/* PLAN NAME */}
              <h3
                className="
                  text-[28px]
                  font-extrabold
                  tracking-[-0.03em]
                  text-[#0F1B2D]
                "
              >
                {plan.name}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-1
                  text-[14px]
                  leading-[1.5]
                  text-[#66758A]
                "
              >
                {plan.description}
              </p>

              {/* PRICE */}
              <div className="mt-4 flex items-end gap-1">
                <span
                  className={`
                    font-display
                    text-[44px]
                    font-extrabold
                    leading-none
                    tracking-[-0.04em]

                    ${
                      plan.featured
                        ? "text-[#7048C8]"
                        : "text-[#1674F5]"
                    }
                  `}
                >
                  {plan.price}
                </span>

                {plan.suffix && (
                  <span
                    className="
                      mb-[5px]
                      text-[16px]
                      font-medium
                      text-[#66758A]
                    "
                  >
                    {plan.suffix}
                  </span>
                )}
              </div>

              {/* DIVIDER */}
              <div
                className="
                  mt-5
                  h-[1px]
                  w-full
                  bg-[#E2E9F2]
                "
              />

              {/* FEATURES */}
              <div className="mt-5 space-y-3">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    <span
                      className={`
                        mt-[1px]
                        flex
                        h-[24px]
                        w-[24px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full

                        ${
                          plan.featured
                            ? "bg-[#F1ECFA] text-[#7048C8]"
                            : "bg-[#E7F0FC] text-[#1674F5]"
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
                        pt-[2px]
                        text-[13px]
                        leading-[1.4]
                        text-[#596B8B]
                        sm:text-[14px]
                      "
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* BUTTON */}
              <div className="mt-auto pt-7">
                <Link
                  href={plan.buttonHref}
                  className={`
                    inline-flex
                    h-[50px]
                    w-full
                    items-center
                    justify-center
                    rounded-[8px]
                    text-[14px]
                    font-semibold
                    transition-all
                    duration-200

                    ${
                      plan.featured
                        ? `
                          bg-[#7048C8]
                          text-white
                          shadow-[0_8px_18px_rgba(112,72,200,0.18)]
                          hover:bg-[#5E37B6]
                        `
                        : plan.name === "Enterprise"
                        ? `
                          border
                          border-[#1674F5]
                          bg-white
                          text-[#1674F5]
                          hover:bg-[#E7F0FC]
                        `
                        : `
                          bg-[#1674F5]
                          text-white
                          shadow-[0_8px_18px_rgba(22,116,245,0.18)]
                          hover:bg-[#125FCB]
                        `
                    }
                  `}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
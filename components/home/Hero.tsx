import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BusinessSystemVisual from "./BusinessSystemVisual";

export default function Hero() {
  return (
    <section className="hero-bg-soft relative overflow-hidden">
      {/* subtle dotted background */}
      <div className="hero-dot-grid absolute right-0 top-0 hidden h-full w-[260px] opacity-40 lg:block" />

      <div
        className="
          mx-auto
          grid
          min-h-0
          max-w-[1240px]
          items-center
          gap-10
          px-5
          pt-12
          pb-8
          sm:px-6
          sm:pb-12
          lg:grid-cols-[0.95fr_1.05fr]
          lg:gap-8
          lg:py-12
          lg:min-h-[640px]
    
        "
      >
        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-[570px] lg:-translate-y-8">
          {/* EYEBROW */}
          <div className="flex items-center">
            <span
              className="
                whitespace-nowrap
                text-[10px]
                font-bold
                uppercase
                leading-none
                tracking-[0.30em]
                text-[#2463D4]
                sm:text-[11px]
                md:text-[12px]
              "
            >
              Digital Business Solutions
            </span>

            {/* faded blue line */}
            <span
              aria-hidden="true"
              className="ml-[14px] block h-[2px] w-[78px] shrink-0"
              style={{
                background:
                  "linear-gradient(90deg, #2463D4 0%, #4C82DE 45%, rgba(36,99,212,0.10) 100%)",
              }}
            />
          </div>

          {/* MAIN HEADING */}
          <h1
            className="
              font-display
              mt-8
              text-[40px]
              font-extrabold
              uppercase
              leading-[0.95]
              tracking-[-0.045em]
              text-zevin-heading
              sm:text-[60px]
              md:text-[68px]
              lg:text-[72px]
            "
          >
            Build Your
            <br />
            Business.
            <br />
            <span className="text-[#2463D4]">
              Digitally.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-7
              max-w-[550px]
              text-[16px]
              leading-[1.55]
              text-zevin-text
              sm:text-[17px]
              lg:text-[18px]
            "
          >
            Websites, e-commerce, CRM, AI automation and connected
            business systems — designed around how your business
            actually works.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="
                inline-flex
                w-full
                min-w-[170px]
                items-center
                justify-center
                gap-3
                rounded-[10px]
                bg-[#2463D4]
                px-6
                py-[14px]
                text-[15px]
                font-semibold
                text-white
                shadow-[0_8px_22px_rgba(36,99,212,0.20)]
                transition-all
                duration-200
                hover:bg-[#174EA6]
                sm:w-auto
              "
            >
              <span>Get Quote</span>
              <ArrowRight className="h-[18px] w-[18px]" />
            </Link>

            <a
              href="/#services"
              className="
                inline-flex
                w-full
                min-w-[190px]
                items-center
                justify-center
                gap-3
                rounded-[10px]
                border
                border-[#A8C2EE]
                bg-white
                px-6
                py-[14px]
                text-[15px]
                font-semibold
                text-zevin-heading
                transition-all
                duration-200
                hover:bg-[#EEF3F8]
                sm:w-auto
              "
            >
              <span>Explore Solutions</span>
              <ArrowRight className="h-[18px] w-[18px]" />
            </a>
          </div>

          {/* SERVICES LINE */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
              text-[13px]
              font-medium
              text-zevin-text
              sm:gap-x-5
              sm:text-[14px]
            "
          >
            <span>Web</span>
            <span className="text-[#AAB7C8]">|</span>

            <span>AI</span>
            <span className="text-[#AAB7C8]">|</span>

            <span>CRM</span>
            <span className="text-[#AAB7C8]">|</span>

            <span>Automation</span>
            <span className="text-[#AAB7C8]">|</span>

            <span>E-Commerce</span>
          </div>
        </div>

        {/* RIGHT ANIMATION */}
        <div className="relative z-10 hidden md:block lg:-translate-y-8 lg:scale-[0.9]">
          <BusinessSystemVisual />
        </div>
      </div>
    </section>
  );
}
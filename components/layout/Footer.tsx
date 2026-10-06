import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ChevronUp,
  Mail,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UsersRound,
  Zap,
} from "lucide-react";

/* =========================================================
   FOOTER DATA
========================================================= */

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/#portfolio" },
  { label: "How We Work", href: "/about" },
  { label: "Our Process", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  "Website Development",
  "Mobile Applications",
  "Custom Software",
  "AI & Automation",
  "CRM Solutions",
  "Social Media Marketing",
  "Cloud & DevOps",
  "Digital Consultation",
  "Ongoing Support",
];

const solutionLinks = [
  "Business Automation",
  "Customer Management",
  "E-Commerce Solutions",
  "Enterprise Systems",
  "Data & Analytics",
  "Cloud Transformation",
  "Industry Solutions",
];

const resourceLinks = [
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

const benefits = [
  {
    label: "Innovate\nFaster",
    Icon: Zap,
  },
  {
    label: "Scale\nSmarter",
    Icon: TrendingUp,
  },
  {
    label: "Build\nSecurely",
    Icon: ShieldCheck,
  },
  {
    label: "Grow\nTogether",
    Icon: UsersRound,
  },
];

/* =========================================================
   FOOTER HEADING
========================================================= */

function FooterHeading({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
        {children}
      </h3>

      <div className="mt-2 h-[2px] w-[24px] bg-[#2463D4]" />
    </div>
  );
}

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#08111F] text-[#B8C4D3]">
      {/* ===================================================== */}
      {/* TOP GLOW */}
      {/* ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-220px]
          h-[480px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          opacity-30
          blur-[100px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(36,99,212,.45), transparent 70%)",
        }}
      />

      {/* ===================================================== */}
      {/* MAIN CONTAINER */}
      {/* ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1240px]
          px-5
          pb-8
          pt-16
          sm:px-6
          lg:pt-20
        "
      >
        {/* =================================================== */}
        {/* TOP GRID */}
        {/* =================================================== */}

        <div
          className="
            grid
            gap-12

            md:grid-cols-2

            lg:grid-cols-[1.45fr_0.72fr_1fr_1fr_0.92fr_1.45fr]
            lg:gap-8
          "
        >
          {/* ================================================= */}
          {/* BRAND */}
          {/* ================================================= */}

          <div>
            <Link
              href="/"
              aria-label="Zevin Soft Home"
              className="inline-flex items-center"
            >
              <Image
                src="/logo/zevin-header-logo.png"
                alt="Zevin Soft"
                width={550}
                height={180}
                className="
                  h-auto
                  w-[180px]
                  object-contain
                  brightness-0
                  invert
                "
              />
            </Link>

            <h2
              className="
                mt-6
                font-display
                text-[22px]
                font-bold
                leading-[1.25]
                text-white
              "
            >
              Digital Solutions
              <br />
              Built Around{" "}
              <span className="text-[#2463D4]">
                Your Business.
              </span>
            </h2>

            <p
              className="
                mt-4
                max-w-[260px]
                text-[13px]
                leading-[1.75]
                text-[#B8C4D3]
              "
            >
              We develop websites, software, AI solutions,
              automation and digital products to help businesses
              operate, connect and grow in a digital world.
            </p>

            <div className="mt-8">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                Get In Touch
              </h3>

              <div className="mt-2 h-[2px] w-[24px] bg-[#2463D4]" />

              <a
                href="mailto:hello@zevinsoft.com"
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-3
                  text-[13px]
                  text-[#B8C4D3]
                  transition-colors
                  hover:text-white
                "
              >
                <span
                  className="
                    flex
                    h-[38px]
                    w-[38px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[8px]
                    border
                    border-[#2463D4]/50
                    bg-[#0D2037]
                    text-[#3982F1]
                  "
                >
                  <Mail className="h-[18px] w-[18px]" />
                </span>

                hello@zevinsoft.com
              </a>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-3">
              {benefits.map(({ label, Icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className="
                      flex
                      h-[42px]
                      w-[42px]
                      items-center
                      justify-center
                      rounded-[8px]
                      border
                      border-[#2463D4]/60
                      bg-[#0C1D33]
                      text-[#3E84F5]
                    "
                  >
                    <Icon
                      className="h-[19px] w-[19px]"
                      strokeWidth={2}
                    />
                  </div>

                  <div
                    className="
                      mt-2
                      whitespace-pre-line
                      text-[10px]
                      leading-[1.35]
                      text-white
                    "
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================================================= */}
          {/* COMPANY */}
          {/* ================================================= */}

          <div>
            <FooterHeading>
              Company
            </FooterHeading>

            <div className="mt-5 flex flex-col gap-3">
              {companyLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    text-[12px]
                    text-[#B8C4D3]
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ================================================= */}
          {/* SERVICES */}
          {/* ================================================= */}

          <div>
            <FooterHeading>
              Services
            </FooterHeading>

            <div className="mt-5 flex flex-col gap-3">
              {serviceLinks.map((item) => (
                <Link
                  key={item}
                  href="/services"
                  className="
                    text-[12px]
                    leading-[1.25]
                    text-[#B8C4D3]
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* ================================================= */}
          {/* SOLUTIONS */}
          {/* ================================================= */}

          <div>
            <FooterHeading>
              Solutions
            </FooterHeading>

            <div className="mt-5 flex flex-col gap-3">
              {solutionLinks.map((item) => (
                <Link
                  key={item}
                  href="/#services"
                  className="
                    text-[12px]
                    leading-[1.25]
                    text-[#B8C4D3]
                    transition-colors
                    duration-200
                    hover:text-white
                  "
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* ================================================= */}
          {/* PRODUCTS + RESOURCES */}
          {/* ================================================= */}

          <div>
            
            {/* RESOURCES */}

            <div className="mt-8">
              <FooterHeading>
                Resources
              </FooterHeading>

              <div className="mt-5 flex flex-col gap-3">
                {resourceLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="
                      text-[12px]
                      text-[#B8C4D3]
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* AI BUSINESS BUILDER */}
          {/* ================================================= */}

          <div
            className="
              relative
              min-h-[430px]
              overflow-hidden
              rounded-[12px]
              border
              border-[#2463D4]/70
              bg-gradient-to-b
              from-[#17206A]
              via-[#101D53]
              to-[#07162D]
              px-6
              pb-0
              pt-6
              shadow-[0_18px_45px_rgba(0,0,0,0.22)]
            "
          >
            {/* BACKGROUND GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                right-[-70px]
                top-[-80px]
                h-[220px]
                w-[220px]
                rounded-full
                bg-[#7048C8]/25
                blur-[80px]
              "
            />

            {/* TOP CONTENT */}

            <div className="relative z-20">
              {/* LABEL */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.20em]
                  text-[#E0D7FF]
                "
              >
                <Sparkles className="h-4 w-4 text-[#A878FF]" />

                <span>
                  AI Business Builder
                </span>
              </div>

              {/* HEADING */}

              <h3
                className="
                  mt-7
                  text-[22px]
                  font-bold
                  leading-[1.12]
                  tracking-[-0.02em]
                  text-white
                "
              >
                Not sure what your
                <br />
                business needs?
              </h3>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-5
                  text-[13px]
                  leading-[1.65]
                  text-[#D5DCF3]
                "
              >
                Let AI help you map your digital
                <br />
                roadmap in minutes.
              </p>

              {/* BUTTON */}

              <Link
                href="/ai-business-builder"
                className="
                  mt-6
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-[9px]
                  bg-gradient-to-r
                  from-[#5A2DF5]
                  via-[#6933FF]
                  to-[#376BFF]
                  px-5
                  py-[15px]
                  text-[13px]
                  font-semibold
                  text-white
                  shadow-[0_8px_24px_rgba(85,46,246,0.32)]
                  transition
                  duration-200
                  hover:brightness-110
                "
              >
                <span>
                  Explore AI Business Builder
                </span>

                <ArrowRight className="h-[17px] w-[17px] shrink-0" />
              </Link>
            </div>

            {/* =============================================== */}
            {/* ROBOT + SPEECH BUBBLE */}
            {/* =============================================== */}

            <div
              className="
                relative
              
                h-[158px]
                w-full
              "
            >
              {/* ROBOT - LEFT */}

              <div
                className="
                  absolute
                  bottom-[-16px]
                  left-[-20px]
                  z-20
                "
              >
                <Image
                  src="/images/footer-ai-robot.png"
                  alt="Zevin AI assistant robot"
                  width={260}
                  height={260}
                  className="
                    h-auto
                    w-[135px]
                    object-contain
                    xl:w-[112px]
                  "
                />
              </div>

              


              

                {/* SPEECH POINTER */}

              
            </div>
          </div>
        </div>

        {/* =================================================== */}
        {/* DIVIDER */}
        {/* =================================================== */}

   

        {/* =================================================== */}
        {/* BOTTOM DIVIDER */}
        {/* =================================================== */}

        <div className="my-9 h-px bg-[#29405B]/65" />

        {/* =================================================== */}
        {/* LEGAL */}
        {/* =================================================== */}

        <div
          className="
            relative
            z-20
            flex
            flex-col
            gap-5
            pb-16
            text-[10px]
            text-[#9EACBD]

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © 2026 Zevin Soft. All rights reserved.
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-7
              gap-y-3
            "
          >
            <Link
              href="/privacy"
              className="hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/cookies"
              className="hover:text-white"
            >
              Cookies
            </Link>

            <Link
              href="/sitemap"
              className="hover:text-white"
            >
              Sitemap
            </Link>

            <a
              href="#"
              className="
                ml-2
                inline-flex
                items-center
                gap-2
                text-[#B8C4D3]
                hover:text-white
              "
            >
              <ChevronUp className="h-4 w-4 text-[#2463D4]" />

              Back to Top
            </a>
          </div>
        </div>
      </div>

      {/* ===================================================== */}
      {/* DIGITAL WAVE */}
      {/* ===================================================== */}

      <svg
        viewBox="0 0 1600 260"
        preserveAspectRatio="none"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-[190px]
          w-full
          opacity-70
        "
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="footerDotPattern"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1.4"
              fill="#2463D4"
              opacity="0.65"
            />
          </pattern>

          <linearGradient
            id="footerWaveFade"
            x1="0"
            x2="1"
            y1="0"
            y2="0"
          >
            <stop
              offset="0%"
              stopColor="#2463D4"
              stopOpacity="0"
            />

            <stop
              offset="35%"
              stopColor="#2463D4"
              stopOpacity=".9"
            />

            <stop
              offset="75%"
              stopColor="#2463D4"
              stopOpacity=".55"
            />

            <stop
              offset="100%"
              stopColor="#2463D4"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        <path
          d="
            M0 240
            C210 215, 330 130, 520 160
            C700 188, 770 245, 940 215
            C1130 180, 1215 115, 1390 105
            C1470 100, 1540 116, 1600 130
            L1600 260
            L0 260
            Z
          "
          fill="url(#footerDotPattern)"
          opacity=".75"
        />

        <path
          d="
            M0 235
            C210 215, 330 125, 520 155
            C700 185, 785 238, 950 205
            C1135 168, 1240 110, 1400 100
            C1490 95, 1550 108, 1600 120
          "
          fill="none"
          stroke="url(#footerWaveFade)"
          strokeWidth="1.4"
        />

        <path
          d="
            M0 252
            C250 238, 365 168, 535 187
            C730 208, 805 260, 980 228
            C1180 191, 1280 142, 1450 132
            C1510 128, 1560 134, 1600 142
          "
          fill="none"
          stroke="#2463D4"
          strokeOpacity=".35"
          strokeWidth="1"
        />
      </svg>
    </footer>
  );
}
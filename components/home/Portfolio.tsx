import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    category: "WEB DEVELOPMENT",
    title: "Prime Real Estate",
    description:
      "A modern real estate platform with property listings, search, and customer management.",
    image: "/images/prime-estate.png",
    href: "/portfolio",
  },
  {
    category: "E-COMMERCE",
    title: "TechMart Online Store",
    description:
      "A full-featured e-commerce platform with product management, secure payments and order tracking.",
    image: "/images/techmart.png",
    href: "/portfolio",
  },
  {
    category: "CUSTOM SOFTWARE",
    title: "MediConnect",
    description:
      "A healthcare management system to streamline patient records, appointments and communication.",
    image: "/images/mediconnect.png",
    href: "/portfolio",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="
        relative
        overflow-hidden
        scroll-mt-[80px]
        bg-[#F7F9FC]
        py-8
        lg:py-14
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-130px]
          h-[430px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          opacity-50
        "
        style={{
          background:
            "radial-gradient(circle, rgba(220,234,255,0.58) 0%, rgba(247,249,252,0) 72%)",
        }}
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
        {/* =================================================== */}
        {/* SECTION HEADING */}
        {/* =================================================== */}

        <div className="text-center">
          {/* OUR WORK */}

          <div className="flex items-center justify-center gap-4">
            <span
              aria-hidden="true"
              className="block h-[1.5px] w-[45px]"
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
                tracking-[0.34em]
                text-[#2463D4]
                sm:text-[11px]
              "
            >
              Our Work
            </span>

            <span
              aria-hidden="true"
              className="block h-[1.5px] w-[45px]"
              style={{
                background:
                  "linear-gradient(90deg,#2463D4,rgba(36,99,212,0.08))",
              }}
            />
          </div>

          {/* TITLE */}

          <h2
            className="
              mx-auto
              mt-5
              max-w-[930px]
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
            Built to Solve Real{" "}
            <span className="text-[#1674F5]">
              Business Needs.
            </span>
          </h2>

          {/* SUBTITLE */}

          <p
            className="
              mx-auto
              mt-3
              max-w-[700px]
              text-[15px]
              leading-[1.6]
              text-[#66758A]

              sm:text-[16px]
            "
          >
            Explore a selection of digital products and solutions built by
            Zevin Soft.
          </p>
        </div>

        {/* =================================================== */}
        {/* PROJECT CARDS */}
        {/* =================================================== */}

        <div
          className="
            mt-9
            grid
            grid-cols-1
            gap-5

            md:grid-cols-2

            lg:grid-cols-3
          "
        >
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="
                group
                overflow-hidden
                rounded-[14px]
                border
                border-[#DCE3EC]
                bg-white
                shadow-[0_6px_20px_rgba(15,27,45,0.035)]
                transition-all
                duration-300
                ease-out

                hover:-translate-y-[5px]
                hover:border-[#B8CEE9]
                hover:shadow-[0_20px_45px_rgba(15,27,45,0.09)]
              "
            >
              {/* IMAGE */}
              <div
                className="
                  relative
                  h-[245px]
                  overflow-hidden
                  bg-[#EEF5FC]

                  sm:h-[260px]
                "
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1280px) 384px, (min-width: 1024px) calc((100vw - 88px) / 3), (min-width: 768px) calc((100vw - 68px) / 2), calc(100vw - 40px)"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="
                    object-cover
                    object-center
                    transition-transform
                    duration-500
                    ease-out

                    group-hover:scale-[1.025]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#F7F9FC]/10
                    to-transparent
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* CATEGORY */}

                <div
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-[#2463D4]

                    sm:text-[10px]
                  "
                >
                  {project.category}
                </div>

                {/* TITLE */}

                <h3
                  className="
                    mt-3
                    text-[23px]
                    font-extrabold
                    leading-[1.15]
                    tracking-[-0.025em]
                    text-[#0F1B2D]
                    transition-colors
                    duration-300

                    group-hover:text-[#2463D4]
                  "
                >
                  {project.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-3
                    min-h-[68px]
                    text-[14px]
                    leading-[1.55]
                    text-[#5E6F8D]

                    sm:text-[15px]
                  "
                >
                  {project.description}
                </p>

                {/* VIEW PROJECT */}

                <Link
                  href={project.href}
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-3
                    text-[14px]
                    font-semibold
                    text-[#1674F5]
                    transition-all
                    duration-200

                    hover:gap-4
                    hover:text-[#125FCB]
                  "
                >
                  <span>View Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
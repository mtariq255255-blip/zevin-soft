import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Code2,
  Lightbulb,
  Target,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import {
  getPortfolioProject,
  portfolioProjects,
} from "@/data/portfolioProjects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = getPortfolioProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* EXISTING HEADER */}
      <Navbar />

      <main className="overflow-hidden bg-[#F7F9FC] pt-[80px]">
        {/* ================================================= */}
        {/* BREADCRUMB */}
        {/* ================================================= */}

        <section className="border-b border-[#E3EAF2] bg-[#F2F7FB]">
          <div
            className="
              mx-auto
              flex
              min-h-[56px]
              max-w-[1240px]
              items-center
              gap-3
              px-5
              text-[12px]
              text-[#68778C]

              sm:px-6
            "
          >
            <Link
              href="/"
              className="hover:text-[#2463D4]"
            >
              Home
            </Link>

            <span>›</span>

            <Link
              href="/portfolio"
              className="hover:text-[#2463D4]"
            >
              Portfolio
            </Link>

            <span>›</span>

            <span className="font-medium text-[#26354A]">
              {project.title}
            </span>
          </div>
        </section>

        {/* ================================================= */}
        {/* PROJECT HERO */}
        {/* ================================================= */}

        <section
          className="
            relative
            overflow-hidden
            bg-white
            pb-16
            pt-14

            lg:pb-20
            lg:pt-16
          "
        >
          {/* soft decorations */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-150px]
              top-[-180px]
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#EAF4FE]
              opacity-70
              blur-[80px]
            "
          />

          <div
            className="
              relative
              z-10
              mx-auto
              grid
              max-w-[1240px]
              gap-12
              px-5

              sm:px-6

              lg:grid-cols-[0.9fr_1.1fr]
              lg:items-center
            "
          >
            {/* LEFT */}

            <div>
              <Link
                href="/portfolio"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-[12px]
                  font-semibold
                  text-[#2463D4]
                "
              >
                <ArrowLeft className="h-4 w-4" />

                Back to Portfolio
              </Link>

              <div
                className="
                  mt-7
                  inline-flex
                  rounded-full
                  bg-[#EAF3FD]
                  px-4
                  py-2
                  text-[10px]
                  font-semibold
                  text-[#1672D9]
                "
              >
                {project.category}
              </div>

              <h1
                className="
                  mt-5
                  text-[38px]
                  font-extrabold
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-[#0F1B2D]

                  sm:text-[48px]

                  lg:text-[54px]
                "
              >
                {project.title}
              </h1>

              <p
                className="
                  mt-6
                  max-w-[580px]
                  text-[15px]
                  leading-[1.7]
                  text-[#58677D]

                  sm:text-[17px]
                "
              >
                {project.shortDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="
                    inline-flex
                    min-h-[48px]
                    items-center
                    justify-center
                    gap-3
                    rounded-[8px]
                    bg-[#0878EA]
                    px-6
                    text-[13px]
                    font-semibold
                    text-white
                    transition

                    hover:bg-[#1762C4]
                  "
                >
                  Start a Similar Project

                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/portfolio"
                  className="
                    inline-flex
                    min-h-[48px]
                    items-center
                    justify-center
                    rounded-[8px]
                    border
                    border-[#CBD7E5]
                    bg-white
                    px-6
                    text-[13px]
                    font-semibold
                    text-[#26354A]
                    transition

                    hover:bg-[#EEF3F8]
                  "
                >
                  View All Projects
                </Link>
              </div>
            </div>

            {/* RIGHT VISUAL */}

            <div className="relative aspect-video overflow-hidden rounded-[20px] border border-[#DDE7F1] bg-[#EEF5FC] shadow-[0_20px_45px_rgba(15,27,45,.08)]">
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                sizes="(min-width: 1024px) 52vw, calc(100vw - 40px)"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* OVERVIEW */}
        {/* ================================================= */}

        <section className="bg-[#F2F7FC] py-16 lg:py-20">
          <div
            className="
              mx-auto
              grid
              max-w-[1240px]
              gap-12
              px-5

              sm:px-6

              lg:grid-cols-[1fr_0.8fr]
            "
          >
            {/* overview */}

            <div>
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-[42px] bg-[#2463D4]" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-[#2463D4]
                  "
                >
                  Project Overview
                </span>
              </div>

              <h2
                className="
                  mt-5
                  text-[31px]
                  font-extrabold
                  tracking-[-0.035em]
                  text-[#0F1B2D]

                  sm:text-[38px]
                "
              >
                Built Around a Real
                <br />
                Business Need.
              </h2>

              <p
                className="
                  mt-5
                  max-w-[680px]
                  text-[14px]
                  leading-[1.75]
                  text-[#5A6980]

                  sm:text-[15px]
                "
              >
                {project.overview}
              </p>
            </div>

            {/* services */}

            <div
              className="
                rounded-[14px]
                border
                border-[#DFE7F0]
                bg-white
                p-6
              "
            >
              <h3
                className="
                  text-[16px]
                  font-bold
                  text-[#0F1B2D]
                "
              >
                Project Services
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.services.map((service) => (
                  <div
                    key={service}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-[8px]
                      bg-[#F4F8FC]
                      px-4
                      py-3
                      text-[12px]
                      font-medium
                      text-[#435269]
                    "
                  >
                    <Check
                      className="
                        h-4
                        w-4
                        shrink-0
                        text-[#1677EA]
                      "
                    />

                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* CHALLENGE / SOLUTION */}
        {/* ================================================= */}

        <section className="bg-white py-16 lg:py-20">
          <div
            className="
              mx-auto
              grid
              max-w-[1240px]
              gap-5
              px-5

              sm:px-6

              md:grid-cols-2
            "
          >
            {/* challenge */}

            <article
              className="
                rounded-[16px]
                border
                border-[#E0E8F0]
                bg-[#FAFCFE]
                p-7

                lg:p-9
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
                  bg-[#E7F0FC]
                  text-[#1677EA]
                "
              >
                <Target className="h-7 w-7" />
              </div>

              <div
                className="
                  mt-6
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#1677EA]
                "
              >
                The Challenge
              </div>

              <h2
                className="
                  mt-3
                  text-[26px]
                  font-bold
                  tracking-[-0.03em]
                  text-[#0F1B2D]
                "
              >
                Understanding the Problem.
              </h2>

              <p
                className="
                  mt-4
                  text-[14px]
                  leading-[1.75]
                  text-[#5A6980]
                "
              >
                {project.challenge}
              </p>
            </article>

            {/* solution */}

            <article
              className="
                rounded-[16px]
                border
                border-[#E4DDF1]
                bg-[#FCFAFF]
                p-7

                lg:p-9
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
                  bg-[#F1E8FC]
                  text-[#7048C8]
                "
              >
                <Lightbulb className="h-7 w-7" />
              </div>

              <div
                className="
                  mt-6
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#7048C8]
                "
              >
                Our Solution
              </div>

              <h2
                className="
                  mt-3
                  text-[26px]
                  font-bold
                  tracking-[-0.03em]
                  text-[#0F1B2D]
                "
              >
                Building the Right Approach.
              </h2>

              <p
                className="
                  mt-4
                  text-[14px]
                  leading-[1.75]
                  text-[#5A6980]
                "
              >
                {project.solution}
              </p>
            </article>
          </div>
        </section>

        {/* ================================================= */}
        {/* RESULTS */}
        {/* ================================================= */}

        <section className="bg-[#F2F7FC] py-16 lg:py-20">
          <div
            className="
              mx-auto
              max-w-[1240px]
              px-5

              sm:px-6
            "
          >
            <div className="text-center">
              <div
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#2463D4]
                "
              >
                Project Outcomes
              </div>

              <h2
                className="
                  mt-4
                  text-[32px]
                  font-extrabold
                  tracking-[-0.035em]
                  text-[#0F1B2D]

                  sm:text-[39px]
                "
              >
                Practical Results for the Business.
              </h2>
            </div>

            <div
              className="
                mt-10
                grid
                gap-4

                sm:grid-cols-2

                lg:grid-cols-4
              "
            >
              {project.results.map((result) => (
                <div
                  key={result}
                  className="
                    rounded-[12px]
                    border
                    border-[#DDE7F0]
                    bg-white
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      h-[38px]
                      w-[38px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#E7F4FE]
                    "
                  >
                    <CheckCircle2
                      className="
                        h-5
                        w-5
                        text-[#1677EA]
                      "
                    />
                  </div>

                  <p
                    className="
                      mt-4
                      text-[13px]
                      font-semibold
                      leading-[1.5]
                      text-[#26354A]
                    "
                  >
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* TECHNOLOGY */}
        {/* ================================================= */}

        <section className="bg-white py-16">
          <div
            className="
              mx-auto
              grid
              max-w-[1240px]
              gap-9
              px-5

              sm:px-6

              lg:grid-cols-[0.8fr_1.2fr]
              lg:items-center
            "
          >
            <div>
              <div
                className="
                  flex
                  h-[55px]
                  w-[55px]
                  items-center
                  justify-center
                  rounded-[14px]
                  bg-[#E7F0FC]
                  text-[#1677EA]
                "
              >
                <Code2 className="h-7 w-7" />
              </div>

              <h2
                className="
                  mt-5
                  text-[30px]
                  font-extrabold
                  tracking-[-0.035em]
                  text-[#0F1B2D]
                "
              >
                Technology Used
              </h2>

              <p
                className="
                  mt-3
                  max-w-[440px]
                  text-[14px]
                  leading-[1.65]
                  text-[#637289]
                "
              >
                Technologies are selected around the requirements of
                the project, scalability and maintainability.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-[9px]
                    border
                    border-[#DCE6F0]
                    bg-[#F7FAFD]
                    px-5
                    py-4
                    text-[13px]
                    font-semibold
                    text-[#33445B]
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* CTA */}
        {/* ================================================= */}

        <section className="bg-white pb-16 lg:pb-20">
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
                rounded-[16px]
                border
                border-[#DDE8F2]
                bg-[#EEF5FC]
                px-7
                py-10

                lg:px-12
              "
            >
              <div
                className="
                  grid
                  gap-8

                  lg:grid-cols-[1.2fr_0.8fr]
                  lg:items-center
                "
              >
                <div>
                  <div
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.27em]
                      text-[#2463D4]
                    "
                  >
                    Have a Similar Project?
                  </div>

                  <h2
                    className="
                      mt-4
                      text-[31px]
                      font-extrabold
                      tracking-[-0.035em]
                      text-[#0F1B2D]

                      sm:text-[37px]
                    "
                  >
                    Let&apos;s Build the Right Solution
                    <br className="hidden sm:block" />
                    for Your Business.
                  </h2>
                </div>

                <div className="grid gap-3">
                  <Link
                    href="/contact"
                    className="
                      inline-flex
                      min-h-[50px]
                      items-center
                      justify-center
                      gap-3
                      rounded-[8px]
                      bg-[#0878EA]
                      px-6
                      text-[13px]
                      font-semibold
                      text-white
                      transition

                      hover:bg-[#1762C4]
                    "
                  >
                    Talk to Zevin Soft

                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/portfolio"
                    className="
                      inline-flex
                      min-h-[50px]
                      items-center
                      justify-center
                      rounded-[8px]
                      border
                      border-[#7A39D0]
                      bg-white
                      px-6
                      text-[13px]
                      font-semibold
                      text-[#6926C5]
                    "
                  >
                    Explore More Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* EXISTING FOOTER */}
      <Footer />
    </>
  );
}
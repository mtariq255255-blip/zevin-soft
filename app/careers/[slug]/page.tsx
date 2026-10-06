"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  BriefcaseBusiness,
  Laptop,
  MapPin,
  TrendingUp,
  UsersRound,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { jobs } from "@/data/jobs";

/* =========================================================
   TYPES
========================================================= */

type JobCategory =
  | "All"
  | "Development"
  | "Design"
  | "AI & Data"
  | "Marketing"
  | "Other";

/* =========================================================
   FILTER CATEGORIES
========================================================= */

const categories: JobCategory[] = [
  "All",
  "Development",
  "Design",
  "AI & Data",
  "Marketing",
  "Other",
];

/* =========================================================
   CATEGORY BADGE STYLE
========================================================= */

function categoryStyle(category: string) {
  switch (category) {
    case "AI & Data":
      return "bg-[#F2E7FD] text-[#7435D1]";

    case "Design":
      return "bg-[#FBE8F7] text-[#D536AE]";

    case "Marketing":
      return "bg-[#E3F8EF] text-[#0BA46F]";

    case "Development":
      return "bg-[#E7F2FD] text-[#1674D7]";

    default:
      return "bg-[#EEF2F6] text-[#57667A]";
  }
}

/* =========================================================
   CAREERS PAGE
========================================================= */

export default function CareersPage() {
  const [activeCategory, setActiveCategory] =
    useState<JobCategory>("All");

  /* =======================================================
     FILTER JOBS
  ======================================================= */

  const filteredJobs = useMemo(() => {
    if (activeCategory === "All") {
      return jobs;
    }

    return jobs.filter(
      (job) => job.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <>
      {/* ===================================================== */}
      {/* EXISTING NAVBAR */}
      {/* ===================================================== */}

      <Navbar />

      <main className="overflow-hidden bg-[#F7F9FC] pt-[80px]">
        {/* =================================================== */}
        {/* BREADCRUMB */}
        {/* =================================================== */}

        <section
          className="
            border-b
            border-[#E3EBF2]
            bg-[#F4F8FB]
          "
        >
          <div
            className="
              mx-auto
              flex
              h-[56px]
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
              className="
                transition-colors
                hover:text-[#1677EA]
              "
            >
              Home
            </Link>

            <span className="text-[#A3AFBC]">
              ›
            </span>

            <span className="font-medium text-[#415067]">
              Careers
            </span>
          </div>
        </section>

        {/* =================================================== */}
        {/* HERO */}
        {/* =================================================== */}

        <section
          className="
            relative
            overflow-hidden
            pb-12
            pt-12

            sm:pt-14

            lg:pb-14
          "
        >
          {/* BACKGROUND GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[-240px]
              h-[650px]
              w-[1050px]
              -translate-x-1/2
              rounded-full
              bg-[#EAF4FE]
              opacity-70
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
              text-center

              sm:px-6
            "
          >
            {/* ================================================= */}
            {/* EYEBROW */}
            {/* ================================================= */}

            <div className="flex items-center justify-center gap-4">
              <span
                className="h-[1px] w-[44px]"
                style={{
                  background:
                    "linear-gradient(90deg,transparent,#2463D4)",
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
                Careers at Zevin Soft
              </span>

              <span
                className="h-[1px] w-[44px]"
                style={{
                  background:
                    "linear-gradient(90deg,#2463D4,transparent)",
                }}
              />
            </div>

            {/* ================================================= */}
            {/* HEADING */}
            {/* ================================================= */}

            <h1
              className="
                mx-auto
                mt-6
                max-w-[900px]
                text-[38px]
                font-extrabold
                leading-[1.04]
                tracking-[-0.045em]
                text-[#0F1B2D]

                sm:text-[48px]

                lg:text-[55px]
              "
            >
              Build Your Career
              <br />

              With a Team That{" "}
              <span className="text-[#1672EA]">
                Innovates.
              </span>
            </h1>

            {/* ================================================= */}
            {/* DESCRIPTION */}
            {/* ================================================= */}

            <p
              className="
                mx-auto
                mt-5
                max-w-[760px]
                text-[15px]
                leading-[1.6]
                text-[#5D6C81]

                sm:text-[16px]
              "
            >
              We are always looking for talented and passionate
              individuals to join our team.
              <br className="hidden sm:block" />
              Work on exciting projects, learn new technologies and
              grow your career with Zevin Soft.
            </p>

            {/* ================================================= */}
            {/* BENEFIT CARDS */}
            {/* ================================================= */}

            <div
              className="
                mt-10
                grid
                gap-5

                md:grid-cols-3
              "
            >
              {/* MEANINGFUL WORK */}

              <div
                className="
                  flex
                  items-center
                  gap-5
                  rounded-[12px]
                  border
                  border-[#DFE7EF]
                  bg-white
                  p-5
                  text-left
                  shadow-[0_6px_20px_rgba(15,27,45,.035)]
                "
              >
                <div
                  className="
                    flex
                    h-[62px]
                    w-[62px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[14px]
                    bg-[#E7F1FC]
                    text-[#1677EA]
                  "
                >
                  <Laptop
                    className="h-[30px] w-[30px]"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <h3
                    className="
                      text-[15px]
                      font-bold
                      text-[#0F1B2D]
                    "
                  >
                    Meaningful Work
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[12px]
                      leading-[1.5]
                      text-[#617086]
                    "
                  >
                    Work on real projects that create business value.
                  </p>
                </div>
              </div>

              {/* SUPPORTIVE TEAM */}

              <div
                className="
                  flex
                  items-center
                  gap-5
                  rounded-[12px]
                  border
                  border-[#DFE7EF]
                  bg-white
                  p-5
                  text-left
                  shadow-[0_6px_20px_rgba(15,27,45,.035)]
                "
              >
                <div
                  className="
                    flex
                    h-[62px]
                    w-[62px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[14px]
                    bg-[#F2E7FD]
                    text-[#7A37D5]
                  "
                >
                  <UsersRound
                    className="h-[30px] w-[30px]"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <h3
                    className="
                      text-[15px]
                      font-bold
                      text-[#0F1B2D]
                    "
                  >
                    Supportive Team
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[12px]
                      leading-[1.5]
                      text-[#617086]
                    "
                  >
                    Collaborative and friendly work environment.
                  </p>
                </div>
              </div>

              {/* GROWTH OPPORTUNITIES */}

              <div
                className="
                  flex
                  items-center
                  gap-5
                  rounded-[12px]
                  border
                  border-[#DFE7EF]
                  bg-white
                  p-5
                  text-left
                  shadow-[0_6px_20px_rgba(15,27,45,.035)]
                "
              >
                <div
                  className="
                    flex
                    h-[62px]
                    w-[62px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[14px]
                    bg-[#E4FAF1]
                    text-[#0AAF78]
                  "
                >
                  <TrendingUp
                    className="h-[30px] w-[30px]"
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <h3
                    className="
                      text-[15px]
                      font-bold
                      text-[#0F1B2D]
                    "
                  >
                    Growth Opportunities
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[12px]
                      leading-[1.5]
                      text-[#617086]
                    "
                  >
                    Learn new skills and build your career with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================== */}
        {/* JOBS SECTION */}
        {/* =================================================== */}

        <section
          className="
            border-t
            border-[#E8EEF4]
            bg-[#F1F7FC]
            py-12

            lg:py-14
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
            {/* ================================================= */}
            {/* SECTION HEADER */}
            {/* ================================================= */}

            <div
              className="
                flex
                flex-col
                gap-6

                md:flex-row
                md:items-end
                md:justify-between
              "
            >
              {/* TITLE */}

              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[1px] w-[40px] bg-[#2463D4]" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.28em]
                      text-[#2463D4]
                    "
                  >
                    Open Positions
                  </span>

                  <span className="h-[1px] w-[40px] bg-[#2463D4]" />
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
                  Current Opportunities
                </h2>
              </div>

              {/* ================================================= */}
              {/* FILTER BUTTONS */}
              {/* ================================================= */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {categories.map((category) => {
                  const active =
                    activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() =>
                        setActiveCategory(category)
                      }
                      className={`
                        rounded-full
                        border
                        px-5
                        py-[10px]
                        text-[11px]
                        font-medium
                        transition-all
                        duration-200

                        ${
                          active
                            ? `
                              border-[#0878EA]
                              bg-[#0878EA]
                              text-white
                              shadow-[0_5px_14px_rgba(8,120,234,.16)]
                            `
                            : `
                              border-[#DCE5EE]
                              bg-white
                              text-[#53627A]

                              hover:border-[#B8D2EB]
                              hover:text-[#1677EA]
                            `
                        }
                      `}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ================================================= */}
            {/* JOB LIST */}
            {/* ================================================= */}

            <div className="mt-7 flex flex-col gap-4">
              {filteredJobs.map((job) => (
                <article
                  key={job.slug}
                  className="
                    grid
                    gap-6
                    rounded-[12px]
                    border
                    border-[#DFE7EF]
                    bg-white
                    px-6
                    py-6
                    shadow-[0_5px_18px_rgba(15,27,45,.025)]
                    transition-all
                    duration-200

                    hover:border-[#BDD3E9]
                    hover:shadow-[0_10px_26px_rgba(15,27,45,.055)]

                    md:grid-cols-[1fr_auto]
                    md:items-center
                  "
                >
                  {/* =========================================== */}
                  {/* JOB CONTENT */}
                  {/* =========================================== */}

                  <div>
                    {/* JOB TITLE */}

                    <h3
                      className="
                        text-[20px]
                        font-bold
                        tracking-[-0.02em]
                        text-[#0F1B2D]
                      "
                    >
                      {job.title}
                    </h3>

                    {/* JOB META */}

                    <div
                      className="
                        mt-3
                        flex
                        flex-wrap
                        items-center
                        gap-x-6
                        gap-y-3
                      "
                    >
                      {/* LOCATION */}

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          text-[12px]
                          text-[#68778C]
                        "
                      >
                        <MapPin className="h-4 w-4 text-[#52647C]" />

                        <span>{job.location}</span>
                      </div>

                      {/* TYPE */}

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          text-[12px]
                          text-[#68778C]
                        "
                      >
                        <BriefcaseBusiness className="h-4 w-4 text-[#52647C]" />

                        <span>{job.type}</span>
                      </div>

                      {/* CATEGORY */}

                      <span
                        className={`
                          rounded-full
                          px-4
                          py-[7px]
                          text-[10px]
                          font-medium

                          ${categoryStyle(job.category)}
                        `}
                      >
                        {job.category}
                      </span>
                    </div>

                    {/* SHORT DESCRIPTION */}

                    <p
                      className="
                        mt-3
                        max-w-[850px]
                        text-[13px]
                        leading-[1.6]
                        text-[#5D6C82]

                        sm:text-[14px]
                      "
                    >
                      {job.shortDescription}
                    </p>
                  </div>

                  {/* =========================================== */}
                  {/* VIEW JOB DESCRIPTION */}
                  {/* =========================================== */}

                  <Link
                    href={`/careers/job/${job.slug}`}
                    className="
                      inline-flex
                      min-h-[48px]
                      min-w-[138px]
                      items-center
                      justify-center
                      gap-2
                      rounded-[7px]
                      bg-[#0878EA]
                      px-6
                      text-[12px]
                      font-semibold
                      text-white
                      shadow-[0_6px_16px_rgba(8,120,234,.18)]
                      transition-all
                      duration-200

                      hover:bg-[#1762C4]

                      md:justify-self-end
                    "
                  >
                    Apply Now

                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}

              {/* ================================================= */}
              {/* EMPTY CATEGORY */}
              {/* ================================================= */}

              {filteredJobs.length === 0 && (
                <div
                  className="
                    flex
                    min-h-[180px]
                    items-center
                    justify-center
                    rounded-[12px]
                    border
                    border-[#DFE7EF]
                    bg-white
                    px-5
                    text-center
                    text-[14px]
                    text-[#657489]
                  "
                >
                  No current positions are available in this category.
                </div>
              )}
            </div>

            {/* ================================================= */}
            {/* GENERAL APPLICATION CTA */}
            {/* ================================================= */}

            <div
              className="
                relative
                mt-7
                overflow-hidden
                rounded-[12px]
                border
                border-[#DDE8F2]
                bg-[#EAF4FD]
                px-7
                py-8

                sm:px-10

                lg:px-14
                lg:py-9
              "
            >
              {/* LEFT DECORATION */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-130px]
                  left-[-110px]
                  h-[250px]
                  w-[250px]
                  rounded-full
                  bg-[#DDECF9]
                "
              />

              {/* RIGHT DECORATION */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-130px]
                  top-[-150px]
                  h-[300px]
                  w-[300px]
                  rounded-full
                  bg-[#E6EEFE]
                  opacity-75
                "
              />

              <div
                className="
                  relative
                  z-10
                  grid
                  gap-8

                  md:grid-cols-[1fr_auto]
                  md:items-center
                "
              >
                {/* LEFT CONTENT */}

                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.28em]
                        text-[#126CD7]
                      "
                    >
                      Don&apos;t See a Suitable Role?
                    </span>

                    <span className="h-[1px] w-[42px] bg-[#2463D4]" />
                  </div>

                  <h2
                    className="
                      mt-4
                      max-w-[580px]
                      text-[30px]
                      font-extrabold
                      leading-[1.05]
                      tracking-[-0.035em]
                      text-[#0F1B2D]

                      sm:text-[36px]
                    "
                  >
                    We&apos;re Always Open to
                    <br />
                    Talented People.
                  </h2>

                  <p
                    className="
                      mt-3
                      max-w-[730px]
                      text-[13px]
                      leading-[1.65]
                      text-[#5E6D82]

                      sm:text-[14px]
                    "
                  >
                    If you&apos;re passionate about technology and
                    think you can add value to our team, we&apos;d
                    love to hear from you. Send us your CV and tell
                    us about your skills and interests.
                  </p>
                </div>

                {/* SEND CV */}

                <Link
                  href="/careers/apply"
                  className="
                    inline-flex
                    min-h-[50px]
                    min-w-[190px]
                    items-center
                    justify-center
                    gap-3
                    rounded-[7px]
                    bg-[#0878EA]
                    px-7
                    text-[13px]
                    font-semibold
                    text-white
                    shadow-[0_7px_18px_rgba(8,120,234,.18)]
                    transition-all
                    duration-200

                    hover:bg-[#1762C4]
                  "
                >
                  Send Your CV

                  <ArrowRight className="h-4 w-4" />
                </Link>
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
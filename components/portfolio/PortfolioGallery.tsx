"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  Cloud,
  LayoutDashboard,
  MapPin,
  MessageSquareText,
  Plane,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type Category =
  | "All Projects"
  | "Web Applications"
  | "Mobile Applications"
  | "AI & Automation"
  | "CRM"
  | "E-Commerce"
  | "Custom Software";

type PreviewType =
  | "real-estate"
  | "business"
  | "ecommerce"
  | "food"
  | "ai"
  | "crm"
  | "government"
  | "travel"
  | "healthcare";

type Project = {
  slug: string;
  title: string;
  category: Category;
  badge: string;
  preview: PreviewType;
  image: string;
  description: string;
};

/* =========================================================
   PROJECT DATA
========================================================= */

const projects: Project[] = [
  {
    slug: "prime-real-estate-platform",
    title: "Prime Real Estate",
    category: "Web Applications",
    badge: "Web Application",
    preview: "real-estate",
    image: "/images/prime-estate.png",
    description:
      "A modern real estate platform with property listings, search, and customer management.",
  },
  {
    slug: "business-management-system",
    title: "Business Management System",
    category: "Custom Software",
    badge: "Custom Software",
    preview: "business",
    image: "/images/business-management-system.png",
    description:
      "A custom business management system to streamline operations and improve productivity.",
  },
  {
    slug: "electronics-ecommerce-store",
    title: "TechMart Online Store",
    category: "E-Commerce",
    badge: "E-Commerce",
    preview: "ecommerce",
    image: "/images/techmart.png",
    description:
      "A full-featured e-commerce platform with product management, secure payments and order tracking.",
  },
  {
    slug: "food-delivery-app",
    title: "Food Delivery App",
    category: "Mobile Applications",
    badge: "Mobile Application",
    preview: "food",
    image: "/images/food-delivery-app.png",
    description:
      "A user-friendly mobile app for ordering food with real-time tracking and secure payments.",
  },
  {
    slug: "business-ai-assistant",
    title: "Business AI Assistant",
    category: "AI & Automation",
    badge: "AI & Automation",
    preview: "ai",
    image: "/images/business-ai-assistant.png",
    description:
      "An AI-powered assistant to automate business tasks and improve customer support.",
  },
  {
    slug: "crm-lead-management",
    title: "CRM & Lead Management",
    category: "CRM",
    badge: "CRM",
    preview: "crm",
    image: "/images/crm-lead-management.png",
    description:
      "A CRM system to manage leads, sales pipeline and customer relationships.",
  },
  {
    slug: "government-service-portal",
    title: "Government Service Portal",
    category: "Web Applications",
    badge: "Web Application",
    preview: "government",
    image: "/images/government-service-portal.png",
    description:
      "A secure and scalable portal for managing citizen services and online applications.",
  },
  {
    slug: "travel-booking-platform",
    title: "Travel Booking Platform",
    category: "Web Applications",
    badge: "Web Application",
    preview: "travel",
    image: "/images/travel-booking-platform.png",
    description:
      "A complete travel booking system with flight, hotel and package reservations.",
  },
  {
    slug: "healthcare-appointment-app",
    title: "MediConnect",
    category: "Custom Software",
    badge: "Custom Software",
    preview: "healthcare",
    image: "/images/mediconnect.png",
    description:
      "A healthcare management system to streamline patient records, appointments and communication.",
  },
];

const categories: Category[] = [
  "All Projects",
  "Web Applications",
  "Mobile Applications",
  "AI & Automation",
  "CRM",
  "E-Commerce",
  "Custom Software",
];

/* =========================================================
   BADGE COLORS
========================================================= */

function getBadgeStyle(badge: string) {
  switch (badge) {
    case "Mobile Application":
      return "bg-[#E4FAF1] text-[#08A976]";

    case "AI & Automation":
      return "bg-[#F2E7FE] text-[#7A38D1]";

    case "CRM":
      return "bg-[#E8F2FC] text-[#1877D2]";

    case "E-Commerce":
      return "bg-[#E9F5FF] text-[#0877D8]";

    case "Custom Software":
      return "bg-[#F1E7FC] text-[#7135C5]";

    default:
      return "bg-[#EAF4FD] text-[#1672D9]";
  }
}

/* =========================================================
   PROJECT PREVIEW
========================================================= */

function ProjectPreview({
  type,
  image,
  title,
}: {
  type: PreviewType;
  image: string;
  title: string;
}) {
  if (image) {
    return (
      <div className="relative h-full overflow-hidden bg-white">
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          sizes="(min-width: 1280px) 384px, (min-width: 1024px) calc((100vw - 88px) / 3), (min-width: 640px) calc((100vw - 68px) / 2), calc(100vw - 40px)"
          className="object-cover object-center"
        />
      </div>
    );
  }

  /* =======================================================
     REAL ESTATE
  ======================================================= */

  if (type === "real-estate") {
    return (
      <div className="relative h-full overflow-hidden bg-[#F4F7FA]">
        <Image
          src="/images/prime-estate.png"
          alt="Prime Real Estate website preview"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-center"
        />
      </div>
    );
  }

  /* =======================================================
     BUSINESS MANAGEMENT
  ======================================================= */

  if (type === "business") {
    return (
      <div className="flex h-full bg-white">
        {/* sidebar */}

        <div className="w-[23%] bg-[#086BCC] p-3">
          <div className="mb-5 flex items-center gap-1 text-white">
            <LayoutDashboard className="h-3 w-3" />

            <span className="text-[6px] font-bold">
              DashStock
            </span>
          </div>

          {[
            "Overview",
            "Operations",
            "Analytics",
            "Reports",
          ].map((item, index) => (
            <div
              key={item}
              className={`
                mb-3
                flex
                h-[14px]
                items-center
                rounded
                px-2
                text-[5px]

                ${
                  index === 0
                    ? "bg-[#1780DE] text-white"
                    : "text-[#D8EAFE]"
                }
              `}
            >
              {item}
            </div>
          ))}
        </div>

        {/* content */}

        <div className="flex-1 p-3">
          <div className="text-[7px] font-bold text-[#24324B]">
            Dashboard
          </div>

          {/* stats */}

          <div className="mt-3 grid grid-cols-4 gap-2">
            {["1,250", "320", "4,400", "95%"].map(
              (number) => (
                <div
                  key={number}
                  className="rounded bg-[#F5F8FB] p-2"
                >
                  <div className="text-[7px] font-bold text-[#26354A]">
                    {number}
                  </div>

                  <div className="mt-1 h-[3px] w-8 rounded bg-[#D9E2EB]" />
                </div>
              ),
            )}
          </div>

          {/* graphs */}

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="flex h-[88px] items-end gap-2 rounded bg-[#F8FAFC] p-3">
              {[28, 45, 65, 36, 73, 58, 82].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t bg-[#2B86EA]"
                    style={{
                      height: `${height}%`,
                    }}
                  />
                ),
              )}
            </div>

            <div className="relative h-[88px] overflow-hidden rounded bg-[#F8FAFC]">
              <svg
                viewBox="0 0 160 80"
                className="absolute inset-0 h-full w-full"
              >
                <polyline
                  points="0,62 20,55 38,58 55,40 72,47 92,28 112,34 132,17 160,20"
                  fill="none"
                  stroke="#2C84E6"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =======================================================
     ECOMMERCE
  ======================================================= */

  if (type === "ecommerce") {
    return (
      <div className="relative h-full overflow-hidden bg-white">
        <Image
          src="/images/techmart.png"
          alt="TechMart online store preview"
          fill
          sizes="(min-width: 1280px) 384px, (min-width: 1024px) calc((100vw - 88px) / 3), (min-width: 640px) calc((100vw - 68px) / 2), calc(100vw - 40px)"
          className="object-cover object-center"
        />
      </div>
    );
  }

  /* =======================================================
     FOOD APP
  ======================================================= */

  if (type === "food") {
    return (
      <div className="relative h-full overflow-hidden bg-gradient-to-br from-[#E7EFEA] to-[#F4F7F5]">
        {/* PHONE ONE */}

        <div className="absolute bottom-[-25px] left-[18%] h-[185px] w-[82px] -rotate-[6deg] rounded-[18px] border-[5px] border-[#15191C] bg-[#F8FBF8] shadow-xl">
          <div className="mx-auto mt-2 h-[5px] w-[22px] rounded-full bg-[#181C1F]" />

          <div className="p-2">
            <div className="rounded-lg bg-[#18231E] px-2 py-3">
              <div className="text-[6px] font-bold text-white">
                Delicious Food
                <br />
                Delivered To You
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-[34px] rounded bg-[#D5B172]"
                />
              ))}
            </div>
          </div>
        </div>

        {/* PHONE TWO */}

        <div className="absolute bottom-[-20px] right-[18%] h-[182px] w-[82px] rotate-[5deg] rounded-[18px] border-[5px] border-[#171B1E] bg-white shadow-xl">
          <div className="mx-auto mt-2 h-[5px] w-[22px] rounded-full bg-[#181C1F]" />

          <div className="p-2">
            <div className="text-[7px] font-bold text-[#14211A]">
              Categories
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="h-[28px] rounded bg-[#D6A866]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =======================================================
     AI ASSISTANT
  ======================================================= */

  if (type === "ai") {
    return (
      <div className="flex h-full bg-[#F9FBFD]">
        {/* left navigation */}

        <div className="w-[25%] border-r border-[#E2E9F0] p-3">
          <div className="mb-4 flex items-center gap-1">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1677EA] text-[6px] text-white">
              AI
            </div>
          </div>

          {[
            "New Chat",
            "Documents",
            "Automation",
            "Settings",
          ].map((item, index) => (
            <div
              key={item}
              className={`
                mb-2
                rounded
                px-2
                py-[6px]
                text-[5px]

                ${
                  index === 0
                    ? "bg-[#E7F1FD] text-[#136ED0]"
                    : "text-[#758298]"
                }
              `}
            >
              {item}
            </div>
          ))}
        </div>

        {/* assistant */}

        <div className="flex-1 p-4">
          <div className="text-[9px] font-bold text-[#142139]">
            AI Assistant
          </div>

          {/* message */}

          <div className="mt-5 max-w-[70%] rounded-lg bg-white p-3 shadow-sm">
            <div className="h-[4px] w-[85%] rounded bg-[#D9E3ED]" />
            <div className="mt-2 h-[4px] w-[65%] rounded bg-[#D9E3ED]" />
          </div>

          {/* response */}

          <div className="ml-auto mt-3 max-w-[74%] rounded-lg bg-[#ECF5FE] p-3">
            <div className="h-[4px] w-[92%] rounded bg-[#8CBDEA]" />
            <div className="mt-2 h-[4px] w-[62%] rounded bg-[#8CBDEA]" />
          </div>

          {/* input */}

          <div className="mt-8 flex h-[28px] items-center rounded-lg border border-[#DFE7EF] bg-white px-3">
            <MessageSquareText className="h-3 w-3 text-[#9BA8B6]" />

            <div className="ml-2 h-[4px] w-[80px] rounded bg-[#E0E6ED]" />

            <div className="ml-auto h-5 w-5 rounded bg-[#1677EA]" />
          </div>
        </div>
      </div>
    );
  }

  /* =======================================================
     CRM
  ======================================================= */

  if (type === "crm") {
    return (
      <div className="flex h-full bg-white">
        {/* sidebar */}

        <div className="w-[22%] bg-[#10284B] p-3">
          <div className="mb-4 text-[6px] font-semibold text-white">
            CRM
          </div>

          {[
            "Dashboard",
            "Leads",
            "Contacts",
            "Deals",
            "Tasks",
            "Reports",
          ].map((item, index) => (
            <div
              key={item}
              className={`
                mb-2
                rounded
                px-2
                py-[5px]
                text-[5px]

                ${
                  index === 0
                    ? "bg-[#1677EA] text-white"
                    : "text-[#BFD0E2]"
                }
              `}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex-1 p-3">
          {/* stats */}

          <div className="grid grid-cols-4 gap-2">
            {["320", "120", "$45,000", "85%"].map(
              (value) => (
                <div
                  key={value}
                  className="rounded bg-[#F4F7FA] p-2 text-[6px] font-bold text-[#17233A]"
                >
                  {value}
                </div>
              ),
            )}
          </div>

          {/* pipeline */}

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              "New Leads",
              "In Progress",
              "Closed",
            ].map((title) => (
              <div key={title}>
                <div className="mb-2 text-[5px] font-bold text-[#31415A]">
                  {title}
                </div>

                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="mb-2 rounded bg-[#F3F6F9] p-2"
                  >
                    <div className="h-[3px] w-[75%] bg-[#C7D2DE]" />

                    <div className="mt-2 h-[3px] w-[45%] bg-[#DEE5EC]" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* =======================================================
     GOVERNMENT PORTAL
  ======================================================= */

  if (type === "government") {
    return (
      <div className="flex h-full bg-[#F8FAFC]">
        {/* sidebar */}

        <div className="w-[24%] bg-[#12345B] p-3">
          <div className="mb-5 text-[6px] font-bold text-white">
            GovPortal
          </div>

          {[
            "Dashboard",
            "Services",
            "Applications",
            "Users",
            "Reports",
          ].map((item, index) => (
            <div
              key={item}
              className={`
                mb-2
                rounded
                px-2
                py-[5px]
                text-[5px]

                ${
                  index === 0
                    ? "bg-[#1677EA] text-white"
                    : "text-[#C6D5E4]"
                }
              `}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex-1 p-4">
          {/* statistics */}

          <div className="grid grid-cols-3 gap-2">
            {["1,240", "320", "12"].map((value) => (
              <div
                key={value}
                className="rounded bg-white p-3 shadow-sm"
              >
                <div className="text-[8px] font-bold text-[#20344A]">
                  {value}
                </div>

                <div className="mt-1 h-[3px] w-9 rounded bg-[#D9E2EB]" />
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            {/* graph */}

            <div className="relative h-[80px] rounded bg-white shadow-sm">
              <svg
                viewBox="0 0 140 70"
                className="h-full w-full"
              >
                <polyline
                  points="0,57 20,46 35,49 55,30 75,38 90,20 110,28 140,11"
                  fill="none"
                  stroke="#2080E3"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* chart */}

            <div className="flex h-[80px] items-center justify-center rounded bg-white shadow-sm">
              <div className="h-[58px] w-[58px] rounded-full border-[14px] border-[#1778DA] border-r-[#65C7AB]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =======================================================
     TRAVEL
  ======================================================= */

  if (type === "travel") {
    return (
      <div className="h-full bg-white">
        {/* top nav */}

        <div className="flex h-[26px] items-center justify-between px-4">
          <div className="flex items-center gap-1">
            <Plane className="h-3 w-3 text-[#1677EA]" />

            <span className="text-[6px] font-bold text-[#1B2A41]">
              GoTravel
            </span>
          </div>

          <div className="flex gap-3 text-[4px] text-[#758398]">
            <span>Destinations</span>
            <span>Hotels</span>
            <span>Packages</span>
          </div>
        </div>

        {/* banner */}

        <div className="relative h-[58%] overflow-hidden bg-gradient-to-br from-[#1E8399] via-[#54B7BD] to-[#DFC899]">
          <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-[#217887]" />

          <div className="absolute right-[5%] top-[25%] h-[50%] w-[34%] rounded-t-full bg-[#47754E]" />

          <div className="absolute left-[10%] top-[18%] text-[14px] font-bold leading-tight text-white">
            Discover
            <br />
            Amazing Destinations
          </div>

          {/* search */}

          <div className="absolute bottom-[13px] left-[10%] right-[10%] flex h-[27px] items-center rounded bg-white px-3 shadow-md">
            <MapPin className="h-3 w-3 text-[#687990]" />

            <div className="ml-2 h-[4px] w-[60px] bg-[#D8E1E9]" />

            <div className="ml-auto rounded bg-[#1677EA] px-3 py-1 text-[5px] text-white">
              Explore
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 px-5 pt-3 text-center text-[5px] text-[#63728A]">
          <span>Flights</span>
          <span>Hotels</span>
          <span>Packages</span>
          <span>Car Rental</span>
        </div>
      </div>
    );
  }

  /* =======================================================
     HEALTHCARE
  ======================================================= */

  return (
    <div className="relative h-full overflow-hidden bg-white">
      <Image
        src="/images/mediconnect.png"
        alt="MediConnect healthcare management system preview"
        fill
        sizes="(min-width: 1280px) 384px, (min-width: 1024px) calc((100vw - 88px) / 3), (min-width: 640px) calc((100vw - 68px) / 2), calc(100vw - 40px)"
        className="object-cover object-center"
      />
    </div>
  );
}

/* =========================================================
   PORTFOLIO CARD
========================================================= */

function PortfolioCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[12px]
        border
        border-[#E0E7F0]
        bg-white
        shadow-[0_7px_24px_rgba(15,27,45,0.035)]
        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_16px_38px_rgba(15,27,45,0.09)]
      "
    >
      {/* PROJECT PREVIEW */}

      <div
        className="
          h-[215px]
          overflow-hidden
          border-b
          border-[#E5EBF2]

          sm:h-[230px]

          lg:h-[215px]
        "
      >
        <ProjectPreview
          type={project.preview}
          image={project.image}
          title={project.title}
        />
      </div>

      {/* CARD CONTENT */}

      <div className="p-5">
        {/* badge */}

        <span
          className={`
            inline-flex
            rounded-full
            px-3
            py-[6px]
            text-[9px]
            font-medium
            ${getBadgeStyle(project.badge)}
          `}
        >
          {project.badge}
        </span>

        {/* title */}

        <h2
          className="
            mt-3
            text-[18px]
            font-bold
            leading-[1.2]
            tracking-[-0.02em]
            text-[#0F1B2D]
          "
        >
          {project.title}
        </h2>

        {/* description */}

        <p
          className="
            mt-2
            min-h-[62px]
            text-[13px]
            leading-[1.55]
            text-[#5A6980]
          "
        >
          {project.description}
        </p>

        {/* VIEW PROJECT */}

        <Link
          href={`/portfolio/${project.slug}`}
          className="
            mt-3
            inline-flex
            items-center
            gap-2
            text-[12px]
            font-semibold
            text-[#0874DF]
            transition-all
            duration-200

            hover:gap-3
            hover:text-[#174EA6]
          "
        >
          View Project

          <ArrowRight className="h-[14px] w-[14px]" />
        </Link>
      </div>
    </article>
  );
}

/* =========================================================
   PORTFOLIO GALLERY
========================================================= */

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All Projects");

  /* FILTER PROJECTS */

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <>
      {/* ===================================================== */}
      {/* PORTFOLIO HERO */}
      {/* ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          pb-8
          pt-12

          sm:pt-14

          lg:pt-16
        "
      >
        {/* LEFT BACKGROUND DECORATION */}

        <div
          className="
            pointer-events-none
            absolute
            left-[-150px]
            top-[-110px]
            h-[340px]
            w-[340px]
            rounded-full
            bg-[#E9F3FD]
            opacity-80
          "
        />

        {/* RIGHT BACKGROUND GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-180px]
            top-[30px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#EFF5FC]
            blur-[80px]
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
          {/* OUR WORK */}

          <div className="flex items-center justify-center gap-4">
            <span
              className="h-[1px] w-[46px]"
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
                tracking-[0.31em]
                text-[#2463D4]

                sm:text-[11px]
              "
            >
              Our Work
            </span>

            <span
              className="h-[1px] w-[46px]"
              style={{
                background:
                  "linear-gradient(90deg,#2463D4,transparent)",
              }}
            />
          </div>

          {/* MAIN TITLE */}

          <h1
            className="
              mx-auto
              mt-5
              max-w-[780px]
              text-[38px]
              font-extrabold
              leading-[1.04]
              tracking-[-0.04em]
              text-[#0F1B2D]

              sm:text-[48px]

              lg:text-[54px]
            "
          >
            Projects That Create
            <br />

            <span className="text-[#1672EA]">
              Real Business Value.
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[720px]
              text-[15px]
              leading-[1.55]
              text-[#5B687D]

              sm:text-[16px]
            "
          >
            Explore a selection of our recent work. Each project is
            designed to solve real
            <br className="hidden sm:block" />
            business problems through practical and modern
            technology.
          </p>

          {/* ================================================= */}
          {/* FILTER BUTTONS */}
          {/* ================================================= */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
            "
          >
            {categories.map((category) => {
              const active =
                category === activeCategory;

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
                          border-[#0877EA]
                          bg-[#0877EA]
                          text-white
                          shadow-[0_5px_14px_rgba(8,119,234,.18)]
                        `
                        : `
                          border-[#DEE6EF]
                          bg-white
                          text-[#53627A]

                          hover:border-[#AECDED]
                          hover:bg-[#F1F6FB]
                          hover:text-[#1672D9]
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
      </section>

      {/* ===================================================== */}
      {/* PROJECT GRID */}
      {/* ===================================================== */}

      <section className="pb-8 pt-2">
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
              grid-cols-1
              gap-[22px]

              md:grid-cols-2

              lg:grid-cols-3
            "
          >
            {filteredProjects.map((project) => (
              <PortfolioCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>

          {/* NO RESULTS */}

          {filteredProjects.length === 0 && (
            <div
              className="
                flex
                min-h-[260px]
                items-center
                justify-center
                rounded-[12px]
                border
                border-[#E1E8F0]
                bg-white
                text-[14px]
                text-[#66758A]
              "
            >
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* ===================================================== */}
      {/* PORTFOLIO CTA */}
      {/* ===================================================== */}

      <section className="pb-16 pt-3 lg:pb-20">
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
              border-[#E0EAF4]
              bg-[#EEF5FC]
              px-7
              py-8

              md:px-10

              lg:px-14
              lg:py-10
            "
          >
            {/* LEFT DECORATION */}

            <div
              className="
                pointer-events-none
                absolute
                left-[-100px]
                top-[-100px]
                h-[250px]
                w-[250px]
                rounded-full
                bg-[#E3F0FC]
                opacity-70
              "
            />

            {/* RIGHT DECORATION */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-[-130px]
                right-[-70px]
                h-[250px]
                w-[250px]
                rounded-full
                bg-[#E8F0FE]
                opacity-60
              "
            />

            <div
              className="
                relative
                z-10
                grid
                gap-9

                lg:grid-cols-[1.2fr_0.8fr]
                lg:items-center
              "
            >
              {/* LEFT */}

              <div>
                <div
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.30em]
                    text-[#126CD7]
                  "
                >
                  Have a Project in Mind?
                </div>

                <h2
                  className="
                    mt-4
                    text-[30px]
                    font-extrabold
                    leading-[1.08]
                    tracking-[-0.035em]
                    text-[#0F1B2D]

                    sm:text-[36px]
                  "
                >
                  Let&apos;s Build Something Great Together.
                </h2>

                <p
                  className="
                    mt-3
                    text-[14px]
                    leading-[1.6]
                    text-[#607087]

                    sm:text-[15px]
                  "
                >
                  Tell us about your idea and we&apos;ll help you turn
                  it into a practical digital solution.
                </p>
              </div>

              {/* RIGHT */}

              <div className="grid gap-3">
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
                    transition-all
                    duration-200

                    hover:bg-[#1762C4]
                  "
                >
                  Talk to Zevin Soft

                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    min-h-[50px]
                    items-center
                    justify-center
                    rounded-[7px]
                    border
                    border-[#7C39D2]
                    bg-white/80
                    px-6
                    text-[13px]
                    font-semibold
                    text-[#6825C4]
                    transition-all
                    duration-200

                    hover:bg-[#F6EEFE]
                  "
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
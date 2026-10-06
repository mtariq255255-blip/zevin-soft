"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  Cloud,
  Code2,
  Laptop,
  Search,
  Share2,
  ShoppingCart,
  Smartphone,
  UsersRound,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* =========================================================
   TYPES
========================================================= */

type Category =
  | "All"
  | "Web Development"
  | "AI & Automation"
  | "Mobile Apps"
  | "CRM"
  | "Cloud & DevOps"
  | "Digital Marketing"
  | "Business"
  | "Tips & Guides";

type VisualType =
  | "web"
  | "ai"
  | "mobile"
  | "crm"
  | "cloud"
  | "marketing"
  | "ecommerce"
  | "coding"
  | "business";

/* =========================================================
   BLOG DATA
========================================================= */

const posts = [
  {
    slug: "why-modern-website-matters",
    title: "Why a Modern Website Matters for Your Business",
    description:
      "A modern website helps you build credibility, attract more customers and grow your business in today’s digital world.",
    category: "Web Development" as Category,
    date: "Sep 20, 2026",
    visual: "web" as VisualType,
  },
  {
    slug: "ai-automation-business-operations",
    title: "How AI and Automation Can Improve Business Operations",
    description:
      "Discover practical ways AI and automation can help reduce manual work, improve efficiency and support better decision making.",
    category: "AI & Automation" as Category,
    date: "Sep 15, 2026",
    visual: "ai" as VisualType,
  },
  {
    slug: "native-vs-cross-platform-mobile-apps",
    title: "Native vs Cross-Platform Mobile Apps – What’s Right for Your Business?",
    description:
      "A simple comparison to help you choose the best approach for your mobile application based on your goals and budget.",
    category: "Mobile Apps" as Category,
    date: "Sep 10, 2026",
    visual: "mobile" as VisualType,
  },
  {
    slug: "benefits-of-crm",
    title: "The Benefits of Using a CRM for Your Business",
    description:
      "Learn how a CRM system can help you manage leads, improve customer relationships and increase sales.",
    category: "CRM" as Category,
    date: "Sep 5, 2026",
    visual: "crm" as VisualType,
  },
  {
    slug: "cloud-deployment-guide",
    title: "A Simple Guide to Cloud Deployment for Businesses",
    description:
      "Understand the basics of cloud computing and how it can make your systems more secure, scalable and reliable.",
    category: "Cloud & DevOps" as Category,
    date: "Aug 28, 2026",
    visual: "cloud" as VisualType,
  },
  {
    slug: "social-media-marketing-growth",
    title: "Social Media Marketing Tips for Business Growth",
    description:
      "Practical tips to help you use social media effectively to increase brand awareness and reach the right audience.",
    category: "Digital Marketing" as Category,
    date: "Aug 20, 2026",
    visual: "marketing" as VisualType,
  },
  {
    slug: "successful-ecommerce-store",
    title: "Essential Features for a Successful E-Commerce Store",
    description:
      "Key features to consider when building an online store that provides a smooth and secure shopping experience.",
    category: "Web Development" as Category,
    date: "Aug 15, 2026",
    visual: "ecommerce" as VisualType,
  },
  {
    slug: "choose-right-technology",
    title: "How to Choose the Right Technology for Your Project",
    description:
      "A simple guide to help you choose the right technologies based on your project requirements, goals and budget.",
    category: "Tips & Guides" as Category,
    date: "Aug 10, 2026",
    visual: "coding" as VisualType,
  },
  {
    slug: "digital-transformation-small-medium-business",
    title: "Digital Transformation for Small and Medium Businesses",
    description:
      "Understand how digital transformation can help streamline your processes and create new growth opportunities.",
    category: "Business" as Category,
    date: "Aug 2, 2026",
    visual: "business" as VisualType,
  },
];

const categories: Category[] = [
  "All",
  "Web Development",
  "AI & Automation",
  "Mobile Apps",
  "CRM",
  "Cloud & DevOps",
  "Digital Marketing",
  "Business",
  "Tips & Guides",
];

/* =========================================================
   HELPERS
========================================================= */

function badgeStyle(category: Category) {
  switch (category) {
    case "AI & Automation":
      return "bg-[#F1E7FD] text-[#7435D1]";

    case "Mobile Apps":
      return "bg-[#E6FAF2] text-[#0AA679]";

    case "CRM":
      return "bg-[#E8F2FD] text-[#1671CF]";

    case "Cloud & DevOps":
      return "bg-[#E9F3FE] text-[#1975D6]";

    case "Digital Marketing":
      return "bg-[#F4E8FD] text-[#A02BCB]";

    case "Business":
      return "bg-[#EAF3FC] text-[#1D6DBD]";

    case "Tips & Guides":
      return "bg-[#EAF4FE] text-[#1775D8]";

    default:
      return "bg-[#E8F3FD] text-[#1673D5]";
  }
}

/* =========================================================
   BLOG VISUALS
========================================================= */

function BlogVisual({
  type,
}: {
  type: VisualType;
}) {
  if (type === "web") {
    return (
      <div className="relative h-full overflow-hidden bg-gradient-to-br from-[#142333] via-[#1B3248] to-[#607A89]">
        <div className="absolute left-[8%] top-[12%] h-[75%] w-[58%] rotate-[-3deg] rounded-[6px] bg-[#101820] shadow-2xl">
          <div className="flex h-[16px] items-center gap-1 bg-[#202B35] px-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF716C]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFCC62]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#62D88C]" />
          </div>

          <div className="p-3 font-mono text-[5px] leading-[1.8]">
            <div className="text-[#C77DFF]">
              const <span className="text-white">business</span> = &#123;
            </div>
            <div className="pl-3 text-[#63C5FF]">
              website: <span className="text-[#9EE493]">&quot;modern&quot;</span>,
            </div>
            <div className="pl-3 text-[#63C5FF]">
              performance: <span className="text-[#FFCA72]">100</span>,
            </div>
            <div className="pl-3 text-[#63C5FF]">
              responsive: <span className="text-[#C77DFF]">true</span>
            </div>
            <div className="text-[#C77DFF]">&#125;;</div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 h-[58%] w-[32%] rounded-tl-[70px] bg-[#E9ECE5]" />

        <div className="absolute bottom-[8%] right-[8%] h-[58px] w-[35px] rounded-t-full bg-[#65835E]" />
      </div>
    );
  }

  if (type === "ai") {
    return (
      <div className="relative h-full overflow-hidden bg-gradient-to-br from-[#031025] via-[#082C5A] to-[#063174]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-[10%] top-[25%] h-10 w-10 rounded-lg border border-[#20AEFF]" />
          <div className="absolute right-[12%] top-[18%] h-9 w-9 rounded-lg border border-[#20AEFF]" />
          <div className="absolute bottom-[15%] left-[15%] h-8 w-8 rounded-lg border border-[#20AEFF]" />
        </div>

        <div className="absolute left-1/2 top-1/2 flex h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[24px] border border-[#54CCFF] bg-[#062A53] shadow-[0_0_38px_rgba(0,174,255,.65)]">
          <Bot className="h-[48px] w-[48px] text-[#5BD7FF]" />

          <div className="absolute -top-6 text-[24px] font-bold text-white">
            AI
          </div>
        </div>
      </div>
    );
  }

  if (type === "mobile") {
    return (
      <div className="relative h-full overflow-hidden bg-gradient-to-br from-[#DCEBFA] via-[#A6C6E6] to-[#50789F]">
        <div className="absolute bottom-[-35px] left-[18%] h-[190px] w-[88px] -rotate-[10deg] rounded-[17px] border-[5px] border-[#182438] bg-white shadow-xl">
          <div className="mx-auto mt-2 h-[5px] w-[24px] rounded-full bg-[#26374B]" />

          <div className="space-y-2 p-2">
            <div className="h-[30px] rounded bg-[#1778E9]" />
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-[22px] rounded bg-[#E8F1FA]"
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-[-30px] right-[18%] h-[190px] w-[88px] rotate-[9deg] rounded-[17px] border-[5px] border-[#182438] bg-white shadow-xl">
          <div className="mx-auto mt-2 h-[5px] w-[24px] rounded-full bg-[#26374B]" />

          <div className="grid grid-cols-2 gap-2 p-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-[35px] rounded bg-[#E7F1FC]"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "crm") {
    return (
      <div className="flex h-full bg-[#F6F9FC]">
        <div className="w-[24%] bg-[#12345C] p-3">
          <div className="mb-5 text-[7px] font-bold text-white">
            CRM
          </div>

          {["Dashboard", "Leads", "Contacts", "Deals", "Reports"].map(
            (item, index) => (
              <div
                key={item}
                className={`mb-2 rounded px-2 py-[5px] text-[5px] ${
                  index === 0
                    ? "bg-[#1678E8] text-white"
                    : "text-[#BED1E4]"
                }`}
              >
                {item}
              </div>
            ),
          )}
        </div>

        <div className="flex-1 p-3">
          <div className="grid grid-cols-4 gap-2">
            {["320", "120", "$45K", "96%"].map((item) => (
              <div
                key={item}
                className="rounded bg-white p-2 text-[6px] font-bold text-[#23354A]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((column) => (
              <div key={column}>
                {[1, 2, 3].map((row) => (
                  <div
                    key={row}
                    className="mb-2 h-[28px] rounded bg-white shadow-sm"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "cloud") {
    return (
      <div className="relative h-full overflow-hidden bg-gradient-to-br from-[#06132B] via-[#09295A] to-[#095D9B]">
        <div className="absolute inset-x-[12%] bottom-[12%] h-[65%]">
          {[5, 27, 49, 71].map((left) => (
            <div
              key={left}
              className="absolute bottom-0 h-[78%] w-[17%] rounded-t bg-[#0A1D35] shadow-[0_0_20px_rgba(18,170,255,.22)]"
              style={{ left: `${left}%` }}
            >
              <div className="grid grid-cols-2 gap-1 p-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <span
                    key={i}
                    className="h-[2px] rounded bg-[#1EB5FF]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <Cloud className="absolute left-1/2 top-[15%] h-[70px] w-[70px] -translate-x-1/2 text-[#55D9FF] drop-shadow-[0_0_14px_rgba(0,198,255,.7)]" />
      </div>
    );
  }

  if (type === "marketing") {
    return (
      <div className="relative h-full overflow-hidden bg-gradient-to-br from-[#77494C] via-[#263A56] to-[#132439]">
        <div className="absolute left-[13%] top-[20%] rotate-[-12deg] rounded-[14px] bg-[#1877F2] p-3 text-[22px] font-bold text-white shadow-xl">
          f
        </div>

        <div className="absolute right-[18%] top-[12%] rotate-[12deg] rounded-[14px] bg-gradient-to-br from-[#FEDA75] via-[#D62976] to-[#4F5BD5] p-3 text-[15px] font-bold text-white shadow-xl">
          ◎
        </div>

        <div className="absolute bottom-[15%] left-[36%] rotate-[8deg] rounded-[14px] bg-[#0A66C2] p-3 text-[13px] font-bold text-white shadow-xl">
          in
        </div>

        <div className="absolute bottom-[11%] right-[18%] rotate-[-7deg] rounded-[14px] bg-[#FF0000] p-3 text-[14px] font-bold text-white shadow-xl">
          ▶
        </div>
      </div>
    );
  }

  if (type === "ecommerce") {
    return (
      <div className="relative h-full overflow-hidden bg-gradient-to-br from-[#E9ECEC] via-[#D5E1EA] to-[#86A1B5]">
        <div className="absolute left-[13%] top-[12%] h-[76%] w-[62%] rotate-[-3deg] rounded-lg bg-white shadow-xl">
          <div className="flex h-[20px] items-center bg-[#146DC8] px-2 text-[5px] text-white">
            E-Commerce
          </div>

          <div className="grid grid-cols-3 gap-2 p-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-[35px] rounded bg-[#EAF2F8]"
              />
            ))}
          </div>
        </div>

        <ShoppingCart className="absolute bottom-[12%] right-[9%] h-[62px] w-[62px] text-[#1779E8]" />
      </div>
    );
  }

  if (type === "coding") {
    return (
      <div className="relative h-full overflow-hidden bg-gradient-to-br from-[#E5EBEF] to-[#AFC0C9]">
        <div className="absolute bottom-[-14px] left-[15%] h-[82%] w-[72%] -rotate-[3deg] rounded-t-[8px] bg-[#101820] shadow-xl">
          <div className="p-4 font-mono text-[5px] leading-[1.9]">
            <div className="text-[#62C5FF]">
              import <span className="text-white">technology</span>
            </div>
            <div className="text-[#B982FF]">
              const <span className="text-white">project</span> = build()
            </div>
            <div className="text-[#66D58B]">
              deploy<span className="text-white">(&quot;success&quot;)</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-hidden bg-gradient-to-br from-[#F3EFE7] via-[#E5ECEF] to-[#C6DBE7]">
      <div className="absolute left-[8%] top-[18%] h-[62%] w-[62%] rotate-[-5deg] rounded-[10px] bg-white shadow-xl">
        <div className="grid grid-cols-2 gap-3 p-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-[44px] rounded bg-[#E8F2FB]"
            />
          ))}
        </div>
      </div>

      <Building2 className="absolute bottom-[13%] right-[10%] h-[64px] w-[64px] text-[#1875D8]" />
    </div>
  );
}

/* =========================================================
   BLOG CARD
========================================================= */

function BlogCard({
  post,
}: {
  post: (typeof posts)[number];
}) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[12px]
        border
        border-[#DFE7EF]
        bg-white
        shadow-[0_7px_22px_rgba(15,27,45,.035)]
        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_15px_35px_rgba(15,27,45,.08)]
      "
    >
      {/* VISUAL */}

      <div className="h-[185px] overflow-hidden border-b border-[#E6ECF2]">
        <BlogVisual type={post.visual} />
      </div>

      {/* CONTENT */}

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span
            className={`
              rounded-full
              px-3
              py-[6px]
              text-[9px]
              font-medium
              ${badgeStyle(post.category)}
            `}
          >
            {post.category}
          </span>

          <span className="text-[9px] text-[#7B899B]">
            {post.date}
          </span>
        </div>

        <h2
          className="
            mt-4
            text-[18px]
            font-bold
            leading-[1.22]
            tracking-[-0.02em]
            text-[#0F1B2D]
          "
        >
          {post.title}
        </h2>

        <p
          className="
            mt-3
            min-h-[82px]
            text-[13px]
            leading-[1.55]
            text-[#5C6B81]
          "
        >
          {post.description}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="
            mt-4
            inline-flex
            items-center
            gap-2
            text-[12px]
            font-semibold
            text-[#0875DF]
            transition-all
            duration-200

            hover:gap-3
            hover:text-[#175EBA]
          "
        >
          Read More

          <ArrowRight className="h-[14px] w-[14px]" />
        </Link>
      </div>
    </article>
  );
}

/* =========================================================
   MINI POPULAR POST
========================================================= */

function PopularPost({
  post,
}: {
  post: (typeof posts)[number];
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="
        group
        flex
        items-start
        gap-3
      "
    >
      <div
        className="
          h-[55px]
          w-[70px]
          shrink-0
          overflow-hidden
          rounded-[7px]
          border
          border-[#E2E9F0]
        "
      >
        <BlogVisual type={post.visual} />
      </div>

      <div>
        <h4
          className="
            text-[11px]
            font-semibold
            leading-[1.35]
            text-[#162238]
            transition-colors

            group-hover:text-[#1677EA]
          "
        >
          {post.title}
        </h4>

        <div className="mt-1 text-[8px] text-[#7B899B]">
          {post.date}
        </div>
      </div>
    </Link>
  );
}

/* =========================================================
   BLOG PAGE
========================================================= */

export default function BlogPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const [searchQuery, setSearchQuery] =
    useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const categoryMatch =
        activeCategory === "All" ||
        post.category === activeCategory;

      const searchMatch =
        searchQuery.trim() === "" ||
        post.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        post.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchQuery]);

  const handleNewsletter = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
  };

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

        <section
          className="
            border-b
            border-[#E4EBF2]
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
              text-[#67758A]

              sm:px-6
            "
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#1677EA]"
            >
              Home
            </Link>

            <span className="text-[#A5B1BE]">
              ›
            </span>

            <span className="font-medium text-[#435269]">
              Blog
            </span>
          </div>
        </section>

        {/* =================================================== */}
        {/* BLOG HERO */}
        {/* =================================================== */}

        <section
          className="
            relative
            overflow-hidden
            pb-8
            pt-12

            lg:pt-14
          "
        >
          {/* soft glows */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[-180px]
              h-[600px]
              w-[900px]
              -translate-x-1/2
              rounded-full
              bg-[#EAF4FE]
              opacity-65
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
            {/* OUR BLOG */}

            <div className="flex items-center justify-center gap-4">
              <span
                className="h-[1px] w-[45px]"
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
                Our Blog
              </span>

              <span
                className="h-[1px] w-[45px]"
                style={{
                  background:
                    "linear-gradient(90deg,#2463D4,transparent)",
                }}
              />
            </div>

            {/* TITLE */}

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

                lg:text-[54px]
              "
            >
              Insights, Ideas and Technology
              <br />

              <span className="text-[#1672EA]">
                for Growing Businesses.
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                mx-auto
                mt-5
                max-w-[720px]
                text-[15px]
                leading-[1.6]
                text-[#5D6B80]

                sm:text-[16px]
              "
            >
              Explore our latest articles on web development, AI,
              automation, digital strategy
              <br className="hidden sm:block" />
              and practical technology solutions for businesses.
            </p>

            {/* ================================================= */}
            {/* CATEGORY FILTERS */}
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
                            border-[#0877EA]
                            bg-[#0877EA]
                            text-white
                            shadow-[0_5px_14px_rgba(8,119,234,.18)]
                          `
                          : `
                            border-[#DDE6EF]
                            bg-white
                            text-[#53627A]

                            hover:border-[#B5D0EB]
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

        {/* =================================================== */}
        {/* BLOG CONTENT */}
        {/* =================================================== */}

        <section className="pb-10 pt-2">
          <div
            className="
              mx-auto
              grid
              max-w-[1240px]
              gap-6
              px-5

              sm:px-6

              lg:grid-cols-[1fr_265px]
              lg:items-start
            "
          >
            {/* ================================================= */}
            {/* LEFT BLOG GRID */}
            {/* ================================================= */}

            <div>
              {filteredPosts.length > 0 ? (
                <div
                  className="
                    grid
                    grid-cols-1
                    gap-5

                    md:grid-cols-2

                    xl:grid-cols-3
                  "
                >
                  {filteredPosts.map((post) => (
                    <BlogCard
                      key={post.slug}
                      post={post}
                    />
                  ))}
                </div>
              ) : (
                <div
                  className="
                    flex
                    min-h-[300px]
                    items-center
                    justify-center
                    rounded-[12px]
                    border
                    border-[#DFE7EF]
                    bg-white
                    text-[14px]
                    text-[#66758A]
                  "
                >
                  No articles found.
                </div>
              )}
            </div>

            {/* ================================================= */}
            {/* RIGHT SIDEBAR */}
            {/* ================================================= */}

            <aside
              className="
                flex
                flex-col
                gap-5

                lg:sticky
                lg:top-[100px]
              "
            >
              {/* SEARCH */}

              <div
                className="
                  rounded-[10px]
                  border
                  border-[#DFE7EF]
                  bg-white
                  p-4
                  shadow-[0_5px_18px_rgba(15,27,45,.03)]
                "
              >
                <div
                  className="
                    flex
                    h-[45px]
                    items-center
                    rounded-[7px]
                    border
                    border-[#E0E7EE]
                    bg-[#FBFCFE]
                    px-3
                  "
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(event) =>
                      setSearchQuery(
                        event.target.value,
                      )
                    }
                    placeholder="Search articles..."
                    className="
                      min-w-0
                      flex-1
                      bg-transparent
                      text-[12px]
                      text-[#26354A]
                      outline-none
                      placeholder:text-[#8B98A8]
                    "
                  />

                  <Search className="h-[18px] w-[18px] text-[#1677EA]" />
                </div>
              </div>

              {/* =============================================== */}
              {/* CATEGORIES */}
              {/* =============================================== */}

              <div
                className="
                  rounded-[10px]
                  border
                  border-[#DFE7EF]
                  bg-white
                  p-5
                  shadow-[0_5px_18px_rgba(15,27,45,.03)]
                "
              >
                <h3
                  className="
                    text-[14px]
                    font-bold
                    text-[#142139]
                  "
                >
                  Categories
                </h3>

                <div className="mt-4 flex flex-col gap-3">
                  {categories.map((category) => {
                    const count =
                      category === "All"
                        ? posts.length
                        : posts.filter(
                            (post) =>
                              post.category === category,
                          ).length;

                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() =>
                          setActiveCategory(category)
                        }
                        className={`
                          flex
                          items-center
                          justify-between
                          text-left
                          text-[12px]
                          transition-colors

                          ${
                            activeCategory === category
                              ? "font-semibold text-[#1677EA]"
                              : "text-[#45546A] hover:text-[#1677EA]"
                          }
                        `}
                      >
                        <span>{category}</span>

                        <span
                          className="
                            flex
                            min-w-[22px]
                            items-center
                            justify-center
                            rounded-[5px]
                            bg-[#F0F4F8]
                            px-1.5
                            py-1
                            text-[8px]
                            text-[#6F7E91]
                          "
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* =============================================== */}
              {/* POPULAR POSTS */}
              {/* =============================================== */}

              <div
                className="
                  rounded-[10px]
                  border
                  border-[#DFE7EF]
                  bg-white
                  p-5
                  shadow-[0_5px_18px_rgba(15,27,45,.03)]
                "
              >
                <h3
                  className="
                    text-[14px]
                    font-bold
                    text-[#142139]
                  "
                >
                  Popular Posts
                </h3>

                <div className="mt-5 flex flex-col gap-5">
                  <PopularPost post={posts[0]} />
                  <PopularPost post={posts[1]} />
                  <PopularPost post={posts[3]} />
                </div>
              </div>

              {/* =============================================== */}
              {/* NEWSLETTER */}
              {/* =============================================== */}

              <div
                className="
                  rounded-[10px]
                  border
                  border-[#D8E6F3]
                  bg-[#EAF4FD]
                  p-5
                "
              >
                <h3
                  className="
                    text-[20px]
                    font-bold
                    tracking-[-0.025em]
                    text-[#0872D9]
                  "
                >
                  Stay Updated
                </h3>

                <p
                  className="
                    mt-2
                    text-[12px]
                    leading-[1.5]
                    text-[#5E6D82]
                  "
                >
                  Get our latest articles, tips and insights delivered
                  to your inbox.
                </p>

                <form
                  onSubmit={handleNewsletter}
                  className="mt-5"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="
                      h-[45px]
                      w-full
                      rounded-[7px]
                      border
                      border-[#DCE5ED]
                      bg-white
                      px-4
                      text-[12px]
                      text-[#26354A]
                      outline-none
                      placeholder:text-[#8B98A8]
                      focus:border-[#1677EA]
                    "
                  />

                  <button
                    type="submit"
                    className="
                      mt-3
                      flex
                      h-[45px]
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-[7px]
                      bg-[#0878EA]
                      text-[12px]
                      font-semibold
                      text-white
                      transition

                      hover:bg-[#1762C4]
                    "
                  >
                    Subscribe

                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>

                <p
                  className="
                    mt-3
                    text-[9px]
                    text-[#7A8899]
                  "
                >
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* =================================================== */}
        {/* BOTTOM CTA */}
        {/* =================================================== */}

        <section className="pb-16 pt-2 lg:pb-20">
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

                lg:px-12
                lg:py-9
              "
            >
              {/* background circles */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-130px]
                  left-[-100px]
                  h-[250px]
                  w-[250px]
                  rounded-full
                  bg-[#E2EFFA]
                  opacity-70
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-100px]
                  top-[-140px]
                  h-[280px]
                  w-[280px]
                  rounded-full
                  bg-[#E8F0FE]
                  opacity-65
                "
              />

              <div
                className="
                  relative
                  z-10
                  grid
                  gap-8

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
                    Have a Topic in Mind?
                  </div>

                  <h2
                    className="
                      mt-4
                      text-[30px]
                      font-extrabold
                      leading-[1.1]
                      tracking-[-0.035em]
                      text-[#0F1B2D]

                      sm:text-[35px]
                    "
                  >
                    Let&apos;s Talk About Your Business Needs.
                  </h2>

                  <p
                    className="
                      mt-3
                      text-[14px]
                      leading-[1.6]
                      text-[#607087]
                    "
                  >
                    We&apos;re always happy to share insights and
                    discuss how technology can help your business.
                  </p>
                </div>

                {/* RIGHT */}

                <div className="flex lg:justify-end">
                  <Link
                    href="/contact"
                    className="
                      inline-flex
                      min-h-[50px]
                      min-w-[240px]
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
                      transition

                      hover:bg-[#1762C4]
                    "
                  >
                    Talk to Zevin Soft

                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
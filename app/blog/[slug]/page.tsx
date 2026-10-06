import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Lightbulb,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* =========================================================
   TYPES
========================================================= */

type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

type BlogArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  intro: string;
  sections: ArticleSection[];
  takeaways: string[];
};

/* =========================================================
   BLOG ARTICLE DATA
========================================================= */

const articles: BlogArticle[] = [
  {
    slug: "why-modern-website-matters",
    category: "Web Development",
    title: "Why a Modern Website Matters for Your Business",
    excerpt:
      "A modern website helps you build credibility, attract more customers and grow your business in today’s digital world.",
    date: "Sep 20, 2026",
    readTime: "5 min read",
    author: "Zevin Soft",
    intro:
      "Your website is often the first place potential customers interact with your business. A modern, fast and easy-to-use website can strengthen your brand, improve customer trust and create more opportunities for growth.",
    sections: [
      {
        heading: "Your Website Represents Your Business",
        paragraphs: [
          "Customers often form an impression of a business within seconds of opening its website. A professional layout, clear information and consistent branding can make the business appear more credible and reliable.",
          "An outdated or difficult website can create the opposite effect. Visitors may leave before understanding what the company offers.",
        ],
      },
      {
        heading: "Performance and Mobile Experience Matter",
        paragraphs: [
          "Modern customers access websites from phones, tablets and desktop devices. Responsive design allows the same website to adapt correctly across different screen sizes.",
          "Fast loading, simple navigation and clear calls to action also help customers reach important information with less effort.",
        ],
      },
      {
        heading: "A Website Can Support Business Growth",
        paragraphs: [
          "A business website can do more than provide information. It can generate enquiries, support online sales, connect with CRM systems and automate parts of the customer journey.",
          "The best website is therefore designed around business goals rather than appearance alone.",
        ],
      },
    ],
    takeaways: [
      "Build a responsive and mobile-friendly experience.",
      "Keep navigation simple and information easy to find.",
      "Optimise website performance and loading speed.",
      "Connect the website with useful business systems.",
    ],
  },

  {
    slug: "ai-automation-business-operations",
    category: "AI & Automation",
    title: "How AI and Automation Can Improve Business Operations",
    excerpt:
      "Discover practical ways AI and automation can reduce manual work, improve efficiency and support better decision making.",
    date: "Sep 15, 2026",
    readTime: "6 min read",
    author: "Zevin Soft",
    intro:
      "AI and automation can help businesses complete repetitive work faster, organise information and improve customer service. The strongest results come from applying automation to clear business problems rather than adopting technology without a defined purpose.",
    sections: [
      {
        heading: "Reduce Repetitive Manual Tasks",
        paragraphs: [
          "Routine activities such as data entry, notifications, reporting and document processing can consume significant employee time.",
          "Automation can move information between systems and complete predictable tasks automatically, allowing employees to focus on work that requires judgement and creativity.",
        ],
      },
      {
        heading: "Improve Customer Support",
        paragraphs: [
          "AI assistants can answer common questions, guide users through processes and help support teams organise customer requests.",
          "Human support remains important for complex situations, while automation can handle simpler interactions and improve response times.",
        ],
      },
      {
        heading: "Use Business Data More Effectively",
        paragraphs: [
          "AI tools can help businesses analyse large amounts of operational and customer data. This can make patterns, risks and opportunities easier to identify.",
          "Useful automation should connect with existing workflows and provide information that supports real business decisions.",
        ],
      },
    ],
    takeaways: [
      "Start with repetitive and measurable business processes.",
      "Use AI to support employees rather than creating unnecessary complexity.",
      "Connect automation with existing systems and workflows.",
      "Review performance and improve automated processes over time.",
    ],
  },

  {
    slug: "native-vs-cross-platform-mobile-apps",
    category: "Mobile Apps",
    title:
      "Native vs Cross-Platform Mobile Apps – What’s Right for Your Business?",
    excerpt:
      "A simple comparison to help you choose the best mobile application approach based on your goals and budget.",
    date: "Sep 10, 2026",
    readTime: "6 min read",
    author: "Zevin Soft",
    intro:
      "One of the early decisions in a mobile application project is whether to build separate native applications or use a cross-platform framework. Both approaches can work well, but they offer different advantages.",
    sections: [
      {
        heading: "What Is Native Development?",
        paragraphs: [
          "Native applications are developed specifically for one operating system. An iOS application and an Android application generally use platform-specific technologies.",
          "Native development can provide close access to device capabilities and a highly platform-specific experience.",
        ],
      },
      {
        heading: "What Is Cross-Platform Development?",
        paragraphs: [
          "Cross-platform development allows much of the application code to be shared across iOS and Android.",
          "This can reduce duplicated development effort and may be useful for businesses that want to launch on multiple platforms efficiently.",
        ],
      },
      {
        heading: "Which Approach Should You Choose?",
        paragraphs: [
          "The right choice depends on application complexity, performance requirements, budget, timeline and the features required from the device.",
          "Businesses should decide based on product requirements rather than assuming one development model is always better.",
        ],
      },
    ],
    takeaways: [
      "Define your product requirements before selecting technology.",
      "Consider performance and device-specific functionality.",
      "Compare development and maintenance requirements.",
      "Choose the approach that supports long-term product goals.",
    ],
  },

  {
    slug: "benefits-of-crm",
    category: "CRM",
    title: "The Benefits of Using a CRM for Your Business",
    excerpt:
      "Learn how a CRM system can help manage leads, improve customer relationships and strengthen sales processes.",
    date: "Sep 5, 2026",
    readTime: "5 min read",
    author: "Zevin Soft",
    intro:
      "Customer information is difficult to manage when it is spread across spreadsheets, emails and separate applications. A CRM brings important customer and sales information into a more structured system.",
    sections: [
      {
        heading: "Keep Customer Information Organised",
        paragraphs: [
          "A CRM can store contact information, communication history, opportunities and other useful details in one location.",
          "This gives authorised team members a clearer understanding of each customer relationship.",
        ],
      },
      {
        heading: "Create a Better Sales Process",
        paragraphs: [
          "Sales teams can use CRM stages to understand where each lead sits in the pipeline and what action should happen next.",
          "Tasks, reminders and workflow automation can also reduce the risk of leads being forgotten.",
        ],
      },
      {
        heading: "Improve Visibility and Reporting",
        paragraphs: [
          "Managers can use CRM information to understand sales activity, lead progress and customer trends.",
          "A well-designed CRM therefore supports both daily operations and longer-term business decisions.",
        ],
      },
    ],
    takeaways: [
      "Centralise customer and lead information.",
      "Create consistent sales stages and processes.",
      "Use reminders and automation for follow-up.",
      "Track useful information through dashboards and reports.",
    ],
  },

  {
    slug: "cloud-deployment-guide",
    category: "Cloud & DevOps",
    title: "A Simple Guide to Cloud Deployment for Businesses",
    excerpt:
      "Understand the basics of cloud computing and how it can make business systems more scalable and manageable.",
    date: "Aug 28, 2026",
    readTime: "6 min read",
    author: "Zevin Soft",
    intro:
      "Cloud infrastructure allows businesses to run applications and services using flexible computing resources instead of relying entirely on physical infrastructure maintained on-site.",
    sections: [
      {
        heading: "Why Businesses Use Cloud Infrastructure",
        paragraphs: [
          "Cloud platforms can provide computing, storage, databases and other services that can be adjusted as business requirements change.",
          "This flexibility can be useful for growing digital products and applications with changing levels of demand.",
        ],
      },
      {
        heading: "Deployment Should Be Structured",
        paragraphs: [
          "Cloud deployment involves more than simply uploading an application. Configuration, security, backups, monitoring and access controls should be planned carefully.",
          "DevOps practices can make application releases more consistent and easier to manage.",
        ],
      },
      {
        heading: "Plan for Reliability and Security",
        paragraphs: [
          "Businesses should consider how applications are monitored, how data is protected and how systems recover from failures.",
          "The cloud provides useful capabilities, but those capabilities still need to be configured appropriately.",
        ],
      },
    ],
    takeaways: [
      "Choose infrastructure based on application requirements.",
      "Automate repeatable deployment processes where practical.",
      "Include monitoring, backups and access controls.",
      "Review cloud usage as the business grows.",
    ],
  },

  {
    slug: "social-media-marketing-growth",
    category: "Digital Marketing",
    title: "Social Media Marketing Tips for Business Growth",
    excerpt:
      "Practical ways to use social media to improve brand awareness and reach the right audience.",
    date: "Aug 20, 2026",
    readTime: "5 min read",
    author: "Zevin Soft",
    intro:
      "Social media can help businesses communicate directly with customers, build brand awareness and support broader marketing goals. Consistency and relevance are usually more valuable than simply publishing a large volume of content.",
    sections: [
      {
        heading: "Understand Your Audience",
        paragraphs: [
          "Businesses should understand who they want to reach and which platforms those customers actually use.",
          "Audience needs should influence the topics, tone and format of social media content.",
        ],
      },
      {
        heading: "Create Useful and Consistent Content",
        paragraphs: [
          "Content can educate, answer questions, demonstrate expertise and show how products or services solve customer problems.",
          "A simple content plan can help maintain consistent communication without making publishing unnecessarily complicated.",
        ],
      },
      {
        heading: "Measure What Supports Business Goals",
        paragraphs: [
          "Follower numbers alone do not explain whether social media activity is supporting business growth.",
          "Businesses should also look at engagement, enquiries, website visits, conversions and other metrics that relate to their goals.",
        ],
      },
    ],
    takeaways: [
      "Focus on the platforms your customers use.",
      "Create content around customer needs.",
      "Maintain a consistent publishing approach.",
      "Measure business outcomes instead of vanity metrics alone.",
    ],
  },

  {
    slug: "successful-ecommerce-store",
    category: "E-Commerce",
    title: "Essential Features for a Successful E-Commerce Store",
    excerpt:
      "Key features to consider when building an online store that provides a smooth and secure shopping experience.",
    date: "Aug 15, 2026",
    readTime: "6 min read",
    author: "Zevin Soft",
    intro:
      "A successful online store should make it easy for customers to discover products, understand what they are buying and complete a purchase with confidence.",
    sections: [
      {
        heading: "Make Product Discovery Easy",
        paragraphs: [
          "Clear categories, useful search and practical filters help customers find relevant products more quickly.",
          "Product pages should provide understandable descriptions, images, pricing and availability information.",
        ],
      },
      {
        heading: "Keep Checkout Simple",
        paragraphs: [
          "A complicated checkout process can create unnecessary friction. Customers should clearly understand the steps required to complete their purchase.",
          "Payment options, delivery information and order summaries should be easy to review.",
        ],
      },
      {
        heading: "Connect the Store With Operations",
        paragraphs: [
          "E-commerce platforms become more useful when orders, inventory, customer data and reporting work together.",
          "Integrations can reduce duplicated manual work and improve visibility across the business.",
        ],
      },
    ],
    takeaways: [
      "Provide clear product navigation and search.",
      "Use a straightforward checkout journey.",
      "Support secure payment processing.",
      "Connect orders and inventory with business operations.",
    ],
  },

  {
    slug: "choose-right-technology",
    category: "Tips & Guides",
    title: "How to Choose the Right Technology for Your Project",
    excerpt:
      "A practical guide to choosing technologies based on project requirements, goals and budget.",
    date: "Aug 10, 2026",
    readTime: "6 min read",
    author: "Zevin Soft",
    intro:
      "Technology choices can affect development time, performance, maintenance and the future flexibility of a digital product. The best technology stack depends on what the project actually needs to achieve.",
    sections: [
      {
        heading: "Start With Requirements",
        paragraphs: [
          "Before comparing frameworks and platforms, define the users, features, integrations and expected scale of the project.",
          "Technology decisions become easier when the business requirements are clear.",
        ],
      },
      {
        heading: "Consider Long-Term Maintenance",
        paragraphs: [
          "A technology may be technically capable but difficult for a business to maintain if skills, documentation or ecosystem support are limited.",
          "Maintainability should therefore be considered alongside development speed.",
        ],
      },
      {
        heading: "Avoid Choosing Technology Only Because It Is Popular",
        paragraphs: [
          "Popular tools can be useful, but popularity alone does not make a technology suitable for every project.",
          "The chosen stack should support the required functionality, security, performance and future development plans.",
        ],
      },
    ],
    takeaways: [
      "Define requirements before selecting technologies.",
      "Consider the experience of the development team.",
      "Plan for maintenance and future growth.",
      "Use technology to support business requirements, not the reverse.",
    ],
  },

  {
    slug: "digital-transformation-small-medium-business",
    category: "Business",
    title: "Digital Transformation for Small and Medium Businesses",
    excerpt:
      "Understand how digital transformation can streamline processes and create new opportunities for growth.",
    date: "Aug 2, 2026",
    readTime: "6 min read",
    author: "Zevin Soft",
    intro:
      "Digital transformation does not necessarily mean replacing every existing process or system. For many businesses, it means identifying specific areas where better technology can reduce friction and improve how people work.",
    sections: [
      {
        heading: "Start With Business Problems",
        paragraphs: [
          "Transformation should begin by understanding where the organisation is losing time, duplicating effort or creating poor customer experiences.",
          "The most useful digital initiatives address these problems directly.",
        ],
      },
      {
        heading: "Connect Important Systems",
        paragraphs: [
          "Businesses often use separate tools for websites, customer management, sales, accounting and operations.",
          "Connecting systems can reduce repeated data entry and make important information easier to access.",
        ],
      },
      {
        heading: "Improve in Practical Stages",
        paragraphs: [
          "Digital transformation can be approached as a series of manageable improvements instead of one large change.",
          "This allows businesses to learn from each stage, measure results and adjust priorities as requirements evolve.",
        ],
      },
    ],
    takeaways: [
      "Begin with real operational problems.",
      "Prioritise improvements that provide measurable value.",
      "Connect useful systems and information.",
      "Improve gradually and review results.",
    ],
  },
];

/* =========================================================
   HELPERS
========================================================= */

function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

function categoryStyle(category: string) {
  if (category === "AI & Automation") {
    return "bg-[#F1E7FD] text-[#7435D1]";
  }

  if (category === "Mobile Apps") {
    return "bg-[#E7FAF3] text-[#0A9F76]";
  }

  if (category === "Digital Marketing") {
    return "bg-[#F5EAFE] text-[#9A36C8]";
  }

  return "bg-[#E8F3FD] text-[#1673D5]";
}

/* =========================================================
   STATIC PATHS
========================================================= */

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

/* =========================================================
   PAGE
========================================================= */

type BlogDescriptionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDescriptionPage({
  params,
}: BlogDescriptionPageProps) {
  const { slug } = await params;

  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      {/* EXISTING HEADER */}

      <Navbar />

      <main className="overflow-hidden bg-[#F7F9FC] pt-[80px]">
        {/* ================================================= */}
        {/* BREADCRUMB */}
        {/* ================================================= */}

        <section className="border-b border-[#E4EBF2] bg-[#F4F8FB]">
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
              text-[#67758A]

              sm:px-6
            "
          >
            <Link
              href="/"
              className="hover:text-[#1677EA]"
            >
              Home
            </Link>

            <span>›</span>

            <Link
              href="/blog"
              className="hover:text-[#1677EA]"
            >
              Blog
            </Link>

            <span>›</span>

            <span
              className="
                max-w-[280px]
                truncate
                font-medium
                text-[#34445A]
              "
            >
              {article.title}
            </span>
          </div>
        </section>

        {/* ================================================= */}
        {/* ARTICLE HERO */}
        {/* ================================================= */}

        <section
          className="
            relative
            overflow-hidden
            bg-white
            pb-14
            pt-12

            lg:pb-16
            lg:pt-16
          "
        >
          {/* glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[-300px]
              h-[700px]
              w-[1000px]
              -translate-x-1/2
              rounded-full
              bg-[#EAF4FE]
              opacity-70
              blur-[110px]
            "
          />

          <div
            className="
              relative
              z-10
              mx-auto
              max-w-[900px]
              px-5
              text-center

              sm:px-6
            "
          >
            {/* BACK */}

            <Link
              href="/blog"
              className="
                inline-flex
                items-center
                gap-2
                text-[12px]
                font-semibold
                text-[#1677EA]
              "
            >
              <ArrowLeft className="h-4 w-4" />

              Back to Blog
            </Link>

            {/* CATEGORY */}

            <div className="mt-6">
              <span
                className={`
                  inline-flex
                  rounded-full
                  px-4
                  py-2
                  text-[10px]
                  font-semibold

                  ${categoryStyle(article.category)}
                `}
              >
                {article.category}
              </span>
            </div>

            {/* TITLE */}

            <h1
              className="
                mx-auto
                mt-5
                text-[38px]
                font-extrabold
                leading-[1.06]
                tracking-[-0.045em]
                text-[#0F1B2D]

                sm:text-[48px]

                lg:text-[55px]
              "
            >
              {article.title}
            </h1>

            {/* EXCERPT */}

            <p
              className="
                mx-auto
                mt-6
                max-w-[760px]
                text-[15px]
                leading-[1.7]
                text-[#5B6980]

                sm:text-[17px]
              "
            >
              {article.excerpt}
            </p>

            {/* META */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-6
                gap-y-3
                text-[11px]
                text-[#6B798D]
              "
            >
              <span className="font-semibold text-[#26354A]">
                {article.author}
              </span>

              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-[#1677EA]" />

                {article.date}
              </div>

              <div className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-[#1677EA]" />

                {article.readTime}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* FEATURE IMAGE / VISUAL */}
        {/* ================================================= */}

        <section className="bg-white pb-14">
          <div
            className="
              mx-auto
              max-w-[1050px]
              px-5

              sm:px-6
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[18px]
                border
                border-[#DCE6F0]
                bg-gradient-to-br
                from-[#0C1C38]
                via-[#123E78]
                to-[#1677EA]
                shadow-[0_20px_45px_rgba(15,27,45,.10)]
              "
            >
              <div className="relative min-h-[330px] sm:min-h-[420px]">
                {/* decorative dashboard */}

                <div
                  className="
                    absolute
                    left-[7%]
                    top-[12%]
                    h-[76%]
                    w-[86%]
                    rounded-[18px]
                    border
                    border-white/20
                    bg-white/10
                    p-5
                    backdrop-blur-sm
                  "
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF7A72]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFCB61]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#66D794]" />

                    <div className="ml-4 h-[6px] w-[32%] rounded bg-white/20" />
                  </div>

                  <div
                    className="
                      mt-6
                      grid
                      gap-4

                      sm:grid-cols-[0.28fr_0.72fr]
                    "
                  >
                    <div className="hidden rounded-[12px] bg-[#071A34]/70 p-4 sm:block">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div
                          key={item}
                          className="
                            mb-4
                            h-[7px]
                            rounded-full
                            bg-white/20
                          "
                          style={{
                            width:
                              item % 2 === 0
                                ? "75%"
                                : "55%",
                          }}
                        />
                      ))}
                    </div>

                    <div>
                      <div className="grid grid-cols-3 gap-3">
                        {[1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className="
                              h-[65px]
                              rounded-[10px]
                              bg-white/90
                            "
                          />
                        ))}
                      </div>

                      <div
                        className="
                          mt-4
                          h-[145px]
                          rounded-[12px]
                          bg-white/90
                          p-4
                        "
                      >
                        <svg
                          viewBox="0 0 500 120"
                          className="h-full w-full"
                        >
                          <polyline
                            points="
                              0,100
                              55,85
                              110,92
                              170,61
                              225,72
                              290,40
                              350,51
                              410,23
                              500,35
                            "
                            fill="none"
                            stroke="#1677EA"
                            strokeWidth="5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* ARTICLE BODY */}
        {/* ================================================= */}

        <section
          className="
            border-t
            border-[#E7EDF3]
            bg-[#F7F9FC]
            py-16

            lg:py-20
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-[1100px]
              gap-12
              px-5

              sm:px-6

              lg:grid-cols-[1fr_280px]
              lg:items-start
            "
          >
            {/* ARTICLE */}

            <article>
              {/* INTRODUCTION */}

              <div
                className="
                  rounded-[14px]
                  border
                  border-[#DCE7F1]
                  bg-[#EEF6FD]
                  p-6

                  sm:p-7
                "
              >
                <div className="flex gap-4">
                  <div
                    className="
                      flex
                      h-[45px]
                      w-[45px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-[12px]
                      bg-white
                      text-[#1677EA]
                    "
                  >
                    <Lightbulb className="h-6 w-6" />
                  </div>

                  <p
                    className="
                      text-[14px]
                      leading-[1.8]
                      text-[#495A71]

                      sm:text-[15px]
                    "
                  >
                    {article.intro}
                  </p>
                </div>
              </div>

              {/* SECTIONS */}

              <div className="mt-10">
                {article.sections.map(
                  (section, index) => (
                    <section
                      key={section.heading}
                      className={`
                        ${
                          index !== 0
                            ? "mt-10 border-t border-[#E1E8EF] pt-10"
                            : ""
                        }
                      `}
                    >
                      <h2
                        className="
                          text-[27px]
                          font-extrabold
                          leading-[1.2]
                          tracking-[-0.03em]
                          text-[#0F1B2D]

                          sm:text-[31px]
                        "
                      >
                        {section.heading}
                      </h2>

                      <div className="mt-5 space-y-5">
                        {section.paragraphs.map(
                          (paragraph) => (
                            <p
                              key={paragraph}
                              className="
                                text-[14px]
                                leading-[1.85]
                                text-[#58687E]

                                sm:text-[15px]
                              "
                            >
                              {paragraph}
                            </p>
                          ),
                        )}
                      </div>
                    </section>
                  ),
                )}
              </div>

              {/* TAKEAWAYS */}

              <div
                className="
                  mt-12
                  rounded-[16px]
                  border
                  border-[#DDE8F2]
                  bg-white
                  p-7
                "
              >
                <div
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.27em]
                    text-[#1677EA]
                  "
                >
                  Key Takeaways
                </div>

                <h2
                  className="
                    mt-3
                    text-[26px]
                    font-extrabold
                    text-[#0F1B2D]
                  "
                >
                  What Your Business Should Consider
                </h2>

                <div className="mt-6 grid gap-4">
                  {article.takeaways.map(
                    (takeaway) => (
                      <div
                        key={takeaway}
                        className="
                          flex
                          items-start
                          gap-3
                        "
                      >
                        <CheckCircle2
                          className="
                            mt-[2px]
                            h-5
                            w-5
                            shrink-0
                            text-[#1677EA]
                          "
                        />

                        <p
                          className="
                            text-[14px]
                            leading-[1.55]
                            text-[#53637A]
                          "
                        >
                          {takeaway}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </article>

            {/* ================================================= */}
            {/* SIDEBAR */}
            {/* ================================================= */}

            <aside
              className="
                flex
                flex-col
                gap-5

                lg:sticky
                lg:top-[105px]
              "
            >
              {/* ARTICLE DETAILS */}

              <div
                className="
                  rounded-[12px]
                  border
                  border-[#DFE7EF]
                  bg-white
                  p-5
                "
              >
                <h3
                  className="
                    text-[15px]
                    font-bold
                    text-[#0F1B2D]
                  "
                >
                  Article Details
                </h3>

                <div
                  className="
                    mt-5
                    space-y-4
                    text-[12px]
                    text-[#607087]
                  "
                >
                  <div>
                    <div
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#8A97A7]
                      "
                    >
                      Category
                    </div>

                    <div className="mt-1 font-semibold text-[#304057]">
                      {article.category}
                    </div>
                  </div>

                  <div className="border-t border-[#EDF1F5] pt-4">
                    <div
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#8A97A7]
                      "
                    >
                      Published
                    </div>

                    <div className="mt-1 font-semibold text-[#304057]">
                      {article.date}
                    </div>
                  </div>

                  <div className="border-t border-[#EDF1F5] pt-4">
                    <div
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#8A97A7]
                      "
                    >
                      Reading Time
                    </div>

                    <div className="mt-1 font-semibold text-[#304057]">
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </div>

              {/* HELP CTA */}

              <div
                className="
                  rounded-[12px]
                  bg-gradient-to-br
                  from-[#1677EA]
                  to-[#125DC2]
                  p-6
                  text-white
                "
              >
                <div
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-white/75
                  "
                >
                  Need Help?
                </div>

                <h3
                  className="
                    mt-3
                    text-[21px]
                    font-bold
                    leading-[1.2]
                  "
                >
                  Turn Your Idea Into a Digital Solution.
                </h3>

                <p
                  className="
                    mt-3
                    text-[12px]
                    leading-[1.6]
                    text-white/80
                  "
                >
                  Tell us about your business challenge and our team
                  will help you explore the right approach.
                </p>

                <Link
                  href="/contact"
                  className="
                    mt-5
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-[7px]
                    bg-white
                    px-5
                    py-3
                    text-[12px]
                    font-semibold
                    text-[#166ACD]
                  "
                >
                  Talk to Zevin Soft

                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* ================================================= */}
        {/* RELATED ARTICLES */}
        {/* ================================================= */}

        <section className="bg-white py-16">
          <div
            className="
              mx-auto
              max-w-[1100px]
              px-5

              sm:px-6
            "
          >
            <div
              className="
                flex
                flex-col
                gap-4

                sm:flex-row
                sm:items-end
                sm:justify-between
              "
            >
              <div>
                <div
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.28em]
                    text-[#1677EA]
                  "
                >
                  Continue Reading
                </div>

                <h2
                  className="
                    mt-3
                    text-[30px]
                    font-extrabold
                    tracking-[-0.035em]
                    text-[#0F1B2D]
                  "
                >
                  Related Articles
                </h2>
              </div>

              <Link
                href="/blog"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-[12px]
                  font-semibold
                  text-[#1677EA]
                "
              >
                View All Articles

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div
              className="
                mt-8
                grid
                gap-5

                md:grid-cols-3
              "
            >
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="
                    group
                    rounded-[12px]
                    border
                    border-[#DFE7EF]
                    bg-[#FAFCFE]
                    p-5
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#BFD4EA]
                    hover:bg-white
                    hover:shadow-[0_12px_28px_rgba(15,27,45,.07)]
                  "
                >
                  <span
                    className={`
                      inline-flex
                      rounded-full
                      px-3
                      py-[6px]
                      text-[9px]
                      font-medium

                      ${categoryStyle(related.category)}
                    `}
                  >
                    {related.category}
                  </span>

                  <h3
                    className="
                      mt-4
                      text-[17px]
                      font-bold
                      leading-[1.3]
                      text-[#0F1B2D]
                      transition-colors

                      group-hover:text-[#1677EA]
                    "
                  >
                    {related.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      line-clamp-3
                      text-[12px]
                      leading-[1.6]
                      text-[#627188]
                    "
                  >
                    {related.excerpt}
                  </p>

                  <div
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-[11px]
                      font-semibold
                      text-[#1677EA]
                    "
                  >
                    Read Article

                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* FINAL CTA */}
        {/* ================================================= */}

        <section className="bg-white pb-16 lg:pb-20">
          <div
            className="
              mx-auto
              max-w-[1100px]
              px-5

              sm:px-6
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[14px]
                border
                border-[#DDE8F2]
                bg-[#EEF5FC]
                px-7
                py-9

                lg:px-10
              "
            >
              <div
                className="
                  grid
                  gap-7

                  md:grid-cols-[1fr_auto]
                  md:items-center
                "
              >
                <div>
                  <div
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.28em]
                      text-[#1677EA]
                    "
                  >
                    Have a Business Challenge?
                  </div>

                  <h2
                    className="
                      mt-3
                      text-[29px]
                      font-extrabold
                      tracking-[-0.035em]
                      text-[#0F1B2D]
                    "
                  >
                    Let&apos;s Find the Right Digital Solution.
                  </h2>

                  <p
                    className="
                      mt-2
                      text-[13px]
                      text-[#627188]
                    "
                  >
                    Talk with our team about your goals, project and
                    requirements.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    min-h-[50px]
                    items-center
                    justify-center
                    gap-3
                    rounded-[8px]
                    bg-[#1677EA]
                    px-8
                    text-[13px]
                    font-semibold
                    text-white
                    transition

                    hover:bg-[#1265CA]
                  "
                >
                  Get in Touch

                  <ArrowRight className="h-4 w-4" />
                </Link>
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
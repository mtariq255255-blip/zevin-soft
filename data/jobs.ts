export type Job = {
  slug: string;
  title: string;
  location: string;
  type: string;
  category:
    | "Development"
    | "Design"
    | "AI & Data"
    | "Marketing"
    | "Other";

  shortDescription: string;

  overview: string;

  responsibilities: string[];

  requirements: string[];

  preferred: string[];

  benefits: string[];

  skills: string[];
};

export const jobs: Job[] = [
  {
    slug: "full-stack-developer",

    title: "Full Stack Developer",

    location: "USA",

    type: "Full Time",

    category: "Development",

    shortDescription:
      "Build modern web applications using React, Next.js, Node.js and cloud technologies while contributing across the complete development lifecycle.",

    overview:
      "We are looking for a Full Stack Developer who enjoys building practical and reliable digital products. You will work across frontend and backend development, collaborate with designers and other developers, and help deliver modern business applications from initial planning through deployment.",

    responsibilities: [
      "Develop responsive and scalable web applications using React and Next.js.",
      "Build backend services and APIs using Node.js.",
      "Work with databases and third-party integrations.",
      "Translate UI/UX designs into functional interfaces.",
      "Participate in project planning and technical discussions.",
      "Test, debug and improve application performance.",
      "Support deployment and ongoing product improvement.",
      "Collaborate with designers, developers and project managers.",
    ],

    requirements: [
      "Strong knowledge of JavaScript and TypeScript.",
      "Experience with React and Next.js.",
      "Experience with Node.js and REST APIs.",
      "Understanding of relational or NoSQL databases.",
      "Knowledge of Git and modern development workflows.",
      "Ability to create responsive and accessible interfaces.",
      "Good communication and problem-solving skills.",
    ],

    preferred: [
      "Experience with cloud platforms.",
      "Knowledge of CI/CD workflows.",
      "Experience with Tailwind CSS or Bootstrap.",
      "Understanding of Docker and deployment environments.",
    ],

    benefits: [
      "Work on real business projects.",
      "Flexible and collaborative work environment.",
      "Opportunity to learn modern technologies.",
      "Career development and technical growth.",
      "Supportive development team.",
    ],

    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Databases",
      "Git",
      "Cloud",
    ],
  },

  {
    slug: "ai-ml-engineer",

    title: "AI/ML Engineer",

    location: "USA",

    type: "Full Time",

    category: "AI & Data",

    shortDescription:
      "Build intelligent applications, AI integrations and automation workflows that solve practical business problems.",

    overview:
      "We are looking for an AI/ML Engineer to help design and integrate practical artificial intelligence solutions into modern business applications. The role focuses on turning business requirements into useful AI-powered features and automation workflows.",

    responsibilities: [
      "Develop AI-powered features and applications.",
      "Integrate large language models and AI APIs.",
      "Design automation workflows for business processes.",
      "Prepare and process structured and unstructured data.",
      "Evaluate AI outputs and improve application reliability.",
      "Build APIs and services for AI functionality.",
      "Collaborate with product and development teams.",
      "Research useful AI technologies for business applications.",
    ],

    requirements: [
      "Strong Python programming skills.",
      "Understanding of machine learning and AI concepts.",
      "Experience working with AI APIs or language models.",
      "Knowledge of data processing and APIs.",
      "Ability to evaluate and debug AI-powered workflows.",
      "Strong problem-solving and communication skills.",
    ],

    preferred: [
      "Experience with vector databases.",
      "Knowledge of RAG architectures.",
      "Experience with workflow automation.",
      "Understanding of cloud-based AI services.",
    ],

    benefits: [
      "Work on practical AI projects.",
      "Exposure to emerging AI technologies.",
      "Collaborative product development.",
      "Career growth opportunities.",
      "Supportive technical environment.",
    ],

    skills: [
      "Python",
      "Machine Learning",
      "LLM APIs",
      "Automation",
      "RAG",
      "Vector Databases",
      "APIs",
      "Cloud AI",
    ],
  },

  {
    slug: "frontend-developer",

    title: "Frontend Developer",

    location: "USA",

    type: "Full Time",

    category: "Development",

    shortDescription:
      "Create responsive, accessible and high-quality user interfaces using React and Next.js.",

    overview:
      "We are looking for a Frontend Developer who can turn designs and product requirements into polished digital experiences. You will work closely with designers and backend developers to create modern web interfaces for business applications.",

    responsibilities: [
      "Develop responsive user interfaces using React and Next.js.",
      "Convert designs into accurate reusable components.",
      "Integrate frontend applications with APIs.",
      "Optimise usability, responsiveness and performance.",
      "Maintain reusable frontend components.",
      "Test interfaces across browsers and screen sizes.",
      "Work closely with UI/UX and backend teams.",
    ],

    requirements: [
      "Strong HTML, CSS and JavaScript skills.",
      "Experience with React.",
      "Experience with Next.js.",
      "Knowledge of responsive design.",
      "Understanding of API integration.",
      "Familiarity with Git.",
      "Good attention to design details.",
    ],

    preferred: [
      "TypeScript experience.",
      "Tailwind CSS experience.",
      "Understanding of accessibility standards.",
      "Knowledge of frontend performance optimisation.",
    ],

    benefits: [
      "Modern frontend projects.",
      "Collaborative design environment.",
      "Opportunity to improve UX skills.",
      "Career development.",
      "Flexible working culture.",
    ],

    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "UI Development",
    ],
  },

  {
    slug: "ui-ux-designer",

    title: "UI/UX Designer",

    location: "USA",

    type: "Full Time",

    category: "Design",

    shortDescription:
      "Design clear, practical and user-friendly experiences for websites, mobile applications and digital products.",

    overview:
      "We are looking for a UI/UX Designer who can turn business requirements into intuitive digital experiences. You will work with stakeholders and developers to design interfaces that are attractive, practical and easy to use.",

    responsibilities: [
      "Create wireframes, user flows and interface designs.",
      "Design responsive websites and application screens.",
      "Develop reusable UI components and design systems.",
      "Collaborate with developers during implementation.",
      "Improve designs based on feedback and testing.",
      "Research user and business requirements.",
      "Maintain visual consistency across products.",
    ],

    requirements: [
      "Strong UI and UX design fundamentals.",
      "Experience using Figma.",
      "Understanding of responsive design.",
      "Ability to create wireframes and prototypes.",
      "Strong visual hierarchy and typography skills.",
      "Good communication and collaboration skills.",
    ],

    preferred: [
      "Experience with design systems.",
      "Knowledge of accessibility principles.",
      "Understanding of frontend development.",
      "Experience designing SaaS or business applications.",
    ],

    benefits: [
      "Work on diverse digital products.",
      "Collaborate directly with developers.",
      "Creative and supportive environment.",
      "Opportunity for professional growth.",
      "Exposure to modern product design.",
    ],

    skills: [
      "Figma",
      "UI Design",
      "UX Design",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Responsive Design",
      "Accessibility",
    ],
  },

  {
    slug: "digital-marketing-specialist",

    title: "Digital Marketing Specialist",

    location: "USA",

    type: "Full Time",

    category: "Marketing",

    shortDescription:
      "Plan and execute digital marketing strategies across social media, SEO, content and paid campaigns.",

    overview:
      "We are looking for a Digital Marketing Specialist who can help businesses improve their online presence and generate measurable growth. You will plan campaigns, create marketing strategies and analyse results across multiple digital channels.",

    responsibilities: [
      "Plan digital marketing campaigns.",
      "Manage social media marketing activities.",
      "Support SEO and content optimisation.",
      "Plan and monitor paid advertising campaigns.",
      "Analyse campaign performance and reporting.",
      "Research target audiences and market trends.",
      "Coordinate marketing content and messaging.",
    ],

    requirements: [
      "Understanding of digital marketing fundamentals.",
      "Experience with social media platforms.",
      "Basic knowledge of SEO.",
      "Experience analysing campaign performance.",
      "Strong communication and writing skills.",
      "Ability to manage multiple campaigns.",
    ],

    preferred: [
      "Experience with Google Ads.",
      "Experience with Meta Ads.",
      "Understanding of Google Analytics.",
      "Knowledge of email marketing tools.",
    ],

    benefits: [
      "Work across different industries.",
      "Hands-on digital campaigns.",
      "Opportunities to develop marketing expertise.",
      "Collaborative environment.",
      "Career development support.",
    ],

    skills: [
      "Digital Marketing",
      "SEO",
      "Social Media",
      "Google Ads",
      "Meta Ads",
      "Analytics",
      "Content Marketing",
      "Campaign Strategy",
    ],
  },
];

export function getJob(slug: string) {
  return jobs.find((job) => job.slug === slug);
}
export type PortfolioProject = {
  slug: string;
  image: string;
  title: string;
  category: string;
  shortDescription: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  services: string[];
  technologies: string[];
  highlights: {
    value: string;
    label: string;
  }[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "prime-real-estate-platform",
    image: "/images/prime-estate.png",
    title: "Prime Real Estate",
    category: "Web Application",
    shortDescription:
      "A modern real estate platform with property listings, search, and customer management.",
    overview:
      "Prime Real Estate Platform is a modern property discovery solution designed to make it easier for customers to explore properties, compare options and contact the property team. The platform combines a clean user experience with practical property-management functionality.",
    challenge:
      "The business needed a professional digital platform that could present a growing property portfolio clearly while helping potential customers quickly find relevant properties. Property information, enquiries and customer interactions also needed to be easier to manage.",
    solution:
      "We designed a responsive real estate platform with structured property listings, search and filtering, detailed property pages and enquiry functionality. The interface was designed to work consistently across desktop, tablet and mobile devices while keeping navigation simple.",
    results: [
      "Simplified property discovery and browsing",
      "Improved enquiry journey for prospective customers",
      "Responsive experience across multiple devices",
      "Clearer presentation of property information",
    ],
    services: [
      "Website Development",
      "UI/UX Design",
      "Property Search",
      "Inquiry Management",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Property Search APIs",
      "Maps Integration",
    ],
    highlights: [
      { value: "100%", label: "Responsive" },
      { value: "24/7", label: "Property Access" },
      { value: "Fast", label: "Property Search" },
    ],
  },

  {
    slug: "business-management-system",
    image: "/images/business-management-system.png",
    title: "Business Management System",
    category: "Custom Software",
    shortDescription:
      "A custom business management system to streamline operations and improve productivity.",
    overview:
      "The Business Management System brings important operational data into one central platform. It gives teams a clearer view of daily activity, performance information and business processes.",
    challenge:
      "Business information was distributed across disconnected tools and manual processes, making reporting and day-to-day management more difficult.",
    solution:
      "We created a central management dashboard that combines operational information, analytics, reports and workflow management in a clean and structured interface.",
    results: [
      "Centralised operational information",
      "Reduced reliance on disconnected tools",
      "Improved visibility through dashboards",
      "Simplified reporting and workflow management",
    ],
    services: [
      "Custom Software",
      "Dashboard Development",
      "Business Automation",
      "Analytics",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Chart.js",
      "REST APIs",
    ],
    highlights: [
      { value: "1", label: "Central Platform" },
      { value: "Real-Time", label: "Insights" },
      { value: "Secure", label: "Access" },
    ],
  },

  {
    slug: "electronics-ecommerce-store",
    image: "/images/techmart.png",
    title: "TechMart Online Store",
    category: "E-Commerce",
    shortDescription:
      "A full-featured e-commerce platform with product management, secure payments and order tracking.",
    overview:
      "TechMart Online Store provides customers with a modern online shopping experience for electronics and accessories. The platform combines product discovery, secure ordering and store-management functionality.",
    challenge:
      "The business required a scalable digital storefront capable of presenting a large product range while supporting secure transactions and efficient inventory management.",
    solution:
      "We built a responsive e-commerce experience with product categories, product search, detailed product pages, cart functionality and a structured checkout journey.",
    results: [
      "Improved online product discovery",
      "Simplified customer checkout journey",
      "Centralised product and inventory management",
      "Scalable foundation for future product growth",
    ],
    services: [
      "E-Commerce Development",
      "Product Management",
      "Payment Integration",
      "Responsive Design",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Stripe",
    ],
    highlights: [
      { value: "24/7", label: "Online Store" },
      { value: "Secure", label: "Payments" },
      { value: "Scalable", label: "Catalogue" },
    ],
  },

  {
    slug: "food-delivery-app",
    image: "/images/food-delivery-app.png",
    title: "Food Delivery App",
    category: "Mobile Application",
    shortDescription:
      "A user-friendly mobile app for ordering food with real-time tracking and secure payments.",
    overview:
      "The Food Delivery App gives customers a simple mobile experience for browsing restaurants, selecting meals, placing orders and following delivery progress.",
    challenge:
      "Customers needed a faster and more convenient ordering process while the business required a clearer way to coordinate orders and delivery activity.",
    solution:
      "We designed a mobile-first ordering journey with restaurant browsing, menu selection, checkout, order tracking and account management.",
    results: [
      "Simplified mobile ordering",
      "Improved visibility of delivery progress",
      "Faster access to restaurant menus",
      "Better overall customer experience",
    ],
    services: [
      "Mobile Application",
      "UI/UX Design",
      "Order Management",
      "Payment Integration",
    ],
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Firebase",
      "Google Maps Platform",
      "Stripe",
    ],
    highlights: [
      { value: "Mobile", label: "First Design" },
      { value: "Live", label: "Order Tracking" },
      { value: "Fast", label: "Checkout" },
    ],
  },

  {
    slug: "business-ai-assistant",
    image: "/images/business-ai-assistant.png",
    title: "Business AI Assistant",
    category: "AI & Automation",
    shortDescription:
      "An AI-powered assistant to automate business tasks and improve customer support.",
    overview:
      "Business AI Assistant helps teams use artificial intelligence for everyday operational and customer-support activities through a simple conversational interface.",
    challenge:
      "Routine questions and repetitive administrative tasks were consuming valuable staff time and slowing customer responses.",
    solution:
      "We designed an AI assistant that can support customer interactions, organise information and connect with business workflows through a central conversational interface.",
    results: [
      "Reduced repetitive manual activity",
      "Faster access to business information",
      "Improved customer response workflow",
      "Scalable foundation for additional AI automation",
    ],
    services: [
      "AI & Automation",
      "AI Assistant",
      "Workflow Integration",
      "API Integration",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "OpenAI API",
      "pgvector",
    ],
    highlights: [
      { value: "AI", label: "Powered" },
      { value: "24/7", label: "Availability" },
      { value: "Faster", label: "Responses" },
    ],
  },

  {
    slug: "crm-lead-management",
    image: "/images/crm-lead-management.png",
    title: "CRM & Lead Management",
    category: "CRM",
    shortDescription:
      "A CRM system to manage leads, sales pipeline and customer relationships.",
    overview:
      "The CRM & Lead Management platform provides teams with one organised environment for managing leads, customers, sales activity and follow-up processes.",
    challenge:
      "Customer and lead information was difficult to track consistently, creating gaps in communication and sales follow-up.",
    solution:
      "We developed a structured CRM dashboard with lead stages, customer records, tasks, activity tracking and sales pipeline visibility.",
    results: [
      "Centralised customer information",
      "Clearer lead-management process",
      "Improved sales pipeline visibility",
      "Better coordination between team members",
    ],
    services: [
      "CRM Development",
      "Lead Management",
      "Workflow Automation",
      "Dashboard Development",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "REST APIs",
    ],
    highlights: [
      { value: "360°", label: "Customer View" },
      { value: "Live", label: "Pipeline" },
      { value: "Better", label: "Follow-Up" },
    ],
  },

  {
    slug: "government-service-portal",
    image: "/images/government-service-portal.png",
    title: "Government Service Portal",
    category: "Web Application",
    shortDescription:
      "A secure and scalable portal for managing citizen services and online applications.",
    overview:
      "The Government Service Portal provides citizens with a central digital interface for accessing services, submitting applications and managing requests.",
    challenge:
      "Traditional service processes required too many manual steps and made application tracking difficult for both citizens and administrators.",
    solution:
      "We created a secure portal with service directories, digital applications, user accounts, status tracking and administrative reporting.",
    results: [
      "Simplified access to digital services",
      "Reduced manual application processing",
      "Improved request visibility",
      "Scalable service-delivery platform",
    ],
    services: [
      "Web Application",
      "Portal Development",
      "Workflow Management",
      "Reporting",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "OpenID Connect",
      "Audit Logging",
    ],
    highlights: [
      { value: "Secure", label: "Portal" },
      { value: "Online", label: "Applications" },
      { value: "Scalable", label: "Services" },
    ],
  },

  {
    slug: "travel-booking-platform",
    image: "/images/travel-booking-platform.png",
    title: "Travel Booking Platform",
    category: "Web Application",
    shortDescription:
      "A complete travel booking system with flight, hotel and package reservations.",
    overview:
      "The Travel Booking Platform brings destination discovery and booking services together in one digital experience.",
    challenge:
      "Travellers needed a simpler way to compare destinations and organise different parts of their trip without navigating multiple disconnected systems.",
    solution:
      "We designed a responsive booking experience combining destination search, hotels, flights, packages and reservation workflows.",
    results: [
      "Simplified travel discovery",
      "Unified booking experience",
      "Improved mobile usability",
      "Clearer customer reservation journey",
    ],
    services: [
      "Web Application",
      "Booking System",
      "API Integration",
      "UI/UX Design",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Travel Booking APIs",
    ],
    highlights: [
      { value: "1", label: "Booking Platform" },
      { value: "Multiple", label: "Travel Services" },
      { value: "Responsive", label: "Experience" },
    ],
  },

  {
    slug: "healthcare-appointment-app",
    image: "/images/mediconnect.png",
    title: "MediConnect",
    category: "Custom Software",
    shortDescription:
      "A healthcare management system to streamline patient records, appointments and communication.",
    overview:
      "MediConnect is a healthcare management system that helps care teams manage patient records, appointments and communication in one place.",
    challenge:
      "Healthcare teams needed a clearer way to manage patient information, appointment scheduling and communication across daily workflows.",
    solution:
      "We designed a healthcare management dashboard that brings patient records, appointment scheduling and care-team communication into one responsive system with role-based access.",
    results: [
      "Clearer patient-record management",
      "More coordinated appointment workflows",
      "Improved communication across care teams",
      "Responsive access for healthcare staff",
    ],
    services: [
      "Healthcare Management Software",
      "Patient Record Management",
      "Appointment Scheduling",
      "Role-Based Access Control",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Role-Based Access Control",
    ],
    highlights: [
      { value: "Centralised", label: "Patient Records" },
      { value: "Coordinated", label: "Appointments" },
      { value: "Role-Based", label: "Access" },
    ],
  },
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find(
    (project) => project.slug === slug,
  );
}
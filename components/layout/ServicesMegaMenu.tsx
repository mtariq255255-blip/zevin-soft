const services = [
  "Website Development",
  "E-Commerce",
  "AI Automation",
  "CRM Solutions",
  "Business Automation",
  "Custom Software",
  "API Integrations",
  "Digital Transformation",
];

export default function ServicesMegaMenu() {
  return (
    <div
      className="
        invisible
        absolute
        left-0
        top-full
        z-50
        mt-4
        w-[260px]
        translate-y-2
        rounded-[12px]
        border
        border-[#DCE3EC]
        bg-white
        p-2
        opacity-0
        shadow-[0_15px_40px_rgba(15,27,45,0.10)]
        transition-all
        duration-200

        group-hover:visible
        group-hover:translate-y-0
        group-hover:opacity-100
      "
    >
      <div className="flex flex-col">
        {services.map((service) => (
          <a
            key={service}
            href="/services"
            className="
              rounded-[8px]
              px-4
              py-3
              text-[14px]
              font-medium
              text-[#425166]
              transition-all
              duration-200

              hover:bg-[#EEF3F8]
              hover:text-[#0F1B2D]
            "
          >
            {service}
          </a>
        ))}
      </div>
    </div>
  );
}
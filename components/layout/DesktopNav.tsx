import Link from "next/link";
import { ChevronDown } from "lucide-react";
import ServicesMegaMenu from "./ServicesMegaMenu";

export default function DesktopNav() {
  return (
    <nav
      aria-label="Main navigation"
      className="flex items-center gap-[26px]"
    >
      {/* SERVICES */}
      <div className="group relative">
        <button
          type="button"
          className="
            flex
            items-center
            gap-1.5
            whitespace-nowrap
            text-[14px]
            font-medium
            text-zevin-text
            transition-colors
            duration-200

            hover:text-zevin-heading
          "
        >
          <span>Services</span>

          <ChevronDown
            className="
              h-3.5 w-3.5
              transition-transform
              duration-200

              group-hover:rotate-180
            "
          />
        </button>

        <ServicesMegaMenu />
      </div>

      {/* ABOUT */}
      <Link
        href="/about"
        className="
          whitespace-nowrap
          text-[14px]
          font-medium
          text-zevin-text
          transition-colors
          duration-200

          hover:text-zevin-heading
        "
      >
        About
      </Link>

      {/* PORTFOLIO */}
      <Link
        href="/portfolio"
        className="
          whitespace-nowrap
          text-[14px]
          font-medium
          text-zevin-text
          transition-colors
          duration-200

          hover:text-zevin-heading
        "
      >
        Portfolio
      </Link>

      {/* PRICING */}
      <Link
        href="/pricing"
        className="
          whitespace-nowrap
          text-[14px]
          font-medium
          text-zevin-text
          transition-colors
          duration-200

          hover:text-zevin-heading
        "
      >
        Pricing
      </Link>

      {/* BLOG */}
      <Link
        href="/blog"
        className="
          whitespace-nowrap
          text-[14px]
          font-medium
          text-zevin-text
          transition-colors
          duration-200

          hover:text-zevin-heading
        "
      >
        Blog
      </Link>

      {/* CAREERS */}
      <Link
        href="/careers"
        className="
          whitespace-nowrap
          text-[14px]
          font-medium
          text-zevin-text
          transition-colors
          duration-200

          hover:text-zevin-heading
        "
      >
        Careers
      </Link>
    </nav>
  );
}
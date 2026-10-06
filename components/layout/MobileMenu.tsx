"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

const serviceLinks = [
  "Website Development",
  "E-Commerce",
  "AI Automation",
  "CRM Solutions",
  "Business Automation",
  "Custom Software",
  "API Integrations",
  "Digital Transformation",
];

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* Menu Button */}
      <button
        type="button"
        onClick={() => setMenuOpen((current) => !current)}
        aria-label={
          menuOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={menuOpen}
        className="
          flex
          h-[44px]
          w-[44px]
          items-center
          justify-center
          rounded-[10px]
          border
          border-zevin-border
          bg-white
          text-zevin-heading
          transition-colors
          duration-200
          hover:bg-zevin-alternate
        "
      >
        {menuOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div
          className="
            absolute
            left-0
            right-0
            top-[80px]
            z-50
            border-t
            border-zevin-border
            bg-[#F7F9FC]
            shadow-[0_20px_40px_rgba(15,27,45,0.08)]
          "
        >
          <div
            className="
              mx-auto
              max-w-[1240px]
              px-5
              py-6
              sm:px-6
            "
          >
            <div className="flex flex-col">
              {/* Services */}
              <button
                type="button"
                onClick={() =>
                  setServicesOpen((current) => !current)
                }
                aria-expanded={servicesOpen}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  border-b
                  border-zevin-border
                  py-4
                  text-left
                  text-[15px]
                  font-semibold
                  text-zevin-heading
                "
              >
                <span>Services</span>

                <ChevronDown
                  className={`
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    ${servicesOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* Services Dropdown */}
              {servicesOpen && (
                <div
                  className="
                    grid
                    grid-cols-1
                    gap-1
                    border-b
                    border-zevin-border
                    bg-white
                    px-3
                    py-3
                    sm:grid-cols-2
                  "
                >
                  {serviceLinks.map((service) => (
                    <a
                      key={service}
                      href="/services"
                      onClick={closeMenu}
                      className="
                        rounded-lg
                        px-3
                        py-3
                        text-[14px]
                        text-zevin-text
                        transition-colors
                        duration-200
                        hover:bg-zevin-alternate
                        hover:text-zevin-heading
                      "
                    >
                      {service}
                    </a>
                  ))}
                </div>
              )}

              {/* About */}
              <Link
                href="/about"
                onClick={closeMenu}
                className="
                  border-b
                  border-zevin-border
                  py-4
                  text-[15px]
                  font-medium
                  text-zevin-heading
                "
              >
                About
              </Link>

              {/* Portfolio */}
              <Link
                href="/portfolio"
                onClick={closeMenu}
                className="
                  border-b
                  border-zevin-border
                  py-4
                  text-[15px]
                  font-medium
                  text-zevin-heading
                "
              >
                Portfolio
              </Link>

              {/* Pricing */}
              <Link
                href="/pricing"
                onClick={closeMenu}
                className="
                  border-b
                  border-zevin-border
                  py-4
                  text-[15px]
                  font-medium
                  text-zevin-heading
                "
              >
                Pricing
              </Link>

              {/* Blog */}
              <Link
                href="/blog"
                onClick={closeMenu}
                className="
                  border-b
                  border-zevin-border
                  py-4
                  text-[15px]
                  font-medium
                  text-zevin-heading
                "
              >
                Blog
              </Link>

              {/* Careers */}
              <Link
                href="/careers"
                onClick={closeMenu}
                className="
                  border-b
                  border-zevin-border
                  py-4
                  text-[15px]
                  font-medium
                  text-zevin-heading
                "
              >
                Careers
              </Link>

              {/* AI Business Builder */}
              <Link
                href="/ai-business-builder"
                onClick={closeMenu}
                className="
                  mt-5
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-[10px]
                  bg-[#F1ECFA]
                  px-5
                  py-3
                  text-[14px]
                  font-semibold
                  text-[#7048C8]
                  transition-colors
                  hover:bg-[#E9DFFA]
                "
              >
                <Sparkles className="h-4 w-4" />

                <span>AI Business Builder</span>
              </Link>

              {/* Get Quote */}
              <Link
                href="/contact"
                onClick={closeMenu}
                className="
                  mt-3
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-[10px]
                  bg-[#2463D4]
                  px-5
                  py-3
                  text-[14px]
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-[#174EA6]
                "
              >
                <span>Get Quote</span>

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
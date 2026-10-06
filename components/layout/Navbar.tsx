"use client";

import { useEffect, useState } from "react";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import AIBuilderLink from "./AIBuilderLink";
import GetQuoteButton from "./GetQuoteButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        h-[80px]
        transition-all
        duration-300
        before:absolute
        before:inset-x-0
        before:top-0
        before:h-[3px]
        before:bg-gradient-to-r
        before:from-zevin-primary
        before:via-[#83a7e8]
        before:to-zevin-lightBlue
        before:content-['']

        ${
          scrolled
            ? `
              border-b
              border-[rgba(36,99,212,0.16)]
              bg-[linear-gradient(105deg,rgba(231,240,252,0.96)_0%,rgba(255,255,255,0.97)_50%,rgba(238,243,248,0.96)_100%)]
              shadow-[0_8px_28px_rgba(15,27,45,0.09)]
              backdrop-blur-[14px]
            `
            : `
              border-b
              border-[rgba(36,99,212,0.14)]
              bg-[linear-gradient(105deg,#E7F0FC_0%,#FFFFFF_50%,#EEF3F8_100%)]
              shadow-[0_6px_24px_rgba(15,27,45,0.06)]
            `
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-full
          w-full
          max-w-[1240px]
          items-center
          px-5
          sm:px-6
        "
      >
        {/* LOGO */}
        <Logo />

        {/* DESKTOP NAV */}
        <div
          className="
            ml-10
            hidden
            flex-1
            items-center
            justify-start
            min-[1050px]:flex
            xl:ml-12
          "
        >
          <DesktopNav />
        </div>

        {/* RIGHT ACTIONS */}
        <div
          className="
            ml-auto
            hidden
            shrink-0
            items-center
            gap-3
            min-[1050px]:flex
            xl:gap-4
          "
        >
          <AIBuilderLink />
          <GetQuoteButton />
        </div>

        {/* MOBILE */}
        <div className="ml-auto min-[1050px]:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
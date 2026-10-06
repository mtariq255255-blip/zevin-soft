import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GetQuoteButton() {
  return (
    <Link
      href="/contact"
      className="
        inline-flex
        h-[42px]
        items-center
        justify-center
        gap-2
        whitespace-nowrap
        rounded-[9px]
        bg-[#2463D4]
        px-[19px]
        text-[14px]
        font-semibold
        text-white
        shadow-[0_5px_14px_rgba(36,99,212,0.16)]
        transition-all
        duration-200

        hover:bg-[#174EA6]
      "
    >
      <span>Get Quote</span>

      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
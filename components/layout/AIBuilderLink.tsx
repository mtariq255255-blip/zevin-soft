import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function AIBuilderLink() {
  return (
    <Link
      href="/ai-business-builder"
      className="
        inline-flex
        h-[42px]
        items-center
        justify-center
        gap-2
        whitespace-nowrap
        rounded-[10px]
        bg-[#F1ECFA]
        px-4
        text-[13px]
        font-semibold
        text-[#7048C8]
        transition-all
        duration-200

        hover:bg-[#E9DFFA]
        hover:text-[#5F37B8]
      "
    >
      <Sparkles className="h-[17px] w-[17px]" />

      <span>AI Business Builder</span>
    </Link>
  );
}
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Zevin Soft Home"
      className={`flex shrink-0 items-center ${className}`}
    >
      <Image
        src="/logo/zevin-header-logo.png"
        alt="Zevin Soft"
        width={520}
        height={200}
        priority
        className="
          h-auto
          w-[145px]
          object-contain

          sm:w-[155px]

          lg:w-[170px]
        "
      />
    </Link>
  );
}
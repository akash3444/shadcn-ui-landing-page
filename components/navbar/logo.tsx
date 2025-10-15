import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  isScrolled?: boolean;
};

export const Logo = ({ isScrolled = false }: LogoProps) => (
  <Link href="/" className="flex items-center gap-3">
    <span
      className={cn(
        "relative flex items-center justify-center transition-[height,width] duration-300 ease-in-out",
        isScrolled ? "h-20 w-20" : "h-30 w-30"
      )}
    >
      <Image
        src="/icons/1-cropped.svg"
        alt="Smoke shop emblem"
        width={256}
        height={256}
        className={cn(
          "object-contain transition-[height,width] duration-300 ease-in-out p-2",
          isScrolled ? "h-20 w-20" : "h-30 w-30"
        )}
        priority
      />
    </span>
  </Link>
);

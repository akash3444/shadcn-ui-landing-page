import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href="/" className="flex items-center gap-3">
    <span className="relative flex h-30 w-30 items-center justify-center ">
      <Image
        src="/icons/1.svg"
        alt="Smoke shop emblem"
        width={256}
        height={256}
        className="h-30 w-30 object-contain"
        priority
      />
    </span>

  </Link>
);

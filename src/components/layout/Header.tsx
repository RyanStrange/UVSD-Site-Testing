import Image from "next/image";
import Link from "next/link";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export default function Header() {
  return (
    <header className="w-full fixed z-50 flex items-stretch">
      <Link href="/">
        <Image
          src="/uvsd-logo.svg"
          alt="UVSD Logo"
          width={100}
          height={100}
          className="p-2 hidden md:block"
        />
      </Link>

      <DesktopNav />
      <MobileNav />
    </header>
  );
}

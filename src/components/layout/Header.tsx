import Image from "next/image";
import Link from "next/link";

import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export default function Header() {
  return (
    <header className="fixed top-2 left-2 z-50 flex items-center gap-2">
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

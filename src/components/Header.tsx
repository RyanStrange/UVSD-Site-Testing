import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <NavigationMenu viewport={false} className=" z-20 fixed top-0 mt-2">
      <Link href="/">
        <Image
          src="/uvsd-logo.svg"
          alt="UVSD Logo"
          width={100}
          height={100}
          className="p-2"
        />
      </Link>
      <NavigationMenuList className="font-extrabold gap-5 text-primary bg-background rounded-md">
        {/* <NavigationMenuItem> */}

        {/* </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-extrabold bg-background">
            Missions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 size-max">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/orcasat">
                    <div>ORCASat</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/marmotsat">
                    <div>MARMOTSat</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-extrabold bg-background">
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 size-max">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/team">
                    <div>Team</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/alumni">
                    <div>Alumni</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/facilities">
                    <div>Facilities</div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/careers">
                    <div>Careers</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="https://github.com/UVicSatelliteDesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Source Materials
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScZwOeTsYblwuPXVva5wILLsBi_ggpr78f7uJmcpeMNa3Q8AA/viewform?pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

import Link from "next/link";
import { navigation } from "@/lib/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function DesktopNav() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="font-extrabold gap-3 text-uvic-dark-blue bg-uvic-yellow rounded-md hidden md:flex items-center">
        {navigation.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.children ? (
              <>
                <NavigationMenuTrigger className="font-extrabold bg-uvic-yellow">
                  {item.title}
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid gap-2 p-2 min-w-48">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <NavigationMenuLink asChild>
                          <Link href={child.href}>{child.title}</Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link href={item.href}>{item.title}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

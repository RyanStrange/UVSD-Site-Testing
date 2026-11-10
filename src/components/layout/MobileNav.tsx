"use client";

import Link from "next/link";
import { useState } from "react";

import { navigation } from "@/lib/navigation";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { ChevronDown, Menu } from "lucide-react";

export function MobileNav() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [sheetOpen, setSheetOpen] = useState(false);

  function toggleItem(title: string) {
    setOpenItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title],
    );
  }

  function closeMenu() {
    setSheetOpen(false);
    setOpenItems([]);
  }

  return (
    <Sheet
      open={sheetOpen}
      onOpenChange={(open) => {
        setSheetOpen(open);

        if (!open) {
          setOpenItems([]);
        }
      }}
    >
      <SheetTrigger className="md:hidden fixed top-2 right-2 z-50 bg-uvic-dark-blue text-white p-2 rounded-md border border-uvic-dark-blue">
        <Menu size={28} />
      </SheetTrigger>

      <SheetContent side="right" className="w-72">
        <nav className="flex flex-col gap-4 mt-8 mx-3">
          {navigation.map((item) => (
            <div key={item.title}>
              {item.children ? (
                <Collapsible
                  open={openItems.includes(item.title)}
                  onOpenChange={() => toggleItem(item.title)}
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between font-bold">
                    {item.title}
                    <ChevronDown size={18} />
                  </CollapsibleTrigger>

                  <CollapsibleContent className="pl-4 pt-3 flex flex-col gap-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="text-sm"
                        onClick={closeMenu}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link
                  href={item.href}
                  className="font-bold"
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

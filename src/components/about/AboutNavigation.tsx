import type { AboutNavigationItem } from "@/data/about/types";
import { AboutNavigationCard } from "./AboutNavigationCard";

interface AboutNavigationProps {
  items: AboutNavigationItem[];
}

export function AboutNavigation({ items }: AboutNavigationProps) {
  return (
    <section className="px-6 pb-24 md:px-12 lg:px-20 bg-uvic-dark-blue">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Discover UVSD
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <AboutNavigationCard key={item.href} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

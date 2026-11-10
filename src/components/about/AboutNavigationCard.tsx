import Image from "next/image";
import Link from "next/link";
import type { AboutNavigationItem } from "@/data/about/types";

interface AboutNavigationCardProps {
  item: AboutNavigationItem;
}

export function AboutNavigationCard({ item }: AboutNavigationCardProps) {
  return (
    <Link
      href={item.href}
      className="group relative flex min-h-80 overflow-hidden rounded-lg bg-slate-950"
    >
      {item.image && (
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

      <div className="relative z-10 mt-auto p-8 text-white">
        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {item.title}
        </h3>

        <p className="mt-3 max-w-md leading-relaxed text-white/75">
          {item.description}
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition group-hover:text-sky-300">
          Explore <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}

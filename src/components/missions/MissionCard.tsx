import Link from "next/link";
import type { Mission, PastProject } from "@/data/missions/types";
import { MissionImage } from "./MissionImage";

type MissionCardProps = {
  item: Mission | PastProject;
  href?: string;
};

export function MissionCard({ item, href }: MissionCardProps) {
  const content = (
    <>
      <div className="aspect-[16/10] overflow-hidden">
        <MissionImage
          src={
            "overview" in item
              ? (item.heroImage ?? item.overview.image?.src)
              : item.image?.src
          }
          alt={
            "overview" in item
              ? (item.overview.image?.alt ?? `${item.title} mission`)
              : (item.image?.alt ?? item.title)
          }
          className="transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        {"status" in item && item.status && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-sky-400">
            {item.status}
          </p>
        )}
        <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {"subtitle" in item ? item.subtitle : item.description}
        </p>
        {href && (
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
            Explore <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </>
  );

  const classes =
    "group block overflow-hidden border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-950 rounded-xl";

  return href ? (
    <Link href={href} className={classes}>
      {content}
    </Link>
  ) : (
    <article className={classes}>{content}</article>
  );
}

import type { Mission } from "@/data/missions/types";
import { MissionImage } from "./MissionImage";

interface MissionOverviewProps {
  overview: Mission["overview"];
}

export function MissionOverview({ overview }: MissionOverviewProps) {
  return (
    <section
      id="mission-overview"
      className="scroll-mt-20 px-6 py-20 md:px-12 md:py-28 lg:px-20 bg-uvic-dark-blue"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
            The mission
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {overview.heading}
          </h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            {overview.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          {overview.externalLink && (
            <a
              href={overview.externalLink.url}
              target={
                overview.externalLink.url.startsWith("http")
                  ? "_blank"
                  : undefined
              }
              rel={
                overview.externalLink.url.startsWith("http")
                  ? "noreferrer"
                  : undefined
              }
              className="mt-8 inline-flex items-center gap-2 border-b border-current pb-1 text-sm font-semibold transition hover:text-sky-700 dark:hover:text-sky-400"
            >
              {overview.externalLink.label} <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>

        <div className="aspect-[4/3] overflow-hidden rounded-sm">
          <MissionImage
            src={overview.image?.src}
            alt={overview.image?.alt ?? "Mission overview"}
          />
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { missions } from "@/data/missions";
import { MissionCard } from "@/components/missions/MissionCard";

export default function MissionsIndexPage() {
  return (
    <main>
      <section className="bg-slate-950 px-6 pb-20 pt-36 text-white md:px-12 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            University of Victoria Satellite Design
          </p>
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Missions & Projects
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Discover
            the missions and technical projects developed by UVSD students.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Featured missions
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Explore our current and completed missions.
              </p>
            </div>
            <Link
              href="/missions/past-projects"
              className="text-sm font-semibold underline underline-offset-4"
            >
              Browse past projects →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {missions.map((mission) => (
              <MissionCard
                key={mission.slug}
                item={mission}
                href={`/missions/${mission.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

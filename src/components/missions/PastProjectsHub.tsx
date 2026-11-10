import { pastProjects } from "@/data/missions/pastprojects";
import { MissionCard } from "./MissionCard";

export function PastProjectsHub() {
  return (
    <main>
      <section className="bg-slate-950 px-6 pb-20 pt-36 text-white md:px-12 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            UVSD / Projects
          </p>
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Past Projects
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore
            projects, experiments, and technical work from across the history of
            UVSD.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20 bg-uvic-dark-blue">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Project archive
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
              A collection of notable student projects and technical
              developments.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pastProjects.map((project) => (
              <MissionCard key={project.title} item={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

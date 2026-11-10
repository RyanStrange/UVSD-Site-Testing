import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { otherProjects } from "@/data/home";
import ImagePlaceholder from "./ImagePlaceholder";

export default function ProjectGrid() {
  return (
    <section className="border-t border-white/10 bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Research and development
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            More projects. More possibilities.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/65">
            From spacecraft subsystems to experimental technologies, UVSD
            provides opportunities for students to explore a wide range of
            engineering challenges.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {otherProjects.map((project) => (
            <article key={project.title} className="group">
              <ImagePlaceholder
                label={`Project ${project.number}`}
                className="aspect-[4/3] min-h-0 transition duration-500 group-hover:brightness-125"
              />

              <div className="flex items-center justify-between pt-5">
                <p className="text-xs font-semibold tracking-widest text-sky-400">
                  PROJECT {project.number}
                </p>
                <ArrowUpRight
                  size={18}
                  className="text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-400"
                />
              </div>

              <h3 className="mt-3 text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/60">
                {project.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/missions"
            className="inline-flex items-center gap-3 border-b border-sky-400 pb-2 text-sm font-semibold text-white transition hover:gap-5"
          >
            Explore all missions and projects
            <ArrowUpRight size={17} className="text-sky-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}

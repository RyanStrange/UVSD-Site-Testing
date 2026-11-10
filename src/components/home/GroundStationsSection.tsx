import ImagePlaceholder from "./ImagePlaceholder";
import { groundStationProjects } from "@/data/home";

export default function GroundStationsSection() {
  return (
    <section className="border-t border-white/10 bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Beyond the spacecraft
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ground Stations
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/65">
            Space missions depend on more than the spacecraft itself. UVSD
            students work on ground station technology and infrastructure,
            including portable systems and S-band communications development.
          </p>
        </div>

        <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 sm:mx-0 sm:px-0">
          {groundStationProjects.map((project, index) => (
            <article
              key={project.title}
              className="w-[85%] min-w-[85%] snap-start sm:w-[48%] sm:min-w-[48%] lg:w-[32%] lg:min-w-[32%]"
            >
              <ImagePlaceholder
                label={`Ground station image 0${index + 1}`}
                className="aspect-[4/3] min-h-0"
              />

              <div className="pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                  0{index + 1}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/60">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-2 text-xs uppercase tracking-widest text-white/35">
          Scroll to explore
        </p>
      </div>
    </section>
  );
}

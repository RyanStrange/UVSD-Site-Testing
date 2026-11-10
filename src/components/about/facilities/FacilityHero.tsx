import type { Facility } from "@/data/about/types";

interface FacilityHeroProps {
  facility: Facility;
}

export function FacilityHero({ facility }: FacilityHeroProps) {
  return (
    <section
      className="relative flex min-h-[65svh] items-end overflow-hidden bg-slate-950 bg-cover bg-center px-6 pb-16 pt-32 text-white md:px-12 lg:px-20"
      style={{
        backgroundImage: `url("${facility.image}")`,
      }}
    >
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/10" />

      <div className="relative mx-auto w-full max-w-7xl">
        <h2 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
          {facility.name}
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          {facility.description}
        </p>

        {facility.details && facility.details.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-3">
            {facility.details.map((detail) => (
              <li
                key={detail}
                className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm text-white/80 backdrop-blur"
              >
                {detail}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

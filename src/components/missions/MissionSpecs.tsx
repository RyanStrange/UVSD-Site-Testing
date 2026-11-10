import type { MissionSpec } from "@/data/missions/types";

interface MissionSpecsProps {
  specifications?: MissionSpec[];
}

export function MissionSpecs({ specifications }: MissionSpecsProps) {
  if (!specifications?.length) return null;

  return (
    <section className="bg-slate-950 px-6 py-16 text-white md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
          At a glance
        </p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Mission specifications
        </h2>
        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {specifications.map((spec) => (
            <div key={spec.label} className="border-t border-white/20 pt-4">
              <dt className="text-sm text-white/55">{spec.label}</dt>
              <dd className="mt-2 text-xl font-medium md:text-2xl">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

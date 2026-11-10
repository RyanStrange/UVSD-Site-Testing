import type { Workshop } from "@/data/opportunities/types";
import WorkshopCard from "./WorkshopCard";

interface Props {
  workshops: Workshop[];
}

export default function Workshops({ workshops }: Props) {
  const sortedWorkshops = [...workshops].sort((a, b) => a.order - b.order);

  return (
    <section id="workshops" className="scroll-mt-24 bg-muted/40 py-24">
      <div className="container mx-auto space-y-12 px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Learn by doing
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">Develop New Skills</h2>

          <p className="text-lg text-muted-foreground">
            UVSD provides opportunities to develop practical technical skills
            through workshops and hands-on training.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedWorkshops.map((workshop) => (
            <WorkshopCard key={workshop.slug} workshop={workshop} />
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Pathway } from "@/data/opportunities/types";

interface Props {
  coOp: Pathway;
  research: Pathway;
}

export default function Pathways({ coOp, research }: Props) {
  const pathways = [coOp, research];

  return (
    <section id="pathways" className="scroll-mt-24 py-24">
      <div className="container mx-auto space-y-12 px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Beyond the classroom
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">Build Your Future</h2>

          <p className="text-lg text-muted-foreground">
            The experience you gain at UVSD can extend beyond your time at the
            university.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {pathways.map((pathway) => (
            <article
              key={pathway.title}
              className="rounded-2xl border bg-card p-8 md:p-10"
            >
              <h3 className="mb-4 text-2xl font-semibold">{pathway.title}</h3>

              <p className="leading-relaxed text-muted-foreground">
                {pathway.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

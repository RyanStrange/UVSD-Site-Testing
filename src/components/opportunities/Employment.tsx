import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { OpportunitiesPageData } from "@/data/opportunities/types";

interface Props {
  data: OpportunitiesPageData["employment"];
}

export default function Employment({ data }: Props) {
  return (
    <section id="employment" className="scroll-mt-24 bg-muted/40 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Take the next step
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">{data.title}</h2>

            <p className="text-lg leading-relaxed text-muted-foreground">
              {data.description}
            </p>
          </div>

          {data.opportunities.length > 0 ? (
            <div className="grid gap-4 text-left sm:grid-cols-2">
              {data.opportunities.map((opportunity) => (
                <article
                  key={opportunity.title}
                  className="rounded-xl border bg-card p-6"
                >
                  <h3 className="text-lg font-semibold">{opportunity.title}</h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {opportunity.description}
                  </p>

                  {opportunity.url && (
                    <Button asChild variant="link" className="mt-3 px-0">
                      <Link href={opportunity.url}>Learn more</Link>
                    </Button>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Check back for future opportunities.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

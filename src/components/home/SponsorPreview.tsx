import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sponsors } from "@/data/sponsors";

export default function SponsorPreview() {
  const displaySponsors = sponsors
    .filter((sponsor) => !sponsor.logo.toLowerCase().endsWith(".tif"))
    .slice(0, 8);

  return (
    <section className="border-t border-white/10 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            Our supporters
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Building the future, together.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            UVSD relies on the support of sponsors, donors, university partners,
            and the community. Their contributions help students access the
            tools, hardware, and opportunities needed to develop real aerospace
            technology.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {displaySponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex min-h-32 items-center justify-center rounded-sm border border-slate-200 bg-white p-6"
            >
              <div className="relative h-16 w-full">
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  fill
                  sizes="(max-width: 640px) 40vw, 20vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/sponsors"
            className="inline-flex items-center gap-3 bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Support UVSD
            <ArrowRight size={17} />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:border-slate-950"
          >
            Become a Sponsor
          </Link>
        </div>
      </div>
    </section>
  );
}

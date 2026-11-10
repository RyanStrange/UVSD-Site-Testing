import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function JoinSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <ImagePlaceholder
        label="UVSD team photography"
        className="absolute inset-0 h-full opacity-40"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Get involved
          </p>

          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Your place in space starts here.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            You don't need to be an aerospace expert to get involved. Join
            students from across the University of Victoria and build the
            skills, experience, and technology that make space exploration
            possible.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-3 bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Join UVSD
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

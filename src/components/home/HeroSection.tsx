import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

const heroLinks = [
  {
    label: "Explore Missions",
    href: "/missions",
    primary: true,
  },
  {
    label: "Join UVSD",
    href: "/opportunities",
    primary: false,
  },
  {
    label: "Support UVSD",
    href: "/sponsors",
    primary: false,
  },
];
// min-h-[calc(100svh-5rem)]
export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-slate-950">
      <Image
        src="/ORCASat-Hero-Image.jpg"
        alt="ORCASat with Earth in the background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center motion-reduce:animate-none animate-[hero-zoom_20s_ease-in-out_infinite_alternate]"
      />

      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" /> */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-8 pt-32 sm:px-10 sm:pb-32 lg:px-16">
        <div className="max-w-4xl">
          {/* <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
            University of Victoria
          </p> */}

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl ">
            UVic Satellite Design
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Student Space Technologies at the University of Victoria.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {heroLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={
                  link.primary
                    ? "inline-flex items-center gap-3 bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400"
                    : "inline-flex items-center gap-3 border border-white/50 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/15"
                }
              >
                {link.label}
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#missions"
        aria-label="Scroll to missions"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70 transition hover:text-white"
      >
        <ArrowDown className="animate-bounce" size={24} />
      </a>
    </section>
  );
}

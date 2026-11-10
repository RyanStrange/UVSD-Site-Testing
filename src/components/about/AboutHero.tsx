interface AboutHeroProps {
  title: string;
  subtitle: string;
  heroImage?: string;
}

export function AboutHero({ title, subtitle, heroImage }: AboutHeroProps) {
  return (
    <section
      className="relative flex min-h-[82svh] items-end overflow-hidden bg-slate-950 bg-cover bg-center px-6 pb-20 pt-32 text-white md:px-12 lg:px-20"
      style={heroImage ? { backgroundImage: `url("${heroImage}")` } : undefined}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-900/30 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl">
        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
          {subtitle}
        </p>

        <a
          href="#about-overview"
          className="mt-10 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/90 transition hover:text-sky-300"
        >
          Discover UVSD <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}

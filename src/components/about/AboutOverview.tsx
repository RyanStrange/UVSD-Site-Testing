interface AboutOverviewProps {
  overview: {
    title: string;
    description: string;
  };
}

export function AboutOverview({ overview }: AboutOverviewProps) {
  return (
    <section id="about-overview" className="px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          {overview.title}
        </h2>

        <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
          {overview.description}
        </p>
      </div>
    </section>
  );
}

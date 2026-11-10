interface AboutIntroProps {
  title: string;
  description: string;
}

export default function AboutIntro({ title, description }: AboutIntroProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center">
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>

      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        {description}
      </p>
    </section>
  );
}

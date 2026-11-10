import type { About } from "@/data/about/types";
import { AboutHero } from "./AboutHero";
import { AboutOverview } from "./AboutOverview";
import { AboutNavigation } from "./AboutNavigation";

interface AboutPageProps {
  about: About;
}

export function AboutPage({ about }: AboutPageProps) {
  return (
    <main>
      <AboutHero
        title={about.title}
        subtitle={about.subtitle}
        heroImage={about.heroImage}
      />

      <AboutOverview overview={about.overview} />

      <AboutNavigation items={about.navigation} />
    </main>
  );
}

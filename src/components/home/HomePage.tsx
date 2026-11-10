import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import GroundStationsSection from "./GroundStationsSection";
import ProjectGrid from "./ProjectGrid";
import SponsorPreview from "./SponsorPreview";
import JoinSection from "./JoinSection";
import { featuredProjects } from "@/data/home";

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <div id="missions">
        {featuredProjects.map((project) => (
          <FeatureSection key={project.title} {...project} />
        ))}
      </div>

      <GroundStationsSection />

      <ProjectGrid />

      <SponsorPreview />

      <JoinSection />
    </main>
  );
}

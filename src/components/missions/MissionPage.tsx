import type { Mission } from "@/data/missions/types";
import { MissionHero } from "./MissionHero";
import { MissionOverview } from "./MissionOverview";
import { MissionSpecs } from "./MissionSpecs";
import { MissionGallery } from "./MissionGallery";

interface MissionPageProps {
  mission: Mission;
}

export function MissionPage({ mission }: MissionPageProps) {
  return (
    <main>
      <MissionHero mission={mission} />
      <MissionOverview overview={mission.overview} />
      <MissionSpecs specifications={mission.specifications} />
      <MissionGallery images={mission.gallery} />
    </main>
  );
}

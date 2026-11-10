import { orcasat } from "./orcasat";
import { marmotsat } from "./marmotsat";
import { doomballoon } from "./doomballoon";
import { groundstations } from "./groundstations";
import type { Mission } from "./types";

export const missions: Mission[] = [
  orcasat,
  marmotsat,
  doomballoon,
  groundstations,
];

export function getMissionBySlug(slug: string) {
  return missions.find((mission) => mission.slug === slug);
}

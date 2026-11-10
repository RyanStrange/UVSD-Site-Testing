import { notFound } from "next/navigation";
import { getMissionBySlug, missions } from "@/data/missions";
import { MissionPage } from "@/components/missions/MissionPage";
import { PastProjectsHub } from "@/components/missions/PastProjectsHub";

interface MissionRouteProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    ...missions.map((mission) => ({ slug: mission.slug })),
    { slug: "past-projects" },
  ];
}

export default async function MissionRoutePage({ params }: MissionRouteProps) {
  const { slug } = await params;

  if (slug === "past-projects") {
    return <PastProjectsHub />;
  }

  const mission = getMissionBySlug(slug);

  if (!mission) {
    notFound();
  }

  return <MissionPage mission={mission} />;
}

import { facilities } from "@/data/about/facilities";
import { FacilityHero } from "./FacilityHero";

export function FacilitiesPage() {
  const orderedFacilities = [...facilities].sort((a, b) => a.order - b.order);

  return (
    <main className="bg-slate-950">
      {orderedFacilities.map((facility) => (
        <FacilityHero key={facility.name} facility={facility} />
      ))}
    </main>
  );
}

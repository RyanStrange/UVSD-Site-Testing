import type { Personnel } from "@/data/about/types";
import { PersonnelCard } from "./PersonnelCard";

interface PersonnelSectionProps {
  title: string;
  personnel: Personnel[];
}

export function PersonnelSection({ title, personnel }: PersonnelSectionProps) {
  if (personnel.length === 0) return null;

  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {title}
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {personnel.map((person) => (
            <PersonnelCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
}

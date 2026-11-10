import Image from "next/image";
import { personnel, teamGroupPhoto } from "@/data/about/team";
import type { PersonnelCategory } from "@/data/about/types";
import { PersonnelSection } from "./PersonnelSection";

const categories: {
  id: PersonnelCategory;
  title: string;
}[] = [
  { id: "executive", title: "Executive Team" },
  { id: "technical-lead", title: "Technical Leads" },
  { id: "general-member", title: "General Members" },
  { id: "alumni", title: "Alumni" },
];

export function TeamPage() {
  return (
    <main className="min-h-screen bg-uvic-dark-blue">
      {/* Team introduction */}
      <section className="relative flex min-h-[65svh] items-end overflow-hidden px-6 pb-16 pt-32 text-white md:px-12 lg:px-20">
        <Image
          src={teamGroupPhoto}
          alt="UVSD team group photo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />

        <div className="relative mx-auto w-full max-w-7xl">
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Our Team
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Meet the students working together to design, develop, and advance
            student-led space technologies at UVic.
          </p>
        </div>
      </section>

      {/* Personnel categories */}
      {categories.map((category) => {
        const members = personnel
          .filter((person) => person.category === category.id)
          .sort((a, b) => a.order - b.order);

        return (
          <PersonnelSection
            key={category.id}
            title={category.title}
            personnel={members}
          />
        );
      })}
    </main>
  );
}

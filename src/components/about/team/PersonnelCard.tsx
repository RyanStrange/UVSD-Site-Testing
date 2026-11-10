import Image from "next/image";
import type { Personnel } from "@/data/about/types";

interface PersonnelCardProps {
  person: Personnel;
}

export function PersonnelCard({ person }: PersonnelCardProps) {
  const initials = person.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-slate-900">
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-800">
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-4xl font-semibold text-white/40">
            {initials}
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{person.name}</h3>

        {person.position && (
          <p className="mt-1 text-sm font-medium text-sky-400">
            {person.position}
          </p>
        )}

        {(person.discipline || person.year) && (
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            {[person.discipline, person.year].filter(Boolean).join(" · ")}
          </p>
        )}

        {person.linkedIn && (
          <a
            href={person.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${person.name} on LinkedIn`}
            className="mt-4 inline-flex text-sm text-white/60 transition hover:text-sky-400"
          >
            LinkedIn{" "}
            <span className="ml-1" aria-hidden="true">
              ↗
            </span>
          </a>
        )}
      </div>
    </article>
  );
}

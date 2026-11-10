import Image from "next/image";
import type { StudentRole } from "@/data/opportunities/types";

interface Props {
  role: StudentRole;
}

export default function RoleCard({ role }: Props) {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-card">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={role.image.src}
          alt={role.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-3 p-6">
        <h3 className="text-xl font-semibold">{role.name}</h3>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {role.description}
        </p>
      </div>
    </article>
  );
}

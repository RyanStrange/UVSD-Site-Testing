import Image from "next/image";
import type { Workshop } from "@/data/opportunities/types";

interface Props {
  workshop: Workshop;
}

export default function WorkshopCard({ workshop }: Props) {
  return (
    <article className="group overflow-hidden rounded-xl border bg-card">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={workshop.image.src}
          alt={workshop.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-2 p-5">
        {workshop.category && (
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {workshop.category}
          </p>
        )}

        <h3 className="text-lg font-semibold">{workshop.name}</h3>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {workshop.description}
        </p>
      </div>
    </article>
  );
}

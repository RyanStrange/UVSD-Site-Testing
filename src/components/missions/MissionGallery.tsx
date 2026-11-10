"use client";

import { useRef } from "react";
import type { MissionImage as MissionGalleryImage } from "@/data/missions/types";
import { MissionImage } from "./MissionImage";

interface MissionGalleryProps {
  images: MissionGalleryImage[];
}

export function MissionGallery({ images }: MissionGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  if (!images.length) return null;

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>("[data-gallery-card]");
    const distance = firstCard
      ? firstCard.offsetWidth + 24
      : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden px-6 py-20 md:px-12 md:py-28 lg:px-20 bg-uvic-dark-blue">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
              Behind the mission
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Mission gallery
            </h2>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Scroll gallery left"
              className="grid size-11 place-items-center rounded-full border border-slate-300 text-xl transition hover:bg-slate-100 dark:border-white/25 dark:hover:bg-white/10"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Scroll gallery right"
              className="grid size-11 place-items-center rounded-full border border-slate-300 text-xl transition hover:bg-slate-100 dark:border-white/25 dark:hover:bg-white/10"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:thin]"
        >
          {images.map((image, index) => (
            <figure
              key={`${image.alt}-${index}`}
              data-gallery-card
              className="w-[85%] shrink-0 snap-start sm:w-[65%] lg:w-[48%]"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-sm">
                <MissionImage src={image.src} alt={image.alt} />
              </div>
              {image.caption && (
                <figcaption className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

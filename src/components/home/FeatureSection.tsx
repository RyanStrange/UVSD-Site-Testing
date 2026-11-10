import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

type FeatureSectionProps = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string | null;
  imageAlt: string;
  href: string;
  buttonText: string;
  alignment?: "left" | "right";
};

export default function FeatureSection({
  number,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  href,
  buttonText,
  alignment = "left",
}: FeatureSectionProps) {
  const imageElement = image ? (
    <div className="relative min-h-[350px] overflow-hidden bg-slate-900 sm:min-h-[480px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition duration-700 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  ) : (
    <ImagePlaceholder
      label={`${title} photography`}
      className="min-h-[350px] sm:min-h-[480px]"
    />
  );

  const contentElement = (
    <div className="flex flex-col justify-center px-6 py-14 sm:px-12 lg:px-16">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
        {number} / {eyebrow}
      </p>

      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      <p className="mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
        {description}
      </p>

      <div className="mt-9">
        <Link
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-3 border-b border-sky-400 pb-2 text-sm font-semibold text-white transition hover:gap-5"
        >
          {buttonText}
          <ArrowRight size={17} className="text-sky-400" />
        </Link>
      </div>
    </div>
  );

  return (
    <section className="border-t border-white/10 bg-slate-950">
      <div
        className={`mx-auto grid max-w-7xl md:grid-cols-2 ${
          alignment === "right" ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {imageElement}
        {contentElement}
      </div>
    </section>
  );
}

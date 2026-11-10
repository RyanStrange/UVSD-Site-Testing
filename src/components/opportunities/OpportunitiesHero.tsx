import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { OpportunitiesPageData } from "@/data/opportunities/types";

interface Props {
  data: OpportunitiesPageData["hero"];
  signupUrl: string | null;
}

export default function OpportunitiesHero({ data, signupUrl }: Props) {
  return (
    <section className="relative flex min-h-[75vh] items-center overflow-hidden bg-black">
      <Image
        src={data.image.src}
        alt={data.image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
            University of Victoria
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">
            {data.title}
          </h1>

          <p className="max-w-2xl text-lg text-white/85 md:text-xl">
            {data.subtitle}
          </p>

          <Button asChild size="lg">
            <Link href={signupUrl || "#contact"}>Join the Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

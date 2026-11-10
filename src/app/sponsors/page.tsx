import Image from "next/image";
import type { Metadata } from "next";
import { sponsors, sponsorPageData } from "@/data/sponsors";

export const metadata: Metadata = {
  title: "Sponsors | UVSD",
  description:
    "Support student-led space technology at the University of Victoria.",
};

const supportAreas = [
  {
    title: "Satellite Hardware",
    description:
      "Developing and building the hardware that makes student satellite missions possible.",
  },
  {
    title: "Ground Station Infrastructure",
    description:
      "Building the systems needed to communicate with and support spacecraft.",
  },
  {
    title: "Testing and Manufacturing",
    description:
      "Supporting prototyping, testing, fabrication, and integration.",
  },
  {
    title: "Tools and Equipment",
    description:
      "Providing students with the tools and equipment needed to develop practical skills.",
  },
  {
    title: "Workshops and Training",
    description:
      "Giving students opportunities to learn technical skills and work with new technologies.",
  },
  {
    title: "Outreach and Travel",
    description:
      "Supporting educational events, conferences, testing trips, and other team activities.",
  },
];

function ActionButton({
  href,
  children,
  variant = "primary",
}: {
  href?: string | null;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const styles =
    variant === "primary"
      ? "bg-sky-600 text-white hover:bg-sky-500"
      : "border border-slate-400 text-slate-900 hover:bg-slate-200";

  const className = `inline-flex items-center justify-center gap-3 px-6 py-3 text-sm font-semibold transition ${styles}`;

  if (!href) {
    return (
      <button
        type="button"
        disabled
        className={`${className} cursor-not-allowed opacity-50`}
        title="This link will be available soon"
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}

export default function SponsorsPage() {
  const sponsorEmail = sponsorPageData.managementEmail
    ? `mailto:${sponsorPageData.managementEmail}?subject=Sponsorship%20Inquiry`
    : null;

  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-center bg-slate-950 px-6 py-24 text-white md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Support UVSD
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
            Help build what comes next.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Your support helps University of Victoria students develop practical
            engineering skills and build the technologies behind future space
            missions.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#become-a-sponsor"
              className="inline-flex items-center gap-3 bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
            >
              Become a Sponsor <span aria-hidden="true">→</span>
            </a>

            <a
              href="#donate"
              className="inline-flex items-center gap-3 border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Donate to UVSD <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Current sponsors */}
      <section className="bg-slate-100 px-6 py-20 dark:bg-slate-900 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
              Our Partners
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Our Sponsors
            </h2>

            <p className="mt-6 leading-7 text-slate-600 dark:text-slate-300">
              UVSD is grateful for the organizations and individuals who support
              our work. Their contributions help provide students with
              opportunities to develop, build, and test real aerospace
              technologies.
            </p>
          </div>

          {sponsors.length > 0 ? (
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {sponsors.map((sponsor) => {
                const logo = (
                  <div className="relative flex h-32 items-center justify-center bg-white p-6 transition hover:shadow-md">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain p-6"
                    />
                  </div>
                );

                return (
                  <div key={sponsor.name}>
                    {sponsor.websiteUrl ? (
                      <a
                        href={sponsor.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${sponsor.name}`}
                      >
                        {logo}
                      </a>
                    ) : (
                      logo
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="mt-10 text-sm text-slate-500 dark:text-slate-400">
              Sponsor logos will be displayed here.
            </p>
          )}
        </div>
      </section>

      {/* What support makes possible */}
      <section className="bg-white px-6 py-20 dark:bg-slate-950 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
              Making an Impact
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              What your support makes possible.
            </h2>

            <p className="mt-6 leading-7 text-slate-600 dark:text-slate-300">
              Contributions help give students access to the resources,
              equipment, and experiences needed to take ideas from the drawing
              board to real-world engineering projects.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {supportAreas.map((area, index) => (
              <div
                key={area.title}
                className="border-t border-slate-200 pt-6 dark:border-slate-800"
              >
                <p className="text-sm font-semibold text-sky-700 dark:text-sky-400">
                  0{index + 1}
                </p>

                <h3 className="mt-4 text-xl font-semibold">{area.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donations */}
      <section
        id="donate"
        className="bg-slate-100 px-6 py-20 dark:bg-slate-900 md:px-12 md:py-24 lg:px-20"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
              Make a Contribution
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Support student spaceflight.
            </h2>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
              Every contribution helps UVSD students gain hands-on experience
              while developing technologies for space exploration and research.
            </p>
          </div>

          <ActionButton href={sponsorPageData.donationUrl}>
            Donate to UVSD
          </ActionButton>
        </div>
      </section>

      {/* Become a sponsor */}
      <section
        id="become-a-sponsor"
        className="bg-slate-950 px-6 py-20 text-white md:px-12 md:py-24 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Work With Us
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Become a Sponsor.
            </h2>

            <p className="mt-6 leading-7 text-slate-300">
              Partner with UVSD to support student-led engineering, technical
              development, and the next generation of aerospace talent. We
              welcome organizations and individuals interested in supporting our
              projects and students.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <ActionButton href={sponsorEmail}>Contact UVSD</ActionButton>

              <ActionButton
                href={sponsorPageData.sponsorshipPackageUrl}
                variant="secondary"
              >
                Download Sponsorship Package
              </ActionButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

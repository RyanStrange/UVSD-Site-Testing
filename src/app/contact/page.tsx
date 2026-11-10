import type { Metadata } from "next";
import { siteData } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact | UVSD",
  description:
    "Get in touch with the University of Victoria Satellite Design team.",
};

function ContactCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col border-t border-slate-200 pt-6 dark:border-slate-800">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {description}
      </p>
      <div className="mt-6 flex flex-col items-start gap-3">{children}</div>
    </div>
  );
}

function ContactLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-500 dark:text-sky-400"
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}

export default function ContactPage() {
  const { contact } = siteData;

  const sponsorEmail = contact.sponsorEmail ?? contact.managementEmail;

  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-950 px-6 py-24 text-white md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Contact UVSD
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
            Get in touch.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Whether you&apos;re interested in joining the team, learning about
            our projects, or exploring a potential partnership, we&apos;d love
            to hear from you.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="bg-white px-6 py-20 dark:bg-slate-950 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
              Reach Out
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              How can we help?
            </h2>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
              Choose the contact method that best fits your inquiry.
            </p>
          </div>

          <div className="mt-16 grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {/* General inquiries */}
            <ContactCard
              title="General Inquiries"
              description="Questions about UVSD, our projects, or the team? Get in touch with us."
            >
              {contact.generalEmail && (
                <ContactLink href={`mailto:${contact.generalEmail}`}>
                  {contact.generalEmail}
                </ContactLink>
              )}

              {contact.managementEmail && (
                <ContactLink href={`mailto:${contact.managementEmail}`}>
                  Management Email
                </ContactLink>
              )}

              {!contact.generalEmail && !contact.managementEmail && (
                <p className="text-sm text-slate-500">
                  Contact information coming soon.
                </p>
              )}
            </ContactCard>

            {/* Joining */}
            <ContactCard
              title="Join UVSD"
              description="Interested in getting involved? Students from a variety of disciplines and experience levels are welcome."
            >
              {contact.joinFormUrl ? (
                <ContactLink href={contact.joinFormUrl}>
                  Complete the Sign-up Form
                </ContactLink>
              ) : (
                <p className="text-sm text-slate-500">
                  Sign-up form coming soon.
                </p>
              )}
            </ContactCard>

            {/* Sponsorship */}
            <ContactCard
              title="Sponsorship"
              description="Interested in supporting student-led space technology? We'd be happy to discuss sponsorship opportunities."
            >
              {sponsorEmail ? (
                <ContactLink
                  href={`mailto:${sponsorEmail}?subject=Sponsorship%20Inquiry`}
                >
                  Sponsorship Inquiries
                </ContactLink>
              ) : (
                <p className="text-sm text-slate-500">
                  Sponsorship contact coming soon.
                </p>
              )}

              <ContactLink href="/sponsors">Explore Sponsorship</ContactLink>
            </ContactCard>

            {/* Social media */}
            <ContactCard
              title="Instagram"
              description="Follow our work, see project updates, and get a look at what our team is building."
            >
              {contact.instagramUrl ? (
                <ContactLink href={contact.instagramUrl}>
                  Follow UVSD
                </ContactLink>
              ) : (
                <p className="text-sm text-slate-500">
                  Instagram link coming soon.
                </p>
              )}
            </ContactCard>

            <ContactCard
              title="LinkedIn"
              description="Connect with UVSD and keep up with our projects, opportunities, and team news."
            >
              {contact.linkedinUrl ? (
                <ContactLink href={contact.linkedinUrl}>
                  Connect with UVSD
                </ContactLink>
              ) : (
                <p className="text-sm text-slate-500">
                  LinkedIn link coming soon.
                </p>
              )}
            </ContactCard>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import { siteData } from "@/data/site";

export function Footer() {
  const { contact } = siteData;

  return (
    <footer className="bg-slate-950 px-6 py-16 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* UVSD information */}
          <div>
            <h2 className="text-xl font-semibold">UVSD</h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              {siteData.description}
            </p>
          </div>

          {/* Get involved */}
          <div>
            <h3 className="font-semibold">Get Involved</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <Link href="/opportunities" className="hover:text-white">
                Opportunities
              </Link>

              {contact.joinFormUrl && (
                <a
                  href={contact.joinFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Join UVSD
                </a>
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">Contact</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              {contact.generalEmail && (
                <a
                  href={`mailto:${contact.generalEmail}`}
                  className="hover:text-white"
                >
                  General Inquiries
                </a>
              )}

              {contact.managementEmail && (
                <a
                  href={`mailto:${contact.managementEmail}`}
                  className="hover:text-white"
                >
                  Management
                </a>
              )}
            </div>
          </div>

          {/* Sponsorship and social */}
          <div>
            <h3 className="font-semibold">Connect</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              {contact.sponsorEmail && (
                <a
                  href={`mailto:${contact.sponsorEmail}?subject=Sponsorship%20Inquiry`}
                  className="hover:text-white"
                >
                  Sponsor Inquiries
                </a>
              )}

              {contact.instagramUrl && (
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Instagram
                </a>
              )}

              {contact.linkedinUrl && (
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} UVSD · University of Victoria
        </div>
      </div>
    </footer>
  );
}

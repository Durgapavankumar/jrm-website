import Link from "next/link";
import type { Metadata } from "next";
import { copy } from "@/content/copy";
import { site } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "Credentials — JRM Consulting LLC",
  description:
    "Dive deeper into the logistics leadership, safety, and international experience that fuel JRM Consulting engagements.",
  openGraph: {
    title: "Credentials — JRM Consulting LLC",
    description:
      "Operational leadership, safety programs, and international experience built over two decades.",
    url: `${site.url}/credentials`,
    siteName: site.name,
    type: "website",
  },
};

export default function CredentialsPage() {
  return (
    <div className="bg-night py-24 text-white">
      <div className="mx-auto max-w-5xl space-y-12 px-4">
        <header className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-accent">
            Credentials
          </p>
          <h1 className="font-display text-4xl">
            Proof points behind every engagement
          </h1>
          <p className="text-lg text-white/70">
            Clients partner with JRM because the advice comes from two decades of
            running logistics, technology, and safety programs—not just decks.
            Explore the experience pillars below.
          </p>
        </header>

        <div className="space-y-10">
          {copy.credentials.map((cred) => (
            <section
              key={cred.slug}
              id={cred.slug}
              className="rounded-3xl border border-white/20 bg-white/10 p-8 text-white shadow-glow space-y-6 scroll-mt-24"
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">{cred.title}</h2>
                <p className="text-white/80">{cred.summary}</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">
                  What this looks like
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  {cred.detail.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        <section className="rounded-3xl border border-white/20 bg-gradient-to-r from-brand to-brand-light p-8 text-white shadow-glow flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">
              Need more references or case detail?
            </h2>
            <p className="mt-2 text-white/80">
              I’m happy to connect you with past clients or dive into work samples
              under NDA.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={site.calendlyUrl}
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-night hover:opacity-90"
            >
              Talk with Jason
            </Link>
            <Link
              href={site.ceoLinkedIn}
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Connect on LinkedIn
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

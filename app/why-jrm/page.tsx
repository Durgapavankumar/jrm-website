import Link from "next/link";
import type { Metadata } from "next";
import { copy } from "@/content/copy";
import { site } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "Why JRM Consulting",
  description:
    "Three reasons operators choose JRM: operator-first approach, speed to value, and low-maintenance execution.",
  openGraph: {
    title: "Why JRM Consulting",
    description:
      "Operator-first, fast-moving logistics and technology advisory built for adoption.",
    url: `${site.url}/why-jrm`,
    siteName: site.name,
    type: "website",
  },
};

export default function WhyJrmPage() {
  return (
    <div className="bg-night py-24 text-white">
      <div className="mx-auto max-w-5xl space-y-12 px-4">
        <header className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-accent">
            Why JRM
          </p>
          <h1 className="font-display text-4xl">
            Built for operators, not presentations
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-white/70">
            Three lenses guide every engagement. Explore how each principle shows
            up on the ground and keeps programs moving.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {copy.valueProps.map((reason) => (
            <a
              key={reason.slug}
              href={`#${reason.slug}`}
              className="rounded-2xl border border-white/20 bg-white/5 p-5 shadow-glow transition hover:-translate-y-1 hover:border-brand-accent/60"
            >
              <h2 className="text-lg font-semibold text-white">{reason.title}</h2>
              <p className="mt-2 text-sm text-white/80">{reason.text}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-accent">
                Jump to detail →
              </span>
            </a>
          ))}
        </div>

        <div className="space-y-10">
          {copy.valueProps.map((reason) => (
            <section
              key={reason.slug}
              id={reason.slug}
              className="rounded-3xl border border-white/20 bg-white/10 p-8 text-white shadow-glow space-y-6 scroll-mt-24"
            >
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em] text-brand-accent">
                  Why JRM
                </p>
                <h2 className="text-2xl font-semibold">{reason.title}</h2>
                <p className="text-lg text-white/80">{reason.text}</p>
              </div>
              <p className="text-white/80">{reason.detail.intro}</p>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white/70">
                  How it shows up
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  {reason.detail.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/20 p-5">
                <h3 className="text-sm font-semibold text-white">
                  Proof on the ground
                </h3>
                <p className="mt-2 text-sm text-white/80">{reason.detail.proof}</p>
              </div>
            </section>
          ))}
        </div>

        <section className="rounded-3xl border border-white/20 bg-gradient-to-r from-brand to-brand-light p-8 text-white shadow-glow flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Ready to see the fit?</h2>
            <p className="mt-2 text-white/80">
              Walk through your logistics objectives and identify where JRM can
              plug in.
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

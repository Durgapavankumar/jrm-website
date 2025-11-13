import Link from "next/link";
import { copy } from "@/content/copy";

const badges = ["⚙️", "⚡️", "🛰️"];

export function ValueProps() {
  return (
    <section id="why-jrm" className="py-24">
      <div className="mx-auto max-w-6xl space-y-10 px-4">
        <div className="text-center text-white space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-accent">
            Why JRM
          </p>
          <h2 className="font-display text-3xl md:text-4xl">
            Advisory that actually works on the floor
          </h2>
          <p className="text-white/70">
            Pillars clients feel when we build roadmaps, sit in the war room, and
            stand up new logistics tech.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {copy.valueProps.map((v, idx) => (
            <Link
              key={v.title}
              href={`/why-jrm#${v.slug}`}
              className="group relative block rounded-[32px] border border-white/20 bg-white/5 p-8 text-white backdrop-blur-lg transition hover:-translate-y-2 hover:border-brand-accent/60"
              aria-label={`Learn more about ${v.title}`}
            >
              <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-br from-white/5 via-transparent to-brand-accent/20 opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-brand-accent">
                <span className="text-xl">{badges[idx % badges.length]}</span>
                {v.title}
              </div>
              <p className="mt-4 text-base text-white/80">{v.text}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-brand-accent">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

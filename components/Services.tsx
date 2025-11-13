import Link from "next/link";
import { services } from "@/content/services";

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl space-y-10 rounded-[40px] bg-white/95 p-8 shadow-[0_35px_120px_rgba(5,11,22,0.15)]">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-brand-light">
              Services
            </p>
            <h2 className="font-display text-3xl text-night">
              Advisory tracks built for outcomes
            </h2>
          </div>
          <p className="text-gray-600 md:max-w-3xl">
            Each track combines strategy, process design, and on-the-floor
            execution support so the work keeps moving once the slides end.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.title}
              href={`/services/${s.slug}`}
              className="group block rounded-[32px] border border-gray-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-2 hover:border-brand-light/70"
              aria-label={`Read more about ${s.title}`}
            >
              <article className="space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-night group-hover:text-brand">
                    {s.title}
                  </h3>
                  <span className="rounded-full bg-brand-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
                    {s.items.length} focus areas
                  </span>
                </div>
                <p className="text-gray-700">{s.summary}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {s.items.map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 rounded-2xl bg-gray-50 px-3 py-2"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <p className="inline-flex items-center text-sm font-semibold text-brand">
                  Learn more →
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

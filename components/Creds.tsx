import Link from "next/link";
import { copy } from "@/content/copy";

export function Creds() {
  return (
    <section id="credentials" className="py-24 text-white">
      <div className="mx-auto max-w-6xl space-y-6 px-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-brand-accent">
              Credentials
            </p>
            <h2 className="font-display text-3xl">Track record you can vet</h2>
          </div>
          <Link
            href="/credentials"
            className="inline-flex items-center rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            View credential details →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {copy.credentials.map((cred) => (
            <Link
              key={cred.slug}
              href={`/credentials#${cred.slug}`}
              className="rounded-3xl border border-white/30 bg-white/90 p-6 text-night shadow-[0_15px_45px_rgba(15,23,42,0.2)] transition hover:-translate-y-1 hover:border-brand/50"
            >
              <h3 className="text-lg font-semibold text-night">
                {cred.title}
              </h3>
              <p className="mt-3 text-sm text-gray-700">{cred.summary}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-brand">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

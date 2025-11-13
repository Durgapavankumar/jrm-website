import Image from "next/image";
import { ceo } from "@/content/ceo";

export function CEO() {
  const featuredExpertise = ceo.expertise.slice(0, 3);
  const headlineExperience = ceo.experienceHighlights[0];

  return (
    <section id="ceo" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6 md:p-10 grid gap-8 md:grid-cols-[280px,1fr] items-center">
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src={ceo.headshot}
              alt={`${ceo.name} headshot`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6">
            <header className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-brand">
                Meet the founder
              </p>
              <h2 className="text-2xl font-semibold">From the CEO</h2>
              <p className="text-gray-700 leading-relaxed">{ceo.message}</p>
            </header>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wide">
                Core focus
              </h3>
              <ul className="mt-3 grid gap-2 text-sm text-gray-700">
                {featuredExpertise.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {headlineExperience && (
              <p className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-sm text-gray-700 leading-relaxed">
                {headlineExperience}
              </p>
            )}

            <a
              href={ceo.linkedin}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-accent px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-95 transition"
              target="_blank"
              rel="noreferrer"
            >
              View Jason on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { copy } from "@/content/copy";

export function Industries() {
  return (
    <section id="industries" className="py-24">
      <div className="mx-auto max-w-6xl rounded-[40px] border border-white/20 bg-gradient-to-br from-brand-light/40 via-night to-brand/80 p-8 text-white shadow-glow">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-accent">
            Industries
          </p>
          <h2 className="font-display text-3xl">Built with mixed fleets in mind</h2>
          <p className="text-white/70 md:max-w-3xl">
            Experience spans asset-heavy carriers, 3PLs, shippers, and emerging
            sectors. Engagements flex from strategy to floor execution depending on
            what the network needs.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.industries.map((industry) => (
            <div
              key={industry}
              className="rounded-2xl border border-white/30 bg-white/5 px-4 py-3 font-semibold text-white/90"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

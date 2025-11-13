"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { copy } from "@/content/copy";
import { site } from "@/content/siteConfig";

const highlightGradients = [
  "from-brand-accent/30 to-transparent",
  "from-brand-glow/30 to-transparent",
  "from-brand-sun/40 to-transparent",
  "from-white/20 to-transparent",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-night via-brand.light/30 to-night py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-brand-accent/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-brand-glow/30 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-6"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Logistics Technology Advisor
          </p>
          <h1 className="font-display text-4xl leading-tight md:text-5xl">
            {copy.hero.title}
          </h1>
          <p className="text-lg text-white/80">{copy.hero.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.calendlyUrl}
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-night shadow-glow transition hover:-translate-y-0.5"
            >
              Book a discovery call
            </a>
            <a
              href="#services"
              className="inline-flex rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore services
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {copy.hero.highlights.map((item, idx) => (
              <div
                key={item}
                className={`rounded-2xl border border-white/20 bg-white/5 p-4 text-sm text-white/80 backdrop-blur-md bg-gradient-to-r ${highlightGradients[idx % highlightGradients.length]}`}
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="glass-panel relative aspect-[4/3] overflow-hidden">
            <Image
              src={site.heroImage}
              alt="Logistics technology solutions"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-night/60 p-4 text-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-accent">
                Latest engagement
              </p>
              <p className="mt-1 font-semibold">
                Unified telematics + analytics stack for national fleet
              </p>
              <p className="text-white/70">
                Visibility across 2k+ assets, 15% faster exception response.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

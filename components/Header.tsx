import Link from "next/link";
import { site } from "@/content/siteConfig";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#0d1f3d]/90 text-white shadow-[0_10px_40px_rgba(3,7,17,0.55)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-4 text-white">
          <span className="text-4xl font-black leading-none">JRM</span>
          <span className="text-sm uppercase tracking-[0.4em] text-white/70">
            Consulting LLC
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-base font-medium text-white/90 md:flex">
          <a href="/#services" className="transition hover:text-white">
            Services
          </a>
          <a href="/why-jrm" className="transition hover:text-white">
            Why JRM
          </a>
          <a href="/credentials" className="transition hover:text-white">
            Credentials
          </a>
          <a href="/#industries" className="transition hover:text-white">
            Industries
          </a>
          <a href="/#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
        <a
          href={site.calendlyUrl}
          className="inline-flex items-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-night shadow-[0_5px_25px_rgba(255,255,255,0.25)] transition hover:-translate-y-0.5"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}

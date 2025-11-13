import { site } from "@/content/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night/80 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{site.legalName}</p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href="/">
            Home
          </a>
          <a className="hover:text-white" href="/why-jrm">
            Why JRM
          </a>
          <a className="hover:text-white" href="/credentials">
            Credentials
          </a>
          <a className="hover:text-white" href={site.calendlyUrl}>
            Book
          </a>
        </div>
      </div>
    </footer>
  );
}

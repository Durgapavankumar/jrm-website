import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { site } from "@/content/siteConfig";

type ServiceSlug = (typeof services)[number]["slug"];
const serviceMap = new Map(services.map((service) => [service.slug, service]));

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: ServiceSlug };
}): Promise<Metadata> {
  const service = serviceMap.get(params.slug);
  if (!service) {
    return {
      title: "Service not found",
    };
  }

  return {
    title: service.title,
    description: service.summary,
    openGraph: {
      title: service.title,
      description: service.summary,
      url: `${site.url}/services/${service.slug}`,
      siteName: site.name,
      type: "article",
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: ServiceSlug };
}) {
  const service = serviceMap.get(params.slug);
  if (!service) notFound();

  const { detail } = service;

  return (
    <div className="bg-night py-24 text-white">
      <div className="mx-auto max-w-5xl space-y-12 px-4">
        <div className="space-y-4">
          <Link
            href="/#services"
            className="inline-flex items-center text-sm text-brand-accent hover:underline"
          >
            ← Back to services
          </Link>
          <div className="rounded-[36px] border border-white/20 bg-white/10 p-8 shadow-glow">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-accent">
              Service
            </p>
            <h1 className="mt-3 font-display text-4xl">{service.title}</h1>
            <p className="mt-4 text-lg text-white/80">{service.summary}</p>
            <p className="mt-4 text-white/80">{detail.overview}</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <DetailCard title="What we tackle" items={detail.engagements} />
          <DetailCard title="Expected outcomes" items={detail.outcomes} />
        </div>

        <DetailCard title="Deliverables you receive" items={detail.deliverables} />

        <div className="rounded-3xl border border-white/20 bg-gradient-to-r from-brand to-brand-light p-8 text-white shadow-glow flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Ready to dive deeper?</h2>
            <p className="mt-2 text-white/80">
              Book time with Jason to review where this service fits your roadmap.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={site.calendlyUrl}
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-night hover:opacity-90"
            >
              Book a call
            </Link>
            <Link
              href={site.ceoLinkedIn}
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Message on LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailCard({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-white shadow-glow">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-white/80">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

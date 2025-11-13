import { site } from "@/content/siteConfig";

export function GoogleFormEmbed() {
  if (!site.googleFormEmbedSrc) return null;
  return (
    <div className="w-full aspect-[4/5] bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <iframe
        src={site.googleFormEmbedSrc}
        width="100%"
        height="100%"
        className="w-full h-full"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Contact form"
      >
        Loading…
      </iframe>
    </div>
  );
}

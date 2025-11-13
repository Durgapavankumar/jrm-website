"use client";
import { site } from "@/content/siteConfig";
import { useEffect } from "react";

/**
 * Renders Calendly inline widget if a URL is provided.
 */
export function CalendlyEmbed() {
  useEffect(() => {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(l);
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
    return () => {
      document.head.removeChild(l);
      document.body.removeChild(s);
    };
  }, []);

  if (!site.calendlyUrl) return null;
  return (
    <div className="w-full min-h-[700px]" data-testid="calendly">
      <div
        className="calendly-inline-widget"
        data-url={site.calendlyUrl}
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}

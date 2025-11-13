"use client";
import { useState } from "react";
import { GoogleFormEmbed } from "./GoogleFormEmbed";
import { CalendlyEmbed } from "./CalendlyEmbed";
import { Modal } from "./Modal";
import { site } from "@/content/siteConfig";

export function Contact() {
  const [openForm, setOpenForm] = useState(false);
  const [openCalendly, setOpenCalendly] = useState(false);

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="rounded-[40px] border border-white/20 bg-gradient-to-br from-brand.light via-brand to-night p-8 text-white shadow-glow">
          <p className="text-xs uppercase tracking-[0.4em] text-brand-accent">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl">
            Ready to move your logistics roadmap forward?
          </h2>
          <p className="mt-4 text-white/80">
            Connect directly with Jason or drop details via the form. Most
            requests get a same-day response.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              className="rounded-2xl border border-white/30 bg-white/10 p-4 text-sm text-white/90 transition hover:bg-white/20"
              href={site.companyLinkedIn}
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-xs uppercase tracking-widest text-brand-accent">
                Company
              </p>
              <p className="mt-1 font-semibold">LinkedIn</p>
            </a>
            <a
              className="rounded-2xl border border-white/30 bg-white/10 p-4 text-sm text-white/90 transition hover:bg-white/20"
              href={site.ceoLinkedIn}
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-xs uppercase tracking-widest text-brand-accent">
                Jason Meares
              </p>
              <p className="mt-1 font-semibold">LinkedIn</p>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => setOpenCalendly(true)}
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-night transition hover:-translate-y-0.5"
            >
              Book Calendly slot
            </button>
            <button
              onClick={() => setOpenForm(true)}
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Open contact form
            </button>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/40 bg-white/95 p-6 shadow-[0_25px_80px_rgba(5,11,22,0.15)]">
          <h3 className="text-xl font-semibold text-night">
            What to prep for the call
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="text-brand">▸</span>
              Recent logistics or technology challenges you want to unblock
            </li>
            <li className="flex gap-2">
              <span className="text-brand">▸</span>
              Systems in play today (TMS, WMS, telematics, analytics)
            </li>
            <li className="flex gap-2">
              <span className="text-brand">▸</span>
              Desired timeline and internal stakeholders
            </li>
          </ul>
          <p className="mt-6 text-sm text-gray-600">
            Prefer self-serve? Use the buttons to open an embedded contact form or
            pick a time that works for you.
          </p>
        </div>
      </div>

      <Modal
        open={openForm}
        onClose={() => setOpenForm(false)}
        title="Contact Form"
      >
        <div className="p-4">
          <GoogleFormEmbed />
        </div>
      </Modal>

      <Modal
        open={openCalendly}
        onClose={() => setOpenCalendly(false)}
        title="Book a Meeting"
      >
        <div className="p-4">
          <CalendlyEmbed />
        </div>
      </Modal>
    </section>
  );
}

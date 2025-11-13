// content/siteConfig.ts

export const site = {
  name: "JRM Consulting LLC",
  shortName: "JRM Consulting LLC",
  legalName: "JRM Consulting LLC",
  url: "https://www.example.com", // replace with your live domain when ready
  tagline:
    "Logistics & transportation technology consulting to drive efficiency and profit.",

  // Correct Calendly link
  calendlyUrl: "https://calendly.com/durgapavan3393/30min",

  // ✅ Correct Google Form embed URL (not forms.gle)
  // Get this via: Google Form → Send → <> → copy iframe src
  googleFormEmbedSrc:
    "https://docs.google.com/forms/d/e/1FAIpQLSdzkkJmAZYtkbcLeBre4-r2xtmrnAgF4hmdDxzl77fmo1hADQ/viewform?embedded=true",

  // Optional / additional fields
  companyLinkedIn: "https://www.linkedin.com/company/jrm-consulting-llc",
  ceoLinkedIn: "https://www.linkedin.com/in/jrmeares/",
  heroImage: "/hero.jpg",
  logoLight: "/jrm_header_transparent.png",
  logoDark: "/jrm_header_dark.png",
  logoSvg: "/jrm_header.svg",
} as const;

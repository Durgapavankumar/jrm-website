// content/ceo.ts

export const ceo = {
  name: "Jason Meares",
  title: "Founder & Principal, JRM Consulting LLC",
  headshot: "/ceo.png", // save your circular image here: /public/ceo.jpg
  linkedin: "https://www.linkedin.com/in/jrmeares/",
  message: `I help organizations enhance business capabilities through technology solutions.
I’m a trusted advisor who aligns logistics and transportation technologies to drive efficiency, profitability, and safety.`,

  expertise: [
    "Transportation & logistics technology strategy (TMS/WMS, telematics, analytics)",
    "Process optimization, KPI design, and performance management",
    "Vendor selection, implementation oversight, and change management",
    "Enterprise reporting with Power BI and data modeling",
  ],

  experienceHighlights: [
    "Consultant — JRM Consulting LLC (2019–Present): advisory on aligning logistics tech to objectives; impact definition; resource/timeline planning; systems design, testing, installation, and monitoring.",
    "Senior Manager, Systems & Business Integration — Riverside Transport (2020–2022): directed fuel spend strategy; eliminated six-figure costs; modernized telematics, trailer tracking, and camera platforms.",
    "Senior Manager, Enterprise Reporting & Analysis — Crestwood Midstream (2020): owned reporting platforms; developed data models & self-service analytics; coached teams to drive data-driven decisions.",
    "Senior Manager / Manager, Logistics Systems — Various (2016–2020): standardized ops systems; new dispatch app reduced empty miles; improved fuel spend visibility and interfaces.",
    "Engagement Manager / Solutions Architect — MercuryGate (2015–2016): owned client relationships, delivery, and escalations for TMS projects.",
    "Senior Manager, Systems & Business Integration — Red Classic (2011–2014): deployed TMS for Coca-Cola subsidiary; 88% order-entry automation; 75% dispatch automation.",
    "Business Systems Analyst & Technical Writer — Coca-Cola Consolidated (2009–2011): led Kaizen and Six Sigma projects; administered key manufacturing systems.",
    "Regional Manager — Premier Warehousing (2004–2009): oversaw inbound handling for 11 DCs; managed $8M budget.",
  ],
} as const;

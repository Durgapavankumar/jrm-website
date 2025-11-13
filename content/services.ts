export const services = [
  {
    slug: "logistics-technology-advisory",
    title: "Logistics Technology Advisory",
    summary:
      "Align TMS/WMS, telematics, and analytics with your business goals.",
    items: [
      "Current‑state assessment and roadmap",
      "Vendor evaluation & selection",
      "Implementation oversight",
      "Change management & training",
    ],
    detail: {
      overview:
        "I assess how freight, warehouse, and fleet systems currently work together, then design a pragmatic roadmap that keeps freight flowing while new tech rolls in.",
      engagements: [
        "Discovery sessions with leadership, dispatch, and ops control room teams",
        "System architecture and integration review, including data-model alignment",
        "Vendor scorecards, demos, and commercial evaluation",
        "Implementation playbooks with resourcing, timeline, and risk gating",
      ],
      outcomes: [
        "A prioritized roadmap that balances quick wins with foundational upgrades",
        "Clear owner + KPI for every workstream so execution does not stall",
        "Vendor decisions that reflect operational reality, not just RFP scores",
        "Rollout governance plan spanning testing, change management, and adoption",
      ],
      deliverables: [
        "Current vs. future-state architecture maps",
        "Vendor comparison matrix with weighted scoring",
        "12–18 month execution roadmap with budget bands",
        "Implementation governance toolkit (RACI, cadence, risk log)",
      ],
    },
  },
  {
    slug: "process-performance-optimization",
    title: "Process & Performance Optimization",
    summary: "Tighten processes to reduce cost and boost service levels.",
    items: [
      "KPI design and dashboards",
      "Network & route optimization",
      "Warehouse layout & flow improvements",
      "Safety and quality programs",
    ],
    detail: {
      overview:
        "When cost-to-serve drifts or service levels wobble, I map your end-to-end process to uncover delays, handoff friction, and blind spots.",
      engagements: [
        "Ride-alongs and floor walks to capture how work actually happens",
        "Value-stream mapping sessions with cross-functional teams",
        "Operational data pull (route, dwell, warehouse productivity, accessorials)",
        "Rapid experiments coupled with coaching to lock in new behaviors",
      ],
      outcomes: [
        "Documented SOPs with trigger points, ownership, and escalation paths",
        "KPI stack that links executive metrics to dispatch/floor dashboards",
        "Reduced touches, fewer manual exceptions, and higher asset utilization",
        "Safety and quality programs grounded in on-the-floor observations",
      ],
      deliverables: [
        "Value-stream map + bottleneck analysis",
        "Cost / service opportunity sizing with payback windows",
        "Playbooks for revised SOPs and training plans",
        "Instrumentation plan for KPIs, alerts, and coaching cadences",
      ],
    },
  },
  {
    slug: "data-analytics-enablement",
    title: "Data & Analytics Enablement",
    summary: "Turn operations data into decisions.",
    items: [
      "Data audit & instrumentation",
      "Reporting automation",
      "Executive scorecards",
      "Ad‑hoc analysis / opportunity sizing",
    ],
    detail: {
      overview:
        "I help ops teams trust the numbers by tightening data capture, modeling, and the last-mile presentation of insights.",
      engagements: [
        "Audit of existing data sources, transformations, and access controls",
        "Data modeling workshops with IT + business to define a common language",
        "Dashboard / scorecard design sessions focused on decisions, not vanity metrics",
        "Enablement and coaching so leaders adopt the tools",
      ],
      outcomes: [
        "Single source of truth for loads, spend, exceptions, and network health",
        "Automation of recurring reporting so analysts move upstream",
        "Role-based scorecards that surface the next best action",
        "Data governance practices that keep the stack reliable post-engagement",
      ],
      deliverables: [
        "Data inventory and quality heat map",
        "Dimensional model or semantic layer blueprint",
        "Dashboard wireframes + production build plan",
        "Adoption and training framework with KPIs for usage",
      ],
    },
  },
] as const;

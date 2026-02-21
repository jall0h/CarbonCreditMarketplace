const architecture = [
  {
    title: "1. AI Carbon Score Engine",
    purpose: "Standardize and automate carbon measurement for small and medium producers.",
    items: [
      "Farmer-submitted inputs: GPS location, farm size, crop type, soil type, practices, optional yield history",
      "Model stack: satellite imagery, environmental datasets, climate models, soil carbon modeling, risk models, ML predictions",
      "Outputs: estimated sequestration (tCO2e), Carbon Score, Confidence Score, Risk Score, digital carbon report, verification hash",
      "Result: each farm receives a Digital Carbon Identity",
    ],
  },
  {
    title: "2. Blockchain Transparency Layer",
    purpose: "Create tamper-proof trust and complete carbon provenance.",
    items: [
      "Store carbon score hash and timestamped verification events",
      "Prevent double counting and enforce traceable ownership transfers",
      "Track retirement lifecycle of credits",
      "Provide immutable audit trail, methodology context, and anti-fraud signals",
    ],
  },
  {
    title: "3. Carbon Marketplace",
    purpose: "Connect verified small-scale producers with buyers through comparable carbon assets.",
    items: [
      "Producer listings show Carbon Score, Confidence Score, biodiversity and impact metrics",
      "Buyer filters include region, carbon volume, risk level, impact type, biodiversity bonus, confidence level",
      "Each purchase is traceable and backed by AI verification plus blockchain anchoring",
    ],
  },
];

const problemsSolved = [
  "High verification cost",
  "Low transparency",
  "Double counting risk",
  "Exclusion of small farmers",
  "No standardized offset comparability",
  "Manual, audit-heavy inefficiency",
];

const technicalComponents = [
  "Frontend dashboards for farmers and buyers",
  "Backend carbon modeling engine",
  "ML sequestration prediction models",
  "Risk modeling system",
  "Blockchain integration layer",
  "Marketplace engine",
  "Carbon Equity Index (CEI) module",
  "API layer for external integrations",
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero card">
        <p className="eyebrow">CarbonTrade</p>
        <h1>AI + Blockchain Carbon Infrastructure for Inclusive Climate Markets</h1>
        <p>
          CarbonTrade builds digital trust rails for voluntary carbon markets by lowering
          verification barriers, enabling small-scale producer participation, and creating
          transparent, comparable, and fraud-resistant carbon assets.
        </p>
        <div className="badge-row">
          <span>ClimateTech</span>
          <span>Carbon Infrastructure</span>
          <span>AgriTech</span>
          <span>Marketplace</span>
          <span>AI + Blockchain</span>
        </div>
      </section>

      <section className="card">
        <h2>Core Flow</h2>
        <p className="flow">
          Farmer Inputs Data -> AI Generates Carbon Score -> Blockchain Verification ->
          Marketplace Listing -> Buyer Purchases Verified Carbon Asset
        </p>
      </section>

      <section className="grid">
        {architecture.map((block) => (
          <article className="card" key={block.title}>
            <h3>{block.title}</h3>
            <p>{block.purpose}</p>
            <ul>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="card split">
        <div>
          <h2>Carbon Equity Index (CEI)</h2>
          <p>
            CEI measures how equitable and decentralized the market is by tracking producer
            revenue share, credit concentration, and inclusivity.
          </p>
          <ul>
            <li>Percent of carbon revenue flowing to small-scale producers</li>
            <li>Distribution concentration of credit ownership</li>
            <li>Market inclusivity score over time</li>
          </ul>
        </div>
        <div>
          <h2>Value Proposition</h2>
          <p>
            Replace opaque, manual, corporate-skewed verification with algorithmic trust
            (AI-standardized measurement) and cryptographic trust (immutable verification).
          </p>
        </div>
      </section>

      <section className="grid two-col">
        <article className="card">
          <h2>Problems Solved</h2>
          <ul>
            {problemsSolved.map((problem) => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h2>Technical Components</h2>
          <ul>
            {technicalComponents.map((component) => (
              <li key={component}>{component}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}

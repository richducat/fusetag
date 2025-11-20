const connectors = [
  {
    name: "Google",
    description: "Sync your website, search keywords, and conversion signals directly with Google in a single click.",
    label: "Click here to connect your website to Google",
    color: "#e8f0fe",
    icon: "🔗",
    tag: "Search & Web",
  },
  {
    name: "Facebook Ads",
    description: "Bring in your Meta pixels and audiences. We keep permissions simple and transparent.",
    label: "Click here to connect your website to Facebook Ads",
    color: "#e7e9ff",
    icon: "📣",
    tag: "Paid Social",
  },
  {
    name: "Google Ads",
    description: "Push conversions, audiences, and budgets into Google Ads with a guided workflow.",
    label: "Click here to connect your website to Google Ads",
    color: "#e5f3ff",
    icon: "🎯",
    tag: "Paid Search",
  },
  {
    name: "Google Analytics",
    description: "Collect clean analytics events and ship them to GA4 without touching any code.",
    label: "Click here to connect your website to Google Analytics",
    color: "#f9f3e6",
    icon: "📊",
    tag: "Analytics",
  },
  {
    name: "PostHog",
    description: "Connect experiments, product analytics, and feature flags in under a minute.",
    label: "Click here to connect your website to PostHog",
    color: "#f0e8ff",
    icon: "🦔",
    tag: "Product",
  },
  {
    name: "Spotify Ads",
    description: "Pipe your audiences and attribution directly into Spotify's ad platform.",
    label: "Click here to connect your website to Spotify Ads",
    color: "#e9f8f0",
    icon: "🎵",
    tag: "Audio",
  },
  {
    name: "Google Tag Manager",
    description: "Drop in GTM without dev cycles. Publish tags confidently with live previews.",
    label: "Click here to connect your website to Google Tag Manager",
    color: "#e8f1ff",
    icon: "🏷️",
    tag: "Tags",
  },
  {
    name: "Apple Ads",
    description: "Send postbacks, conversions, and SKAdNetwork events straight into Apple Ads.",
    label: "Click here to connect your website to Apple Ads",
    color: "#f0f4ff",
    icon: "🍏",
    tag: "Mobile",
  },
];

function ConnectorCard({ connector }) {
  return (
    <article className="card" style={{ background: connector.color }}>
      <div className="pill" style={{ background: "#fff" }}>
        <span>{connector.icon}</span>
        <span>{connector.tag}</span>
      </div>
      <div className="title">
        <h3>{connector.name}</h3>
        <button className="btn btn-secondary" aria-label={`Help connecting ${connector.name}`}>
          Help
        </button>
      </div>
      <p>{connector.description}</p>
      <div className="cta">
        <span>{connector.label}</span>
        <small>1 click</small>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <div className="page-shell">
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">Google-inspired simplicity</div>
            <h1>Connect your entire marketing stack without the technical maze.</h1>
            <p>
              Pick a platform, tap connect, and we handle the wiring. No snippets, no complex
              onboarding, just clean buttons that get you live.
            </p>
            <div className="actions">
              <button className="btn btn-primary">Start connecting</button>
              <button className="btn btn-secondary">Schedule a guided setup</button>
            </div>
            <div className="badges">
              <div className="badge">Zero code required</div>
              <div className="badge">Live status checks</div>
              <div className="badge">SOC2-ready security</div>
            </div>
          </div>
          <div className="hero-card">
            <h3>Connection progress</h3>
            <div className="progress" aria-hidden="true">
              <div className="value" />
            </div>
            <div className="badge">Most teams finish in &lt; 5 minutes</div>
            <div className="badge" style={{ background: "#e9f8f0", color: "#0e7c3b" }}>
              ⭐ Support available 24/7
            </div>
            <p className="footer-note">
              Prefer a human? We can complete every step for you while you watch.
            </p>
          </div>
        </section>

        <div className="section-title">
          <h2>One-click connections</h2>
          <span className="badge">Pick a partner and launch</span>
        </div>

        <section className="connect-grid">
          {connectors.map((connector) => (
            <ConnectorCard key={connector.name} connector={connector} />
          ))}
        </section>
      </div>
    </main>
  );
}

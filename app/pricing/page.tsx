import KukieShell from "../_components/KukieShell";

export const metadata = {
  title: "Pricing | Main Street Compass",
  description:
    "Simple, transparent pricing for restaurant marketing. A flat $200–$300/month management fee. No setup fees, no contracts, no per-order fees, no commission, no guest fees. Keep your POS.",
};

/* ─── Stroke-only line icons (no emoji) ─────────────────────── */
const IcoArrow = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);
const IcoCheck = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
const IcoNo = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M6.5 6.5l11 11" />
  </svg>
);

const NO_FEES = [
  "No per-order fees",
  "No commission",
  "No guest fees",
  "No setup fee",
  "No contract",
];

const STARTER = ["Professional website", "Domain & hosting", "Google Business Profile", "Local SEO", "Monthly report", "2 content updates/month"];
const GROWTH = ["Everything in Starter", "Google Ads management", "Keyword targeting", "Call & lead tracking", "Catering landing page", "Unlimited content updates"];

const COMPARE: { label: string; us: string; them: string }[] = [
  { label: "What you pay", us: "One flat monthly fee", them: "Monthly fee + per-order + guest fees" },
  { label: "Commitment", us: "No contract, cancel any time", them: "Often locked into an annual contract" },
  { label: "Your POS", us: "Keep the system you already use", them: "Push you onto their platform" },
  { label: "What it’s built to do", us: "Get you found by new customers", them: "Help you take orders" },
];

const FAQ: { q: string; a: string }[] = [
  { q: "Are there setup fees?", a: "None. You pay the flat monthly fee and nothing else to get started. We build your website, listings, and campaigns as part of the service." },
  { q: "Am I locked into a contract?", a: "No. Everything is month to month. We earn your business every single month, and you can cancel any time." },
  { q: "Is the ad budget included?", a: "No, and that is on purpose. Your Google Ads budget is separate, you set it, and it goes straight to Google. We never mark it up or take a cut of it." },
  { q: "Can I cancel?", a: "Yes, any time, no penalty. Give us a heads-up and we will wrap things up cleanly." },
];

export default function PricingPage() {
  return (
    <KukieShell>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-panel rv" style={{ textAlign: "center" }}>
            <span className="eyebrow">PRICING</span>
            <h1 style={{ margin: "14px auto 0", maxWidth: 820 }}>
              Simple, <span className="accent">transparent pricing.</span>
            </h1>
            <p className="sub" style={{ margin: "22px auto 30px", maxWidth: 600 }}>
              One flat monthly fee, everything done for you. No setup fees, no contracts, and never a cut of your
              sales. You always know exactly what you pay.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <a className="btn btn-primary" href="/contact">Get a free revenue audit <IcoArrow /></a>
              <a className="btn-text" href="/services">See what&apos;s included</a>
            </div>
          </div>
        </div>
      </section>

      <div className="wash">

        {/* ── WHAT YOU ACTUALLY PAY ─────────────────────────── */}
        <section className="block">
          <div className="inner">
            <div className="sec-head rv">
              <span className="eyebrow">WHAT YOU ACTUALLY PAY</span>
              <h2>A flat fee. <span className="accent">And your own ad budget.</span></h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18, marginBottom: 24 }}>
              <div className="card rv" style={{ padding: "30px 32px 34px" }}>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 14 }}>
                  Your management fee
                </div>
                <div style={{ marginBottom: 12 }}>
                  <span style={{ fontSize: 48, fontWeight: 800, color: "var(--ink)", letterSpacing: "-.04em" }}>$200–$300</span>
                  <span style={{ fontSize: 16, color: "var(--body)", marginLeft: 6 }}>/month</span>
                </div>
                <p style={{ fontSize: 15, color: "var(--body)", lineHeight: 1.65, margin: 0 }}>
                  One flat fee covers the whole system: website, Google profile, local SEO, reporting, and (on Growth)
                  managed ads. Done for you, month to month.
                </p>
              </div>
              <div className="card rv" style={{ padding: "30px 32px 34px", background: "var(--mock)" }}>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--p-amber-fg)", marginBottom: 14 }}>
                  Your ad budget (Growth)
                </div>
                <div style={{ marginBottom: 12 }}>
                  <span style={{ fontSize: 48, fontWeight: 800, color: "var(--ink)", letterSpacing: "-.04em" }}>You set it</span>
                </div>
                <p style={{ fontSize: 15, color: "var(--body)", lineHeight: 1.65, margin: 0 }}>
                  If you run Google Ads, your budget is separate and stays yours. It goes straight to Google, and we never
                  mark it up or take a cut. Start small, scale when it works.
                </p>
              </div>
            </div>

            {/* No-fees strip */}
            <div className="rv" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {NO_FEES.map((f) => (
                <span
                  key={f}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "#fff", border: "1px solid var(--line)", borderRadius: 12,
                    padding: "11px 16px", fontSize: 14, fontWeight: 700, color: "var(--ink)",
                  }}
                >
                  <span style={{ color: "var(--p-amber-fg)", display: "inline-flex" }}><IcoNo /></span>
                  {f}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE TWO PLANS ─────────────────────────────────── */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="inner">
            <div className="sec-head rv">
              <span className="eyebrow">CHOOSE YOUR PLAN</span>
              <h2>Two plans. <span className="accent">Both flat, both fair.</span></h2>
            </div>
            <div className="price-grid">
              {/* Starter */}
              <div className="card plan rv">
                <span className="pill amber">Starter</span>
                <div className="amt"><b>$200</b><span>/month</span></div>
                <div className="desc">Get found online</div>
                <ul>
                  {STARTER.map((item) => (
                    <li key={item}><span className="ck"><IcoCheck /></span>{item}</li>
                  ))}
                </ul>
                <a className="btn btn-ghost" style={{ width: "100%", justifyContent: "center" }} href="/contact">Get started</a>
              </div>

              {/* Growth */}
              <div className="card plan hot rv">
                <span className="badge2 pill blue"><span className="dot"></span>Most popular</span>
                <span className="pill blue">Growth</span>
                <div className="amt"><b>$300</b><span>/month</span></div>
                <div className="desc">Full capture system</div>
                <ul>
                  {GROWTH.map((item) => (
                    <li key={item}><span className="ck"><IcoCheck /></span>{item}</li>
                  ))}
                </ul>
                <a className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} href="/contact">Get started <IcoArrow /></a>
              </div>
            </div>
            <p style={{ textAlign: "center", fontSize: 14.5, color: "var(--body)", marginTop: 26 }}>
              Not sure which plan fits?{" "}
              <a href="/contact" style={{ color: "var(--accent)", fontWeight: 700 }}>Let&apos;s talk.</a> We&apos;ll help you figure it out.
            </p>
          </div>
        </section>

        {/* ── HONEST COMPARISON ─────────────────────────────── */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="inner">
            <div className="sec-head rv">
              <span className="eyebrow">AN HONEST COMPARISON</span>
              <h2>How we stack up <span className="accent">against a typical ordering platform.</span></h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
              {COMPARE.map((row) => (
                <div key={row.label} className="card rv" style={{ padding: "26px 28px 28px" }}>
                  <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--faint)", marginBottom: 16 }}>
                    {row.label}
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                    <span style={{ color: "var(--p-green-fg)", display: "inline-flex", marginTop: 2, flexShrink: 0 }}><IcoCheck /></span>
                    <span style={{ fontSize: 15, fontWeight: 700, color: "var(--ink)", lineHeight: 1.45 }}>{row.us}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{ color: "var(--p-amber-fg)", display: "inline-flex", marginTop: 2, flexShrink: 0 }}><IcoNo /></span>
                    <span style={{ fontSize: 15, color: "var(--body)", lineHeight: 1.45 }}>{row.them}</span>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, color: "var(--body)", marginTop: 22, maxWidth: 640, lineHeight: 1.6, textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
              A fair, general comparison. Every platform is different, and this is meant to show the difference in
              approach, not to call anyone out.
            </p>
          </div>
        </section>

        {/* ── MINI FAQ ──────────────────────────────────────── */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="inner">
            <div className="sec-head rv">
              <span className="eyebrow">COMMON QUESTIONS</span>
              <h2>The fine print, <span className="accent">in plain English.</span></h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
              {FAQ.map((item) => (
                <div key={item.q} className="card rv" style={{ padding: "26px 28px 28px" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--ink)", letterSpacing: "-.015em", margin: "0 0 10px" }}>{item.q}</h3>
                  <p style={{ fontSize: 14.5, color: "var(--body)", lineHeight: 1.65, margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
            <p style={{ textAlign: "center", fontSize: 14.5, color: "var(--body)", marginTop: 24 }}>
              More questions?{" "}
              <a href="/faq" style={{ color: "var(--accent)", fontWeight: 700 }}>Read the full FAQ.</a>
            </p>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────── */}
        <section className="block" style={{ paddingTop: 12 }}>
          <div className="wrap">
            <div className="cta-panel rv">
              <span className="eyebrow">GET STARTED</span>
              <h2>See what you&rsquo;re missing. <span className="accent">Free, before you pay a cent.</span></h2>
              <p>
                We&apos;ll audit your current online presence for free and show you exactly where new customers are
                slipping away. No contract, no pressure, just a clear picture of what a flat monthly fee could do.
              </p>
              <a className="btn btn-primary" href="/contact" style={{ fontSize: 16, padding: "16px 30px" }}>
                Get my free revenue audit <IcoArrow />
              </a>
            </div>
          </div>
        </section>

      </div>
    </KukieShell>
  );
}

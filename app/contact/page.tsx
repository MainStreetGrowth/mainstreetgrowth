import KukieShell from "../_components/KukieShell";
import KukieContactForm from "../_components/KukieContactForm";
import { SITE } from "../_lib/theme";

export const metadata = {
  title: "Contact | Main Street Compass",
  description:
    "Get a free revenue audit for your restaurant. We'll show you exactly what's costing you customers online. No cost, no obligation. Serving Mississippi & the Southeast.",
};

const EXPECT = [
  { n: "01", h: "Free revenue audit", b: "We review your search rankings, Google listing, website, and local competitors before we even get on the phone." },
  { n: "02", h: "Live in ~2 weeks", b: "Your website, Google profile, and ads are set up and running fast. No long, drawn-out process." },
  { n: "03", h: "No setup fees, no contract", b: "One flat monthly fee. Cancel any time. We earn your business every month." },
];

export default function ContactPage() {
  return (
    <KukieShell>
      <section className="hero">
        <div className="wrap">
          <div className="hero-panel rv">
            <div>
              <span className="eyebrow">GET STARTED</span>
              <h1 style={{ marginTop: 14 }}>
                Let&apos;s fill your tables. <span className="accent">Starting with a free audit.</span>
              </h1>
              <p className="sub" style={{ maxWidth: 560 }}>
                Tell us about your restaurant and we&apos;ll audit your current online presence for free, and show you exactly
                what&apos;s costing you customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="wash">
        <section className="block">
          <div className="inner">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "clamp(32px,5vw,64px)",
                alignItems: "start",
              }}
            >
              {/* Left: what to expect + details */}
              <div className="rv">
                <span className="eyebrow" style={{ color: "var(--p-green-fg)" }}>WHAT TO EXPECT</span>
                <div style={{ marginTop: 22, marginBottom: 32 }}>
                  {EXPECT.map(({ n, h, b }) => (
                    <div key={n} style={{ padding: "18px 0", borderTop: "1px solid var(--line)" }}>
                      <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                        <span style={{ fontSize: 18, fontWeight: 800, color: "var(--faint)", flexShrink: 0 }}>{n}</span>
                        <div>
                          <div style={{ fontSize: 16, fontWeight: 700, color: "var(--ink)", marginBottom: 4 }}>{h}</div>
                          <p style={{ fontSize: 14, color: "var(--body)", lineHeight: 1.7, margin: 0 }}>{b}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: "1px solid var(--line)", paddingTop: 22, display: "flex", flexDirection: "column", gap: 10 }}>
                  <a href={SITE.phoneHref} style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--ink)", fontSize: 15, fontWeight: 600 }}>
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--accent)" strokeWidth={1.8} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.6a1 1 0 01.95.68l1.2 3.4a1 1 0 01-.27 1.06l-1.6 1.5a13 13 0 006.1 6.1l1.5-1.6a1 1 0 011.06-.27l3.4 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2A16 16 0 013 5z" />
                    </svg>
                    {SITE.phone}
                  </a>
                  <a href={`mailto:${SITE.email}`} style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--ink)", fontSize: 15, fontWeight: 600 }}>
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--accent)" strokeWidth={1.8} aria-hidden="true">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
                    </svg>
                    {SITE.email}
                  </a>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--body)", fontSize: 15 }}>
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--accent)" strokeWidth={1.8} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                    {SITE.area}
                  </div>
                </div>
              </div>

              {/* Right: form */}
              <div className="rv">
                <KukieContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </KukieShell>
  );
}

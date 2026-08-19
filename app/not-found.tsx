import KukieShell from "./_components/KukieShell";

const Arrow = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function NotFound() {
  return (
    <KukieShell>
      <div className="wash">
        <section className="block">
          <div className="inner" style={{ textAlign: "center" }}>
            <div style={{ maxWidth: 560, margin: "0 auto" }} className="rv">
              <div
                style={{
                  fontSize: "clamp(4.5rem,16vw,8rem)",
                  fontWeight: 800,
                  color: "var(--accent)",
                  letterSpacing: "-0.05em",
                  lineHeight: 0.9,
                  margin: 0,
                }}
              >
                404
              </div>
              <h1
                style={{
                  fontSize: "clamp(1.9rem,5vw,2.8rem)",
                  fontWeight: 800,
                  color: "var(--ink)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  margin: "22px 0 14px",
                }}
              >
                Page not found
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--body)", margin: "0 auto 34px", maxWidth: 420 }}>
                The page you&apos;re looking for moved or never existed. Let&apos;s get you back on the map.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
                <a href="/" className="btn btn-primary">
                  Back home <Arrow />
                </a>
                <a href="/contact" className="btn btn-ghost">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </KukieShell>
  );
}

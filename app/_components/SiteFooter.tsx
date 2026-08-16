import CompassMark from "./CompassMark";
import { theme as T, SITE } from "../_lib/theme";

const COLS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Company",
    links: [
      { href: "/services", label: "Services" },
      { href: "/pricing", label: "Pricing" },
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

function IcoFacebook() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function IcoInstagram() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function SiteFooter() {
  const linkStyle: React.CSSProperties = {
    color: "rgba(255,248,244,0.66)",
    textDecoration: "none",
    fontSize: 14,
    lineHeight: 2.15,
  };
  const colTitle: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: T.sage,
    marginBottom: 12,
  };
  const social: React.CSSProperties = {
    width: 34,
    height: 34,
    borderRadius: "50%",
    border: "1px solid rgba(255,248,244,0.16)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(255,248,244,0.72)",
    textDecoration: "none",
  };

  // Deeper shade of the brand forest — same hue family, reads as depth (not a foreign block).
  const footerBg = "#16291f";
  return (
    <footer style={{ background: footerBg, color: T.onInk, borderTop: "1px solid rgba(255,248,244,0.1)" }}>
      {/* thin warm accent to separate from the section above */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${T.terracotta} 0%, ${T.terracotta} 120px, transparent 120px)` }} />

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "clamp(52px,7vw,76px) 24px 0" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(40px,6vw,72px)", justifyContent: "space-between" }}>
          {/* Brand */}
          <div style={{ flex: "1 1 300px", maxWidth: 360 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <CompassMark size={30} ring={T.cream} north={T.terracotta} south={T.cream} hub={footerBg} />
              <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: "-0.02em" }}>{SITE.name}</span>
            </div>
            <p style={{ fontSize: 14.5, color: "rgba(255,248,244,0.62)", lineHeight: 1.75, margin: "0 0 22px", maxWidth: 300 }}>
              {SITE.tagline} Serving {SITE.area}.
            </p>
            <a
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: T.terracotta,
                color: T.charcoal,
                padding: "12px 22px",
                borderRadius: 4,
                fontSize: 13.5,
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Get a free revenue audit
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              <a href={SITE.social.facebook} aria-label="Facebook" style={social}><IcoFacebook /></a>
              <a href={SITE.social.instagram} aria-label="Instagram" style={social}><IcoInstagram /></a>
            </div>
          </div>

          {/* Link columns + contact, kept together and balanced on the right */}
          <div
            style={{
              flex: "1 1 460px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "clamp(28px,4vw,48px)",
            }}
          >
            {COLS.map((col) => (
              <div key={col.title}>
                <div style={colTitle}>{col.title}</div>
                {col.links.map((l) => (
                  <a key={l.href} href={l.href} style={{ ...linkStyle, display: "block" }}>{l.label}</a>
                ))}
              </div>
            ))}

            <div>
              <div style={colTitle}>Get in touch</div>
              <a href={SITE.phoneHref} style={{ ...linkStyle, display: "block" }}>{SITE.phone}</a>
              <a href={`mailto:${SITE.email}`} style={{ ...linkStyle, display: "block", wordBreak: "break-word" }}>{SITE.email}</a>
              <div style={{ fontSize: 14, color: "rgba(255,248,244,0.66)", lineHeight: 2.15 }}>{SITE.area}</div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "clamp(40px,5vw,56px)",
            padding: "22px 0",
            borderTop: "1px solid rgba(255,248,244,0.1)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 12.5, color: "rgba(255,248,244,0.48)", margin: 0 }}>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="/privacy" style={{ fontSize: 12.5, color: "rgba(255,248,244,0.48)", textDecoration: "none" }}>Privacy</a>
            <a href="/terms" style={{ fontSize: 12.5, color: "rgba(255,248,244,0.48)", textDecoration: "none" }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

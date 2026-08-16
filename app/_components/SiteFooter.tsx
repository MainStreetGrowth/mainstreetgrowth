import CompassMark from "./CompassMark";
import { theme as T, SITE } from "../_lib/theme";

const EXPLORE: { href: string; label: string }[] = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

function IcoFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function IcoInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function SiteFooter() {
  // Deeper shade of the brand forest — same hue family, reads as depth (not a foreign block).
  const footerBg = "#16291f";
  const link: React.CSSProperties = {
    color: "rgba(255,248,244,0.68)",
    textDecoration: "none",
    fontSize: 14,
    lineHeight: 1.9,
  };
  const colTitle: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.13em",
    textTransform: "uppercase",
    color: T.sage,
    marginBottom: 10,
  };
  const social: React.CSSProperties = {
    width: 32,
    height: 32,
    borderRadius: "50%",
    border: "1px solid rgba(255,248,244,0.18)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(255,248,244,0.75)",
    textDecoration: "none",
  };

  return (
    <footer style={{ background: footerBg, color: T.onInk, borderTop: "1px solid rgba(255,248,244,0.1)" }}>
      {/* thin warm accent to separate from the section above */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${T.terracotta} 0%, ${T.terracotta} 120px, transparent 120px)` }} />

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "clamp(36px,4vw,48px) 24px 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(240px, 1fr) auto auto",
            columnGap: "clamp(40px,6vw,88px)",
            rowGap: 32,
            alignItems: "start",
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 340 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <CompassMark size={28} ring={T.cream} north={T.terracotta} south={T.cream} hub={footerBg} />
              <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: "-0.02em" }}>{SITE.name}</span>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,248,244,0.6)", lineHeight: 1.65, margin: "0 0 16px", maxWidth: 300 }}>
              {SITE.tagline} Serving {SITE.area}.
            </p>
            <div style={{ display: "flex", gap: 9 }}>
              <a href={SITE.social.facebook} aria-label="Facebook" style={social}><IcoFacebook /></a>
              <a href={SITE.social.instagram} aria-label="Instagram" style={social}><IcoInstagram /></a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <div style={colTitle}>Explore</div>
            {EXPLORE.map((l) => (
              <a key={l.href} href={l.href} style={{ ...link, display: "block" }}>{l.label}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={colTitle}>Contact</div>
            <a href={SITE.phoneHref} style={{ ...link, display: "block" }}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} style={{ ...link, display: "block", wordBreak: "break-word" }}>{SITE.email}</a>
            <div style={{ ...link }}>{SITE.area}</div>
          </div>
        </div>

        <div
          style={{
            marginTop: "clamp(28px,3.5vw,40px)",
            padding: "18px 0",
            borderTop: "1px solid rgba(255,248,244,0.1)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 12.5, color: "rgba(255,248,244,0.5)", margin: 0 }}>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="/privacy" style={{ fontSize: 12.5, color: "rgba(255,248,244,0.5)", textDecoration: "none" }}>Privacy</a>
            <a href="/terms" style={{ fontSize: 12.5, color: "rgba(255,248,244,0.5)", textDecoration: "none" }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

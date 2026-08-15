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
      { href: "/contact", label: "Contact" },
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

export default function SiteFooter() {
  const linkStyle: React.CSSProperties = { color: "rgba(255,248,244,0.7)", textDecoration: "none", fontSize: 14, lineHeight: 2.1 };
  return (
    <footer style={{ background: T.ink, color: T.onInk }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "clamp(48px,7vw,72px) 24px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 40 }}>
          {/* Brand */}
          <div style={{ minWidth: 220 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <CompassMark size={30} ring={T.cream} north={T.terracotta} south={T.cream} hub={T.ink} />
              <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: "-0.02em" }}>{SITE.name}</span>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,248,244,0.6)", lineHeight: 1.7, margin: "0 0 18px", maxWidth: 280 }}>
              {SITE.tagline} Serving {SITE.area}.
            </p>
            <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 7, background: T.onInk, color: T.ink, padding: "10px 20px", borderRadius: 4, fontSize: 13, fontWeight: 800, textDecoration: "none" }}>
              Get a free revenue audit
            </a>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.sage, marginBottom: 10 }}>{col.title}</div>
              {col.links.map((l) => (
                <a key={l.href} href={l.href} style={{ ...linkStyle, display: "block" }}>{l.label}</a>
              ))}
            </div>
          ))}

          {/* Contact */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.sage, marginBottom: 10 }}>Get in touch</div>
            <a href={SITE.phoneHref} style={{ ...linkStyle, display: "block" }}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} style={{ ...linkStyle, display: "block" }}>{SITE.email}</a>
            <div style={{ fontSize: 14, color: "rgba(255,248,244,0.7)", lineHeight: 2.1 }}>{SITE.area}</div>
          </div>
        </div>

        <div style={{ marginTop: 48, padding: "22px 0", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <p style={{ fontSize: 12.5, color: "rgba(255,248,244,0.5)", margin: 0 }}>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 18 }}>
            <a href="/privacy" style={{ fontSize: 12.5, color: "rgba(255,248,244,0.5)", textDecoration: "none" }}>Privacy</a>
            <a href="/terms" style={{ fontSize: 12.5, color: "rgba(255,248,244,0.5)", textDecoration: "none" }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

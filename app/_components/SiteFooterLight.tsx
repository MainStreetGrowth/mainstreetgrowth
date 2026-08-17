import CompassMark from "./CompassMark";
import { SITE } from "../_lib/theme";

/* Light footer for the /light variant — clean, airy, kukie-style. */
const INK = "#16261d";
const GREEN = "#3b6933";
const TERRA = "#df8752";
const MUTED = "rgba(22,38,29,0.6)";
const FAINT = "rgba(22,38,29,0.42)";
const LINE = "rgba(22,38,29,0.08)";

const EXPLORE = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

function IcoFacebook() {
  return (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" /></svg>);
}
function IcoInstagram() {
  return (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg>);
}

export default function SiteFooterLight() {
  const link: React.CSSProperties = { color: MUTED, textDecoration: "none", fontSize: 14, lineHeight: 2 };
  const colTitle: React.CSSProperties = { fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: FAINT, marginBottom: 12 };
  const social: React.CSSProperties = { width: 34, height: 34, borderRadius: 999, border: `1px solid ${LINE}`, display: "flex", alignItems: "center", justifyContent: "center", color: MUTED, textDecoration: "none" };

  return (
    <footer style={{ background: "#ffffff", borderTop: `1px solid ${LINE}` }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "clamp(40px,5vw,56px) 24px 0" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(36px,6vw,72px)", justifyContent: "space-between" }}>
          <div style={{ maxWidth: 320 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <CompassMark size={28} ring={INK} north={TERRA} south={INK} hub="#ffffff" />
              <span style={{ fontWeight: 800, fontSize: 16, color: INK, letterSpacing: "-0.02em" }}>{SITE.name}</span>
            </div>
            <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, margin: "0 0 18px", maxWidth: 300 }}>{SITE.tagline} Serving {SITE.area}.</p>
            <div style={{ display: "flex", gap: 9 }}>
              <a href={SITE.social.facebook} aria-label="Facebook" style={social}><IcoFacebook /></a>
              <a href={SITE.social.instagram} aria-label="Instagram" style={social}><IcoInstagram /></a>
            </div>
          </div>

          <div style={{ display: "flex", gap: "clamp(40px,6vw,72px)", flexWrap: "wrap" }}>
            <div>
              <div style={colTitle}>Explore</div>
              {EXPLORE.map(l => <a key={l.href} href={l.href} style={{ ...link, display: "block" }}>{l.label}</a>)}
            </div>
            <div>
              <div style={colTitle}>Contact</div>
              <a href={SITE.phoneHref} style={{ ...link, display: "block" }}>{SITE.phone}</a>
              <a href={`mailto:${SITE.email}`} style={{ ...link, display: "block", wordBreak: "break-word" }}>{SITE.email}</a>
              <div style={{ ...link }}>{SITE.area}</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "clamp(32px,4vw,44px)", padding: "20px 0", borderTop: `1px solid ${LINE}`, display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <p style={{ fontSize: 12.5, color: FAINT, margin: 0 }}>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="/privacy" style={{ fontSize: 12.5, color: FAINT, textDecoration: "none" }}>Privacy</a>
            <a href="/terms" style={{ fontSize: 12.5, color: FAINT, textDecoration: "none" }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";
import { useState, useEffect } from "react";
import CompassMark from "./CompassMark";
import { NAV_LINKS } from "../_lib/theme";

/* Kukie-style light header for the /light variant:
   white translucent bar, bold dark wordmark, clean links, solid pill CTA. */
const INK = "#16261d";
const GREEN = "#3b6933";
const TERRA = "#df8752";
const MUTED = "rgba(22,38,29,0.66)";

const Arrow = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function SiteNavLight() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 900);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cta: React.CSSProperties = {
    display: "inline-flex", alignItems: "center", gap: 8, background: GREEN, color: "#fff8f4",
    padding: "11px 20px", borderRadius: 12, fontSize: 14, fontWeight: 800, textDecoration: "none",
    boxShadow: "0 10px 22px -12px rgba(59,105,51,0.75)",
  };

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(255,255,255,0.9)",
      backdropFilter: "saturate(1.1) blur(10px)",
      borderBottom: scrolled ? "1px solid rgba(22,38,29,0.07)" : "1px solid transparent",
      transition: "border-color 0.2s",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 74, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/light" aria-label="Main Street Compass home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <CompassMark size={28} ring={INK} north={TERRA} south={INK} hub="#ffffff" />
          <span style={{ fontWeight: 800, fontSize: 16, color: INK, letterSpacing: "-0.02em" }}>Main Street Compass</span>
        </a>

        {!mobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} style={{ fontSize: 14.5, fontWeight: 600, textDecoration: "none", color: MUTED }}>{label}</a>
            ))}
            <a href="tel:+16015550100" style={{ fontSize: 14.5, fontWeight: 700, textDecoration: "none", color: INK }}>Call us</a>
            <a href="/contact" style={cta}>Get a free audit <Arrow /></a>
          </nav>
        )}

        {mobile && (
          <button onClick={() => setOpen(o => !o)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}
            style={{ background: "transparent", border: "none", cursor: "pointer", color: INK, padding: 6, display: "flex" }}>
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        )}
      </div>

      {mobile && open && (
        <nav style={{ background: "rgba(255,255,255,0.96)", backdropFilter: "blur(8px)", borderTop: "1px solid rgba(22,38,29,0.06)", padding: "12px 24px 22px", display: "flex", flexDirection: "column", gap: 2 }}>
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} style={{ fontSize: 16, fontWeight: 600, textDecoration: "none", padding: "13px 4px", borderBottom: "1px solid rgba(22,38,29,0.06)", color: INK }}>{label}</a>
          ))}
          <a href="/contact" style={{ ...cta, marginTop: 14, justifyContent: "center", padding: "14px 20px", fontSize: 15 }}>Get a free audit <Arrow /></a>
        </nav>
      )}
    </header>
  );
}

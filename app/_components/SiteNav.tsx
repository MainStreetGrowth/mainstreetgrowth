"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CompassMark from "./CompassMark";
import { theme as T, NAV_LINKS } from "../_lib/theme";

const Arrow = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 860);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, background: T.ink, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" aria-label="Main Street Compass — home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <CompassMark size={28} ring={T.onInk} north={T.terracotta} south={T.onInk} hub={T.ink} />
          <span style={{ fontWeight: 800, fontSize: 15, color: T.onInk, letterSpacing: "-0.02em" }}>Main Street Compass</span>
        </a>

        {!mobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: 30 }}>
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} style={{
                fontSize: 14, fontWeight: 600, textDecoration: "none",
                color: isActive(href) ? T.sage : "rgba(255,248,244,0.72)",
              }}>{label}</a>
            ))}
            <a href="/contact" style={{ background: T.onInk, color: T.ink, padding: "9px 20px", borderRadius: 4, fontSize: 13, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 7, textDecoration: "none" }}>
              Free revenue audit <Arrow />
            </a>
          </nav>
        )}

        {mobile && (
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            style={{ background: "transparent", border: "none", cursor: "pointer", color: T.onInk, padding: 6, display: "flex" }}
          >
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        )}
      </div>

      {mobile && open && (
        <nav style={{ background: T.ink, borderTop: "1px solid rgba(255,255,255,0.08)", padding: "12px 24px 22px", display: "flex", flexDirection: "column", gap: 4 }}>
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} style={{
              fontSize: 16, fontWeight: 600, textDecoration: "none", padding: "12px 4px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              color: isActive(href) ? T.sage : T.onInk,
            }}>{label}</a>
          ))}
          <a href="/contact" style={{ marginTop: 14, background: T.onInk, color: T.ink, padding: "13px 20px", borderRadius: 4, fontSize: 15, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, textDecoration: "none" }}>
            Free revenue audit <Arrow />
          </a>
        </nav>
      )}
    </header>
  );
}

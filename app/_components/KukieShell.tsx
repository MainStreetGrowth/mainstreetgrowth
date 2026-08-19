"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CSS, PALETTES } from "./KukieVariant";

/* Shared kukie-olive shell: scope + styles + nav + footer + scroll/reveal effects.
   Every non-home page renders its content as children inside this. */

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

const Mark = () => (
  <span className="mark">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}><circle cx="12" cy="12" r="9" /><path d="M15 9l-2.5 5.5L9 15l2.5-5.5z" fill="currentColor" stroke="none" /></svg>
  </span>
);
const Arrow = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
);
const IcoFacebook = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" /></svg>);
const IcoInstagram = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg>);

export default function KukieShell({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    root.querySelectorAll(".rv").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = (Math.min(i % 4, 3) * 60) + "ms";
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  const active = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="kk" ref={rootRef} style={PALETTES.olive}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="wrap nav-in">
          <a href="/" className="brand"><Mark />Main Street Compass</a>
          <nav className="nav-links">
            {NAV.map((n) => (
              <a key={n.href} className={`link${active(n.href) ? " active" : ""}`} href={n.href} aria-current={active(n.href) ? "page" : undefined}>{n.label}</a>
            ))}
          </nav>
          <div className="nav-cta nav-links">
            <a className="link" href="tel:+16015550100">Call us</a>
            <a className="btn btn-primary" href="/contact">Get a free audit <Arrow /></a>
          </div>
          <button className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" /> : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <nav style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(8px)", borderTop: "1px solid var(--line)", padding: "12px 24px 22px", display: "flex", flexDirection: "column", gap: 2 }}>
            {NAV.map((n) => {
              const on = active(n.href);
              return (
                <a key={n.href} href={n.href} aria-current={on ? "page" : undefined} style={{ fontSize: 16, fontWeight: on ? 800 : 600, padding: "12px 4px", borderBottom: "1px solid var(--line)", color: on ? "var(--accent)" : "var(--ink)" }}>{n.label}</a>
              );
            })}
            <a className="btn btn-primary" href="/contact" style={{ marginTop: 14, justifyContent: "center" }}>Get a free audit <Arrow /></a>
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <a href="/" className="brand"><Mark />Main Street Compass</a>
              <p>Customer acquisition for small-town restaurants. Serving Mississippi and the Southeast.</p>
              <div style={{ display: "flex", gap: 9 }}>
                <a href="https://facebook.com/mainstreetcompass" aria-label="Facebook" style={{ width: 34, height: 34, borderRadius: 999, border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--body)" }}><IcoFacebook /></a>
                <a href="https://instagram.com/mainstreetcompass" aria-label="Instagram" style={{ width: 34, height: 34, borderRadius: 999, border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--body)" }}><IcoInstagram /></a>
              </div>
            </div>
            <div className="foot-cols">
              <div>
                <h4>Explore</h4>
                <a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/about">About</a><a href="/blog">Blog</a><a href="/faq">FAQ</a><a href="/contact">Contact</a>
              </div>
              <div>
                <h4>Contact</h4>
                <a href="tel:+16015550100">(601) 555-0100</a><a href="mailto:hello@mainstreetcompass.com">hello@mainstreetcompass.com</a><a href="#">Mississippi and the Southeast</a>
              </div>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© {new Date().getFullYear()} Main Street Compass. All rights reserved.</span>
            <span><a href="/privacy">Privacy</a><a href="/terms">Terms</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}

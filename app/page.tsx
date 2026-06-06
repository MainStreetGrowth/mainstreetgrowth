"use client";
import { useState, useEffect, useRef } from "react";

/* ─── Scroll reveal hook ───────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─── SVG icons ────────────────────────────────────────────── */
const IcoGlobe = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const IcoMap = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>;
const IcoSearch = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="M21 21l-4.35-4.35"/></svg>;
const IcoMega = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>;
const IcoBar = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>;
const IcoGear = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>;
const IcoCheck = () => <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>;
const IcoArrow = () => <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>;

/* ─── Data ─────────────────────────────────────────────────── */
const MARQUEE = [
  "The Magnolia Café","River Bend BBQ","Cotton Row Diner",
  "Delta Blues Kitchen","Porch & Table","Red River Smokehouse",
  "Southern Roots Kitchen","Main Street Diner",
];


const SERVICES = [
  { Icon: IcoGlobe, title: "Professional Website",       body: "Clean, fast, mobile-friendly — menus, hours, photos, contact. Hosted and maintained for you, forever.", visual: "website" },
  { Icon: IcoMap,   title: "Google Business Profile",    body: "Optimized listing so you appear on Google Maps when locals search for food nearby.", visual: "map" },
  { Icon: IcoSearch,title: "Local Search (SEO)",         body: "We improve your rankings so you appear before the competition — every single time.", visual: "search" },
  { Icon: IcoMega,  title: "Google Ads",                 body: "Targeted campaigns reaching people searching for exactly what you serve, right now.", visual: "ads" },
  { Icon: IcoBar,   title: "Lead & Call Tracking",       body: "Monthly reports: calls, visits, leads — always know exactly what you're getting.", visual: "tracking" },
  { Icon: IcoGear,  title: "Ongoing Maintenance",        body: "Updates, fixes, seasonal changes — handled without you lifting a finger.", visual: "maintenance" },
];

const STEPS = [
  { num: "01", title: "We build your entire online presence", body: "Professional website, domain, hosting, Google Business Profile — all set up, optimized, and live in about two weeks. You don't touch a thing." },
  { num: "02", title: "We run your marketing every month",    body: "Targeted Google Ads and local SEO keep you at the top of search results. Every month we refine what's working and cut what isn't." },
  { num: "03", title: "You see exactly what you're getting",  body: "A clear monthly report: how many calls, website visits, and leads. No mystery — just results you can measure." },
];

const TESTIMONIALS = [
  { quote: "We went from invisible to showing up first in Google for our area. Our Friday nights are now fully booked weeks in advance.", name: "Tommy R.", restaurant: "Red River Smokehouse", location: "Natchez, MS" },
  { quote: "I was skeptical — I've wasted money on marketing before. Within 6 weeks we were getting 30–40 extra calls a month.", name: "Maria L.", restaurant: "Delta Blues Café", location: "Greenville, MS" },
  { quote: "They built everything in two weeks and handled every detail. I didn't have to think about it once.", name: "James P.", restaurant: "Porch & Table", location: "Tupelo, MS" },
];

/* ─── Reusable pieces ──────────────────────────────────────── */
const Tag = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div style={{
    display: "inline-flex", alignItems: "center", gap: 7,
    background: light ? "rgba(122,171,110,0.2)" : "rgba(58,107,71,0.1)",
    color: light ? "var(--sage, #7aab6e)" : "var(--green, #3a6b47)",
    padding: "5px 14px", borderRadius: 99, fontSize: 12, fontWeight: 600,
    letterSpacing: "0.01em", marginBottom: 20,
  }}>
    {children}
  </div>
);

const Stars = ({ color = "var(--amber, #c4713e)" }: { color?: string }) => (
  <span style={{ color, fontSize: 15, letterSpacing: 1 }}>★★★★★</span>
);

const CheckItem = ({ label, light = false }: { label: string; light?: boolean }) => (
  <li style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: light ? "rgba(250,243,232,0.75)" : "var(--charcoal, #2a2118)" }}>
    <span style={{
      width: 20, height: 20, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
      background: light ? "rgba(122,171,110,0.3)" : "rgba(58,107,71,0.12)",
      color: light ? "var(--sage, #7aab6e)" : "var(--green, #3a6b47)",
    }}>
      <IcoCheck />
    </span>
    {label}
  </li>
);

/* ─── Service visuals ──────────────────────────────────────── */
function ServiceVisual({ type, flip }: { type: string; flip: boolean }) {
  const base: React.CSSProperties = {
    width: "100%", maxWidth: 380, aspectRatio: "4/3",
    borderRadius: 24, overflow: "hidden", position: "relative",
    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
    display: "flex", alignItems: "center", justifyContent: "center",
    marginLeft: flip ? "auto" : 0, marginRight: flip ? 0 : "auto",
  };

  if (type === "website") return (
    <div style={base}>
      <div style={{ width: "85%", borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.15)" }}>
        <div style={{ background: "#2a2a2a", padding: "7px 10px", display: "flex", alignItems: "center", gap: 5 }}>
          {["#ff6058","#ffc130","#27c940"].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }}/>)}
          <div style={{ flex: 1, background: "rgba(255,255,255,0.1)", borderRadius: 3, padding: "3px 8px", fontSize: 10, color: "rgba(255,255,255,0.4)", marginLeft: 6 }}>mainstreetdiner.com</div>
        </div>
        <div style={{ background: "linear-gradient(135deg, #1e3a2f, #3a6b47)", padding: 16 }}>
          <div style={{ height: 8, background: "rgba(255,255,255,0.9)", borderRadius: 2, width: 130, marginBottom: 6 }}/>
          <div style={{ height: 5, background: "rgba(255,255,255,0.4)", borderRadius: 2, width: 90, marginBottom: 14 }}/>
          <div style={{ height: 28, background: "rgba(122,171,110,0.7)", borderRadius: 99, width: 100 }}/>
        </div>
        <div style={{ background: "#faf3e8", padding: "12px 16px", display: "flex", gap: 10 }}>
          <div style={{ flex: 1 }}>
            {[88, 70, 80].map((w, i) => <div key={i} style={{ height: 5, background: "#d9c9b0", borderRadius: 2, marginBottom: 5, width: `${w}%` }}/>)}
          </div>
          <div style={{ width: 52, height: 52, background: "#f0e3cc", borderRadius: 6, flexShrink: 0 }}/>
        </div>
      </div>
    </div>
  );

  if (type === "map") return (
    <div style={base}>
      <div style={{ width: "85%", background: "rgba(255,255,255,0.08)", borderRadius: 14, padding: 18 }}>
        <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 99, padding: "8px 14px", display: "flex", gap: 8, alignItems: "center", marginBottom: 14 }}>
          <IcoSearch /><span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>restaurants near me</span>
        </div>
        <div style={{ background: "rgba(122,171,110,0.15)", border: "1px solid rgba(122,171,110,0.3)", borderRadius: 12, padding: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "var(--ivory, #faf3e8)", marginBottom: 3 }}>Main Street Diner</div>
              <div style={{ fontSize: 12 }}><Stars color="#ffc130" /> <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>142 reviews</span></div>
            </div>
            <span style={{ background: "var(--sage, #7aab6e)", color: "#1e3a2f", fontSize: 11, fontWeight: 800, padding: "2px 8px", borderRadius: 99 }}>#1</span>
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 6 }}>Open · Closes 9 PM · 0.3 mi</div>
        </div>
        <div style={{ borderRadius: 10, padding: 12, opacity: 0.3, border: "1px solid rgba(255,255,255,0.1)", marginTop: 8 }}>
          <div style={{ fontWeight: 600, fontSize: 13, color: "rgba(255,255,255,0.6)" }}>Town Square Grill</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>★★★★☆ · 38 reviews</div>
        </div>
      </div>
    </div>
  );

  if (type === "search") return (
    <div style={base}>
      <div style={{ width: "85%", display: "flex", flexDirection: "column", gap: 10 }}>
        {[
          { label: "Your Restaurant", rank: 1, pct: 92 },
          { label: "Competitor A",    rank: 2, pct: 51 },
          { label: "Competitor B",    rank: 3, pct: 34 },
        ].map(({ label, rank, pct }) => (
          <div key={rank} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: rank === 1 ? "var(--sage, #7aab6e)" : "rgba(255,255,255,0.3)", width: 16, textAlign: "right" }}>#{rank}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: rank === 1 ? "var(--ivory, #faf3e8)" : "rgba(255,255,255,0.35)", marginBottom: 4, fontWeight: rank === 1 ? 700 : 400 }}>{label}</div>
              <div style={{ height: 6, background: "rgba(255,255,255,0.07)", borderRadius: 99, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${pct}%`, background: rank === 1 ? "var(--sage, #7aab6e)" : "rgba(255,255,255,0.15)", borderRadius: 99, transition: "width 0.8s" }}/>
              </div>
            </div>
            <span style={{ fontSize: 11, color: rank === 1 ? "var(--sage, #7aab6e)" : "rgba(255,255,255,0.25)", fontWeight: 700 }}>{pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );

  if (type === "ads") return (
    <div style={base}>
      <div style={{ width: "85%" }}>
        <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 14, padding: 16, marginBottom: 10 }}>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginBottom: 8 }}>Active campaign · This week</div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {[["8.2k","Impressions"],["312","Clicks"],["47","Leads"]].map(([n, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: l === "Leads" ? "var(--amber, #c4713e)" : "var(--ivory, #faf3e8)", letterSpacing: "-0.02em" }}>{n}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {["Lunch specials","BBQ near me","Family dining"].map(kw => (
            <span key={kw} style={{ fontSize: 10, background: "rgba(122,171,110,0.15)", border: "1px solid rgba(122,171,110,0.25)", color: "var(--sage, #7aab6e)", padding: "3px 8px", borderRadius: 99, whiteSpace: "nowrap" }}>{kw}</span>
          ))}
        </div>
      </div>
    </div>
  );

  if (type === "tracking") return (
    <div style={base}>
      <div style={{ width: "85%" }}>
        {[
          { label: "Phone calls", val: 127, delta: "+34%", color: "var(--sage, #7aab6e)" },
          { label: "Website visits", val: 1840, delta: "+61%", color: "var(--amber, #c4713e)" },
          { label: "Direction requests", val: 94, delta: "+28%", color: "#7ab5d4" },
        ].map(({ label, val, delta, color }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>{label}</div>
              <div style={{ fontSize: 22, fontWeight: 900, color: "var(--ivory, #faf3e8)", letterSpacing: "-0.02em" }}>{val.toLocaleString()}</div>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color, background: `${color}20`, padding: "4px 10px", borderRadius: 99 }}>{delta}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // maintenance
  return (
    <div style={base}>
      <div style={{ width: "85%", display: "flex", flexDirection: "column", gap: 10 }}>
        {[
          { task: "Menu updated", time: "2 hours ago", done: true },
          { task: "Holiday hours set", time: "Yesterday", done: true },
          { task: "New photos added", time: "3 days ago", done: true },
          { task: "Google reviews replied", time: "This week", done: true },
        ].map(({ task, time, done }) => (
          <div key={task} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", background: "rgba(255,255,255,0.05)", borderRadius: 10 }}>
            <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(122,171,110,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--sage, #7aab6e)" }}>
              {done && <IcoCheck />}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: "var(--ivory, #faf3e8)", fontWeight: 600 }}>{task}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main component ───────────────────────────────────────── */
export default function Home() {
  useScrollReveal();

  const heroRef = useRef<HTMLElement>(null);
  const [showCTABar, setShowCTABar] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const up = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  useEffect(() => {
    const handleScroll = () => {
      const heroH = heroRef.current?.offsetHeight ?? 700;
      setShowCTABar(window.scrollY > heroH * 0.7);
      setNavScrolled(window.scrollY > 72);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const inp: React.CSSProperties = {
    width: "100%", padding: "13px 16px", borderRadius: 12,
    border: "1.5px solid rgba(42,33,24,0.15)", fontSize: 14,
    color: "var(--charcoal, #2a2118)", background: "white",
    outline: "none", boxSizing: "border-box",
    fontFamily: "var(--font-body, system-ui)", transition: "border-color 0.2s",
  };

  return (
    <div style={{ fontFamily: "var(--font-body, system-ui)", backgroundColor: "var(--forest, #1e3a2f)", color: "var(--charcoal, #2a2118)" }}>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "transparent",
        padding: navScrolled ? "10px 24px" : "0 32px",
        transition: "padding 0.45s cubic-bezier(0.16,1,0.3,1)",
      }}>
        {/* Pill container — transparent at top, rounded pill on scroll */}
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: navScrolled ? undefined : 64,
          padding: navScrolled ? "11px 22px" : "0",
          background: navScrolled ? "rgba(20,42,32,0.92)" : "transparent",
          backdropFilter: navScrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: navScrolled ? "blur(20px)" : "none",
          border: `1px solid ${navScrolled ? "rgba(255,255,255,0.1)" : "transparent"}`,
          borderRadius: navScrolled ? 16 : 0,
          transition: "background 0.45s cubic-bezier(0.16,1,0.3,1), border-color 0.45s ease, border-radius 0.45s ease, padding 0.45s ease",
        }}>

          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 28, height: 28, borderRadius: 7, background: "rgba(122,171,110,0.15)", border: "1px solid rgba(122,171,110,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--sage, #7aab6e)", fontSize: 12, fontWeight: 800 }}>M</div>
            <span className="font-display" style={{ fontWeight: 700, fontSize: 15, color: "var(--ivory, #faf3e8)", letterSpacing: "-0.01em" }}>Main Street Growth</span>
          </a>

          {/* Links */}
          <nav style={{ display: "flex", gap: 32, fontSize: 13, fontWeight: 500 }}>
            {[["#services","Services"],["#how-it-works","How it works"],["#pricing","Pricing"]].map(([h,l]) =>
              <a key={h} href={h} style={{ color: "rgba(250,243,232,0.6)", transition: "color 0.2s", textDecoration: "none" }}>{l}</a>
            )}
          </nav>

          {/* CTA — outlined ghost at top, filled ivory inside pill */}
          <a href="#contact" style={{
            background: navScrolled ? "var(--ivory, #faf3e8)" : "transparent",
            color: navScrolled ? "var(--forest, #1e3a2f)" : "var(--ivory, #faf3e8)",
            border: `1px solid ${navScrolled ? "transparent" : "rgba(250,243,232,0.35)"}`,
            padding: "8px 18px", borderRadius: 99, fontSize: 13, fontWeight: 700,
            display: "inline-flex", alignItems: "center", gap: 6,
            transition: "background 0.45s cubic-bezier(0.16,1,0.3,1), color 0.45s ease, border-color 0.45s ease",
            textDecoration: "none",
          }}>
            Get started <IcoArrow />
          </a>

        </div>
      </header>

      <main>

        {/* ── HERO: full-bleed dark, editorial ────────────────── */}
        <section
          ref={heroRef}
          className="grain"
          style={{
            minHeight: "100vh", background: "var(--forest, #1e3a2f)",
            position: "relative", overflow: "hidden",
            display: "flex", flexDirection: "column",
          }}
        >
          {/* Ghost word — large decorative "FOUND" */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute", right: "-2%", top: "50%",
              transform: "translateY(-52%)",
              fontFamily: "var(--font-display, Georgia, serif)",
              fontSize: "clamp(140px, 28vw, 320px)",
              fontWeight: 900, letterSpacing: "-0.05em",
              color: "rgba(122,171,110,0.07)",
              lineHeight: 1, userSelect: "none",
              pointerEvents: "none", whiteSpace: "nowrap",
            }}
          >
            FOUND
          </div>

          {/* Subtle amber orb — bottom left */}
          <div style={{ position: "absolute", left: -120, bottom: -60, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(196,113,62,0.08), transparent 70%)", pointerEvents: "none" }}/>

          {/* Main hero content */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 24px", position: "relative", zIndex: 1 }}>
            <div style={{
              maxWidth: 1100, margin: "0 auto", width: "100%",
              paddingTop: 24, paddingBottom: 16,
              display: "grid", gridTemplateColumns: "68% 32%", gap: 0, alignItems: "center",
            }}>

              {/* Left — headline + CTAs */}
              <div style={{ paddingRight: "clamp(32px, 5vw, 72px)" }}>

                {/* Badge */}
                <div className="reveal" style={{ marginBottom: 28 }}>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 7,
                    background: "rgba(122,171,110,0.15)", color: "var(--sage, #7aab6e)",
                    padding: "5px 14px", borderRadius: 99, fontSize: 12, fontWeight: 600,
                    letterSpacing: "0.01em",
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--sage, #7aab6e)", display: "inline-block" }}/>
                    Serving Mississippi &amp; the Southeast
                  </div>
                </div>

                {/* Headline */}
                <h1
                  className="font-display reveal reveal-delay-1"
                  style={{
                    fontSize: "clamp(2.8rem, 5.5vw, 5.2rem)", fontWeight: 900,
                    lineHeight: 1.04, letterSpacing: "-0.035em",
                    color: "var(--ivory, #faf3e8)",
                    marginBottom: 28,
                  }}
                >
                  The restaurant customers{" "}
                  <em style={{ fontStyle: "italic", color: "var(--sage, #7aab6e)", whiteSpace: "nowrap" }}>can&apos;t find</em>
                  {" "}is leaving money on the table.
                </h1>

                {/* Subtext */}
                <p className="reveal reveal-delay-2" style={{
                  fontSize: "clamp(15px, 1.4vw, 18px)",
                  color: "rgba(250,243,232,0.7)", lineHeight: 1.8,
                  marginBottom: 36, maxWidth: 460,
                }}>
                  We fix that — website, Google listing, and ads, all running for you.{" "}
                  <strong style={{ color: "rgba(250,243,232,0.95)", fontWeight: 600 }}>Starting at $200/month.</strong>
                </p>

                {/* CTAs */}
                <div className="reveal reveal-delay-3" style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
                  <a href="#contact" style={{
                    background: "var(--ivory, #faf3e8)", color: "var(--forest, #1e3a2f)",
                    padding: "15px 30px", borderRadius: 99, fontSize: 15, fontWeight: 800,
                    display: "inline-flex", alignItems: "center", gap: 8,
                    transition: "transform 0.15s, background 0.2s",
                  }}>
                    Get a free consultation <IcoArrow />
                  </a>
                  <a href="#how-it-works" style={{
                    border: "1.5px solid rgba(250,243,232,0.2)", color: "rgba(250,243,232,0.75)",
                    padding: "15px 24px", borderRadius: 99, fontSize: 15, fontWeight: 600,
                    transition: "border-color 0.2s, color 0.2s",
                  }}>
                    How it works
                  </a>
                </div>

                {/* Trust line */}
                <div className="reveal reveal-delay-4" style={{ display: "flex", gap: 20, fontSize: 13, color: "rgba(250,243,232,0.55)", flexWrap: "wrap" }}>
                  {["No setup fees","No long-term contracts","Live in ~2 weeks"].map(t => (
                    <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="var(--sage, #7aab6e)" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      {t}
                    </span>
                  ))}
                </div>

              </div>

              {/* Right — stats */}
              <div
                className="reveal reveal-delay-2"
                style={{
                  borderLeft: "1px solid rgba(255,255,255,0.08)",
                  paddingLeft: "clamp(32px, 5vw, 64px)",
                  display: "flex", flexDirection: "column", gap: 0,
                }}
              >
                {[
                  { n: "80%", label: "of diners search online before choosing where to eat",     color: "var(--sage, #7aab6e)" },
                  { n: "#1",  label: "Google result gets 10× more clicks than anything below it", color: "var(--ivory, #faf3e8)" },
                  { n: "60%", label: "of independent restaurants have no real Google presence",    color: "var(--amber, #c4713e)" },
                ].map(({ n, label, color }, i) => (
                  <div
                    key={n}
                    style={{
                      padding: "clamp(20px, 3vw, 32px) 0",
                      borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    }}
                  >
                    <div
                      className="font-display"
                      style={{
                        fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 900,
                        color, letterSpacing: "-0.04em", lineHeight: 1,
                        marginBottom: 10,
                      }}
                    >
                      {n}
                    </div>
                    <p style={{ fontSize: "clamp(13px, 1.1vw, 15px)", color: "rgba(250,243,232,0.6)", lineHeight: 1.55, margin: 0 }}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Marquee strip — anchored to bottom */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "24px 24px 36px", position: "relative", zIndex: 1 }}>
            <p style={{ textAlign: "center", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(250,243,232,0.45)", marginBottom: 16 }}>
              Trusted by local restaurants across the region
            </p>
            <div style={{ overflow: "hidden", WebkitMaskImage: "linear-gradient(to right, transparent, rgba(0,0,0,0.8) 12%, rgba(0,0,0,0.8) 88%, transparent)" }}>
              <div className="marquee-track" style={{ gap: 60 }}>
                {[...MARQUEE,...MARQUEE].map((n, i) => (
                  <span key={i} className="font-display" style={{ fontSize: 15, fontWeight: 700, color: "var(--ivory, #faf3e8)", opacity: 0.4, whiteSpace: "nowrap" }}>{n}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS: sticky-left scrollytelling ────────── */}
        <section id="how-it-works" style={{ background: "white" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr" }}>

            {/* Sticky left panel */}
            <div style={{ position: "sticky", top: 66, height: "calc(100vh - 66px)", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 64, paddingTop: 48, paddingBottom: 48 }}>
              <div style={{ maxWidth: 320 }}>
                <Tag>How it works</Tag>
                <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 3.5vw, 3rem)", fontWeight: 900, color: "var(--forest, #1e3a2f)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                  Done for you,<br/><em style={{ fontStyle: "italic", color: "var(--green, #3a6b47)" }}>from day one.</em>
                </h2>
                <p style={{ marginTop: 16, fontSize: 15, color: "var(--charcoal, #2a2118)", opacity: 0.55, lineHeight: 1.75 }}>
                  We handle everything. No jargon, no tech headaches — just more customers walking through your door.
                </p>
              </div>
            </div>

            {/* Scrolling right — steps */}
            <div style={{ borderLeft: "1px solid rgba(42,33,24,0.07)", paddingLeft: 64 }}>
              {STEPS.map(({ num, title, body }, i) => (
                <div
                  key={num}
                  className="reveal"
                  style={{ padding: "96px 0", borderBottom: i < STEPS.length - 1 ? "1px solid rgba(42,33,24,0.06)" : "none" }}
                >
                  <span className="font-display" style={{ fontSize: "clamp(5rem, 12vw, 9rem)", fontWeight: 900, color: "var(--linen, #f0e3cc)", lineHeight: 1, letterSpacing: "-0.04em", display: "block", marginBottom: 16 }}>{num}</span>
                  <h3 className="font-display" style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)", fontWeight: 800, color: "var(--forest, #1e3a2f)", marginBottom: 14, lineHeight: 1.25, letterSpacing: "-0.015em" }}>{title}</h3>
                  <p style={{ fontSize: 16, color: "var(--charcoal, #2a2118)", opacity: 0.65, lineHeight: 1.85 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES: typographic poster ────────────────────── */}
        <section id="services" className="grain" style={{ background: "var(--forest, #1e3a2f)", padding: "96px 0 80px", position: "relative", overflow: "hidden" }}>

          {/* Ghost word */}
          <div aria-hidden="true" style={{
            position: "absolute", bottom: -60, right: "-5%",
            fontFamily: "var(--font-display, Georgia, serif)",
            fontSize: "clamp(180px, 32vw, 440px)",
            fontWeight: 900, letterSpacing: "-0.06em",
            color: "rgba(122,171,110,0.045)",
            lineHeight: 1, userSelect: "none", pointerEvents: "none",
            whiteSpace: "nowrap",
          }}>GROWTH</div>

          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>

            {/* Section header */}
            <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52 }}>
              <div>
                <Tag light>Services</Tag>
                <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 900, color: "var(--ivory, #faf3e8)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                  Everything included.<br/>
                  <em style={{ fontStyle: "italic", color: "var(--sage, #7aab6e)" }}>Nothing extra to buy.</em>
                </h2>
              </div>
              <p style={{ fontSize: 15, color: "rgba(250,243,232,0.72)", lineHeight: 1.75, maxWidth: 240, textAlign: "right" }}>
                One flat monthly fee. We run your entire online presence.
              </p>
            </div>

            {/* ── TOP ROW: huge left + medium right ───────────── */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 44, display: "grid", gridTemplateColumns: "1fr 220px", gap: "clamp(24px, 4vw, 48px)", alignItems: "flex-start" }}>

              {/* Huge: Professional Website */}
              <div className="reveal" style={{ minWidth: 0 }}>
                <div style={{ fontSize: 11, color: "rgba(250,243,232,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}><span style={{ color: "var(--amber, #c4713e)" }}>01 —</span> Core</div>
                <h3 className="font-display" style={{
                  fontSize: "clamp(3rem, 5.5vw, 5.5rem)", fontWeight: 900,
                  color: "var(--ivory, #faf3e8)", lineHeight: 0.92,
                  letterSpacing: "-0.05em", marginBottom: 20,
                }}>
                  Professional<br/>Website
                </h3>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {["Hosted & maintained", "Mobile-first", "Live in 2 weeks"].map(t => (
                    <span key={t} style={{
                      fontSize: 11, background: "rgba(122,171,110,0.1)",
                      border: "1px solid rgba(122,171,110,0.3)",
                      color: "var(--ivory, #faf3e8)", padding: "4px 12px", borderRadius: 99,
                    }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Medium right: Google Business Profile */}
              <div className="reveal reveal-delay-1" style={{ textAlign: "right", paddingTop: 16 }}>
                <div style={{ fontSize: 11, color: "rgba(250,243,232,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}><span style={{ color: "var(--amber, #c4713e)" }}>02 —</span> Visibility</div>
                <h3 className="font-display" style={{
                  fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)", fontWeight: 900,
                  color: "var(--ivory, #faf3e8)", lineHeight: 1.05,
                  letterSpacing: "-0.025em", marginBottom: 12,
                }}>
                  Google<br/>Business<br/>Profile
                </h3>
                <p style={{ fontSize: 13, color: "rgba(250,243,232,0.72)", lineHeight: 1.7 }}>
                  Appear on Google Maps when locals search nearby.
                </p>
              </div>
            </div>

            {/* ── MIDDLE ACCENT ROW: Local SEO + Google Ads ───────── */}
            <div
              className="reveal"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                padding: "clamp(20px, 3vw, 36px) 0",
                margin: "44px 0",
                display: "grid", gridTemplateColumns: "1fr 220px", gap: "clamp(24px, 4vw, 48px)", alignItems: "center",
              }}
            >
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 11, color: "rgba(250,243,232,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}><span style={{ color: "var(--amber, #c4713e)" }}>03 —</span> Rankings</div>
                <h3 className="font-display" style={{
                  fontSize: "clamp(3rem, 6.5vw, 6rem)", fontWeight: 900,
                  fontStyle: "italic", color: "var(--sage, #7aab6e)",
                  lineHeight: 1, letterSpacing: "-0.045em", marginBottom: 16,
                }}>
                  Local Search (SEO)
                </h3>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {["Rank #1 locally", "Organic traffic", "Beat competitors"].map(t => (
                    <span key={t} style={{
                      fontSize: 11, background: "rgba(122,171,110,0.1)",
                      border: "1px solid rgba(122,171,110,0.3)",
                      color: "var(--ivory, #faf3e8)", padding: "4px 12px", borderRadius: 99,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 11, color: "rgba(250,243,232,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}><span style={{ color: "var(--amber, #c4713e)" }}>04 —</span> Paid Search</div>
                <h3 className="font-display" style={{
                  fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)", fontWeight: 900,
                  color: "var(--amber, #c4713e)", lineHeight: 1.05,
                  letterSpacing: "-0.025em", marginBottom: 10,
                }}>
                  Google<br/>Ads
                </h3>
                <p style={{ fontSize: 13, color: "rgba(250,243,232,0.72)", lineHeight: 1.65 }}>
                  Reach people searching for exactly what you serve, right now.
                </p>
              </div>
            </div>

            {/* ── BOTTOM TWO ───────────────────────────────────── */}
            <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 clamp(24px, 5vw, 56px)" }}>
              {[
                { n: "05", label: "Reports",  title: "Lead & Call Tracking", desc: "Monthly report — calls, visits, and leads. Always know what you're getting.", color: "rgba(250,243,232,0.85)" },
                { n: "06", label: "Support",  title: "Ongoing Maintenance",  desc: "Updates, fixes, seasonal changes — handled without you lifting a finger.",    color: "rgba(250,243,232,0.85)" },
              ].map(({ n, label, title, desc, color }) => (
                <div key={n} style={{ paddingTop: 22 }}>
                  <div style={{ fontSize: 11, color: "rgba(250,243,232,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}><span style={{ color: "var(--amber, #c4713e)" }}>{n} —</span> {label}</div>
                  <h3 className="font-display" style={{
                    fontSize: "clamp(1.4rem, 2.4vw, 2rem)", fontWeight: 900,
                    color, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 12,
                  }}>{title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(250,243,232,0.72)", lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── TESTIMONIALS ────────────────────────────────────── */}
        <section style={{ background: "var(--linen, #f0e3cc)", padding: "104px 24px" }}>
          <div style={{ maxWidth: 1152, margin: "0 auto" }}>
            <div style={{ marginBottom: 56 }} className="reveal">
              <Tag>What restaurants say</Tag>
              <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 900, color: "var(--forest, #1e3a2f)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                Real results.<br/><em style={{ fontStyle: "italic", color: "var(--green, #3a6b47)" }}>Real restaurants.</em>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: 16 }}>
              <div className="lift reveal" style={{ background: "var(--forest, #1e3a2f)", borderRadius: 26, padding: 48, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 320 }}>
                <div>
                  <div className="font-display" style={{ fontSize: 80, color: "var(--amber, #c4713e)", lineHeight: 0.75, marginBottom: 28, fontWeight: 900 }}>&ldquo;</div>
                  <p className="font-display" style={{ fontSize: 22, color: "var(--ivory, #faf3e8)", lineHeight: 1.55, fontWeight: 600, fontStyle: "italic" }}>
                    {TESTIMONIALS[0].quote}
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 36 }}>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--ivory, #faf3e8)", fontSize: 15 }}>{TESTIMONIALS[0].name}</div>
                    <div style={{ color: "rgba(250,243,232,0.45)", fontSize: 13, marginTop: 3 }}>{TESTIMONIALS[0].restaurant} · {TESTIMONIALS[0].location}</div>
                  </div>
                  <Stars />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {TESTIMONIALS.slice(1).map((t, i) => (
                  <div key={t.name} className={`lift reveal reveal-delay-${i + 1}`} style={{ background: "white", borderRadius: 22, padding: 28, border: "1px solid rgba(42,33,24,0.06)", flex: 1 }}>
                    <Stars />
                    <p className="font-display" style={{ fontSize: 16, color: "var(--forest, #1e3a2f)", lineHeight: 1.65, fontWeight: 600, fontStyle: "italic", margin: "14px 0 18px" }}>&ldquo;{t.quote}&rdquo;</p>
                    <div style={{ fontWeight: 700, color: "var(--forest, #1e3a2f)", fontSize: 14 }}>{t.name}</div>
                    <div style={{ color: "var(--charcoal, #2a2118)", opacity: 0.45, fontSize: 13 }}>{t.restaurant} · {t.location}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING ─────────────────────────────────────────── */}
        <section id="pricing" style={{ background: "var(--ivory, #faf3e8)", padding: "104px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end", marginBottom: 56 }} className="reveal">
              <div>
                <Tag>Pricing</Tag>
                <h2 className="font-display" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 900, color: "var(--forest, #1e3a2f)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                  Simple.<br/><em style={{ fontStyle: "italic", color: "var(--green, #3a6b47)" }}>Transparent.</em>
                </h2>
              </div>
              <p style={{ fontSize: 17, color: "var(--charcoal, #2a2118)", opacity: 0.65, lineHeight: 1.8 }}>No setup fees. No long-term contracts. No surprises.<br/>Cancel any time.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 820, margin: "0 auto" }}>
              {/* Starter */}
              <div className="lift reveal" style={{ background: "white", borderRadius: 26, padding: 38, border: "1px solid rgba(42,33,24,0.07)" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--charcoal, #2a2118)", opacity: 0.45, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 14 }}>Starter</div>
                <div style={{ marginBottom: 4 }}>
                  <span className="font-display" style={{ fontSize: 60, fontWeight: 900, color: "var(--forest, #1e3a2f)", letterSpacing: "-0.04em" }}>$200</span>
                  <span style={{ fontSize: 16, color: "var(--charcoal, #2a2118)", opacity: 0.45, marginLeft: 4 }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: "var(--charcoal, #2a2118)", opacity: 0.55, marginBottom: 28 }}>Get found online</p>
                <div style={{ height: 1, background: "var(--linen, #f0e3cc)", marginBottom: 24 }}/>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Professional website","Domain & hosting","Google Business Profile","Local SEO","Monthly report","2 content updates/month"].map(i => <CheckItem key={i} label={i} />)}
                </ul>
                <a href="#contact" style={{ display: "block", textAlign: "center", border: "2px solid var(--forest, #1e3a2f)", color: "var(--forest, #1e3a2f)", borderRadius: 99, padding: "14px 24px", fontSize: 15, fontWeight: 700, transition: "background 0.2s, color 0.2s" }}>Get started</a>
              </div>

              {/* Growth */}
              <div className="lift reveal reveal-delay-1" style={{ background: "var(--forest, #1e3a2f)", borderRadius: 26, padding: 38, position: "relative" }}>
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "var(--amber, #c4713e)", color: "white", fontSize: 12, fontWeight: 700, padding: "5px 16px", borderRadius: 99, whiteSpace: "nowrap" }}>Most popular</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(250,243,232,0.5)", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 14 }}>Growth</div>
                <div style={{ marginBottom: 4 }}>
                  <span className="font-display" style={{ fontSize: 60, fontWeight: 900, color: "var(--ivory, #faf3e8)", letterSpacing: "-0.04em" }}>$300</span>
                  <span style={{ fontSize: 16, color: "rgba(250,243,232,0.55)", marginLeft: 4 }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: "rgba(250,243,232,0.55)", marginBottom: 28 }}>For restaurants ready to grow fast</p>
                <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 24 }}/>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Everything in Starter","Google Ads management","Keyword targeting","Call & lead tracking","Competitor analysis","Unlimited content updates"].map(i => <CheckItem key={i} label={i} light />)}
                </ul>
                <a href="#contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--green, #3a6b47)", color: "var(--ivory, #faf3e8)", borderRadius: 99, padding: "14px 24px", fontSize: 15, fontWeight: 700, transition: "background 0.2s" }}>
                  Get started <IcoArrow />
                </a>
              </div>
            </div>
            <p style={{ textAlign: "center", fontSize: 14, color: "var(--charcoal, #2a2118)", opacity: 0.6, marginTop: 24 }}>
              Not sure which plan fits?{" "}
              <a href="#contact" style={{ color: "var(--green, #3a6b47)", fontWeight: 700, opacity: 1 }}>Let&apos;s talk</a> — we&apos;ll help you decide.
            </p>
          </div>
        </section>

        {/* ── CONTACT ─────────────────────────────────────────── */}
        <section id="contact" className="grain" style={{ background: "var(--forest, #1e3a2f)", padding: "96px 24px", position: "relative", overflow: "hidden" }}>

          {/* Ambient orb */}
          <div style={{ position: "absolute", right: -120, bottom: -120, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(122,171,110,0.08), transparent 70%)", pointerEvents: "none" }}/>
          <div style={{ position: "absolute", left: -80, top: -80, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(196,113,62,0.06), transparent 70%)", pointerEvents: "none" }}/>

          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

            {/* Top — headline */}
            <div className="reveal" style={{ marginBottom: 64 }}>
              <Tag light>Get started</Tag>
              <h2 className="font-display" style={{
                fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 900,
                color: "var(--ivory, #faf3e8)", lineHeight: 1.04,
                letterSpacing: "-0.035em", maxWidth: 700,
              }}>
                Ready to fill<br/>
                <em style={{ fontStyle: "italic", color: "var(--sage, #7aab6e)" }}>more tables?</em>
              </h2>
              <p style={{ fontSize: 18, color: "rgba(250,243,232,0.65)", lineHeight: 1.75, marginTop: 20, maxWidth: 500 }}>
                Tell us about your restaurant. We&apos;ll be in touch within one business day — no pressure, no commitment.
              </p>
            </div>

            {/* Bottom — trust left + form right */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "clamp(40px, 6vw, 96px)", alignItems: "start" }}>

              {/* Left — trust signals */}
              <div className="reveal" style={{ paddingTop: 8 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {[
                    { n: "01", heading: "Free consultation",    body: "We review your current online presence before we even get on the phone." },
                    { n: "02", heading: "Live in ~2 weeks",     body: "Website, Google listing, and ads set up and running — fast." },
                    { n: "03", heading: "No setup fees",        body: "One flat monthly fee, no contracts. Cancel any time." },
                  ].map(({ n, heading, body }, i) => (
                    <div key={n} style={{ padding: "24px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                      <div style={{ fontSize: 11, color: "rgba(250,243,232,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
                        <span style={{ color: "var(--amber, #c4713e)" }}>{n} —</span> What to expect
                      </div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "var(--ivory, #faf3e8)", marginBottom: 6 }}>{heading}</div>
                      <p style={{ fontSize: 14, color: "rgba(250,243,232,0.6)", lineHeight: 1.7, margin: 0 }}>{body}</p>
                    </div>
                  ))}
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20 }}>
                    <div style={{ display: "flex", gap: 18, fontSize: 13, color: "rgba(250,243,232,0.45)" }}>
                      {["Starting at $200/mo", "Mississippi & the Southeast"].map(t => (
                        <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="var(--sage, #7aab6e)" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — form card */}
              <div className="reveal reveal-delay-1" style={{ background: "var(--ivory, #faf3e8)", borderRadius: 24, padding: "40px clamp(24px, 4vw, 48px)" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(58,107,71,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: "var(--green, #3a6b47)" }}>
                      <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <h3 className="font-display" style={{ fontSize: 26, fontWeight: 800, color: "var(--forest, #1e3a2f)", marginBottom: 8, letterSpacing: "-0.015em" }}>We&apos;ll be in touch soon!</h3>
                    <p style={{ fontSize: 15, color: "var(--charcoal, #2a2118)", opacity: 0.6, lineHeight: 1.7 }}>Expect a call or email within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <div style={{ marginBottom: 4 }}>
                      <h3 className="font-display" style={{ fontSize: 20, fontWeight: 800, color: "var(--forest, #1e3a2f)", marginBottom: 4, letterSpacing: "-0.015em" }}>Tell us about your restaurant</h3>
                      <p style={{ fontSize: 13, color: "var(--charcoal, #2a2118)", opacity: 0.5 }}>We&apos;ll review your online presence before we call.</p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest, #1e3a2f)", marginBottom: 5, letterSpacing: "0.05em" }}>YOUR NAME *</label>
                        <input type="text" required value={form.name} onChange={up("name")} placeholder="Jane Smith" style={inp}/>
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest, #1e3a2f)", marginBottom: 5, letterSpacing: "0.05em" }}>RESTAURANT NAME *</label>
                        <input type="text" required value={form.business} onChange={up("business")} placeholder="Main Street Diner" style={inp}/>
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest, #1e3a2f)", marginBottom: 5, letterSpacing: "0.05em" }}>EMAIL *</label>
                        <input type="email" required value={form.email} onChange={up("email")} placeholder="you@example.com" style={inp}/>
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest, #1e3a2f)", marginBottom: 5, letterSpacing: "0.05em" }}>PHONE</label>
                        <input type="tel" value={form.phone} onChange={up("phone")} placeholder="(601) 555-0100" style={inp}/>
                      </div>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest, #1e3a2f)", marginBottom: 5, letterSpacing: "0.05em" }}>ABOUT YOUR BUSINESS</label>
                      <textarea rows={4} value={form.message} onChange={up("message")} placeholder="e.g. Family BBQ in Hattiesburg, MS — rely on word of mouth and want to grow..." style={{ ...inp, resize: "none" } as React.CSSProperties}/>
                    </div>
                    <button type="submit" style={{ background: "var(--forest, #1e3a2f)", color: "var(--ivory, #faf3e8)", padding: "15px 24px", borderRadius: 99, fontSize: 15, fontWeight: 800, border: "none", cursor: "pointer", fontFamily: "var(--font-body, system-ui)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "background 0.2s, transform 0.15s" }}>
                      Get my free consultation <IcoArrow />
                    </button>
                    <p style={{ textAlign: "center", fontSize: 12, color: "rgba(42,33,24,0.4)", margin: 0 }}>No spam. No sales pressure. Just a conversation.</p>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer style={{ background: "var(--forest, #1e3a2f)", padding: "24px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 26, height: 26, borderRadius: 7, background: "rgba(122,171,110,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--sage, #7aab6e)", fontSize: 12, fontWeight: 700 }}>M</div>
            <span className="font-display" style={{ fontWeight: 700, color: "var(--ivory, #faf3e8)", fontSize: 15, letterSpacing: "-0.01em" }}>Main Street Growth</span>
          </div>
          <p style={{ fontSize: 12, color: "rgba(250,243,232,0.4)", margin: 0 }}>
            © {new Date().getFullYear()} Main Street Growth · Serving Mississippi &amp; the Southeast
          </p>
        </div>
      </footer>

      {/* ── STICKY BOTTOM CTA BAR ───────────────────────────── */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100,
        background: "var(--green, #3a6b47)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 -8px 32px rgba(30,58,47,0.25)",
        transform: showCTABar ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        padding: "14px 24px",
      }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span className="font-display" style={{ fontWeight: 800, fontSize: 16, color: "var(--ivory, #faf3e8)", letterSpacing: "-0.01em" }}>Ready to fill more tables?</span>
            <span style={{ fontSize: 13, color: "rgba(250,243,232,0.7)", display: "flex", alignItems: "center", gap: 5 }}>
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="rgba(250,243,232,0.7)" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              Starting at $200/month
            </span>
          </div>
          <a href="#contact" style={{ background: "var(--ivory, #faf3e8)", color: "var(--forest, #1e3a2f)", padding: "10px 24px", borderRadius: 99, fontSize: 14, fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 6, flexShrink: 0, transition: "transform 0.15s" }}>
            Get my free consultation <IcoArrow />
          </a>
        </div>
      </div>

    </div>
  );
}

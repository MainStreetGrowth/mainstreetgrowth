"use client";
import CompassMark from "../_components/CompassMark";
import { useState, useEffect } from "react";

/* ─── Scroll reveal hook (threshold 0.08) ──────────────────── */
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

/* ─── Mobile detection hook (<768px) ───────────────────────── */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

/* ─── Line icons (stroke only) ─────────────────────────────── */
const IcoGlobe = () => <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>;
const IcoMap = () => <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>;
const IcoSearch = () => <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" /></svg>;
const IcoMega = () => <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>;
const IcoBar = () => <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const IcoGear = () => <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" /></svg>;
const IcoCheck = () => <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>;
const IcoArrow = () => <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>;
const IcoUp = () => <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
const IcoStar = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--amber,#df8752)"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 7.1-1.01z" /></svg>;

/* ─── Data (reused from homepage) ──────────────────────────── */
const SERVICES = [
  { icon: <IcoGlobe />, title: "Professional Website", desc: "Hosted, mobile-first, and reservations-ready. Built to turn searches into tables." },
  { icon: <IcoMap />, title: "Google Business Profile", desc: "Appear first on Google Maps when locals search for food nearby." },
  { icon: <IcoSearch />, title: "Local Search (SEO)", desc: "Rank #1 locally, pull organic traffic, and beat the competitor down the street." },
  { icon: <IcoMega />, title: "Google Ads", desc: "Reach people searching for exactly what you serve, right now." },
  { icon: <IcoBar />, title: "Lead & Call Tracking", desc: "A clear monthly report: calls, reservations, catering inquiries, website visits." },
  { icon: <IcoGear />, title: "Ongoing Maintenance", desc: "Menu updates, seasonal content, and Google review responses. All handled." },
];

const STEPS = [
  { num: "01", title: "We audit your revenue funnel", body: "Before we build anything, we map exactly where customers are slipping away. Search rankings, website gaps, Google profile, local competitors. You see every leak before we fix it." },
  { num: "02", title: "We build your revenue capture system", body: "Professional website, Google Business Profile, local SEO, and Google Ads. Everything goes live within two weeks. Every piece is built to turn searches into customers walking through your door." },
  { num: "03", title: "You see results every month", body: "A clear monthly report showing calls, website visits, reservations, and leads captured. No jargon. Just the numbers that prove your investment is working." },
];

const TESTIMONIALS = [
  { quote: "We went from invisible to showing up first in Google for our area. Our Friday nights are now fully booked weeks in advance.", name: "Tommy R.", restaurant: "Red River Smokehouse", location: "Natchez, MS" },
  { quote: "I've wasted money on marketing before, so I was skeptical. Within 6 weeks we were getting 30 to 40 extra calls a month.", name: "Maria L.", restaurant: "Delta Blues Café", location: "Greenville, MS" },
  { quote: "They built everything in two weeks and handled every detail. I didn't have to think about it once.", name: "James P.", restaurant: "Porch & Table", location: "Tupelo, MS" },
];

const METRICS = [
  { label: "Calls this month", value: "142", delta: "+42", up: true },
  { label: "Reservations", value: "128", delta: "+18", up: true },
  { label: "Catering leads", value: "6", delta: "+4", up: true },
  { label: "Website visits", value: "1,340", delta: "+310", up: true },
];

/* bar chart data — monthly calls */
const BARS = [
  { m: "Feb", v: 62 },
  { m: "Mar", v: 74 },
  { m: "Apr", v: 88 },
  { m: "May", v: 96 },
  { m: "Jun", v: 118 },
  { m: "Jul", v: 142 },
];

const STARTER_FEATURES = ["Professional website", "Domain & hosting", "Google Business Profile", "Local SEO", "Monthly report", "2 content updates/month"];
const GROWTH_FEATURES = ["Everything in Starter", "Google Ads management", "Keyword targeting", "Call & lead tracking", "Catering landing page", "Unlimited content updates"];

/* ─── Shared pieces ────────────────────────────────────────── */
const Tag = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div style={{
    display: "inline-flex", alignItems: "center", gap: 7,
    background: light ? "rgba(134,164,150,0.15)" : "rgba(59,105,51,0.1)",
    color: light ? "var(--sage,#86a496)" : "var(--green,#3b6933)",
    padding: "5px 14px", borderRadius: 999, fontSize: 12, fontWeight: 700,
    letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 20,
  }}>
    {children}
  </div>
);

const HAIR = "1px solid rgba(34,26,17,0.08)";
const CARD: React.CSSProperties = {
  background: "white", borderRadius: 14, border: HAIR,
  boxShadow: "0 1px 2px rgba(34,26,17,0.03)",
};

/* ─── Metric card ──────────────────────────────────────────── */
const MetricCard = ({ label, value, delta, up }: { label: string; value: string; delta: string; up: boolean }) => (
  <div style={{ ...CARD, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 8 }}>
    <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(34,26,17,0.5)", letterSpacing: "0.02em" }}>{label}</span>
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
      <span className="font-display" style={{ fontSize: 30, fontWeight: 900, color: "var(--forest,#07241a)", letterSpacing: "-0.03em", lineHeight: 1 }}>{value}</span>
      <span style={{
        display: "inline-flex", alignItems: "center", gap: 3, fontSize: 12, fontWeight: 700,
        color: up ? "var(--green,#3b6933)" : "var(--amber,#df8752)",
        background: up ? "rgba(59,105,51,0.1)" : "rgba(223,135,82,0.12)",
        padding: "3px 7px", borderRadius: 999,
      }}>
        <IcoUp />{delta}
      </span>
    </div>
  </div>
);

/* ─── Main component ───────────────────────────────────────── */
export default function Dashboard() {
  useScrollReveal();
  const isMobile = useIsMobile();

  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const up = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const inp: React.CSSProperties = {
    width: "100%", padding: "12px 14px", borderRadius: 10,
    border: "1px solid rgba(34,26,17,0.15)", fontSize: 14,
    color: "var(--charcoal,#221a11)", background: "white",
    outline: "none", boxSizing: "border-box",
    fontFamily: "var(--font-body,system-ui)", transition: "border-color 0.2s",
  };

  const barMax = Math.max(...BARS.map((b) => b.v));

  return (
    <div style={{ fontFamily: "var(--font-body,system-ui)", background: "var(--ivory,#fff8f4)", color: "var(--charcoal,#221a11)" }}>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, padding: "0 24px", background: "rgba(255,248,244,0.85)", backdropFilter: "blur(10px)", borderBottom: HAIR }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 62 }}>
          <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <CompassMark size={28} ring="#1E3A2F" north="#C4713E" south="#1E3A2F" hub="#FBF4E9" />
            <span className="font-display" style={{ fontWeight: 700, fontSize: 15, color: "var(--forest,#07241a)", letterSpacing: "-0.01em" }}>Main Street Compass</span>
          </a>
          <nav style={{ display: isMobile ? "none" : "flex", gap: 30, fontSize: 13, fontWeight: 500 }}>
            {[["#deliverables", "What you get"], ["#services", "Services"], ["#how", "How it works"], ["#pricing", "Pricing"]].map(([h, l]) => (
              <a key={h} href={h} style={{ color: "rgba(34,26,17,0.6)", textDecoration: "none" }}>{l}</a>
            ))}
          </nav>
          <a href="#contact" style={{ background: "var(--forest,#07241a)", color: "var(--ivory,#fff8f4)", padding: "8px 18px", borderRadius: 10, fontSize: 13, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}>
            Get started <IcoArrow />
          </a>
        </div>
      </header>

      <main id="top">

        {/* ── HERO ──────────────────────────────────────────── */}
        <section style={{ padding: isMobile ? "48px 16px 56px" : "72px 24px 88px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "44% 56%", gap: isMobile ? 40 : 56, alignItems: "center" }}>

            {/* Left copy */}
            <div className="reveal">
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(59,105,51,0.1)", color: "var(--green,#3b6933)", padding: "5px 14px", borderRadius: 999, fontSize: 12, fontWeight: 700, marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green,#3b6933)", display: "inline-block" }} />
                Mississippi &amp; the Southeast
              </div>
              <h1 className="font-display" style={{ fontSize: isMobile ? "2.4rem" : "clamp(2.6rem,4.4vw,4rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.035em", color: "var(--forest,#07241a)", marginBottom: 22 }}>
                See exactly what<br />
                <em style={{ fontStyle: "italic", color: "var(--green,#3b6933)" }}>you&apos;re paying for.</em>
              </h1>
              <p style={{ fontSize: isMobile ? 15 : 17, color: "rgba(34,26,17,0.65)", lineHeight: 1.75, marginBottom: 30, maxWidth: 440 }}>
                Someone in your town is searching for a restaurant right now. We build the system that makes sure they find yours &mdash; and every month you get a plain-language report proving it works.{" "}
                <strong style={{ color: "var(--charcoal,#221a11)", fontWeight: 700 }}>Starting at $200/month.</strong>
              </p>
              <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
                <a href="#contact" style={{ background: "var(--forest,#07241a)", color: "var(--ivory,#fff8f4)", padding: "14px 26px", borderRadius: 10, fontSize: 15, fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
                  Get a free revenue audit <IcoArrow />
                </a>
                <a href="#deliverables" style={{ border: "1px solid rgba(34,26,17,0.18)", color: "var(--charcoal,#221a11)", padding: "14px 22px", borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
                  See what you get
                </a>
              </div>
              <div style={{ display: "flex", gap: 18, fontSize: 13, color: "rgba(34,26,17,0.5)", flexWrap: "wrap" }}>
                {["No setup fees", "No contracts", "Live in ~2 weeks"].map((t) => (
                  <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: "var(--green,#3b6933)" }}><IcoCheck /></span>{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — dashboard mockup */}
            <div className="reveal reveal-delay-1" style={{ ...CARD, borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 60px -20px rgba(7,36,26,0.28), 0 2px 8px rgba(34,26,17,0.05)" }}>
              {/* Panel header */}
              <div style={{ background: "var(--forest,#07241a)", padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ display: "flex", gap: 6 }}>
                    {["#ef6a52", "#df8752", "#86a496"].map((c) => <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.9 }} />)}
                  </div>
                  <span style={{ color: "rgba(255,248,244,0.85)", fontSize: 12, fontWeight: 600, marginLeft: 4 }}>Monthly Report &mdash; The Magnolia Café</span>
                </div>
                <span style={{ color: "rgba(255,248,244,0.5)", fontSize: 11, fontWeight: 600 }}>July 2026</span>
              </div>

              {/* Panel body: sidebar hint + content */}
              <div style={{ display: "flex", background: "#f7f4f0" }}>
                {/* Sidebar hint */}
                {!isMobile && (
                  <div style={{ width: 44, background: "white", borderRight: HAIR, padding: "14px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 18, color: "rgba(34,26,17,0.35)" }}>
                    <span style={{ color: "var(--green,#3b6933)" }}><IcoBar /></span>
                    <IcoMap />
                    <IcoSearch />
                    <IcoMega />
                    <IcoGear />
                  </div>
                )}

                {/* Content */}
                <div style={{ flex: 1, padding: isMobile ? 14 : 18 }}>
                  {/* Metric cards */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
                    {METRICS.map((m) => <MetricCard key={m.label} {...m} />)}
                  </div>

                  {/* Bar chart */}
                  <div style={{ ...CARD, padding: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "var(--charcoal,#221a11)" }}>Calls captured / month</span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 700, color: "var(--green,#3b6933)" }}>
                        <IcoUp />129% since Feb
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: isMobile ? 6 : 10, height: 108 }}>
                      {BARS.map((b, i) => {
                        const h = Math.round((b.v / barMax) * 92) + 8;
                        const last = i === BARS.length - 1;
                        return (
                          <div key={b.m} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                            <span style={{ fontSize: 10, fontWeight: 700, color: last ? "var(--green,#3b6933)" : "rgba(34,26,17,0.4)" }}>{b.v}</span>
                            <div style={{
                              width: "100%", maxWidth: 28, height: h, borderRadius: "6px 6px 3px 3px",
                              background: last ? "var(--green,#3b6933)" : "rgba(134,164,150,0.5)",
                            }} />
                            <span style={{ fontSize: 10, color: "rgba(34,26,17,0.4)", fontWeight: 600 }}>{b.m}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SAMPLE DELIVERABLES ───────────────────────────── */}
        <section id="deliverables" style={{ background: "white", borderTop: HAIR, borderBottom: HAIR, padding: isMobile ? "64px 16px" : "88px 24px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div className="reveal" style={{ maxWidth: 620, marginBottom: isMobile ? 40 : 52 }}>
              <Tag>What you actually get</Tag>
              <h2 className="font-display" style={{ fontSize: "clamp(2rem,3.6vw,2.9rem)", fontWeight: 900, color: "var(--forest,#07241a)", lineHeight: 1.12, letterSpacing: "-0.025em", marginBottom: 14 }}>
                Real deliverables.<br /><em style={{ fontStyle: "italic", color: "var(--green,#3b6933)" }}>Not vague promises.</em>
              </h2>
              <p style={{ fontSize: 16, color: "rgba(34,26,17,0.6)", lineHeight: 1.7 }}>
                Here&apos;s what lands in your hands: a live website, a polished Google listing, and a monthly report you&apos;ll actually understand.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: 18 }}>

              {/* Website preview card */}
              <div className="reveal" style={{ ...CARD, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "14px 16px", borderBottom: HAIR }}>
                  <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--green,#3b6933)" }}>Your website</span>
                </div>
                {/* mini fake site */}
                <div style={{ margin: 16, borderRadius: 10, overflow: "hidden", border: HAIR }}>
                  {/* browser chrome */}
                  <div style={{ background: "#f2efeb", padding: "7px 10px", display: "flex", alignItems: "center", gap: 6, borderBottom: HAIR }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#d8cfc6" }} />
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#d8cfc6" }} />
                    <span style={{ flex: 1, height: 12, borderRadius: 4, background: "white", border: HAIR, marginLeft: 6 }} />
                  </div>
                  {/* nav */}
                  <div style={{ background: "var(--forest,#07241a)", padding: "9px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span className="font-display" style={{ color: "var(--ivory,#fff8f4)", fontSize: 11, fontWeight: 800 }}>Magnolia Café</span>
                    <div style={{ display: "flex", gap: 8 }}>
                      {[26, 20, 30].map((w, i) => <span key={i} style={{ width: w, height: 5, borderRadius: 3, background: "rgba(255,248,244,0.35)" }} />)}
                    </div>
                  </div>
                  {/* hero block */}
                  <div style={{ background: "var(--linen,#fcebdc)", padding: "20px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
                    <span style={{ width: "80%", height: 11, borderRadius: 4, background: "rgba(7,36,26,0.35)" }} />
                    <span style={{ width: "55%", height: 11, borderRadius: 4, background: "rgba(7,36,26,0.35)" }} />
                    <span style={{ width: 74, height: 20, borderRadius: 6, background: "var(--amber,#df8752)", marginTop: 4 }} />
                  </div>
                  {/* menu strip */}
                  <div style={{ background: "white", padding: 12, display: "flex", gap: 8 }}>
                    {[0, 1, 2].map((i) => (
                      <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
                        <span style={{ height: 26, borderRadius: 6, background: "var(--surface-dim,#e8d7c9)" }} />
                        <span style={{ width: "80%", height: 6, borderRadius: 3, background: "rgba(34,26,17,0.15)" }} />
                        <span style={{ width: "50%", height: 6, borderRadius: 3, background: "rgba(34,26,17,0.1)" }} />
                      </div>
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: 13, color: "rgba(34,26,17,0.6)", lineHeight: 1.6, margin: "0 16px 16px" }}>
                  Mobile-first, hosted, and reservations-ready. Live in about two weeks.
                </p>
              </div>

              {/* Google Business Profile card */}
              <div className="reveal reveal-delay-1" style={{ ...CARD, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "14px 16px", borderBottom: HAIR }}>
                  <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--green,#3b6933)" }}>Google Business Profile</span>
                </div>
                <div style={{ margin: 16, borderRadius: 10, border: HAIR, padding: 16, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                  <div>
                    <div className="font-display" style={{ fontSize: 18, fontWeight: 800, color: "var(--forest,#07241a)", letterSpacing: "-0.01em" }}>The Magnolia Café</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "var(--amber,#df8752)" }}>4.9</span>
                      <span style={{ display: "flex", gap: 1 }}>{[0, 1, 2, 3, 4].map((i) => <IcoStar key={i} />)}</span>
                      <span style={{ fontSize: 12, color: "rgba(34,26,17,0.45)" }}>(214)</span>
                    </div>
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, alignSelf: "flex-start", fontSize: 12, fontWeight: 700, color: "var(--green,#3b6933)", background: "rgba(59,105,51,0.1)", padding: "4px 10px", borderRadius: 999 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green,#3b6933)" }} />Open now &middot; closes 9 PM
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    {[
                      { i: <IcoMap />, t: "112 Main Street, Natchez, MS" },
                      { i: <IcoSearch />, t: "Southern comfort food &middot; $$" },
                      { i: <IcoMega />, t: "(601) 555-0142" },
                    ].map((r, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderTop: idx === 0 ? "none" : HAIR, color: "rgba(34,26,17,0.7)", fontSize: 13 }}>
                        <span style={{ color: "var(--sage,#86a496)", flexShrink: 0 }}>{r.i}</span>
                        <span dangerouslySetInnerHTML={{ __html: r.t }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Monthly report card */}
              <div className="reveal reveal-delay-2" style={{ ...CARD, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ padding: "14px 16px", borderBottom: HAIR }}>
                  <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--green,#3b6933)" }}>Monthly report</span>
                </div>
                <div style={{ margin: 16, borderRadius: 10, border: HAIR, padding: 16, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                  {[
                    { label: "Calls this month", value: "142", delta: "+42" },
                    { label: "Reservations", value: "128", delta: "+18" },
                    { label: "Catering leads", value: "6", delta: "+4" },
                    { label: "Website visits", value: "1,340", delta: "+310" },
                  ].map((r, idx) => (
                    <div key={r.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: idx === 0 ? 0 : 10, borderTop: idx === 0 ? "none" : HAIR }}>
                      <span style={{ fontSize: 13, color: "rgba(34,26,17,0.6)" }}>{r.label}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span className="font-display" style={{ fontSize: 18, fontWeight: 800, color: "var(--forest,#07241a)" }}>{r.value}</span>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 2, fontSize: 11, fontWeight: 700, color: "var(--green,#3b6933)" }}><IcoUp />{r.delta}</span>
                      </span>
                    </div>
                  ))}
                  <p style={{ fontSize: 12, color: "rgba(34,26,17,0.5)", lineHeight: 1.6, margin: "4px 0 0" }}>
                    No jargon. Just the numbers that prove your investment is working.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ─────────────────────────────────── */}
        <section id="services" style={{ padding: isMobile ? "64px 16px" : "88px 24px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div className="reveal" style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "flex-end", gap: 20, marginBottom: isMobile ? 36 : 48 }}>
              <div style={{ maxWidth: 560 }}>
                <Tag>What&apos;s included</Tag>
                <h2 className="font-display" style={{ fontSize: "clamp(2rem,3.6vw,2.9rem)", fontWeight: 900, color: "var(--forest,#07241a)", lineHeight: 1.12, letterSpacing: "-0.025em" }}>
                  Everything you need.<br /><em style={{ fontStyle: "italic", color: "var(--green,#3b6933)" }}>Nothing to manage yourself.</em>
                </h2>
              </div>
              <p style={{ fontSize: 15, color: "rgba(34,26,17,0.6)", lineHeight: 1.7, maxWidth: 240 }}>
                One flat monthly fee covers your entire digital presence.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: 16 }}>
              {SERVICES.map((s, i) => (
                <div key={s.title} className={`reveal reveal-delay-${(i % 3) + 1} lift`} style={{ ...CARD, padding: 24 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(59,105,51,0.08)", border: "1px solid rgba(59,105,51,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green,#3b6933)", marginBottom: 16 }}>
                    {s.icon}
                  </div>
                  <h3 className="font-display" style={{ fontSize: 18, fontWeight: 800, color: "var(--forest,#07241a)", letterSpacing: "-0.015em", marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(34,26,17,0.6)", lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ──────────────────────────────────── */}
        <section id="how" style={{ background: "white", borderTop: HAIR, borderBottom: HAIR, padding: isMobile ? "64px 16px" : "88px 24px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div className="reveal" style={{ maxWidth: 560, marginBottom: isMobile ? 36 : 52 }}>
              <Tag>How it works</Tag>
              <h2 className="font-display" style={{ fontSize: "clamp(2rem,3.6vw,2.9rem)", fontWeight: 900, color: "var(--forest,#07241a)", lineHeight: 1.12, letterSpacing: "-0.025em" }}>
                Three steps to a<br /><em style={{ fontStyle: "italic", color: "var(--green,#3b6933)" }}>full revenue capture system.</em>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: 16 }}>
              {STEPS.map(({ num, title, body }, i) => (
                <div key={num} className={`reveal reveal-delay-${i + 1}`} style={{ ...CARD, padding: 28, position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <span style={{ width: 38, height: 38, borderRadius: 10, background: "var(--forest,#07241a)", color: "var(--sage,#86a496)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, flexShrink: 0 }} className="font-display">{num}</span>
                    {i < STEPS.length - 1 && !isMobile && (
                      <span style={{ flex: 1, height: 1, background: "rgba(34,26,17,0.12)", position: "relative" }}>
                        <span style={{ position: "absolute", right: -1, top: -3, color: "rgba(34,26,17,0.2)" }}><IcoArrow /></span>
                      </span>
                    )}
                  </div>
                  <h3 className="font-display" style={{ fontSize: 18, fontWeight: 800, color: "var(--forest,#07241a)", letterSpacing: "-0.015em", lineHeight: 1.25, marginBottom: 10 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(34,26,17,0.62)", lineHeight: 1.7, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ROI CALCULATOR PANEL ──────────────────────────── */}
        <section style={{ padding: isMobile ? "64px 16px" : "88px 24px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div className="reveal" style={{ maxWidth: 560, marginBottom: isMobile ? 36 : 48 }}>
              <Tag>The math</Tag>
              <h2 className="font-display" style={{ fontSize: "clamp(2rem,3.6vw,2.9rem)", fontWeight: 900, color: "var(--forest,#07241a)", lineHeight: 1.12, letterSpacing: "-0.025em", marginBottom: 12 }}>
                What better digital capture<br /><em style={{ fontStyle: "italic", color: "var(--green,#3b6933)" }}>is actually worth.</em>
              </h2>
              <p style={{ fontSize: 15, color: "rgba(34,26,17,0.6)", lineHeight: 1.7 }}>
                A conservative illustration for a typical small-town independent restaurant.
              </p>
            </div>

            {/* Calculator card */}
            <div className="reveal" style={{ ...CARD, padding: isMobile ? 20 : 28 }}>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1.2fr", gap: isMobile ? 12 : 16, alignItems: "stretch" }}>

                {/* Line 1 */}
                <div style={{ background: "var(--ivory,#fff8f4)", borderRadius: 12, border: HAIR, padding: 20 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(34,26,17,0.45)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Extra table bookings</div>
                  <div className="font-display" style={{ fontSize: 34, fontWeight: 900, color: "var(--green,#3b6933)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>$1,600</div>
                  <div style={{ fontSize: 12, color: "rgba(34,26,17,0.45)", lineHeight: 1.55 }}>5 tables/week &times; $80 avg &times; 4 weeks</div>
                </div>

                {/* Line 2 */}
                <div style={{ background: "var(--ivory,#fff8f4)", borderRadius: 12, border: HAIR, padding: 20, position: "relative" }}>
                  {!isMobile && <span className="font-display" style={{ position: "absolute", left: -14, top: "50%", transform: "translateY(-50%)", fontSize: 22, fontWeight: 900, color: "rgba(34,26,17,0.25)" }}>+</span>}
                  <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(34,26,17,0.45)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Catering &amp; private events</div>
                  <div className="font-display" style={{ fontSize: 34, fontWeight: 900, color: "var(--amber,#df8752)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>$1,500</div>
                  <div style={{ fontSize: 12, color: "rgba(34,26,17,0.45)", lineHeight: 1.55 }}>2 bookings/month &times; $750 avg</div>
                </div>

                {/* Total */}
                <div style={{ background: "var(--forest,#07241a)", borderRadius: 12, padding: 20, position: "relative" }}>
                  {!isMobile && <span className="font-display" style={{ position: "absolute", left: -14, top: "50%", transform: "translateY(-50%)", fontSize: 22, fontWeight: 900, color: "rgba(34,26,17,0.25)" }}>=</span>}
                  <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,248,244,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Potential monthly uplift</div>
                  <div className="font-display" style={{ fontSize: 40, fontWeight: 900, color: "var(--ivory,#fff8f4)", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>~$3,100</div>
                  <div style={{ fontSize: 12, color: "rgba(255,248,244,0.5)", lineHeight: 1.55 }}>per month</div>
                </div>
              </div>

              {/* Investment strip */}
              <div style={{ marginTop: 16, paddingTop: 20, borderTop: HAIR, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "auto 1fr", gap: isMobile ? 16 : 32, alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(34,26,17,0.45)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>Your investment</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                    <span className="font-display" style={{ fontSize: 30, fontWeight: 900, color: "var(--forest,#07241a)", letterSpacing: "-0.03em" }}>$200&ndash;$300</span>
                    <span style={{ fontSize: 13, color: "rgba(34,26,17,0.45)" }}>/month</span>
                  </div>
                </div>
                <p className="font-display" style={{ fontSize: isMobile ? 15 : 17, fontWeight: 700, fontStyle: "italic", color: "var(--charcoal,#221a11)", lineHeight: 1.5, margin: 0 }}>
                  &ldquo;One catering booking pays for months of service. This isn&apos;t a website purchase. It&apos;s an investment in customer acquisition.&rdquo;
                </p>
              </div>
              <p style={{ fontSize: 12, color: "rgba(34,26,17,0.4)", marginTop: 16, marginBottom: 0 }}>
                Illustrative estimates. Actual results vary by market and execution.
              </p>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────── */}
        <section style={{ background: "white", borderTop: HAIR, borderBottom: HAIR, padding: isMobile ? "64px 16px" : "88px 24px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div className="reveal" style={{ marginBottom: isMobile ? 36 : 48 }}>
              <Tag>What restaurants say</Tag>
              <h2 className="font-display" style={{ fontSize: "clamp(2rem,3.6vw,2.9rem)", fontWeight: 900, color: "var(--forest,#07241a)", lineHeight: 1.12, letterSpacing: "-0.025em" }}>
                Real results.<br /><em style={{ fontStyle: "italic", color: "var(--green,#3b6933)" }}>Real restaurants.</em>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: 16 }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={t.name} className={`reveal reveal-delay-${i + 1} lift`} style={{ ...CARD, padding: 26, display: "flex", flexDirection: "column" }}>
                  <span style={{ display: "flex", gap: 2, marginBottom: 14 }}>{[0, 1, 2, 3, 4].map((s) => <IcoStar key={s} />)}</span>
                  <p className="font-display" style={{ fontSize: 16, color: "var(--charcoal,#221a11)", lineHeight: 1.6, fontStyle: "italic", fontWeight: 600, flex: 1, margin: "0 0 18px" }}>&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--forest,#07241a)", fontSize: 14 }}>{t.name}</div>
                    <div style={{ color: "rgba(34,26,17,0.5)", fontSize: 13, marginTop: 2 }}>{t.restaurant} &middot; {t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ───────────────────────────────────────── */}
        <section id="pricing" style={{ padding: isMobile ? "64px 16px" : "88px 24px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div className="reveal" style={{ textAlign: "center", maxWidth: 560, margin: "0 auto", marginBottom: isMobile ? 36 : 48 }}>
              <div style={{ display: "flex", justifyContent: "center" }}><Tag>Pricing</Tag></div>
              <h2 className="font-display" style={{ fontSize: "clamp(2rem,3.6vw,2.9rem)", fontWeight: 900, color: "var(--forest,#07241a)", lineHeight: 1.12, letterSpacing: "-0.025em", marginBottom: 12 }}>
                Simple. <em style={{ fontStyle: "italic", color: "var(--green,#3b6933)" }}>Transparent.</em>
              </h2>
              <p style={{ fontSize: 15, color: "rgba(34,26,17,0.6)", lineHeight: 1.7 }}>
                No setup fees. No long-term contracts. No surprises. Cancel any time.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 18, maxWidth: 780, margin: "0 auto" }}>
              {/* Starter */}
              <div className="reveal lift" style={{ ...CARD, padding: 32 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(34,26,17,0.45)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Starter</div>
                <div style={{ marginBottom: 4 }}>
                  <span className="font-display" style={{ fontSize: 52, fontWeight: 900, color: "var(--forest,#07241a)", letterSpacing: "-0.03em" }}>$200</span>
                  <span style={{ fontSize: 15, color: "rgba(34,26,17,0.45)", marginLeft: 4 }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: "rgba(34,26,17,0.55)", marginBottom: 24 }}>Get found online</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 11 }}>
                  {STARTER_FEATURES.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--charcoal,#221a11)" }}>
                      <span style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(59,105,51,0.12)", color: "var(--green,#3b6933)" }}><IcoCheck /></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "block", textAlign: "center", border: "1.5px solid var(--forest,#07241a)", color: "var(--forest,#07241a)", borderRadius: 10, padding: "13px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>Get started</a>
              </div>

              {/* Growth */}
              <div className="reveal reveal-delay-1 lift" style={{ ...CARD, background: "var(--forest,#07241a)", border: "1px solid var(--forest,#07241a)", padding: 32, position: "relative" }}>
                <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "var(--amber,#df8752)", color: "white", fontSize: 12, fontWeight: 700, padding: "5px 16px", borderRadius: 999, whiteSpace: "nowrap" }}>Most popular</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,248,244,0.55)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Growth</div>
                <div style={{ marginBottom: 4 }}>
                  <span className="font-display" style={{ fontSize: 52, fontWeight: 900, color: "var(--ivory,#fff8f4)", letterSpacing: "-0.03em" }}>$300</span>
                  <span style={{ fontSize: 15, color: "rgba(255,248,244,0.55)", marginLeft: 4 }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: "rgba(255,248,244,0.55)", marginBottom: 24 }}>Full revenue capture system</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 11 }}>
                  {GROWTH_FEATURES.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,248,244,0.85)" }}>
                      <span style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(134,164,150,0.25)", color: "var(--sage,#86a496)" }}><IcoCheck /></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--green,#3b6933)", color: "var(--ivory,#fff8f4)", borderRadius: 10, padding: "13px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
                  Get started <IcoArrow />
                </a>
              </div>
            </div>
            <p style={{ textAlign: "center", fontSize: 14, color: "rgba(34,26,17,0.6)", marginTop: 24 }}>
              Not sure which plan fits?{" "}
              <a href="#contact" style={{ color: "var(--green,#3b6933)", fontWeight: 700, textDecoration: "none" }}>Let&apos;s talk.</a> We&apos;ll help you figure it out.
            </p>
          </div>
        </section>

        {/* ── CONTACT ───────────────────────────────────────── */}
        <section id="contact" style={{ background: "white", borderTop: HAIR, padding: isMobile ? "64px 16px" : "88px 24px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.3fr", gap: isMobile ? 40 : 64, alignItems: "start" }}>

            {/* Left */}
            <div className="reveal">
              <Tag>Get started</Tag>
              <h2 className="font-display" style={{ fontSize: "clamp(2rem,3.8vw,3rem)", fontWeight: 900, color: "var(--forest,#07241a)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 18 }}>
                Let us find where<br /><em style={{ fontStyle: "italic", color: "var(--green,#3b6933)" }}>revenue is leaking.</em>
              </h2>
              <p style={{ fontSize: 16, color: "rgba(34,26,17,0.65)", lineHeight: 1.75, marginBottom: 28, maxWidth: 400 }}>
                We&apos;ll audit your current online presence for free and show you exactly what&apos;s costing you customers. Before we even get on the phone.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { n: "01", heading: "Free revenue audit", body: "We review your search rankings, Google listing, website, and local competitors before we even get on the phone." },
                  { n: "02", heading: "Live in ~2 weeks", body: "Your website, Google listing, and ads are all live within two weeks. No long drawn-out process." },
                  { n: "03", heading: "No setup fees", body: "One flat monthly fee. No contracts. Cancel any time. We earn your business every single month." },
                ].map(({ n, heading, body }, idx) => (
                  <div key={n} style={{ padding: "18px 0", borderTop: idx === 0 ? "none" : HAIR }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                      <span className="font-display" style={{ fontSize: 12, fontWeight: 800, color: "var(--amber,#df8752)" }}>{n}</span>
                      <span style={{ fontSize: 15, fontWeight: 700, color: "var(--forest,#07241a)" }}>{heading}</span>
                    </div>
                    <p style={{ fontSize: 14, color: "rgba(34,26,17,0.6)", lineHeight: 1.65, margin: 0, paddingLeft: 22 }}>{body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="reveal reveal-delay-1" style={{ ...CARD, background: "var(--ivory,#fff8f4)", padding: isMobile ? "24px 20px" : 36 }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ width: 58, height: 58, borderRadius: "50%", background: "rgba(59,105,51,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", color: "var(--green,#3b6933)" }}>
                    <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="font-display" style={{ fontSize: 24, fontWeight: 800, color: "var(--forest,#07241a)", marginBottom: 8, letterSpacing: "-0.015em" }}>We&apos;ll be in touch soon!</h3>
                  <p style={{ fontSize: 15, color: "rgba(34,26,17,0.6)", lineHeight: 1.7 }}>Expect a call or email within one business day.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <h3 className="font-display" style={{ fontSize: 20, fontWeight: 800, color: "var(--forest,#07241a)", marginBottom: 4, letterSpacing: "-0.015em" }}>Tell us about your restaurant</h3>
                    <p style={{ fontSize: 13, color: "rgba(34,26,17,0.5)", margin: 0 }}>We&apos;ll audit your online presence before we call.</p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest,#07241a)", marginBottom: 5, letterSpacing: "0.05em" }}>YOUR NAME *</label>
                      <input type="text" required value={form.name} onChange={up("name")} placeholder="Jane Smith" style={inp} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest,#07241a)", marginBottom: 5, letterSpacing: "0.05em" }}>RESTAURANT NAME *</label>
                      <input type="text" required value={form.business} onChange={up("business")} placeholder="Main Street Diner" style={inp} />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest,#07241a)", marginBottom: 5, letterSpacing: "0.05em" }}>EMAIL *</label>
                      <input type="email" required value={form.email} onChange={up("email")} placeholder="you@example.com" style={inp} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest,#07241a)", marginBottom: 5, letterSpacing: "0.05em" }}>PHONE</label>
                      <input type="tel" value={form.phone} onChange={up("phone")} placeholder="(601) 555-0100" style={inp} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest,#07241a)", marginBottom: 5, letterSpacing: "0.05em" }}>ABOUT YOUR RESTAURANT</label>
                    <textarea rows={4} value={form.message} onChange={up("message")} placeholder="e.g. Family BBQ in Hattiesburg, MS — rely on word of mouth and want to grow..." style={{ ...inp, resize: "none" } as React.CSSProperties} />
                  </div>
                  <button type="submit" style={{ background: "var(--forest,#07241a)", color: "var(--ivory,#fff8f4)", padding: "14px 24px", borderRadius: 10, fontSize: 15, fontWeight: 800, border: "none", cursor: "pointer", fontFamily: "var(--font-body,system-ui)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    Get my free revenue audit <IcoArrow />
                  </button>
                  <p style={{ textAlign: "center", fontSize: 12, color: "rgba(34,26,17,0.4)", margin: 0 }}>No spam. No sales pressure. Just a conversation.</p>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer style={{ background: "var(--forest,#07241a)", padding: 28 }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", justifyContent: "space-between", gap: isMobile ? 10 : 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <CompassMark size={26} ring="#FBF4E9" north="#E08A54" south="#FBF4E9" hub="#07241a" />
            <span className="font-display" style={{ fontWeight: 700, color: "var(--ivory,#fff8f4)", fontSize: 15, letterSpacing: "-0.01em" }}>Main Street Compass</span>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,248,244,0.5)", margin: 0, textAlign: "center" }}>
            © 2026 Main Street Compass &middot; Serving Mississippi &amp; the Southeast
          </p>
        </div>
      </footer>

    </div>
  );
}

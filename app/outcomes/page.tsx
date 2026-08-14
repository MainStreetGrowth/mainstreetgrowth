"use client";
import CompassMark from "../_components/CompassMark";
import { useState, useEffect } from "react";

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

/* ─── Mobile detection hook ────────────────────────────────── */
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

/* ─── Local palette (warm, appetite-driven — NOT the brand tokens) ─ */
const C = {
  cream: "#fff8f4",   /* ivory base (brand) */
  ink: "#1e3a2f",     /* forest-mid: dark surfaces + text */
  coral: "#3b6933",   /* green: primary accent (buttons, badges) */
  gold: "#df8752",    /* terracotta/amber: secondary accent */
  blush: "#fcebdc",   /* linen tint */
  muted: "rgba(34,26,17,0.6)",
  onInk: "#fff8f4",
  onInkMuted: "rgba(255,248,244,0.66)",
};

/* ─── SVG icons (stroke only, no emoji) ────────────────────── */
const IcoArrow = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);
const IcoCheck = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
const IcoSearch = () => (
  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <circle cx="11" cy="11" r="8" />
    <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
  </svg>
);
const IcoTable = () => (
  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h16M4 10l1-4h14l1 4M4 10v2m16-2v2M6 12v6m12-6v6" />
  </svg>
);
const IcoCalendar = () => (
  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path strokeLinecap="round" d="M3 9h18M8 3v4m8-4v4" />
  </svg>
);
const IcoHeart = () => (
  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.8 6.6a5.5 5.5 0 00-7.8 0L12 7.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 000-7.8z" />
  </svg>
);

/* ─── Data (reused from homepage) ──────────────────────────── */
const MARQUEE = [
  "The Magnolia Café", "River Bend BBQ", "Cotton Row Diner",
  "Delta Blues Kitchen", "Porch & Table", "Red River Smokehouse",
  "Southern Roots Kitchen", "Main Street Diner",
];

type Outcome = {
  icon: () => React.ReactElement;
  stat: string;
  statLabel: string;
  title: string;
  body: string;
  fill: "ink" | "coral" | "gold" | "cream";
  /* bento sizing */
  colSpan: number;
  rowSpan: number;
};

const OUTCOMES: Outcome[] = [
  {
    icon: IcoSearch,
    stat: "80%",
    statLabel: "of diners search online before choosing where to eat",
    title: "Show up first when locals search",
    body: "When someone nearby searches for a place to eat, you are the one they find, not your competitor down the street. First page of Google, first pin on the map, first choice for dinner.",
    fill: "ink",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    icon: IcoTable,
    stat: "$1,600",
    statLabel: "in extra table bookings a month",
    title: "Fill your slow nights",
    body: "Turn empty Tuesday tables into booked ones. Five extra tables a week at an $80 average adds up to about $1,600 more every month.",
    fill: "coral",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    icon: IcoCalendar,
    stat: "5–20×",
    statLabel: "more revenue per catering & event booking",
    title: "Win catering & private events",
    body: "Private events, catering jobs, and rehearsal dinners spend 5 to 20 times more than a regular table. Two bookings a month at $750 is another $1,500 in your inbox.",
    fill: "gold",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    icon: IcoHeart,
    stat: "∞",
    statLabel: "reasons for your regulars to come back",
    title: "Turn first-timers into regulars",
    body: "With your own email list, text list, and loyalty program, you bring your best customers back on your terms instead of hoping they remember you.",
    fill: "cream",
    colSpan: 1,
    rowSpan: 1,
  },
];

const STEPS = [
  {
    num: "01",
    title: "We audit your revenue funnel",
    body: "We map exactly where customers are slipping away before we build anything.",
  },
  {
    num: "02",
    title: "We build your capture system",
    body: "Website, Google profile, local SEO, and ads. All live within two weeks.",
  },
  {
    num: "03",
    title: "You see results every month",
    body: "A clear monthly report. Calls, visits, reservations, and leads. No jargon.",
  },
];

const SERVICES = [
  "Professional website, hosted & maintained",
  "Google Business Profile management",
  "Local search (SEO) to rank #1 nearby",
  "Google Ads to reach ready-to-eat searchers",
  "Lead & call tracking with monthly reports",
  "Ongoing menu & content updates",
];

const TESTIMONIALS = [
  { quote: "We went from invisible to showing up first in Google for our area. Our Friday nights are now fully booked weeks in advance.", name: "Tommy R.", restaurant: "Red River Smokehouse", location: "Natchez, MS" },
  { quote: "I've wasted money on marketing before, so I was skeptical. Within 6 weeks we were getting 30 to 40 extra calls a month.", name: "Maria L.", restaurant: "Delta Blues Café", location: "Greenville, MS" },
  { quote: "They built everything in two weeks and handled every detail. I didn't have to think about it once.", name: "James P.", restaurant: "Porch & Table", location: "Tupelo, MS" },
];

/* ─── Reusable pieces ──────────────────────────────────────── */
const Kicker = ({ children, color = C.coral }: { children: React.ReactNode; color?: string }) => (
  <div style={{
    display: "inline-flex", alignItems: "center", gap: 8,
    fontSize: 12, fontWeight: 700, letterSpacing: "0.14em",
    textTransform: "uppercase", color, marginBottom: 20,
  }}>
    <span style={{ width: 22, height: 2, background: color, display: "inline-block" }} />
    {children}
  </div>
);

const Stars = ({ color = C.gold }: { color?: string }) => (
  <span style={{ color, fontSize: 15, letterSpacing: 1 }}>★★★★★</span>
);

/* ─── Bento fill helpers ───────────────────────────────────── */
function tileColors(fill: Outcome["fill"]) {
  switch (fill) {
    case "ink":
      return { bg: C.ink, text: C.onInk, sub: C.onInkMuted, stat: C.gold, border: "none", iconBg: "rgba(223,135,82,0.16)", iconColor: C.gold };
    case "coral":
      return { bg: C.coral, text: "#fff8f4", sub: "rgba(255,248,244,0.82)", stat: "#FFFFFF", border: "none", iconBg: "rgba(255,255,255,0.18)", iconColor: "#fff8f4" };
    case "gold":
      return { bg: C.blush, text: C.ink, sub: C.muted, stat: C.gold, border: `1.5px solid rgba(34,26,17,0.12)`, iconBg: "rgba(223,135,82,0.16)", iconColor: C.gold };
    case "cream":
    default:
      return { bg: C.cream, text: C.ink, sub: C.muted, stat: C.coral, border: `1.5px solid rgba(34,26,17,0.14)`, iconBg: "rgba(59,105,51,0.1)", iconColor: C.coral };
  }
}

/* ─── Main component ───────────────────────────────────────── */
export default function Outcomes() {
  useScrollReveal();
  const isMobile = useIsMobile();

  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const up = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const inp: React.CSSProperties = {
    width: "100%", padding: "13px 16px", borderRadius: 8,
    border: "1.5px solid rgba(34,26,17,0.16)", fontSize: 14,
    color: C.ink, background: "#FFFFFF",
    outline: "none", boxSizing: "border-box",
    fontFamily: "var(--font-body,system-ui)", transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: 11, fontWeight: 700, color: C.ink,
    marginBottom: 5, letterSpacing: "0.06em",
  };

  const renderTile = (o: Outcome, i: number) => {
    const t = tileColors(o.fill);
    const Icon = o.icon;
    return (
      <div key={o.title} className={`lift reveal reveal-delay-${i}`} style={{
        background: t.bg, color: t.text, border: t.border,
        borderRadius: 8, padding: isMobile ? "28px 24px" : "34px 32px",
        minHeight: isMobile ? "auto" : 300,
        display: "flex", flexDirection: "column",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: t.iconBg, color: t.iconColor,
          }}>
            <Icon />
          </div>
          <div className="font-display" style={{
            fontSize: "clamp(2.6rem,4.4vw,3.6rem)", fontWeight: 800,
            color: t.stat, letterSpacing: "-0.045em", lineHeight: 1,
          }}>{o.stat}</div>
        </div>
        <div style={{
          fontSize: 13.5, fontWeight: 500, color: t.sub, lineHeight: 1.45,
        }}>{o.statLabel}</div>
        <h3 style={{
          fontSize: "clamp(1.35rem,2.1vw,1.75rem)", fontWeight: 800,
          color: t.text, letterSpacing: "-0.025em", lineHeight: 1.15, margin: "20px 0 10px",
        }}>{o.title}</h3>
        <p style={{ fontSize: 14.5, lineHeight: 1.6, margin: 0, color: t.sub }}>{o.body}</p>
      </div>
    );
  };

  return (
    <div style={{ fontFamily: "var(--font-body,system-ui)", backgroundColor: C.cream, color: C.ink }}>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, padding: "0 24px", background: C.ink, borderBottom: `1px solid rgba(255,255,255,0.08)` }}>
        <div style={{
          maxWidth: 1160, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 62,
        }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <CompassMark size={28} ring={C.onInk} north={C.gold} south={C.onInk} hub={C.ink} />
            <span style={{ fontWeight: 800, fontSize: 15, color: C.onInk, letterSpacing: "-0.02em" }}>Main Street Compass</span>
          </a>
          <a href="#contact" style={{
            background: C.onInk, color: C.ink,
            padding: "9px 20px", borderRadius: 4, fontSize: 13, fontWeight: 700,
            display: "inline-flex", alignItems: "center", gap: 7,
            textDecoration: "none",
          }}>
            Free revenue audit <IcoArrow />
          </a>
        </div>
      </header>

      <main>

        {/* ── HERO — asymmetric, outcome-first ─────────────────── */}
        <section className="grain" style={{ background: C.ink, padding: isMobile ? "56px 20px 64px" : "88px 24px 96px" }}>
          <div style={{
            maxWidth: 1160, margin: "0 auto",
            display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.15fr 0.85fr",
            gap: isMobile ? 44 : 64, alignItems: "center",
          }}>
            {/* Left — headline */}
            <div>
              <div className="reveal">
                <Kicker color="#86a496">For independent restaurants · MS &amp; the Southeast</Kicker>
              </div>
              <h1 className="reveal reveal-delay-1" style={{
                fontSize: isMobile ? "3rem" : "clamp(3.2rem,6vw,5.4rem)",
                fontWeight: 800, lineHeight: 0.98, letterSpacing: "-0.045em",
                color: C.onInk, margin: "0 0 26px",
              }}>
                More full tables.<br />
                More catering.<br />
                <span style={{ color: "#86a496" }}>More </span>
                <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: "#86a496" }}>regulars.</span>
              </h1>
              <p className="reveal reveal-delay-2" style={{
                fontSize: isMobile ? 17 : 19, color: C.onInkMuted, lineHeight: 1.65,
                margin: "0 0 34px", maxWidth: 480,
              }}>
                Your next customer is already searching. We make sure they find you first, book the table, and come back again. You just cook.
              </p>
              <div className="reveal reveal-delay-3" style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                <a href="#contact" style={{
                  background: C.onInk, color: C.ink,
                  padding: "16px 30px", borderRadius: 4, fontSize: 16, fontWeight: 800,
                  display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none",
                }}>
                  Get a free revenue audit <IcoArrow />
                </a>
                <a href="#outcomes" style={{
                  color: C.onInk, fontSize: 15, fontWeight: 700, textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: 7,
                  borderBottom: `2px solid rgba(255,248,244,0.3)`, paddingBottom: 3,
                }}>
                  See what you get
                </a>
              </div>
              <div className="reveal reveal-delay-4" style={{ display: "flex", gap: 18, marginTop: 26, flexWrap: "wrap", fontSize: 13, color: C.onInkMuted }}>
                {["No setup fees", "No contracts", "Live in ~2 weeks"].map(t => (
                  <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: "#86a496", display: "inline-flex" }}><IcoCheck /></span>{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — oversized stat cluster */}
            <div className="reveal reveal-delay-2" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: isMobile ? "28px 26px" : "34px 32px" }}>
                <div className="font-display" style={{ fontSize: isMobile ? "4rem" : "clamp(4rem,7vw,5.6rem)", fontWeight: 800, color: C.gold, lineHeight: 0.9, letterSpacing: "-0.04em", marginBottom: 12 }}>
                  ~$3,100
                </div>
                <div style={{ fontSize: 14, color: C.onInkMuted, lineHeight: 1.5 }}>
                  in extra revenue a typical restaurant can capture every month online.
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "24px 22px" }}>
                  <div className="font-display" style={{ fontSize: "clamp(2.4rem,5vw,3.2rem)", fontWeight: 800, color: "#86a496", lineHeight: 0.9, letterSpacing: "-0.03em", marginBottom: 8 }}>80%</div>
                  <div style={{ fontSize: 12.5, color: C.onInkMuted, lineHeight: 1.45 }}>search online before picking a place to eat</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "24px 22px" }}>
                  <div className="font-display" style={{ fontSize: "clamp(2.4rem,5vw,3.2rem)", fontWeight: 800, color: C.onInk, lineHeight: 0.9, letterSpacing: "-0.03em", marginBottom: 8 }}>5–20×</div>
                  <div style={{ fontSize: 12.5, color: C.onInkMuted, lineHeight: 1.45 }}>more per catering &amp; event booking</div>
                </div>
              </div>
            </div>
          </div>

          {/* Marquee */}
          <div style={{ maxWidth: 1160, margin: isMobile ? "48px auto 0" : "64px auto 0", borderTop: `1px solid rgba(255,255,255,0.1)`, paddingTop: 22 }}>
            <p style={{ textAlign: "center", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: C.onInkMuted, marginBottom: 16 }}>
              Trusted by local restaurants across the region
            </p>
            <div style={{ overflow: "hidden", WebkitMaskImage: "linear-gradient(to right,transparent,rgba(0,0,0,0.8) 12%,rgba(0,0,0,0.8) 88%,transparent)" }}>
              <div className="marquee-track" style={{ gap: 60 }}>
                {[...MARQUEE, ...MARQUEE].map((n, i) => (
                  <span key={i} className="font-display" style={{ fontSize: 15, fontWeight: 700, color: C.onInk, opacity: 0.4, whiteSpace: "nowrap" }}>{n}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── THE OUTCOMES — BENTO GRID centerpiece ────────────── */}
        <section id="outcomes" style={{ background: C.blush, padding: isMobile ? "68px 20px" : "108px 24px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div className="reveal" style={{ maxWidth: 680, marginBottom: isMobile ? 40 : 60 }}>
              <Kicker>What you get</Kicker>
              <h2 style={{
                fontSize: "clamp(2.4rem,4.8vw,3.8rem)", fontWeight: 800,
                color: C.ink, lineHeight: 1.02, letterSpacing: "-0.035em", margin: 0,
              }}>
                Four outcomes.{" "}
                <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: C.coral }}>One system working for you.</span>
              </h2>
            </div>

            {/* Outcomes: balanced 2×2 grid (single column on mobile) */}
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? 16 : 20,
            }}>
              {OUTCOMES.map((o, i) => renderTile(o, i))}
            </div>
          </div>
        </section>

        {/* ── PROOF band — ROI payoff + testimonials ───────────── */}
        <section style={{ background: C.ink, padding: isMobile ? "68px 20px" : "108px 24px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div className="reveal" style={{ maxWidth: 720, marginBottom: isMobile ? 40 : 54 }}>
              <Kicker color={C.gold}>What it&apos;s worth to you</Kicker>
              <h2 style={{
                fontSize: "clamp(2.4rem,4.8vw,3.8rem)", fontWeight: 800,
                color: C.onInk, lineHeight: 1.04, letterSpacing: "-0.035em", margin: 0,
              }}>
                About{" "}
                <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: C.gold }}>$3,100 more</span>{" "}
                in your pocket, every month.
              </h2>
              <p style={{ marginTop: 16, fontSize: 16, color: C.onInkMuted, lineHeight: 1.7 }}>
                A conservative picture of what stronger digital capture is worth to a typical small-town restaurant.
              </p>
            </div>

            {/* Equation */}
            <div className="reveal" style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 40px 1fr 40px 1.15fr",
              gap: isMobile ? 12 : 0, alignItems: "stretch", marginBottom: 18,
            }}>
              <div style={{ background: "rgba(255,248,244,0.06)", borderRadius: 18, padding: isMobile ? "26px 24px" : "32px 34px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: C.onInkMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>More tables filled</div>
                <div className="font-display" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 800, color: "#86a496", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 10 }}>$1,600</div>
                <div style={{ fontSize: 12, color: "rgba(255,248,244,0.42)", lineHeight: 1.6 }}>5 tables/week × $80 avg × 4 weeks</div>
              </div>
              <div style={{ display: isMobile ? "none" : "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="font-display" style={{ fontSize: 30, fontWeight: 800, color: "rgba(255,248,244,0.22)" }}>+</span>
              </div>
              <div style={{ background: "rgba(255,248,244,0.06)", borderRadius: 18, padding: isMobile ? "26px 24px" : "32px 34px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: C.onInkMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>Catering &amp; events won</div>
                <div className="font-display" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 800, color: C.gold, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 10 }}>$1,500</div>
                <div style={{ fontSize: 12, color: "rgba(255,248,244,0.42)", lineHeight: 1.6 }}>2 bookings/month × $750 avg</div>
              </div>
              <div style={{ display: isMobile ? "none" : "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="font-display" style={{ fontSize: 30, fontWeight: 800, color: "rgba(255,248,244,0.22)" }}>=</span>
              </div>
              <div style={{ background: C.gold, borderRadius: 18, padding: isMobile ? "26px 24px" : "32px 34px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(34,26,17,0.72)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>In your pocket</div>
                <div className="font-display" style={{ fontSize: "clamp(2.6rem,5vw,4rem)", fontWeight: 800, color: C.ink, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 10 }}>~$3,100</div>
                <div style={{ fontSize: 12, color: "rgba(34,26,17,0.72)", lineHeight: 1.6 }}>every month</div>
              </div>
            </div>

            {/* Investment aside */}
            <div className="reveal" style={{
              background: "rgba(255,248,244,0.05)", borderRadius: 18, padding: isMobile ? "22px 24px" : "24px 34px",
              border: "1px solid rgba(255,248,244,0.1)", marginBottom: isMobile ? 44 : 60,
              display: "flex", flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: 14,
            }}>
              <p style={{ margin: 0, fontSize: 15, color: C.onInkMuted, lineHeight: 1.65, maxWidth: 660 }}>
                Your investment is just <strong style={{ color: C.onInk, fontWeight: 700 }}>$200–$300/month</strong>, all done for you.
                One catering booking pays for months of service.
              </p>
              <span style={{ fontSize: 12, color: "rgba(255,248,244,0.4)", lineHeight: 1.5, flexShrink: 0, maxWidth: 220 }}>
                Illustrative estimates. Results vary by market and execution.
              </span>
            </div>

            {/* Testimonials */}
            <div className="reveal" style={{ marginBottom: 26 }}>
              <h3 style={{ fontSize: "clamp(1.4rem,2.4vw,2rem)", fontWeight: 800, color: C.onInk, letterSpacing: "-0.025em", margin: 0 }}>
                And these outcomes are real.
              </h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "7fr 5fr", gap: 16 }}>
              <div className="lift reveal" style={{ background: C.coral, borderRadius: 8, padding: isMobile ? 28 : 44, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 280 }}>
                <div>
                  <div className="font-display" style={{ fontSize: 76, color: "rgba(255,248,244,0.55)", lineHeight: 0.75, marginBottom: 20, fontWeight: 800 }}>&ldquo;</div>
                  <p className="font-display" style={{ fontSize: 22, color: "#fff8f4", lineHeight: 1.5, fontWeight: 600, fontStyle: "italic", margin: 0 }}>{TESTIMONIALS[0].quote}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 32 }}>
                  <div>
                    <div style={{ fontWeight: 700, color: "#fff8f4", fontSize: 15 }}>{TESTIMONIALS[0].name}</div>
                    <div style={{ color: "rgba(255,248,244,0.7)", fontSize: 13, marginTop: 3 }}>{TESTIMONIALS[0].restaurant} · {TESTIMONIALS[0].location}</div>
                  </div>
                  <Stars color="#fff8f4" />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {TESTIMONIALS.slice(1).map((t, i) => (
                  <div key={t.name} className={`lift reveal reveal-delay-${i + 1}`} style={{ background: C.cream, borderRadius: 8, padding: 26, flex: 1 }}>
                    <Stars />
                    <p className="font-display" style={{ fontSize: 16, color: C.ink, lineHeight: 1.6, fontWeight: 600, fontStyle: "italic", margin: "12px 0 16px" }}>&ldquo;{t.quote}&rdquo;</p>
                    <div style={{ fontWeight: 700, color: C.ink, fontSize: 14 }}>{t.name}</div>
                    <div style={{ color: C.muted, fontSize: 13 }}>{t.restaurant} · {t.location}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECONDARY: How it works (quiet) ──────────────────── */}
        <section style={{ background: C.cream, padding: isMobile ? "56px 20px 20px" : "76px 24px 24px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div className="reveal" style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "baseline", gap: isMobile ? 6 : 16, marginBottom: 26 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.coral }}>How it works</span>
              <span style={{ fontSize: 15, color: C.muted, lineHeight: 1.6 }}>Three simple steps, and we handle every one of them.</span>
            </div>
            <div style={{
              display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
              gap: isMobile ? 12 : 24, borderTop: `1px solid rgba(34,26,17,0.14)`, paddingTop: 26,
            }}>
              {STEPS.map(({ num, title, body }) => (
                <div key={num} className="reveal" style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span className="font-display" style={{ fontSize: 20, fontWeight: 800, color: "rgba(34,26,17,0.28)", lineHeight: 1.1, flexShrink: 0 }}>{num}</span>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: C.ink, margin: "0 0 6px", lineHeight: 1.3 }}>{title}</h3>
                    <p style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.6, margin: 0 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECONDARY: What's included (quiet) ───────────────── */}
        <section style={{ background: C.cream, padding: isMobile ? "40px 20px 60px" : "48px 24px 84px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div className="reveal" style={{
              background: C.blush, borderRadius: 8,
              padding: isMobile ? "30px 24px" : "38px 44px",
            }}>
              <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "baseline", gap: isMobile ? 6 : 14, marginBottom: 22 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.coral }}>What&apos;s included</span>
                <span className="font-display" style={{ fontSize: "clamp(1.1rem,1.8vw,1.4rem)", fontWeight: 700, color: C.ink, letterSpacing: "-0.015em" }}>
                  And yes, we handle all of it.
                </span>
              </div>
              <ul style={{
                listStyle: "none", padding: 0, margin: 0,
                display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "12px 40px",
              }}>
                {SERVICES.map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(34,26,17,0.78)" }}>
                    <span style={{
                      width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: "rgba(59,105,51,0.14)", color: C.coral,
                    }}>
                      <IcoCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── PRICING ─────────────────────────────────────────── */}
        <section id="pricing" style={{ background: C.cream, padding: isMobile ? "68px 20px" : "100px 24px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr", gap: isMobile ? 16 : 48, alignItems: "center", marginBottom: 52 }} className="reveal">
              <div>
                <Kicker>Pricing</Kicker>
                <h2 style={{ fontSize: "clamp(2.2rem,4.2vw,3.4rem)", fontWeight: 800, color: C.ink, lineHeight: 1.05, letterSpacing: "-0.03em", margin: 0 }}>
                  A fraction of{" "}
                  <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: C.coral }}>what it returns.</span>
                </h2>
              </div>
              <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.7, margin: 0, maxWidth: 360 }}>No setup fees. No long-term contracts. No surprises. Cancel any time.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20, maxWidth: isMobile ? "100%" : 840, margin: "0 auto" }}>
              {/* Starter */}
              <div className="lift reveal" style={{ background: "#FFFFFF", borderRadius: 8, padding: 36, border: `1.5px solid rgba(34,26,17,0.12)` }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>Starter</div>
                <div style={{ marginBottom: 4 }}>
                  <span className="font-display" style={{ fontSize: 58, fontWeight: 800, color: C.ink, letterSpacing: "-0.04em" }}>$200</span>
                  <span style={{ fontSize: 16, color: C.muted, marginLeft: 4 }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: C.muted, marginBottom: 26 }}>Get found online</p>
                <div style={{ height: 1, background: "rgba(34,26,17,0.1)", marginBottom: 22 }} />
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Professional website", "Domain & hosting", "Google Business Profile", "Local SEO", "Monthly report", "2 content updates/month"].map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: C.ink }}>
                      <span style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(59,105,51,0.14)", color: C.coral }}>
                        <IcoCheck />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "block", textAlign: "center", border: `2px solid ${C.ink}`, color: C.ink, borderRadius: 4, padding: "13px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>Get started</a>
              </div>

              {/* Growth */}
              <div className="lift reveal reveal-delay-1" style={{ background: C.ink, borderRadius: 8, padding: 36, position: "relative" }}>
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: C.coral, color: "#fff8f4", fontSize: 12, fontWeight: 700, padding: "5px 16px", borderRadius: 4, whiteSpace: "nowrap" }}>Most popular</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.onInkMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>Growth</div>
                <div style={{ marginBottom: 4 }}>
                  <span className="font-display" style={{ fontSize: 58, fontWeight: 800, color: C.onInk, letterSpacing: "-0.04em" }}>$300</span>
                  <span style={{ fontSize: 16, color: C.onInkMuted, marginLeft: 4 }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: C.onInkMuted, marginBottom: 26 }}>Full revenue capture system</p>
                <div style={{ height: 1, background: "rgba(255,248,244,0.12)", marginBottom: 22 }} />
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Everything in Starter", "Google Ads management", "Keyword targeting", "Call & lead tracking", "Catering landing page", "Unlimited content updates"].map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: C.onInkMuted }}>
                      <span style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(223,135,82,0.22)", color: C.gold }}>
                        <IcoCheck />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: C.coral, color: "#fff8f4", borderRadius: 4, padding: "13px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
                  Get started <IcoArrow />
                </a>
              </div>
            </div>
            <p style={{ textAlign: "center", fontSize: 14, color: C.muted, marginTop: 24 }}>
              Not sure which plan fits?{" "}
              <a href="#contact" style={{ color: C.coral, fontWeight: 700, textDecoration: "none" }}>Let&apos;s talk.</a> We&apos;ll help you figure it out.
            </p>
          </div>
        </section>

        {/* ── FINAL CTA + CONTACT ─────────────────────────────── */}
        <section id="contact" style={{ background: C.ink, padding: isMobile ? "68px 20px" : "96px 24px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div className="reveal" style={{ marginBottom: isMobile ? 44 : 56 }}>
              <Kicker color={C.gold}>Get started</Kicker>
              <h2 style={{ fontSize: "clamp(2.6rem,5.5vw,4.8rem)", fontWeight: 800, color: C.onInk, lineHeight: 1.02, letterSpacing: "-0.04em", maxWidth: 760, margin: 0 }}>
                Let&apos;s fill your tables.{" "}
                <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: C.gold }}>Starting with a free audit.</span>
              </h2>
              <p style={{ fontSize: 18, color: C.onInkMuted, lineHeight: 1.7, marginTop: 20, maxWidth: 520 }}>
                We&apos;ll audit your current online presence for free and show you exactly what&apos;s costing you customers. Before we even get on the phone.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr", gap: "clamp(40px,6vw,88px)", alignItems: isMobile ? "stretch" : "start" }}>
              <div className="reveal" style={{ paddingTop: 8 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {[
                    { n: "01", heading: "Free revenue audit", body: "We review your search rankings, Google listing, website, and local competitors before we even get on the phone." },
                    { n: "02", heading: "Live in ~2 weeks", body: "Your website, Google listing, and ads are all live within two weeks. No long drawn-out process." },
                    { n: "03", heading: "No setup fees", body: "One flat monthly fee. No contracts. Cancel any time. We earn your business every single month." },
                  ].map(({ n, heading, body }) => (
                    <div key={n} style={{ padding: "22px 0", borderTop: "1px solid rgba(255,248,244,0.1)" }}>
                      <div style={{ fontSize: 11, color: C.onInkMuted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
                        <span style={{ color: C.gold }}>{n} —</span> What to expect
                      </div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: C.onInk, marginBottom: 6 }}>{heading}</div>
                      <p style={{ fontSize: 14, color: C.onInkMuted, lineHeight: 1.65, margin: 0 }}>{body}</p>
                    </div>
                  ))}
                  <div style={{ borderTop: "1px solid rgba(255,248,244,0.1)", paddingTop: 20 }}>
                    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 10 : 18, fontSize: 13, color: C.onInkMuted }}>
                      {["Starting at $200/mo", "Mississippi & the Southeast"].map(t => (
                        <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ color: C.gold, display: "inline-flex" }}><IcoCheck /></span>{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal reveal-delay-1" style={{ background: C.cream, borderRadius: 8, padding: isMobile ? "28px 22px" : "40px clamp(24px,4vw,44px)" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(59,105,51,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: C.coral }}>
                      <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="font-display" style={{ fontSize: 26, fontWeight: 800, color: C.ink, marginBottom: 8, letterSpacing: "-0.015em" }}>We&apos;ll be in touch soon!</h3>
                    <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.65 }}>Expect a call or email within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <div style={{ marginBottom: 4 }}>
                      <h3 className="font-display" style={{ fontSize: 20, fontWeight: 800, color: C.ink, marginBottom: 4, letterSpacing: "-0.015em" }}>Tell us about your restaurant</h3>
                      <p style={{ fontSize: 13, color: C.muted }}>We&apos;ll audit your online presence before we call.</p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <div>
                        <label style={labelStyle}>YOUR NAME *</label>
                        <input type="text" required value={form.name} onChange={up("name")} placeholder="Jane Smith" style={inp} />
                      </div>
                      <div>
                        <label style={labelStyle}>RESTAURANT NAME *</label>
                        <input type="text" required value={form.business} onChange={up("business")} placeholder="Main Street Diner" style={inp} />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <div>
                        <label style={labelStyle}>EMAIL *</label>
                        <input type="email" required value={form.email} onChange={up("email")} placeholder="you@example.com" style={inp} />
                      </div>
                      <div>
                        <label style={labelStyle}>PHONE</label>
                        <input type="tel" value={form.phone} onChange={up("phone")} placeholder="(601) 555-0100" style={inp} />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>ABOUT YOUR RESTAURANT</label>
                      <textarea rows={4} value={form.message} onChange={up("message")} placeholder="e.g. Family BBQ in Hattiesburg, MS — rely on word of mouth and want to grow..." style={{ ...inp, resize: "none" } as React.CSSProperties} />
                    </div>
                    <button type="submit" style={{ background: C.coral, color: "#fff8f4", padding: "15px 24px", borderRadius: 4, fontSize: 15, fontWeight: 800, border: "none", cursor: "pointer", fontFamily: "var(--font-body,system-ui)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                      Get my free revenue audit <IcoArrow />
                    </button>
                    <p style={{ textAlign: "center", fontSize: 12, color: C.muted, margin: 0 }}>No spam. No sales pressure. Just a conversation.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer style={{ background: C.ink, padding: "24px", borderTop: "1px solid rgba(255,248,244,0.08)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", justifyContent: "space-between", gap: isMobile ? 8 : 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <CompassMark size={26} ring={C.cream} north={C.coral} south={C.cream} hub={C.ink} />
            <span style={{ fontWeight: 800, color: C.onInk, fontSize: 15, letterSpacing: "-0.02em" }}>Main Street Compass</span>
          </div>
          <p style={{ fontSize: 12, color: C.onInkMuted, margin: 0, textAlign: isMobile ? "center" : "left" }}>
            © 2026 Main Street Compass · Serving Mississippi &amp; the Southeast
          </p>
        </div>
      </footer>

    </div>
  );
}

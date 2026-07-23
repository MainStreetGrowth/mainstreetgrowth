"use client";
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

/* ─── Arrow icon ───────────────────────────────────────────── */
const IcoArrow = () => (
  <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

/* ─── Data (reused verbatim from homepage) ─────────────────── */
const LEAKS = [
  {
    n: "01", label: "Discovery",
    title: "Search Traffic Goes to Your Competitors",
    body: "When someone nearby searches for a place to eat, your competitors show up. You don’t. If you’re not on the first page of Google, that customer is walking into someone else’s restaurant.",
  },
  {
    n: "02", label: "Capture",
    title: "High-Value Customers Slip Away",
    body: "Private events, catering jobs, rehearsal dinners. These customers spend 5 to 20 times more than a regular table. Most restaurants have no dedicated way to reach them, so those leads go to whoever shows up first.",
  },
  {
    n: "03", label: "Retention",
    title: "No Way to Bring Customers Back",
    body: "Your best customers want to come back. But if you have no way to reach them directly, you’re relying on them to remember. A text list, email newsletter, or loyalty program changes that.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "We audit your revenue funnel",
    body: "Before we build anything, we map exactly where customers are slipping away. Search rankings, website gaps, Google profile, local competitors. You see every leak before we fix it.",
  },
  {
    num: "02",
    title: "We build your revenue capture system",
    body: "Professional website, Google Business Profile, local SEO, and Google Ads. Everything goes live within two weeks. Every piece is built to turn searches into customers walking through your door.",
  },
  {
    num: "03",
    title: "You see results every month",
    body: "A clear monthly report showing calls, website visits, reservations, and leads captured. No jargon. Just the numbers that prove your investment is working.",
  },
];

const SERVICES = [
  { n: "01", title: "Professional Website", desc: "Hosted, maintained, mobile-first, and reservation-ready." },
  { n: "02", title: "Google Business Profile", desc: "Appear first on Google Maps when locals search for food nearby." },
  { n: "03", title: "Local Search (SEO)", desc: "Rank #1 locally, pull organic traffic, and beat competitors." },
  { n: "04", title: "Google Ads", desc: "Reach people searching for exactly what you serve, right now." },
  { n: "05", title: "Lead & Call Tracking", desc: "Every month: calls, reservations, catering inquiries, website visits." },
  { n: "06", title: "Ongoing Maintenance", desc: "Menu updates, seasonal content, Google review responses. All handled." },
];

const TESTIMONIALS = [
  { quote: "We went from invisible to showing up first in Google for our area. Our Friday nights are now fully booked weeks in advance.", name: "Tommy R.", restaurant: "Red River Smokehouse", location: "Natchez, MS" },
  { quote: "I've wasted money on marketing before, so I was skeptical. Within 6 weeks we were getting 30 to 40 extra calls a month.", name: "Maria L.", restaurant: "Delta Blues Café", location: "Greenville, MS" },
  { quote: "They built everything in two weeks and handled every detail. I didn't have to think about it once.", name: "James P.", restaurant: "Porch & Table", location: "Tupelo, MS" },
];

const STARTER = ["Professional website", "Domain & hosting", "Google Business Profile", "Local SEO", "Monthly report", "2 content updates/month"];
const GROWTH = ["Everything in Starter", "Google Ads management", "Keyword targeting", "Call & lead tracking", "Catering landing page", "Unlimited content updates"];

/* ─── Main component ───────────────────────────────────────── */
export default function Modernist() {
  useScrollReveal();
  const isMobile = useIsMobile();

  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const up = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const FOREST = "var(--forest,#07241a)";
  const FOREST_MID = "var(--forest-mid,#1e3a2f)";
  const IVORY = "var(--ivory,#fff8f4)";
  const AMBER = "var(--amber,#df8752)";
  const SAGE = "var(--sage,#86a496)";

  const inp: React.CSSProperties = {
    width: "100%", padding: "16px 18px", borderRadius: 0,
    border: "2px solid rgba(255,248,244,0.18)", fontSize: 15,
    color: IVORY, background: "transparent",
    outline: "none", boxSizing: "border-box",
    fontFamily: "var(--font-body,system-ui)",
  };
  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: 11, fontWeight: 800, color: "rgba(255,248,244,0.55)",
    marginBottom: 8, letterSpacing: "0.14em", textTransform: "uppercase",
  };

  // Oversized faint index number, absolutely positioned
  const bigIndex = (n: string, dark: boolean): React.CSSProperties => ({
    position: "absolute", top: isMobile ? 8 : -10, right: isMobile ? 8 : 24,
    fontSize: isMobile ? "clamp(5rem,26vw,9rem)" : "clamp(9rem,15vw,17rem)",
    fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1,
    color: dark ? "rgba(255,248,244,0.06)" : "rgba(7,36,26,0.05)",
    userSelect: "none", pointerEvents: "none", zIndex: 0,
  });

  const sectionBase: React.CSSProperties = {
    minHeight: "100vh", scrollSnapAlign: "start",
    position: "relative", overflow: "hidden",
    display: "flex", flexDirection: "column", justifyContent: "center",
    padding: isMobile ? "88px 20px" : "96px clamp(32px,6vw,88px)",
  };

  const inner: React.CSSProperties = { maxWidth: 1180, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 };

  const kicker = (color: string): React.CSSProperties => ({
    display: "inline-block", fontSize: 12, fontWeight: 800,
    letterSpacing: "0.22em", textTransform: "uppercase", color,
    marginBottom: 28,
  });

  return (
    <div
      style={{
        fontFamily: "var(--font-body,system-ui)",
        background: FOREST,
        color: IVORY,
        height: "100vh", overflowY: "auto",
        scrollSnapType: "y proximity",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {/* ── NAV ─────────────────────────────────────────────── */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: FOREST, borderBottom: "1px solid rgba(255,248,244,0.12)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: isMobile ? "0 20px" : "0 clamp(32px,6vw,88px)", height: 66, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: IVORY }}>
            <div style={{ width: 30, height: 30, background: AMBER, color: FOREST, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 800 }}>M</div>
            <span style={{ fontWeight: 800, fontSize: 15, letterSpacing: "-0.02em", textTransform: "uppercase" }}>Main Street Compass</span>
          </a>
          <nav style={{ display: isMobile ? "none" : "flex", gap: 34, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {[["#services", "Services"], ["#how", "Process"], ["#pricing", "Pricing"]].map(([h, l]) => (
              <a key={h} href={h} style={{ color: "rgba(255,248,244,0.6)", textDecoration: "none" }}>{l}</a>
            ))}
          </nav>
          <a href="#contact" style={{ background: IVORY, color: FOREST, padding: "10px 20px", borderRadius: 0, fontSize: 12, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            Get started <IcoArrow />
          </a>
        </div>
      </header>

      <main>
        {/* ── 01 · HERO ─────────────────────────────────────── */}
        <section style={{ ...sectionBase, background: FOREST }}>
          <div aria-hidden="true" style={{ position: "absolute", left: isMobile ? -8 : 16, bottom: isMobile ? 24 : 40, fontSize: "clamp(11rem,40vw,34rem)", fontWeight: 800, letterSpacing: "-0.06em", lineHeight: 0.8, color: "rgba(223,135,82,0.07)", userSelect: "none", pointerEvents: "none", zIndex: 0 }}>
            GET FOUND
          </div>
          <div style={inner}>
            <div className="reveal" style={{ ...kicker(SAGE), marginBottom: 32 }}>
              Mississippi &amp; the Southeast
            </div>
            <h1 className="reveal reveal-delay-1" style={{ fontSize: isMobile ? "clamp(3rem,15vw,4.5rem)" : "clamp(4rem,11vw,9rem)", fontWeight: 800, lineHeight: 0.92, letterSpacing: "-0.045em", margin: 0, color: IVORY, textTransform: "uppercase" }}>
              Your next<br />customer is<br />already{" "}
              <span style={{ color: AMBER }}>searching.</span>
            </h1>
            <p className="reveal reveal-delay-2" style={{ fontSize: isMobile ? 16 : "clamp(16px,1.5vw,20px)", color: "rgba(255,248,244,0.72)", lineHeight: 1.7, marginTop: 32, maxWidth: 540 }}>
              Someone in your town is searching for a restaurant right now. We build the system that makes sure they find yours.{" "}
              <strong style={{ color: IVORY, fontWeight: 700 }}>Starting at $200/month.</strong>
            </p>
            <div className="reveal reveal-delay-3" style={{ display: "flex", gap: 0, marginTop: 40, flexWrap: "wrap", alignItems: "stretch" }}>
              <a href="#contact" style={{ background: IVORY, color: FOREST, padding: "20px 36px", fontSize: 15, fontWeight: 800, letterSpacing: "0.04em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                Get a free revenue audit <IcoArrow />
              </a>
              <a href="#how" style={{ border: "2px solid rgba(255,248,244,0.25)", borderLeft: isMobile ? "2px solid rgba(255,248,244,0.25)" : "none", color: IVORY, padding: "20px 30px", fontSize: 15, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                How it works
              </a>
            </div>
          </div>
        </section>

        {/* ── 02 · THE PROBLEM ──────────────────────────────── */}
        <section style={{ ...sectionBase, background: IVORY, color: FOREST }}>
          <div style={bigIndex("02", false)}>02</div>
          <div style={inner}>
            <div className="reveal" style={{ maxWidth: 820, marginBottom: isMobile ? 44 : 64 }}>
              <span style={kicker(AMBER)}>The problem</span>
              <h2 style={{ fontSize: isMobile ? "clamp(2.2rem,9vw,3rem)" : "clamp(3rem,6vw,6rem)", fontWeight: 800, lineHeight: 0.98, letterSpacing: "-0.04em", margin: 0, color: FOREST, textTransform: "uppercase" }}>
                How much revenue leaks before they find you?
              </h2>
            </div>
            <div style={{ borderTop: "2px solid rgba(7,36,26,0.15)" }}>
              {LEAKS.map(({ n, label, title, body }, i) => (
                <div key={n} className={`reveal reveal-delay-${i}`} style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "220px 1fr", gap: isMobile ? 14 : 48, padding: isMobile ? "28px 0" : "40px 0", borderBottom: "1px solid rgba(7,36,26,0.12)", alignItems: "start" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                    <span style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.04em", color: AMBER, lineHeight: 1 }}>{n}</span>
                    <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(7,36,26,0.5)" }}>{label}</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: isMobile ? "1.35rem" : "clamp(1.5rem,2.4vw,2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, margin: "0 0 12px", color: FOREST }}>{title}</h3>
                    <p style={{ fontSize: 16, color: "rgba(34,26,17,0.7)", lineHeight: 1.75, margin: 0, maxWidth: 620 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 03 · PROCESS ──────────────────────────────────── */}
        <section id="how" style={{ ...sectionBase, background: FOREST_MID }}>
          <div style={bigIndex("03", true)}>03</div>
          <div style={inner}>
            <div className="reveal" style={{ marginBottom: isMobile ? 40 : 64 }}>
              <span style={kicker(SAGE)}>How it works</span>
              <h2 style={{ fontSize: isMobile ? "clamp(2.2rem,9vw,3rem)" : "clamp(3rem,6vw,6rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.04em", margin: 0, color: IVORY, textTransform: "uppercase" }}>
                Your revenue<br /><span style={{ color: SAGE }}>capture system.</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 0, borderTop: "2px solid rgba(255,248,244,0.15)" }}>
              {STEPS.map(({ num, title, body }, i) => (
                <div key={num} className={`reveal reveal-delay-${i}`} style={{ padding: isMobile ? "32px 0" : "40px 40px 40px 0", borderRight: !isMobile && i < 2 ? "1px solid rgba(255,248,244,0.14)" : "none", borderBottom: isMobile && i < 2 ? "1px solid rgba(255,248,244,0.14)" : "none", paddingLeft: !isMobile && i > 0 ? 40 : 0 }}>
                  <div style={{ fontSize: "clamp(3.5rem,7vw,6rem)", fontWeight: 800, letterSpacing: "-0.05em", color: AMBER, lineHeight: 1, marginBottom: 20 }}>{num}</div>
                  <h3 style={{ fontSize: isMobile ? "1.3rem" : "clamp(1.3rem,1.9vw,1.7rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 14px", color: IVORY }}>{title}</h3>
                  <p style={{ fontSize: 15, color: "rgba(255,248,244,0.7)", lineHeight: 1.75, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 04 · SERVICES ─────────────────────────────────── */}
        <section id="services" style={{ ...sectionBase, background: IVORY, color: FOREST }}>
          <div style={bigIndex("04", false)}>04</div>
          <div style={inner}>
            <div className="reveal" style={{ marginBottom: isMobile ? 36 : 52, maxWidth: 760 }}>
              <span style={kicker(AMBER)}>What&apos;s included</span>
              <h2 style={{ fontSize: isMobile ? "clamp(2.2rem,9vw,3rem)" : "clamp(3rem,6vw,6rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.04em", margin: 0, color: FOREST, textTransform: "uppercase" }}>
                Everything you need.
              </h2>
              <p style={{ fontSize: 16, color: "rgba(34,26,17,0.62)", lineHeight: 1.7, marginTop: 18, maxWidth: 460 }}>
                One flat monthly fee covers your entire digital presence. Nothing to manage yourself.
              </p>
            </div>
            <div style={{ borderTop: "2px solid rgba(7,36,26,0.15)" }}>
              {SERVICES.map(({ n, title, desc }) => (
                <div key={n} className="reveal" style={{ display: "grid", gridTemplateColumns: isMobile ? "auto 1fr" : "auto 1fr 1fr", gap: isMobile ? 16 : 36, alignItems: "center", padding: isMobile ? "20px 0" : "26px 0", borderBottom: "1px solid rgba(7,36,26,0.12)" }}>
                  <span style={{ fontSize: isMobile ? "1.4rem" : "clamp(1.6rem,2.6vw,2.4rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "rgba(7,36,26,0.28)", lineHeight: 1 }}>{n}</span>
                  <h3 style={{ fontSize: isMobile ? "1.3rem" : "clamp(1.5rem,3vw,2.6rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, margin: 0, color: FOREST, textTransform: "uppercase" }}>{title}</h3>
                  {!isMobile && <p style={{ fontSize: 15, color: "rgba(34,26,17,0.62)", lineHeight: 1.6, margin: 0 }}>{desc}</p>}
                  {isMobile && <p style={{ gridColumn: "2 / 3", fontSize: 14, color: "rgba(34,26,17,0.62)", lineHeight: 1.6, margin: "6px 0 0" }}>{desc}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 05 · THE MATH ─────────────────────────────────── */}
        <section style={{ ...sectionBase, background: FOREST }}>
          <div style={bigIndex("05", true)}>05</div>
          <div style={inner}>
            <div className="reveal" style={{ marginBottom: isMobile ? 40 : 60, maxWidth: 760 }}>
              <span style={kicker(SAGE)}>The math</span>
              <h2 style={{ fontSize: isMobile ? "clamp(2.2rem,9vw,3rem)" : "clamp(3rem,6vw,6rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.04em", margin: 0, color: IVORY, textTransform: "uppercase" }}>
                What better capture is worth.
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,248,244,0.6)", lineHeight: 1.7, marginTop: 18, maxWidth: 480 }}>
                A conservative illustration for a typical small-town independent restaurant.
              </p>
            </div>

            <div className="reveal" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1.2fr", borderTop: "2px solid rgba(255,248,244,0.15)", borderLeft: isMobile ? "none" : "2px solid rgba(255,248,244,0.15)" }}>
              {[
                { tag: "Extra table bookings", val: "$1,600", note: "5 tables/week × $80 avg × 4 weeks", color: SAGE, big: false },
                { tag: "Catering & private events", val: "$1,500", note: "2 bookings/month × $750 avg", color: AMBER, big: false },
                { tag: "Potential monthly uplift", val: "~$3,100", note: "per month", color: IVORY, big: true },
              ].map(({ tag, val, note, color, big }) => (
                <div key={tag} style={{ padding: isMobile ? "26px 0" : "40px 36px", borderRight: isMobile ? "none" : "2px solid rgba(255,248,244,0.15)", borderBottom: "2px solid rgba(255,248,244,0.15)", background: big ? "rgba(134,164,150,0.08)" : "transparent" }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,248,244,0.5)", marginBottom: 18 }}>{tag}</div>
                  <div style={{ fontSize: big ? "clamp(3.4rem,8vw,6rem)" : "clamp(2.6rem,6vw,4.4rem)", fontWeight: 800, letterSpacing: "-0.045em", color, lineHeight: 0.9, marginBottom: 14 }}>{val}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,248,244,0.4)", lineHeight: 1.55 }}>{note}</div>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-1" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 0, borderLeft: isMobile ? "none" : "2px solid rgba(255,248,244,0.15)" }}>
              <div style={{ padding: isMobile ? "26px 0" : "36px", borderRight: isMobile ? "none" : "2px solid rgba(255,248,244,0.15)", borderBottom: "2px solid rgba(255,248,244,0.15)" }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,248,244,0.5)", marginBottom: 16 }}>Your investment</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <span style={{ fontSize: "clamp(2.4rem,5vw,3.6rem)", fontWeight: 800, letterSpacing: "-0.045em", color: IVORY, lineHeight: 1 }}>$200–$300</span>
                  <span style={{ fontSize: 15, color: "rgba(255,248,244,0.45)" }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: "rgba(255,248,244,0.6)", lineHeight: 1.7, marginTop: 14 }}>Full website, Google listing, SEO, ads, reporting, and maintenance. All done for you.</p>
              </div>
              <div style={{ padding: isMobile ? "26px 0" : "36px", borderBottom: "2px solid rgba(255,248,244,0.15)" }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,248,244,0.5)", marginBottom: 16 }}>The point</div>
                <p style={{ fontSize: isMobile ? "1.15rem" : "clamp(1.2rem,1.7vw,1.5rem)", fontWeight: 700, lineHeight: 1.5, color: IVORY, margin: 0 }}>
                  One catering booking pays for months of service. This isn&apos;t a website purchase. It&apos;s an investment in customer acquisition.
                </p>
              </div>
            </div>
            <p style={{ fontSize: 12, color: "rgba(255,248,244,0.35)", marginTop: 20 }}>Illustrative estimates. Actual results vary by market and execution.</p>
          </div>
        </section>

        {/* ── 06 · TESTIMONIALS ─────────────────────────────── */}
        <section style={{ ...sectionBase, background: IVORY, color: FOREST }}>
          <div style={bigIndex("06", false)}>06</div>
          <div style={inner}>
            <div className="reveal" style={{ marginBottom: isMobile ? 40 : 56, maxWidth: 720 }}>
              <span style={kicker(AMBER)}>What restaurants say</span>
              <h2 style={{ fontSize: isMobile ? "clamp(2.2rem,9vw,3rem)" : "clamp(3rem,6vw,6rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.04em", margin: 0, color: FOREST, textTransform: "uppercase" }}>
                Real results.<br /><span style={{ color: AMBER }}>Real restaurants.</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 0, borderTop: "2px solid rgba(7,36,26,0.15)" }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={t.name} className={`reveal reveal-delay-${i}`} style={{ padding: isMobile ? "28px 0" : "36px 32px 36px 0", borderRight: !isMobile && i < 2 ? "1px solid rgba(7,36,26,0.14)" : "none", borderBottom: isMobile && i < 2 ? "1px solid rgba(7,36,26,0.14)" : "none", paddingLeft: !isMobile && i > 0 ? 32 : 0, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <p style={{ fontSize: isMobile ? "1.15rem" : "clamp(1.1rem,1.5vw,1.35rem)", fontWeight: 700, lineHeight: 1.45, color: FOREST, margin: "0 0 28px", letterSpacing: "-0.01em" }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 14, color: FOREST, textTransform: "uppercase", letterSpacing: "0.04em" }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: "rgba(34,26,17,0.5)", marginTop: 4 }}>{t.restaurant} · {t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 07 · PRICING ──────────────────────────────────── */}
        <section id="pricing" style={{ ...sectionBase, background: FOREST_MID }}>
          <div style={bigIndex("07", true)}>07</div>
          <div style={inner}>
            <div className="reveal" style={{ marginBottom: isMobile ? 40 : 56, maxWidth: 720 }}>
              <span style={kicker(SAGE)}>Pricing</span>
              <h2 style={{ fontSize: isMobile ? "clamp(2.2rem,9vw,3rem)" : "clamp(3rem,6vw,6rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.04em", margin: 0, color: IVORY, textTransform: "uppercase" }}>
                Simple. Transparent.
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,248,244,0.62)", lineHeight: 1.7, marginTop: 18 }}>
                No setup fees. No long-term contracts. No surprises. Cancel any time.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 0, borderTop: "2px solid rgba(255,248,244,0.18)", borderLeft: isMobile ? "none" : "2px solid rgba(255,248,244,0.18)" }}>
              {/* Starter */}
              <div style={{ padding: isMobile ? "32px 24px" : "44px 40px", borderRight: isMobile ? "none" : "2px solid rgba(255,248,244,0.18)", borderBottom: "2px solid rgba(255,248,244,0.18)", background: "transparent" }}>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,248,244,0.55)", marginBottom: 20 }}>Starter — Get found online</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 28 }}>
                  <span style={{ fontSize: "clamp(4rem,9vw,6.5rem)", fontWeight: 800, letterSpacing: "-0.05em", color: IVORY, lineHeight: 0.9 }}>$200</span>
                  <span style={{ fontSize: 16, color: "rgba(255,248,244,0.45)" }}>/month</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                  {STARTER.map((item) => (
                    <li key={item} style={{ fontSize: 15, color: "rgba(255,248,244,0.8)", padding: "11px 0", borderBottom: "1px solid rgba(255,248,244,0.1)" }}>{item}</li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, border: "2px solid var(--ivory,#fff8f4)", color: IVORY, padding: "16px 28px", fontSize: 14, fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none" }}>
                  Get started <IcoArrow />
                </a>
              </div>
              {/* Growth */}
              <div style={{ padding: isMobile ? "32px 24px" : "44px 40px", borderBottom: "2px solid rgba(255,248,244,0.18)", background: IVORY, color: FOREST, position: "relative" }}>
                <div style={{ position: "absolute", top: 0, right: 0, background: AMBER, color: FOREST, fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", padding: "7px 16px" }}>Most popular</div>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(7,36,26,0.55)", marginBottom: 20 }}>Growth — Full capture system</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 28 }}>
                  <span style={{ fontSize: "clamp(4rem,9vw,6.5rem)", fontWeight: 800, letterSpacing: "-0.05em", color: FOREST, lineHeight: 0.9 }}>$300</span>
                  <span style={{ fontSize: 16, color: "rgba(34,26,17,0.45)" }}>/month</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                  {GROWTH.map((item) => (
                    <li key={item} style={{ fontSize: 15, color: "rgba(34,26,17,0.85)", fontWeight: 500, padding: "11px 0", borderBottom: "1px solid rgba(7,36,26,0.12)" }}>{item}</li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: FOREST, color: IVORY, padding: "16px 28px", fontSize: 14, fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none" }}>
                  Get started <IcoArrow />
                </a>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,248,244,0.6)", marginTop: 22 }}>
              Not sure which plan fits?{" "}
              <a href="#contact" style={{ color: SAGE, fontWeight: 800, textDecoration: "underline" }}>Let&apos;s talk.</a> We&apos;ll help you figure it out.
            </p>
          </div>
        </section>

        {/* ── 08 · CONTACT ──────────────────────────────────── */}
        <section id="contact" style={{ ...sectionBase, background: FOREST }}>
          <div style={bigIndex("08", true)}>08</div>
          <div style={inner}>
            <div className="reveal" style={{ marginBottom: isMobile ? 40 : 56, maxWidth: 820 }}>
              <span style={kicker(AMBER)}>Get started</span>
              <h2 style={{ fontSize: isMobile ? "clamp(2.4rem,10vw,3.4rem)" : "clamp(3.4rem,7vw,7rem)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.045em", margin: 0, color: IVORY, textTransform: "uppercase" }}>
                Let us find where{" "}
                <span style={{ color: AMBER }}>revenue is leaking.</span>
              </h2>
              <p style={{ fontSize: 17, color: "rgba(255,248,244,0.65)", lineHeight: 1.7, marginTop: 24, maxWidth: 540 }}>
                We&apos;ll audit your current online presence for free and show you exactly what&apos;s costing you customers. Before we even get on the phone.
              </p>
            </div>

            <div className="reveal reveal-delay-1" style={{ borderTop: "2px solid rgba(255,248,244,0.18)", paddingTop: isMobile ? 32 : 44 }}>
              {submitted ? (
                <div style={{ padding: isMobile ? "20px 0" : "40px 0" }}>
                  <h3 style={{ fontSize: "clamp(2rem,5vw,3.4rem)", fontWeight: 800, letterSpacing: "-0.04em", color: SAGE, margin: "0 0 14px", textTransform: "uppercase" }}>We&apos;ll be in touch soon.</h3>
                  <p style={{ fontSize: 16, color: "rgba(255,248,244,0.7)", lineHeight: 1.7, margin: 0 }}>Expect a call or email within one business day.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 760 }}>
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 18 }}>
                    <div>
                      <label style={labelStyle}>Your name *</label>
                      <input type="text" required value={form.name} onChange={up("name")} placeholder="Jane Smith" style={inp} />
                    </div>
                    <div>
                      <label style={labelStyle}>Restaurant name *</label>
                      <input type="text" required value={form.business} onChange={up("business")} placeholder="Main Street Diner" style={inp} />
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 18 }}>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input type="email" required value={form.email} onChange={up("email")} placeholder="you@example.com" style={inp} />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input type="tel" value={form.phone} onChange={up("phone")} placeholder="(601) 555-0100" style={inp} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>About your restaurant</label>
                    <textarea rows={4} value={form.message} onChange={up("message")} placeholder="e.g. Family BBQ in Hattiesburg, MS — rely on word of mouth and want to grow..." style={{ ...inp, resize: "none" } as React.CSSProperties} />
                  </div>
                  <button type="submit" style={{ background: AMBER, color: FOREST, padding: "20px 32px", borderRadius: 0, fontSize: 15, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", border: "none", cursor: "pointer", fontFamily: "var(--font-body,system-ui)", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, alignSelf: "flex-start" }}>
                    Get my free revenue audit <IcoArrow />
                  </button>
                  <p style={{ fontSize: 13, color: "rgba(255,248,244,0.4)", margin: 0 }}>No spam. No sales pressure. Just a conversation.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── FOOTER ────────────────────────────────────────── */}
        <footer style={{ background: FOREST, borderTop: "1px solid rgba(255,248,244,0.14)", padding: isMobile ? "28px 20px" : "32px clamp(32px,6vw,88px)", scrollSnapAlign: "end" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", justifyContent: "space-between", gap: isMobile ? 12 : 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 28, height: 28, background: AMBER, color: FOREST, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800 }}>M</div>
              <span style={{ fontWeight: 800, fontSize: 15, letterSpacing: "-0.02em", textTransform: "uppercase", color: IVORY }}>Main Street Compass</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,248,244,0.45)", margin: 0, textAlign: "center" }}>
              © 2026 Main Street Compass · Serving Mississippi &amp; the Southeast
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

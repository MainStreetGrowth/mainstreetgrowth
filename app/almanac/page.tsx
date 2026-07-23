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

/* ─── Engraved compass rose (line-art SVG ornament) ────────── */
const CompassRose = ({ size = 46, color = "var(--charcoal,#221a11)" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth={1.1} aria-hidden="true">
    <circle cx="50" cy="50" r="46" />
    <circle cx="50" cy="50" r="34" />
    <circle cx="50" cy="50" r="4" />
    {/* Cardinal star points */}
    <path d="M50 6 L56 50 L50 62 L44 50 Z" />
    <path d="M50 94 L44 50 L50 38 L56 50 Z" />
    <path d="M6 50 L50 44 L62 50 L50 56 Z" />
    <path d="M94 50 L50 56 L38 50 L50 44 Z" />
    {/* Diagonal thin rays */}
    <path d="M50 50 L79 21" />
    <path d="M50 50 L21 21" />
    <path d="M50 50 L79 79" />
    <path d="M50 50 L21 79" />
  </svg>
);

/* ─── Data (reused verbatim from the homepage) ─────────────── */
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

const TESTIMONIALS = [
  { quote: "We went from invisible to showing up first in Google for our area. Our Friday nights are now fully booked weeks in advance.", name: "Tommy R.", restaurant: "Red River Smokehouse", location: "Natchez, MS" },
  { quote: "I've wasted money on marketing before, so I was skeptical. Within 6 weeks we were getting 30 to 40 extra calls a month.", name: "Maria L.", restaurant: "Delta Blues Café", location: "Greenville, MS" },
  { quote: "They built everything in two weeks and handled every detail. I didn't have to think about it once.", name: "James P.", restaurant: "Porch & Table", location: "Tupelo, MS" },
];

const SERVICES = [
  { n: "01", label: "Core",       title: "Professional Website",   body: "Hosted, maintained, mobile-first and reservations-ready. The front door of your entire digital presence." },
  { n: "02", label: "Visibility", title: "Google Business Profile", body: "Appear first on Google Maps when locals search for food nearby." },
  { n: "03", label: "Rankings",   title: "Local Search (SEO)",      body: "Rank number one locally, win organic traffic, and beat the competitors down the street." },
  { n: "04", label: "Paid Search", title: "Google Ads",             body: "Reach people searching for exactly what you serve, right now." },
  { n: "05", label: "Reports",    title: "Lead & Call Tracking",    body: "Every month you get a clear report: calls, reservations, catering inquiries, website visits. You always know what you’re getting back." },
  { n: "06", label: "Support",    title: "Ongoing Maintenance",     body: "Menu updates, seasonal content, Google review responses. We handle all of it. You focus on the food." },
];

const STARTER = ["Professional website", "Domain & hosting", "Google Business Profile", "Local SEO", "Monthly report", "2 content updates/month"];
const GROWTH = ["Everything in Starter", "Google Ads management", "Keyword targeting", "Call & lead tracking", "Catering landing page", "Unlimited content updates"];

const INDEX = [
  { id: "problem",      num: "I",   label: "The Problem" },
  { id: "how-it-works", num: "II",  label: "How It Works" },
  { id: "included",     num: "III", label: "What’s Included" },
  { id: "the-math",     num: "IV",  label: "The Math" },
  { id: "testimonials", num: "V",   label: "Testimonials" },
  { id: "pricing",      num: "VI",  label: "Pricing" },
  { id: "contact",      num: "VII", label: "Get Started" },
];

/* ─── Shared bits ──────────────────────────────────────────── */
const HAIR = "1px solid rgba(34,26,17,0.14)";
const HAIR_SOFT = "1px solid rgba(34,26,17,0.1)";

const SmallCaps = ({ children, color = "var(--amber,#df8752)" }: { children: React.ReactNode; color?: string }) => (
  <span className="font-display" style={{
    fontSize: 12, fontWeight: 700, letterSpacing: "0.18em",
    textTransform: "uppercase", color,
  }}>{children}</span>
);

const SectionRule = ({ title, kicker }: { title: string; kicker: string }) => (
  <div style={{ marginBottom: 28 }}>
    <div style={{ borderTop: "2px solid var(--charcoal,#221a11)", paddingTop: 8, display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
      <SmallCaps>{kicker}</SmallCaps>
      <SmallCaps color="rgba(34,26,17,0.4)">Main Street Compass</SmallCaps>
    </div>
    <h2 className="font-display" style={{
      fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900,
      color: "var(--forest,#07241a)", lineHeight: 1.08, letterSpacing: "-0.02em",
      margin: "18px 0 0",
    }}>{title}</h2>
  </div>
);

/* ─── Main component ───────────────────────────────────────── */
export default function Almanac() {
  useScrollReveal();
  const isMobile = useIsMobile();

  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const up = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const inp: React.CSSProperties = {
    width: "100%", padding: "12px 14px", borderRadius: 2,
    border: "1px solid rgba(34,26,17,0.3)", fontSize: 15,
    color: "var(--charcoal,#221a11)", background: "var(--ivory,#fff8f4)",
    outline: "none", boxSizing: "border-box",
    fontFamily: "var(--font-display,Georgia,serif)",
  };
  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
    textTransform: "uppercase", color: "var(--forest,#07241a)", marginBottom: 6,
    fontFamily: "var(--font-body,system-ui)",
  };

  return (
    <div style={{
      fontFamily: "var(--font-display,Georgia,serif)",
      background: "var(--ivory,#fff8f4)",
      color: "var(--charcoal,#221a11)",
      minHeight: "100vh",
    }}>

      {/* ── MASTHEAD ─────────────────────────────────────────── */}
      <header style={{ padding: isMobile ? "0 16px" : "0 40px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          {/* Top rule + metadata */}
          <div style={{
            borderTop: "3px solid var(--charcoal,#221a11)",
            borderBottom: HAIR,
            padding: "8px 0",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
            fontFamily: "var(--font-body,system-ui)", fontWeight: 600,
            color: "rgba(34,26,17,0.55)",
          }}>
            <span>No. 1 &middot; Est. 2026</span>
            {!isMobile && <span>The Local Almanac</span>}
            <span>Mississippi &amp; the Southeast</span>
          </div>

          {/* Wordmark + rose */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: isMobile ? 14 : 28,
            padding: isMobile ? "22px 0 14px" : "34px 0 20px",
          }}>
            {!isMobile && <CompassRose size={60} color="var(--forest,#07241a)" />}
            <h1 className="font-display" style={{
              fontSize: "clamp(2.4rem,7vw,5.4rem)", fontWeight: 900,
              letterSpacing: "-0.02em", lineHeight: 0.95, margin: 0,
              color: "var(--forest,#07241a)", textAlign: "center",
            }}>
              MAIN STREET<br />COMPASS
            </h1>
            {!isMobile && <CompassRose size={60} color="var(--forest,#07241a)" />}
          </div>

          {/* Dateline rule */}
          <div style={{
            borderTop: HAIR, borderBottom: "3px double var(--charcoal,#221a11)",
            padding: "9px 0",
            display: "flex", justifyContent: "center", alignItems: "center", gap: 12,
            fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase",
            fontFamily: "var(--font-body,system-ui)", fontWeight: 600,
            color: "var(--amber,#df8752)", textAlign: "center", flexWrap: "wrap",
          }}>
            <span>Customer Acquisition for Independent Restaurants</span>
            <span style={{ color: "rgba(34,26,17,0.3)" }}>&middot;</span>
            <span style={{ color: "rgba(34,26,17,0.55)" }}>Starting at $200 the month</span>
          </div>
        </div>
      </header>

      {/* ── BODY: index rail + editorial column ──────────────── */}
      <div style={{ padding: isMobile ? "0 16px" : "0 40px" }}>
        <div style={{
          maxWidth: 1180, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "232px 1fr",
          gap: isMobile ? 0 : 48,
        }}>

          {/* ── LEFT INDEX RAIL (desktop only) ─────────────── */}
          {!isMobile && (
            <aside style={{
              position: "sticky", top: 24, alignSelf: "start",
              height: "calc(100vh - 48px)",
              paddingTop: 44, paddingRight: 24,
              borderRight: HAIR,
            }}>
              <SmallCaps color="rgba(34,26,17,0.45)">Contents</SmallCaps>
              <div style={{ marginTop: 8, borderTop: HAIR }}>
                {INDEX.map(({ id, num, label }) => (
                  <a key={id} href={`#${id}`} style={{
                    display: "flex", alignItems: "baseline", gap: 12,
                    padding: "13px 0", borderBottom: HAIR_SOFT,
                    textDecoration: "none", color: "var(--charcoal,#221a11)",
                  }}>
                    <span className="font-display" style={{
                      fontSize: 13, fontWeight: 700, fontStyle: "italic",
                      color: "var(--amber,#df8752)", minWidth: 26,
                    }}>{num}.</span>
                    <span className="font-display" style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em" }}>{label}</span>
                  </a>
                ))}
              </div>
              <div style={{ marginTop: 28, display: "flex", justifyContent: "center" }}>
                <CompassRose size={64} color="rgba(34,26,17,0.35)" />
              </div>
              <p style={{
                marginTop: 20, fontSize: 12, lineHeight: 1.7,
                color: "rgba(34,26,17,0.5)", fontFamily: "var(--font-body,system-ui)",
                textAlign: "center",
              }}>
                Printed for the independent<br />restaurants of the Southeast.
              </p>
            </aside>
          )}

          {/* ── RIGHT EDITORIAL COLUMN ─────────────────────── */}
          <div style={{ paddingTop: isMobile ? 28 : 44, paddingBottom: 60 }}>

            {/* ── LEAD / DROP CAP ──────────────────────────── */}
            <section className="reveal" style={{ marginBottom: 56 }}>
              <p className="font-display" style={{
                fontSize: "clamp(1.6rem,3.2vw,2.4rem)", fontWeight: 800, fontStyle: "italic",
                lineHeight: 1.25, letterSpacing: "-0.02em", color: "var(--forest,#07241a)",
                margin: "0 0 24px",
              }}>
                Your next customer is already searching. Help them find yours.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.75, margin: 0 }}>
                <span className="font-display" style={{
                  float: "left", fontSize: "clamp(64px,11vw,92px)", lineHeight: 0.74,
                  fontWeight: 900, color: "var(--amber,#df8752)",
                  padding: "6px 12px 0 0", marginTop: 4,
                }}>S</span>
                omeone in your town is searching for a restaurant right now. We build the system
                that makes sure they find yours &mdash; a professional website, a Google listing that
                ranks, local search, ads, and honest monthly reporting, all handled for you. No setup
                fees, no long-term contracts, and everything live in about two weeks.{" "}
                <strong style={{ fontWeight: 700 }}>Starting at $200 the month.</strong>
              </p>

              {/* Almanac figures band */}
              <div style={{
                marginTop: 32, borderTop: HAIR, borderBottom: HAIR,
                padding: "18px 0",
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
                gap: isMobile ? 16 : 0,
              }}>
                {[
                  { n: "80%",   c: "var(--green,#3b6933)", t: "of diners search online before choosing where to eat" },
                  { n: "5–20×", c: "var(--forest,#07241a)", t: "more revenue from catering & events vs. a regular table" },
                  { n: "$3,100", c: "var(--amber,#df8752)", t: "potential monthly uplift from stronger digital capture" },
                ].map(({ n, c, t }, i) => (
                  <div key={n} style={{
                    padding: isMobile ? "0" : "0 24px",
                    borderLeft: !isMobile && i > 0 ? HAIR : "none",
                    textAlign: "center",
                  }}>
                    <div className="font-display" style={{ fontSize: "clamp(2.2rem,4vw,3rem)", fontWeight: 900, color: c, letterSpacing: "-0.03em", lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: 12.5, lineHeight: 1.55, color: "rgba(34,26,17,0.6)", marginTop: 8, fontFamily: "var(--font-body,system-ui)" }}>{t}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── I. THE PROBLEM ───────────────────────────── */}
            <section id="problem" className="reveal" style={{ scrollMarginTop: 24, marginBottom: 56 }}>
              <SectionRule kicker="Article I &middot; The Problem" title="Where the revenue quietly leaks away." />
              <p style={{
                fontSize: 17, lineHeight: 1.8, margin: "0 0 28px",
                columns: isMobile ? "auto" : "2", columnGap: 40,
              }}>
                People already want great food. The question every independent restaurant must answer is
                how much revenue leaks before they ever find you. A restaurant can serve the finest plate
                in three counties and still lose the table to a competitor who simply shows up first on a
                phone. Below are the three leaks we see most often on Main Street &mdash; and each one is
                fixable. A website is only the start; what follows is a full revenue capture system.
              </p>
              <div style={{ borderTop: "2px solid var(--charcoal,#221a11)" }}>
                {LEAKS.map(({ n, label, title, body }) => (
                  <div key={n} style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "150px 1fr",
                    gap: isMobile ? 8 : 32,
                    padding: isMobile ? "22px 0" : "26px 0",
                    borderBottom: HAIR_SOFT,
                  }}>
                    <div>
                      <div className="font-display" style={{ fontSize: 30, fontWeight: 900, color: "rgba(34,26,17,0.18)", lineHeight: 1 }}>{n}</div>
                      <SmallCaps>{label}</SmallCaps>
                    </div>
                    <div>
                      <h3 className="font-display" style={{ fontSize: "clamp(1.2rem,1.9vw,1.5rem)", fontWeight: 800, color: "var(--forest-mid,#1e3a2f)", lineHeight: 1.25, margin: "0 0 8px", letterSpacing: "-0.015em" }}>{title}</h3>
                      <p style={{ fontSize: 15.5, lineHeight: 1.75, margin: 0, color: "rgba(34,26,17,0.78)" }}>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── II. HOW IT WORKS ─────────────────────────── */}
            <section id="how-it-works" className="reveal" style={{ scrollMarginTop: 24, marginBottom: 56 }}>
              <SectionRule kicker="Article II &middot; How It Works" title="Your revenue capture system, in three movements." />
              <div>
                {STEPS.map(({ num, title, body }, i) => (
                  <div key={num} style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "72px 1fr",
                    gap: isMobile ? 8 : 28,
                    padding: isMobile ? "20px 0" : "24px 0",
                    borderTop: i === 0 ? HAIR : "none",
                    borderBottom: HAIR_SOFT,
                    alignItems: "baseline",
                  }}>
                    <div className="font-display" style={{ fontSize: "clamp(2.4rem,4vw,3.4rem)", fontWeight: 900, color: "var(--amber,#df8752)", lineHeight: 1, letterSpacing: "-0.03em" }}>{num}</div>
                    <div>
                      <h3 className="font-display" style={{ fontSize: "clamp(1.25rem,2vw,1.6rem)", fontWeight: 800, color: "var(--forest,#07241a)", margin: "0 0 8px", letterSpacing: "-0.015em", lineHeight: 1.2 }}>{title}</h3>
                      <p style={{ fontSize: 16, lineHeight: 1.78, margin: 0, color: "rgba(34,26,17,0.78)" }}>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── III. WHAT'S INCLUDED ─────────────────────── */}
            <section id="included" className="reveal" style={{ scrollMarginTop: 24, marginBottom: 56 }}>
              <SectionRule kicker="Article III &middot; What’s Included" title="Everything you need. Nothing to manage yourself." />
              <p style={{ fontSize: 15, lineHeight: 1.7, margin: "0 0 20px", color: "rgba(34,26,17,0.65)", fontStyle: "italic" }}>
                One flat monthly fee covers your entire digital presence. Read the notices below as you
                would the classified column of the county paper.
              </p>
              <div style={{
                borderTop: "2px solid var(--charcoal,#221a11)",
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                columnGap: 40,
              }}>
                {SERVICES.map(({ n, label, title, body }, i) => (
                  <div key={n} style={{
                    padding: "20px 0",
                    borderBottom: HAIR_SOFT,
                    borderRight: !isMobile && i % 2 === 0 ? HAIR_SOFT : "none",
                    paddingRight: !isMobile && i % 2 === 0 ? 40 : 0,
                  }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
                      <span className="font-display" style={{ fontSize: 18, fontWeight: 900, color: "var(--amber,#df8752)" }}>{n}</span>
                      <SmallCaps color="rgba(34,26,17,0.45)">{label}</SmallCaps>
                    </div>
                    <h3 className="font-display" style={{ fontSize: "clamp(1.2rem,1.8vw,1.45rem)", fontWeight: 800, color: "var(--forest,#07241a)", margin: "0 0 6px", letterSpacing: "-0.015em", lineHeight: 1.2 }}>{title}</h3>
                    <p style={{ fontSize: 14.5, lineHeight: 1.7, margin: 0, color: "rgba(34,26,17,0.75)" }}>{body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── IV. THE MATH (FIGURES infographic) ───────── */}
            <section id="the-math" className="reveal" style={{ scrollMarginTop: 24, marginBottom: 56 }}>
              <SectionRule kicker="Article IV &middot; The Math" title="What better digital capture is actually worth." />
              <p style={{ fontSize: 15, lineHeight: 1.7, margin: "0 0 22px", color: "rgba(34,26,17,0.65)", fontStyle: "italic" }}>
                A conservative illustration for a typical small-town independent restaurant.
              </p>

              {/* FIGURES box */}
              <div style={{ border: "1.5px solid var(--charcoal,#221a11)" }}>
                <div style={{
                  borderBottom: "1.5px solid var(--charcoal,#221a11)",
                  padding: "8px 16px", textAlign: "center",
                  background: "var(--linen,#fcebdc)",
                }}>
                  <SmallCaps color="var(--forest,#07241a)">Figures &middot; Estimated Monthly Uplift</SmallCaps>
                </div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1.1fr",
                }}>
                  {[
                    { cap: "Extra table bookings", val: "$1,600", note: "5 tables/week × $80 avg × 4 weeks", c: "var(--green,#3b6933)" },
                    { cap: "Catering & private events", val: "$1,500", note: "2 bookings/month × $750 avg", c: "var(--amber,#df8752)" },
                    { cap: "Potential monthly uplift", val: "~$3,100", note: "per month, all figures combined", c: "var(--forest,#07241a)", strong: true },
                  ].map(({ cap, val, note, c, strong }, i) => (
                    <div key={cap} style={{
                      padding: isMobile ? "20px 18px" : "26px 22px",
                      borderTop: isMobile && i > 0 ? HAIR : "none",
                      borderLeft: !isMobile && i > 0 ? "1.5px solid var(--charcoal,#221a11)" : "none",
                      background: strong ? "var(--linen,#fcebdc)" : "transparent",
                      textAlign: "center",
                    }}>
                      <SmallCaps color="rgba(34,26,17,0.5)">{cap}</SmallCaps>
                      <div className="font-display" style={{ fontSize: strong ? "clamp(2.6rem,5vw,3.6rem)" : "clamp(2.2rem,4vw,3rem)", fontWeight: 900, color: c, letterSpacing: "-0.035em", lineHeight: 1, margin: "12px 0 8px" }}>{val}</div>
                      <div style={{ fontSize: 12, lineHeight: 1.55, color: "rgba(34,26,17,0.55)", fontFamily: "var(--font-body,system-ui)" }}>{note}</div>
                    </div>
                  ))}
                </div>
                <div style={{
                  borderTop: "1.5px solid var(--charcoal,#221a11)",
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr",
                }}>
                  <div style={{ padding: isMobile ? "20px 18px" : "24px 22px", textAlign: "center", borderRight: isMobile ? "none" : "1.5px solid var(--charcoal,#221a11)", borderBottom: isMobile ? HAIR : "none" }}>
                    <SmallCaps color="rgba(34,26,17,0.5)">Your investment</SmallCaps>
                    <div className="font-display" style={{ fontSize: "clamp(1.8rem,3.2vw,2.6rem)", fontWeight: 900, color: "var(--forest,#07241a)", letterSpacing: "-0.03em", margin: "10px 0 6px" }}>
                      $200&ndash;$300 <span style={{ fontSize: 15, fontWeight: 600, color: "rgba(34,26,17,0.5)", fontStyle: "italic" }}>/month</span>
                    </div>
                    <div style={{ fontSize: 12, lineHeight: 1.55, color: "rgba(34,26,17,0.55)", fontFamily: "var(--font-body,system-ui)" }}>Full website, listing, SEO, ads, reporting &amp; maintenance. All done for you.</div>
                  </div>
                  <div style={{ padding: isMobile ? "20px 18px" : "24px 22px" }}>
                    <p className="font-display" style={{ fontSize: "clamp(1.05rem,1.7vw,1.3rem)", fontWeight: 800, fontStyle: "italic", lineHeight: 1.5, margin: 0, color: "var(--charcoal,#221a11)" }}>
                      &ldquo;One catering booking pays for months of service. This isn&apos;t a website
                      purchase. It&apos;s an investment in customer acquisition.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: 11.5, lineHeight: 1.6, marginTop: 10, color: "rgba(34,26,17,0.5)", fontFamily: "var(--font-body,system-ui)" }}>
                Illustrative estimates. Actual results vary by market and execution.
              </p>
            </section>

            {/* ── V. TESTIMONIALS ──────────────────────────── */}
            <section id="testimonials" className="reveal" style={{ scrollMarginTop: 24, marginBottom: 56 }}>
              <SectionRule kicker="Article V &middot; Testimonials" title="Real results. Real restaurants." />
              <div style={{
                borderTop: "2px solid var(--charcoal,#221a11)",
                columns: isMobile ? "auto" : "2", columnGap: 40,
              }}>
                {TESTIMONIALS.map((t) => (
                  <figure key={t.name} style={{
                    breakInside: "avoid", margin: 0,
                    padding: "22px 0", borderBottom: HAIR_SOFT,
                  }}>
                    <span style={{ color: "var(--amber,#df8752)", fontSize: 14, letterSpacing: 2 }}>★★★★★</span>
                    <blockquote className="font-display" style={{
                      margin: "10px 0 14px", fontSize: 17, fontStyle: "italic",
                      fontWeight: 600, lineHeight: 1.6, color: "var(--forest,#07241a)",
                    }}>&ldquo;{t.quote}&rdquo;</blockquote>
                    <figcaption style={{ fontFamily: "var(--font-body,system-ui)" }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: "var(--charcoal,#221a11)" }}>{t.name}</span>
                      <span style={{ fontSize: 13, color: "rgba(34,26,17,0.5)" }}> &mdash; {t.restaurant}, {t.location}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            {/* ── VI. PRICING ──────────────────────────────── */}
            <section id="pricing" className="reveal" style={{ scrollMarginTop: 24, marginBottom: 56 }}>
              <SectionRule kicker="Article VI &middot; Pricing" title="Simple. Transparent." />
              <p style={{ fontSize: 15, lineHeight: 1.7, margin: "0 0 22px", color: "rgba(34,26,17,0.65)", fontStyle: "italic" }}>
                No setup fees. No long-term contracts. No surprises. Cancel any time.
              </p>
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                borderTop: "2px solid var(--charcoal,#221a11)",
                borderLeft: "1.5px solid var(--charcoal,#221a11)",
                borderRight: "1.5px solid var(--charcoal,#221a11)",
                borderBottom: "1.5px solid var(--charcoal,#221a11)",
              }}>
                {/* Starter */}
                <div style={{ padding: isMobile ? "24px 20px" : "28px 26px", borderRight: isMobile ? "none" : "1.5px solid var(--charcoal,#221a11)", borderBottom: isMobile ? "1.5px solid var(--charcoal,#221a11)" : "none" }}>
                  <SmallCaps color="rgba(34,26,17,0.5)">Starter &middot; Get Found Online</SmallCaps>
                  <div className="font-display" style={{ margin: "12px 0 4px" }}>
                    <span style={{ fontSize: "clamp(2.6rem,5vw,3.4rem)", fontWeight: 900, color: "var(--forest,#07241a)", letterSpacing: "-0.03em" }}>$200</span>
                    <span style={{ fontSize: 15, fontStyle: "italic", color: "rgba(34,26,17,0.5)", marginLeft: 4 }}>/month</span>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: "18px 0 22px", borderTop: HAIR_SOFT }}>
                    {STARTER.map(item => (
                      <li key={item} style={{ padding: "8px 0", borderBottom: HAIR_SOFT, fontSize: 15, display: "flex", gap: 10, alignItems: "baseline" }}>
                        <span style={{ color: "var(--amber,#df8752)", fontWeight: 700 }}>&mdash;</span>{item}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" style={{ display: "block", textAlign: "center", border: "1.5px solid var(--forest,#07241a)", color: "var(--forest,#07241a)", padding: "11px 20px", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--font-body,system-ui)", textDecoration: "none", borderRadius: 2 }}>Get started</a>
                </div>
                {/* Growth */}
                <div style={{ padding: isMobile ? "24px 20px" : "28px 26px", background: "var(--forest,#07241a)", color: "var(--ivory,#fff8f4)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <SmallCaps color="rgba(255,248,244,0.6)">Growth &middot; Full System</SmallCaps>
                    <SmallCaps color="var(--amber,#df8752)">Most Popular</SmallCaps>
                  </div>
                  <div className="font-display" style={{ margin: "12px 0 4px" }}>
                    <span style={{ fontSize: "clamp(2.6rem,5vw,3.4rem)", fontWeight: 900, color: "var(--ivory,#fff8f4)", letterSpacing: "-0.03em" }}>$300</span>
                    <span style={{ fontSize: 15, fontStyle: "italic", color: "rgba(255,248,244,0.55)", marginLeft: 4 }}>/month</span>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: "18px 0 22px", borderTop: "1px solid rgba(255,248,244,0.18)" }}>
                    {GROWTH.map(item => (
                      <li key={item} style={{ padding: "8px 0", borderBottom: "1px solid rgba(255,248,244,0.14)", fontSize: 15, display: "flex", gap: 10, alignItems: "baseline", color: "rgba(255,248,244,0.9)" }}>
                        <span style={{ color: "var(--amber,#df8752)", fontWeight: 700 }}>&mdash;</span>{item}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" style={{ display: "block", textAlign: "center", background: "var(--green,#3b6933)", color: "var(--ivory,#fff8f4)", padding: "12px 20px", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--font-body,system-ui)", textDecoration: "none", borderRadius: 2 }}>Get started</a>
                </div>
              </div>
              <p style={{ textAlign: "center", fontSize: 14, marginTop: 16, color: "rgba(34,26,17,0.65)", fontStyle: "italic" }}>
                Not sure which plan fits?{" "}
                <a href="#contact" style={{ color: "var(--green,#3b6933)", fontWeight: 700 }}>Let&apos;s talk.</a> We&apos;ll help you figure it out.
              </p>
            </section>

            {/* ── VII. GET STARTED / CONTACT ───────────────── */}
            <section id="contact" className="reveal" style={{ scrollMarginTop: 24 }}>
              <div style={{ textAlign: "center", marginBottom: 24 }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
                  <CompassRose size={52} color="var(--amber,#df8752)" />
                </div>
              </div>
              <SectionRule kicker="Article VII &middot; Get Started" title="Let us find where revenue is leaking." />
              <p style={{ fontSize: 17, lineHeight: 1.78, margin: "0 0 28px", maxWidth: 620 }}>
                We&apos;ll audit your current online presence for free and show you exactly what&apos;s
                costing you customers &mdash; before we even get on the phone. No spam, no sales pressure,
                just a conversation. Expect a call or email within one business day.
              </p>

              <div style={{ border: "1.5px solid var(--charcoal,#221a11)", padding: isMobile ? "22px 18px" : "32px 30px" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "28px 0" }}>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
                      <CompassRose size={56} color="var(--green,#3b6933)" />
                    </div>
                    <h3 className="font-display" style={{ fontSize: 28, fontWeight: 900, color: "var(--forest,#07241a)", margin: "0 0 8px", letterSpacing: "-0.02em" }}>We&apos;ll be in touch soon!</h3>
                    <p style={{ fontSize: 16, color: "rgba(34,26,17,0.65)", lineHeight: 1.7, margin: 0 }}>Expect a call or email within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <div style={{ borderBottom: HAIR, paddingBottom: 12 }}>
                      <h3 className="font-display" style={{ fontSize: 22, fontWeight: 800, color: "var(--forest,#07241a)", margin: "0 0 4px", letterSpacing: "-0.015em" }}>Tell us about your restaurant</h3>
                      <p style={{ fontSize: 13.5, color: "rgba(34,26,17,0.55)", margin: 0, fontStyle: "italic" }}>We&apos;ll audit your online presence before we call.</p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>
                      <div>
                        <label style={labelStyle}>Your Name *</label>
                        <input type="text" required value={form.name} onChange={up("name")} placeholder="Jane Smith" style={inp} />
                      </div>
                      <div>
                        <label style={labelStyle}>Restaurant Name *</label>
                        <input type="text" required value={form.business} onChange={up("business")} placeholder="Main Street Diner" style={inp} />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>
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
                      <label style={labelStyle}>About Your Restaurant</label>
                      <textarea rows={4} value={form.message} onChange={up("message")} placeholder="e.g. Family BBQ in Hattiesburg, MS — rely on word of mouth and want to grow..." style={{ ...inp, resize: "none" } as React.CSSProperties} />
                    </div>
                    <button type="submit" style={{ background: "var(--forest,#07241a)", color: "var(--ivory,#fff8f4)", padding: "14px 24px", borderRadius: 2, fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", border: "none", cursor: "pointer", fontFamily: "var(--font-body,system-ui)" }}>
                      Get my free revenue audit
                    </button>
                    <p style={{ textAlign: "center", fontSize: 12.5, color: "rgba(34,26,17,0.45)", margin: 0, fontStyle: "italic", fontFamily: "var(--font-display,Georgia,serif)" }}>No spam. No sales pressure. Just a conversation.</p>
                  </form>
                )}
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer style={{ padding: isMobile ? "0 16px 28px" : "0 40px 32px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{
            borderTop: "3px double var(--charcoal,#221a11)",
            paddingTop: 14,
            display: "flex", justifyContent: "center", alignItems: "center", gap: 10,
            fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
            fontFamily: "var(--font-body,system-ui)", fontWeight: 600,
            color: "rgba(34,26,17,0.55)", textAlign: "center", flexWrap: "wrap",
          }}>
            <span>&copy; 2026 Main Street Compass</span>
            <span style={{ color: "rgba(34,26,17,0.3)" }}>&middot;</span>
            <span>Serving Mississippi &amp; the Southeast</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

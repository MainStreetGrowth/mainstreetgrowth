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
  accent: string;
};

const OUTCOMES: Outcome[] = [
  {
    icon: IcoSearch,
    stat: "80%",
    statLabel: "of diners search online before choosing where to eat",
    title: "Show up first when locals search",
    body: "When someone nearby searches for a place to eat, you are the one they find, not your competitor down the street. First page of Google, first pin on the map, first choice for dinner.",
    accent: "var(--sage,#86a496)",
  },
  {
    icon: IcoTable,
    stat: "$1,600",
    statLabel: "in extra table bookings a month",
    title: "Fill your slow nights",
    body: "Turn empty Tuesday tables into booked ones. Just five extra tables a week at an $80 average adds up to about $1,600 more every month, from customers who found you online.",
    accent: "var(--amber,#df8752)",
  },
  {
    icon: IcoCalendar,
    stat: "5–20×",
    statLabel: "more revenue per catering & event booking",
    title: "Win catering & private events",
    body: "Private events, catering jobs, and rehearsal dinners spend 5 to 20 times more than a regular table. Two bookings a month at $750 is another $1,500, landing in your inbox instead of a competitor's.",
    accent: "var(--green,#3b6933)",
  },
  {
    icon: IcoHeart,
    stat: "∞",
    statLabel: "reasons for your regulars to come back",
    title: "Turn first-timers into regulars",
    body: "Your best customers want to return. With your own email list, text list, and loyalty program, you can bring them back on your terms instead of hoping they remember you.",
    accent: "var(--forest-tint,#caeada)",
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
const Tag = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div style={{
    display: "inline-flex", alignItems: "center", gap: 7,
    background: light ? "rgba(174,206,190,0.25)" : "var(--sage-container,#b9eeaa)",
    color: light ? "var(--forest-tint,#caeada)" : "var(--forest-mid,#1e3a2f)",
    padding: "5px 14px", borderRadius: 4, fontSize: 12, fontWeight: 600,
    letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 20,
  }}>
    {children}
  </div>
);

const Stars = ({ color = "var(--amber,#df8752)" }: { color?: string }) => (
  <span style={{ color, fontSize: 15, letterSpacing: 1 }}>★★★★★</span>
);

/* ─── Main component ───────────────────────────────────────── */
export default function Outcomes() {
  useScrollReveal();
  const isMobile = useIsMobile();

  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const up = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const inp: React.CSSProperties = {
    width: "100%", padding: "13px 16px", borderRadius: 4,
    border: "1.5px solid rgba(34,26,17,0.15)", fontSize: 14,
    color: "var(--charcoal,#221a11)", background: "white",
    outline: "none", boxSizing: "border-box",
    fontFamily: "var(--font-body,system-ui)", transition: "border-color 0.2s",
  };

  return (
    <div style={{ fontFamily: "var(--font-body,system-ui)", backgroundColor: "var(--forest,#07241a)", color: "var(--charcoal,#221a11)" }}>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, padding: "0 32px", background: "var(--forest-mid,#1e3a2f)" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 64,
        }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 28, height: 28, borderRadius: 4, background: "rgba(134,164,150,0.15)", border: "1px solid rgba(134,164,150,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--sage,#86a496)", fontSize: 12, fontWeight: 800 }}>M</div>
            <span className="font-display" style={{ fontWeight: 700, fontSize: 15, color: "var(--ivory,#fff8f4)", letterSpacing: "-0.01em" }}>Main Street Compass</span>
          </a>
          <nav style={{ display: isMobile ? "none" : "flex", gap: 32, fontSize: 13, fontWeight: 500 }}>
            <a href="#outcomes" style={{ color: "rgba(255,248,244,0.6)", textDecoration: "none" }}>Outcomes</a>
            <a href="#pricing" style={{ color: "rgba(255,248,244,0.6)", textDecoration: "none" }}>Pricing</a>
          </nav>
          <a href="#contact" style={{
            background: "var(--ivory,#fff8f4)",
            color: "var(--forest,#07241a)",
            border: "1px solid rgba(255,248,244,0.35)",
            padding: "8px 18px", borderRadius: 4, fontSize: 13, fontWeight: 700,
            display: "inline-flex", alignItems: "center", gap: 6,
            textDecoration: "none",
          }}>
            Get a free audit <IcoArrow />
          </a>
        </div>
      </header>

      <main>

        {/* ── HERO — pure outcome ─────────────────────────────── */}
        <section className="grain" style={{
          background: "var(--forest-mid,#1e3a2f)",
          position: "relative", overflow: "hidden",
          padding: isMobile ? "80px 16px 72px" : "128px 24px 104px",
        }}>
          <div aria-hidden="true" style={{
            position: "absolute", right: "-2%", top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "var(--font-display,Georgia,serif)",
            fontSize: "clamp(140px,26vw,300px)",
            fontWeight: 900, letterSpacing: "-0.05em",
            color: "rgba(134,164,150,0.06)",
            lineHeight: 1, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap",
          }}>FULL</div>
          <div style={{ position: "absolute", left: -120, bottom: -60, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle,rgba(223,135,82,0.08),transparent 70%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div className="reveal" style={{ marginBottom: 28 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                background: "rgba(134,164,150,0.15)", color: "var(--sage,#86a496)",
                padding: "5px 14px", borderRadius: 4, fontSize: 12, fontWeight: 600, letterSpacing: "0.01em",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--sage,#86a496)", display: "inline-block" }} />
                For independent restaurants in Mississippi &amp; the Southeast
              </div>
            </div>

            <h1 className="font-display reveal reveal-delay-1" style={{
              fontSize: "clamp(2.8rem,6.5vw,5.6rem)", fontWeight: 900,
              lineHeight: 1.02, letterSpacing: "-0.04em",
              color: "var(--ivory,#fff8f4)", marginBottom: 28, maxWidth: 960,
            }}>
              More full tables.<br />
              More catering.<br />
              <em style={{ fontStyle: "italic", color: "var(--sage,#86a496)" }}>More regulars who keep coming back.</em>
            </h1>

            <p className="reveal reveal-delay-2" style={{
              fontSize: "clamp(16px,1.6vw,20px)",
              color: "rgba(255,248,244,0.72)", lineHeight: 1.75,
              marginBottom: 40, maxWidth: 620,
            }}>
              Your next customer is already searching. We make sure they find you first, book the table, and come back again. You just cook.
            </p>

            <div className="reveal reveal-delay-3" style={{ display: "flex", gap: 12, marginBottom: 26, flexWrap: "wrap" }}>
              <a href="#contact" style={{
                background: "var(--ivory,#fff8f4)", color: "var(--forest,#07241a)",
                padding: "16px 32px", borderRadius: 4, fontSize: 16, fontWeight: 800,
                display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none",
              }}>
                Get a free revenue audit <IcoArrow />
              </a>
              <a href="#outcomes" style={{
                border: "1.5px solid rgba(255,248,244,0.2)", color: "rgba(255,248,244,0.75)",
                padding: "16px 26px", borderRadius: 4, fontSize: 16, fontWeight: 600,
                textDecoration: "none",
              }}>
                See what you get
              </a>
            </div>

            <div className="reveal reveal-delay-4" style={{ display: "flex", gap: 20, fontSize: 13, color: "rgba(255,248,244,0.55)", flexWrap: "wrap" }}>
              {["No setup fees", "No long-term contracts", "Live in ~2 weeks"].map(t => (
                <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="var(--sage,#86a496)" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Marquee */}
          <div style={{ maxWidth: 1100, margin: "56px auto 0", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, position: "relative", zIndex: 1 }}>
            <p style={{ textAlign: "center", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,248,244,0.45)", marginBottom: 16 }}>
              Trusted by local restaurants across the region
            </p>
            <div style={{ overflow: "hidden", WebkitMaskImage: "linear-gradient(to right,transparent,rgba(0,0,0,0.8) 12%,rgba(0,0,0,0.8) 88%,transparent)" }}>
              <div className="marquee-track" style={{ gap: 60 }}>
                {[...MARQUEE, ...MARQUEE].map((n, i) => (
                  <span key={i} className="font-display" style={{ fontSize: 15, fontWeight: 700, color: "var(--ivory,#fff8f4)", opacity: 0.4, whiteSpace: "nowrap" }}>{n}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── THE OUTCOMES — centerpiece ──────────────────────── */}
        <section id="outcomes" style={{ background: "var(--ivory,#fff8f4)", padding: isMobile ? "72px 16px" : "112px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="reveal" style={{ maxWidth: 680, marginBottom: isMobile ? 48 : 72 }}>
              <Tag>What you get</Tag>
              <h2 className="font-display" style={{
                fontSize: "clamp(2.4rem,4.5vw,3.6rem)", fontWeight: 900,
                color: "var(--forest,#07241a)", lineHeight: 1.08, letterSpacing: "-0.03em", margin: 0,
              }}>
                Four outcomes.<br />
                <em style={{ fontStyle: "italic", color: "var(--green,#3b6933)" }}>One system working for you.</em>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 16 : 24 }}>
              {OUTCOMES.map(({ icon: Icon, stat, statLabel, title, body, accent }, i) => (
                <div key={title} className={`lift reveal reveal-delay-${i}`} style={{
                  background: i === 3 ? "var(--forest-mid,#1e3a2f)" : "white",
                  borderRadius: 12,
                  padding: isMobile ? "32px 26px" : "44px 40px",
                  border: i === 3 ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(34,26,17,0.07)",
                  display: "flex", flexDirection: "column",
                }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 10, marginBottom: 28,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: i === 3 ? "rgba(134,164,150,0.15)" : "rgba(59,105,51,0.08)",
                    color: i === 3 ? accent : "var(--green,#3b6933)",
                  }}>
                    <Icon />
                  </div>

                  <div className="font-display" style={{
                    fontSize: "clamp(3rem,6vw,4.4rem)", fontWeight: 900,
                    color: accent, letterSpacing: "-0.045em", lineHeight: 0.95, marginBottom: 8,
                  }}>{stat}</div>
                  <div style={{
                    fontSize: 13, color: i === 3 ? "rgba(255,248,244,0.55)" : "rgba(34,26,17,0.5)",
                    lineHeight: 1.5, marginBottom: 28, maxWidth: 300,
                  }}>{statLabel}</div>

                  <h3 className="font-display" style={{
                    fontSize: "clamp(1.5rem,2.6vw,2rem)", fontWeight: 800,
                    color: i === 3 ? "var(--ivory,#fff8f4)" : "var(--forest,#07241a)",
                    letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 14px",
                  }}>{title}</h3>
                  <p style={{
                    fontSize: 15, lineHeight: 1.8, margin: 0,
                    color: i === 3 ? "rgba(255,248,244,0.68)" : "rgba(34,26,17,0.66)",
                  }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESULTS / PROOF — what it's worth + testimonials ── */}
        <section style={{ background: "var(--linen,#fcebdc)", padding: isMobile ? "72px 16px" : "112px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="reveal" style={{ maxWidth: 680, marginBottom: isMobile ? 40 : 56 }}>
              <Tag>What it&apos;s worth to you</Tag>
              <h2 className="font-display" style={{
                fontSize: "clamp(2.4rem,4.5vw,3.6rem)", fontWeight: 900,
                color: "var(--forest,#07241a)", lineHeight: 1.08, letterSpacing: "-0.03em", margin: 0,
              }}>
                About <em style={{ fontStyle: "italic", color: "var(--amber,#df8752)" }}>$3,100 more</em> every month.
              </h2>
              <p style={{ marginTop: 16, fontSize: 16, color: "var(--charcoal,#221a11)", opacity: 0.6, lineHeight: 1.75 }}>
                A conservative picture of what stronger digital capture is worth to a typical small-town restaurant.
              </p>
            </div>

            {/* Equation */}
            <div className="reveal" style={{
              background: "var(--forest-mid,#1e3a2f)", borderRadius: 12,
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 32px 1fr 32px 1.1fr",
              overflow: "hidden", marginBottom: 16,
            }}>
              <div style={{ padding: isMobile ? "28px 24px" : "40px 44px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,248,244,0.45)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>More tables filled</div>
                <div className="font-display" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 900, color: "var(--sage,#86a496)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 10 }}>$1,600</div>
                <div style={{ fontSize: 12, color: "rgba(255,248,244,0.35)", lineHeight: 1.65 }}>5 tables/week × $80 avg × 4 weeks</div>
              </div>
              <div style={{ display: isMobile ? "none" : "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="font-display" style={{ fontSize: 28, fontWeight: 900, color: "rgba(255,255,255,0.12)" }}>+</span>
              </div>
              <div style={{ padding: isMobile ? "28px 24px" : "40px 44px", borderTop: isMobile ? "1px solid rgba(255,255,255,0.07)" : "none", borderLeft: isMobile ? "none" : "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,248,244,0.45)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Catering &amp; events won</div>
                <div className="font-display" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 900, color: "var(--amber,#df8752)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 10 }}>$1,500</div>
                <div style={{ fontSize: 12, color: "rgba(255,248,244,0.35)", lineHeight: 1.65 }}>2 bookings/month × $750 avg</div>
              </div>
              <div style={{ display: isMobile ? "none" : "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="font-display" style={{ fontSize: 28, fontWeight: 900, color: "rgba(255,255,255,0.12)" }}>=</span>
              </div>
              <div style={{ padding: isMobile ? "28px 24px" : "40px 44px", borderTop: isMobile ? "1px solid rgba(255,255,255,0.07)" : "none", borderLeft: isMobile ? "none" : "1px solid rgba(255,255,255,0.07)", background: "rgba(134,164,150,0.08)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,248,244,0.45)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>In your pocket</div>
                <div className="font-display" style={{ fontSize: "clamp(2.6rem,5vw,4rem)", fontWeight: 900, color: "var(--ivory,#fff8f4)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 10 }}>~$3,100</div>
                <div style={{ fontSize: 12, color: "rgba(255,248,244,0.35)", lineHeight: 1.65 }}>every month</div>
              </div>
            </div>

            {/* Investment aside */}
            <div className="reveal" style={{
              background: "white", borderRadius: 12, padding: isMobile ? "22px 24px" : "24px 40px",
              border: "1px solid rgba(34,26,17,0.07)", marginBottom: isMobile ? 40 : 56,
              display: "flex", flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: 14,
            }}>
              <p style={{ margin: 0, fontSize: 15, color: "var(--charcoal,#221a11)", opacity: 0.72, lineHeight: 1.7, maxWidth: 640 }}>
                Your investment is just <strong style={{ color: "var(--forest,#07241a)", fontWeight: 700 }}>$200–$300/month</strong>, all done for you.
                One catering booking pays for months of service.
              </p>
              <span style={{ fontSize: 12, color: "rgba(34,26,17,0.4)", lineHeight: 1.5, flexShrink: 0, maxWidth: 220 }}>
                Illustrative estimates. Results vary by market and execution.
              </span>
            </div>

            {/* Testimonials as proof */}
            <div className="reveal" style={{ marginBottom: 28 }}>
              <h3 className="font-display" style={{ fontSize: "clamp(1.4rem,2.4vw,1.9rem)", fontWeight: 800, color: "var(--forest,#07241a)", letterSpacing: "-0.02em", margin: 0 }}>
                And these outcomes are real.
              </h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "7fr 5fr", gap: 16 }}>
              <div className="lift reveal" style={{ background: "var(--forest-mid,#1e3a2f)", borderRadius: 12, padding: isMobile ? 28 : 48, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 300 }}>
                <div>
                  <div className="font-display" style={{ fontSize: 80, color: "var(--amber,#df8752)", lineHeight: 0.75, marginBottom: 24, fontWeight: 900 }}>&ldquo;</div>
                  <p className="font-display" style={{ fontSize: 22, color: "var(--ivory,#fff8f4)", lineHeight: 1.55, fontWeight: 600, fontStyle: "italic", margin: 0 }}>{TESTIMONIALS[0].quote}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 36 }}>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--ivory,#fff8f4)", fontSize: 15 }}>{TESTIMONIALS[0].name}</div>
                    <div style={{ color: "rgba(255,248,244,0.45)", fontSize: 13, marginTop: 3 }}>{TESTIMONIALS[0].restaurant} · {TESTIMONIALS[0].location}</div>
                  </div>
                  <Stars />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {TESTIMONIALS.slice(1).map((t, i) => (
                  <div key={t.name} className={`lift reveal reveal-delay-${i + 1}`} style={{ background: "white", borderRadius: 12, padding: 28, border: "1px solid rgba(34,26,17,0.06)", flex: 1 }}>
                    <Stars />
                    <p className="font-display" style={{ fontSize: 16, color: "var(--forest,#07241a)", lineHeight: 1.65, fontWeight: 600, fontStyle: "italic", margin: "14px 0 18px" }}>&ldquo;{t.quote}&rdquo;</p>
                    <div style={{ fontWeight: 700, color: "var(--forest,#07241a)", fontSize: 14 }}>{t.name}</div>
                    <div style={{ color: "var(--charcoal,#221a11)", opacity: 0.45, fontSize: 13 }}>{t.restaurant} · {t.location}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECONDARY: How it works (condensed & quiet) ─────── */}
        <section style={{ background: "var(--ivory,#fff8f4)", padding: isMobile ? "56px 16px" : "72px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="reveal" style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "baseline", gap: isMobile ? 6 : 16, marginBottom: 28 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--green,#3b6933)" }}>How it works</span>
              <span style={{ fontSize: 15, color: "rgba(34,26,17,0.55)", lineHeight: 1.6 }}>Three simple steps, and we handle every one of them.</span>
            </div>
            <div style={{
              display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
              gap: isMobile ? 12 : 20, borderTop: "1px solid rgba(34,26,17,0.1)", paddingTop: 28,
            }}>
              {STEPS.map(({ num, title, body }) => (
                <div key={num} className="reveal" style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span className="font-display" style={{ fontSize: 20, fontWeight: 900, color: "rgba(34,26,17,0.22)", lineHeight: 1.1, flexShrink: 0 }}>{num}</span>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--forest-mid,#1e3a2f)", margin: "0 0 6px", lineHeight: 1.3 }}>{title}</h3>
                    <p style={{ fontSize: 13.5, color: "rgba(34,26,17,0.55)", lineHeight: 1.65, margin: 0 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECONDARY: What's included (condensed checklist) ── */}
        <section style={{ background: "var(--ivory,#fff8f4)", padding: isMobile ? "0 16px 56px" : "0 24px 72px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="reveal" style={{
              background: "var(--linen,#fcebdc)", borderRadius: 12,
              padding: isMobile ? "32px 24px" : "40px 48px",
              border: "1px solid rgba(34,26,17,0.06)",
            }}>
              <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "baseline", gap: isMobile ? 6 : 14, marginBottom: 24 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--amber,#df8752)" }}>What&apos;s included</span>
                <span className="font-display" style={{ fontSize: "clamp(1.1rem,1.8vw,1.35rem)", fontWeight: 700, color: "var(--forest,#07241a)", letterSpacing: "-0.015em" }}>
                  And yes, we handle all of it.
                </span>
              </div>
              <ul style={{
                listStyle: "none", padding: 0, margin: 0,
                display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "12px 40px",
              }}>
                {SERVICES.map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(34,26,17,0.75)" }}>
                    <span style={{
                      width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: "rgba(59,105,51,0.12)", color: "var(--green,#3b6933)",
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
        <section id="pricing" style={{ background: "white", padding: isMobile ? "72px 16px" : "104px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 48, alignItems: "end", marginBottom: 56 }} className="reveal">
              <div>
                <Tag>Pricing</Tag>
                <h2 className="font-display" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 900, color: "var(--forest,#07241a)", lineHeight: 1.1, letterSpacing: "-0.025em", margin: 0 }}>
                  A fraction of<br /><em style={{ fontStyle: "italic", color: "var(--green,#3b6933)" }}>what it returns.</em>
                </h2>
              </div>
              <p style={{ fontSize: 17, color: "var(--charcoal,#221a11)", opacity: 0.65, lineHeight: 1.8, margin: 0 }}>No setup fees. No long-term contracts. No surprises.<br />Cancel any time.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20, maxWidth: isMobile ? "100%" : 820, margin: "0 auto" }}>
              {/* Starter */}
              <div className="lift reveal" style={{ background: "var(--ivory,#fff8f4)", borderRadius: 8, padding: 38, border: "1px solid rgba(34,26,17,0.07)" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--charcoal,#221a11)", opacity: 0.45, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 14 }}>Starter</div>
                <div style={{ marginBottom: 4 }}>
                  <span className="font-display" style={{ fontSize: 60, fontWeight: 900, color: "var(--forest,#07241a)", letterSpacing: "-0.04em" }}>$200</span>
                  <span style={{ fontSize: 16, color: "var(--charcoal,#221a11)", opacity: 0.45, marginLeft: 4 }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: "var(--charcoal,#221a11)", opacity: 0.55, marginBottom: 28 }}>Get found online</p>
                <div style={{ height: 1, background: "var(--linen,#fcebdc)", marginBottom: 24 }} />
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Professional website", "Domain & hosting", "Google Business Profile", "Local SEO", "Monthly report", "2 content updates/month"].map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--charcoal,#221a11)" }}>
                      <span style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(59,105,51,0.12)", color: "var(--green,#3b6933)" }}>
                        <IcoCheck />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "block", textAlign: "center", border: "2px solid var(--forest,#07241a)", color: "var(--forest,#07241a)", borderRadius: 4, padding: "14px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>Get started</a>
              </div>

              {/* Growth */}
              <div className="lift reveal reveal-delay-1" style={{ background: "var(--forest-mid,#1e3a2f)", borderRadius: 8, padding: 38, position: "relative" }}>
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "var(--amber,#df8752)", color: "white", fontSize: 12, fontWeight: 700, padding: "5px 16px", borderRadius: 4, whiteSpace: "nowrap" }}>Most popular</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,248,244,0.5)", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 14 }}>Growth</div>
                <div style={{ marginBottom: 4 }}>
                  <span className="font-display" style={{ fontSize: 60, fontWeight: 900, color: "var(--ivory,#fff8f4)", letterSpacing: "-0.04em" }}>$300</span>
                  <span style={{ fontSize: 16, color: "rgba(255,248,244,0.55)", marginLeft: 4 }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: "rgba(255,248,244,0.55)", marginBottom: 28 }}>Full revenue capture system</p>
                <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 24 }} />
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Everything in Starter", "Google Ads management", "Keyword targeting", "Call & lead tracking", "Catering landing page", "Unlimited content updates"].map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,248,244,0.75)" }}>
                      <span style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(134,164,150,0.3)", color: "var(--sage,#86a496)" }}>
                        <IcoCheck />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--green,#3b6933)", color: "var(--ivory,#fff8f4)", borderRadius: 4, padding: "14px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
                  Get started <IcoArrow />
                </a>
              </div>
            </div>
            <p style={{ textAlign: "center", fontSize: 14, color: "var(--charcoal,#221a11)", opacity: 0.6, marginTop: 24 }}>
              Not sure which plan fits?{" "}
              <a href="#contact" style={{ color: "var(--green,#3b6933)", fontWeight: 700, textDecoration: "none" }}>Let&apos;s talk.</a> We&apos;ll help you figure it out.
            </p>
          </div>
        </section>

        {/* ── FINAL CTA + CONTACT ─────────────────────────────── */}
        <section id="contact" className="grain" style={{ background: "var(--forest-mid,#1e3a2f)", padding: isMobile ? "72px 16px" : "96px 24px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: -120, bottom: -120, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(134,164,150,0.08),transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", left: -80, top: -80, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle,rgba(223,135,82,0.06),transparent 70%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div className="reveal" style={{ marginBottom: 56 }}>
              <Tag light>Get started</Tag>
              <h2 className="font-display" style={{ fontSize: "clamp(2.8rem,6vw,5.2rem)", fontWeight: 900, color: "var(--ivory,#fff8f4)", lineHeight: 1.04, letterSpacing: "-0.035em", maxWidth: 760, margin: 0 }}>
                Let&apos;s fill your tables.<br />
                <em style={{ fontStyle: "italic", color: "var(--sage,#86a496)" }}>Starting with a free audit.</em>
              </h2>
              <p style={{ fontSize: 18, color: "rgba(255,248,244,0.65)", lineHeight: 1.75, marginTop: 20, maxWidth: 520 }}>
                We&apos;ll audit your current online presence for free and show you exactly what&apos;s costing you customers. Before we even get on the phone.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr", gap: "clamp(40px,6vw,96px)", alignItems: isMobile ? "stretch" : "start" }}>
              <div className="reveal" style={{ paddingTop: 8 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {[
                    { n: "01", heading: "Free revenue audit", body: "We review your search rankings, Google listing, website, and local competitors before we even get on the phone." },
                    { n: "02", heading: "Live in ~2 weeks", body: "Your website, Google listing, and ads are all live within two weeks. No long drawn-out process." },
                    { n: "03", heading: "No setup fees", body: "One flat monthly fee. No contracts. Cancel any time. We earn your business every single month." },
                  ].map(({ n, heading, body }) => (
                    <div key={n} style={{ padding: "24px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                      <div style={{ fontSize: 11, color: "rgba(255,248,244,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
                        <span style={{ color: "var(--amber,#df8752)" }}>{n} —</span> What to expect
                      </div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "var(--ivory,#fff8f4)", marginBottom: 6 }}>{heading}</div>
                      <p style={{ fontSize: 14, color: "rgba(255,248,244,0.6)", lineHeight: 1.7, margin: 0 }}>{body}</p>
                    </div>
                  ))}
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20 }}>
                    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 10 : 18, fontSize: 13, color: "rgba(255,248,244,0.45)" }}>
                      {["Starting at $200/mo", "Mississippi & the Southeast"].map(t => (
                        <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="var(--sage,#86a496)" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal reveal-delay-1" style={{ background: "var(--ivory,#fff8f4)", borderRadius: 8, padding: isMobile ? "28px 20px" : "40px clamp(24px,4vw,48px)" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(59,105,51,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: "var(--green,#3b6933)" }}>
                      <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="font-display" style={{ fontSize: 26, fontWeight: 800, color: "var(--forest,#07241a)", marginBottom: 8, letterSpacing: "-0.015em" }}>We&apos;ll be in touch soon!</h3>
                    <p style={{ fontSize: 15, color: "var(--charcoal,#221a11)", opacity: 0.6, lineHeight: 1.7 }}>Expect a call or email within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <div style={{ marginBottom: 4 }}>
                      <h3 className="font-display" style={{ fontSize: 20, fontWeight: 800, color: "var(--forest,#07241a)", marginBottom: 4, letterSpacing: "-0.015em" }}>Tell us about your restaurant</h3>
                      <p style={{ fontSize: 13, color: "var(--charcoal,#221a11)", opacity: 0.5 }}>We&apos;ll audit your online presence before we call.</p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest,#07241a)", marginBottom: 5, letterSpacing: "0.05em" }}>YOUR NAME *</label>
                        <input type="text" required value={form.name} onChange={up("name")} placeholder="Jane Smith" style={inp} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest,#07241a)", marginBottom: 5, letterSpacing: "0.05em" }}>RESTAURANT NAME *</label>
                        <input type="text" required value={form.business} onChange={up("business")} placeholder="Main Street Diner" style={inp} />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
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
                    <button type="submit" style={{ background: "var(--forest-mid,#1e3a2f)", color: "var(--ivory,#fff8f4)", padding: "15px 24px", borderRadius: 4, fontSize: 15, fontWeight: 800, border: "none", cursor: "pointer", fontFamily: "var(--font-body,system-ui)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                      Get my free revenue audit <IcoArrow />
                    </button>
                    <p style={{ textAlign: "center", fontSize: 12, color: "rgba(34,26,17,0.4)", margin: 0 }}>No spam. No sales pressure. Just a conversation.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer style={{ background: "var(--forest-mid,#1e3a2f)", padding: "24px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", justifyContent: "space-between", gap: isMobile ? 8 : 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 26, height: 26, borderRadius: 4, background: "rgba(134,164,150,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--sage,#86a496)", fontSize: 12, fontWeight: 700 }}>M</div>
            <span className="font-display" style={{ fontWeight: 700, color: "var(--ivory,#fff8f4)", fontSize: 15, letterSpacing: "-0.01em" }}>Main Street Compass</span>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,248,244,0.4)", margin: 0, textAlign: isMobile ? "center" : "left" }}>
            © 2026 Main Street Compass · Serving Mississippi &amp; the Southeast
          </p>
        </div>
      </footer>

    </div>
  );
}

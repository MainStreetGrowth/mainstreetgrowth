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

/* ─── SVG icon ─────────────────────────────────────────────── */
const IcoArrow = () => <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>;

/* ─── Data (from homepage — real content) ──────────────────── */
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
  "Professional Website",
  "Google Business Profile",
  "Local Search (SEO)",
  "Google Ads",
  "Lead & Call Tracking",
  "Ongoing Maintenance",
];

const STARTER_FEATURES = ["Professional website", "Domain & hosting", "Google Business Profile", "Local SEO", "Monthly report", "2 content updates/month"];
const GROWTH_FEATURES = ["Everything in Starter", "Google Ads management", "Keyword targeting", "Call & lead tracking", "Catering landing page", "Unlimited content updates"];

/* ─── Small reusable label ─────────────────────────────────── */
const Chapter = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    fontFamily: "var(--font-body,system-ui)",
    fontSize: 12, fontWeight: 700, letterSpacing: "0.18em",
    textTransform: "uppercase", color: "var(--amber,#df8752)",
    marginBottom: 20,
  }}>
    {children}
  </div>
);

/* ─── Main component ───────────────────────────────────────── */
export default function StoryPage() {
  useScrollReveal();
  const isMobile = useIsMobile();

  const [form, setForm] = useState({ name: "", business: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const up = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const COL = 680;

  const inp: React.CSSProperties = {
    width: "100%", padding: "13px 16px", borderRadius: 4,
    border: "1.5px solid rgba(255,248,244,0.2)", fontSize: 15,
    color: "var(--ivory,#fff8f4)", background: "rgba(255,255,255,0.04)",
    outline: "none", boxSizing: "border-box",
    fontFamily: "var(--font-body,system-ui)",
  };

  /* Reading column wrapper */
  const column: React.CSSProperties = {
    maxWidth: COL, margin: "0 auto",
    padding: isMobile ? "0 22px" : "0 24px",
  };

  const prose: React.CSSProperties = {
    fontSize: isMobile ? 19 : 21, lineHeight: 1.85,
    color: "var(--charcoal,#221a11)", opacity: 0.82,
    margin: "0 0 26px",
  };

  /* Full-bleed color-block break */
  const Break = ({ bg, fg, kicker, big, sub }: { bg: string; fg: string; kicker: string; big: React.ReactNode; sub?: string }) => (
    <section className="grain reveal" style={{
      background: bg, padding: isMobile ? "88px 22px" : "128px 24px",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <div style={{
          fontFamily: "var(--font-body,system-ui)", fontSize: 12, fontWeight: 700,
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: "rgba(255,248,244,0.55)", marginBottom: 24,
        }}>{kicker}</div>
        <h2 className="font-display" style={{
          fontSize: isMobile ? "clamp(2.4rem,11vw,3.2rem)" : "clamp(3rem,6vw,5rem)",
          fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.035em",
          color: fg, margin: 0,
        }}>{big}</h2>
        {sub && (
          <p style={{
            fontSize: isMobile ? 15 : 17, lineHeight: 1.75,
            color: "rgba(255,248,244,0.7)", maxWidth: 460,
            margin: "26px auto 0",
          }}>{sub}</p>
        )}
      </div>
    </section>
  );

  /* Big pull-quote with oversized serif marks */
  const PullQuote = ({ children, color = "var(--green,#3b6933)" }: { children: React.ReactNode; color?: string }) => (
    <figure className="reveal" style={{ margin: isMobile ? "40px 0" : "56px 0", position: "relative" }}>
      <span aria-hidden="true" className="font-display" style={{
        position: "absolute", top: isMobile ? -34 : -48, left: -6,
        fontSize: isMobile ? 100 : 150, lineHeight: 1, fontWeight: 900,
        color: color, opacity: 0.18, userSelect: "none", pointerEvents: "none",
      }}>&ldquo;</span>
      <blockquote className="font-display" style={{
        position: "relative", zIndex: 1, margin: 0,
        fontSize: isMobile ? "1.6rem" : "2.1rem", lineHeight: 1.35,
        fontStyle: "italic", fontWeight: 700, letterSpacing: "-0.02em",
        color: "var(--forest,#07241a)",
      }}>{children}</blockquote>
    </figure>
  );

  return (
    <div style={{ fontFamily: "var(--font-body,system-ui)", background: "var(--ivory,#fff8f4)", color: "var(--charcoal,#221a11)" }}>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, padding: "0 22px", background: "var(--forest,#07241a)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 26, height: 26, borderRadius: 4, background: "rgba(134,164,150,0.15)", border: "1px solid rgba(134,164,150,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--sage,#86a496)", fontSize: 12, fontWeight: 800 }}>M</div>
            <span className="font-display" style={{ fontWeight: 700, fontSize: 15, color: "var(--ivory,#fff8f4)", letterSpacing: "-0.01em" }}>Main Street Compass</span>
          </a>
          <a href="#contact" style={{
            background: "transparent", color: "var(--ivory,#fff8f4)",
            border: "1px solid rgba(255,248,244,0.35)", padding: "8px 18px",
            borderRadius: 4, fontSize: 13, fontWeight: 700,
            display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none",
          }}>
            Get started <IcoArrow />
          </a>
        </div>
      </header>

      <main>

        {/* ── OPENING ─────────────────────────────────────────── */}
        <section className="grain" style={{ background: "var(--forest,#07241a)", padding: isMobile ? "96px 0 88px" : "140px 0 120px" }}>
          <div style={column}>
            <div className="reveal" style={{
              fontFamily: "var(--font-body,system-ui)", fontSize: 12, fontWeight: 700,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--amber,#df8752)", marginBottom: 26,
            }}>A story in five chapters</div>
            <h1 className="font-display reveal reveal-delay-1" style={{
              fontSize: isMobile ? "clamp(2.6rem,12vw,3.6rem)" : "clamp(3.4rem,7vw,5.6rem)",
              fontWeight: 900, lineHeight: 1.04, letterSpacing: "-0.04em",
              color: "var(--ivory,#fff8f4)", margin: "0 0 30px",
            }}>
              How one small<br/>restaurant went from<br/>
              <em style={{ fontStyle: "italic", color: "var(--sage,#86a496)" }}>invisible</em> to <em style={{ fontStyle: "italic", color: "var(--amber,#df8752)" }}>booked out.</em>
            </h1>
            <p className="reveal reveal-delay-2" style={{
              fontSize: isMobile ? 17 : 19, lineHeight: 1.8,
              color: "rgba(255,248,244,0.7)", margin: 0, maxWidth: 520,
            }}>
              Every town has one. The place with the good food and the empty tables. This is the story of what was quietly costing them customers &mdash; and the month everything changed.
            </p>
          </div>
        </section>

        {/* ── CHAPTER ONE — THE INVISIBLE RESTAURANT ──────────── */}
        <section style={{ padding: isMobile ? "72px 0 40px" : "112px 0 56px" }}>
          <div style={column}>
            <div className="reveal">
              <Chapter>Chapter one &mdash; The invisible restaurant</Chapter>
              <h2 className="font-display" style={{
                fontSize: isMobile ? "1.9rem" : "2.6rem", fontWeight: 900,
                lineHeight: 1.15, letterSpacing: "-0.03em",
                color: "var(--forest,#07241a)", margin: "0 0 30px",
              }}>
                The food was never the problem.
              </h2>
            </div>
            <p className="reveal" style={prose}>
              The kitchen did everything right. Recipes handed down, plates that regulars swore by, a dining room that filled up on the nights people happened to remember it. But &ldquo;happened to remember&rdquo; is a fragile way to run a business. People already wanted great food. The question was how much revenue leaked away before they ever found the door.
            </p>

            <PullQuote color="var(--amber,#df8752)">
              People already want great food. How much revenue leaks before they find you?
            </PullQuote>

            <p className="reveal" style={prose}>
              When we mapped it out, the leaks weren&apos;t dramatic. They were quiet, and that&apos;s what made them expensive. Three of them, running all day, every day:
            </p>
          </div>

          {/* LEAKS as story beats */}
          <div style={column}>
            <div className="reveal" style={{ borderTop: "1px solid rgba(34,26,17,0.14)", marginTop: 8 }}>
              {LEAKS.map(({ n, label, title, body }) => (
                <div key={n} className="reveal" style={{
                  padding: isMobile ? "28px 0" : "38px 0",
                  borderBottom: "1px solid rgba(34,26,17,0.1)",
                }}>
                  <div className="font-display" style={{
                    fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: "var(--amber,#df8752)", marginBottom: 12,
                  }}>{n} &mdash; {label}</div>
                  <h3 className="font-display" style={{
                    fontSize: isMobile ? "1.25rem" : "1.5rem", fontWeight: 800,
                    color: "var(--forest-mid,#1e3a2f)", letterSpacing: "-0.02em",
                    lineHeight: 1.25, margin: "0 0 12px",
                  }}>{title}</h3>
                  <p style={{ fontSize: isMobile ? 16 : 17, color: "var(--charcoal,#221a11)", opacity: 0.68, lineHeight: 1.8, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Break → forest */}
        <Break
          bg="var(--forest,#07241a)" fg="var(--ivory,#fff8f4)"
          kicker="Where the story turns"
          big={<>They weren&apos;t losing<br/>on <em style={{ fontStyle: "italic", color: "var(--sage,#86a496)" }}>flavor.</em><br/>They were losing<br/>on <em style={{ fontStyle: "italic", color: "var(--amber,#df8752)" }}>visibility.</em></>}
          sub="A website is just the start. What they needed was a full revenue capture system."
        />

        {/* ── CHAPTER TWO — THE TURNING POINT ─────────────────── */}
        <section style={{ padding: isMobile ? "72px 0 56px" : "112px 0 72px" }}>
          <div style={column}>
            <div className="reveal">
              <Chapter>Chapter two &mdash; The turning point</Chapter>
              <h2 className="font-display" style={{
                fontSize: isMobile ? "1.9rem" : "2.6rem", fontWeight: 900,
                lineHeight: 1.15, letterSpacing: "-0.03em",
                color: "var(--forest,#07241a)", margin: "0 0 30px",
              }}>
                It started with a free audit.
              </h2>
            </div>
            <p className="reveal" style={prose}>
              No contract. No pressure. We reviewed their search rankings, their Google listing, their website, and the competitors quietly eating their lunch &mdash; and showed them exactly what it was costing, before anyone got on the phone. Then, once they said yes, the work followed a simple path.
            </p>
          </div>

          {/* STEPS as a vertical timeline */}
          <div style={column}>
            <div className="reveal" style={{ position: "relative", marginTop: 12, paddingLeft: isMobile ? 44 : 56 }}>
              {/* vertical rule */}
              <div aria-hidden="true" style={{
                position: "absolute", left: isMobile ? 15 : 19, top: 12, bottom: 12,
                width: 2, background: "rgba(34,26,17,0.12)",
              }}/>
              {STEPS.map(({ num, title, body }) => (
                <div key={num} className="reveal" style={{ position: "relative", padding: isMobile ? "0 0 40px" : "0 0 52px" }}>
                  {/* node */}
                  <div className="font-display" style={{
                    position: "absolute", left: isMobile ? -44 : -56, top: -4,
                    width: isMobile ? 32 : 40, height: isMobile ? 32 : 40, borderRadius: "50%",
                    background: "var(--green,#3b6933)", color: "var(--ivory,#fff8f4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: isMobile ? 14 : 16, fontWeight: 900,
                  }}>{num}</div>
                  <h3 className="font-display" style={{
                    fontSize: isMobile ? "1.3rem" : "1.6rem", fontWeight: 800,
                    color: "var(--forest,#07241a)", letterSpacing: "-0.015em",
                    lineHeight: 1.25, margin: "0 0 12px",
                  }}>{title}</h3>
                  <p style={{ fontSize: isMobile ? 16 : 17, color: "var(--charcoal,#221a11)", opacity: 0.68, lineHeight: 1.8, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={column}>
            <PullQuote>
              We don&apos;t sell websites. We sell customer acquisition &mdash; and we handle every part of it.
            </PullQuote>
          </div>
        </section>

        {/* ── CHAPTER THREE — THE MATH (PIVOT) ────────────────── */}
        <section className="grain" style={{ background: "var(--forest-mid,#1e3a2f)", padding: isMobile ? "88px 0" : "128px 0" }}>
          <div style={column}>
            <div className="reveal">
              <Chapter>Chapter three &mdash; The math that changed their mind</Chapter>
              <h2 className="font-display" style={{
                fontSize: isMobile ? "2rem" : "2.8rem", fontWeight: 900,
                lineHeight: 1.12, letterSpacing: "-0.03em",
                color: "var(--ivory,#fff8f4)", margin: "0 0 22px",
              }}>
                Then we did the math out loud.
              </h2>
              <p style={{ fontSize: isMobile ? 16 : 18, lineHeight: 1.8, color: "rgba(255,248,244,0.72)", margin: 0, maxWidth: 520 }}>
                A conservative illustration for a typical small-town independent restaurant. Not a promise &mdash; just arithmetic.
              </p>
            </div>
          </div>

          {/* Dramatic stacked equation */}
          <div style={{ ...column, marginTop: isMobile ? 44 : 64 }}>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {/* Tables */}
              <div style={{ padding: isMobile ? "22px 0" : "28px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,248,244,0.45)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Extra table bookings</div>
                <div className="font-display" style={{ fontSize: isMobile ? "3rem" : "4.2rem", fontWeight: 900, color: "var(--sage,#86a496)", letterSpacing: "-0.04em", lineHeight: 1 }}>$1,600</div>
                <div style={{ fontSize: 13, color: "rgba(255,248,244,0.4)", marginTop: 8 }}>5 tables/week &times; $80 avg &times; 4 weeks</div>
              </div>
              {/* plus */}
              <div className="font-display" style={{ fontSize: 30, fontWeight: 900, color: "rgba(255,255,255,0.18)", padding: "6px 0" }}>+</div>
              {/* Catering */}
              <div style={{ padding: isMobile ? "22px 0" : "28px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,248,244,0.45)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Catering &amp; private events</div>
                <div className="font-display" style={{ fontSize: isMobile ? "3rem" : "4.2rem", fontWeight: 900, color: "var(--amber,#df8752)", letterSpacing: "-0.04em", lineHeight: 1 }}>$1,500</div>
                <div style={{ fontSize: 13, color: "rgba(255,248,244,0.4)", marginTop: 8 }}>2 bookings/month &times; $750 avg</div>
              </div>
              {/* equals */}
              <div className="font-display" style={{ fontSize: 30, fontWeight: 900, color: "rgba(255,255,255,0.18)", padding: "6px 0" }}>=</div>
              {/* Total */}
              <div style={{ padding: isMobile ? "28px 24px" : "36px 40px", borderRadius: 8, background: "rgba(134,164,150,0.1)", border: "1px solid rgba(134,164,150,0.2)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,248,244,0.55)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Potential monthly uplift</div>
                <div className="font-display" style={{ fontSize: isMobile ? "3.6rem" : "5.4rem", fontWeight: 900, color: "var(--ivory,#fff8f4)", letterSpacing: "-0.045em", lineHeight: 1 }}>~$3,100</div>
                <div style={{ fontSize: 13, color: "rgba(255,248,244,0.4)", marginTop: 8 }}>per month</div>
              </div>
            </div>

            {/* Against the investment */}
            <div className="reveal" style={{ marginTop: isMobile ? 32 : 44, paddingTop: isMobile ? 28 : 36, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,248,244,0.45)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>Against an investment of</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span className="font-display" style={{ fontSize: isMobile ? "2.4rem" : "3.2rem", fontWeight: 900, color: "var(--sage,#86a496)", letterSpacing: "-0.04em" }}>$200&ndash;$300</span>
                <span style={{ fontSize: 15, color: "rgba(255,248,244,0.5)" }}>/month</span>
              </div>
              <p style={{ fontSize: isMobile ? 15 : 16, color: "rgba(255,248,244,0.68)", lineHeight: 1.75, margin: "16px 0 0", maxWidth: 520 }}>
                Full website, Google listing, SEO, ads, reporting, and maintenance. All done for you. That was the sentence that landed:
              </p>
            </div>

            <figure className="reveal" style={{ margin: isMobile ? "34px 0 0" : "48px 0 0", position: "relative" }}>
              <span aria-hidden="true" className="font-display" style={{
                position: "absolute", top: isMobile ? -30 : -44, left: -4,
                fontSize: isMobile ? 96 : 140, lineHeight: 1, fontWeight: 900,
                color: "var(--amber,#df8752)", opacity: 0.22, userSelect: "none", pointerEvents: "none",
              }}>&ldquo;</span>
              <blockquote className="font-display" style={{
                position: "relative", zIndex: 1, margin: 0,
                fontSize: isMobile ? "1.55rem" : "2rem", lineHeight: 1.4,
                fontStyle: "italic", fontWeight: 700, letterSpacing: "-0.02em",
                color: "var(--ivory,#fff8f4)",
              }}>
                One catering booking pays for months of service. This isn&apos;t a website purchase. It&apos;s an investment in customer acquisition.
              </blockquote>
              <figcaption style={{ marginTop: 20, fontSize: 12, color: "rgba(255,248,244,0.35)", lineHeight: 1.6 }}>
                Illustrative estimates. Actual results vary by market and execution.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── CHAPTER FOUR — BOOKED OUT ───────────────────────── */}
        <section style={{ padding: isMobile ? "72px 0 56px" : "112px 0 72px" }}>
          <div style={column}>
            <div className="reveal">
              <Chapter>Chapter four &mdash; Booked out</Chapter>
              <h2 className="font-display" style={{
                fontSize: isMobile ? "1.9rem" : "2.6rem", fontWeight: 900,
                lineHeight: 1.15, letterSpacing: "-0.03em",
                color: "var(--forest,#07241a)", margin: "0 0 30px",
              }}>
                A few weeks later, the phone rang.
              </h2>
            </div>
            <p className="reveal" style={prose}>
              Then it rang again. The nights that used to depend on memory started filling up on their own. This isn&apos;t just our composite restaurant&apos;s story &mdash; it&apos;s what real owners across Mississippi told us in their own words.
            </p>
          </div>

          {/* TESTIMONIALS as voices */}
          <div style={column}>
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="reveal" style={{
                margin: 0, padding: isMobile ? "30px 0" : "40px 0",
                borderTop: "1px solid rgba(34,26,17,0.12)",
              }}>
                <blockquote className="font-display" style={{
                  margin: 0, fontSize: isMobile ? "1.35rem" : "1.7rem",
                  lineHeight: 1.45, fontStyle: "italic", fontWeight: 700,
                  letterSpacing: "-0.015em", color: "var(--forest-mid,#1e3a2f)",
                }}>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption style={{ marginTop: 18, display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
                  <span style={{ color: "var(--amber,#df8752)", fontSize: 14, letterSpacing: 1 }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "var(--forest,#07241a)" }}>{t.name}</span>
                  <span style={{ fontSize: 14, color: "var(--charcoal,#221a11)", opacity: 0.5 }}>{t.restaurant} &middot; {t.location}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Services now handled */}
          <div style={column}>
            <div className="reveal" style={{ marginTop: isMobile ? 40 : 56, paddingTop: isMobile ? 32 : 44, borderTop: "1px solid rgba(34,26,17,0.12)" }}>
              <div style={{ fontFamily: "var(--font-body,system-ui)", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--green,#3b6933)", marginBottom: 18 }}>
                Everything now handled for them
              </div>
              <p style={{ fontSize: isMobile ? 16 : 17, color: "var(--charcoal,#221a11)", opacity: 0.7, lineHeight: 1.8, margin: "0 0 22px" }}>
                One flat monthly fee covers the entire digital presence. Six things they never think about again:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {SERVICES.map((s, i) => (
                  <span key={s} style={{
                    fontFamily: "var(--font-body,system-ui)", fontSize: 14, fontWeight: 600,
                    background: "var(--linen,#fcebdc)", border: "1px solid rgba(34,26,17,0.08)",
                    color: "var(--forest-mid,#1e3a2f)", padding: "9px 16px", borderRadius: 4,
                  }}>
                    <span style={{ color: "var(--amber,#df8752)", marginRight: 8, fontWeight: 700 }}>{String(i + 1).padStart(2, "0")}</span>{s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Break → green */}
        <Break
          bg="var(--green,#3b6933)" fg="var(--ivory,#fff8f4)"
          kicker="Chapter five"
          big={<>Your turn.</>}
          sub="Simple. Transparent. No setup fees, no long-term contracts, no surprises. Cancel any time."
        />

        {/* ── CHAPTER FIVE — YOUR TURN (PRICING + CONTACT) ────── */}
        <section id="contact" className="grain" style={{ background: "var(--forest,#07241a)", padding: isMobile ? "72px 0 88px" : "112px 0 128px" }}>
          <div style={column}>

            {/* Pricing as two plans */}
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: isMobile ? 56 : 72 }}>
              {/* Starter */}
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,248,244,0.14)", borderRadius: 8, padding: isMobile ? 28 : 36 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,248,244,0.5)", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 12 }}>Starter</div>
                <div style={{ marginBottom: 4 }}>
                  <span className="font-display" style={{ fontSize: isMobile ? 48 : 56, fontWeight: 900, color: "var(--ivory,#fff8f4)", letterSpacing: "-0.04em" }}>$200</span>
                  <span style={{ fontSize: 15, color: "rgba(255,248,244,0.5)", marginLeft: 4 }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: "rgba(255,248,244,0.55)", margin: "0 0 22px" }}>Get found online</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {STARTER_FEATURES.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,248,244,0.78)" }}>
                      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="var(--sage,#86a496)" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Growth */}
              <div style={{ background: "var(--forest-mid,#1e3a2f)", border: "1px solid rgba(134,164,150,0.3)", borderRadius: 8, padding: isMobile ? 28 : 36, position: "relative" }}>
                <div style={{ position: "absolute", top: -13, left: isMobile ? 28 : 36, background: "var(--amber,#df8752)", color: "white", fontSize: 11, fontWeight: 700, padding: "5px 14px", borderRadius: 4 }}>Most popular</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,248,244,0.55)", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 12 }}>Growth</div>
                <div style={{ marginBottom: 4 }}>
                  <span className="font-display" style={{ fontSize: isMobile ? 48 : 56, fontWeight: 900, color: "var(--ivory,#fff8f4)", letterSpacing: "-0.04em" }}>$300</span>
                  <span style={{ fontSize: 15, color: "rgba(255,248,244,0.55)", marginLeft: 4 }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: "rgba(255,248,244,0.55)", margin: "0 0 22px" }}>Full revenue capture system</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {GROWTH_FEATURES.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,248,244,0.85)" }}>
                      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="var(--sage,#86a496)" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <p style={{ textAlign: "center", fontSize: 14, color: "rgba(255,248,244,0.55)", margin: "6px 0 0" }}>
                Not sure which plan fits? Let&apos;s talk. We&apos;ll help you figure it out.
              </p>
            </div>

            {/* Closing CTA + form */}
            <div className="reveal">
              <Chapter>The last page is yours to write</Chapter>
              <h2 className="font-display" style={{
                fontSize: isMobile ? "clamp(2.2rem,10vw,2.8rem)" : "clamp(2.8rem,5vw,3.8rem)",
                fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.035em",
                color: "var(--ivory,#fff8f4)", margin: "0 0 22px",
              }}>
                Let us find where<br/><em style={{ fontStyle: "italic", color: "var(--sage,#86a496)" }}>revenue is leaking.</em>
              </h2>
              <p style={{ fontSize: isMobile ? 16 : 18, color: "rgba(255,248,244,0.68)", lineHeight: 1.75, margin: "0 0 40px", maxWidth: 520 }}>
                We&apos;ll audit your current online presence for free and show you exactly what&apos;s costing you customers. Before we even get on the phone. No spam. No sales pressure. Just a conversation.
              </p>

              {submitted ? (
                <div style={{ padding: "40px 0" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(134,164,150,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, color: "var(--sage,#86a496)" }}>
                    <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="font-display" style={{ fontSize: 28, fontWeight: 800, color: "var(--ivory,#fff8f4)", margin: "0 0 8px", letterSpacing: "-0.015em" }}>We&apos;ll be in touch soon!</h3>
                  <p style={{ fontSize: 16, color: "rgba(255,248,244,0.65)", lineHeight: 1.7, margin: 0 }}>Expect a call or email within one business day.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,248,244,0.6)", marginBottom: 6, letterSpacing: "0.05em" }}>YOUR NAME *</label>
                      <input type="text" required value={form.name} onChange={up("name")} placeholder="Jane Smith" style={inp}/>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,248,244,0.6)", marginBottom: 6, letterSpacing: "0.05em" }}>RESTAURANT NAME *</label>
                      <input type="text" required value={form.business} onChange={up("business")} placeholder="Main Street Diner" style={inp}/>
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,248,244,0.6)", marginBottom: 6, letterSpacing: "0.05em" }}>EMAIL *</label>
                    <input type="email" required value={form.email} onChange={up("email")} placeholder="you@example.com" style={inp}/>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "rgba(255,248,244,0.6)", marginBottom: 6, letterSpacing: "0.05em" }}>ABOUT YOUR RESTAURANT</label>
                    <textarea rows={4} value={form.message} onChange={up("message")} placeholder="e.g. Family BBQ in Hattiesburg, MS — rely on word of mouth and want to grow..." style={{ ...inp, resize: "none" } as React.CSSProperties}/>
                  </div>
                  <button type="submit" style={{
                    background: "var(--ivory,#fff8f4)", color: "var(--forest,#07241a)",
                    padding: "15px 24px", borderRadius: 4, fontSize: 15, fontWeight: 800,
                    border: "none", cursor: "pointer", fontFamily: "var(--font-body,system-ui)",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  }}>
                    Get my free revenue audit <IcoArrow />
                  </button>
                  <p style={{ fontSize: 12, color: "rgba(255,248,244,0.4)", margin: 0 }}>
                    Free audit &middot; Starting at $200/month &middot; Mississippi &amp; the Southeast
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer style={{ background: "var(--forest,#07241a)", padding: "24px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: COL, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "rgba(255,248,244,0.4)", margin: 0 }}>
            &copy; 2026 Main Street Compass &middot; Serving Mississippi &amp; the Southeast
          </p>
        </div>
      </footer>

    </div>
  );
}

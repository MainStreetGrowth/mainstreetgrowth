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

/* ─── SVG icons ────────────────────────────────────────────── */
const IcoGlobe  = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const IcoMap    = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>;
const IcoSearch = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="M21 21l-4.35-4.35"/></svg>;
const IcoMega   = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>;
const IcoBar    = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>;
const IcoGear   = () => <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>;
const IcoCheck  = () => <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>;
const IcoArrow  = () => <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>;
const IcoTrend  = () => <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>;

/* ─── Data ─────────────────────────────────────────────────── */
const MARQUEE = [
  "The Magnolia Café","River Bend BBQ","Cotton Row Diner",
  "Delta Blues Kitchen","Porch & Table","Red River Smokehouse",
  "Southern Roots Kitchen","Main Street Diner",
];

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
    body: "Before we build anything, we map where customers are slipping away — search rankings, website gaps, Google profile, local competitors. You see the leaks before we fix them.",
  },
  {
    num: "02",
    title: "We build your revenue capture system",
    body: "Professional website, Google Business Profile, local SEO, and targeted Google Ads — all live within two weeks. Every piece is designed to turn online searches into customers at your door.",
  },
  {
    num: "03",
    title: "You see results every month",
    body: "A clear monthly report: calls received, website visits, reservations, and leads captured. No jargon — just the numbers that show your investment is working.",
  },
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

const CheckItem = ({ label, light = false }: { label: string; light?: boolean }) => (
  <li style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: light ? "rgba(255,248,244,0.75)" : "var(--charcoal,#221a11)" }}>
    <span style={{
      width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
      display: "flex", alignItems: "center", justifyContent: "center",
      background: light ? "rgba(134,164,150,0.3)" : "rgba(59,105,51,0.12)",
      color: light ? "var(--sage,#86a496)" : "var(--green,#3b6933)",
    }}>
      <IcoCheck />
    </span>
    {label}
  </li>
);

/* ─── Main component ───────────────────────────────────────── */
export default function Home() {
  useScrollReveal();
  const isMobile = useIsMobile();

  const heroRef = useRef<HTMLElement>(null);
  const [showCTABar, setShowCTABar] = useState(false);
  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const up = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  useEffect(() => {
    const handleScroll = () => {
      const heroH = heroRef.current?.offsetHeight ?? 700;
      setShowCTABar(window.scrollY > heroH * 0.7);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const inp: React.CSSProperties = {
    width: "100%", padding: "13px 16px", borderRadius: 4,
    border: "1.5px solid rgba(34,26,17,0.15)", fontSize: 14,
    color: "var(--charcoal,#221a11)", background: "white",
    outline: "none", boxSizing: "border-box",
    fontFamily: "var(--font-body,system-ui)", transition: "border-color 0.2s",
  };

  return (
    <div style={{ fontFamily: "var(--font-body,system-ui)", backgroundColor: "var(--forest,#1e3a2f)", color: "var(--charcoal,#221a11)" }}>

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
            {[["#services","Services"],["#how-it-works","How it works"],["#pricing","Pricing"]].map(([h,l]) =>
              <a key={h} href={h} style={{ color: "rgba(255,248,244,0.6)", textDecoration: "none" }}>{l}</a>
            )}
          </nav>
          <a href="#contact" style={{
            background: "transparent",
            color: "var(--ivory,#fff8f4)",
            border: "1px solid rgba(255,248,244,0.35)",
            padding: "8px 18px", borderRadius: 4, fontSize: 13, fontWeight: 700,
            display: "inline-flex", alignItems: "center", gap: 6,
            textDecoration: "none",
          }}>
            Get started <IcoArrow />
          </a>
        </div>
      </header>

      <main>

        {/* ── HERO ────────────────────────────────────────────── */}
        <section ref={heroRef} className="grain" style={{
          minHeight: "100vh", background: "var(--forest-mid,#1e3a2f)",
          position: "relative", overflow: "hidden",
          display: "flex", flexDirection: "column",
        }}>
          <div aria-hidden="true" style={{
            position: "absolute", right: "-2%", top: "50%",
            transform: "translateY(-52%)",
            fontFamily: "var(--font-display,Georgia,serif)",
            fontSize: "clamp(140px,28vw,320px)",
            fontWeight: 900, letterSpacing: "-0.05em",
            color: "rgba(134,164,150,0.07)",
            lineHeight: 1, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap",
          }}>FOUND</div>
          <div style={{ position: "absolute", left: -120, bottom: -60, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle,rgba(223,135,82,0.08),transparent 70%)", pointerEvents: "none" }}/>

          <div style={{ flex: 1, display: "flex", alignItems: "center", padding: isMobile ? "0 16px" : "0 24px", position: "relative", zIndex: 1 }}>
            <div style={{
              maxWidth: 1100, margin: "0 auto", width: "100%",
              paddingTop: 24, paddingBottom: 16,
              display: "grid", gridTemplateColumns: isMobile ? "1fr" : "68% 32%", gap: 0, alignItems: "center",
            }}>
              {/* Left */}
              <div style={{ paddingRight: isMobile ? 0 : "clamp(32px,5vw,72px)" }}>
                <div className="reveal" style={{ marginBottom: 28 }}>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 7,
                    background: "rgba(134,164,150,0.15)", color: "var(--sage,#86a496)",
                    padding: "5px 14px", borderRadius: 4, fontSize: 12, fontWeight: 600, letterSpacing: "0.01em",
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--sage,#86a496)", display: "inline-block" }}/>
                    Mississippi &amp; the Southeast
                  </div>
                </div>

                <h1 className="font-display reveal reveal-delay-1" style={{
                  fontSize: "clamp(2.6rem,5vw,4.8rem)", fontWeight: 900,
                  lineHeight: 1.06, letterSpacing: "-0.035em",
                  color: "var(--ivory,#fff8f4)", marginBottom: 28,
                }}>
                  Your next customer is already searching.
                  <br/>
                  <em style={{ fontStyle: "italic", color: "var(--sage,#86a496)" }}>Help them find yours.</em>
                </h1>

                <p className="reveal reveal-delay-2" style={{
                  fontSize: "clamp(15px,1.4vw,18px)",
                  color: "rgba(255,248,244,0.7)", lineHeight: 1.8,
                  marginBottom: 36, maxWidth: 460,
                }}>
                  Customers are already searching for you. We build the system that makes sure they find you — and choose you.{" "}
                  <strong style={{ color: "rgba(255,248,244,0.95)", fontWeight: 600 }}>Starting at $200/month.</strong>
                </p>

                <div className="reveal reveal-delay-3" style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
                  <a href="#contact" style={{
                    background: "var(--ivory,#fff8f4)", color: "var(--forest,#1e3a2f)",
                    padding: "15px 30px", borderRadius: 4, fontSize: 15, fontWeight: 800,
                    display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none",
                    transition: "transform 0.15s,background 0.2s",
                  }}>
                    Get a free revenue audit <IcoArrow />
                  </a>
                  <a href="#how-it-works" style={{
                    border: "1.5px solid rgba(255,248,244,0.2)", color: "rgba(255,248,244,0.75)",
                    padding: "15px 24px", borderRadius: 4, fontSize: 15, fontWeight: 600,
                    textDecoration: "none", transition: "border-color 0.2s,color 0.2s",
                  }}>
                    How it works
                  </a>
                </div>

                <div className="reveal reveal-delay-4" style={{ display: "flex", gap: 20, fontSize: 13, color: "rgba(255,248,244,0.55)", flexWrap: "wrap" }}>
                  {["No setup fees","No long-term contracts","Live in ~2 weeks"].map(t => (
                    <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="var(--sage,#86a496)" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — stats */}
              <div className="reveal reveal-delay-2" style={{
                borderLeft: "1px solid rgba(255,255,255,0.08)",
                paddingLeft: "clamp(32px,5vw,64px)",
                display: isMobile ? "none" : "flex", flexDirection: "column", gap: 0,
              }}>
                {[
                  { n: "80%",    label: "of diners search online before choosing where to eat",          color: "var(--sage,#86a496)" },
                  { n: "5–20×", label: "more revenue from catering & events vs. regular table bookings", color: "var(--ivory,#fff8f4)" },
                  { n: "$3,100", label: "potential monthly revenue uplift from stronger digital capture",  color: "var(--amber,#df8752)" },
                ].map(({ n, label, color }, i) => (
                  <div key={n} style={{ padding: "clamp(20px,3vw,32px) 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                    <div className="font-display" style={{ fontSize: "clamp(2.6rem,4.5vw,4.5rem)", fontWeight: 900, color, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 10 }}>{n}</div>
                    <p style={{ fontSize: "clamp(13px,1.1vw,15px)", color: "rgba(255,248,244,0.6)", lineHeight: 1.55, margin: 0 }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Marquee */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "24px 24px 36px", position: "relative", zIndex: 1 }}>
            <p style={{ textAlign: "center", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,248,244,0.45)", marginBottom: 16 }}>
              Trusted by local restaurants across the region
            </p>
            <div style={{ overflow: "hidden", WebkitMaskImage: "linear-gradient(to right,transparent,rgba(0,0,0,0.8) 12%,rgba(0,0,0,0.8) 88%,transparent)" }}>
              <div className="marquee-track" style={{ gap: 60 }}>
                {[...MARQUEE,...MARQUEE].map((n, i) => (
                  <span key={i} className="font-display" style={{ fontSize: 15, fontWeight: 700, color: "var(--ivory,#fff8f4)", opacity: 0.4, whiteSpace: "nowrap" }}>{n}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROBLEM: WHERE REVENUE LEAKS ─────────────────────── */}
        <section style={{ background: "white", padding: isMobile ? "72px 16px" : "104px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="reveal" style={{ maxWidth: 640, marginBottom: isMobile ? 48 : 64 }}>
              <Tag>The problem</Tag>
              <h2 className="font-display" style={{
                fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 900,
                color: "var(--forest,#1e3a2f)", lineHeight: 1.1, letterSpacing: "-0.025em",
              }}>
                People already want great food.
                <br/>
                <em style={{ fontStyle: "italic", color: "var(--amber,#df8752)" }}>How much revenue leaks before they find you?</em>
              </h2>
            </div>

            <div style={{ borderTop: "1px solid rgba(34,26,17,0.12)" }}>
              {LEAKS.map(({ n, label, title, body }, i) => (
                <div key={n} className={`reveal reveal-delay-${i}`} style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "160px 1fr",
                  gap: isMobile ? 12 : 48,
                  padding: isMobile ? "32px 0" : "48px 0",
                  borderBottom: "1px solid rgba(34,26,17,0.08)",
                  alignItems: "start",
                }}>
                  {/* Left: number + label */}
                  <div>
                    <span className="font-display" style={{
                      fontSize: 12, fontWeight: 700, letterSpacing: "0.1em",
                      textTransform: "uppercase", color: "var(--amber,#df8752)",
                    }}>{n} — {label}</span>
                  </div>
                  {/* Right: title + body */}
                  <div>
                    <h3 className="font-display" style={{
                      fontSize: "clamp(1.15rem,1.7vw,1.45rem)", fontWeight: 700,
                      color: "var(--forest-mid,#1e3a2f)", letterSpacing: "-0.02em",
                      lineHeight: 1.25, marginBottom: 12, marginTop: 0,
                    }}>{title}</h3>
                    <p style={{ fontSize: 15, color: "var(--charcoal,#221a11)", opacity: 0.65, lineHeight: 1.8, margin: 0 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ textAlign: "center", marginTop: isMobile ? 48 : 64, paddingTop: isMobile ? 36 : 48 }}>
              <p className="font-display" style={{ fontSize: "clamp(1.2rem,2vw,1.7rem)", fontWeight: 700, color: "var(--forest,#1e3a2f)", lineHeight: 1.4, maxWidth: 600, margin: "0 auto" }}>
                We fix all three. That&apos;s what we call a{" "}
                <em style={{ color: "var(--green,#3b6933)", fontStyle: "italic" }}>revenue capture system</em>
                {" "}— not just a website.
              </p>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ────────────────────────────────────── */}
        <section id="how-it-works" style={{ background: "var(--linen,#fcebdc)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}>

            {/* Sticky left */}
            <div style={{
              position: isMobile ? "relative" : "sticky",
              top: isMobile ? undefined : 66,
              height: isMobile ? "auto" : "calc(100vh - 66px)",
              display: "flex", alignItems: "center",
              justifyContent: isMobile ? "flex-start" : "flex-end",
              paddingRight: isMobile ? 0 : 64,
              paddingTop: 48,
              paddingBottom: isMobile ? 24 : 48,
            }}>
              <div style={{ maxWidth: 320 }}>
                <Tag>How it works</Tag>
                <h2 className="font-display" style={{ fontSize: "clamp(2.2rem,3.5vw,3rem)", fontWeight: 900, color: "var(--forest,#1e3a2f)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                  Your revenue<br/><em style={{ fontStyle: "italic", color: "var(--green,#3b6933)" }}>capture system.</em>
                </h2>
                <p style={{ marginTop: 16, fontSize: 15, color: "var(--charcoal,#221a11)", opacity: 0.6, lineHeight: 1.75 }}>
                  We don&apos;t sell websites. We sell customer acquisition — and we handle every part of it for you.
                </p>
              </div>
            </div>

            {/* Scrolling right */}
            <div style={{ borderLeft: isMobile ? "none" : "1px solid rgba(34,26,17,0.1)", paddingLeft: isMobile ? 0 : 64 }}>
              {STEPS.map(({ num, title, body }, i) => (
                <div key={num} className="reveal" style={{ padding: isMobile ? "48px 0" : "96px 0", borderBottom: i < STEPS.length - 1 ? "1px solid rgba(34,26,17,0.07)" : "none" }}>
                  <span className="font-display" style={{ fontSize: "clamp(5rem,12vw,9rem)", fontWeight: 900, color: "rgba(34,26,17,0.07)", lineHeight: 1, letterSpacing: "-0.04em", display: "block", marginBottom: 16 }}>{num}</span>
                  <h3 className="font-display" style={{ fontSize: "clamp(1.3rem,2vw,1.7rem)", fontWeight: 800, color: "var(--forest,#1e3a2f)", marginBottom: 14, lineHeight: 1.25, letterSpacing: "-0.015em" }}>{title}</h3>
                  <p style={{ fontSize: 16, color: "var(--charcoal,#221a11)", opacity: 0.65, lineHeight: 1.85 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES: typographic poster ────────────────────── */}
        <section id="services" className="grain" style={{ background: "var(--forest-mid,#1e3a2f)", padding: isMobile ? "64px 0 48px" : "96px 0 80px", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{
            position: "absolute", bottom: -60, right: "-5%",
            fontFamily: "var(--font-display,Georgia,serif)",
            fontSize: "clamp(180px,32vw,440px)",
            fontWeight: 900, letterSpacing: "-0.06em",
            color: "rgba(134,164,150,0.045)",
            lineHeight: 1, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap",
          }}>COMPASS</div>

          <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "0 16px" : "0 48px", position: "relative", zIndex: 1 }}>
            <div className="reveal" style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "flex-end", marginBottom: 52 }}>
              <div>
                <Tag light>What&apos;s included</Tag>
                <h2 className="font-display" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 900, color: "var(--ivory,#fff8f4)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                  Everything you need.<br/>
                  <em style={{ fontStyle: "italic", color: "var(--sage,#86a496)" }}>Nothing to manage yourself.</em>
                </h2>
              </div>
              {!isMobile && (
                <p style={{ fontSize: 15, color: "rgba(255,248,244,0.72)", lineHeight: 1.75, maxWidth: 240, textAlign: "right" }}>
                  One flat monthly fee covers your entire digital presence.
                </p>
              )}
            </div>

            {/* TOP ROW */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 44, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 220px", gap: "clamp(24px,4vw,48px)", alignItems: "flex-start" }}>
              <div className="reveal" style={{ minWidth: 0 }}>
                <div style={{ fontSize: 11, color: "rgba(255,248,244,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}><span style={{ color: "var(--amber,#df8752)" }}>01 —</span> Core</div>
                <h3 className="font-display" style={{ fontSize: isMobile ? "clamp(2.4rem,10vw,3.5rem)" : "clamp(3rem,5.5vw,5.5rem)", fontWeight: 900, color: "var(--ivory,#fff8f4)", lineHeight: 0.92, letterSpacing: "-0.05em", marginBottom: 20 }}>
                  Professional<br/>Website
                </h3>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {["Hosted & maintained","Mobile-first","Reservations ready"].map(t => (
                    <span key={t} style={{ fontSize: 11, background: "rgba(134,164,150,0.1)", border: "1px solid rgba(134,164,150,0.3)", color: "var(--ivory,#fff8f4)", padding: "4px 12px", borderRadius: 4 }}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="reveal reveal-delay-1" style={{ textAlign: "right", paddingTop: 16 }}>
                <div style={{ fontSize: 11, color: "rgba(255,248,244,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}><span style={{ color: "var(--amber,#df8752)" }}>02 —</span> Visibility</div>
                <h3 className="font-display" style={{ fontSize: "clamp(1.6rem,2.4vw,2.4rem)", fontWeight: 900, color: "var(--ivory,#fff8f4)", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: 12 }}>
                  Google<br/>Business<br/>Profile
                </h3>
                <p style={{ fontSize: 13, color: "rgba(255,248,244,0.72)", lineHeight: 1.7 }}>
                  Appear first on Google Maps when locals search for food nearby.
                </p>
              </div>
            </div>

            {/* MIDDLE ROW */}
            <div className="reveal" style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              padding: "clamp(20px,3vw,36px) 0",
              margin: "44px 0",
              display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 220px", gap: "clamp(24px,4vw,48px)", alignItems: "center",
            }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 11, color: "rgba(255,248,244,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}><span style={{ color: "var(--amber,#df8752)" }}>03 —</span> Rankings</div>
                <h3 className="font-display" style={{ fontSize: isMobile ? "clamp(2.4rem,10vw,3.5rem)" : "clamp(3rem,6.5vw,6rem)", fontWeight: 900, fontStyle: "italic", color: "var(--sage,#86a496)", lineHeight: 1, letterSpacing: "-0.045em", marginBottom: 16 }}>
                  Local Search (SEO)
                </h3>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {["Rank #1 locally","Organic traffic","Beat competitors"].map(t => (
                    <span key={t} style={{ fontSize: 11, background: "rgba(134,164,150,0.1)", border: "1px solid rgba(134,164,150,0.3)", color: "var(--ivory,#fff8f4)", padding: "4px 12px", borderRadius: 4 }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 11, color: "rgba(255,248,244,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}><span style={{ color: "var(--amber,#df8752)" }}>04 —</span> Paid Search</div>
                <h3 className="font-display" style={{ fontSize: "clamp(1.6rem,2.4vw,2.4rem)", fontWeight: 900, color: "var(--amber,#df8752)", lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: 10 }}>
                  Google<br/>Ads
                </h3>
                <p style={{ fontSize: 13, color: "rgba(255,248,244,0.72)", lineHeight: 1.65 }}>
                  Reach people searching for exactly what you serve, right now.
                </p>
              </div>
            </div>

            {/* BOTTOM TWO */}
            <div className="reveal" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "clamp(24px,4vw,32px)" : "0 clamp(24px,5vw,56px)" }}>
              {[
                { n: "05", label: "Reports", title: "Lead & Call Tracking", desc: "Monthly report — calls, reservations, catering inquiries, and website visits. Always know your return." },
                { n: "06", label: "Support", title: "Ongoing Maintenance",  desc: "Menu updates, seasonal content, Google review responses — handled without you lifting a finger." },
              ].map(({ n, label, title, desc }) => (
                <div key={n} style={{ paddingTop: 22 }}>
                  <div style={{ fontSize: 11, color: "rgba(255,248,244,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}><span style={{ color: "var(--amber,#df8752)" }}>{n} —</span> {label}</div>
                  <h3 className="font-display" style={{ fontSize: "clamp(1.4rem,2.4vw,2rem)", fontWeight: 900, color: "rgba(255,248,244,0.85)", letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 12 }}>{title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,248,244,0.72)", lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ROI: THE MATH ────────────────────────────────────── */}
        <section style={{ background: "var(--ivory,#fff8f4)", padding: isMobile ? "72px 16px" : "104px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>

            {/* Header */}
            <div className="reveal" style={{ marginBottom: isMobile ? 40 : 56 }}>
              <Tag>The math</Tag>
              <h2 className="font-display" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 900, color: "var(--forest,#1e3a2f)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                What better digital capture<br/>
                <em style={{ fontStyle: "italic", color: "var(--green,#3b6933)" }}>is actually worth.</em>
              </h2>
              <p style={{ marginTop: 16, fontSize: 16, color: "var(--charcoal,#221a11)", opacity: 0.6, lineHeight: 1.75, maxWidth: 480 }}>
                A conservative illustration for a typical small-town independent restaurant.
              </p>
            </div>

            {/* Equation row — full-width dark card */}
            <div className="reveal" style={{
              background: "var(--forest-mid,#1e3a2f)", borderRadius: 8,
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 32px 1fr 32px 1.1fr",
              overflow: "hidden",
              marginBottom: 16,
            }}>
              {/* Tables block */}
              <div style={{ padding: isMobile ? "28px 24px" : "40px 44px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,248,244,0.45)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Extra table bookings</div>
                <div className="font-display" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 900, color: "var(--sage,#86a496)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 10 }}>$1,600</div>
                <div style={{ fontSize: 12, color: "rgba(255,248,244,0.35)", lineHeight: 1.65 }}>5 tables/week × $80 avg × 4 weeks</div>
              </div>

              {/* + */}
              <div style={{ display: isMobile ? "none" : "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="font-display" style={{ fontSize: 28, fontWeight: 900, color: "rgba(255,255,255,0.12)" }}>+</span>
              </div>

              {/* Catering block */}
              <div style={{ padding: isMobile ? "28px 24px" : "40px 44px", borderTop: isMobile ? "1px solid rgba(255,255,255,0.07)" : "none", borderLeft: isMobile ? "none" : "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,248,244,0.45)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Catering &amp; private events</div>
                <div className="font-display" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 900, color: "var(--amber,#df8752)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 10 }}>$1,500</div>
                <div style={{ fontSize: 12, color: "rgba(255,248,244,0.35)", lineHeight: 1.65 }}>2 bookings/month × $750 avg</div>
              </div>

              {/* = */}
              <div style={{ display: isMobile ? "none" : "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="font-display" style={{ fontSize: 28, fontWeight: 900, color: "rgba(255,255,255,0.12)" }}>=</span>
              </div>

              {/* Total block */}
              <div style={{ padding: isMobile ? "28px 24px" : "40px 44px", borderTop: isMobile ? "1px solid rgba(255,255,255,0.07)" : "none", borderLeft: isMobile ? "none" : "1px solid rgba(255,255,255,0.07)", background: "rgba(134,164,150,0.08)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,248,244,0.45)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Potential monthly uplift</div>
                <div className="font-display" style={{ fontSize: "clamp(2.6rem,5vw,4rem)", fontWeight: 900, color: "var(--ivory,#fff8f4)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 10 }}>~$3,100</div>
                <div style={{ fontSize: 12, color: "rgba(255,248,244,0.35)", lineHeight: 1.65 }}>per month</div>
              </div>
            </div>

            {/* Bottom row — investment + quote */}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16 }}>

              {/* Investment */}
              <div className="reveal" style={{ background: "white", borderRadius: 8, padding: isMobile ? 24 : 32, border: "1px solid rgba(34,26,17,0.07)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(34,26,17,0.4)", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 14 }}>Your investment</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 10 }}>
                    <span className="font-display" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 900, color: "var(--forest,#1e3a2f)", letterSpacing: "-0.04em" }}>$200–$300</span>
                    <span style={{ fontSize: 14, color: "var(--charcoal,#221a11)", opacity: 0.4 }}>/month</span>
                  </div>
                  <p style={{ fontSize: 14, color: "var(--charcoal,#221a11)", opacity: 0.6, lineHeight: 1.75 }}>Full website, Google listing, SEO, ads, reporting, and maintenance — all done for you.</p>
                </div>
                <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(34,26,17,0.07)", fontSize: 12, color: "rgba(34,26,17,0.35)", lineHeight: 1.6 }}>
                  Illustrative estimates. Actual results vary by market and execution.
                </div>
              </div>

              {/* Quote + CTA */}
              <div className="reveal reveal-delay-1" style={{ background: "var(--green,#3b6933)", borderRadius: 8, padding: isMobile ? 24 : 32, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                    <div style={{ color: "var(--sage,#86a496)" }}><IcoTrend /></div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,248,244,0.6)", textTransform: "uppercase", letterSpacing: "0.09em" }}>The point</div>
                  </div>
                  <p className="font-display" style={{ fontSize: "clamp(1.05rem,1.6vw,1.2rem)", color: "var(--ivory,#fff8f4)", fontWeight: 700, lineHeight: 1.65, fontStyle: "italic" }}>
                    &ldquo;One catering booking can pay for months of service. You aren&apos;t buying digital assets — you&apos;re investing in customer acquisition.&rdquo;
                  </p>
                </div>
                <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--ivory,#fff8f4)", color: "var(--forest,#1e3a2f)", padding: "12px 24px", borderRadius: 4, fontSize: 13, fontWeight: 800, textDecoration: "none", marginTop: 24, alignSelf: "flex-start" }}>
                  Get a free revenue audit <IcoArrow />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ── TESTIMONIALS ────────────────────────────────────── */}
        <section style={{ background: "var(--linen,#fcebdc)", padding: "104px 24px" }}>
          <div style={{ maxWidth: 1152, margin: "0 auto" }}>
            <div style={{ marginBottom: 56 }} className="reveal">
              <Tag>What restaurants say</Tag>
              <h2 className="font-display" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 900, color: "var(--forest,#1e3a2f)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                Real results.<br/><em style={{ fontStyle: "italic", color: "var(--green,#3b6933)" }}>Real restaurants.</em>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "7fr 5fr", gap: 16 }}>
              <div className="lift reveal" style={{ background: "var(--forest-mid,#1e3a2f)", borderRadius: 8, padding: isMobile ? 28 : 48, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 320 }}>
                <div>
                  <div className="font-display" style={{ fontSize: 80, color: "var(--amber,#df8752)", lineHeight: 0.75, marginBottom: 28, fontWeight: 900 }}>&ldquo;</div>
                  <p className="font-display" style={{ fontSize: 22, color: "var(--ivory,#fff8f4)", lineHeight: 1.55, fontWeight: 600, fontStyle: "italic" }}>{TESTIMONIALS[0].quote}</p>
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
                  <div key={t.name} className={`lift reveal reveal-delay-${i + 1}`} style={{ background: "white", borderRadius: 8, padding: 28, border: "1px solid rgba(34,26,17,0.06)", flex: 1 }}>
                    <Stars />
                    <p className="font-display" style={{ fontSize: 16, color: "var(--forest,#1e3a2f)", lineHeight: 1.65, fontWeight: 600, fontStyle: "italic", margin: "14px 0 18px" }}>&ldquo;{t.quote}&rdquo;</p>
                    <div style={{ fontWeight: 700, color: "var(--forest,#1e3a2f)", fontSize: 14 }}>{t.name}</div>
                    <div style={{ color: "var(--charcoal,#221a11)", opacity: 0.45, fontSize: 13 }}>{t.restaurant} · {t.location}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING ─────────────────────────────────────────── */}
        <section id="pricing" style={{ background: "white", padding: "104px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 48, alignItems: "end", marginBottom: 56 }} className="reveal">
              <div>
                <Tag>Pricing</Tag>
                <h2 className="font-display" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 900, color: "var(--forest,#1e3a2f)", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
                  Simple.<br/><em style={{ fontStyle: "italic", color: "var(--green,#3b6933)" }}>Transparent.</em>
                </h2>
              </div>
              <p style={{ fontSize: 17, color: "var(--charcoal,#221a11)", opacity: 0.65, lineHeight: 1.8 }}>No setup fees. No long-term contracts. No surprises.<br/>Cancel any time.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20, maxWidth: isMobile ? "100%" : 820, margin: "0 auto" }}>
              {/* Starter */}
              <div className="lift reveal" style={{ background: "var(--ivory,#fff8f4)", borderRadius: 8, padding: 38, border: "1px solid rgba(34,26,17,0.07)" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--charcoal,#221a11)", opacity: 0.45, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 14 }}>Starter</div>
                <div style={{ marginBottom: 4 }}>
                  <span className="font-display" style={{ fontSize: 60, fontWeight: 900, color: "var(--forest,#1e3a2f)", letterSpacing: "-0.04em" }}>$200</span>
                  <span style={{ fontSize: 16, color: "var(--charcoal,#221a11)", opacity: 0.45, marginLeft: 4 }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: "var(--charcoal,#221a11)", opacity: 0.55, marginBottom: 28 }}>Get found online</p>
                <div style={{ height: 1, background: "var(--linen,#fcebdc)", marginBottom: 24 }}/>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Professional website","Domain & hosting","Google Business Profile","Local SEO","Monthly report","2 content updates/month"].map(item => <CheckItem key={item} label={item} />)}
                </ul>
                <a href="#contact" style={{ display: "block", textAlign: "center", border: "2px solid var(--forest,#1e3a2f)", color: "var(--forest,#1e3a2f)", borderRadius: 4, padding: "14px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none", transition: "background 0.2s,color 0.2s" }}>Get started</a>
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
                <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 24 }}/>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Everything in Starter","Google Ads management","Keyword targeting","Call & lead tracking","Catering landing page","Unlimited content updates"].map(item => <CheckItem key={item} label={item} light />)}
                </ul>
                <a href="#contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--green,#3b6933)", color: "var(--ivory,#fff8f4)", borderRadius: 4, padding: "14px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none", transition: "background 0.2s" }}>
                  Get started <IcoArrow />
                </a>
              </div>
            </div>
            <p style={{ textAlign: "center", fontSize: 14, color: "var(--charcoal,#221a11)", opacity: 0.6, marginTop: 24 }}>
              Not sure which plan fits?{" "}
              <a href="#contact" style={{ color: "var(--green,#3b6933)", fontWeight: 700, textDecoration: "none" }}>Let&apos;s talk</a> — we&apos;ll help you decide.
            </p>
          </div>
        </section>

        {/* ── CONTACT ─────────────────────────────────────────── */}
        <section id="contact" className="grain" style={{ background: "var(--forest-mid,#1e3a2f)", padding: "96px 24px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: -120, bottom: -120, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(134,164,150,0.08),transparent 70%)", pointerEvents: "none" }}/>
          <div style={{ position: "absolute", left: -80, top: -80, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle,rgba(223,135,82,0.06),transparent 70%)", pointerEvents: "none" }}/>

          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div className="reveal" style={{ marginBottom: 64 }}>
              <Tag light>Get started</Tag>
              <h2 className="font-display" style={{ fontSize: "clamp(3rem,6vw,5.5rem)", fontWeight: 900, color: "var(--ivory,#fff8f4)", lineHeight: 1.04, letterSpacing: "-0.035em", maxWidth: 700 }}>
                Let us find where<br/>
                <em style={{ fontStyle: "italic", color: "var(--sage,#86a496)" }}>revenue is leaking.</em>
              </h2>
              <p style={{ fontSize: 18, color: "rgba(255,248,244,0.65)", lineHeight: 1.75, marginTop: 20, maxWidth: 500 }}>
                We&apos;ll audit your current online presence for free — and show you exactly what&apos;s costing you customers before we get on the phone.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.4fr", gap: "clamp(40px,6vw,96px)", alignItems: isMobile ? "stretch" : "start" }}>
              <div className="reveal" style={{ paddingTop: 8 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {[
                    { n: "01", heading: "Free revenue audit",  body: "We review your search rankings, Google listing, website, and local competitors before we even get on the phone." },
                    { n: "02", heading: "Live in ~2 weeks",    body: "Website, Google listing, and ads all set up and running — fast. No months of back-and-forth." },
                    { n: "03", heading: "No setup fees",       body: "One flat monthly fee. No contracts. Cancel any time. We earn your business every single month." },
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
                      {["Starting at $200/mo","Mississippi & the Southeast"].map(t => (
                        <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="var(--sage,#86a496)" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
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
                      <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <h3 className="font-display" style={{ fontSize: 26, fontWeight: 800, color: "var(--forest,#1e3a2f)", marginBottom: 8, letterSpacing: "-0.015em" }}>We&apos;ll be in touch soon!</h3>
                    <p style={{ fontSize: 15, color: "var(--charcoal,#221a11)", opacity: 0.6, lineHeight: 1.7 }}>Expect a call or email within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <div style={{ marginBottom: 4 }}>
                      <h3 className="font-display" style={{ fontSize: 20, fontWeight: 800, color: "var(--forest,#1e3a2f)", marginBottom: 4, letterSpacing: "-0.015em" }}>Tell us about your restaurant</h3>
                      <p style={{ fontSize: 13, color: "var(--charcoal,#221a11)", opacity: 0.5 }}>We&apos;ll audit your online presence before we call.</p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest,#1e3a2f)", marginBottom: 5, letterSpacing: "0.05em" }}>YOUR NAME *</label>
                        <input type="text" required value={form.name} onChange={up("name")} placeholder="Jane Smith" style={inp}/>
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest,#1e3a2f)", marginBottom: 5, letterSpacing: "0.05em" }}>RESTAURANT NAME *</label>
                        <input type="text" required value={form.business} onChange={up("business")} placeholder="Main Street Diner" style={inp}/>
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest,#1e3a2f)", marginBottom: 5, letterSpacing: "0.05em" }}>EMAIL *</label>
                        <input type="email" required value={form.email} onChange={up("email")} placeholder="you@example.com" style={inp}/>
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest,#1e3a2f)", marginBottom: 5, letterSpacing: "0.05em" }}>PHONE</label>
                        <input type="tel" value={form.phone} onChange={up("phone")} placeholder="(601) 555-0100" style={inp}/>
                      </div>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest,#1e3a2f)", marginBottom: 5, letterSpacing: "0.05em" }}>ABOUT YOUR RESTAURANT</label>
                      <textarea rows={4} value={form.message} onChange={up("message")} placeholder="e.g. Family BBQ in Hattiesburg, MS — rely on word of mouth and want to grow..." style={{ ...inp, resize: "none" } as React.CSSProperties}/>
                    </div>
                    <button type="submit" style={{ background: "var(--forest-mid,#1e3a2f)", color: "var(--ivory,#fff8f4)", padding: "15px 24px", borderRadius: 4, fontSize: 15, fontWeight: 800, border: "none", cursor: "pointer", fontFamily: "var(--font-body,system-ui)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "background 0.2s,transform 0.15s" }}>
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
        <div style={{ maxWidth: 1152, margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", justifyContent: "space-between", gap: isMobile ? 8 : 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 26, height: 26, borderRadius: 4, background: "rgba(134,164,150,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--sage,#86a496)", fontSize: 12, fontWeight: 700 }}>M</div>
            <span className="font-display" style={{ fontWeight: 700, color: "var(--ivory,#fff8f4)", fontSize: 15, letterSpacing: "-0.01em" }}>Main Street Compass</span>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,248,244,0.4)", margin: 0, textAlign: isMobile ? "center" : "left" }}>
            © {new Date().getFullYear()} Main Street Compass · Serving Mississippi &amp; the Southeast
          </p>
        </div>
      </footer>

      {/* ── STICKY BOTTOM CTA BAR ───────────────────────────── */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100,
        background: "var(--green,#3b6933)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 -8px 32px rgba(30,58,47,0.25)",
        transform: showCTABar ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1)",
        padding: "14px 24px",
      }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "stretch" : "center", justifyContent: "space-between", gap: isMobile ? 10 : 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span className="font-display" style={{ fontWeight: 800, fontSize: 16, color: "var(--ivory,#fff8f4)", letterSpacing: "-0.01em" }}>Find out where your revenue is leaking.</span>
            {!isMobile && (
              <span style={{ fontSize: 13, color: "rgba(255,248,244,0.7)", display: "flex", alignItems: "center", gap: 5 }}>
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="rgba(255,248,244,0.7)" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                Free audit · Starting at $200/month
              </span>
            )}
          </div>
          <a href="#contact" style={{ background: "var(--ivory,#fff8f4)", color: "var(--forest,#1e3a2f)", padding: "10px 24px", borderRadius: 4, fontSize: 14, fontWeight: 800, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, flexShrink: 0, textDecoration: "none", transition: "transform 0.15s" }}>
            Get my free audit <IcoArrow />
          </a>
        </div>
      </div>

    </div>
  );
}

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

/* ─── SVG line icons (stroke only, no emoji) ───────────────── */
const IcoGlobe = () => <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const IcoMap = () => <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>;
const IcoSearch = () => <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><circle cx="11" cy="11" r="8"/><path strokeLinecap="round" d="M21 21l-4.35-4.35"/></svg>;
const IcoMega = () => <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>;
const IcoBar = () => <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>;
const IcoGear = () => <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>;
const IcoCheck = () => <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>;
const IcoArrow = () => <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>;
const IcoChevron = ({ open }: { open: boolean }) => <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} style={{ transition: "transform 0.25s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>;

/* ─── Data ─────────────────────────────────────────────────── */
const MARQUEE = [
  "The Magnolia Café", "River Bend BBQ", "Cotton Row Diner",
  "Delta Blues Kitchen", "Porch & Table", "Red River Smokehouse",
  "Southern Roots Kitchen", "Main Street Diner",
];

const FEATURES = [
  { Icon: IcoGlobe, title: "Professional Website", body: "A fast, mobile-first website that&apos;s hosted, maintained, and reservation-ready. Built to turn visits into bookings." },
  { Icon: IcoMap, title: "Google Business Profile", body: "Appear first on Google Maps when locals search for a place to eat nearby. Fully managed for you." },
  { Icon: IcoSearch, title: "Local Search (SEO)", body: "Rank #1 in your area, pull in organic traffic, and beat the competitors who are outranking you today." },
  { Icon: IcoMega, title: "Google Ads", body: "Reach the people searching for exactly what you serve, right now. Paid search that pays for itself." },
  { Icon: IcoBar, title: "Lead & Call Tracking", body: "A clear monthly report: calls, reservations, catering inquiries, and website visits. Always know your return." },
  { Icon: IcoGear, title: "Ongoing Maintenance", body: "Menu updates, seasonal content, and Google review responses. We handle it all so you can focus on the food." },
];

const STEPS = [
  { num: "01", title: "We audit your revenue funnel", body: "Before we build anything, we map exactly where customers are slipping away. Search rankings, website gaps, Google profile, local competitors. You see every leak before we fix it." },
  { num: "02", title: "We build your revenue capture system", body: "Professional website, Google Business Profile, local SEO, and Google Ads. Everything goes live within two weeks. Every piece is built to turn searches into customers walking through your door." },
  { num: "03", title: "You see results every month", body: "A clear monthly report showing calls, website visits, reservations, and leads captured. No jargon. Just the numbers that prove your investment is working." },
];

const TESTIMONIALS = [
  { quote: "We went from invisible to showing up first in Google for our area. Our Friday nights are now fully booked weeks in advance.", name: "Tommy R.", restaurant: "Red River Smokehouse", location: "Natchez, MS" },
  { quote: "I&apos;ve wasted money on marketing before, so I was skeptical. Within 6 weeks we were getting 30 to 40 extra calls a month.", name: "Maria L.", restaurant: "Delta Blues Café", location: "Greenville, MS" },
  { quote: "They built everything in two weeks and handled every detail. I didn&apos;t have to think about it once.", name: "James P.", restaurant: "Porch & Table", location: "Tupelo, MS" },
];

const STATS = [
  { n: "80%", label: "of diners search online before choosing where to eat" },
  { n: "5–20×", label: "more revenue from catering & events vs. regular tables" },
  { n: "~$3,100", label: "potential monthly revenue uplift from stronger capture" },
  { n: "~2 wks", label: "from sign-up to fully live online" },
];

const STARTER = ["Professional website", "Domain & hosting", "Google Business Profile", "Local SEO", "Monthly report", "2 content updates/month"];
const GROWTH = ["Everything in Starter", "Google Ads management", "Keyword targeting", "Call & lead tracking", "Catering landing page", "Unlimited content updates"];

const FAQS = [
  { q: "Are there any setup fees?", a: "No. There are no setup fees and no hidden costs. You pay one flat monthly rate that covers your entire digital presence, and that&apos;s it." },
  { q: "Am I locked into a long-term contract?", a: "Never. There are no long-term contracts. You can cancel any time. We&apos;d rather earn your business every single month than trap you in an agreement." },
  { q: "How long until everything is live?", a: "About two weeks. Your website, Google Business Profile, and ads are all built and live within roughly two weeks of signing up. No long, drawn-out process." },
  { q: "What&apos;s actually included each month?", a: "Depending on your plan: a professional website, hosting, Google Business Profile, local SEO, Google Ads management, lead and call tracking, monthly reporting, and ongoing content updates. All done for you." },
  { q: "When will I start seeing results?", a: "Many restaurants see extra calls and bookings within the first six weeks. SEO builds over time, but your Google listing and ads can start driving traffic almost immediately." },
  { q: "How much can this realistically add to my revenue?", a: "For a typical small-town restaurant, stronger digital capture can mean around $1,600 in extra table bookings plus roughly $1,500 in catering and events per month, for a potential uplift near $3,100. Actual results vary by market." },
];

/* ─── Main component ───────────────────────────────────────── */
export default function Classic() {
  useScrollReveal();
  const isMobile = useIsMobile();

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const up = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const inp: React.CSSProperties = {
    width: "100%", padding: "13px 16px", borderRadius: 8,
    border: "1.5px solid rgba(34,26,17,0.15)", fontSize: 14,
    color: "var(--charcoal,#221a11)", background: "white",
    outline: "none", boxSizing: "border-box",
    fontFamily: "var(--font-body,system-ui)", transition: "border-color 0.2s",
  };

  const primaryBtn: React.CSSProperties = {
    background: "var(--amber,#df8752)", color: "white",
    padding: "14px 28px", borderRadius: 10, fontSize: 15, fontWeight: 700,
    display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none",
    border: "none", cursor: "pointer", fontFamily: "var(--font-body,system-ui)",
    boxShadow: "0 6px 18px rgba(223,135,82,0.28)",
  };

  const cardShadow = "0 4px 20px rgba(30,58,47,0.07)";

  return (
    <div style={{ fontFamily: "var(--font-body,system-ui)", background: "var(--ivory,#fff8f4)", color: "var(--charcoal,#221a11)" }}>

      {/* ── STICKY NAV ──────────────────────────────────────── */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,248,244,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(34,26,17,0.08)", padding: "0 24px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 66 }}>
          <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: "var(--forest,#07241a)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--sage,#86a496)", fontSize: 13, fontWeight: 800 }}>M</div>
            <span className="font-display" style={{ fontWeight: 700, fontSize: 16, color: "var(--forest,#07241a)", letterSpacing: "-0.01em" }}>Main Street Compass</span>
          </a>
          <nav style={{ display: isMobile ? "none" : "flex", gap: 34, fontSize: 14, fontWeight: 500 }}>
            {[["#features", "Features"], ["#how-it-works", "How it works"], ["#pricing", "Pricing"], ["#reviews", "Reviews"]].map(([h, l]) => (
              <a key={h} href={h} style={{ color: "var(--charcoal,#221a11)", opacity: 0.7, textDecoration: "none" }}>{l}</a>
            ))}
          </nav>
          <a href="#contact" style={{
            background: "var(--forest,#07241a)", color: "var(--ivory,#fff8f4)",
            padding: "10px 20px", borderRadius: 10, fontSize: 13, fontWeight: 700,
            display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none",
          }}>
            Get started <IcoArrow />
          </a>
        </div>
      </header>

      <main id="top">

        {/* ── HERO ──────────────────────────────────────────── */}
        <section style={{ padding: isMobile ? "56px 16px 64px" : "88px 24px 96px", background: "linear-gradient(180deg,var(--linen,#fcebdc) 0%,var(--ivory,#fff8f4) 100%)" }}>
          <div style={{ maxWidth: 1140, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 44 : 64, alignItems: "center" }}>
            {/* Left copy */}
            <div className="reveal">
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "var(--sage-container,#b9eeaa)", color: "var(--forest-mid,#1e3a2f)", padding: "6px 15px", borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: "0.04em", marginBottom: 24 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green,#3b6933)", display: "inline-block" }}/>
                Mississippi &amp; the Southeast
              </div>
              <h1 className="font-display" style={{ fontSize: "clamp(2.4rem,5vw,3.9rem)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.03em", color: "var(--forest,#07241a)", margin: "0 0 22px" }}>
                Your next customer is already searching.{" "}
                <span style={{ color: "var(--amber,#df8752)" }}>Help them find yours.</span>
              </h1>
              <p style={{ fontSize: "clamp(15px,1.5vw,18px)", color: "var(--charcoal,#221a11)", opacity: 0.7, lineHeight: 1.75, margin: "0 0 32px", maxWidth: 480 }}>
                Someone in your town is searching for a restaurant right now. We build the system that makes sure they find yours. Starting at <strong style={{ color: "var(--forest,#07241a)", fontWeight: 700 }}>$200/month.</strong>
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 22 }}>
                <a href="#contact" style={primaryBtn}>Get a free revenue audit <IcoArrow /></a>
                <a href="#how-it-works" style={{ background: "white", color: "var(--forest,#07241a)", padding: "14px 26px", borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: "none", border: "1.5px solid rgba(34,26,17,0.14)", display: "inline-flex", alignItems: "center", boxShadow: cardShadow }}>
                  See how it works
                </a>
              </div>
              <div style={{ display: "flex", gap: 18, fontSize: 13, color: "var(--charcoal,#221a11)", opacity: 0.6, flexWrap: "wrap" }}>
                {["No setup fees", "No contracts", "Live in ~2 weeks"].map((t, i) => (
                  <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="var(--green,#3b6933)" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    {t}{i < 2 ? " ·" : ""}
                  </span>
                ))}
              </div>
            </div>

            {/* Right visual — browser mock + stat panel */}
            <div className="reveal reveal-delay-1" style={{ position: "relative" }}>
              <div style={{ background: "white", borderRadius: 16, boxShadow: "0 24px 60px rgba(30,58,47,0.16)", overflow: "hidden", border: "1px solid rgba(34,26,17,0.06)" }}>
                {/* Browser chrome */}
                <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "12px 16px", background: "var(--linen,#fcebdc)", borderBottom: "1px solid rgba(34,26,17,0.06)" }}>
                  <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#e06c5a" }}/>
                  <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#e9b44c" }}/>
                  <span style={{ width: 11, height: 11, borderRadius: "50%", background: "var(--sage,#86a496)" }}/>
                  <div style={{ marginLeft: 12, flex: 1, background: "white", borderRadius: 6, height: 22, display: "flex", alignItems: "center", padding: "0 10px", fontSize: 11, color: "var(--charcoal,#221a11)", opacity: 0.5 }}>
                    google.com · restaurants near me
                  </div>
                </div>
                {/* Search result row */}
                <div style={{ padding: 18 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, padding: 14, borderRadius: 12, background: "var(--surface-low,#fff1e7)", border: "1.5px solid var(--sage,#86a496)", marginBottom: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: "var(--forest,#07241a)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--sage,#86a496)", fontWeight: 800, fontSize: 15, flexShrink: 0 }}>M</div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "var(--forest,#07241a)" }}>Your Restaurant</div>
                      <div style={{ fontSize: 12, color: "var(--charcoal,#221a11)", opacity: 0.55, display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ color: "var(--amber,#df8752)" }}>★★★★★</span> 4.9 · Open now
                      </div>
                    </div>
                    <span style={{ marginLeft: "auto", fontSize: 10, fontWeight: 700, color: "var(--green,#3b6933)", background: "rgba(59,105,51,0.12)", padding: "4px 8px", borderRadius: 6, whiteSpace: "nowrap" }}>#1 LOCAL</span>
                  </div>
                  {[0, 1].map(i => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", opacity: 0.4 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--surface-dim,#e8d7c9)", flexShrink: 0 }}/>
                      <div style={{ flex: 1 }}>
                        <div style={{ height: 9, width: "55%", borderRadius: 4, background: "var(--surface-dim,#e8d7c9)", marginBottom: 6 }}/>
                        <div style={{ height: 7, width: "35%", borderRadius: 4, background: "var(--surface-dim,#e8d7c9)" }}/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating stat card */}
              <div style={{ position: "absolute", bottom: -22, left: isMobile ? 16 : -22, background: "var(--forest,#07241a)", color: "var(--ivory,#fff8f4)", borderRadius: 14, padding: "16px 22px", boxShadow: "0 16px 40px rgba(7,36,26,0.35)" }}>
                <div className="font-display" style={{ fontSize: 30, fontWeight: 900, color: "var(--amber,#df8752)", lineHeight: 1, letterSpacing: "-0.03em" }}>+$3,100</div>
                <div style={{ fontSize: 11, opacity: 0.7, marginTop: 4 }}>potential monthly uplift</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ─────────────────────────────────────── */}
        <section style={{ background: "white", borderTop: "1px solid rgba(34,26,17,0.06)", borderBottom: "1px solid rgba(34,26,17,0.06)", padding: "32px 0" }}>
          <p style={{ textAlign: "center", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--charcoal,#221a11)", opacity: 0.45, margin: "0 0 20px" }}>
            Trusted by local restaurants across the region
          </p>
          <div style={{ overflow: "hidden", WebkitMaskImage: "linear-gradient(to right,transparent,rgba(0,0,0,0.9) 12%,rgba(0,0,0,0.9) 88%,transparent)" }}>
            <div className="marquee-track" style={{ gap: 56 }}>
              {[...MARQUEE, ...MARQUEE].map((n, i) => (
                <span key={i} className="font-display" style={{ fontSize: 17, fontWeight: 700, color: "var(--forest,#07241a)", opacity: 0.35, whiteSpace: "nowrap" }}>{n}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ──────────────────────────────────────── */}
        <section id="features" style={{ padding: isMobile ? "64px 16px" : "96px 24px" }}>
          <div style={{ maxWidth: 1140, margin: "0 auto" }}>
            <div className="reveal" style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
              <div style={{ display: "inline-block", background: "var(--sage-container,#b9eeaa)", color: "var(--forest-mid,#1e3a2f)", padding: "5px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 18 }}>What&apos;s included</div>
              <h2 className="font-display" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "var(--forest,#07241a)", lineHeight: 1.12, letterSpacing: "-0.025em", margin: "0 0 14px" }}>
                Everything you need. Nothing to manage yourself.
              </h2>
              <p style={{ fontSize: 16, color: "var(--charcoal,#221a11)", opacity: 0.65, lineHeight: 1.7, margin: 0 }}>
                One flat monthly fee covers your entire digital presence, from your website to your Google ranking.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 20 }}>
              {FEATURES.map(({ Icon, title, body }, i) => (
                <div key={title} className={`lift reveal reveal-delay-${(i % 3) + 1}`} style={{ background: "white", borderRadius: 16, padding: 28, border: "1px solid rgba(34,26,17,0.06)", boxShadow: cardShadow }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: "var(--linen,#fcebdc)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green,#3b6933)", marginBottom: 18 }}>
                    <Icon />
                  </div>
                  <h3 className="font-display" style={{ fontSize: 19, fontWeight: 800, color: "var(--forest,#07241a)", margin: "0 0 8px", letterSpacing: "-0.015em" }}>{title}</h3>
                  <p style={{ fontSize: 14, color: "var(--charcoal,#221a11)", opacity: 0.65, lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ──────────────────────────────────── */}
        <section id="how-it-works" style={{ background: "var(--linen,#fcebdc)", padding: isMobile ? "64px 16px" : "96px 24px" }}>
          <div style={{ maxWidth: 1140, margin: "0 auto" }}>
            <div className="reveal" style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px" }}>
              <div style={{ display: "inline-block", background: "white", color: "var(--forest-mid,#1e3a2f)", padding: "5px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 18 }}>How it works</div>
              <h2 className="font-display" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "var(--forest,#07241a)", lineHeight: 1.12, letterSpacing: "-0.025em", margin: 0 }}>
                Your revenue capture system, in three steps.
              </h2>
            </div>
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: isMobile ? 24 : 28 }}>
              {/* connector line */}
              {!isMobile && <div aria-hidden="true" style={{ position: "absolute", top: 34, left: "16.66%", right: "16.66%", height: 2, background: "repeating-linear-gradient(to right,var(--sage,#86a496) 0 8px,transparent 8px 16px)", opacity: 0.5 }}/>}
              {STEPS.map(({ num, title, body }, i) => (
                <div key={num} className={`reveal reveal-delay-${i + 1}`} style={{ position: "relative", textAlign: "center" }}>
                  <div style={{ width: 68, height: 68, borderRadius: "50%", background: "var(--forest,#07241a)", color: "var(--ivory,#fff8f4)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 22px", position: "relative", zIndex: 1, boxShadow: "0 8px 24px rgba(7,36,26,0.22)" }}>
                    <span className="font-display" style={{ fontSize: 24, fontWeight: 900 }}>{num}</span>
                  </div>
                  <h3 className="font-display" style={{ fontSize: 20, fontWeight: 800, color: "var(--forest,#07241a)", margin: "0 0 10px", letterSpacing: "-0.015em", lineHeight: 1.25 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: "var(--charcoal,#221a11)", opacity: 0.65, lineHeight: 1.75, margin: "0 auto", maxWidth: 300 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS / RESULTS BAND ──────────────────────────── */}
        <section className="grain" style={{ background: "var(--forest,#07241a)", padding: isMobile ? "60px 16px" : "80px 24px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: -120, top: -120, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle,rgba(223,135,82,0.1),transparent 70%)", pointerEvents: "none" }}/>
          <div style={{ maxWidth: 1140, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div className="reveal" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: isMobile ? 32 : 24, textAlign: "center" }}>
              {STATS.map(({ n, label }, i) => (
                <div key={n} style={{ borderLeft: !isMobile && i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none", padding: isMobile ? 0 : "0 12px" }}>
                  <div className="font-display" style={{ fontSize: "clamp(2.2rem,4vw,3.4rem)", fontWeight: 900, color: i === 2 ? "var(--amber,#df8752)" : "var(--sage,#86a496)", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 12 }}>{n}</div>
                  <p style={{ fontSize: 13, color: "rgba(255,248,244,0.62)", lineHeight: 1.55, margin: 0 }}>{label}</p>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ marginTop: isMobile ? 40 : 56, paddingTop: isMobile ? 32 : 40, borderTop: "1px solid rgba(255,255,255,0.1)", textAlign: "center", maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
              <p className="font-display" style={{ fontSize: "clamp(1.15rem,2vw,1.5rem)", fontWeight: 700, fontStyle: "italic", color: "var(--ivory,#fff8f4)", lineHeight: 1.5, margin: 0 }}>
                &ldquo;About $1,600 in extra tables plus $1,500 in catering is roughly $3,100 a month, on a $200&ndash;$300 investment. One catering booking pays for months of service.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────── */}
        <section id="reviews" style={{ padding: isMobile ? "64px 16px" : "96px 24px" }}>
          <div style={{ maxWidth: 1140, margin: "0 auto" }}>
            <div className="reveal" style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 52px" }}>
              <div style={{ display: "inline-block", background: "var(--sage-container,#b9eeaa)", color: "var(--forest-mid,#1e3a2f)", padding: "5px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 18 }}>What restaurants say</div>
              <h2 className="font-display" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "var(--forest,#07241a)", lineHeight: 1.12, letterSpacing: "-0.025em", margin: 0 }}>
                Real results. Real restaurants.
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 20 }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={t.name} className={`lift reveal reveal-delay-${i + 1}`} style={{ background: "white", borderRadius: 16, padding: 30, border: "1px solid rgba(34,26,17,0.06)", boxShadow: cardShadow, display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "var(--amber,#df8752)", fontSize: 16, letterSpacing: 1, marginBottom: 16 }}>★★★★★</span>
                  <p className="font-display" style={{ fontSize: 16, color: "var(--forest,#07241a)", lineHeight: 1.65, fontWeight: 600, fontStyle: "italic", margin: "0 0 22px", flex: 1 }} dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }} />
                  <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 18, borderTop: "1px solid rgba(34,26,17,0.07)" }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--linen,#fcebdc)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green,#3b6933)", fontWeight: 800, fontSize: 15, flexShrink: 0 }}>{t.name.charAt(0)}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: "var(--forest,#07241a)", fontSize: 14 }}>{t.name}</div>
                      <div style={{ color: "var(--charcoal,#221a11)", opacity: 0.5, fontSize: 12 }}>{t.restaurant} · {t.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ───────────────────────────────────────── */}
        <section id="pricing" style={{ background: "var(--linen,#fcebdc)", padding: isMobile ? "64px 16px" : "96px 24px" }}>
          <div style={{ maxWidth: 1140, margin: "0 auto" }}>
            <div className="reveal" style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 52px" }}>
              <div style={{ display: "inline-block", background: "white", color: "var(--forest-mid,#1e3a2f)", padding: "5px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 18 }}>Pricing</div>
              <h2 className="font-display" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "var(--forest,#07241a)", lineHeight: 1.12, letterSpacing: "-0.025em", margin: "0 0 12px" }}>
                Simple, transparent pricing.
              </h2>
              <p style={{ fontSize: 16, color: "var(--charcoal,#221a11)", opacity: 0.65, lineHeight: 1.7, margin: 0 }}>
                No setup fees. No long-term contracts. No surprises. Cancel any time.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 22, maxWidth: 840, margin: "0 auto" }}>
              {/* Starter */}
              <div className="lift reveal" style={{ background: "white", borderRadius: 18, padding: 36, border: "1px solid rgba(34,26,17,0.07)", boxShadow: cardShadow }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--charcoal,#221a11)", opacity: 0.5, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 14 }}>Starter</div>
                <div style={{ marginBottom: 4 }}>
                  <span className="font-display" style={{ fontSize: 56, fontWeight: 900, color: "var(--forest,#07241a)", letterSpacing: "-0.04em" }}>$200</span>
                  <span style={{ fontSize: 16, color: "var(--charcoal,#221a11)", opacity: 0.45, marginLeft: 4 }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: "var(--charcoal,#221a11)", opacity: 0.55, margin: "0 0 26px" }}>Get found online</p>
                <div style={{ height: 1, background: "var(--linen,#fcebdc)", marginBottom: 24 }}/>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {STARTER.map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--charcoal,#221a11)" }}>
                      <span style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(59,105,51,0.12)", color: "var(--green,#3b6933)" }}><IcoCheck /></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "block", textAlign: "center", border: "2px solid var(--forest,#07241a)", color: "var(--forest,#07241a)", borderRadius: 10, padding: "14px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>Get started</a>
              </div>

              {/* Growth */}
              <div className="lift reveal reveal-delay-1" style={{ background: "var(--forest,#07241a)", borderRadius: 18, padding: 36, position: "relative", boxShadow: "0 16px 40px rgba(7,36,26,0.25)" }}>
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "var(--amber,#df8752)", color: "white", fontSize: 12, fontWeight: 700, padding: "5px 16px", borderRadius: 100, whiteSpace: "nowrap", boxShadow: "0 6px 16px rgba(223,135,82,0.35)" }}>Most popular</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,248,244,0.55)", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 14 }}>Growth</div>
                <div style={{ marginBottom: 4 }}>
                  <span className="font-display" style={{ fontSize: 56, fontWeight: 900, color: "var(--ivory,#fff8f4)", letterSpacing: "-0.04em" }}>$300</span>
                  <span style={{ fontSize: 16, color: "rgba(255,248,244,0.55)", marginLeft: 4 }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: "rgba(255,248,244,0.6)", margin: "0 0 26px" }}>Full revenue capture system</p>
                <div style={{ height: 1, background: "rgba(255,255,255,0.1)", marginBottom: 24 }}/>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {GROWTH.map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,248,244,0.8)" }}>
                      <span style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(134,164,150,0.25)", color: "var(--sage,#86a496)" }}><IcoCheck /></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "var(--amber,#df8752)", color: "white", borderRadius: 10, padding: "14px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none", boxShadow: "0 8px 20px rgba(223,135,82,0.3)" }}>
                  Get started <IcoArrow />
                </a>
              </div>
            </div>
            <p style={{ textAlign: "center", fontSize: 14, color: "var(--charcoal,#221a11)", opacity: 0.6, marginTop: 26 }}>
              Not sure which plan fits?{" "}
              <a href="#contact" style={{ color: "var(--green,#3b6933)", fontWeight: 700, textDecoration: "none" }}>Let&apos;s talk.</a> We&apos;ll help you figure it out.
            </p>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <section style={{ padding: isMobile ? "64px 16px" : "96px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ display: "inline-block", background: "var(--sage-container,#b9eeaa)", color: "var(--forest-mid,#1e3a2f)", padding: "5px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 18 }}>FAQ</div>
              <h2 className="font-display" style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "var(--forest,#07241a)", lineHeight: 1.12, letterSpacing: "-0.025em", margin: 0 }}>
                Common questions.
              </h2>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {FAQS.map(({ q, a }, i) => {
                const open = openFaq === i;
                return (
                  <div key={i} style={{ background: "white", borderRadius: 12, border: "1px solid rgba(34,26,17,0.08)", boxShadow: open ? cardShadow : "none", overflow: "hidden" }}>
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "20px 22px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "var(--font-body,system-ui)", color: "var(--forest,#07241a)" }}
                    >
                      <span className="font-display" style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em" }} dangerouslySetInnerHTML={{ __html: q }} />
                      <IcoChevron open={open} />
                    </button>
                    <div style={{ maxHeight: open ? 240 : 0, transition: "max-height 0.3s ease", overflow: "hidden" }}>
                      <p style={{ fontSize: 14, color: "var(--charcoal,#221a11)", opacity: 0.7, lineHeight: 1.75, margin: 0, padding: "0 22px 22px" }} dangerouslySetInnerHTML={{ __html: a }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA + CONTACT FORM ──────────────────────── */}
        <section id="contact" className="grain" style={{ background: "var(--forest,#07241a)", padding: isMobile ? "64px 16px" : "96px 24px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: -120, bottom: -120, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle,rgba(134,164,150,0.1),transparent 70%)", pointerEvents: "none" }}/>
          <div style={{ position: "absolute", left: -100, top: -100, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle,rgba(223,135,82,0.08),transparent 70%)", pointerEvents: "none" }}/>
          <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.15fr", gap: isMobile ? 40 : 72, alignItems: "center" }}>
            <div className="reveal">
              <div style={{ display: "inline-block", background: "rgba(134,164,150,0.18)", color: "var(--sage,#86a496)", padding: "5px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 20 }}>Get started</div>
              <h2 className="font-display" style={{ fontSize: "clamp(2.2rem,4.5vw,3.4rem)", fontWeight: 900, color: "var(--ivory,#fff8f4)", lineHeight: 1.08, letterSpacing: "-0.03em", margin: "0 0 20px" }}>
                Let us find where <span style={{ color: "var(--sage,#86a496)", fontStyle: "italic" }}>revenue is leaking.</span>
              </h2>
              <p style={{ fontSize: 17, color: "rgba(255,248,244,0.7)", lineHeight: 1.75, margin: "0 0 28px", maxWidth: 440 }}>
                We&apos;ll audit your current online presence for free and show you exactly what&apos;s costing you customers. Before we even get on the phone.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {["Free revenue audit before we call", "Live in ~2 weeks · No setup fees", "Starting at $200/mo · Cancel any time"].map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,248,244,0.75)" }}>
                    <span style={{ width: 22, height: 22, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(134,164,150,0.2)", color: "var(--sage,#86a496)" }}><IcoCheck /></span>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-1" style={{ background: "var(--ivory,#fff8f4)", borderRadius: 18, padding: isMobile ? "28px 20px" : "36px 40px", boxShadow: "0 24px 60px rgba(7,36,26,0.28)" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(59,105,51,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: "var(--green,#3b6933)" }}>
                    <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <h3 className="font-display" style={{ fontSize: 24, fontWeight: 800, color: "var(--forest,#07241a)", margin: "0 0 8px", letterSpacing: "-0.015em" }}>We&apos;ll be in touch soon!</h3>
                  <p style={{ fontSize: 15, color: "var(--charcoal,#221a11)", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>Expect a call or email within one business day.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <h3 className="font-display" style={{ fontSize: 20, fontWeight: 800, color: "var(--forest,#07241a)", margin: "0 0 4px", letterSpacing: "-0.015em" }}>Tell us about your restaurant</h3>
                    <p style={{ fontSize: 13, color: "var(--charcoal,#221a11)", opacity: 0.5, margin: 0 }}>We&apos;ll audit your online presence before we call.</p>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest,#07241a)", marginBottom: 5, letterSpacing: "0.05em" }}>YOUR NAME *</label>
                      <input type="text" required value={form.name} onChange={up("name")} placeholder="Jane Smith" style={inp}/>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest,#07241a)", marginBottom: 5, letterSpacing: "0.05em" }}>RESTAURANT NAME *</label>
                      <input type="text" required value={form.business} onChange={up("business")} placeholder="Main Street Diner" style={inp}/>
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest,#07241a)", marginBottom: 5, letterSpacing: "0.05em" }}>EMAIL *</label>
                      <input type="email" required value={form.email} onChange={up("email")} placeholder="you@example.com" style={inp}/>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest,#07241a)", marginBottom: 5, letterSpacing: "0.05em" }}>PHONE</label>
                      <input type="tel" value={form.phone} onChange={up("phone")} placeholder="(601) 555-0100" style={inp}/>
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--forest,#07241a)", marginBottom: 5, letterSpacing: "0.05em" }}>ABOUT YOUR RESTAURANT</label>
                    <textarea rows={4} value={form.message} onChange={up("message")} placeholder="e.g. Family BBQ in Hattiesburg, MS — rely on word of mouth and want to grow..." style={{ ...inp, resize: "none" } as React.CSSProperties}/>
                  </div>
                  <button type="submit" style={{ ...primaryBtn, justifyContent: "center", padding: "15px 24px", fontSize: 15, fontWeight: 800 }}>
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
      <footer style={{ background: "var(--forest-mid,#1e3a2f)", padding: isMobile ? "48px 16px 0" : "64px 24px 0" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.6fr 1fr 1fr", gap: isMobile ? 36 : 48, paddingBottom: 40 }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(134,164,150,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--sage,#86a496)", fontSize: 13, fontWeight: 800 }}>M</div>
                <span className="font-display" style={{ fontWeight: 700, color: "var(--ivory,#fff8f4)", fontSize: 16, letterSpacing: "-0.01em" }}>Main Street Compass</span>
              </div>
              <p style={{ fontSize: 14, color: "rgba(255,248,244,0.55)", lineHeight: 1.7, margin: 0, maxWidth: 320 }}>
                Customer acquisition for small-town independent restaurants. We build the system that turns local searches into customers walking through your door.
              </p>
            </div>
            {/* Quick links */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,248,244,0.4)", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 16 }}>Explore</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[["#features", "Features"], ["#how-it-works", "How it works"], ["#pricing", "Pricing"], ["#reviews", "Reviews"]].map(([h, l]) => (
                  <a key={h} href={h} style={{ fontSize: 14, color: "rgba(255,248,244,0.7)", textDecoration: "none" }}>{l}</a>
                ))}
              </div>
            </div>
            {/* Contact */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,248,244,0.4)", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 16 }}>Get in touch</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="#contact" style={{ fontSize: 14, color: "rgba(255,248,244,0.7)", textDecoration: "none" }}>Free revenue audit</a>
                <span style={{ fontSize: 14, color: "rgba(255,248,244,0.55)" }}>Mississippi &amp; the Southeast</span>
                <span style={{ fontSize: 14, color: "rgba(255,248,244,0.55)" }}>Starting at $200/month</span>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "20px 0", textAlign: "center" }}>
            <p style={{ fontSize: 12, color: "rgba(255,248,244,0.4)", margin: 0 }}>
              © 2026 Main Street Compass · Serving Mississippi &amp; the Southeast
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

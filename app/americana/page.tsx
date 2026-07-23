"use client";
import { useState, useEffect } from "react";
import CompassMark from "../_components/CompassMark";

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

/* ─── Enamel-sign palette (local consts) ───────────────────── */
const CREAM = "#F1E7CE";      // aged cream paper
const OXBLOOD = "#8E2B20";    // enamel oxblood red
const FOREST = "#1E3A2F";     // deep forest (brand tie)
const GOLD = "#D19A3E";       // gold / mustard
const INK = "#241C14";        // warm ink / charcoal
const OFFWHITE = "#FBF4E4";   // highlight off-white

/* ─── Display / script type faces (loaded from Google Fonts) ─ */
const SLAB = "'Ultra', Georgia, serif";           // fat slab signage
const SIGN = "'Anton', 'Arial Narrow', sans-serif"; // heavy condensed signage
const SCRIPT = "'Yellowtail', cursive";           // hand-painted accent
const BODY = "var(--font-body, system-ui, -apple-system, sans-serif)";
const MONO = "'Courier New', 'Courier', monospace";

/* ─── Data (reused verbatim from the home page) ────────────── */
const MARQUEE = [
  "The Magnolia Café", "River Bend BBQ", "Cotton Row Diner",
  "Delta Blues Kitchen", "Porch & Table", "Red River Smokehouse",
  "Southern Roots Kitchen", "Main Street Diner",
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
  { n: "01", title: "Professional Website", desc: "Hosted, maintained, mobile-first & reservations-ready." },
  { n: "02", title: "Google Business Profile", desc: "Appear first on Google Maps when locals search for food nearby." },
  { n: "03", title: "Local Search (SEO)", desc: "Rank #1 locally, pull organic traffic, and beat competitors." },
  { n: "04", title: "Google Ads", desc: "Reach people searching for exactly what you serve, right now." },
  { n: "05", title: "Lead & Call Tracking", desc: "A clear monthly report: calls, reservations, catering inquiries, visits." },
  { n: "06", title: "Ongoing Maintenance", desc: "Menu updates, seasonal content, and review responses. All handled." },
];

const TESTIMONIALS = [
  { quote: "We went from invisible to showing up first in Google for our area. Our Friday nights are now fully booked weeks in advance.", name: "Tommy R.", restaurant: "Red River Smokehouse", location: "Natchez, MS" },
  { quote: "I’ve wasted money on marketing before, so I was skeptical. Within 6 weeks we were getting 30 to 40 extra calls a month.", name: "Maria L.", restaurant: "Delta Blues Café", location: "Greenville, MS" },
  { quote: "They built everything in two weeks and handled every detail. I didn’t have to think about it once.", name: "James P.", restaurant: "Porch & Table", location: "Tupelo, MS" },
];

const STARTER = ["Professional website", "Domain & hosting", "Google Business Profile", "Local SEO", "Monthly report", "2 content updates/month"];
const GROWTH = ["Everything in Starter", "Google Ads management", "Keyword targeting", "Call & lead tracking", "Catering landing page", "Unlimited content updates"];

/* ─── Enamel badge / roundel (est. stamp) ──────────────────── */
function EnamelBadge({ size = 132, rotate = -8 }: { size?: number; rotate?: number }) {
  const id = "badgepath";
  return (
    <div style={{ width: size, height: size, transform: `rotate(${rotate}deg)`, flexShrink: 0 }}>
      <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true" style={{ display: "block" }}>
        <circle cx="100" cy="100" r="96" fill={OXBLOOD} />
        <circle cx="100" cy="100" r="88" fill="none" stroke={GOLD} strokeWidth={3} />
        <circle cx="100" cy="100" r="60" fill="none" stroke={GOLD} strokeWidth={1.5} />
        <defs>
          <path id={id} d="M 100,100 m -74,0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0" />
        </defs>
        <text fill={CREAM} style={{ fontFamily: SIGN, fontSize: 19, letterSpacing: "3px" }}>
          <textPath href={`#${id}`} startOffset="0%">
            EST. 2026 &middot; MAIN STREET &middot; EST. 2026 &middot; MAIN STREET &middot;
          </textPath>
        </text>
        <text x="100" y="88" textAnchor="middle" fill={GOLD} style={{ fontFamily: SLAB, fontSize: 30 }}>THE</text>
        <text x="100" y="122" textAnchor="middle" fill={CREAM} style={{ fontFamily: SIGN, fontSize: 30, letterSpacing: "1px" }}>COMPASS</text>
        <text x="100" y="142" textAnchor="middle" fill={GOLD} style={{ fontFamily: SIGN, fontSize: 11, letterSpacing: "4px" }}>&#9733; &#9733; &#9733;</text>
      </svg>
    </div>
  );
}

/* ─── Sign-painter double rule + ornament ──────────────────── */
function DoubleRule({ color = INK, ornament = true }: { color?: string; ornament?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, width: "100%" }}>
      <div style={{ flex: 1, borderTop: `3px solid ${color}`, borderBottom: `1px solid ${color}`, height: 5 }} />
      {ornament && (
        <span style={{ fontFamily: SLAB, color, fontSize: 15, letterSpacing: 3, whiteSpace: "nowrap" }}>&#10022; &#8212; &#10022;</span>
      )}
      <div style={{ flex: 1, borderTop: `3px solid ${color}`, borderBottom: `1px solid ${color}`, height: 5 }} />
    </div>
  );
}

/* ─── Framed photo slot (signboard keyline) ────────────────── */
function PhotoSlot({ caption, height, rotate = 0, bg = FOREST, fg = CREAM }: { caption: string; height: number | string; rotate?: number; bg?: string; fg?: string }) {
  return (
    <div style={{ transform: `rotate(${rotate}deg)`, padding: 9, background: fg, boxShadow: `0 2px 0 ${INK}` }}>
      <div style={{
        position: "relative", height, width: "100%", background: bg,
        border: `2px solid ${fg}`, outline: `2px solid ${bg}`, outlineOffset: 4,
        display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
      }}>
        {/* crossed keylines to read as an empty photo plate */}
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, opacity: 0.18 }} aria-hidden="true">
          <line x1="0" y1="0" x2="100" y2="100" stroke={fg} strokeWidth={0.5} />
          <line x1="100" y1="0" x2="0" y2="100" stroke={fg} strokeWidth={0.5} />
        </svg>
        <div style={{ textAlign: "center", position: "relative", padding: "0 20px" }}>
          <div style={{ fontFamily: SIGN, fontSize: 13, letterSpacing: 4, color: fg, opacity: 0.85 }}>PHOTO</div>
          <div style={{ fontFamily: BODY, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: fg, opacity: 0.6, marginTop: 6 }}>{caption}</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Hand-lettered check tick ─────────────────────────────── */
const Tick = ({ color = OXBLOOD }: { color?: string }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={3.5} style={{ flexShrink: 0 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
const ArrowGlyph = ({ color = INK }: { color?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

/* ─── Main component ───────────────────────────────────────── */
export default function Americana() {
  useScrollReveal();
  const isMobile = useIsMobile();

  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const up = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const pad = isMobile ? "16px" : "24px";
  const label: React.CSSProperties = {
    display: "block", fontFamily: SIGN, fontSize: 11, letterSpacing: 3,
    color: FOREST, marginBottom: 6, textTransform: "uppercase",
  };
  const inp: React.CSSProperties = {
    width: "100%", padding: "12px 14px", borderRadius: 0,
    border: `2px solid ${INK}`, fontSize: 15, color: INK, background: OFFWHITE,
    outline: "none", boxSizing: "border-box", fontFamily: MONO,
  };

  return (
    <div style={{ fontFamily: BODY, background: CREAM, color: INK, overflowX: "hidden" }}>

      {/* Google Fonts — sign-painter display + hand-script accent */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Anton&family=Ultra&family=Yellowtail&display=swap"
      />

      {/* ══ NAV — signboard bar ═══════════════════════════════ */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: FOREST, borderBottom: `4px solid ${GOLD}` }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: `0 ${pad}`, height: 66, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#top" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none" }}>
            <CompassMark size={32} ring={OFFWHITE} north={GOLD} south={OFFWHITE} hub={FOREST} />
            <span style={{ fontFamily: SIGN, fontSize: 20, letterSpacing: 1, color: OFFWHITE, textTransform: "uppercase" }}>Main Street Compass</span>
          </a>
          <nav style={{ display: isMobile ? "none" : "flex", gap: 30, alignItems: "center" }}>
            {[["#services", "Services"], ["#steps", "How It Works"], ["#pricing", "Pricing"]].map(([h, l]) => (
              <a key={h} href={h} style={{ fontFamily: SIGN, fontSize: 13, letterSpacing: 2, color: CREAM, textTransform: "uppercase", opacity: 0.85 }}>{l}</a>
            ))}
          </nav>
          <a href="#contact" style={{ fontFamily: SIGN, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: FOREST, background: GOLD, padding: "9px 16px", border: `2px solid ${OFFWHITE}`, display: "inline-flex", alignItems: "center", gap: 7 }}>
            Get Started <ArrowGlyph color={FOREST} />
          </a>
        </div>
      </header>

      <main id="top">

        {/* ══ HERO ════════════════════════════════════════════ */}
        <section className="grain" style={{ background: OXBLOOD, borderBottom: `6px solid ${INK}`, position: "relative", overflow: "hidden" }}>
          {/* faded painted ghost word */}
          <div aria-hidden="true" style={{
            position: "absolute", left: "-3%", bottom: "-6%", fontFamily: SLAB,
            fontSize: "clamp(180px,34vw,460px)", color: "rgba(0,0,0,0.10)",
            lineHeight: 0.8, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap",
          }}>EAT</div>

          <div style={{ maxWidth: 1160, margin: "0 auto", padding: isMobile ? "48px 16px 56px" : "70px 24px 78px", position: "relative", zIndex: 2 }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.35fr 1fr", gap: isMobile ? 36 : 54, alignItems: "center" }}>

              {/* Left — painted headline */}
              <div>
                <div className="reveal" style={{ display: "inline-block", background: GOLD, color: INK, fontFamily: SIGN, fontSize: 13, letterSpacing: 4, textTransform: "uppercase", padding: "7px 15px", border: `2px solid ${INK}`, transform: "rotate(-1.5deg)", marginBottom: 22 }}>
                  Mississippi &amp; the Southeast
                </div>

                <h1 className="reveal reveal-delay-1" style={{ margin: 0 }}>
                  <span style={{ display: "block", fontFamily: SIGN, fontSize: "clamp(2.9rem,8vw,6.4rem)", lineHeight: 0.92, letterSpacing: 1, color: CREAM, textTransform: "uppercase", textShadow: `3px 3px 0 ${INK}` }}>
                    Your Next
                  </span>
                  <span style={{ display: "block", fontFamily: SIGN, fontSize: "clamp(2.9rem,8vw,6.4rem)", lineHeight: 0.92, letterSpacing: 1, color: GOLD, textTransform: "uppercase", textShadow: `3px 3px 0 ${INK}` }}>
                    Customer Is
                  </span>
                  <span style={{ display: "block", fontFamily: SCRIPT, fontSize: "clamp(2.6rem,7vw,5.2rem)", lineHeight: 1.05, color: OFFWHITE, marginTop: 4, marginLeft: 4 }}>
                    already searching.
                  </span>
                </h1>

                <p className="reveal reveal-delay-2" style={{ fontFamily: BODY, fontSize: "clamp(15px,1.5vw,18px)", lineHeight: 1.7, color: "rgba(251,244,228,0.9)", maxWidth: 480, marginTop: 22 }}>
                  Someone in your town is looking for a place to eat right now. We build the hand-painted signpost that makes sure they find <em style={{ fontStyle: "italic" }}>yours.</em>
                </p>

                <div className="reveal reveal-delay-3" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, marginTop: 28 }}>
                  <a href="#contact" style={{ fontFamily: SIGN, fontSize: 16, letterSpacing: 2, textTransform: "uppercase", color: OXBLOOD, background: OFFWHITE, padding: "15px 26px", border: `3px solid ${INK}`, boxShadow: `4px 4px 0 ${INK}`, display: "inline-flex", alignItems: "center", gap: 9 }}>
                    Free Revenue Audit <ArrowGlyph color={OXBLOOD} />
                  </a>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, color: CREAM }}>
                    <span style={{ fontFamily: SCRIPT, fontSize: 26, color: GOLD }}>starting at</span>
                    <span style={{ fontFamily: SLAB, fontSize: 34, color: OFFWHITE }}>$200</span>
                    <span style={{ fontFamily: SIGN, fontSize: 14, letterSpacing: 1 }}>/MO</span>
                  </div>
                </div>
              </div>

              {/* Right — photo slot + badge */}
              <div className="reveal reveal-delay-2" style={{ position: "relative", paddingTop: isMobile ? 10 : 0 }}>
                <PhotoSlot caption="storefront at dusk" height={isMobile ? 240 : 360} rotate={2.2} bg={FOREST} fg={CREAM} />
                <div style={{ position: "absolute", left: isMobile ? "auto" : -34, right: isMobile ? -6 : "auto", bottom: isMobile ? -26 : -38 }}>
                  <EnamelBadge size={isMobile ? 108 : 138} rotate={-9} />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══ PAINTED BANNER MARQUEE ══════════════════════════ */}
        <section style={{ background: FOREST, padding: "0", borderBottom: `4px solid ${GOLD}` }}>
          <div style={{ background: GOLD, padding: "6px 0", borderBottom: `3px solid ${INK}` }}>
            <p style={{ textAlign: "center", fontFamily: SIGN, fontSize: 12, letterSpacing: 5, textTransform: "uppercase", color: INK, margin: 0 }}>
              &#9733; Serving Good Folks &amp; Good Food Since Day One &#9733;
            </p>
          </div>
          <div style={{ overflow: "hidden", padding: "20px 0", WebkitMaskImage: "linear-gradient(to right,transparent,#000 8%,#000 92%,transparent)" }}>
            <div className="marquee-track" style={{ gap: 0 }}>
              {[...MARQUEE, ...MARQUEE].map((n, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}>
                  <span style={{ fontFamily: SCRIPT, fontSize: "clamp(24px,3vw,38px)", color: i % 2 ? GOLD : CREAM, padding: "0 28px" }}>{n}</span>
                  <span style={{ color: OXBLOOD, fontFamily: SLAB, fontSize: 22 }}>&#10022;</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══ THE PROBLEM — painted numbered leaks ════════════ */}
        <section className="grain" style={{ background: CREAM, padding: isMobile ? "56px 16px" : "88px 24px", position: "relative" }}>
          <div style={{ maxWidth: 1060, margin: "0 auto" }}>
            <div className="reveal" style={{ maxWidth: 720, marginBottom: isMobile ? 40 : 56 }}>
              <div style={{ fontFamily: SIGN, fontSize: 13, letterSpacing: 5, color: OXBLOOD, textTransform: "uppercase" }}>&mdash; The Problem &mdash;</div>
              <h2 style={{ margin: "10px 0 0" }}>
                <span style={{ display: "block", fontFamily: SIGN, fontSize: "clamp(2.1rem,5vw,3.6rem)", lineHeight: 0.98, letterSpacing: 1, color: FOREST, textTransform: "uppercase" }}>People Already Want</span>
                <span style={{ display: "block", fontFamily: SIGN, fontSize: "clamp(2.1rem,5vw,3.6rem)", lineHeight: 0.98, letterSpacing: 1, color: FOREST, textTransform: "uppercase" }}>Great Food.</span>
                <span style={{ display: "block", fontFamily: SCRIPT, fontSize: "clamp(1.8rem,4vw,2.9rem)", color: OXBLOOD, marginTop: 6 }}>How much leaks before they find you?</span>
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 8 : 4 }}>
              {LEAKS.map(({ n, label, title, body }, i) => (
                <div key={n} className={`reveal reveal-delay-${i}`} style={{
                  display: "grid", gridTemplateColumns: isMobile ? "auto 1fr" : "180px 1fr",
                  gap: isMobile ? 16 : 40, alignItems: "start",
                  padding: isMobile ? "24px 0" : "34px 0",
                  borderTop: `2px solid ${INK}`,
                }}>
                  <div style={{ fontFamily: SLAB, fontSize: isMobile ? "3.2rem" : "clamp(4rem,8vw,7rem)", lineHeight: 0.8, color: GOLD, textShadow: `2px 2px 0 ${INK}` }}>{n}</div>
                  <div>
                    <div style={{ fontFamily: SIGN, fontSize: 12, letterSpacing: 4, textTransform: "uppercase", color: OXBLOOD, marginBottom: 8 }}>{label}</div>
                    <h3 style={{ margin: "0 0 10px", fontFamily: SIGN, fontSize: "clamp(1.3rem,2.4vw,1.9rem)", letterSpacing: 0.5, color: FOREST, textTransform: "uppercase", lineHeight: 1.05 }}>{title}</h3>
                    <p style={{ margin: 0, fontFamily: BODY, fontSize: 15, lineHeight: 1.75, color: "rgba(36,28,20,0.8)", maxWidth: 620 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ marginTop: isMobile ? 40 : 56 }}>
              <DoubleRule color={INK} />
              <p style={{ textAlign: "center", margin: "22px auto 0", maxWidth: 640, fontFamily: SLAB, fontSize: "clamp(1.2rem,2.4vw,1.9rem)", lineHeight: 1.3, color: FOREST }}>
                A website is just the start. This is a full <span style={{ color: OXBLOOD }}>revenue capture system.</span>
              </p>
            </div>
          </div>
        </section>

        {/* ══ HOW IT WORKS — big gold numerals ════════════════ */}
        <section id="steps" className="grain" style={{ background: FOREST, padding: isMobile ? "56px 16px" : "88px 24px", borderTop: `6px solid ${INK}`, borderBottom: `6px solid ${INK}` }}>
          <div style={{ maxWidth: 1060, margin: "0 auto" }}>
            <div className="reveal" style={{ textAlign: "center", marginBottom: isMobile ? 40 : 60 }}>
              <div style={{ fontFamily: SIGN, fontSize: 13, letterSpacing: 5, color: GOLD, textTransform: "uppercase" }}>&mdash; How It Works &mdash;</div>
              <h2 style={{ margin: "10px 0 0", fontFamily: SIGN, fontSize: "clamp(2.1rem,5vw,3.6rem)", letterSpacing: 1, color: CREAM, textTransform: "uppercase", lineHeight: 1 }}>
                Your Revenue <span style={{ color: GOLD }}>Capture</span> System
              </h2>
              <p style={{ fontFamily: SCRIPT, fontSize: "clamp(1.4rem,3vw,2.1rem)", color: OFFWHITE, margin: "4px 0 0" }}>we handle every last part of it</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: isMobile ? 20 : 22 }}>
              {STEPS.map(({ num, title, body }, i) => (
                <div key={num} className={`reveal reveal-delay-${i}`} style={{
                  background: CREAM, border: `3px solid ${INK}`, boxShadow: `6px 6px 0 rgba(0,0,0,0.35)`,
                  padding: isMobile ? "24px 22px" : "30px 26px",
                  transform: isMobile ? "none" : `rotate(${i === 1 ? -1.5 : i === 2 ? 1.4 : -0.6}deg)`,
                }}>
                  <div style={{ fontFamily: SLAB, fontSize: "clamp(3.4rem,7vw,5rem)", lineHeight: 0.8, color: OXBLOOD }}>{num}</div>
                  <div style={{ margin: "14px 0", borderTop: `2px solid ${INK}`, borderBottom: `1px solid ${INK}`, height: 4 }} />
                  <h3 style={{ margin: "0 0 10px", fontFamily: SIGN, fontSize: "clamp(1.1rem,2vw,1.4rem)", letterSpacing: 0.5, color: FOREST, textTransform: "uppercase", lineHeight: 1.08 }}>{title}</h3>
                  <p style={{ margin: 0, fontFamily: BODY, fontSize: 14, lineHeight: 1.7, color: "rgba(36,28,20,0.82)" }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SERVICES — painted menu board ═══════════════════ */}
        <section id="services" className="grain" style={{ background: INK, padding: isMobile ? "56px 16px" : "88px 24px", position: "relative" }}>
          <div style={{ maxWidth: 940, margin: "0 auto" }}>
            <div style={{ border: `3px solid ${GOLD}`, outline: `1px solid ${GOLD}`, outlineOffset: 5, padding: isMobile ? "30px 22px" : "48px clamp(28px,5vw,64px)", background: FOREST }}>
              <div className="reveal" style={{ textAlign: "center", marginBottom: isMobile ? 30 : 42 }}>
                <div style={{ fontFamily: SIGN, fontSize: 12, letterSpacing: 5, color: GOLD, textTransform: "uppercase" }}>Everything Included &middot; One Flat Fee</div>
                <h2 style={{ margin: "8px 0 0", fontFamily: SLAB, fontSize: "clamp(2rem,5vw,3.4rem)", color: CREAM, lineHeight: 1 }}>The Full Menu</h2>
                <p style={{ fontFamily: SCRIPT, fontSize: "clamp(1.3rem,3vw,1.9rem)", color: GOLD, margin: "2px 0 0" }}>nothing to manage yourself</p>
                <div style={{ marginTop: 18 }}><DoubleRule color={GOLD} /></div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {SERVICES.map(({ n, title, desc }, i) => (
                  <div key={n} className={`reveal reveal-delay-${i % 4}`} style={{ padding: isMobile ? "16px 0" : "18px 0", borderBottom: i < SERVICES.length - 1 ? "1px dashed rgba(209,154,62,0.45)" : "none" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                      <span style={{ fontFamily: SLAB, fontSize: isMobile ? 20 : 26, color: GOLD, lineHeight: 1 }}>{n}</span>
                      <span style={{ fontFamily: SIGN, fontSize: isMobile ? 20 : "clamp(1.4rem,2.6vw,2rem)", letterSpacing: 1, color: CREAM, textTransform: "uppercase", lineHeight: 1 }}>{title}</span>
                      <span style={{ flex: 1, borderBottom: `2px dotted rgba(251,244,228,0.35)`, transform: "translateY(-4px)", minWidth: 20 }} />
                      <Tick color={GOLD} />
                    </div>
                    <p style={{ margin: "6px 0 0", paddingLeft: isMobile ? 32 : 40, fontFamily: BODY, fontSize: 14, lineHeight: 1.6, color: "rgba(241,231,206,0.72)" }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ THE MATH — ticket stub / receipt ════════════════ */}
        <section className="grain" style={{ background: OXBLOOD, padding: isMobile ? "56px 16px" : "88px 24px", borderTop: `6px solid ${INK}`, borderBottom: `6px solid ${INK}` }}>
          <div style={{ maxWidth: 1060, margin: "0 auto" }}>
            <div className="reveal" style={{ textAlign: "center", marginBottom: isMobile ? 34 : 48 }}>
              <div style={{ fontFamily: SIGN, fontSize: 13, letterSpacing: 5, color: GOLD, textTransform: "uppercase" }}>&mdash; The Math &mdash;</div>
              <h2 style={{ margin: "10px 0 0", fontFamily: SIGN, fontSize: "clamp(2rem,5vw,3.4rem)", letterSpacing: 1, color: CREAM, textTransform: "uppercase", lineHeight: 1 }}>
                What Better Capture Is <span style={{ color: GOLD }}>Actually Worth</span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.5fr 1fr", gap: isMobile ? 22 : 28, alignItems: "start" }}>

              {/* The receipt / ticket stub */}
              <div className="reveal" style={{
                position: "relative", background: OFFWHITE, color: INK,
                padding: isMobile ? "26px 20px 30px" : "36px 40px 40px",
                boxShadow: `6px 6px 0 rgba(0,0,0,0.35)`,
                // perforated top & bottom edges
                WebkitMask: "radial-gradient(circle 8px at 8px -1px, transparent 8px, #000 8.5px) repeat-x top / 24px 16px, radial-gradient(circle 8px at 8px 17px, transparent 8px, #000 8.5px) repeat-x bottom / 24px 16px, linear-gradient(#000,#000) center / 100% calc(100% - 30px) no-repeat",
                mask: "radial-gradient(circle 8px at 8px -1px, transparent 8px, #000 8.5px) repeat-x top / 24px 16px, radial-gradient(circle 8px at 8px 17px, transparent 8px, #000 8.5px) repeat-x bottom / 24px 16px, linear-gradient(#000,#000) center / 100% calc(100% - 30px) no-repeat",
              }}>
                <div style={{ textAlign: "center", fontFamily: SIGN, fontSize: 16, letterSpacing: 3, textTransform: "uppercase" }}>Monthly Revenue Ticket</div>
                <div style={{ textAlign: "center", fontFamily: MONO, fontSize: 11, letterSpacing: 2, margin: "4px 0 16px", opacity: 0.6 }}>NO. 002026 &middot; SMALL-TOWN INDEPENDENT</div>
                <div style={{ borderTop: `2px dashed ${INK}`, paddingTop: 16 }}>
                  {[
                    { k: "Extra table bookings", note: "5 tables/wk × $80 × 4 wks", v: "$1,600" },
                    { k: "Catering & private events", note: "2 bookings/mo × $750 avg", v: "$1,500" },
                  ].map((row) => (
                    <div key={row.k} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "10px 0", borderBottom: `1px dotted rgba(36,28,20,0.4)` }}>
                      <div>
                        <div style={{ fontFamily: MONO, fontSize: 14, fontWeight: 700 }}>{row.k}</div>
                        <div style={{ fontFamily: MONO, fontSize: 11, opacity: 0.6 }}>{row.note}</div>
                      </div>
                      <div style={{ fontFamily: SLAB, fontSize: 24, color: FOREST }}>{row.v}</div>
                    </div>
                  ))}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16, background: FOREST, color: CREAM, padding: "12px 16px" }}>
                    <span style={{ fontFamily: SIGN, fontSize: 15, letterSpacing: 2, textTransform: "uppercase" }}>Potential Uplift</span>
                    <span style={{ fontFamily: SLAB, fontSize: "clamp(1.8rem,4vw,2.6rem)", color: GOLD }}>~$3,100<span style={{ fontFamily: MONO, fontSize: 12 }}>/mo</span></span>
                  </div>
                </div>
                <div style={{ textAlign: "center", marginTop: 14, fontFamily: MONO, fontSize: 10, letterSpacing: 1, opacity: 0.5 }}>* * * THANK YOU &middot; ILLUSTRATIVE ESTIMATE * * *</div>
              </div>

              {/* Investment stub + the point */}
              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                <div className="reveal reveal-delay-1" style={{ background: GOLD, color: INK, border: `3px solid ${INK}`, padding: isMobile ? "22px 20px" : "28px 26px", transform: isMobile ? "none" : "rotate(1.5deg)" }}>
                  <div style={{ fontFamily: SIGN, fontSize: 12, letterSpacing: 4, textTransform: "uppercase" }}>Your Investment</div>
                  <div style={{ fontFamily: SLAB, fontSize: "clamp(2rem,4.5vw,3rem)", lineHeight: 1, margin: "8px 0 6px" }}>$200&ndash;$300<span style={{ fontFamily: MONO, fontSize: 14 }}>/mo</span></div>
                  <p style={{ margin: 0, fontFamily: BODY, fontSize: 14, lineHeight: 1.6 }}>Full website, Google listing, SEO, ads, reporting, and maintenance. All done for you.</p>
                </div>
                <div className="reveal reveal-delay-2" style={{ background: CREAM, color: INK, border: `3px solid ${INK}`, padding: isMobile ? "22px 20px" : "28px 26px", transform: isMobile ? "none" : "rotate(-1.2deg)" }}>
                  <p style={{ margin: 0, fontFamily: SLAB, fontSize: "clamp(1.05rem,1.9vw,1.35rem)", lineHeight: 1.4, color: FOREST }}>
                    &ldquo;One catering booking pays for months of service. This isn&apos;t a website purchase&mdash;it&apos;s an investment in customer acquisition.&rdquo;
                  </p>
                  <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 18, fontFamily: SIGN, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: CREAM, background: OXBLOOD, padding: "11px 18px", border: `2px solid ${INK}` }}>
                    Free Revenue Audit <ArrowGlyph color={CREAM} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ TESTIMONIALS — stamped hand-lettered quotes ═════ */}
        <section className="grain" style={{ background: CREAM, padding: isMobile ? "56px 16px" : "88px 24px" }}>
          <div style={{ maxWidth: 1060, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.3fr", gap: isMobile ? 30 : 48, alignItems: "start" }}>

              {/* Left column: heading + photo slot */}
              <div>
                <div className="reveal">
                  <div style={{ fontFamily: SIGN, fontSize: 13, letterSpacing: 5, color: OXBLOOD, textTransform: "uppercase" }}>&mdash; The Word Around Town &mdash;</div>
                  <h2 style={{ margin: "10px 0 20px", fontFamily: SIGN, fontSize: "clamp(2rem,4.6vw,3.2rem)", letterSpacing: 1, color: FOREST, textTransform: "uppercase", lineHeight: 0.98 }}>
                    Real Results.<br /><span style={{ fontFamily: SCRIPT, fontSize: "0.8em", color: OXBLOOD, textTransform: "none", letterSpacing: 0 }}>Real restaurants.</span>
                  </h2>
                </div>
                <div className="reveal reveal-delay-1">
                  <PhotoSlot caption="owner behind the counter" height={isMobile ? 200 : 300} rotate={-2} bg={FOREST} fg={INK} />
                </div>
              </div>

              {/* Right column: stamped quotes */}
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {TESTIMONIALS.map((t, i) => (
                  <div key={t.name} className={`reveal reveal-delay-${i + 1}`} style={{
                    position: "relative", background: OFFWHITE, border: `2px solid ${INK}`,
                    padding: isMobile ? "22px 20px" : "26px 28px",
                    boxShadow: `4px 4px 0 ${INK}`,
                    transform: isMobile ? "none" : `rotate(${i === 1 ? 1.2 : -0.9}deg)`,
                  }}>
                    <span style={{ position: "absolute", top: 8, right: 14, fontFamily: SLAB, fontSize: 44, color: GOLD, lineHeight: 1 }}>&rdquo;</span>
                    <span style={{ color: GOLD, fontFamily: SLAB, fontSize: 14, letterSpacing: 2 }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                    <p style={{ margin: "10px 0 16px", fontFamily: SLAB, fontSize: "clamp(1rem,1.7vw,1.2rem)", lineHeight: 1.4, color: FOREST, paddingRight: 24 }}>{t.quote}</p>
                    <div style={{ fontFamily: SIGN, fontSize: 15, letterSpacing: 1, textTransform: "uppercase", color: OXBLOOD }}>{t.name}</div>
                    <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: 1, color: "rgba(36,28,20,0.6)" }}>{t.restaurant} &middot; {t.location}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ PRICING — two menu-board tickets ════════════════ */}
        <section id="pricing" className="grain" style={{ background: FOREST, padding: isMobile ? "56px 16px" : "88px 24px", borderTop: `6px solid ${INK}` }}>
          <div style={{ maxWidth: 940, margin: "0 auto" }}>
            <div className="reveal" style={{ textAlign: "center", marginBottom: isMobile ? 36 : 52 }}>
              <div style={{ fontFamily: SIGN, fontSize: 13, letterSpacing: 5, color: GOLD, textTransform: "uppercase" }}>&mdash; Pricing &mdash;</div>
              <h2 style={{ margin: "10px 0 0", fontFamily: SIGN, fontSize: "clamp(2rem,5vw,3.4rem)", letterSpacing: 1, color: CREAM, textTransform: "uppercase", lineHeight: 1 }}>Simple. Honest.</h2>
              <p style={{ fontFamily: SCRIPT, fontSize: "clamp(1.3rem,3vw,1.9rem)", color: OFFWHITE, margin: "2px 0 0" }}>no setup fees, no contracts, cancel anytime</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 22 : 26, alignItems: "start" }}>

              {/* Starter ticket */}
              <div className="reveal" style={{ background: CREAM, border: `3px solid ${INK}`, boxShadow: `6px 6px 0 rgba(0,0,0,0.35)`, padding: isMobile ? "26px 22px" : "34px 30px", transform: isMobile ? "none" : "rotate(-1deg)" }}>
                <div style={{ fontFamily: SIGN, fontSize: 14, letterSpacing: 4, textTransform: "uppercase", color: OXBLOOD }}>Starter</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, margin: "6px 0 4px" }}>
                  <span style={{ fontFamily: SLAB, fontSize: "clamp(2.6rem,6vw,3.6rem)", color: FOREST, lineHeight: 1 }}>$200</span>
                  <span style={{ fontFamily: MONO, fontSize: 14, color: "rgba(36,28,20,0.6)" }}>/month</span>
                </div>
                <div style={{ fontFamily: SCRIPT, fontSize: 22, color: OXBLOOD, marginBottom: 16 }}>get found online</div>
                <div style={{ borderTop: `2px dashed ${INK}`, paddingTop: 16 }}>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                    {STARTER.map((it) => (
                      <li key={it} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: MONO, fontSize: 14, color: INK }}>
                        <Tick color={OXBLOOD} /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#contact" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginTop: 22, fontFamily: SIGN, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", color: FOREST, background: "transparent", border: `3px solid ${FOREST}`, padding: "13px 18px" }}>
                  Get Started
                </a>
              </div>

              {/* Growth ticket — most popular */}
              <div className="reveal reveal-delay-1" style={{ position: "relative", background: OXBLOOD, border: `3px solid ${INK}`, boxShadow: `6px 6px 0 rgba(0,0,0,0.35)`, padding: isMobile ? "26px 22px" : "34px 30px", transform: isMobile ? "none" : "rotate(1.2deg)" }}>
                <div style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%) rotate(-2deg)", background: GOLD, color: INK, fontFamily: SIGN, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", border: `2px solid ${INK}`, whiteSpace: "nowrap" }}>&#9733; Most Popular</div>
                <div style={{ fontFamily: SIGN, fontSize: 14, letterSpacing: 4, textTransform: "uppercase", color: GOLD }}>Growth</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, margin: "6px 0 4px" }}>
                  <span style={{ fontFamily: SLAB, fontSize: "clamp(2.6rem,6vw,3.6rem)", color: CREAM, lineHeight: 1 }}>$300</span>
                  <span style={{ fontFamily: MONO, fontSize: 14, color: "rgba(241,231,206,0.7)" }}>/month</span>
                </div>
                <div style={{ fontFamily: SCRIPT, fontSize: 22, color: GOLD, marginBottom: 16 }}>full revenue capture system</div>
                <div style={{ borderTop: `2px dashed rgba(241,231,206,0.5)`, paddingTop: 16 }}>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                    {GROWTH.map((it) => (
                      <li key={it} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: MONO, fontSize: 14, color: CREAM }}>
                        <Tick color={GOLD} /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#contact" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginTop: 22, fontFamily: SIGN, fontSize: 14, letterSpacing: 2, textTransform: "uppercase", color: INK, background: GOLD, border: `3px solid ${INK}`, padding: "13px 18px" }}>
                  Get Started <ArrowGlyph color={INK} />
                </a>
              </div>
            </div>

            <p style={{ textAlign: "center", marginTop: 26, fontFamily: BODY, fontSize: 14, color: "rgba(241,231,206,0.75)" }}>
              Not sure which plan fits? <a href="#contact" style={{ fontFamily: SIGN, letterSpacing: 1, color: GOLD, textTransform: "uppercase" }}>Let&apos;s talk.</a> We&apos;ll help you figure it out.
            </p>
          </div>
        </section>

        {/* ══ CONTACT — order pad ═════════════════════════════ */}
        <section id="contact" className="grain" style={{ background: OXBLOOD, padding: isMobile ? "56px 16px" : "88px 24px", borderTop: `6px solid ${INK}` }}>
          <div style={{ maxWidth: 1060, margin: "0 auto" }}>
            <div className="reveal" style={{ marginBottom: isMobile ? 34 : 48 }}>
              <div style={{ fontFamily: SIGN, fontSize: 13, letterSpacing: 5, color: GOLD, textTransform: "uppercase" }}>&mdash; Get Started &mdash;</div>
              <h2 style={{ margin: "10px 0 0", fontFamily: SIGN, fontSize: "clamp(2.2rem,6vw,4.4rem)", letterSpacing: 1, color: CREAM, textTransform: "uppercase", lineHeight: 0.96 }}>
                Let Us Find Where
              </h2>
              <span style={{ fontFamily: SCRIPT, fontSize: "clamp(2rem,5vw,3.4rem)", color: GOLD }}>revenue is leaking.</span>
              <p style={{ fontFamily: BODY, fontSize: 16, lineHeight: 1.7, color: "rgba(251,244,228,0.9)", maxWidth: 520, marginTop: 14 }}>
                We&apos;ll audit your current online presence for free and show you exactly what&apos;s costing you customers. Before we even get on the phone.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1.3fr", gap: isMobile ? 30 : 48, alignItems: "start" }}>

              {/* What to expect */}
              <div className="reveal">
                {[
                  { n: "01", heading: "Free revenue audit", body: "We review your search rankings, Google listing, website, and local competitors before we even get on the phone." },
                  { n: "02", heading: "Live in ~2 weeks", body: "Your website, Google listing, and ads are all live within two weeks. No long drawn-out process." },
                  { n: "03", heading: "No setup fees", body: "One flat monthly fee. No contracts. Cancel any time. We earn your business every single month." },
                ].map(({ n, heading, body }) => (
                  <div key={n} style={{ padding: "18px 0", borderTop: `2px solid rgba(251,244,228,0.35)` }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                      <span style={{ fontFamily: SLAB, fontSize: 24, color: GOLD }}>{n}</span>
                      <span style={{ fontFamily: SIGN, fontSize: 16, letterSpacing: 2, textTransform: "uppercase", color: CREAM }}>{heading}</span>
                    </div>
                    <p style={{ margin: "6px 0 0", paddingLeft: 34, fontFamily: BODY, fontSize: 14, lineHeight: 1.65, color: "rgba(251,244,228,0.75)" }}>{body}</p>
                  </div>
                ))}
                <div style={{ borderTop: `2px solid rgba(251,244,228,0.35)`, paddingTop: 16, marginTop: 2, display: "flex", flexWrap: "wrap", gap: 16 }}>
                  {["Starting at $200/mo", "Mississippi & the Southeast"].map((t) => (
                    <span key={t} style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: MONO, fontSize: 13, color: "rgba(251,244,228,0.8)" }}>
                      <Tick color={GOLD} /> {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Order pad form */}
              <div className="reveal reveal-delay-1" style={{ background: OFFWHITE, border: `3px solid ${INK}`, boxShadow: `7px 7px 0 rgba(0,0,0,0.3)`, padding: isMobile ? "24px 20px" : "34px clamp(24px,4vw,44px)" }}>
                {/* order-pad header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: `3px double ${INK}`, paddingBottom: 12, marginBottom: 20 }}>
                  <div>
                    <div style={{ fontFamily: SLAB, fontSize: 22, color: OXBLOOD, lineHeight: 1 }}>Order Pad</div>
                    <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: 1, color: "rgba(36,28,20,0.6)" }}>TABLE FOR: YOUR RESTAURANT</div>
                  </div>
                  <div style={{ fontFamily: MONO, fontSize: 11, color: "rgba(36,28,20,0.6)" }}>NO. ____</div>
                </div>

                {submitted ? (
                  <div style={{ textAlign: "center", padding: "30px 0" }}>
                    <div style={{ display: "inline-flex", width: 62, height: 62, alignItems: "center", justifyContent: "center", border: `3px solid ${FOREST}`, borderRadius: "50%", marginBottom: 16 }}>
                      <Tick color={FOREST} />
                    </div>
                    <h3 style={{ margin: "0 0 8px", fontFamily: SIGN, fontSize: 24, letterSpacing: 1, textTransform: "uppercase", color: FOREST }}>Order&#39;s In!</h3>
                    <p style={{ margin: 0, fontFamily: BODY, fontSize: 15, lineHeight: 1.7, color: "rgba(36,28,20,0.7)" }}>Expect a call or email within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>
                      <div>
                        <label style={label}>Your Name *</label>
                        <input type="text" required value={form.name} onChange={up("name")} placeholder="Jane Smith" style={inp} />
                      </div>
                      <div>
                        <label style={label}>Restaurant Name *</label>
                        <input type="text" required value={form.business} onChange={up("business")} placeholder="Main Street Diner" style={inp} />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>
                      <div>
                        <label style={label}>Email *</label>
                        <input type="email" required value={form.email} onChange={up("email")} placeholder="you@example.com" style={inp} />
                      </div>
                      <div>
                        <label style={label}>Phone</label>
                        <input type="tel" value={form.phone} onChange={up("phone")} placeholder="(601) 555-0100" style={inp} />
                      </div>
                    </div>
                    <div>
                      <label style={label}>About Your Restaurant</label>
                      <textarea rows={4} value={form.message} onChange={up("message")} placeholder="e.g. Family BBQ in Hattiesburg, MS — rely on word of mouth and want to grow..." style={{ ...inp, resize: "none" } as React.CSSProperties} />
                    </div>
                    <button type="submit" style={{ fontFamily: SIGN, fontSize: 17, letterSpacing: 2, textTransform: "uppercase", color: CREAM, background: FOREST, border: `3px solid ${INK}`, boxShadow: `4px 4px 0 ${INK}`, padding: "15px 20px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                      Get My Free Audit <ArrowGlyph color={CREAM} />
                    </button>
                    <p style={{ textAlign: "center", margin: 0, fontFamily: MONO, fontSize: 11, letterSpacing: 1, color: "rgba(36,28,20,0.55)" }}>NO SPAM &middot; NO SALES PRESSURE &middot; JUST A CONVERSATION</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ══ FOOTER ══════════════════════════════════════════ */}
      <footer style={{ background: INK, padding: isMobile ? "26px 16px" : "30px 24px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <CompassMark size={30} ring={OFFWHITE} north={GOLD} south={OFFWHITE} hub={INK} />
            <span style={{ fontFamily: SIGN, fontSize: 18, letterSpacing: 1, color: OFFWHITE, textTransform: "uppercase" }}>Main Street Compass</span>
          </div>
          <p style={{ margin: 0, fontFamily: MONO, fontSize: 12, letterSpacing: 1, color: "rgba(251,244,228,0.55)", textAlign: isMobile ? "center" : "right" }}>
            &copy; 2026 Main Street Compass &middot; Serving Mississippi &amp; the Southeast
          </p>
        </div>
      </footer>

    </div>
  );
}

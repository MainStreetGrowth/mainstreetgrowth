"use client";
import SiteNav from "../_components/SiteNav";
import SiteFooter from "../_components/SiteFooter";
import { useState, useEffect } from "react";

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

/* ─── Clean / light palette (brand hues on white) ──────────── */
const L = {
  paper: "#ffffff",      // primary surface
  panel: "#f6f7f5",      // faint neutral tint for alternating sections
  ink: "#1e3a2f",        // forest text
  green: "#3b6933",      // primary accent
  terra: "#df8752",      // warm accent
  terraDeep: "#c4713e",  // warm accent w/ AA contrast on light
  sage: "#86a496",       // cool accent
  linen: "#fcebdc",      // warm tint
  muted: "rgba(34,26,17,0.6)",
  line: "rgba(34,26,17,0.1)",
  lineSoft: "rgba(34,26,17,0.07)",
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

/* ─── Data ─────────────────────────────────────────────────── */
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
  accent: "green" | "terra";
};

const OUTCOMES: Outcome[] = [
  {
    icon: IcoSearch,
    stat: "80%",
    statLabel: "of diners search online before choosing where to eat",
    title: "Show up first when locals search",
    body: "When someone nearby searches for a place to eat, you are the one they find, not your competitor down the street. First page of Google, first pin on the map, first choice for dinner.",
    accent: "green",
  },
  {
    icon: IcoTable,
    stat: "$1,600",
    statLabel: "in extra table bookings a month",
    title: "Fill your slow nights",
    body: "Turn empty Tuesday tables into booked ones. Five extra tables a week at an $80 average adds up to about $1,600 more every month.",
    accent: "terra",
  },
  {
    icon: IcoCalendar,
    stat: "5–20×",
    statLabel: "more revenue per catering & event booking",
    title: "Win catering & private events",
    body: "Private events, catering jobs, and rehearsal dinners spend 5 to 20 times more than a regular table. Two bookings a month at $750 is another $1,500 in your inbox.",
    accent: "green",
  },
  {
    icon: IcoHeart,
    stat: "∞",
    statLabel: "reasons for your regulars to come back",
    title: "Turn first-timers into regulars",
    body: "With your own email list, text list, and loyalty program, you bring your best customers back on your terms instead of hoping they remember you.",
    accent: "terra",
  },
];

const STEPS = [
  { num: "01", title: "We audit your revenue funnel", body: "We map exactly where customers are slipping away before we build anything." },
  { num: "02", title: "We build your capture system", body: "Website, Google profile, local SEO, and ads. All live within two weeks." },
  { num: "03", title: "You see results every month", body: "A clear monthly report. Calls, visits, reservations, and leads. No jargon." },
];

const TESTIMONIALS = [
  { quote: "We went from invisible to showing up first in Google for our area. Our Friday nights are now fully booked weeks in advance.", name: "Tommy R.", restaurant: "Red River Smokehouse", location: "Natchez, MS" },
  { quote: "I've wasted money on marketing before, so I was skeptical. Within 6 weeks we were getting 30 to 40 extra calls a month.", name: "Maria L.", restaurant: "Delta Blues Café", location: "Greenville, MS" },
  { quote: "They built everything in two weeks and handled every detail. I didn't have to think about it once.", name: "James P.", restaurant: "Porch & Table", location: "Tupelo, MS" },
];

/* ─── Reusable pieces ──────────────────────────────────────── */
const Kicker = ({ children, color = L.green }: { children: React.ReactNode; color?: string }) => (
  <div style={{
    display: "inline-flex", alignItems: "center", gap: 8,
    fontSize: 12, fontWeight: 700, letterSpacing: "0.14em",
    textTransform: "uppercase", color, marginBottom: 20,
  }}>
    <span style={{ width: 22, height: 2, background: color, display: "inline-block" }} />
    {children}
  </div>
);

/* ─── Main component ───────────────────────────────────────── */
export default function HomeLight() {
  const isMobile = useIsMobile();

  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", message: "", company: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");

  const up = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setFormError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      setSubmitted(true);
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSending(false);
    }
  };

  const inp: React.CSSProperties = {
    width: "100%", padding: "13px 16px", borderRadius: 8,
    border: `1.5px solid ${L.line}`, fontSize: 14,
    color: L.ink, background: L.paper,
    outline: "none", boxSizing: "border-box",
    fontFamily: "var(--font-body,system-ui)", transition: "border-color 0.2s",
  };
  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: 11, fontWeight: 700, color: L.ink,
    marginBottom: 5, letterSpacing: "0.06em",
  };

  const statCard: React.CSSProperties = {
    background: L.panel, border: `1px solid ${L.line}`, borderRadius: 8,
  };

  const renderTile = (o: Outcome, i: number) => {
    const Icon = o.icon;
    const accent = o.accent === "green" ? L.green : L.terraDeep;
    const iconBg = o.accent === "green" ? "rgba(59,105,51,0.1)" : "rgba(196,113,62,0.14)";
    return (
      <div key={o.title} className={`lift reveal reveal-delay-${i}`} style={{
        background: L.paper, color: L.ink, border: `1.5px solid ${L.line}`,
        borderRadius: 8, padding: isMobile ? "28px 24px" : "34px 32px",
        minHeight: isMobile ? "auto" : 300, display: "flex", flexDirection: "column",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: iconBg, color: accent,
          }}>
            <Icon />
          </div>
          <div className="font-display" style={{
            fontSize: "clamp(2.6rem,4.4vw,3.6rem)", fontWeight: 800,
            color: accent, letterSpacing: "-0.045em", lineHeight: 1,
          }}>{o.stat}</div>
        </div>
        <div style={{ fontSize: 13.5, fontWeight: 500, color: L.muted, lineHeight: 1.45 }}>{o.statLabel}</div>
        <h3 style={{
          fontSize: "clamp(1.35rem,2.1vw,1.75rem)", fontWeight: 800,
          color: L.ink, letterSpacing: "-0.025em", lineHeight: 1.15, margin: "20px 0 10px",
        }}>{o.title}</h3>
        <p style={{ fontSize: 14.5, lineHeight: 1.6, margin: 0, color: L.muted }}>{o.body}</p>
      </div>
    );
  };

  return (
    <div style={{ fontFamily: "var(--font-body,system-ui)", backgroundColor: L.paper, color: L.ink }}>

      <SiteNav />

      <main>

        {/* ── HERO — clean white, dark text ────────────────────── */}
        <section style={{ background: L.paper, padding: isMobile ? "48px 20px 60px" : "80px 24px 92px", borderBottom: `1px solid ${L.lineSoft}` }}>
          <div style={{
            maxWidth: 1160, margin: "0 auto",
            display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.15fr 0.85fr",
            gap: isMobile ? 44 : 64, alignItems: "center",
          }}>
            <div>
              <div className="reveal">
                <Kicker color={L.green}>For independent restaurants · MS &amp; the Southeast</Kicker>
              </div>
              <h1 className="reveal reveal-delay-1" style={{
                fontSize: isMobile ? "3rem" : "clamp(3.2rem,6vw,5.4rem)",
                fontWeight: 800, lineHeight: 0.98, letterSpacing: "-0.045em",
                color: L.ink, margin: "0 0 26px",
              }}>
                More full tables.<br />
                More catering.<br />
                <span style={{ color: L.green }}>More regulars.</span>
              </h1>
              <p className="reveal reveal-delay-2" style={{
                fontSize: isMobile ? 17 : 19, color: L.muted, lineHeight: 1.65,
                margin: "0 0 34px", maxWidth: 480,
              }}>
                Your next customer is already searching. We make sure they find you first, book the table, and come back again. You just cook.
              </p>
              <div className="reveal reveal-delay-3" style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                <a href="#contact" style={{
                  background: L.green, color: "#fff8f4",
                  padding: "16px 30px", borderRadius: 4, fontSize: 16, fontWeight: 800,
                  display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none",
                }}>
                  Get a free revenue audit <IcoArrow />
                </a>
                <a href="#outcomes" style={{
                  color: L.ink, fontSize: 15, fontWeight: 700, textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: 7,
                  borderBottom: `2px solid ${L.line}`, paddingBottom: 3,
                }}>
                  See what you get
                </a>
              </div>
              <div className="reveal reveal-delay-4" style={{ display: "flex", gap: 18, marginTop: 26, flexWrap: "wrap", fontSize: 13, color: L.muted }}>
                {["No setup fees", "No contracts", "Live in ~2 weeks"].map(t => (
                  <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: L.green, display: "inline-flex" }}><IcoCheck /></span>{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — stat cluster */}
            <div className="reveal reveal-delay-2" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ ...statCard, padding: isMobile ? "28px 26px" : "34px 32px" }}>
                <div className="font-display" style={{ fontSize: isMobile ? "4rem" : "clamp(4rem,7vw,5.6rem)", fontWeight: 800, color: L.terraDeep, lineHeight: 0.9, letterSpacing: "-0.04em", marginBottom: 12 }}>
                  ~$3,100
                </div>
                <div style={{ fontSize: 14, color: L.muted, lineHeight: 1.5 }}>
                  in extra revenue a typical restaurant can capture every month online.
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ ...statCard, padding: "24px 22px" }}>
                  <div className="font-display" style={{ fontSize: "clamp(2.4rem,5vw,3.2rem)", fontWeight: 800, color: L.green, lineHeight: 0.9, letterSpacing: "-0.03em", marginBottom: 8 }}>80%</div>
                  <div style={{ fontSize: 12.5, color: L.muted, lineHeight: 1.45 }}>search online before picking a place to eat</div>
                </div>
                <div style={{ ...statCard, padding: "24px 22px" }}>
                  <div className="font-display" style={{ fontSize: "clamp(2.4rem,5vw,3.2rem)", fontWeight: 800, color: L.ink, lineHeight: 0.9, letterSpacing: "-0.03em", marginBottom: 8 }}>5–20×</div>
                  <div style={{ fontSize: 12.5, color: L.muted, lineHeight: 1.45 }}>more per catering &amp; event booking</div>
                </div>
              </div>
            </div>
          </div>

          {/* Marquee */}
          <div style={{ maxWidth: 1160, margin: isMobile ? "48px auto 0" : "64px auto 0", borderTop: `1px solid ${L.lineSoft}`, paddingTop: 22 }}>
            <p style={{ textAlign: "center", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: L.muted, marginBottom: 16 }}>
              Trusted by local restaurants across the region
            </p>
            <div style={{ overflow: "hidden", WebkitMaskImage: "linear-gradient(to right,transparent,rgba(0,0,0,0.8) 12%,rgba(0,0,0,0.8) 88%,transparent)" }}>
              <div className="marquee-track" style={{ gap: 60 }}>
                {[...MARQUEE, ...MARQUEE].map((n, i) => (
                  <span key={i} className="font-display" style={{ fontSize: 15, fontWeight: 700, color: L.ink, opacity: 0.35, whiteSpace: "nowrap" }}>{n}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── OUTCOMES — bento on faint tint ───────────────────── */}
        <section id="outcomes" style={{ background: L.panel, padding: isMobile ? "68px 20px" : "108px 24px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div className="reveal" style={{ maxWidth: 680, marginBottom: isMobile ? 40 : 60 }}>
              <Kicker>What you get</Kicker>
              <h2 style={{ fontSize: "clamp(2.4rem,4.8vw,3.8rem)", fontWeight: 800, color: L.ink, lineHeight: 1.02, letterSpacing: "-0.035em", margin: 0 }}>
                Four outcomes.{" "}
                <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: L.green }}>One system working for you.</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 16 : 20 }}>
              {OUTCOMES.map((o, i) => renderTile(o, i))}
            </div>
          </div>
        </section>

        {/* ── PROOF band — ROI payoff, light ───────────────────── */}
        <section style={{ background: L.paper, padding: isMobile ? "68px 20px" : "108px 24px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div className="reveal" style={{ maxWidth: 720, marginBottom: isMobile ? 40 : 54 }}>
              <Kicker color={L.terraDeep}>What it&apos;s worth to you</Kicker>
              <h2 style={{ fontSize: "clamp(2.4rem,4.8vw,3.8rem)", fontWeight: 800, color: L.ink, lineHeight: 1.04, letterSpacing: "-0.035em", margin: 0 }}>
                About{" "}
                <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: L.terraDeep }}>$3,100 more</span>{" "}
                in your pocket, every month.
              </h2>
              <p style={{ marginTop: 16, fontSize: 16, color: L.muted, lineHeight: 1.7 }}>
                A conservative picture of what stronger digital capture is worth to a typical small-town restaurant.
              </p>
            </div>

            <div className="reveal" style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 40px 1fr 40px 1.15fr",
              gap: isMobile ? 12 : 0, alignItems: "stretch", marginBottom: 18,
            }}>
              <div style={{ ...statCard, padding: isMobile ? "26px 24px" : "32px 34px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: L.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>More tables filled</div>
                <div className="font-display" data-count="1600" data-prefix="$" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 800, color: L.green, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 10 }}>$1,600</div>
                <div style={{ fontSize: 12, color: L.muted, lineHeight: 1.6 }}>5 tables/week × $80 avg × 4 weeks</div>
              </div>
              <div style={{ display: isMobile ? "none" : "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="font-display" style={{ fontSize: 30, fontWeight: 800, color: "rgba(34,26,17,0.25)" }}>+</span>
              </div>
              <div style={{ ...statCard, padding: isMobile ? "26px 24px" : "32px 34px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: L.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>Catering &amp; events won</div>
                <div className="font-display" data-count="1500" data-prefix="$" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 800, color: L.green, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 10 }}>$1,500</div>
                <div style={{ fontSize: 12, color: L.muted, lineHeight: 1.6 }}>2 bookings/month × $750 avg</div>
              </div>
              <div style={{ display: isMobile ? "none" : "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="font-display" style={{ fontSize: 30, fontWeight: 800, color: "rgba(34,26,17,0.25)" }}>=</span>
              </div>
              <div style={{ background: "rgba(59,105,51,0.08)", border: `1px solid rgba(59,105,51,0.3)`, borderRadius: 8, padding: isMobile ? "26px 24px" : "32px 34px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: L.green, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>In your pocket</div>
                <div className="font-display" data-count="3100" data-prefix="~$" style={{ fontSize: "clamp(2.6rem,5vw,4rem)", fontWeight: 800, color: L.ink, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 10 }}>~$3,100</div>
                <div style={{ fontSize: 12, color: L.muted, lineHeight: 1.6 }}>every month</div>
              </div>
            </div>

            <div className="reveal" style={{
              background: L.panel, borderRadius: 8, padding: isMobile ? "22px 24px" : "24px 34px",
              border: `1px solid ${L.line}`,
              display: "flex", flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: 14,
            }}>
              <p style={{ margin: 0, fontSize: 15, color: L.ink, lineHeight: 1.65, maxWidth: 660 }}>
                Your investment is just <strong style={{ color: L.ink, fontWeight: 700 }}>$200–$300/month</strong>, all done for you.
                One catering booking pays for months of service.
              </p>
              <span style={{ fontSize: 12, color: L.muted, lineHeight: 1.5, flexShrink: 0, maxWidth: 220 }}>
                Illustrative estimates. Results vary by market and execution.
              </span>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────── */}
        <section style={{ background: L.panel, padding: isMobile ? "68px 20px" : "96px 24px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div className="reveal" style={{ maxWidth: 640, marginBottom: isMobile ? 40 : 54 }}>
              <Kicker>What restaurants say</Kicker>
              <h2 style={{ fontSize: "clamp(2.4rem,4.8vw,3.8rem)", fontWeight: 800, color: L.ink, lineHeight: 1.04, letterSpacing: "-0.035em", margin: 0 }}>
                Real results.{" "}
                <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: L.green }}>Real restaurants.</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 20 }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={t.name} className={`lift reveal reveal-delay-${i + 1}`} style={{ background: L.paper, borderRadius: 8, padding: 30, border: `1px solid ${L.line}`, display: "flex", flexDirection: "column" }}>
                  <span style={{ color: L.terra, fontSize: 16, letterSpacing: 1, marginBottom: 16 }}>★★★★★</span>
                  <p className="font-display" style={{ fontSize: 16, color: L.ink, lineHeight: 1.65, fontWeight: 600, fontStyle: "italic", margin: "0 0 22px", flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 18, borderTop: `1px solid ${L.lineSoft}` }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: L.linen, display: "flex", alignItems: "center", justifyContent: "center", color: L.green, fontWeight: 800, fontSize: 15, flexShrink: 0 }}>{t.name.charAt(0)}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: L.ink, fontSize: 14 }}>{t.name}</div>
                      <div style={{ color: L.muted, fontSize: 13 }}>{t.restaurant} · {t.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────── */}
        <section id="how-it-works" style={{ background: L.paper, padding: isMobile ? "64px 20px" : "96px 24px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div className="reveal" style={{ maxWidth: 640, marginBottom: isMobile ? 40 : 54 }}>
              <Kicker>How it works</Kicker>
              <h2 style={{ fontSize: "clamp(2.4rem,4.8vw,3.8rem)", fontWeight: 800, color: L.ink, lineHeight: 1.04, letterSpacing: "-0.035em", margin: 0 }}>
                Your revenue capture system,{" "}
                <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: L.green }}>in three steps.</span>
              </h2>
            </div>
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: isMobile ? 24 : 28 }}>
              {!isMobile && <div aria-hidden="true" style={{ position: "absolute", top: 34, left: "16.66%", right: "16.66%", height: 2, background: "repeating-linear-gradient(to right,#86a496 0 8px,transparent 8px 16px)", opacity: 0.5 }} />}
              {STEPS.map(({ num, title, body }, i) => (
                <div key={num} className={`reveal reveal-delay-${i + 1}`} style={{ position: "relative", textAlign: "center" }}>
                  <div style={{ width: 68, height: 68, borderRadius: "50%", background: L.green, color: "#fff8f4", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 22px", position: "relative", zIndex: 1 }}>
                    <span className="font-display" style={{ fontSize: 24, fontWeight: 800 }}>{num}</span>
                  </div>
                  <h3 className="font-display" style={{ fontSize: 20, fontWeight: 800, color: L.ink, margin: "0 0 10px", letterSpacing: "-0.015em", lineHeight: 1.25 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: L.muted, lineHeight: 1.75, margin: "0 auto", maxWidth: 300 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ─────────────────────────────────────────── */}
        <section id="pricing" style={{ background: L.panel, padding: isMobile ? "64px 20px" : "96px 24px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div className="reveal" style={{ maxWidth: 640, marginBottom: isMobile ? 40 : 54 }}>
              <Kicker>Pricing</Kicker>
              <h2 style={{ fontSize: "clamp(2.4rem,4.8vw,3.8rem)", fontWeight: 800, color: L.ink, lineHeight: 1.04, letterSpacing: "-0.035em", margin: "0 0 14px" }}>
                Simple,{" "}
                <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: L.green }}>transparent pricing.</span>
              </h2>
              <p style={{ fontSize: 16, color: L.muted, lineHeight: 1.7, margin: 0, maxWidth: 460 }}>
                No setup fees. No long-term contracts. No surprises. Cancel any time.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 22 }}>
              {/* Starter */}
              <div className="lift reveal" style={{ background: L.paper, borderRadius: 8, padding: 36, border: `1px solid ${L.line}` }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: L.muted, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 14 }}>Starter</div>
                <div style={{ marginBottom: 4 }}>
                  <span className="font-display" style={{ fontSize: 56, fontWeight: 800, color: L.ink, letterSpacing: "-0.04em" }}>$200</span>
                  <span style={{ fontSize: 16, color: L.muted, marginLeft: 4 }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: L.muted, margin: "0 0 26px" }}>Get found online</p>
                <div style={{ height: 1, background: L.line, marginBottom: 24 }} />
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Professional website", "Domain & hosting", "Google Business Profile", "Local SEO", "Monthly report", "2 content updates/month"].map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: L.ink }}>
                      <span style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(59,105,51,0.12)", color: L.green }}>
                        <IcoCheck />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "block", textAlign: "center", border: `2px solid ${L.ink}`, color: L.ink, borderRadius: 4, padding: "14px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>Get started</a>
              </div>

              {/* Growth — highlighted with green border (clean, no dark fill) */}
              <div className="lift reveal reveal-delay-1" style={{ background: L.paper, borderRadius: 8, padding: 36, position: "relative", border: `2px solid ${L.green}` }}>
                <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: L.terra, color: "#3a1e0e", fontSize: 12, fontWeight: 700, padding: "5px 16px", borderRadius: 4, whiteSpace: "nowrap" }}>Most popular</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: L.green, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 14 }}>Growth</div>
                <div style={{ marginBottom: 4 }}>
                  <span className="font-display" style={{ fontSize: 56, fontWeight: 800, color: L.ink, letterSpacing: "-0.04em" }}>$300</span>
                  <span style={{ fontSize: 16, color: L.muted, marginLeft: 4 }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: L.muted, margin: "0 0 26px" }}>Full revenue capture system</p>
                <div style={{ height: 1, background: L.line, marginBottom: 24 }} />
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Everything in Starter", "Google Ads management", "Keyword targeting", "Call & lead tracking", "Catering landing page", "Unlimited content updates"].map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: L.ink }}>
                      <span style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(59,105,51,0.12)", color: L.green }}>
                        <IcoCheck />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: L.green, color: "#fff8f4", borderRadius: 4, padding: "14px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>
                  Get started <IcoArrow />
                </a>
              </div>
            </div>
            <p style={{ fontSize: 14, color: L.muted, marginTop: 26 }}>
              Not sure which plan fits?{" "}
              <a href="#contact" style={{ color: L.green, fontWeight: 700, textDecoration: "none" }}>Let&apos;s talk.</a> We&apos;ll help you figure it out.
            </p>
          </div>
        </section>

        {/* ── FINAL CTA + CONTACT — light ──────────────────────── */}
        <section id="contact" style={{ background: L.paper, padding: isMobile ? "68px 20px" : "96px 24px", borderTop: `1px solid ${L.lineSoft}` }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div className="reveal" style={{ marginBottom: isMobile ? 44 : 56 }}>
              <Kicker color={L.terraDeep}>Get started</Kicker>
              <h2 style={{ fontSize: "clamp(2.6rem,5.5vw,4.8rem)", fontWeight: 800, color: L.ink, lineHeight: 1.02, letterSpacing: "-0.04em", maxWidth: 760, margin: 0 }}>
                Let&apos;s fill your tables.{" "}
                <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: L.terraDeep }}>Starting with a free audit.</span>
              </h2>
              <p style={{ fontSize: 18, color: L.muted, lineHeight: 1.7, marginTop: 20, maxWidth: 520 }}>
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
                    <div key={n} style={{ padding: "22px 0", borderTop: `1px solid ${L.line}` }}>
                      <div style={{ fontSize: 11, color: L.muted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
                        <span style={{ color: L.terraDeep }}>{n} ·</span> What to expect
                      </div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: L.ink, marginBottom: 6 }}>{heading}</div>
                      <p style={{ fontSize: 14, color: L.muted, lineHeight: 1.65, margin: 0 }}>{body}</p>
                    </div>
                  ))}
                  <div style={{ borderTop: `1px solid ${L.line}`, paddingTop: 20 }}>
                    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 10 : 18, fontSize: 13, color: L.muted }}>
                      {["Starting at $200/mo", "Mississippi & the Southeast"].map(t => (
                        <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ color: L.green, display: "inline-flex" }}><IcoCheck /></span>{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal reveal-delay-1" style={{ background: L.paper, border: `1px solid ${L.line}`, borderRadius: 8, padding: isMobile ? "28px 22px" : "40px clamp(24px,4vw,44px)" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(59,105,51,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: L.green }}>
                      <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="font-display" style={{ fontSize: 26, fontWeight: 800, color: L.ink, marginBottom: 8, letterSpacing: "-0.015em" }}>We&apos;ll be in touch soon!</h3>
                    <p style={{ fontSize: 15, color: L.muted, lineHeight: 1.65 }}>Expect a call or email within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={submitForm} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <div style={{ marginBottom: 4 }}>
                      <h3 className="font-display" style={{ fontSize: 20, fontWeight: 800, color: L.ink, marginBottom: 4, letterSpacing: "-0.015em" }}>Tell us about your restaurant</h3>
                      <p style={{ fontSize: 13, color: L.muted }}>We&apos;ll audit your online presence before we call.</p>
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
                      <textarea rows={4} value={form.message} onChange={up("message")} placeholder="e.g. Family BBQ in Hattiesburg, MS. We rely on word of mouth and want to grow..." style={{ ...inp, resize: "none" } as React.CSSProperties} />
                    </div>
                    {/* Honeypot — hidden from humans */}
                    <input type="text" name="company" value={form.company} onChange={up("company")} tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
                    {formError && (
                      <p role="alert" style={{ fontSize: 13, color: "#a3271f", background: "rgba(163,39,31,0.08)", border: "1px solid rgba(163,39,31,0.2)", borderRadius: 4, padding: "10px 12px", margin: 0 }}>{formError}</p>
                    )}
                    <button type="submit" disabled={sending} style={{ background: L.green, color: "#fff8f4", padding: "15px 24px", borderRadius: 4, fontSize: 15, fontWeight: 800, border: "none", cursor: sending ? "default" : "pointer", opacity: sending ? 0.7 : 1, fontFamily: "var(--font-body,system-ui)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                      {sending ? "Sending…" : <>Get my free revenue audit <IcoArrow /></>}
                    </button>
                    <p style={{ textAlign: "center", fontSize: 12, color: L.muted, margin: 0 }}>No spam. No sales pressure. Just a conversation.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}

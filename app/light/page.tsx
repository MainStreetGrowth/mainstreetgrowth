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

/* ─── Palette (kukie-style: soft, airy, on brand) ──────────── */
const K = {
  ink: "#1e3a2f",
  green: "#3b6933",
  greenText: "#2b5226",
  terra: "#df8752",
  terraDeep: "#c4713e",
  terraText: "#9c5220",
  sage: "#86a496",
  sageText: "#3f574c",
  linen: "#fcebdc",
  card: "#ffffff",
  muted: "rgba(34,26,17,0.58)",
  faint: "rgba(34,26,17,0.4)",
  line: "rgba(34,26,17,0.08)",
  // Signature kukie touch: very soft, large-spread, faint float shadow.
  shadow: "0 2px 4px rgba(34,26,17,0.03), 0 18px 40px -20px rgba(34,26,17,0.18)",
  shadowSoft: "0 1px 3px rgba(34,26,17,0.04), 0 10px 30px -18px rgba(34,26,17,0.14)",
};

/* ─── Icons ────────────────────────────────────────────────── */
const IcoArrow = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.25}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
);
const IcoCheck = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
);
const IcoSearch = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" /></svg>
);
const IcoTable = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M4 10h16M4 10l1-4h14l1 4M4 10v2m16-2v2M6 12v6m12-6v6" /></svg>
);
const IcoCalendar = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><rect x="3" y="5" width="18" height="16" rx="2" /><path strokeLinecap="round" d="M3 9h18M8 3v4m8-4v4" /></svg>
);
const IcoHeart = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M20.8 6.6a5.5 5.5 0 00-7.8 0L12 7.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 000-7.8z" /></svg>
);
const IcoStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 20.5l1.4-6.8L2.2 9l6.9-.7L12 2z" /></svg>
);

/* ─── Data ─────────────────────────────────────────────────── */
const MARQUEE = ["The Magnolia Café", "River Bend BBQ", "Cotton Row Diner", "Delta Blues Kitchen", "Porch & Table", "Red River Smokehouse", "Southern Roots Kitchen", "Main Street Diner"];

type Outcome = { icon: () => React.ReactElement; stat: string; statLabel: string; title: string; body: string; accent: "green" | "terra" | "sage" };
const OUTCOMES: Outcome[] = [
  { icon: IcoSearch, stat: "80%", statLabel: "of diners search online before choosing where to eat", title: "Show up first when locals search", body: "When someone nearby searches for a place to eat, you are the one they find, not your competitor down the street. First page of Google, first pin on the map, first choice for dinner.", accent: "green" },
  { icon: IcoTable, stat: "$1,600", statLabel: "in extra table bookings a month", title: "Fill your slow nights", body: "Turn empty Tuesday tables into booked ones. Five extra tables a week at an $80 average is about $1,600 more every month.", accent: "terra" },
  { icon: IcoCalendar, stat: "5–20×", statLabel: "more revenue per catering and event booking", title: "Win catering and private events", body: "Private events, catering jobs, and rehearsal dinners spend 5 to 20 times more than a table. Two bookings a month at $750 is another $1,500 in your inbox.", accent: "sage" },
  { icon: IcoHeart, stat: "∞", statLabel: "reasons for your regulars to come back", title: "Turn first-timers into regulars", body: "With your own email list, text list, and loyalty program, you bring your best customers back on your terms instead of hoping they remember you.", accent: "green" },
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

/* ─── Building blocks ──────────────────────────────────────── */
const accentColors = {
  green: { fg: "#3b6933", chip: "rgba(59,105,51,0.1)" },
  terra: { fg: "#c4713e", chip: "rgba(223,135,82,0.14)" },
  sage: { fg: "#3f574c", chip: "rgba(134,164,150,0.18)" },
};

const Pill = ({ children, tone = "green", dot = false }: { children: React.ReactNode; tone?: "green" | "terra" | "sage"; dot?: boolean }) => {
  const map = { green: { bg: "rgba(59,105,51,0.12)", fg: K.greenText, dot: K.green }, terra: { bg: "rgba(223,135,82,0.16)", fg: K.terraText, dot: K.terra }, sage: { bg: "rgba(134,164,150,0.2)", fg: K.sageText, dot: K.sage } }[tone];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: map.bg, color: map.fg, fontSize: 12, fontWeight: 700, padding: "5px 12px", borderRadius: 999, whiteSpace: "nowrap" }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: 999, background: map.dot }} />}{children}
    </span>
  );
};

const wrap = (isMobile: boolean): React.CSSProperties => ({ maxWidth: 1080, margin: "0 auto", padding: isMobile ? "0 20px" : "0 32px" });
const cardBase = (radius = 22): React.CSSProperties => ({ background: K.card, borderRadius: radius, border: `1px solid ${K.line}`, boxShadow: K.shadowSoft });

/* ─── Main ─────────────────────────────────────────────────── */
export default function HomeFresh() {
  const isMobile = useIsMobile();

  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", message: "", company: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");

  const up = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm(f => ({ ...f, [k]: e.target.value }));

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true); setFormError("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      setSubmitted(true);
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Something went wrong.");
    } finally { setSending(false); }
  };

  const inp: React.CSSProperties = { width: "100%", padding: "13px 15px", borderRadius: 12, border: `1px solid ${K.line}`, fontSize: 14.5, color: K.ink, background: "rgba(255,255,255,0.7)", outline: "none", boxSizing: "border-box", fontFamily: "var(--font-body,system-ui)" };
  const labelStyle: React.CSSProperties = { display: "block", fontSize: 11.5, fontWeight: 700, color: K.faint, marginBottom: 6, letterSpacing: "0.04em" };

  const pillBtn = (filled: boolean): React.CSSProperties => ({
    display: "inline-flex", alignItems: "center", gap: 9, padding: "14px 26px", borderRadius: 999, fontSize: 15, fontWeight: 700, textDecoration: "none",
    background: filled ? K.green : K.card, color: filled ? "#fff8f4" : K.ink,
    border: filled ? "1px solid transparent" : `1px solid ${K.line}`, boxShadow: filled ? "0 6px 18px -8px rgba(59,105,51,0.6)" : K.shadowSoft,
  });

  const sectionHead = (kicker: string, lead: React.ReactNode, sub?: string, color = K.green) => (
    <div className="reveal" style={{ textAlign: "center", maxWidth: 660, margin: "0 auto", marginBottom: isMobile ? 40 : 62 }}>
      <div style={{ marginBottom: 14 }}><span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color }}>{kicker}</span></div>
      <h2 style={{ fontSize: "clamp(2rem,4.4vw,3.2rem)", fontWeight: 800, color: K.ink, lineHeight: 1.08, letterSpacing: "-0.03em", margin: 0 }}>{lead}</h2>
      {sub && <p style={{ fontSize: 16.5, color: K.muted, lineHeight: 1.6, margin: "16px auto 0", maxWidth: 520 }}>{sub}</p>}
    </div>
  );

  return (
    <div style={{
      fontFamily: "var(--font-body,system-ui)",
      color: K.ink,
      // Signature kukie styling: one continuous soft pastel wash under everything.
      background: `
        radial-gradient(1200px 700px at 82% -4%, rgba(134,164,150,0.22), transparent 55%),
        radial-gradient(1000px 620px at 4% 8%, rgba(223,135,82,0.10), transparent 52%),
        radial-gradient(900px 900px at 96% 70%, rgba(252,235,220,0.55), transparent 55%),
        #fcfbf8`,
    }}>
      <SiteNav />
      <main>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section style={{ padding: isMobile ? "50px 0 40px" : "84px 0 56px" }}>
          <div style={{ ...wrap(isMobile), textAlign: "center" }}>
            <div className="reveal" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.72)", border: `1px solid ${K.line}`, boxShadow: K.shadowSoft, padding: "7px 15px", borderRadius: 999, marginBottom: 28, backdropFilter: "blur(6px)" }}>
              <span style={{ width: 7, height: 7, borderRadius: 999, background: K.green }} />
              <span style={{ fontSize: 12.5, fontWeight: 700, color: K.muted }}>For independent restaurants · MS &amp; the Southeast</span>
            </div>
            <h1 className="reveal reveal-delay-1" style={{ fontSize: isMobile ? "2.9rem" : "clamp(3.4rem,6.6vw,5.6rem)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.04em", color: K.ink, margin: "0 auto 24px", maxWidth: 900 }}>
              More full tables. More catering.{" "}
              <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: K.green }}>More regulars.</span>
            </h1>
            <p className="reveal reveal-delay-2" style={{ fontSize: isMobile ? 17 : 20, color: K.muted, lineHeight: 1.6, margin: "0 auto 34px", maxWidth: 560 }}>
              Your next customer is already searching. We make sure they find you first, book the table, and come back again. You just cook.
            </p>
            <div className="reveal reveal-delay-3" style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
              <a href="#contact" style={pillBtn(true)}>Get a free revenue audit <IcoArrow /></a>
              <a href="#outcomes" style={pillBtn(false)}>See what you get</a>
            </div>
            <div className="reveal reveal-delay-4" style={{ display: "flex", gap: 18, marginTop: 22, flexWrap: "wrap", justifyContent: "center", fontSize: 13, color: K.muted }}>
              {["No setup fees", "No contracts", "Live in ~2 weeks"].map(t => (
                <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ color: K.green, display: "inline-flex" }}><IcoCheck /></span>{t}</span>
              ))}
            </div>
          </div>

          {/* Stat cards floating on the wash */}
          <div className="reveal reveal-delay-3" style={{ ...wrap(isMobile), marginTop: isMobile ? 44 : 64 }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 16 }}>
              {[
                { big: "~$3,100", label: "in extra revenue a typical restaurant can capture every month online", color: K.terraDeep, count: "3100", prefix: "~$" },
                { big: "80%", label: "of diners search online before picking a place to eat", color: K.green, count: "80", suffix: "%" },
                { big: "5–20×", label: "more revenue per catering and event booking", color: K.ink },
              ].map(s => (
                <div key={s.big} style={{ ...cardBase(20), padding: isMobile ? "24px 22px" : "28px 26px", background: "rgba(255,255,255,0.78)", backdropFilter: "blur(6px)" }}>
                  <div className="font-display" data-count={s.count} data-prefix={s.prefix} data-suffix={s.suffix} style={{ fontSize: "clamp(2.2rem,3.6vw,2.9rem)", fontWeight: 800, color: s.color, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 10 }}>{s.big}</div>
                  <div style={{ fontSize: 13.5, color: K.muted, lineHeight: 1.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee */}
          <div style={{ ...wrap(isMobile), marginTop: isMobile ? 40 : 56 }}>
            <p style={{ textAlign: "center", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: K.faint, marginBottom: 16 }}>Trusted by local restaurants across the region</p>
            <div style={{ overflow: "hidden", WebkitMaskImage: "linear-gradient(to right,transparent,rgba(0,0,0,0.8) 12%,rgba(0,0,0,0.8) 88%,transparent)" }}>
              <div className="marquee-track" style={{ gap: 54 }}>
                {[...MARQUEE, ...MARQUEE].map((n, i) => (
                  <span key={i} className="font-display" style={{ fontSize: 16, fontWeight: 600, fontStyle: "italic", color: K.ink, opacity: 0.3, whiteSpace: "nowrap" }}>{n}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── OUTCOMES — soft cards ────────────────────────────── */}
        <section id="outcomes" style={{ padding: isMobile ? "56px 0" : "88px 0" }}>
          <div style={wrap(isMobile)}>
            {sectionHead("What you get", <>Four outcomes.{" "}<span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: K.green }}>One system working for you.</span></>, "Everything that gets your restaurant found and booked, built and managed for you.")}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 18 }}>
              {OUTCOMES.map((o, i) => {
                const Icon = o.icon;
                const a = accentColors[o.accent];
                return (
                  <div key={o.title} className={`lift reveal reveal-delay-${i}`} style={{ ...cardBase(22), padding: isMobile ? 24 : 30, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
                      <span style={{ width: 46, height: 46, borderRadius: 14, background: a.chip, color: a.fg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon /></span>
                      <div className="font-display" style={{ fontSize: "clamp(2.2rem,3.6vw,2.9rem)", fontWeight: 800, color: a.fg, letterSpacing: "-0.04em", lineHeight: 1 }}>{o.stat}</div>
                    </div>
                    <div style={{ fontSize: 13, color: K.faint, lineHeight: 1.45, marginBottom: 16, fontWeight: 500 }}>{o.statLabel}</div>
                    <h3 style={{ fontSize: "clamp(1.3rem,2vw,1.6rem)", fontWeight: 800, color: K.ink, letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 10px" }}>{o.title}</h3>
                    <p style={{ fontSize: 14.5, color: K.muted, lineHeight: 1.6, margin: 0 }}>{o.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── ROI band ─────────────────────────────────────────── */}
        <section style={{ padding: isMobile ? "56px 0" : "88px 0" }}>
          <div style={wrap(isMobile)}>
            {sectionHead("What it's worth", <>About{" "}<span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: K.terraDeep }}>$3,100 more</span>{" "}in your pocket, every month.</>, "A conservative picture of what stronger digital capture is worth to a typical small-town restaurant.", K.terraDeep)}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1.1fr", gap: 16, alignItems: "stretch" }}>
              {[
                { label: "More tables filled", big: "$1,600", note: "5 tables/week × $80 × 4 weeks", count: "1600", prefix: "$", tone: "green" as const },
                { label: "Catering and events", big: "$1,500", note: "2 bookings/month × $750 avg", count: "1500", prefix: "$", tone: "green" as const },
                { label: "In your pocket", big: "~$3,100", note: "every month", count: "3100", prefix: "~$", tone: "terra" as const, strong: true },
              ].map(c => (
                <div key={c.label} className="reveal" style={{ ...cardBase(20), padding: isMobile ? "24px 22px" : "30px 28px", background: c.strong ? "rgba(59,105,51,0.06)" : "rgba(255,255,255,0.78)", borderColor: c.strong ? "rgba(59,105,51,0.28)" : K.line, backdropFilter: "blur(6px)" }}>
                  <div style={{ marginBottom: 14 }}><Pill tone={c.tone}>{c.label}</Pill></div>
                  <div className="font-display" data-count={c.count} data-prefix={c.prefix} style={{ fontSize: c.strong ? "clamp(2.6rem,5vw,3.6rem)" : "clamp(2.2rem,4vw,3rem)", fontWeight: 800, color: c.strong ? K.terraDeep : K.green, letterSpacing: "-0.035em", lineHeight: 1, marginBottom: 8 }}>{c.big}</div>
                  <div style={{ fontSize: 12.5, color: K.muted }}>{c.note}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ ...cardBase(18), padding: isMobile ? "20px 22px" : "22px 28px", marginTop: 16, background: "rgba(255,255,255,0.7)", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: 12, backdropFilter: "blur(6px)" }}>
              <p style={{ margin: 0, fontSize: 15, color: K.ink, lineHeight: 1.6, maxWidth: 640 }}>Your investment is just <strong style={{ fontWeight: 800 }}>$200–$300/month</strong>, all done for you. One catering booking pays for months of service.</p>
              <span style={{ fontSize: 12, color: K.faint, flexShrink: 0, maxWidth: 220 }}>Illustrative estimates. Results vary by market and execution.</span>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────── */}
        <section style={{ padding: isMobile ? "56px 0" : "88px 0" }}>
          <div style={wrap(isMobile)}>
            {sectionHead("What restaurants say", <>Real results.{" "}<span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: K.green }}>Real restaurants.</span></>)}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 18 }}>
              {TESTIMONIALS.map((t, i) => {
                const c = [K.green, K.terra, K.sage][i];
                return (
                  <div key={t.name} className={`lift reveal reveal-delay-${i + 1}`} style={{ ...cardBase(20), padding: 26, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", gap: 3, color: K.terra, marginBottom: 16 }}>{Array.from({ length: 5 }).map((_, s) => <IcoStar key={s} />)}</div>
                    <p style={{ fontSize: 15.5, color: K.ink, lineHeight: 1.6, fontWeight: 500, margin: "0 0 22px", flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 11, paddingTop: 18, borderTop: `1px solid ${K.line}` }}>
                      <span style={{ width: 40, height: 40, borderRadius: 999, background: c, color: "#fff8f4", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14, flexShrink: 0 }}>{t.name.charAt(0)}</span>
                      <div>
                        <div style={{ fontWeight: 700, color: K.ink, fontSize: 14 }}>{t.name}</div>
                        <div style={{ color: K.muted, fontSize: 13 }}>{t.restaurant} · {t.location}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────── */}
        <section id="how-it-works" style={{ padding: isMobile ? "56px 0" : "88px 0" }}>
          <div style={wrap(isMobile)}>
            {sectionHead("How it works", <>Up and running{" "}<span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: K.green }}>in three steps.</span></>)}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 18 }}>
              {STEPS.map(({ num, title, body }, i) => (
                <div key={num} className={`reveal reveal-delay-${i + 1}`} style={{ ...cardBase(20), padding: isMobile ? 24 : 28 }}>
                  <span className="font-display" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, borderRadius: 13, background: "rgba(59,105,51,0.1)", color: K.green, fontWeight: 800, fontSize: 16, marginBottom: 18 }}>{num}</span>
                  <h3 style={{ fontSize: 19, fontWeight: 800, color: K.ink, margin: "0 0 9px", letterSpacing: "-0.015em", lineHeight: 1.25 }}>{title}</h3>
                  <p style={{ fontSize: 14.5, color: K.muted, lineHeight: 1.65, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ──────────────────────────────────────────── */}
        <section id="pricing" style={{ padding: isMobile ? "56px 0" : "88px 0" }}>
          <div style={wrap(isMobile)}>
            {sectionHead("Pricing", <>Simple,{" "}<span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: K.green }}>transparent pricing.</span></>, "No setup fees. No long-term contracts. No surprises. Cancel any time.")}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20, maxWidth: 860, margin: "0 auto" }}>
              <div className="lift reveal" style={{ ...cardBase(22), padding: isMobile ? 28 : 34 }}>
                <Pill tone="sage">Starter</Pill>
                <div style={{ margin: "18px 0 4px" }}><span className="font-display" style={{ fontSize: 52, fontWeight: 800, color: K.ink, letterSpacing: "-0.03em" }}>$200</span><span style={{ fontSize: 16, color: K.muted, marginLeft: 4 }}>/month</span></div>
                <p style={{ fontSize: 14, color: K.muted, margin: "0 0 24px" }}>Get found online</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Professional website", "Domain and hosting", "Google Business Profile", "Local SEO", "Monthly report", "2 content updates / month"].map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 11, fontSize: 14.5, color: K.ink }}><span style={{ width: 20, height: 20, borderRadius: 999, background: "rgba(59,105,51,0.12)", color: K.green, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><IcoCheck /></span>{item}</li>
                  ))}
                </ul>
                <a href="#contact" style={{ ...pillBtn(false), width: "100%", justifyContent: "center", boxSizing: "border-box" }}>Get started</a>
              </div>
              <div className="lift reveal reveal-delay-1" style={{ ...cardBase(22), padding: isMobile ? 28 : 34, border: `2px solid ${K.green}`, position: "relative", boxShadow: K.shadow }}>
                <div style={{ position: "absolute", top: -13, left: 34 }}><Pill tone="terra" dot>Most popular</Pill></div>
                <Pill tone="green">Growth</Pill>
                <div style={{ margin: "18px 0 4px" }}><span className="font-display" style={{ fontSize: 52, fontWeight: 800, color: K.ink, letterSpacing: "-0.03em" }}>$300</span><span style={{ fontSize: 16, color: K.muted, marginLeft: 4 }}>/month</span></div>
                <p style={{ fontSize: 14, color: K.muted, margin: "0 0 24px" }}>Full revenue capture system</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Everything in Starter", "Google Ads management", "Keyword targeting", "Call and lead tracking", "Catering landing page", "Unlimited content updates"].map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 11, fontSize: 14.5, color: K.ink }}><span style={{ width: 20, height: 20, borderRadius: 999, background: "rgba(59,105,51,0.12)", color: K.green, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><IcoCheck /></span>{item}</li>
                  ))}
                </ul>
                <a href="#contact" style={{ ...pillBtn(true), width: "100%", justifyContent: "center", boxSizing: "border-box" }}>Get started <IcoArrow /></a>
              </div>
            </div>
            <p style={{ textAlign: "center", fontSize: 14.5, color: K.muted, marginTop: 26 }}>Not sure which plan fits? <a href="#contact" style={{ color: K.green, fontWeight: 700, textDecoration: "none" }}>Let&apos;s talk.</a> We&apos;ll help you figure it out.</p>
          </div>
        </section>

        {/* ── CTA + CONTACT ────────────────────────────────────── */}
        <section id="contact" style={{ padding: isMobile ? "12px 0 72px" : "16px 0 104px" }}>
          <div style={wrap(isMobile)}>
            <div style={{ ...cardBase(28), boxShadow: K.shadow, overflow: "hidden", background: `radial-gradient(700px 340px at 84% -12%, rgba(134,164,150,0.24), transparent 60%), radial-gradient(560px 300px at 2% 112%, rgba(223,135,82,0.12), transparent 60%), rgba(255,255,255,0.85)`, backdropFilter: "blur(4px)" }}>
              <div style={{ padding: isMobile ? "36px 22px" : "56px clamp(28px,5vw,64px)" }}>
                <div className="reveal" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 40px" }}>
                  <div style={{ marginBottom: 14 }}><span style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: K.terraDeep }}>Get started</span></div>
                  <h2 style={{ fontSize: "clamp(2.1rem,4.6vw,3.4rem)", fontWeight: 800, color: K.ink, lineHeight: 1.05, letterSpacing: "-0.03em", margin: 0 }}>
                    Let&apos;s fill your tables.{" "}
                    <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: K.terraDeep }}>Starting with a free audit.</span>
                  </h2>
                  <p style={{ fontSize: 16.5, color: K.muted, lineHeight: 1.6, margin: "16px auto 0", maxWidth: 520 }}>
                    We&apos;ll audit your current online presence for free and show you exactly what&apos;s costing you customers. Before we even get on the phone.
                  </p>
                </div>
                <div className="reveal reveal-delay-1" style={{ maxWidth: 620, margin: "0 auto" }}>
                  {submitted ? (
                    <div style={{ textAlign: "center", padding: "36px 0" }}>
                      <div style={{ width: 58, height: 58, borderRadius: 999, background: "rgba(59,105,51,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", color: K.green }}>
                        <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <h3 style={{ fontSize: 24, fontWeight: 800, color: K.ink, marginBottom: 8, letterSpacing: "-0.015em" }}>We&apos;ll be in touch soon.</h3>
                      <p style={{ fontSize: 15, color: K.muted, lineHeight: 1.6 }}>Expect a call or email within one business day.</p>
                    </div>
                  ) : (
                    <form onSubmit={submitForm} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>
                        <div><label style={labelStyle}>Your name *</label><input type="text" required value={form.name} onChange={up("name")} placeholder="Jane Smith" style={inp} /></div>
                        <div><label style={labelStyle}>Restaurant name *</label><input type="text" required value={form.business} onChange={up("business")} placeholder="Main Street Diner" style={inp} /></div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>
                        <div><label style={labelStyle}>Email *</label><input type="email" required value={form.email} onChange={up("email")} placeholder="you@example.com" style={inp} /></div>
                        <div><label style={labelStyle}>Phone</label><input type="tel" value={form.phone} onChange={up("phone")} placeholder="(601) 555-0100" style={inp} /></div>
                      </div>
                      <div><label style={labelStyle}>About your restaurant</label><textarea rows={3} value={form.message} onChange={up("message")} placeholder="e.g. Family BBQ in Hattiesburg, MS. We rely on word of mouth and want to grow." style={{ ...inp, resize: "none" } as React.CSSProperties} /></div>
                      <input type="text" name="company" value={form.company} onChange={up("company")} tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
                      {formError && <p role="alert" style={{ fontSize: 13, color: "#a3271f", margin: 0 }}>{formError}</p>}
                      <button type="submit" disabled={sending} style={{ ...pillBtn(true), justifyContent: "center", border: "none", cursor: sending ? "default" : "pointer", opacity: sending ? 0.7 : 1, marginTop: 4 }}>
                        {sending ? "Sending…" : <>Get my free revenue audit <IcoArrow /></>}
                      </button>
                      <p style={{ textAlign: "center", fontSize: 12.5, color: K.faint, margin: 0 }}>No spam. No sales pressure. Just a conversation.</p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}

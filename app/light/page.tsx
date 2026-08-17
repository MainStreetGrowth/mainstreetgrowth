"use client";
import SiteNav from "../_components/SiteNavLight";
import SiteFooter from "../_components/SiteFooterLight";
import { useState, useEffect } from "react";

/* ─── Mobile detection hook ────────────────────────────────── */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

/* ─── Palette (kukie-style: bright, airy, soft — on brand) ─── */
const K = {
  ink: "#16261d",
  green: "#3b6933",
  greenText: "#2b5226",
  terra: "#df8752",
  terraDeep: "#c4713e",
  terraText: "#9c5220",
  sage: "#86a496",
  sageText: "#3f574c",
  linen: "#fcebdc",
  card: "#ffffff",
  page: "#ffffff",
  panel: "#f7f8f6",
  muted: "rgba(22,38,29,0.62)",
  faint: "rgba(22,38,29,0.42)",
  line: "rgba(22,38,29,0.08)",
  shadow: "0 4px 10px rgba(22,38,29,0.04), 0 26px 50px -24px rgba(22,38,29,0.22)",
  shadowSoft: "0 2px 6px rgba(22,38,29,0.04), 0 16px 34px -20px rgba(22,38,29,0.16)",
  chip: "0 6px 18px -6px rgba(22,38,29,0.22)",
};

/* ─── Icons ────────────────────────────────────────────────── */
const IcoArrow = () => (<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>);
const IcoCheck = () => (<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>);
const IcoDown = () => (<svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l6-6m-6 6l-6-6" /></svg>);
const IcoSearch = () => (<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" /></svg>);
const IcoTable = () => (<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M4 10h16M4 10l1-4h14l1 4M4 10v2m16-2v2M6 12v6m12-6v6" /></svg>);
const IcoCalendar = () => (<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><rect x="3" y="5" width="18" height="16" rx="2" /><path strokeLinecap="round" d="M3 9h18M8 3v4m8-4v4" /></svg>);
const IcoHeart = () => (<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}><path strokeLinecap="round" strokeLinejoin="round" d="M20.8 6.6a5.5 5.5 0 00-7.8 0L12 7.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 000-7.8z" /></svg>);
const IcoStar = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 20.5l1.4-6.8L2.2 9l6.9-.7L12 2z" /></svg>);
const IcoPin = () => (<svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.9}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>);
const IcoPhone = () => (<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.9}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.6a1 1 0 01.95.68l1.2 3.4a1 1 0 01-.27 1.06l-1.6 1.5a13 13 0 006.1 6.1l1.5-1.6a1 1 0 011.06-.27l3.4 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2A16 16 0 013 5z" /></svg>);

/* ─── Data ─────────────────────────────────────────────────── */
const MARQUEE = ["The Magnolia Café", "River Bend BBQ", "Cotton Row Diner", "Delta Blues Kitchen", "Porch & Table", "Red River Smokehouse", "Southern Roots Kitchen", "Main Street Diner"];

type Outcome = { icon: () => React.ReactElement; label: string; stat: string; statLabel: string; title: string; body: string; accent: "green" | "terra" | "sage"; span?: boolean; mock: React.ReactNode };

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
const toneMap = {
  green: { fg: K.greenText, solid: K.green, bg: "rgba(59,105,51,0.12)", chip: "rgba(59,105,51,0.1)", dot: K.green },
  terra: { fg: K.terraText, solid: K.terraDeep, bg: "rgba(223,135,82,0.16)", chip: "rgba(223,135,82,0.14)", dot: K.terra },
  sage: { fg: K.sageText, solid: K.sage, bg: "rgba(134,164,150,0.2)", chip: "rgba(134,164,150,0.18)", dot: K.sage },
};
type Tone = keyof typeof toneMap;

const Pill = ({ children, tone = "green", dot = false }: { children: React.ReactNode; tone?: Tone; dot?: boolean }) => {
  const m = toneMap[tone];
  return (<span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: m.bg, color: m.fg, fontSize: 12, fontWeight: 700, padding: "5px 12px", borderRadius: 999, whiteSpace: "nowrap" }}>{dot && <span style={{ width: 6, height: 6, borderRadius: 999, background: m.dot }} />}{children}</span>);
};

const wrap = (isMobile: boolean): React.CSSProperties => ({ maxWidth: 1200, margin: "0 auto", padding: isMobile ? "0 18px" : "0 28px" });
const inner = (isMobile: boolean): React.CSSProperties => ({ maxWidth: 1080, margin: "0 auto", padding: isMobile ? "0 20px" : "0 32px" });
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
    e.preventDefault(); setSending(true); setFormError("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      setSubmitted(true);
    } catch (err) { setFormError(err instanceof Error ? err.message : "Something went wrong."); } finally { setSending(false); }
  };

  const inp: React.CSSProperties = { width: "100%", padding: "13px 15px", borderRadius: 12, border: `1px solid ${K.line}`, fontSize: 14.5, color: K.ink, background: K.page, outline: "none", boxSizing: "border-box", fontFamily: "var(--font-body,system-ui)" };
  const labelStyle: React.CSSProperties = { display: "block", fontSize: 11.5, fontWeight: 700, color: K.faint, marginBottom: 6, letterSpacing: "0.04em" };

  const btnPrimary: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: 9, padding: "15px 26px", borderRadius: 12, fontSize: 15.5, fontWeight: 800, textDecoration: "none", background: K.green, color: "#fff8f4", border: "none", boxShadow: "0 10px 22px -10px rgba(59,105,51,0.7)" };
  const btnText: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15.5, fontWeight: 800, color: K.ink, textDecoration: "none" };

  const sectionHead = (kicker: string, lead: React.ReactNode, sub?: string, color = K.green) => (
    <div className="reveal" style={{ textAlign: "center", maxWidth: 700, margin: "0 auto", marginBottom: isMobile ? 40 : 60 }}>
      <div style={{ marginBottom: 14 }}><span style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.02em", color }}>{kicker}</span></div>
      <h2 style={{ fontSize: "clamp(2.1rem,4.6vw,3.4rem)", fontWeight: 800, color: K.ink, lineHeight: 1.06, letterSpacing: "-0.035em", margin: 0 }}>{lead}</h2>
      {sub && <p style={{ fontSize: 17, color: K.muted, lineHeight: 1.6, margin: "16px auto 0", maxWidth: 540 }}>{sub}</p>}
    </div>
  );

  /* Mock rows reused in feature-card nested panels */
  const MockRow = ({ left, right, strong = false }: { left: React.ReactNode; right?: React.ReactNode; strong?: boolean }) => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, padding: "9px 12px", background: strong ? K.card : "transparent", borderRadius: 10, boxShadow: strong ? K.shadowSoft : "none", border: strong ? `1px solid ${K.line}` : "1px solid transparent" }}>
      <span style={{ fontSize: 13, fontWeight: strong ? 700 : 500, color: strong ? K.ink : K.muted, display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>{left}</span>{right}
    </div>
  );

  const OUTCOMES: Outcome[] = [
    { icon: IcoSearch, label: "Search", accent: "green", span: true, stat: "80%", statLabel: "search online first", title: "Show up first when locals search", body: "When someone nearby searches for a place to eat, you are the one they find, not your competitor down the street. First page of Google, first pin on the map, first choice for dinner.",
      mock: (<div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2, color: K.faint, fontSize: 12.5 }}><IcoPin /> best bbq near me</div>
        <MockRow strong left={<><span style={{ color: K.terra, display: "inline-flex" }}><IcoStar /></span>Your restaurant</>} right={<Pill tone="green" dot>Ranked #1</Pill>} />
        <MockRow left="Competitor down the street" right={<span style={{ fontSize: 12, color: K.faint }}>page 2</span>} />
      </div>) },
    { icon: IcoTable, label: "Tables", accent: "terra", stat: "$1,600", statLabel: "extra a month", title: "Fill your slow nights", body: "Turn empty Tuesday tables into booked ones. Five extra tables a week at an $80 average is about $1,600 more every month.",
      mock: (<div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <MockRow strong left="Fri · 7:00pm · Party of 4" right={<Pill tone="green" dot>Booked</Pill>} />
        <MockRow strong left="Sat · 6:30pm · Party of 6" right={<Pill tone="green" dot>Booked</Pill>} />
      </div>) },
    { icon: IcoCalendar, label: "Catering", accent: "sage", stat: "5–20×", statLabel: "per booking", title: "Win catering and private events", body: "Private events and catering spend 5 to 20 times more than a table. Two bookings a month at $750 is another $1,500 in your inbox.",
      mock: (<div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <MockRow strong left="Rehearsal dinner · 30 pax" right={<Pill tone="sage" dot>Lead</Pill>} />
        <MockRow left="Est. value" right={<span style={{ fontSize: 12.5, fontWeight: 700, color: K.terraDeep }}>$1,500+</span>} />
      </div>) },
    { icon: IcoHeart, label: "Regulars", accent: "green", span: true, stat: "∞", statLabel: "reasons to return", title: "Turn first-timers into regulars", body: "With your own email list, text list, and loyalty program, you bring your best customers back on your terms instead of hoping they remember you.",
      mock: (<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <div style={{ display: "flex" }}>{[{ i: "TR", c: K.green }, { i: "ML", c: K.terra }, { i: "JP", c: K.sage }, { i: "+9", c: K.ink }].map((a, idx) => (<span key={idx} style={{ width: 34, height: 34, borderRadius: 999, background: a.c, color: "#fff8f4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11.5, fontWeight: 800, marginLeft: idx ? -9 : 0, border: "2px solid #fff" }}>{a.i}</span>))}</div>
        <Pill tone="green" dot>+38% repeat</Pill>
      </div>) },
  ];

  return (
    <div style={{ fontFamily: "var(--font-body,system-ui)", color: K.ink, background: K.page }}>
      <SiteNav />
      <main>

        {/* ── HERO — big pastel rounded panel, split layout ────── */}
        <section style={{ padding: isMobile ? "14px 0 8px" : "22px 0 12px" }}>
          <div style={wrap(isMobile)}>
            <div style={{
              borderRadius: isMobile ? 26 : 36,
              background: `radial-gradient(1000px 520px at 88% 6%, rgba(134,164,150,0.34), transparent 58%), radial-gradient(760px 520px at 4% 2%, rgba(160,185,220,0.22), transparent 55%), radial-gradient(800px 700px at 60% 120%, rgba(252,235,220,0.6), transparent 60%), #eef2ee`,
              padding: isMobile ? "40px 22px 44px" : "clamp(48px,5vw,72px) clamp(32px,4vw,64px)",
              overflow: "hidden",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.02fr 0.98fr", gap: isMobile ? 40 : 56, alignItems: "center" }}>
                {/* Left — copy */}
                <div>
                  <div className="reveal" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.7)", border: `1px solid ${K.line}`, padding: "6px 13px", borderRadius: 999, marginBottom: 22, backdropFilter: "blur(6px)" }}>
                    <span style={{ width: 7, height: 7, borderRadius: 999, background: K.green }} />
                    <span style={{ fontSize: 12.5, fontWeight: 700, color: K.muted }}>Independent restaurants · MS &amp; the Southeast</span>
                  </div>
                  <h1 className="reveal reveal-delay-1" style={{ fontSize: isMobile ? "2.9rem" : "clamp(3.2rem,5.2vw,4.9rem)", fontWeight: 800, lineHeight: 0.98, letterSpacing: "-0.045em", color: K.ink, margin: "0 0 22px" }}>
                    More full tables.<br />
                    More catering.<br />
                    <span style={{ color: K.green }}>More regulars.</span>
                  </h1>
                  <p className="reveal reveal-delay-2" style={{ fontSize: isMobile ? 16.5 : 19, color: K.muted, lineHeight: 1.6, margin: "0 0 30px", maxWidth: 460 }}>
                    Your next customer is already searching. We make sure they find you first, book the table, and come back again. You just cook.
                  </p>
                  <div className="reveal reveal-delay-3" style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
                    <a href="#contact" style={btnPrimary}>Get a free revenue audit <IcoArrow /></a>
                    <a href="#outcomes" style={btnText}>See what you get</a>
                  </div>
                  <div className="reveal reveal-delay-4" style={{ display: "flex", gap: 20, marginTop: 26, flexWrap: "wrap", fontSize: 13.5, color: K.muted }}>
                    {["No setup fees", "No contracts", "Live in ~2 weeks"].map(t => (
                      <span key={t} style={{ display: "flex", alignItems: "center", gap: 7 }}><span style={{ color: K.green, display: "inline-flex" }}><IcoCheck /></span>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Right — product visual + floating chips */}
                <div className="reveal reveal-delay-2" style={{ position: "relative", marginTop: isMobile ? 14 : 0 }}>
                  <div style={{ ...cardBase(22), boxShadow: K.shadow, padding: isMobile ? 16 : 20 }}>
                    {/* search bar */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, background: K.page, borderRadius: 12, border: `1px solid ${K.line}`, padding: "11px 14px", marginBottom: 14 }}>
                      <span style={{ color: K.faint }}><IcoSearch /></span>
                      <span style={{ fontSize: 14.5, color: K.ink }}>restaurants near me</span>
                    </div>
                    {/* listing */}
                    <div style={{ padding: "4px 4px 2px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 6 }}>
                        <div style={{ fontSize: 17, fontWeight: 800, color: K.ink }}>Red River Smokehouse</div>
                        <Pill tone="green" dot>#1 nearby</Pill>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, fontSize: 13, color: K.muted }}>
                        <span style={{ display: "inline-flex", gap: 1, color: K.terra }}>{Array.from({ length: 5 }).map((_, s) => <IcoStar key={s} />)}</span>
                        <strong style={{ color: K.ink }}>4.8</strong> (212) · $$ · BBQ
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
                        {["linear-gradient(135deg,#e8d6c4,#d8b48f)", "linear-gradient(135deg,#dfe8de,#a8c3b0)", "linear-gradient(135deg,#f0ddc8,#e0a875)"].map((g, i) => (<div key={i} style={{ height: 58, borderRadius: 10, background: g }} />))}
                      </div>
                      <div style={{ display: "flex", gap: 8 }}>
                        <span style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 7, padding: "9px 0", borderRadius: 10, background: "rgba(59,105,51,0.1)", color: K.green, fontSize: 13, fontWeight: 700 }}><IcoPin /> Directions</span>
                        <span style={{ flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 7, padding: "9px 0", borderRadius: 10, background: "rgba(223,135,82,0.14)", color: K.terraDeep, fontSize: 13, fontWeight: 700 }}><IcoPhone /> Call</span>
                      </div>
                    </div>
                  </div>
                  {/* floating chip: reservation */}
                  <div style={{ position: "absolute", top: isMobile ? -12 : -20, right: isMobile ? 8 : -18, background: K.card, borderRadius: 14, boxShadow: K.chip, border: `1px solid ${K.line}`, padding: "10px 13px", display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ width: 28, height: 28, borderRadius: 999, background: "rgba(59,105,51,0.12)", color: K.green, display: "flex", alignItems: "center", justifyContent: "center" }}><IcoCheck /></span>
                    <div style={{ textAlign: "left" }}><div style={{ fontSize: 12.5, fontWeight: 800, color: K.ink }}>New reservation</div><div style={{ fontSize: 11, color: K.faint }}>Table for 4 · just now</div></div>
                  </div>
                  {/* floating chip: review */}
                  <div style={{ position: "absolute", bottom: isMobile ? -14 : -20, left: isMobile ? 6 : -22, background: K.card, borderRadius: 14, boxShadow: K.chip, border: `1px solid ${K.line}`, padding: "10px 13px", display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ display: "inline-flex", gap: 1, color: K.terra }}>{Array.from({ length: 5 }).map((_, s) => <IcoStar key={s} />)}</span>
                    <div style={{ textAlign: "left" }}><div style={{ fontSize: 12.5, fontWeight: 800, color: K.ink }}>New 5-star review</div><div style={{ fontSize: 11, color: K.faint }}>2 minutes ago</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LOGO MARQUEE ─────────────────────────────────────── */}
        <section style={{ padding: isMobile ? "34px 0 8px" : "44px 0 8px" }}>
          <div style={inner(isMobile)}>
            <p style={{ textAlign: "center", fontSize: 11.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: K.faint, marginBottom: 18 }}>Trusted by local restaurants across the region</p>
            <div style={{ overflow: "hidden", WebkitMaskImage: "linear-gradient(to right,transparent,rgba(0,0,0,0.8) 12%,rgba(0,0,0,0.8) 88%,transparent)" }}>
              <div className="marquee-track" style={{ gap: 56 }}>
                {[...MARQUEE, ...MARQUEE].map((n, i) => (<span key={i} className="font-display" style={{ fontSize: 17, fontWeight: 600, fontStyle: "italic", color: K.ink, opacity: 0.32, whiteSpace: "nowrap" }}>{n}</span>))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES / OUTCOMES ──────────────────────────────── */}
        <section id="outcomes" style={{ padding: isMobile ? "56px 0" : "92px 0" }}>
          <div style={inner(isMobile)}>
            {sectionHead("What you get", <>Everything you need to{" "}<span style={{ color: K.green }}>fill more tables.</span></>, "Four outcomes, one system, built and managed for you.")}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 18 }}>
              {OUTCOMES.map((o, i) => {
                const Icon = o.icon; const t = toneMap[o.accent];
                return (
                  <div key={o.title} className={`lift reveal reveal-delay-${i}`} style={{ ...cardBase(24), padding: isMobile ? 22 : 28, gridColumn: o.span && !isMobile ? "span 2" : "auto", display: "flex", flexDirection: o.span && !isMobile ? "row" : "column", gap: o.span && !isMobile ? 36 : 22 }}>
                    <div style={{ flex: o.span ? "1 1 0" : "none" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 16 }}>
                        <span style={{ width: 40, height: 40, borderRadius: 12, background: t.chip, color: t.solid, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon /></span>
                        <span style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: K.faint }}>{o.label}</span>
                      </div>
                      <h3 style={{ fontSize: isMobile ? 20 : 22, fontWeight: 800, color: K.ink, letterSpacing: "-0.02em", margin: "0 0 8px", lineHeight: 1.18 }}>{o.title}</h3>
                      <p style={{ fontSize: 14.5, color: K.muted, lineHeight: 1.6, margin: 0 }}>{o.body}</p>
                    </div>
                    <div style={{ flex: o.span ? "1 1 0" : "none", background: K.page, borderRadius: 16, border: `1px solid ${K.line}`, padding: 16, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 12 }}>
                        <span className="font-display" style={{ fontSize: "clamp(2rem,3.4vw,2.7rem)", fontWeight: 800, color: t.solid, letterSpacing: "-0.04em", lineHeight: 1 }}>{o.stat}</span>
                        <span style={{ fontSize: 12.5, color: K.faint, fontWeight: 600 }}>{o.statLabel}</span>
                      </div>
                      {o.mock}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── ROI band ─────────────────────────────────────────── */}
        <section style={{ padding: isMobile ? "56px 0" : "92px 0" }}>
          <div style={inner(isMobile)}>
            {sectionHead("What it's worth", <>About{" "}<span style={{ color: K.terraDeep }}>$3,100 more</span>{" "}in your pocket, monthly.</>, "A conservative picture of what stronger digital capture is worth to a typical small-town restaurant.", K.terraDeep)}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1.1fr", gap: 16, alignItems: "stretch" }}>
              {[
                { label: "More tables filled", big: "$1,600", note: "5 tables/week × $80 × 4 weeks", count: "1600", prefix: "$", tone: "green" as Tone },
                { label: "Catering and events", big: "$1,500", note: "2 bookings/month × $750 avg", count: "1500", prefix: "$", tone: "green" as Tone },
                { label: "In your pocket", big: "~$3,100", note: "every month", count: "3100", prefix: "~$", tone: "terra" as Tone, strong: true },
              ].map(c => (
                <div key={c.label} className="reveal" style={{ ...cardBase(20), padding: isMobile ? "24px 22px" : "30px 28px", background: c.strong ? "rgba(59,105,51,0.06)" : K.card, borderColor: c.strong ? "rgba(59,105,51,0.28)" : K.line }}>
                  <div style={{ marginBottom: 14 }}><Pill tone={c.tone}>{c.label}</Pill></div>
                  <div className="font-display" data-count={c.count} data-prefix={c.prefix} style={{ fontSize: c.strong ? "clamp(2.6rem,5vw,3.6rem)" : "clamp(2.2rem,4vw,3rem)", fontWeight: 800, color: c.strong ? K.terraDeep : K.green, letterSpacing: "-0.035em", lineHeight: 1, marginBottom: 8 }}>{c.big}</div>
                  <div style={{ fontSize: 12.5, color: K.muted }}>{c.note}</div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ ...cardBase(18), padding: isMobile ? "20px 22px" : "22px 28px", marginTop: 16, display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: 12 }}>
              <p style={{ margin: 0, fontSize: 15, color: K.ink, lineHeight: 1.6, maxWidth: 640 }}>Your investment is just <strong style={{ fontWeight: 800 }}>$200–$300/month</strong>, all done for you. One catering booking pays for months of service.</p>
              <span style={{ fontSize: 12, color: K.faint, flexShrink: 0, maxWidth: 220 }}>Illustrative estimates. Results vary by market and execution.</span>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────── */}
        <section style={{ padding: isMobile ? "56px 0" : "92px 0" }}>
          <div style={inner(isMobile)}>
            {sectionHead("What restaurants say", <>Real results,{" "}<span style={{ color: K.green }}>real restaurants.</span></>)}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 18 }}>
              {TESTIMONIALS.map((t, i) => {
                const c = [K.green, K.terra, K.sage][i];
                return (
                  <div key={t.name} className={`lift reveal reveal-delay-${i + 1}`} style={{ ...cardBase(20), padding: 26, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", gap: 3, color: K.terra, marginBottom: 16 }}>{Array.from({ length: 5 }).map((_, s) => <IcoStar key={s} />)}</div>
                    <p style={{ fontSize: 15.5, color: K.ink, lineHeight: 1.6, fontWeight: 500, margin: "0 0 22px", flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 11, paddingTop: 18, borderTop: `1px solid ${K.line}` }}>
                      <span style={{ width: 40, height: 40, borderRadius: 999, background: c, color: "#fff8f4", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14, flexShrink: 0 }}>{t.name.charAt(0)}</span>
                      <div><div style={{ fontWeight: 700, color: K.ink, fontSize: 14 }}>{t.name}</div><div style={{ color: K.muted, fontSize: 13 }}>{t.restaurant} · {t.location}</div></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────── */}
        <section id="how-it-works" style={{ padding: isMobile ? "56px 0" : "92px 0" }}>
          <div style={inner(isMobile)}>
            {sectionHead("How it works", <>Up and running{" "}<span style={{ color: K.green }}>in three steps.</span></>)}
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
        <section id="pricing" style={{ padding: isMobile ? "56px 0" : "92px 0" }}>
          <div style={inner(isMobile)}>
            {sectionHead("Pricing", <>Simple,{" "}<span style={{ color: K.green }}>transparent pricing.</span></>, "No setup fees. No long-term contracts. No surprises. Cancel any time.")}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20, maxWidth: 860, margin: "0 auto" }}>
              <div className="lift reveal" style={{ ...cardBase(22), padding: isMobile ? 28 : 34 }}>
                <Pill tone="sage">Starter</Pill>
                <div style={{ margin: "18px 0 4px" }}><span className="font-display" style={{ fontSize: 52, fontWeight: 800, color: K.ink, letterSpacing: "-0.03em" }}>$200</span><span style={{ fontSize: 16, color: K.muted, marginLeft: 4 }}>/month</span></div>
                <p style={{ fontSize: 14, color: K.muted, margin: "0 0 24px" }}>Get found online</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Professional website", "Domain and hosting", "Google Business Profile", "Local SEO", "Monthly report", "2 content updates / month"].map(item => (<li key={item} style={{ display: "flex", alignItems: "center", gap: 11, fontSize: 14.5, color: K.ink }}><span style={{ width: 20, height: 20, borderRadius: 999, background: "rgba(59,105,51,0.12)", color: K.green, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><IcoCheck /></span>{item}</li>))}
                </ul>
                <a href="#contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 0", borderRadius: 12, fontSize: 15, fontWeight: 800, textDecoration: "none", background: K.card, color: K.ink, border: `1px solid ${K.line}` }}>Get started</a>
              </div>
              <div className="lift reveal reveal-delay-1" style={{ ...cardBase(22), padding: isMobile ? 28 : 34, border: `2px solid ${K.green}`, position: "relative", boxShadow: K.shadow }}>
                <div style={{ position: "absolute", top: -13, left: 34 }}><Pill tone="terra" dot>Most popular</Pill></div>
                <Pill tone="green">Growth</Pill>
                <div style={{ margin: "18px 0 4px" }}><span className="font-display" style={{ fontSize: 52, fontWeight: 800, color: K.ink, letterSpacing: "-0.03em" }}>$300</span><span style={{ fontSize: 16, color: K.muted, marginLeft: 4 }}>/month</span></div>
                <p style={{ fontSize: 14, color: K.muted, margin: "0 0 24px" }}>Full revenue capture system</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Everything in Starter", "Google Ads management", "Keyword targeting", "Call and lead tracking", "Catering landing page", "Unlimited content updates"].map(item => (<li key={item} style={{ display: "flex", alignItems: "center", gap: 11, fontSize: 14.5, color: K.ink }}><span style={{ width: 20, height: 20, borderRadius: 999, background: "rgba(59,105,51,0.12)", color: K.green, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><IcoCheck /></span>{item}</li>))}
                </ul>
                <a href="#contact" style={{ ...btnPrimary, width: "100%", justifyContent: "center", boxSizing: "border-box" }}>Get started <IcoArrow /></a>
              </div>
            </div>
            <p style={{ textAlign: "center", fontSize: 14.5, color: K.muted, marginTop: 26 }}>Not sure which plan fits? <a href="#contact" style={{ color: K.green, fontWeight: 700, textDecoration: "none" }}>Let&apos;s talk.</a> We&apos;ll help you figure it out.</p>
          </div>
        </section>

        {/* ── CTA + CONTACT — big pastel rounded panel ─────────── */}
        <section id="contact" style={{ padding: isMobile ? "24px 0 64px" : "32px 0 96px" }}>
          <div style={wrap(isMobile)}>
            <div style={{ borderRadius: isMobile ? 26 : 36, overflow: "hidden", background: `radial-gradient(760px 380px at 84% -10%, rgba(134,164,150,0.34), transparent 60%), radial-gradient(620px 340px at 2% 112%, rgba(223,135,82,0.16), transparent 60%), #eef2ee`, padding: isMobile ? "40px 22px" : "clamp(48px,5vw,72px) clamp(32px,4vw,64px)" }}>
              <div className="reveal" style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 40px" }}>
                <div style={{ marginBottom: 14 }}><span style={{ fontSize: 13, fontWeight: 800, color: K.terraDeep }}>Get started</span></div>
                <h2 style={{ fontSize: "clamp(2.2rem,4.8vw,3.6rem)", fontWeight: 800, color: K.ink, lineHeight: 1.04, letterSpacing: "-0.035em", margin: 0 }}>
                  Let&apos;s fill your tables.<br /><span style={{ color: K.green }}>Starting with a free audit.</span>
                </h2>
                <p style={{ fontSize: 17, color: K.muted, lineHeight: 1.6, margin: "16px auto 0", maxWidth: 520 }}>We&apos;ll audit your current online presence for free and show you exactly what&apos;s costing you customers. Before we even get on the phone.</p>
              </div>

              <div className="reveal reveal-delay-1" style={{ maxWidth: 620, margin: "0 auto", ...cardBase(24), boxShadow: K.shadow, padding: isMobile ? "24px 20px" : "34px 36px" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "28px 0" }}>
                    <div style={{ width: 58, height: 58, borderRadius: 999, background: "rgba(59,105,51,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", color: K.green }}><svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></div>
                    <h3 style={{ fontSize: 24, fontWeight: 800, color: K.ink, marginBottom: 8, letterSpacing: "-0.015em" }}>We&apos;ll be in touch soon.</h3>
                    <p style={{ fontSize: 15, color: K.muted, lineHeight: 1.6 }}>Expect a call or email within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={submitForm} style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 13 }}>
                      <div><label style={labelStyle}>Your name *</label><input type="text" required value={form.name} onChange={up("name")} placeholder="Jane Smith" style={inp} /></div>
                      <div><label style={labelStyle}>Restaurant name *</label><input type="text" required value={form.business} onChange={up("business")} placeholder="Main Street Diner" style={inp} /></div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 13 }}>
                      <div><label style={labelStyle}>Email *</label><input type="email" required value={form.email} onChange={up("email")} placeholder="you@example.com" style={inp} /></div>
                      <div><label style={labelStyle}>Phone</label><input type="tel" value={form.phone} onChange={up("phone")} placeholder="(601) 555-0100" style={inp} /></div>
                    </div>
                    <div><label style={labelStyle}>About your restaurant</label><textarea rows={3} value={form.message} onChange={up("message")} placeholder="e.g. Family BBQ in Hattiesburg, MS. We rely on word of mouth and want to grow." style={{ ...inp, resize: "none" } as React.CSSProperties} /></div>
                    <input type="text" name="company" value={form.company} onChange={up("company")} tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
                    {formError && <p role="alert" style={{ fontSize: 13, color: "#a3271f", margin: 0 }}>{formError}</p>}
                    <button type="submit" disabled={sending} style={{ ...btnPrimary, justifyContent: "center", cursor: sending ? "default" : "pointer", opacity: sending ? 0.7 : 1, marginTop: 4 }}>{sending ? "Sending…" : <>Get my free revenue audit <IcoArrow /></>}</button>
                    <p style={{ textAlign: "center", fontSize: 12.5, color: K.faint, margin: 0 }}>No spam. No sales pressure. Just a conversation.</p>
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

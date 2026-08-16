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

/* ─── Clean / editorial palette (restrained, light) ────────── */
const L = {
  paper: "#ffffff",
  ink: "#1e3a2f",
  green: "#3b6933",
  terra: "#df8752",
  terraDeep: "#c4713e",
  sage: "#86a496",
  linen: "#fcebdc",
  muted: "rgba(34,26,17,0.58)",
  faint: "rgba(34,26,17,0.42)",
  hair: "rgba(34,26,17,0.12)",
  hairSoft: "rgba(34,26,17,0.08)",
};

/* ─── SVG icons ────────────────────────────────────────────── */
const IcoArrow = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.25}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);
const IcoCheck = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
const IcoSearch = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" />
  </svg>
);
const IcoTable = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h16M4 10l1-4h14l1 4M4 10v2m16-2v2M6 12v6m12-6v6" />
  </svg>
);
const IcoCalendar = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
    <rect x="3" y="5" width="18" height="16" rx="2" /><path strokeLinecap="round" d="M3 9h18M8 3v4m8-4v4" />
  </svg>
);
const IcoHeart = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
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
  { icon: IcoSearch, stat: "80%", statLabel: "of diners search online before choosing where to eat", title: "Show up first when locals search", body: "When someone nearby searches for a place to eat, you are the one they find, not your competitor down the street. First page of Google, first pin on the map, first choice for dinner.", accent: "green" },
  { icon: IcoTable, stat: "$1,600", statLabel: "in extra table bookings a month", title: "Fill your slow nights", body: "Turn empty Tuesday tables into booked ones. Five extra tables a week at an $80 average adds up to about $1,600 more every month.", accent: "terra" },
  { icon: IcoCalendar, stat: "5–20×", statLabel: "more revenue per catering and event booking", title: "Win catering and private events", body: "Private events, catering jobs, and rehearsal dinners spend 5 to 20 times more than a regular table. Two bookings a month at $750 is another $1,500 in your inbox.", accent: "green" },
  { icon: IcoHeart, stat: "∞", statLabel: "reasons for your regulars to come back", title: "Turn first-timers into regulars", body: "With your own email list, text list, and loyalty program, you bring your best customers back on your terms instead of hoping they remember you.", accent: "terra" },
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
const Eyebrow = ({ children, color = L.green }: { children: React.ReactNode; color?: string }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 9, fontSize: 11.5, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color, marginBottom: 22 }}>
    <span style={{ width: 20, height: 1.5, background: color, display: "inline-block" }} />
    {children}
  </div>
);

const wrap = (isMobile: boolean): React.CSSProperties => ({
  maxWidth: 1080, margin: "0 auto", padding: isMobile ? "0 22px" : "0 32px",
});

/* ─── Main component ───────────────────────────────────────── */
export default function HomeClean() {
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
    width: "100%", padding: "12px 0", borderRadius: 0,
    border: "none", borderBottom: `1.5px solid ${L.hair}`, fontSize: 15,
    color: L.ink, background: "transparent", outline: "none", boxSizing: "border-box",
    fontFamily: "var(--font-body,system-ui)", transition: "border-color 0.2s",
  };
  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: 11, fontWeight: 700, color: L.faint,
    marginBottom: 6, letterSpacing: "0.1em", textTransform: "uppercase",
  };

  const sectionHead = (kicker: React.ReactNode, lead: string, accentWord: string, accentColor = L.green) => (
    <div className="reveal" style={{ maxWidth: 680, marginBottom: isMobile ? 44 : 64 }}>
      <Eyebrow>{kicker}</Eyebrow>
      <h2 className="font-display" style={{ fontSize: "clamp(2.1rem,4.4vw,3.4rem)", fontWeight: 700, color: L.ink, lineHeight: 1.08, letterSpacing: "-0.02em", margin: 0 }}>
        {lead}{" "}
        <span style={{ fontStyle: "italic", color: accentColor }}>{accentWord}</span>
      </h2>
    </div>
  );

  return (
    <div style={{ fontFamily: "var(--font-body,system-ui)", backgroundColor: L.paper, color: L.ink }}>

      <SiteNav />

      <main>

        {/* ── HERO — editorial, centered, airy ─────────────────── */}
        <section style={{ background: L.paper, padding: isMobile ? "60px 0 56px" : "104px 0 88px" }}>
          <div style={{ ...wrap(isMobile), textAlign: "center" }}>
            <div className="reveal" style={{ display: "flex", justifyContent: "center" }}>
              <Eyebrow color={L.green}>For independent restaurants · MS &amp; the Southeast</Eyebrow>
            </div>
            <h1 className="reveal reveal-delay-1 font-display" style={{
              fontSize: isMobile ? "2.9rem" : "clamp(3.4rem,6.6vw,5.8rem)",
              fontWeight: 700, lineHeight: 1.0, letterSpacing: "-0.035em",
              color: L.ink, margin: "0 auto 26px", maxWidth: 900,
            }}>
              More full tables. More catering.{" "}
              <span style={{ fontStyle: "italic", color: L.green }}>More regulars.</span>
            </h1>
            <p className="reveal reveal-delay-2" style={{
              fontSize: isMobile ? 17 : 20, color: L.muted, lineHeight: 1.6,
              margin: "0 auto 36px", maxWidth: 560,
            }}>
              Your next customer is already searching. We make sure they find you first, book the table, and come back again. You just cook.
            </p>
            <div className="reveal reveal-delay-3" style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
              <a href="#contact" style={{ background: L.ink, color: "#fff8f4", padding: "15px 30px", borderRadius: 4, fontSize: 15, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 9, textDecoration: "none" }}>
                Get a free revenue audit <IcoArrow />
              </a>
              <a href="#outcomes" style={{ color: L.ink, fontSize: 15, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 7, borderBottom: `1.5px solid ${L.hair}`, paddingBottom: 3 }}>
                See what you get
              </a>
            </div>
          </div>

          {/* Stat strip — hairline separated, no boxes */}
          <div className="reveal reveal-delay-3" style={{ ...wrap(isMobile), marginTop: isMobile ? 52 : 76 }}>
            <div style={{
              display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)",
              borderTop: `1px solid ${L.hair}`, borderBottom: `1px solid ${L.hair}`,
            }}>
              {[
                { big: "~$3,100", label: "in extra revenue a typical restaurant can capture every month online", color: L.terraDeep },
                { big: "80%", label: "of diners search online before picking a place to eat", color: L.green },
                { big: "5–20×", label: "more revenue per catering and event booking", color: L.ink },
              ].map((s, i) => (
                <div key={s.big} style={{
                  padding: isMobile ? "26px 0" : "34px 32px",
                  borderLeft: !isMobile && i > 0 ? `1px solid ${L.hairSoft}` : "none",
                  borderTop: isMobile && i > 0 ? `1px solid ${L.hairSoft}` : "none",
                  textAlign: "center",
                }}>
                  <div className="font-display" style={{ fontSize: "clamp(2.4rem,4vw,3.1rem)", fontWeight: 700, color: s.color, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 10 }}>{s.big}</div>
                  <div style={{ fontSize: 13, color: L.muted, lineHeight: 1.5, maxWidth: 260, margin: "0 auto" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee */}
          <div style={{ ...wrap(isMobile), marginTop: isMobile ? 44 : 60 }}>
            <p style={{ textAlign: "center", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: L.faint, marginBottom: 18 }}>
              Trusted by local restaurants across the region
            </p>
            <div style={{ overflow: "hidden", WebkitMaskImage: "linear-gradient(to right,transparent,rgba(0,0,0,0.8) 12%,rgba(0,0,0,0.8) 88%,transparent)" }}>
              <div className="marquee-track" style={{ gap: 56 }}>
                {[...MARQUEE, ...MARQUEE].map((n, i) => (
                  <span key={i} className="font-display" style={{ fontSize: 16, fontWeight: 600, fontStyle: "italic", color: L.ink, opacity: 0.32, whiteSpace: "nowrap" }}>{n}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── OUTCOMES — editorial index rows ──────────────────── */}
        <section id="outcomes" style={{ background: L.paper, padding: isMobile ? "56px 0" : "96px 0", borderTop: `1px solid ${L.hair}` }}>
          <div style={wrap(isMobile)}>
            {sectionHead("What you get", "Four outcomes.", "One system working for you.")}
            <div style={{ borderTop: `1px solid ${L.hair}` }}>
              {OUTCOMES.map((o, i) => {
                const Icon = o.icon;
                const accent = o.accent === "green" ? L.green : L.terraDeep;
                return (
                  <div key={o.title} className={`reveal reveal-delay-${i}`} style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "80px 200px 1fr",
                    gap: isMobile ? 12 : 40,
                    alignItems: "start",
                    padding: isMobile ? "28px 0" : "38px 0",
                    borderBottom: `1px solid ${L.hair}`,
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ color: accent }}><Icon /></span>
                      {isMobile && <span className="font-display" style={{ fontSize: "2.4rem", fontWeight: 700, color: accent, letterSpacing: "-0.03em", lineHeight: 1 }}>{o.stat}</span>}
                    </div>
                    {!isMobile && (
                      <div>
                        <div className="font-display" style={{ fontSize: "clamp(2.2rem,3.2vw,2.9rem)", fontWeight: 700, color: accent, letterSpacing: "-0.035em", lineHeight: 1, marginBottom: 8 }}>{o.stat}</div>
                        <div style={{ fontSize: 13, color: L.muted, lineHeight: 1.45 }}>{o.statLabel}</div>
                      </div>
                    )}
                    <div>
                      <h3 className="font-display" style={{ fontSize: "clamp(1.3rem,2vw,1.7rem)", fontWeight: 700, color: L.ink, letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 10px" }}>{o.title}</h3>
                      <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0, color: L.muted, maxWidth: 560 }}>{o.body}</p>
                      {isMobile && <div style={{ fontSize: 13, color: L.faint, marginTop: 10 }}>{o.statLabel}</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROOF band — ROI, clean single line ──────────────── */}
        <section style={{ background: L.paper, padding: isMobile ? "56px 0" : "96px 0", borderTop: `1px solid ${L.hair}` }}>
          <div style={wrap(isMobile)}>
            {sectionHead(<>What it&apos;s worth to you</>, "About $3,100 more", "every month.", L.terraDeep)}
            <div className="reveal" style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 44px 1fr 44px 1.1fr",
              gap: isMobile ? 0 : 0, alignItems: "stretch",
              borderTop: `1px solid ${L.hair}`, borderBottom: `1px solid ${L.hair}`,
            }}>
              {[
                { label: "More tables filled", big: "$1,600", note: "5 tables/week × $80 avg × 4 weeks", count: "1600", prefix: "$", color: L.green },
                { op: "+" },
                { label: "Catering and events won", big: "$1,500", note: "2 bookings/month × $750 avg", count: "1500", prefix: "$", color: L.green },
                { op: "=" },
                { label: "In your pocket", big: "~$3,100", note: "every month", count: "3100", prefix: "~$", color: L.terraDeep, strong: true },
              ].map((c, i) =>
                c.op ? (
                  <div key={i} style={{ display: isMobile ? "none" : "flex", alignItems: "center", justifyContent: "center" }}>
                    <span className="font-display" style={{ fontSize: 26, fontWeight: 700, color: L.faint }}>{c.op}</span>
                  </div>
                ) : (
                  <div key={i} style={{
                    padding: isMobile ? "26px 0" : "34px 30px",
                    borderTop: isMobile && i > 0 ? `1px solid ${L.hairSoft}` : "none",
                    background: c.strong ? "rgba(59,105,51,0.05)" : "transparent",
                  }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: L.faint, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>{c.label}</div>
                    <div className="font-display" data-count={c.count} data-prefix={c.prefix} style={{ fontSize: c.strong ? "clamp(2.6rem,5vw,3.8rem)" : "clamp(2.2rem,4vw,3rem)", fontWeight: 700, color: c.color, letterSpacing: "-0.035em", lineHeight: 1, marginBottom: 10 }}>{c.big}</div>
                    <div style={{ fontSize: 12.5, color: L.muted, lineHeight: 1.5 }}>{c.note}</div>
                  </div>
                )
              )}
            </div>
            <p className="reveal" style={{ marginTop: 24, fontSize: 15, color: L.muted, lineHeight: 1.65, maxWidth: 680 }}>
              Your investment is just <strong style={{ color: L.ink, fontWeight: 700 }}>$200–$300/month</strong>, all done for you. One catering booking pays for months of service.
              <span style={{ display: "block", marginTop: 8, fontSize: 12.5, color: L.faint }}>Illustrative estimates. Results vary by market and execution.</span>
            </p>
          </div>
        </section>

        {/* ── TESTIMONIALS — borderless, hairline ──────────────── */}
        <section style={{ background: L.paper, padding: isMobile ? "56px 0" : "96px 0", borderTop: `1px solid ${L.hair}` }}>
          <div style={wrap(isMobile)}>
            {sectionHead("What restaurants say", "Real results.", "Real restaurants.")}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: isMobile ? 0 : 0 }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={t.name} className={`reveal reveal-delay-${i + 1}`} style={{
                  padding: isMobile ? "28px 0" : "0 32px",
                  borderTop: isMobile && i > 0 ? `1px solid ${L.hairSoft}` : "none",
                  borderLeft: !isMobile && i > 0 ? `1px solid ${L.hairSoft}` : "none",
                  display: "flex", flexDirection: "column",
                }}>
                  <span style={{ color: L.terra, fontSize: 15, letterSpacing: 2, marginBottom: 18 }}>★★★★★</span>
                  <p className="font-display" style={{ fontSize: 17, color: L.ink, lineHeight: 1.55, fontWeight: 500, fontStyle: "italic", margin: "0 0 22px", flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <div style={{ fontWeight: 700, color: L.ink, fontSize: 14 }}>{t.name}</div>
                    <div style={{ color: L.muted, fontSize: 13 }}>{t.restaurant} · {t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS — numbered, airy ────────────────────── */}
        <section id="how-it-works" style={{ background: L.paper, padding: isMobile ? "56px 0" : "96px 0", borderTop: `1px solid ${L.hair}` }}>
          <div style={wrap(isMobile)}>
            {sectionHead("How it works", "Your revenue capture system,", "in three steps.")}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: isMobile ? 32 : 44 }}>
              {STEPS.map(({ num, title, body }, i) => (
                <div key={num} className={`reveal reveal-delay-${i + 1}`}>
                  <div className="font-display" style={{ fontSize: "2.4rem", fontWeight: 700, color: L.sage, letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 16 }}>{num}</div>
                  <div style={{ height: 1, background: L.hair, marginBottom: 18 }} />
                  <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: L.ink, margin: "0 0 10px", letterSpacing: "-0.015em", lineHeight: 1.25 }}>{title}</h3>
                  <p style={{ fontSize: 14.5, color: L.muted, lineHeight: 1.7, margin: 0, maxWidth: 300 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING — clean, minimal ─────────────────────────── */}
        <section id="pricing" style={{ background: L.paper, padding: isMobile ? "56px 0" : "96px 0", borderTop: `1px solid ${L.hair}` }}>
          <div style={wrap(isMobile)}>
            {sectionHead("Pricing", "Simple,", "transparent pricing.")}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 0, borderTop: `1px solid ${L.hair}`, borderBottom: `1px solid ${L.hair}` }}>
              {/* Starter */}
              <div className="reveal" style={{ padding: isMobile ? "34px 0" : "44px 40px 44px 0", borderBottom: isMobile ? `1px solid ${L.hairSoft}` : "none" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: L.faint, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>Starter</div>
                <div style={{ marginBottom: 6 }}>
                  <span className="font-display" style={{ fontSize: 52, fontWeight: 700, color: L.ink, letterSpacing: "-0.03em" }}>$200</span>
                  <span style={{ fontSize: 16, color: L.muted, marginLeft: 4 }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: L.muted, margin: "0 0 26px" }}>Get found online</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", display: "flex", flexDirection: "column", gap: 13 }}>
                  {["Professional website", "Domain and hosting", "Google Business Profile", "Local SEO", "Monthly report", "2 content updates / month"].map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 11, fontSize: 14.5, color: L.ink }}>
                      <span style={{ color: L.green, display: "inline-flex" }}><IcoCheck /></span>{item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: L.ink, borderBottom: `1.5px solid ${L.ink}`, paddingBottom: 3, fontSize: 15, fontWeight: 700, textDecoration: "none" }}>Get started <IcoArrow /></a>
              </div>

              {/* Growth */}
              <div className="reveal reveal-delay-1" style={{ padding: isMobile ? "34px 0" : "44px 0 44px 40px", borderLeft: !isMobile ? `1px solid ${L.hair}` : "none", position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: L.green, textTransform: "uppercase", letterSpacing: "0.12em" }}>Growth</div>
                  <span style={{ background: "rgba(223,135,82,0.16)", color: L.terraDeep, fontSize: 10.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "3px 9px", borderRadius: 3 }}>Most popular</span>
                </div>
                <div style={{ marginBottom: 6 }}>
                  <span className="font-display" style={{ fontSize: 52, fontWeight: 700, color: L.ink, letterSpacing: "-0.03em" }}>$300</span>
                  <span style={{ fontSize: 16, color: L.muted, marginLeft: 4 }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: L.muted, margin: "0 0 26px" }}>Full revenue capture system</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", display: "flex", flexDirection: "column", gap: 13 }}>
                  {["Everything in Starter", "Google Ads management", "Keyword targeting", "Call and lead tracking", "Catering landing page", "Unlimited content updates"].map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 11, fontSize: 14.5, color: L.ink }}>
                      <span style={{ color: L.green, display: "inline-flex" }}><IcoCheck /></span>{item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, background: L.green, color: "#fff8f4", borderRadius: 4, padding: "13px 26px", fontSize: 15, fontWeight: 700, textDecoration: "none" }}>Get started <IcoArrow /></a>
              </div>
            </div>
            <p style={{ fontSize: 14.5, color: L.muted, marginTop: 24 }}>
              Not sure which plan fits?{" "}
              <a href="#contact" style={{ color: L.green, fontWeight: 700, textDecoration: "none" }}>Let&apos;s talk.</a> We&apos;ll help you figure it out.
            </p>
          </div>
        </section>

        {/* ── CONTACT — clean, underline inputs ────────────────── */}
        <section id="contact" style={{ background: L.paper, padding: isMobile ? "56px 0 72px" : "96px 0 112px", borderTop: `1px solid ${L.hair}` }}>
          <div style={wrap(isMobile)}>
            <div className="reveal" style={{ marginBottom: isMobile ? 40 : 56, maxWidth: 720 }}>
              <Eyebrow color={L.terraDeep}>Get started</Eyebrow>
              <h2 className="font-display" style={{ fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 700, color: L.ink, lineHeight: 1.04, letterSpacing: "-0.025em", margin: 0 }}>
                Let&apos;s fill your tables.{" "}
                <span style={{ fontStyle: "italic", color: L.terraDeep }}>Starting with a free audit.</span>
              </h2>
              <p style={{ fontSize: 17, color: L.muted, lineHeight: 1.65, marginTop: 18, maxWidth: 540 }}>
                We&apos;ll audit your current online presence for free and show you exactly what&apos;s costing you customers. Before we even get on the phone.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "0.9fr 1.1fr", gap: "clamp(40px,6vw,80px)", alignItems: "start" }}>
              <div className="reveal">
                {[
                  { n: "01", heading: "Free revenue audit", body: "We review your search rankings, Google listing, website, and local competitors before we even get on the phone." },
                  { n: "02", heading: "Live in ~2 weeks", body: "Your website, Google listing, and ads are all live within two weeks. No long drawn-out process." },
                  { n: "03", heading: "No setup fees", body: "One flat monthly fee. No contracts. Cancel any time. We earn your business every single month." },
                ].map(({ n, heading, body }) => (
                  <div key={n} style={{ padding: "20px 0", borderTop: `1px solid ${L.hair}`, display: "grid", gridTemplateColumns: "34px 1fr", gap: 14 }}>
                    <span className="font-display" style={{ fontSize: 15, fontWeight: 700, color: L.terraDeep }}>{n}</span>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: L.ink, marginBottom: 5 }}>{heading}</div>
                      <p style={{ fontSize: 14, color: L.muted, lineHeight: 1.6, margin: 0 }}>{body}</p>
                    </div>
                  </div>
                ))}
                <div style={{ borderTop: `1px solid ${L.hair}`, paddingTop: 18, marginTop: 2, display: "flex", flexWrap: "wrap", gap: 16, fontSize: 13, color: L.muted }}>
                  {["Starting at $200/mo", "Mississippi and the Southeast"].map(t => (
                    <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ color: L.green, display: "inline-flex" }}><IcoCheck /></span>{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="reveal reveal-delay-1">
                {submitted ? (
                  <div style={{ padding: "48px 0", textAlign: "center" }}>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(59,105,51,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", color: L.green }}>
                      <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="font-display" style={{ fontSize: 26, fontWeight: 700, color: L.ink, marginBottom: 8, letterSpacing: "-0.015em" }}>We&apos;ll be in touch soon.</h3>
                    <p style={{ fontSize: 15, color: L.muted, lineHeight: 1.65 }}>Expect a call or email within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={submitForm} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 24 }}>
                      <div>
                        <label style={labelStyle}>Your name *</label>
                        <input type="text" required value={form.name} onChange={up("name")} placeholder="Jane Smith" style={inp} />
                      </div>
                      <div>
                        <label style={labelStyle}>Restaurant name *</label>
                        <input type="text" required value={form.business} onChange={up("business")} placeholder="Main Street Diner" style={inp} />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 24 }}>
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
                      <textarea rows={3} value={form.message} onChange={up("message")} placeholder="e.g. Family BBQ in Hattiesburg, MS. We rely on word of mouth and want to grow." style={{ ...inp, resize: "none" } as React.CSSProperties} />
                    </div>
                    <input type="text" name="company" value={form.company} onChange={up("company")} tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
                    {formError && (
                      <p role="alert" style={{ fontSize: 13, color: "#a3271f", margin: 0 }}>{formError}</p>
                    )}
                    <button type="submit" disabled={sending} style={{ alignSelf: "flex-start", background: L.ink, color: "#fff8f4", padding: "15px 30px", borderRadius: 4, fontSize: 15, fontWeight: 700, border: "none", cursor: sending ? "default" : "pointer", opacity: sending ? 0.7 : 1, fontFamily: "var(--font-body,system-ui)", display: "inline-flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                      {sending ? "Sending…" : <>Get my free revenue audit <IcoArrow /></>}
                    </button>
                    <p style={{ fontSize: 12.5, color: L.faint, margin: 0 }}>No spam. No sales pressure. Just a conversation.</p>
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

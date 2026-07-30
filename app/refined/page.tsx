"use client";
import { useState, useEffect } from "react";
import CompassMark from "../_components/CompassMark";

/* ─── Palette (fresh clean, distinct from the site's other pages) ─── */
const BG      = "#FBFAF7";           // near-white background
const TINT    = "#F5F3EE";           // very-light warm tint sections
const INK     = "#14342A";           // deep forest / primary text
const ACCENT  = "#D4703E";           // terracotta — the single accent
const LINE    = "rgba(20,52,42,0.12)"; // hairline dividers
const MUTE    = "rgba(20,52,42,0.60)"; // muted body text
const FAINT   = "rgba(20,52,42,0.42)"; // faint labels

/* ─── Scroll reveal hook (adds html.js so globals.css gates reveals) ─ */
function useScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─── Mobile detection hook (<768px) ───────────────────────────── */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setIsMobile((prev) => (prev === mq.matches ? prev : mq.matches));
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return isMobile;
}

/* ─── Inline line icons (stroke-only, no emoji) ────────────────── */
type IcoProps = { size?: number; color?: string };
const S = (p: IcoProps) => ({
  width: p.size ?? 24, height: p.size ?? 24, fill: "none",
  viewBox: "0 0 24 24", stroke: p.color ?? "currentColor",
  strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
});
const IcoGlobe  = (p: IcoProps) => <svg {...S(p)}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 4 9 15 15 0 0 1-4 9 15 15 0 0 1-4-9 15 15 0 0 1 4-9z"/></svg>;
const IcoPin    = (p: IcoProps) => <svg {...S(p)}><path d="M12 21s7-6.5 7-11a7 7 0 0 0-14 0c0 4.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>;
const IcoSearch = (p: IcoProps) => <svg {...S(p)}><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>;
const IcoTarget = (p: IcoProps) => <svg {...S(p)}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/></svg>;
const IcoBars   = (p: IcoProps) => <svg {...S(p)}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>;
const IcoGear   = (p: IcoProps) => <svg {...S(p)}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.82 1.17V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 7 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 2.6 15H2.5a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.09A1.65 1.65 0 0 0 11 2.6V2.5a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 17 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 21.4 9v.09a2 2 0 0 1 0 4z"/></svg>;
const IcoArrow  = (p: IcoProps) => <svg {...S({ ...p, size: p.size ?? 15 })} strokeWidth={2}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
const IcoCheck  = (p: IcoProps) => <svg {...S({ ...p, size: p.size ?? 16 })} strokeWidth={2.4}><path d="M5 12l5 5L20 6"/></svg>;
const IcoDash   = (p: IcoProps) => <svg {...S({ ...p, size: p.size ?? 16 })} strokeWidth={2.4}><path d="M6 12h12"/></svg>;

/* ─── Data (real facts, reused verbatim) ───────────────────────── */
type Service = { icon: (p: IcoProps) => React.ReactElement; title: string; body: string };
const SERVICES: Service[] = [
  { icon: IcoGlobe,  title: "Professional Website",   body: "A fast, mobile-first site that makes a new customer choose you the moment they land on it." },
  { icon: IcoPin,    title: "Google Business Profile", body: "The listing that decides whether you appear on Google Maps when locals search for somewhere to eat." },
  { icon: IcoSearch, title: "Local Search (SEO)",      body: "Rank on the first page for the searches that happen in your town, every single day." },
  { icon: IcoTarget, title: "Google Ads",             body: "Managed campaigns that put you in front of people searching for exactly what you serve, right now." },
  { icon: IcoBars,   title: "Lead & Call Tracking",   body: "A plain-English monthly report: calls, reservations, catering inquiries, and website visits." },
  { icon: IcoGear,   title: "Ongoing Maintenance",    body: "Menu updates, seasonal content, and review responses. We handle it so you can run the kitchen." },
];

const TESTIMONIALS = [
  { quote: "We went from invisible to showing up first in Google for our area. Our Friday nights are now fully booked weeks in advance.", name: "Tommy R.", restaurant: "Red River Smokehouse", location: "Natchez, MS" },
  { quote: "I've wasted money on marketing before, so I was skeptical. Within 6 weeks we were getting 30 to 40 extra calls a month.", name: "Maria L.", restaurant: "Delta Blues Café", location: "Greenville, MS" },
  { quote: "They built everything in two weeks and handled every detail. I didn't have to think about it once.", name: "James P.", restaurant: "Porch & Table", location: "Tupelo, MS" },
];

type Row = { label: string; us: string; them: string };
const COMPARE: Row[] = [
  { label: "What it's built for", us: "Getting you found by new local customers", them: "Taking orders from people who already know you" },
  { label: "Pricing model",       us: "One flat monthly fee",                     them: "Monthly fee plus per-order and guest fees" },
  { label: "Contract",            us: "None — cancel anytime",                    them: "Often annual or multi-year" },
  { label: "POS lock-in",         us: "None — keep your register",                them: "Sometimes required" },
  { label: "Managed Google Ads",  us: "Included and run for you",                 them: "Not included, or an upsell" },
  { label: "Who runs it",         us: "Done for you",                             them: "Software you operate yourself" },
];

const STARTER = ["Professional website", "Domain & hosting", "Google Business Profile", "Local SEO", "Monthly report", "2 content updates/month"];
const GROWTH  = ["Everything in Starter", "Google Ads management", "Keyword targeting", "Call & lead tracking", "Catering landing page", "Unlimited content updates"];

/* ─── Main component ───────────────────────────────────────────── */
export default function Refined() {
  useScrollReveal();
  const isMobile = useIsMobile();

  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const up = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const PAD = isMobile ? "72px 20px" : "128px 32px";
  const wrap: React.CSSProperties = { maxWidth: 1080, margin: "0 auto", width: "100%" };

  const eyebrow: React.CSSProperties = {
    fontSize: 12, fontWeight: 600, letterSpacing: "0.16em",
    textTransform: "uppercase", color: ACCENT, marginBottom: 20,
  };
  const h2: React.CSSProperties = {
    fontFamily: "var(--font-body,system-ui)",
    fontSize: isMobile ? "clamp(1.9rem,7vw,2.4rem)" : "clamp(2.2rem,3.6vw,3.1rem)",
    fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.03em",
    color: INK, margin: 0,
  };
  const lead: React.CSSProperties = {
    fontSize: isMobile ? 16 : 18, color: MUTE, lineHeight: 1.7,
    marginTop: 22, maxWidth: 560,
  };
  const inp: React.CSSProperties = {
    width: "100%", padding: "13px 15px", borderRadius: 8,
    border: `1px solid ${LINE}`, fontSize: 15, color: INK,
    background: "#fff", outline: "none", boxSizing: "border-box",
    fontFamily: "var(--font-body,system-ui)", transition: "border-color 0.2s",
  };
  const primaryCTA: React.CSSProperties = {
    display: "inline-flex", alignItems: "center", gap: 9,
    background: ACCENT, color: "#fff", padding: "15px 26px",
    borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: "none",
    letterSpacing: "-0.01em",
  };

  return (
    <div style={{ fontFamily: "var(--font-body,system-ui)", background: BG, color: INK }}>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(251,250,247,0.85)", backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)", borderBottom: `1px solid ${LINE}`,
      }}>
        <div style={{ ...wrap, display: "flex", alignItems: "center", justifyContent: "space-between", height: 66, padding: "0 20px" }}>
          <a href="/refined" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <CompassMark size={28} ring={INK} north={ACCENT} south={INK} hub={BG} />
            <span style={{ fontWeight: 600, fontSize: 16, color: INK, letterSpacing: "-0.02em" }}>Main Street Compass</span>
          </a>
          <a href="#contact" style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: INK, color: BG, padding: "9px 18px",
            borderRadius: 8, fontSize: 13.5, fontWeight: 600, textDecoration: "none",
          }}>
            Get a free audit <IcoArrow size={14} color={BG} />
          </a>
        </div>
      </header>

      <main>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section style={{ padding: isMobile ? "80px 20px 88px" : "140px 32px 132px" }}>
          <div style={wrap}>
            <div className="reveal" style={eyebrow}>Customer acquisition for independent restaurants</div>
            <h1 className="reveal reveal-delay-1" style={{
              fontFamily: "var(--font-body,system-ui)",
              fontSize: isMobile ? "clamp(2.3rem,9vw,3rem)" : "clamp(3rem,6vw,5rem)",
              fontWeight: 600, lineHeight: 1.04, letterSpacing: "-0.04em",
              color: INK, margin: 0, maxWidth: 940,
            }}>
              New customers are searching for dinner tonight. Make sure they{" "}
              <span className="font-display" style={{ fontStyle: "italic", fontWeight: 500, color: ACCENT }}>find you</span>
              {" "}— not the place down the street.
            </h1>
            <p className="reveal reveal-delay-2" style={{ ...lead, maxWidth: 620, fontSize: isMobile ? 16 : 19 }}>
              Ordering apps help you take orders from people who already know you. We help new
              customers find you in the first place — with Google, local search, and managed ads,
              all done for you at flat monthly pricing.
            </p>
            <div className="reveal reveal-delay-3" style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", marginTop: 36 }}>
              <a href="#contact" style={{ ...primaryCTA, padding: "16px 30px", fontSize: 16 }}>
                Get a free revenue audit <IcoArrow color="#fff" />
              </a>
              <a href="#contrast" style={{ fontSize: 15, fontWeight: 600, color: INK, textDecoration: "none", padding: "16px 8px", display: "inline-flex", alignItems: "center", gap: 7 }}>
                See how it works <IcoArrow color={INK} />
              </a>
            </div>
            <div className="reveal reveal-delay-4" style={{ marginTop: 44, display: "flex", flexWrap: "wrap", gap: isMobile ? 12 : 28, fontSize: 13.5, color: FAINT }}>
              {["No setup fees", "No contracts", "Flat monthly pricing"].map((t) => (
                <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
                  <IcoCheck size={15} color={ACCENT} /> {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE CONTRAST ─────────────────────────────────────── */}
        <section id="contrast" style={{ background: TINT, padding: PAD }}>
          <div style={wrap}>
            <div className="reveal" style={{ maxWidth: 640, marginBottom: isMobile ? 44 : 64 }}>
              <div style={eyebrow}>The difference</div>
              <h2 style={h2}>Take orders, or get found?</h2>
              <p style={lead}>
                Most restaurant tech is really an online-ordering platform. That is useful — but it only
                works on people who already found you. Filling tables starts one step earlier.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 16 : 28 }}>
              {[
                { tag: "Ordering apps", head: "Take orders", body: "They help someone who already knows your name place an order faster. The customer, and the demand, were there before the app was.", muted: true },
                { tag: "Main Street Compass", head: "Get found", body: "We make sure the person searching for dinner nearby discovers you first — then choose you. New demand, not just smoother checkout.", muted: false },
              ].map((c) => (
                <div key={c.head} className="reveal" style={{
                  background: c.muted ? "transparent" : "#fff",
                  border: `1px solid ${c.muted ? LINE : "rgba(212,112,62,0.35)"}`,
                  borderRadius: 12, padding: isMobile ? 28 : 40,
                }}>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: c.muted ? FAINT : ACCENT, marginBottom: 18 }}>{c.tag}</div>
                  <h3 style={{ fontSize: isMobile ? 26 : 32, fontWeight: 600, letterSpacing: "-0.03em", color: c.muted ? MUTE : INK, margin: "0 0 14px" }}>{c.head}</h3>
                  <p style={{ fontSize: 15.5, color: MUTE, lineHeight: 1.72, margin: 0 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT WE DO ───────────────────────────────────────── */}
        <section id="services" style={{ padding: PAD }}>
          <div style={wrap}>
            <div className="reveal" style={{ maxWidth: 640, marginBottom: isMobile ? 44 : 64 }}>
              <div style={eyebrow}>What we do</div>
              <h2 style={h2}>Everything that gets you found and chosen.</h2>
              <p style={lead}>Six pieces, one flat fee, managed end to end. No dashboards for you to learn.</p>
            </div>
            <div style={{ borderTop: `1px solid ${LINE}` }}>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 0 }}>
                {SERVICES.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.title} className="reveal" style={{
                      display: "flex", gap: 18, padding: isMobile ? "28px 0" : "34px 40px 34px 0",
                      borderBottom: `1px solid ${LINE}`,
                      borderRight: !isMobile && i % 2 === 0 ? `1px solid ${LINE}` : "none",
                      paddingLeft: !isMobile && i % 2 === 1 ? 40 : 0,
                      alignItems: "flex-start",
                    }}>
                      <span style={{ flexShrink: 0, color: ACCENT, marginTop: 2 }}><Icon size={26} color={ACCENT} /></span>
                      <div>
                        <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em", color: INK, margin: "0 0 8px" }}>{s.title}</h3>
                        <p style={{ fontSize: 14.5, color: MUTE, lineHeight: 1.68, margin: 0 }}>{s.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── TRANSPARENT PRICING + AD SPEND ───────────────────── */}
        <section style={{ background: INK, color: BG, padding: PAD }}>
          <div style={wrap}>
            <div className="reveal" style={{ maxWidth: 640, marginBottom: isMobile ? 40 : 56 }}>
              <div style={{ ...eyebrow, color: "#E9A574" }}>What you actually pay</div>
              <h2 style={{ ...h2, color: BG }}>No per-order fees. No commission. Ever.</h2>
              <p style={{ ...lead, color: "rgba(251,250,247,0.72)" }}>
                Two numbers, both fully in your control. That is the whole bill.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 16 : 24 }}>
              <div className="reveal" style={{ border: "1px solid rgba(251,250,247,0.16)", borderRadius: 12, padding: isMobile ? 26 : 36 }}>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(251,250,247,0.6)", marginBottom: 16 }}>Flat management fee</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <span className="font-display" style={{ fontSize: isMobile ? "2.6rem" : "3.4rem", fontWeight: 600, letterSpacing: "-0.03em", color: BG, lineHeight: 1 }}>$200&ndash;$300</span>
                  <span style={{ fontSize: 15, color: "rgba(251,250,247,0.6)" }}>/month</span>
                </div>
                <p style={{ fontSize: 14.5, color: "rgba(251,250,247,0.7)", lineHeight: 1.7, marginTop: 16, marginBottom: 0 }}>
                  Covers your website, Google profile, local SEO, ad management, reporting, and maintenance. One predictable line item.
                </p>
              </div>
              <div className="reveal reveal-delay-1" style={{ border: "1px solid rgba(251,250,247,0.16)", borderRadius: 12, padding: isMobile ? 26 : 36 }}>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(251,250,247,0.6)", marginBottom: 16 }}>Your Google Ads budget</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <span className="font-display" style={{ fontSize: isMobile ? "2.6rem" : "3.4rem", fontWeight: 600, letterSpacing: "-0.03em", color: BG, lineHeight: 1 }}>You set it</span>
                </div>
                <p style={{ fontSize: 14.5, color: "rgba(251,250,247,0.7)", lineHeight: 1.7, marginTop: 16, marginBottom: 0 }}>
                  Whatever you budget goes straight to Google to buy clicks. We never mark it up and never take a cut of it.
                </p>
              </div>
            </div>

            <div className="reveal" style={{ marginTop: isMobile ? 28 : 36, paddingTop: isMobile ? 28 : 36, borderTop: "1px solid rgba(251,250,247,0.16)" }}>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(251,250,247,0.55)", marginBottom: 18 }}>And never any of this</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 12 : 20 }}>
                {["No per-order fees", "No commission", "No guest fees", "No setup fee", "No contract"].map((t) => (
                  <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 9, fontSize: 15, fontWeight: 500, color: BG }}>
                    <span style={{ display: "inline-flex", width: 22, height: 22, borderRadius: "50%", background: "rgba(212,112,62,0.22)", color: "#E9A574", alignItems: "center", justifyContent: "center" }}>
                      <IcoDash size={13} color="#E9A574" />
                    </span>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPARISON ───────────────────────────────────────── */}
        <section style={{ padding: PAD }}>
          <div style={wrap}>
            <div className="reveal" style={{ maxWidth: 640, marginBottom: isMobile ? 40 : 56 }}>
              <div style={eyebrow}>Side by side</div>
              <h2 style={h2}>How we compare to a typical ordering platform.</h2>
            </div>

            <div className="reveal" style={{ border: `1px solid ${LINE}`, borderRadius: 12, overflow: "hidden" }}>
              {/* Header row */}
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "1.2fr 1fr 1fr", background: TINT, borderBottom: `1px solid ${LINE}` }}>
                {!isMobile && <div style={{ padding: "16px 22px" }} />}
                <div style={{ padding: isMobile ? "14px 16px" : "18px 22px", fontSize: isMobile ? 13 : 15, fontWeight: 600, color: INK, letterSpacing: "-0.01em", borderLeft: `1px solid ${LINE}` }}>Main Street Compass</div>
                <div style={{ padding: isMobile ? "14px 16px" : "18px 22px", fontSize: isMobile ? 13 : 15, fontWeight: 600, color: MUTE, borderLeft: `1px solid ${LINE}` }}>Typical ordering platform</div>
              </div>
              {/* Rows */}
              {COMPARE.map((r, i) => (
                <div key={r.label} style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "1.2fr 1fr 1fr", borderBottom: i < COMPARE.length - 1 ? `1px solid ${LINE}` : "none" }}>
                  {isMobile && <div style={{ gridColumn: "1 / -1", padding: "16px 16px 0", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: ACCENT }}>{r.label}</div>}
                  {!isMobile && <div style={{ padding: "22px", fontSize: 14, fontWeight: 600, color: INK }}>{r.label}</div>}
                  <div style={{ padding: isMobile ? "10px 16px 16px" : "22px", display: "flex", gap: 10, alignItems: "flex-start", borderLeft: isMobile ? "none" : `1px solid ${LINE}` }}>
                    <span style={{ flexShrink: 0, color: ACCENT, marginTop: 1 }}><IcoCheck size={17} color={ACCENT} /></span>
                    <span style={{ fontSize: 14, color: INK, lineHeight: 1.5 }}>{r.us}</span>
                  </div>
                  <div style={{ padding: isMobile ? "10px 16px 16px" : "22px", display: "flex", gap: 10, alignItems: "flex-start", borderLeft: `1px solid ${LINE}` }}>
                    <span style={{ flexShrink: 0, color: FAINT, marginTop: 1 }}><IcoDash size={17} color={FAINT} /></span>
                    <span style={{ fontSize: 14, color: MUTE, lineHeight: 1.5 }}>{r.them}</span>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, color: FAINT, marginTop: 18, lineHeight: 1.6 }}>
              A fair, generic comparison. Ordering platforms are good at what they do — taking orders. We do a different job: filling your dining room with new faces.
            </p>
          </div>
        </section>

        {/* ── WORTH IT (ROI) ───────────────────────────────────── */}
        <section style={{ background: TINT, padding: PAD }}>
          <div style={wrap}>
            <div className="reveal" style={{ maxWidth: 640, marginBottom: isMobile ? 40 : 56 }}>
              <div style={eyebrow}>Is it worth it?</div>
              <h2 style={h2}>A few new customers a week pays for the whole year.</h2>
              <p style={lead}>A conservative illustration for a typical small-town independent restaurant.</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1.15fr", gap: isMobile ? 14 : 20, alignItems: "stretch" }}>
              {[
                { label: "New tables filled", value: "$1,600", sub: "5 tables/week × $80 avg × 4 weeks", accent: false },
                { label: "Catering & events", value: "$1,500", sub: "2 bookings/month × $750 avg", accent: false },
                { label: "Potential monthly uplift", value: "~$3,100", sub: "in new revenue every month", accent: true },
              ].map((c, i) => (
                <div key={c.label} className={`reveal reveal-delay-${i}`} style={{
                  background: c.accent ? INK : "#fff",
                  border: `1px solid ${c.accent ? INK : LINE}`,
                  borderRadius: 12, padding: isMobile ? 26 : 34,
                  display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 180,
                }}>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: c.accent ? "rgba(251,250,247,0.6)" : FAINT, marginBottom: 20 }}>{c.label}</div>
                  <div>
                    <div className="font-display" style={{ fontSize: isMobile ? "2.8rem" : "3.4rem", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1, color: c.accent ? "#E9A574" : INK, marginBottom: 10 }}>{c.value}</div>
                    <div style={{ fontSize: 13, color: c.accent ? "rgba(251,250,247,0.65)" : MUTE, lineHeight: 1.55 }}>{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ marginTop: 24, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, justifyContent: "space-between", background: "#fff", border: `1px solid ${LINE}`, borderRadius: 12, padding: isMobile ? 24 : "28px 34px" }}>
              <p style={{ margin: 0, fontSize: isMobile ? 16 : 18, color: INK, lineHeight: 1.55, maxWidth: 640 }}>
                Against an investment of <strong style={{ fontWeight: 600 }}>$200&ndash;$300/month</strong>. One catering booking can cover the service for months. This is customer acquisition, not a website purchase.
              </p>
              <a href="#contact" style={primaryCTA}>Get a free revenue audit <IcoArrow color="#fff" /></a>
            </div>
            <p style={{ fontSize: 12.5, color: FAINT, marginTop: 16 }}>Illustrative estimates. Actual results vary by market and execution.</p>
          </div>
        </section>

        {/* ── PROOF ────────────────────────────────────────────── */}
        <section style={{ padding: PAD }}>
          <div style={wrap}>
            <div className="reveal" style={{ maxWidth: 640, marginBottom: isMobile ? 40 : 56 }}>
              <div style={eyebrow}>Proof</div>
              <h2 style={h2}>Real restaurants across the South.</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: isMobile ? 16 : 20 }}>
              {TESTIMONIALS.map((t, i) => (
                <figure key={t.name} className={`reveal reveal-delay-${i} lift`} style={{
                  margin: 0, background: BG, border: `1px solid ${LINE}`, borderRadius: 12,
                  padding: isMobile ? 26 : 30, display: "flex", flexDirection: "column",
                }}>
                  <div className="font-display" style={{ fontSize: 44, lineHeight: 0.6, color: ACCENT, marginBottom: 20 }}>&ldquo;</div>
                  <blockquote style={{ margin: 0, fontSize: 15.5, color: INK, lineHeight: 1.62, flex: 1 }}>{t.quote}</blockquote>
                  <figcaption style={{ marginTop: 22, paddingTop: 18, borderTop: `1px solid ${LINE}` }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: INK }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: FAINT, marginTop: 2 }}>{t.restaurant} · {t.location}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="reveal" style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: isMobile ? 12 : 26, fontSize: 14, color: MUTE }}>
              {["Free revenue audit", "Month-to-month", "Cancel anytime"].map((t) => (
                <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <IcoCheck size={15} color={ACCENT} /> {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ──────────────────────────────────────────── */}
        <section id="pricing" style={{ background: TINT, padding: PAD }}>
          <div style={wrap}>
            <div className="reveal" style={{ maxWidth: 640, marginBottom: isMobile ? 40 : 56 }}>
              <div style={eyebrow}>Pricing</div>
              <h2 style={h2}>Everything the big platforms bundle up, done for you — flat.</h2>
              <p style={lead}>No setup fees. No long-term contracts. No per-order cuts. Cancel anytime.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 16 : 24, maxWidth: 820, margin: "0 auto" }}>
              {/* Starter */}
              <div className="reveal lift" style={{ background: "#fff", border: `1px solid ${LINE}`, borderRadius: 14, padding: isMobile ? 30 : 38 }}>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: FAINT, marginBottom: 16 }}>Starter</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 6 }}>
                  <span className="font-display" style={{ fontSize: "3rem", fontWeight: 600, letterSpacing: "-0.03em", color: INK }}>$200</span>
                  <span style={{ fontSize: 15, color: MUTE }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: MUTE, margin: "0 0 26px" }}>Get found online.</p>
                <div style={{ height: 1, background: LINE, marginBottom: 24 }} />
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", display: "flex", flexDirection: "column", gap: 13 }}>
                  {STARTER.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 11, fontSize: 14.5, color: INK }}>
                      <IcoCheck size={16} color={ACCENT} /> {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "block", textAlign: "center", border: `1.5px solid ${INK}`, color: INK, borderRadius: 8, padding: "13px 24px", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>Get started</a>
              </div>
              {/* Growth */}
              <div className="reveal reveal-delay-1 lift" style={{ background: INK, borderRadius: 14, padding: isMobile ? 30 : 38, position: "relative" }}>
                <div style={{ position: "absolute", top: -13, left: 38, background: ACCENT, color: "#fff", fontSize: 11.5, fontWeight: 600, letterSpacing: "0.04em", padding: "5px 14px", borderRadius: 6 }}>Most popular</div>
                <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(251,250,247,0.6)", marginBottom: 16 }}>Growth</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 6 }}>
                  <span className="font-display" style={{ fontSize: "3rem", fontWeight: 600, letterSpacing: "-0.03em", color: BG }}>$300</span>
                  <span style={{ fontSize: 15, color: "rgba(251,250,247,0.6)" }}>/month</span>
                </div>
                <p style={{ fontSize: 14, color: "rgba(251,250,247,0.6)", margin: "0 0 26px" }}>Full customer-acquisition system.</p>
                <div style={{ height: 1, background: "rgba(251,250,247,0.15)", marginBottom: 24 }} />
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", display: "flex", flexDirection: "column", gap: 13 }}>
                  {GROWTH.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 11, fontSize: 14.5, color: BG }}>
                      <IcoCheck size={16} color="#E9A574" /> {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: ACCENT, color: "#fff", borderRadius: 8, padding: "13px 24px", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
                  Get started <IcoArrow color="#fff" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────────────── */}
        <section id="contact" style={{ padding: PAD }}>
          <div style={wrap}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "0.9fr 1.1fr", gap: isMobile ? 40 : 64, alignItems: "start" }}>
              <div className="reveal">
                <div style={eyebrow}>Get started</div>
                <h2 style={h2}>Get a free revenue audit.</h2>
                <p style={lead}>
                  We&apos;ll review your search rankings, Google listing, website, and local competitors,
                  then show you exactly where new customers are going elsewhere — before we ever get on a call.
                </p>
                <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 14, fontSize: 14, color: MUTE }}>
                  {["Free audit", "Month-to-month", "Cancel anytime"].map((t) => (
                    <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                      <IcoCheck size={15} color={ACCENT} /> {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="reveal reveal-delay-1" style={{ background: "#fff", border: `1px solid ${LINE}`, borderRadius: 14, padding: isMobile ? "28px 22px" : "36px 40px" }}>
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "36px 0" }}>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(212,112,62,0.14)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", color: ACCENT }}>
                      <IcoCheck size={26} color={ACCENT} />
                    </div>
                    <h3 style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em", color: INK, margin: "0 0 8px" }}>We&apos;ll be in touch soon.</h3>
                    <p style={{ fontSize: 15, color: MUTE, lineHeight: 1.65, margin: 0 }}>Expect a call or email within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
                      <div>
                        <label htmlFor="rf-name" style={{ display: "block", fontSize: 11.5, fontWeight: 600, color: INK, marginBottom: 6, letterSpacing: "0.04em" }}>YOUR NAME *</label>
                        <input id="rf-name" type="text" required value={form.name} onChange={up("name")} placeholder="Jane Smith" style={inp} />
                      </div>
                      <div>
                        <label htmlFor="rf-business" style={{ display: "block", fontSize: 11.5, fontWeight: 600, color: INK, marginBottom: 6, letterSpacing: "0.04em" }}>RESTAURANT NAME *</label>
                        <input id="rf-business" type="text" required value={form.business} onChange={up("business")} placeholder="Main Street Diner" style={inp} />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
                      <div>
                        <label htmlFor="rf-email" style={{ display: "block", fontSize: 11.5, fontWeight: 600, color: INK, marginBottom: 6, letterSpacing: "0.04em" }}>EMAIL *</label>
                        <input id="rf-email" type="email" required value={form.email} onChange={up("email")} placeholder="you@example.com" style={inp} />
                      </div>
                      <div>
                        <label htmlFor="rf-phone" style={{ display: "block", fontSize: 11.5, fontWeight: 600, color: INK, marginBottom: 6, letterSpacing: "0.04em" }}>PHONE</label>
                        <input id="rf-phone" type="tel" value={form.phone} onChange={up("phone")} placeholder="(601) 555-0100" style={inp} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="rf-message" style={{ display: "block", fontSize: 11.5, fontWeight: 600, color: INK, marginBottom: 6, letterSpacing: "0.04em" }}>ABOUT YOUR RESTAURANT</label>
                      <textarea id="rf-message" rows={4} value={form.message} onChange={up("message")} placeholder="e.g. Family BBQ in Hattiesburg, MS — rely on word of mouth and want to grow..." style={{ ...inp, resize: "none" } as React.CSSProperties} />
                    </div>
                    <button type="submit" style={{ ...primaryCTA, justifyContent: "center", border: "none", cursor: "pointer", fontFamily: "var(--font-body,system-ui)", padding: "15px 24px" }}>
                      Get my free revenue audit <IcoArrow color="#fff" />
                    </button>
                    <p style={{ textAlign: "center", fontSize: 12.5, color: FAINT, margin: 0 }}>No per-order fees. No contracts. Just a conversation.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer style={{ borderTop: `1px solid ${LINE}`, padding: "28px 20px" }}>
        <div style={{ ...wrap, display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", justifyContent: "space-between", gap: isMobile ? 10 : 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <CompassMark size={26} ring={INK} north={ACCENT} south={INK} hub={BG} />
            <span style={{ fontWeight: 600, color: INK, fontSize: 15, letterSpacing: "-0.02em" }}>Main Street Compass</span>
          </div>
          <p style={{ fontSize: 12.5, color: FAINT, margin: 0, textAlign: isMobile ? "center" : "left" }}>
            © 2026 Main Street Compass · Serving Mississippi &amp; the Southeast
          </p>
        </div>
      </footer>
    </div>
  );
}

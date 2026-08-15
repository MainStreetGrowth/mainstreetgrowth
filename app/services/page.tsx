import type { ReactNode } from "react";
import SiteNav from "../_components/SiteNav";
import SiteFooter from "../_components/SiteFooter";
import { theme as T } from "../_lib/theme";

export const metadata = {
  title: "Services | Main Street Compass",
  description:
    "Everything that gets your restaurant found and chosen — done for you. Professional website, Google Business Profile, local SEO, managed Google Ads, call tracking, and monthly reporting for small-town restaurants.",
};

/* ─── Stroke-only line icons (no emoji) ─────────────────────── */
const IcoArrow = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);
const IcoCheck = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
const IcoGlobe = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z" />
  </svg>
);
const IcoPin = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);
const IcoSearch = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path strokeLinecap="round" d="M21 21l-4.3-4.3M8.5 11h5M11 8.5v5" />
  </svg>
);
const IcoTarget = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
const IcoChart = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M7 20v-6m5 6V8m5 12v-9" />
  </svg>
);
const IcoWrench = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 6.5a3.5 3.5 0 00-4.7 4.2l-5.4 5.4a1.8 1.8 0 002.5 2.5l5.4-5.4a3.5 3.5 0 004.2-4.7l-2.3 2.3-1.9-.4-.4-1.9 2.3-2.3z" />
  </svg>
);

/* ─── Reusable header pieces ────────────────────────────────── */
function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  const c = dark ? T.sage : T.green;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
      <span style={{ width: 22, height: 2, background: c, display: "inline-block", flexShrink: 0 }} />
      <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: c }}>
        {children}
      </span>
    </div>
  );
}

function Heading({ lead, accent, dark = false }: { lead: string; accent: string; dark?: boolean }) {
  return (
    <h2
      style={{
        fontWeight: 800,
        fontSize: "clamp(2rem,4.5vw,3.4rem)",
        letterSpacing: "-0.03em",
        lineHeight: 1.04,
        color: dark ? T.onInk : T.ink,
        margin: 0,
      }}
    >
      {lead}{" "}
      <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: dark ? T.sage : T.green }}>
        {accent}
      </span>
    </h2>
  );
}

/* ─── The six services ──────────────────────────────────────── */
const SERVICES: { icon: ReactNode; name: string; what: string; why: string; note?: string }[] = [
  {
    icon: <IcoGlobe />,
    name: "Professional Website",
    what: "A fast, mobile-first site — hosted and maintained for you.",
    why: "Most of your customers meet you on a phone first. We build a site that loads fast, looks the part, and makes it effortless to see your menu, book a table, or place a catering request. You never touch hosting, updates, or security — it just works.",
  },
  {
    icon: <IcoPin />,
    name: "Google Business Profile",
    what: "The #1 place locals find restaurants — set up and optimized.",
    why: "When someone nearby searches for a place to eat, your Google profile is what they see first. We claim it, fill it out completely, keep your hours and photos current, and help you stay on top of reviews so you look open, active, and worth a visit.",
  },
  {
    icon: <IcoSearch />,
    name: "Local Search (SEO)",
    what: "Rank at the top when people nearby search for somewhere to eat.",
    why: "Showing up on the first page for “best BBQ near me” is the difference between a full dining room and an empty one. We tune your site and listings around the terms real diners in your town actually type, so you show up before the competition down the street.",
  },
  {
    icon: <IcoTarget />,
    name: "Managed Google Ads",
    what: "Reach people searching for a meal right now — we run the whole campaign.",
    why: "Ads put you in front of hungry customers at the exact moment they are deciding where to go. We build, run, and tune the campaigns so the money goes to searches that turn into visits, not wasted clicks.",
    note: "Your ad budget is separate and stays yours — it goes straight to Google and we never mark it up.",
  },
  {
    icon: <IcoChart />,
    name: "Lead & Call Tracking + Monthly Reporting",
    what: "See calls, reservations, catering inquiries, and visits in one plain report.",
    why: "No jargon, no dashboards to decode. Every month you get a simple report showing where new customers came from and what it added up to. You always know exactly what your marketing is doing for you.",
  },
  {
    icon: <IcoWrench />,
    name: "Ongoing Maintenance",
    what: "Menu updates, seasonal content, and review responses — handled.",
    why: "Menus change, seasons turn, reviews come in. We keep everything current so your online presence never goes stale. You stay focused on the food and the room; we keep the rest running.",
  },
];

const STEPS = [
  { num: "01", title: "We audit your funnel", body: "We map exactly where new customers are slipping away before we build anything." },
  { num: "02", title: "We build your capture system", body: "Website, Google profile, local SEO, and ads — all live within about two weeks." },
  { num: "03", title: "You see results every month", body: "A clear monthly report: calls, visits, reservations, and leads. No jargon." },
];

const SECTION = { maxWidth: 1160, margin: "0 auto" };

export default function ServicesPage() {
  return (
    <>
      <SiteNav />
      <main style={{ fontFamily: "var(--font-body,system-ui)" }}>

        {/* ── HERO — forest ─────────────────────────────────── */}
        <section className="grain" style={{ background: T.ink, padding: "clamp(72px,11vw,120px) 24px clamp(64px,9vw,104px)" }}>
          <div style={{ ...SECTION, maxWidth: 900 }}>
            <div className="reveal">
              <Eyebrow dark>What we do</Eyebrow>
            </div>
            <h1
              className="reveal reveal-delay-1"
              style={{
                fontSize: "clamp(2.6rem,6vw,4.6rem)",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-0.04em",
                color: T.onInk,
                margin: "0 0 24px",
              }}
            >
              Everything that gets you found and chosen —{" "}
              <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: T.sage }}>
                done for you.
              </span>
            </h1>
            <p
              className="reveal reveal-delay-2"
              style={{ fontSize: 19, color: T.onInkMuted, lineHeight: 1.65, margin: "0 0 32px", maxWidth: 560 }}
            >
              We handle the whole system that brings new local customers through your door — the website, the
              Google listing, the search rankings, the ads, and the reporting. One flat monthly fee. You just cook.
            </p>
            <div className="reveal reveal-delay-3" style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="/contact"
                style={{
                  background: T.onInk, color: T.ink, padding: "16px 30px", borderRadius: 4,
                  fontSize: 16, fontWeight: 800, textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: 9,
                }}
              >
                Get a free revenue audit <IcoArrow />
              </a>
              <a
                href="/pricing"
                style={{
                  color: T.onInk, fontSize: 15, fontWeight: 700, textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: 7,
                  borderBottom: "2px solid rgba(255,248,244,0.3)", paddingBottom: 3,
                }}
              >
                See pricing
              </a>
            </div>
            <div
              className="reveal reveal-delay-4"
              style={{ display: "flex", gap: 18, marginTop: 28, flexWrap: "wrap", fontSize: 13, color: T.onInkMuted }}
            >
              {["No setup fees", "No contracts", "Live in ~2 weeks"].map((t) => (
                <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: T.sage, display: "inline-flex" }}><IcoCheck /></span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE SIX SERVICES — ivory ──────────────────────── */}
        <section style={{ background: T.cream, padding: "clamp(64px,10vw,110px) 24px" }}>
          <div style={SECTION}>
            <div className="reveal" style={{ maxWidth: 680, marginBottom: "clamp(40px,6vw,60px)" }}>
              <Eyebrow>The system</Eyebrow>
              <Heading lead="Six services." accent="One system working for you." />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {SERVICES.map((s, i) => (
                <div
                  key={s.name}
                  className={`lift reveal reveal-delay-${(i % 3) + 1}`}
                  style={{
                    background: "#FFFFFF",
                    borderRadius: 8,
                    border: "1px solid rgba(34,26,17,0.1)",
                    padding: "30px 30px 32px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: 48, height: 48, borderRadius: 10, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: "rgba(59,105,51,0.1)", color: T.green, marginBottom: 20,
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: T.ink, letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 8px" }}>
                    {s.name}
                  </h3>
                  <p style={{ fontSize: 14, fontWeight: 700, color: T.green, lineHeight: 1.5, margin: "0 0 14px" }}>
                    {s.what}
                  </p>
                  <p style={{ fontSize: 14.5, color: T.muted, lineHeight: 1.65, margin: 0 }}>{s.why}</p>
                  {s.note && (
                    <p
                      style={{
                        fontSize: 13, color: T.terracottaDeep, fontWeight: 700, lineHeight: 1.55,
                        margin: "16px 0 0", padding: "12px 14px",
                        background: "rgba(223,135,82,0.1)", borderRadius: 6,
                        borderLeft: `2px solid ${T.terracotta}`,
                      }}
                    >
                      {s.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS — linen ──────────────────────────── */}
        <section style={{ background: T.linen, padding: "clamp(64px,10vw,110px) 24px" }}>
          <div style={SECTION}>
            <div className="reveal" style={{ maxWidth: 680, marginBottom: "clamp(40px,6vw,56px)" }}>
              <Eyebrow>How it works</Eyebrow>
              <Heading lead="Up and running" accent="in three steps." />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
              {STEPS.map(({ num, title, body }, i) => (
                <div
                  key={num}
                  className={`reveal reveal-delay-${i + 1}`}
                  style={{
                    background: T.cream, borderRadius: 8, border: "1px solid rgba(34,26,17,0.1)",
                    padding: "30px 30px 34px",
                  }}
                >
                  <div className="font-display" style={{ fontSize: 34, fontWeight: 800, color: T.terracotta, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 16 }}>
                    {num}
                  </div>
                  <h3 style={{ fontSize: 19, fontWeight: 800, color: T.ink, letterSpacing: "-0.015em", margin: "0 0 8px" }}>{title}</h3>
                  <p style={{ fontSize: 14.5, color: T.muted, lineHeight: 1.65, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ACQUISITION vs ORDERING — ivory ───────────────── */}
        <section style={{ background: T.cream, padding: "clamp(64px,10vw,110px) 24px" }}>
          <div style={SECTION}>
            <div className="reveal" style={{ maxWidth: 680, marginBottom: "clamp(36px,5vw,48px)" }}>
              <Eyebrow>Why it matters</Eyebrow>
              <Heading lead="Ordering apps take orders." accent="We bring you customers." />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              <div
                className="reveal"
                style={{ background: "#FFFFFF", borderRadius: 8, border: "1px solid rgba(34,26,17,0.1)", padding: "32px 32px 34px" }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.muted, marginBottom: 14 }}>
                  Ordering platforms
                </div>
                <p style={{ fontSize: 16, color: T.ink, lineHeight: 1.65, margin: 0 }}>
                  They help you take orders from people who <strong>already know you</strong> — then stack per-order
                  fees, commissions, and guest charges on top. Useful once someone has found you, but they do nothing
                  to bring a new face through your door.
                </p>
              </div>
              <div
                className="reveal reveal-delay-1"
                style={{ background: T.ink, borderRadius: 8, border: "1px solid rgba(255,255,255,0.12)", padding: "32px 32px 34px" }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.sage, marginBottom: 14 }}>
                  Main Street Compass
                </div>
                <p style={{ fontSize: 16, color: T.onInk, lineHeight: 1.65, margin: 0 }}>
                  We are built for <strong style={{ color: T.sage }}>acquisition</strong> — getting new local customers to
                  find you, choose you, and walk in. One flat monthly fee, no per-order cut, no commission. When you grow,
                  we don&apos;t take a bigger slice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA — forest ────────────────────────────── */}
        <section className="grain" style={{ background: T.ink, padding: "clamp(64px,10vw,110px) 24px" }}>
          <div style={{ ...SECTION, maxWidth: 820 }}>
            <div className="reveal">
              <Eyebrow dark>Get started</Eyebrow>
              <Heading dark lead="Let’s fill your tables." accent="Starting with a free audit." />
              <p style={{ fontSize: 18, color: T.onInkMuted, lineHeight: 1.7, margin: "20px 0 32px", maxWidth: 560 }}>
                We&apos;ll review your search rankings, Google listing, website, and local competitors for free — and show
                you exactly what&apos;s costing you customers. No pressure, just a clear picture.
              </p>
              <a
                href="/contact"
                style={{
                  background: T.onInk, color: T.ink, padding: "16px 30px", borderRadius: 4,
                  fontSize: 16, fontWeight: 800, textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: 9,
                }}
              >
                Get my free revenue audit <IcoArrow />
              </a>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}

import type { ReactNode } from "react";
import KukieShell from "../_components/KukieShell";

export const metadata = {
  title: "Services | Main Street Compass",
  description:
    "Everything that gets your restaurant found and chosen, done for you. Professional website, Google Business Profile, local SEO, managed Google Ads, call tracking, and monthly reporting for small-town restaurants.",
};

/* ─── Stroke-only line icons (no emoji) ─────────────────────── */
const IcoArrow = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);
const IcoCheck = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
const IcoGlobe = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z" />
  </svg>
);
const IcoPin = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);
const IcoSearch = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path strokeLinecap="round" d="M21 21l-4.3-4.3M8.5 11h5M11 8.5v5" />
  </svg>
);
const IcoTarget = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
const IcoChart = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M7 20v-6m5 6V8m5 12v-9" />
  </svg>
);
const IcoWrench = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 6.5a3.5 3.5 0 00-4.7 4.2l-5.4 5.4a1.8 1.8 0 002.5 2.5l5.4-5.4a3.5 3.5 0 004.2-4.7l-2.3 2.3-1.9-.4-.4-1.9 2.3-2.3z" />
  </svg>
);

/* ─── The six services ──────────────────────────────────────── */
const SERVICES: {
  icon: ReactNode;
  chipBg: string;
  chipFg: string;
  name: string;
  what: string;
  why: string;
  note?: string;
}[] = [
  {
    icon: <IcoGlobe />,
    chipBg: "var(--p-blue-bg)",
    chipFg: "var(--accent)",
    name: "Professional Website",
    what: "A fast, mobile-first site, hosted and maintained for you.",
    why: "Most of your customers meet you on a phone first. We build a site that loads fast, looks the part, and makes it effortless to see your menu, book a table, or place a catering request. You never touch hosting, updates, or security. It just works.",
  },
  {
    icon: <IcoPin />,
    chipBg: "var(--p-green-bg)",
    chipFg: "var(--p-green-fg)",
    name: "Google Business Profile",
    what: "The #1 place locals find restaurants, set up and optimized.",
    why: "When someone nearby searches for a place to eat, your Google profile is what they see first. We claim it, fill it out completely, keep your hours and photos current, and help you stay on top of reviews so you look open, active, and worth a visit.",
  },
  {
    icon: <IcoSearch />,
    chipBg: "var(--p-purple-bg)",
    chipFg: "var(--p-purple-fg)",
    name: "Local Search (SEO)",
    what: "Rank at the top when people nearby search for somewhere to eat.",
    why: "Showing up on the first page for “best BBQ near me” is the difference between a full dining room and an empty one. We tune your site and listings around the terms real diners in your town actually type, so you show up before the competition down the street.",
  },
  {
    icon: <IcoTarget />,
    chipBg: "var(--p-amber-bg)",
    chipFg: "var(--p-amber-fg)",
    name: "Managed Google Ads",
    what: "Reach people searching for a meal right now. We run the whole campaign.",
    why: "Ads put you in front of hungry customers at the exact moment they are deciding where to go. We build, run, and tune the campaigns so the money goes to searches that turn into visits, not wasted clicks.",
    note: "Your ad budget is separate and stays yours. It goes straight to Google, and we never mark it up.",
  },
  {
    icon: <IcoChart />,
    chipBg: "var(--p-pink-bg)",
    chipFg: "var(--p-pink-fg)",
    name: "Lead & Call Tracking + Monthly Reporting",
    what: "See calls, reservations, catering inquiries, and visits in one plain report.",
    why: "No jargon, no dashboards to decode. Every month you get a simple report showing where new customers came from and what it added up to. You always know exactly what your marketing is doing for you.",
  },
  {
    icon: <IcoWrench />,
    chipBg: "var(--p-blue-bg)",
    chipFg: "var(--accent)",
    name: "Ongoing Maintenance",
    what: "Menu updates, seasonal content, and review responses, all handled.",
    why: "Menus change, seasons turn, reviews come in. We keep everything current so your online presence never goes stale. You stay focused on the food and the room; we keep the rest running.",
  },
];

const STEPS = [
  { num: "01", title: "We audit your funnel", body: "We map exactly where new customers are slipping away before we build anything." },
  { num: "02", title: "We build your capture system", body: "Website, Google profile, local SEO, and ads, all live within about two weeks." },
  { num: "03", title: "You see results every month", body: "A clear monthly report: calls, visits, reservations, and leads. No jargon." },
];

export default function ServicesPage() {
  return (
    <KukieShell>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-panel rv" style={{ textAlign: "center" }}>
            <span className="eyebrow">WHAT WE DO</span>
            <h1 style={{ margin: "14px auto 0", maxWidth: 900 }}>
              Everything that gets you found and chosen, <span className="accent">done for you.</span>
            </h1>
            <p className="sub" style={{ margin: "22px auto 30px", maxWidth: 620 }}>
              We handle the whole system that brings new local customers through your door: the website, the
              Google listing, the search rankings, the ads, and the reporting. One flat monthly fee. You just cook.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <a className="btn btn-primary" href="/contact">Get a free revenue audit <IcoArrow /></a>
              <a className="btn-text" href="/pricing">See pricing</a>
            </div>
            <div className="trust" style={{ justifyContent: "center" }}>
              {["No setup fees", "No contracts", "Live in ~2 weeks"].map((t) => (
                <span key={t}><span className="ck"><IcoCheck /></span>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="wash">

        {/* ── THE SIX SERVICES ─────────────────────────────── */}
        <section className="block">
          <div className="inner">
            <div className="sec-head rv">
              <span className="eyebrow">THE SYSTEM</span>
              <h2>Six services. <span className="accent">One system working for you.</span></h2>
            </div>
            <div className="feat-grid">
              {SERVICES.map((s) => (
                <div key={s.name} className="card feat rv">
                  <div className="side">
                    <div className="chead">
                      <span className="chip" style={{ background: s.chipBg, color: s.chipFg }}>{s.icon}</span>
                    </div>
                    <h3>{s.name}</h3>
                    <p style={{ fontWeight: 700, color: "var(--accent)", margin: "0 0 10px" }}>{s.what}</p>
                    <p>{s.why}</p>
                    {s.note && (
                      <p
                        style={{
                          fontSize: 13, fontWeight: 700, lineHeight: 1.55, margin: "16px 0 0",
                          padding: "12px 14px", borderRadius: 10,
                          background: "var(--p-amber-bg)", color: "var(--p-amber-fg)",
                          borderLeft: "2px solid var(--p-amber-fg)",
                        }}
                      >
                        {s.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS — dark band ──────────────────────── */}
        <section className="block dark">
          <div className="inner">
            <div className="sec-head rv">
              <span className="eyebrow">HOW IT WORKS</span>
              <h2>Up and running <span className="accent">in three steps.</span></h2>
            </div>
            <div className="three">
              {STEPS.map(({ num, title, body }) => (
                <div key={num} className="card step rv">
                  <span className="n">{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ACQUISITION vs ORDERING ───────────────────────── */}
        <section className="block">
          <div className="inner">
            <div className="sec-head rv">
              <span className="eyebrow">WHY IT MATTERS</span>
              <h2>Ordering apps take orders. <span className="accent">We bring you customers.</span></h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
              <div className="card rv" style={{ padding: "32px 32px 34px" }}>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--faint)", marginBottom: 14 }}>
                  Ordering platforms
                </div>
                <p style={{ fontSize: 16, color: "var(--body)", lineHeight: 1.65, margin: 0 }}>
                  They help you take orders from people who <strong style={{ color: "var(--ink)" }}>already know you</strong>, then stack per-order
                  fees, commissions, and guest charges on top. Useful once someone has found you, but they do nothing
                  to bring a new face through your door.
                </p>
              </div>
              <div className="card rv" style={{ padding: "32px 32px 34px", background: "var(--win-bg)", borderColor: "var(--accent)" }}>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 14 }}>
                  Main Street Compass
                </div>
                <p style={{ fontSize: 16, color: "var(--ink)", lineHeight: 1.65, margin: 0 }}>
                  We are built for <strong style={{ color: "var(--accent)" }}>acquisition</strong>: getting new local customers to
                  find you, choose you, and walk in. One flat monthly fee, no per-order cut, no commission. When you grow,
                  we don&apos;t take a bigger slice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────── */}
        <section className="block" style={{ paddingTop: 12 }}>
          <div className="wrap">
            <div className="cta-panel rv">
              <span className="eyebrow">GET STARTED</span>
              <h2>Let&rsquo;s fill your tables. <span className="accent">Starting with a free audit.</span></h2>
              <p>
                We&apos;ll review your search rankings, Google listing, website, and local competitors for free, and show
                you exactly what&apos;s costing you customers. No pressure, just a clear picture.
              </p>
              <a className="btn btn-primary" href="/contact" style={{ fontSize: 16, padding: "16px 30px" }}>
                Get my free revenue audit <IcoArrow />
              </a>
            </div>
          </div>
        </section>

      </div>
    </KukieShell>
  );
}

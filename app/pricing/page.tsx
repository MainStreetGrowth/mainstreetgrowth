import type { ReactNode } from "react";
import SiteNav from "../_components/SiteNav";
import SiteFooter from "../_components/SiteFooter";
import { theme as T } from "../_lib/theme";

export const metadata = {
  title: "Pricing | Main Street Compass",
  description:
    "Simple, transparent pricing for restaurant marketing. A flat $200–$300/month management fee — no setup fees, no contracts, no per-order fees, no commission, no guest fees. Keep your POS.",
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
const IcoNo = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M6.5 6.5l11 11" />
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

const NO_FEES = [
  "No per-order fees",
  "No commission",
  "No guest fees",
  "No setup fee",
  "No contract",
];

const STARTER = ["Professional website", "Domain & hosting", "Google Business Profile", "Local SEO", "Monthly report", "2 content updates/month"];
const GROWTH = ["Everything in Starter", "Google Ads management", "Keyword targeting", "Call & lead tracking", "Catering landing page", "Unlimited content updates"];

const COMPARE: { label: string; us: string; them: string }[] = [
  { label: "What you pay", us: "One flat monthly fee", them: "Monthly fee + per-order + guest fees" },
  { label: "Commitment", us: "No contract — cancel any time", them: "Often locked into an annual contract" },
  { label: "Your POS", us: "Keep the system you already use", them: "Push you onto their platform" },
  { label: "What it’s built to do", us: "Get you found by new customers", them: "Help you take orders" },
];

const FAQ: { q: string; a: string }[] = [
  { q: "Are there setup fees?", a: "None. You pay the flat monthly fee and nothing else to get started. We build your website, listings, and campaigns as part of the service." },
  { q: "Am I locked into a contract?", a: "No. Everything is month to month. We earn your business every single month, and you can cancel any time." },
  { q: "Is the ad budget included?", a: "No — and that is on purpose. Your Google Ads budget is separate, you set it, and it goes straight to Google. We never mark it up or take a cut of it." },
  { q: "Can I cancel?", a: "Yes, any time, no penalty. Give us a heads-up and we will wrap things up cleanly." },
];

const SECTION = { maxWidth: 1160, margin: "0 auto" };

export default function PricingPage() {
  return (
    <>
      <SiteNav />
      <main style={{ fontFamily: "var(--font-body,system-ui)" }}>

        {/* ── HERO — forest ─────────────────────────────────── */}
        <section className="grain" style={{ background: T.ink, padding: "clamp(72px,11vw,120px) 24px clamp(64px,9vw,104px)" }}>
          <div style={{ ...SECTION, maxWidth: 900 }}>
            <div className="reveal">
              <Eyebrow dark>Pricing</Eyebrow>
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
              Simple,{" "}
              <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: T.sage }}>
                transparent pricing.
              </span>
            </h1>
            <p
              className="reveal reveal-delay-2"
              style={{ fontSize: 19, color: T.onInkMuted, lineHeight: 1.65, margin: "0 0 32px", maxWidth: 560 }}
            >
              One flat monthly fee, everything done for you. No setup fees, no contracts, and never a cut of your
              sales. You always know exactly what you pay.
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
                href="/services"
                style={{
                  color: T.onInk, fontSize: 15, fontWeight: 700, textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: 7,
                  borderBottom: "2px solid rgba(255,248,244,0.3)", paddingBottom: 3,
                }}
              >
                See what&apos;s included
              </a>
            </div>
          </div>
        </section>

        {/* ── WHAT YOU ACTUALLY PAY — ivory ─────────────────── */}
        <section style={{ background: T.cream, padding: "clamp(64px,10vw,110px) 24px" }}>
          <div style={SECTION}>
            <div className="reveal" style={{ maxWidth: 680, marginBottom: "clamp(36px,5vw,48px)" }}>
              <Eyebrow>What you actually pay</Eyebrow>
              <Heading lead="A flat fee —" accent="and your own ad budget." />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 28 }}>
              <div
                className="reveal"
                style={{ background: "#FFFFFF", borderRadius: 8, border: "1px solid rgba(34,26,17,0.1)", padding: "30px 32px 34px" }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.green, marginBottom: 14 }}>
                  Your management fee
                </div>
                <div style={{ marginBottom: 12 }}>
                  <span className="font-display" style={{ fontSize: 48, fontWeight: 800, color: T.ink, letterSpacing: "-0.04em" }}>$200–$300</span>
                  <span style={{ fontSize: 16, color: T.muted, marginLeft: 6 }}>/month</span>
                </div>
                <p style={{ fontSize: 15, color: T.muted, lineHeight: 1.65, margin: 0 }}>
                  One flat fee covers the whole system — website, Google profile, local SEO, reporting, and (on Growth)
                  managed ads. Done for you, month to month.
                </p>
              </div>
              <div
                className="reveal reveal-delay-1"
                style={{ background: T.linen, borderRadius: 8, border: "1px solid rgba(34,26,17,0.1)", padding: "30px 32px 34px" }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.terracottaDeep, marginBottom: 14 }}>
                  Your ad budget (Growth)
                </div>
                <div style={{ marginBottom: 12 }}>
                  <span className="font-display" style={{ fontSize: 48, fontWeight: 800, color: T.ink, letterSpacing: "-0.04em" }}>You set it</span>
                </div>
                <p style={{ fontSize: 15, color: T.muted, lineHeight: 1.65, margin: 0 }}>
                  If you run Google Ads, your budget is separate and stays yours. It goes straight to Google — we never
                  mark it up or take a cut. Start small, scale when it works.
                </p>
              </div>
            </div>

            {/* No-fees strip */}
            <div
              className="reveal"
              style={{ display: "flex", flexWrap: "wrap", gap: 12 }}
            >
              {NO_FEES.map((f) => (
                <span
                  key={f}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "#FFFFFF", border: "1px solid rgba(34,26,17,0.1)", borderRadius: 4,
                    padding: "11px 16px", fontSize: 14, fontWeight: 700, color: T.ink,
                  }}
                >
                  <span style={{ color: T.terracottaDeep, display: "inline-flex" }}><IcoNo /></span>
                  {f}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE TWO PLANS — linen ─────────────────────────── */}
        <section style={{ background: T.linen, padding: "clamp(64px,10vw,110px) 24px" }}>
          <div style={SECTION}>
            <div className="reveal" style={{ maxWidth: 680, marginBottom: "clamp(40px,6vw,56px)" }}>
              <Eyebrow>Choose your plan</Eyebrow>
              <Heading lead="Two plans." accent="Both flat, both fair." />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 22 }}>
              {/* Starter */}
              <div
                className="lift reveal"
                style={{ background: T.cream, borderRadius: 8, border: "1px solid rgba(34,26,17,0.1)", padding: "36px 34px 38px" }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, color: T.muted, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 14 }}>Starter</div>
                <div style={{ marginBottom: 4 }}>
                  <span className="font-display" style={{ fontSize: 56, fontWeight: 800, color: T.ink, letterSpacing: "-0.04em" }}>$200</span>
                  <span style={{ fontSize: 16, color: T.muted, marginLeft: 4 }}>/month</span>
                </div>
                <p style={{ fontSize: 14.5, color: T.muted, margin: "0 0 26px" }}>Get found online</p>
                <div style={{ height: 1, background: "rgba(34,26,17,0.1)", marginBottom: 24 }} />
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", display: "flex", flexDirection: "column", gap: 13 }}>
                  {STARTER.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 11, fontSize: 14.5, color: T.ink }}>
                      <span style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(59,105,51,0.12)", color: T.green }}>
                        <IcoCheck />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  style={{ display: "block", textAlign: "center", border: `2px solid ${T.ink}`, color: T.ink, borderRadius: 4, padding: "14px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none" }}
                >
                  Get started
                </a>
              </div>

              {/* Growth */}
              <div
                className="lift reveal reveal-delay-1"
                style={{ background: T.ink, borderRadius: 8, border: "1px solid rgba(255,255,255,0.12)", padding: "36px 34px 38px", position: "relative" }}
              >
                <div style={{ position: "absolute", top: -14, left: 34, background: T.terracotta, color: T.ink, fontSize: 12, fontWeight: 700, padding: "5px 16px", borderRadius: 4, whiteSpace: "nowrap" }}>
                  Most popular
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: T.onInkMuted, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 14 }}>Growth</div>
                <div style={{ marginBottom: 4 }}>
                  <span className="font-display" style={{ fontSize: 56, fontWeight: 800, color: T.onInk, letterSpacing: "-0.04em" }}>$300</span>
                  <span style={{ fontSize: 16, color: T.onInkMuted, marginLeft: 4 }}>/month</span>
                </div>
                <p style={{ fontSize: 14.5, color: T.onInkMuted, margin: "0 0 26px" }}>Full capture system</p>
                <div style={{ height: 1, background: "rgba(255,255,255,0.12)", marginBottom: 24 }} />
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px", display: "flex", flexDirection: "column", gap: 13 }}>
                  {GROWTH.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 11, fontSize: 14.5, color: "rgba(255,248,244,0.85)" }}>
                      <span style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(134,164,150,0.25)", color: T.sage }}>
                        <IcoCheck />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: T.green, color: T.onInk, borderRadius: 4, padding: "14px 24px", fontSize: 15, fontWeight: 700, textDecoration: "none" }}
                >
                  Get started <IcoArrow />
                </a>
              </div>
            </div>
            <p style={{ fontSize: 14.5, color: T.muted, marginTop: 26 }}>
              Not sure which plan fits?{" "}
              <a href="/contact" style={{ color: T.green, fontWeight: 700, textDecoration: "none" }}>Let&apos;s talk.</a> We&apos;ll help you figure it out.
            </p>
          </div>
        </section>

        {/* ── HONEST COMPARISON — ivory ─────────────────────── */}
        <section style={{ background: T.cream, padding: "clamp(64px,10vw,110px) 24px" }}>
          <div style={SECTION}>
            <div className="reveal" style={{ maxWidth: 680, marginBottom: "clamp(36px,5vw,48px)" }}>
              <Eyebrow>An honest comparison</Eyebrow>
              <Heading lead="How we stack up" accent="against a typical ordering platform." />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {COMPARE.map((row, i) => (
                <div
                  key={row.label}
                  className={`reveal reveal-delay-${(i % 3) + 1}`}
                  style={{ background: "#FFFFFF", borderRadius: 8, border: "1px solid rgba(34,26,17,0.1)", padding: "26px 28px 28px" }}
                >
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: T.muted, marginBottom: 16 }}>
                    {row.label}
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                    <span style={{ color: T.green, display: "inline-flex", marginTop: 2, flexShrink: 0 }}><IcoCheck /></span>
                    <span style={{ fontSize: 15, fontWeight: 700, color: T.ink, lineHeight: 1.45 }}>{row.us}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{ color: T.terracottaDeep, display: "inline-flex", marginTop: 2, flexShrink: 0 }}><IcoNo /></span>
                    <span style={{ fontSize: 15, color: T.muted, lineHeight: 1.45 }}>{row.them}</span>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, color: T.muted, marginTop: 22, maxWidth: 640, lineHeight: 1.6 }}>
              A fair, general comparison — every platform is different, and this is meant to show the difference in
              approach, not to call anyone out.
            </p>
          </div>
        </section>

        {/* ── MINI FAQ — linen ──────────────────────────────── */}
        <section style={{ background: T.linen, padding: "clamp(64px,10vw,110px) 24px" }}>
          <div style={SECTION}>
            <div className="reveal" style={{ maxWidth: 680, marginBottom: "clamp(36px,5vw,48px)" }}>
              <Eyebrow>Common questions</Eyebrow>
              <Heading lead="The fine print," accent="in plain English." />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {FAQ.map((item, i) => (
                <div
                  key={item.q}
                  className={`reveal reveal-delay-${(i % 3) + 1}`}
                  style={{ background: T.cream, borderRadius: 8, border: "1px solid rgba(34,26,17,0.1)", padding: "26px 28px 28px" }}
                >
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: T.ink, letterSpacing: "-0.015em", margin: "0 0 10px" }}>{item.q}</h3>
                  <p style={{ fontSize: 14.5, color: T.muted, lineHeight: 1.65, margin: 0 }}>{item.a}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 14.5, color: T.muted, marginTop: 24 }}>
              More questions?{" "}
              <a href="/faq" style={{ color: T.green, fontWeight: 700, textDecoration: "none" }}>Read the full FAQ.</a>
            </p>
          </div>
        </section>

        {/* ── FINAL CTA — forest ────────────────────────────── */}
        <section className="grain" style={{ background: T.ink, padding: "clamp(64px,10vw,110px) 24px" }}>
          <div style={{ ...SECTION, maxWidth: 820 }}>
            <div className="reveal">
              <Eyebrow dark>Get started</Eyebrow>
              <Heading dark lead="See what you’re missing —" accent="free, before you pay a cent." />
              <p style={{ fontSize: 18, color: T.onInkMuted, lineHeight: 1.7, margin: "20px 0 32px", maxWidth: 560 }}>
                We&apos;ll audit your current online presence for free and show you exactly where new customers are
                slipping away. No contract, no pressure — just a clear picture of what a flat monthly fee could do.
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

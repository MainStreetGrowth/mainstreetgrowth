import SiteNav from "../_components/SiteNav";
import SiteFooter from "../_components/SiteFooter";
import { theme as T } from "../_lib/theme";

export const metadata = {
  title: "FAQ | Main Street Compass",
  description:
    "Straight answers about pricing, contracts, timelines, ad budgets, and how Main Street Compass gets small-town restaurants found by new local customers.",
};

const IcoArrow = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const SECTION_PAD = "clamp(64px,10vw,110px) 24px";
const WRAP: React.CSSProperties = { maxWidth: 1160, margin: "0 auto" };

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  const color = dark ? T.sage : T.green;
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color,
        marginBottom: 20,
      }}
    >
      <span style={{ width: 22, height: 2, background: color, display: "inline-block" }} />
      {children}
    </div>
  );
}

type QA = { q: string; a: React.ReactNode };

const FAQS: QA[] = [
  {
    q: "Are there any setup fees?",
    a: "No. There is no setup fee and no onboarding charge. You pay one flat monthly price and we get everything built and live.",
  },
  {
    q: "Do I have to sign a contract?",
    a: "No. Everything is month to month, and you can cancel any time. We would rather earn your business every month than lock you into a year.",
  },
  {
    q: "What does the monthly price include?",
    a: (
      <>
        Two simple plans. <strong>Starter is $200/month</strong> — a professional website, domain and hosting, your
        Google Business Profile, local SEO, and a monthly report. <strong>Growth is $300/month</strong> — everything
        in Starter plus managed Google Ads, keyword targeting, call and lead tracking, and a catering landing page.
        Both are fully done for you.
      </>
    ),
  },
  {
    q: "Is the Google Ads budget included in the price?",
    a: "No — and this is an important one. Your ad budget is separate and it is entirely yours. It goes straight to Google, and we never mark it up or take a cut of it. The monthly fee covers building, running, and optimizing everything; you decide how much you want to spend on ads on top of that.",
  },
  {
    q: "How fast can we go live?",
    a: "Usually about two weeks. Once we have your details and photos, we build your website, set up your Google profile, and get your local SEO and ads in place — no drawn-out process.",
  },
  {
    q: "Do I need to switch my POS or register?",
    a: "No. We are POS-agnostic — keep whatever system you already use. We work around your setup rather than asking you to change how you run the front of house.",
  },
  {
    q: "Do you do online ordering?",
    a: "Our focus is getting you found by new local customers, which is the part most restaurants are missing. We are not another ordering app stacking per-order fees. If you already take orders online, we complement that and drive more people to it rather than replacing it.",
  },
  {
    q: "When will I see results?",
    a: "We will be honest with you: some things improve within the first few weeks — a stronger Google listing and more calls, for example — while fuller results from SEO and ads build over a few months. Your monthly report shows the progress the whole way, in plain English.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no cancellation fees and no penalty. Because everything is month to month, you are free to leave whenever you like.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve independent restaurants across Mississippi & the Southeast. If you are a small-town restaurant in the region, we would love to talk.",
  },
];

export default function FaqPage() {
  return (
    <>
      <SiteNav />
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".faq-item > summary::-webkit-details-marker{display:none}" +
            ".faq-item .faq-mark{transition:transform .2s ease,background .2s ease}" +
            ".faq-item[open] .faq-mark{transform:rotate(45deg)}",
        }}
      />
      <main style={{ fontFamily: "var(--font-body,system-ui)" }}>
        {/* ── HERO — forest ─────────────────────────────────────── */}
        <section className="grain" style={{ background: T.ink, padding: "clamp(72px,11vw,120px) 24px" }}>
          <div style={WRAP}>
            <div className="reveal" style={{ maxWidth: 760 }}>
              <Eyebrow dark>Frequently asked</Eyebrow>
              <h1
                style={{
                  fontSize: "clamp(2.6rem,6vw,4.6rem)",
                  fontWeight: 800,
                  lineHeight: 1.0,
                  letterSpacing: "-0.04em",
                  color: T.onInk,
                  margin: "0 0 24px",
                }}
              >
                Questions,{" "}
                <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: T.sage }}>
                  answered.
                </span>
              </h1>
              <p style={{ fontSize: "clamp(17px,2vw,20px)", color: T.onInkMuted, lineHeight: 1.65, margin: 0, maxWidth: 580 }}>
                No fine print, no runaround. Here is exactly how the pricing, timeline, and service work — the way we
                would explain it to a neighbor across the counter.
              </p>
            </div>
          </div>
        </section>

        {/* ── ACCORDIONS — ivory ─────────────────────────────────── */}
        <section style={{ background: T.cream, padding: SECTION_PAD }}>
          <div style={{ ...WRAP, maxWidth: 860 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {FAQS.map(({ q, a }, i) => (
                <details
                  key={q}
                  className={`faq-item lift reveal reveal-delay-${(i % 4) + 1}`}
                  style={{
                    background: "#FFFFFF",
                    borderRadius: 8,
                    border: "1px solid rgba(34,26,17,0.1)",
                    padding: "0 clamp(20px,3vw,28px)",
                  }}
                >
                  <summary
                    style={{
                      listStyle: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 20,
                      padding: "22px 0",
                      fontSize: "clamp(16px,1.9vw,18px)",
                      fontWeight: 700,
                      color: T.ink,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    <span>{q}</span>
                    <span
                      className="faq-mark"
                      aria-hidden="true"
                      style={{
                        flexShrink: 0,
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: "rgba(59,105,51,0.1)",
                        color: T.green,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 20,
                        fontWeight: 700,
                        lineHeight: 1,
                      }}
                    >
                      +
                    </span>
                  </summary>
                  <div
                    style={{
                      fontSize: 15.5,
                      lineHeight: 1.75,
                      color: T.muted,
                      padding: "0 0 24px",
                      maxWidth: 680,
                    }}
                  >
                    {a}
                  </div>
                </details>
              ))}
            </div>

            {/* still have questions */}
            <p className="reveal" style={{ fontSize: 15.5, color: T.muted, lineHeight: 1.7, marginTop: 32 }}>
              Still have a question?{" "}
              <a href="/pricing" style={{ color: T.green, fontWeight: 700, textDecoration: "none" }}>
                Compare the plans
              </a>{" "}
              or{" "}
              <a href="/contact" style={{ color: T.green, fontWeight: 700, textDecoration: "none" }}>
                get in touch
              </a>{" "}
              — we are happy to talk it through, no pressure.
            </p>
          </div>
        </section>

        {/* ── CTA — forest ───────────────────────────────────────── */}
        <section className="grain" style={{ background: T.ink, padding: SECTION_PAD }}>
          <div style={{ ...WRAP, textAlign: "center", maxWidth: 780 }}>
            <div className="reveal">
              <Eyebrow dark>Ready when you are</Eyebrow>
              <h2
                style={{
                  fontSize: "clamp(2rem,5vw,3.6rem)",
                  fontWeight: 800,
                  color: T.onInk,
                  lineHeight: 1.04,
                  letterSpacing: "-0.035em",
                  margin: "0 auto 20px",
                }}
              >
                Let us fill your tables —{" "}
                <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: T.sage }}>
                  starting with a free audit.
                </span>
              </h2>
              <p style={{ fontSize: 17, color: T.onInkMuted, lineHeight: 1.7, margin: "0 auto 32px", maxWidth: 560 }}>
                We will review your online presence for free and show you exactly what is costing you customers before
                we ever get on the phone.
              </p>
              <a
                href="/contact"
                style={{
                  background: T.onInk,
                  color: T.ink,
                  padding: "16px 32px",
                  borderRadius: 4,
                  fontSize: 16,
                  fontWeight: 800,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  textDecoration: "none",
                }}
              >
                Get a free revenue audit <IcoArrow />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

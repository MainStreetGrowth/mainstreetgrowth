import KukieShell from "../_components/KukieShell";

export const metadata = {
  title: "FAQ | Main Street Compass",
  description:
    "Straight answers about pricing, contracts, timelines, ad budgets, and how Main Street Compass gets small-town restaurants found by new local customers.",
};

const IcoArrow = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const FAQ_CSS =
  ".kk .faq{list-style:none}" +
  ".kk .faq > summary{list-style:none}" +
  ".kk .faq > summary::-webkit-details-marker{display:none}" +
  ".kk .faq .faq-mark{transition:transform .2s ease}" +
  ".kk .faq[open] .faq-mark{transform:rotate(45deg)}";

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
        Two simple plans. <strong>Starter is $200/month</strong>: a professional website, domain and hosting, your
        Google Business Profile, local SEO, and a monthly report. <strong>Growth is $300/month</strong>: everything
        in Starter plus managed Google Ads, keyword targeting, call and lead tracking, and a catering landing page.
        Both are fully done for you.
      </>
    ),
  },
  {
    q: "Is the Google Ads budget included in the price?",
    a: "No, and this is an important one. Your ad budget is separate and it is entirely yours. It goes straight to Google, and we never mark it up or take a cut of it. The monthly fee covers building, running, and optimizing everything; you decide how much you want to spend on ads on top of that.",
  },
  {
    q: "How fast can we go live?",
    a: "Usually about two weeks. Once we have your details and photos, we build your website, set up your Google profile, and get your local SEO and ads in place, with no drawn-out process.",
  },
  {
    q: "Do I need to switch my POS or register?",
    a: "No. We are POS-agnostic, so keep whatever system you already use. We work around your setup rather than asking you to change how you run the front of house.",
  },
  {
    q: "Do you do online ordering?",
    a: "Our focus is getting you found by new local customers, which is the part most restaurants are missing. We are not another ordering app stacking per-order fees. If you already take orders online, we complement that and drive more people to it rather than replacing it.",
  },
  {
    q: "When will I see results?",
    a: "We will be honest with you: some things improve within the first few weeks, like a stronger Google listing and more calls, while fuller results from SEO and ads build over a few months. Your monthly report shows the progress the whole way, in plain English.",
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
    <KukieShell>
      <style dangerouslySetInnerHTML={{ __html: FAQ_CSS }} />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-panel">
            <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
              <span className="eyebrow rv">Frequently asked</span>
              <h1 className="rv" style={{ marginTop: 14 }}>
                Questions, <span className="accent">answered.</span>
              </h1>
              <p className="sub rv" style={{ margin: "0 auto", maxWidth: 600 }}>
                No fine print, no runaround. Here is exactly how the pricing, timeline, and service work, the way we
                would explain it to a neighbor across the counter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="wash">
        {/* ── ACCORDIONS ──────────────────────────────────────── */}
        <section className="block">
          <div className="inner">
            <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", flexDirection: "column", gap: 14 }}>
              {FAQS.map(({ q, a }) => (
                <details key={q} className="faq card rv" style={{ padding: "4px clamp(20px,3vw,28px)" }}>
                  <summary
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 20,
                      padding: "22px 0",
                      fontSize: "clamp(16px,1.9vw,18px)",
                      fontWeight: 700,
                      color: "var(--ink)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    <span>{q}</span>
                    <span
                      className="faq-mark"
                      aria-hidden="true"
                      style={{
                        flexShrink: 0,
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "var(--p-blue-bg)",
                        color: "var(--accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 21,
                        fontWeight: 700,
                        lineHeight: 1,
                      }}
                    >
                      +
                    </span>
                  </summary>
                  <div style={{ fontSize: 15.5, lineHeight: 1.75, color: "var(--body)", padding: "0 0 24px", maxWidth: 700 }}>
                    {a}
                  </div>
                </details>
              ))}
            </div>

            {/* still have questions */}
            <p
              className="rv"
              style={{ maxWidth: 860, margin: "32px auto 0", fontSize: 15.5, color: "var(--body)", lineHeight: 1.7 }}
            >
              Still have a question?{" "}
              <a href="/pricing" style={{ color: "var(--accent)", fontWeight: 700 }}>
                Compare the plans
              </a>{" "}
              or{" "}
              <a href="/contact" style={{ color: "var(--accent)", fontWeight: 700 }}>
                get in touch
              </a>
              . We are happy to talk it through, no pressure.
            </p>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <section className="block" style={{ paddingTop: 12 }}>
          <div className="wrap">
            <div className="cta-panel rv">
              <span className="eyebrow">Ready when you are</span>
              <h2>Let us fill your tables, <span className="accent">starting with a free audit.</span></h2>
              <p>
                We will review your online presence for free and show you exactly what is costing you customers before
                we ever get on the phone.
              </p>
              <a className="btn btn-primary" href="/contact" style={{ fontSize: 16, padding: "16px 30px" }}>
                Get a free revenue audit <IcoArrow />
              </a>
            </div>
          </div>
        </section>
      </div>
    </KukieShell>
  );
}

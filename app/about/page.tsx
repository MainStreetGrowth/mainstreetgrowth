import KukieShell from "../_components/KukieShell";

export const metadata = {
  title: "About | Main Street Compass",
  description:
    "We help small-town independent restaurants get found by new local customers and fill more tables. We handle done-for-you websites, Google, and local SEO at a price a family restaurant can afford.",
};

/* ── stroke-only icons (no emoji) ─────────────────────────────── */
const IcoArrow = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);
const IcoSearch = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
  </svg>
);
const IcoTag = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v5.2a2 2 0 00.6 1.4l7 7a2 2 0 002.8 0l5.2-5.2a2 2 0 000-2.8l-7-7A2 2 0 0012.2 3H5a2 2 0 00-2 2z" />
    <circle cx="7.5" cy="7.5" r="1.2" />
  </svg>
);
const IcoPin = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
const IcoHands = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12l3-3 4 4a2 2 0 002.8 0l.2-.2a2 2 0 000-2.8L11 7l2-2 6 6v4a3 3 0 01-3 3H9a5 5 0 01-3.5-1.5L4 15z" />
  </svg>
);

/* ── content ──────────────────────────────────────────────────── */
const DIFFERENCES = [
  {
    icon: IcoSearch,
    chipBg: "var(--p-blue-bg)",
    chipFg: "var(--accent)",
    title: "We get you found, not just orders taken",
    body: "The big platforms help take an order once someone already knows you. We do the harder, more valuable part. We put you in front of new local customers who are searching right now for a place to eat.",
  },
  {
    icon: IcoTag,
    chipBg: "var(--p-green-bg)",
    chipFg: "var(--p-green-fg)",
    title: "Flat, honest pricing",
    body: "One predictable price of $200–$300 a month. No setup fees, no contracts, and never a cut of your orders. What you earn at the register stays yours.",
  },
  {
    icon: IcoPin,
    chipBg: "var(--p-purple-bg)",
    chipFg: "var(--p-purple-fg)",
    title: "Local and personal",
    body: "We are rooted in Mississippi and the Southeast. We know small-town main streets, and you talk to a real person who knows your restaurant, not a ticket queue.",
  },
  {
    icon: IcoHands,
    chipBg: "var(--p-amber-bg)",
    chipFg: "var(--p-amber-fg)",
    title: "Done for you",
    body: "Website, Google profile, local SEO, and managed ads are all handled for you. You stay in the kitchen doing what you do best while we handle the online side.",
  },
];

const APPROACH = [
  {
    num: "01",
    title: "Audit",
    body: "We look at how you show up today: search rankings, your Google listing, your website, and the competitors down the street. You get a clear, plain-English picture of where customers are slipping away.",
  },
  {
    num: "02",
    title: "Build",
    body: "We build and connect everything: a professional website, a polished Google Business Profile, local SEO, and managed Google Ads. Most restaurants are live within about two weeks.",
  },
  {
    num: "03",
    title: "Report",
    body: "Every month you get a simple report showing what is working, like calls, visits, and new customers, with no jargon and no dashboards you need a manual to read.",
  },
];

const VALUES = [
  { title: "Honesty", body: "We set real expectations and tell you what we would do if it were our own restaurant." },
  { title: "No jargon", body: "Plain English, always. If you cannot understand your report, we have not done our job." },
  { title: "No long contracts", body: "Month to month. We earn your business every single month, or you walk away with no penalty." },
];

export default function AboutPage() {
  return (
    <KukieShell>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-panel">
            <div style={{ textAlign: "center", maxWidth: 860, margin: "0 auto" }}>
              <span className="eyebrow rv">Our mission · MS &amp; the Southeast</span>
              <h1 className="rv" style={{ marginTop: 14 }}>
                Helping good local restaurants <span className="accent">get found and fill tables.</span>
              </h1>
              <p className="sub rv" style={{ margin: "0 auto", maxWidth: 640 }}>
                Main Street Compass is a done-for-you marketing service built for the independent restaurants that
                hold small towns together. Our whole job is simple: make sure new local customers find you first,
                and keep your dining room full.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="wash">
        {/* ── WHY WE EXIST ────────────────────────────────────── */}
        <section className="block">
          <div className="inner">
            <div className="sec-head rv">
              <span className="eyebrow">WHY WE EXIST</span>
              <h2>Great food is not the problem. <span className="accent">Being invisible is.</span></h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18 }}>
              <div className="card rv" style={{ padding: 32 }}>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--ink)", margin: "0 0 18px" }}>
                  Most small-town restaurants do not lose customers because of the food. They lose them because,
                  online, they are hard to find. When someone new searches for a place to eat, a stronger listing
                  down the street shows up first, and that table is gone before anyone tasted a thing.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--body)", margin: 0 }}>
                  Meanwhile the big ordering platforms were built for national chains and franchises. They stack a fee
                  on every order and treat a family diner in Mississippi the same as a thousand-location brand.
                </p>
              </div>
              <div className="card rv" style={{ padding: 32 }}>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--ink)", margin: "0 0 18px" }}>
                  We think that is backwards. The same tools those chains use work just as well for a single great
                  restaurant: a professional website, a well-tended Google profile, local SEO, and smart, managed ads.
                  They have simply never been packaged and priced for one.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--body)", margin: 0 }}>
                  So we level the field. We do it all for you, and we price it so a family restaurant can actually
                  afford it: a flat $200–$300 a month, no setup fees, and no cut of your orders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW WE ARE DIFFERENT ────────────────────────────── */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="inner">
            <div className="sec-head rv">
              <span className="eyebrow">HOW WE ARE DIFFERENT</span>
              <h2>Not another ordering app. <span className="accent">A way to get discovered.</span></h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
              {DIFFERENCES.map(({ icon: Icon, chipBg, chipFg, title, body }) => (
                <div key={title} className="card rv" style={{ padding: 28, display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: chipBg,
                      color: chipFg,
                      marginBottom: 18,
                    }}
                  >
                    <Icon />
                  </span>
                  <h3 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2, margin: "0 0 10px" }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: 14.5, color: "var(--body)", lineHeight: 1.65, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── OUR APPROACH — dark band ─────────────────────────── */}
      <section className="block dark">
        <div className="inner">
          <div className="sec-head rv">
            <span className="eyebrow">OUR APPROACH</span>
            <h2>Audit, build, report. <span className="accent">Then do it again.</span></h2>
          </div>
          <div className="three">
            {APPROACH.map(({ num, title, body }) => (
              <div key={num} className="card step rv">
                <span className="n">{num}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wash">
        {/* ── WHAT YOU CAN COUNT ON — values ───────────────────── */}
        <section className="block">
          <div className="inner">
            <div className="sec-head rv">
              <span className="eyebrow">WHAT YOU CAN COUNT ON</span>
              <h2>How we work <span className="accent">with you.</span></h2>
            </div>
            <div className="three">
              {VALUES.map(({ title, body }) => (
                <div key={title} className="card step rv">
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO WE ARE ──────────────────────────────────────── */}
        <section className="block" style={{ paddingTop: 0 }}>
          <div className="inner">
            <div className="sec-head rv">
              <span className="eyebrow">WHO WE ARE</span>
              <h2>Your neighbor in this, <span className="accent">not a slick agency.</span></h2>
            </div>
            <div className="card rv" style={{ padding: "clamp(28px,3.4vw,44px)", maxWidth: 860, margin: "0 auto" }}>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--ink)", margin: "0 0 18px" }}>
                We started Main Street Compass because we kept seeing the same thing: a restaurant everyone in town
                loves, quietly losing customers to businesses that were simply easier to find online. We are a small,
                hands-on team that would rather know a handful of restaurants well than churn through hundreds.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--body)", margin: 0 }}>
                When you work with us you get a real person who learns your restaurant, answers the phone, and treats
                your marketing budget like it is their own. No account-manager roulette, no jargon, no pressure. Just
                steady work that puts more people in your seats.
              </p>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--faint)", margin: "26px 0 0" }}>
                Proudly serving independent restaurants across Mississippi &amp; the Southeast.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <section className="block" style={{ paddingTop: 12 }}>
          <div className="wrap">
            <div className="cta-panel rv">
              <span className="eyebrow">Let us take a look</span>
              <h2>See exactly what is costing you customers, <span className="accent">for free.</span></h2>
              <p>
                We will audit your online presence and show you where new customers are slipping away, before you
                spend a dollar.
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

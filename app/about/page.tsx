import SiteNav from "../_components/SiteNav";
import SiteFooter from "../_components/SiteFooter";
import { theme as T } from "../_lib/theme";

export const metadata = {
  title: "About | Main Street Compass",
  description:
    "We help small-town independent restaurants get found by new local customers and fill more tables. We handle done-for-you websites, Google, and local SEO at a price a family restaurant can afford.",
};

/* ── stroke-only icons (no emoji) ─────────────────────────────── */
const IcoArrow = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);
const IcoSearch = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <circle cx="11" cy="11" r="8" />
    <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
  </svg>
);
const IcoTag = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v5.2a2 2 0 00.6 1.4l7 7a2 2 0 002.8 0l5.2-5.2a2 2 0 000-2.8l-7-7A2 2 0 0012.2 3H5a2 2 0 00-2 2z" />
    <circle cx="7.5" cy="7.5" r="1.2" />
  </svg>
);
const IcoPin = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
const IcoHands = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12l3-3 4 4a2 2 0 002.8 0l.2-.2a2 2 0 000-2.8L11 7l2-2 6 6v4a3 3 0 01-3 3H9a5 5 0 01-3.5-1.5L4 15z" />
  </svg>
);

/* ── shared section header ────────────────────────────────────── */
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

function SectionHead({
  eyebrow,
  lead,
  accent,
  dark = false,
  maxWidth = 680,
}: {
  eyebrow: string;
  lead: string;
  accent: string;
  dark?: boolean;
  maxWidth?: number;
}) {
  return (
    <div className="reveal" style={{ maxWidth, marginBottom: 44 }}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        style={{
          fontSize: "clamp(2rem,4.5vw,3.4rem)",
          fontWeight: 800,
          color: dark ? T.onInk : T.ink,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          margin: 0,
        }}
      >
        {lead}{" "}
        <span
          className="font-display"
          style={{ fontStyle: "italic", fontWeight: 700, color: dark ? T.sage : T.green }}
        >
          {accent}
        </span>
      </h2>
    </div>
  );
}

const SECTION_PAD = "clamp(64px,10vw,110px) 24px";
const WRAP: React.CSSProperties = { maxWidth: 1160, margin: "0 auto" };

/* ── content ──────────────────────────────────────────────────── */
const DIFFERENCES = [
  {
    icon: IcoSearch,
    title: "We get you found, not just orders taken",
    body: "The big platforms help take an order once someone already knows you. We do the harder, more valuable part. We put you in front of new local customers who are searching right now for a place to eat.",
  },
  {
    icon: IcoTag,
    title: "Flat, honest pricing",
    body: "One predictable price of $200–$300 a month. No setup fees, no contracts, and never a cut of your orders. What you earn at the register stays yours.",
  },
  {
    icon: IcoPin,
    title: "Local and personal",
    body: "We are rooted in Mississippi and the Southeast. We know small-town main streets, and you talk to a real person who knows your restaurant, not a ticket queue.",
  },
  {
    icon: IcoHands,
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
    <>
      <SiteNav />
      <main style={{ fontFamily: "var(--font-body,system-ui)" }}>
        {/* ── HERO — forest ─────────────────────────────────────── */}
        <section className="grain" style={{ background: T.ink, padding: "clamp(72px,11vw,120px) 24px" }}>
          <div style={WRAP}>
            <div className="reveal" style={{ maxWidth: 780 }}>
              <Eyebrow dark>Our mission · MS &amp; the Southeast</Eyebrow>
              <h1
                style={{
                  fontSize: "clamp(2.6rem,6vw,4.6rem)",
                  fontWeight: 800,
                  lineHeight: 1.0,
                  letterSpacing: "-0.04em",
                  color: T.onInk,
                  margin: "0 0 26px",
                }}
              >
                Helping good local restaurants{" "}
                <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: T.sage }}>
                  get found and fill tables.
                </span>
              </h1>
              <p
                className="reveal reveal-delay-1"
                style={{ fontSize: "clamp(17px,2vw,20px)", color: T.onInkMuted, lineHeight: 1.65, margin: 0, maxWidth: 620 }}
              >
                Main Street Compass is a done-for-you marketing service built for the independent restaurants that
                hold small towns together. Our whole job is simple: make sure new local customers find you first,
                and keep your dining room full.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHY WE EXIST — ivory ───────────────────────────────── */}
        <section style={{ background: T.cream, padding: SECTION_PAD }}>
          <div style={WRAP}>
            <SectionHead eyebrow="Why we exist" lead="Great food is not the problem." accent="Being invisible is." />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
                gap: "clamp(24px,4vw,52px)",
              }}
            >
              <div className="reveal">
                <p style={{ fontSize: 17, lineHeight: 1.8, color: T.ink, margin: "0 0 18px" }}>
                  Most small-town restaurants do not lose customers because of the food. They lose them because,
                  online, they are hard to find. When someone new searches for a place to eat, a stronger listing
                  down the street shows up first, and that table is gone before anyone tasted a thing.
                </p>
                <p style={{ fontSize: 17, lineHeight: 1.8, color: T.muted, margin: 0 }}>
                  Meanwhile the big ordering platforms were built for national chains and franchises. They stack a fee
                  on every order and treat a family diner in Mississippi the same as a thousand-location brand.
                </p>
              </div>
              <div className="reveal reveal-delay-1">
                <p style={{ fontSize: 17, lineHeight: 1.8, color: T.ink, margin: "0 0 18px" }}>
                  We think that is backwards. The same tools those chains use work just as well for a single great
                  restaurant: a professional website, a well-tended Google profile, local SEO, and smart, managed ads.
                  They have simply never been packaged and priced for one.
                </p>
                <p style={{ fontSize: 17, lineHeight: 1.8, color: T.muted, margin: 0 }}>
                  So we level the field. We do it all for you, and we price it so a family restaurant can actually
                  afford it: a flat $200–$300 a month, no setup fees, and no cut of your orders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW WE ARE DIFFERENT — linen ───────────────────────── */}
        <section style={{ background: T.linen, padding: SECTION_PAD }}>
          <div style={WRAP}>
            <SectionHead
              eyebrow="How we are different"
              lead="Not another ordering app."
              accent="A way to get discovered."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
                gap: 20,
              }}
            >
              {DIFFERENCES.map(({ icon: Icon, title, body }, i) => (
                <div
                  key={title}
                  className={`lift reveal reveal-delay-${i + 1}`}
                  style={{
                    background: T.cream,
                    borderRadius: 8,
                    border: "1px solid rgba(34,26,17,0.1)",
                    padding: "30px 28px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(59,105,51,0.1)",
                      color: T.green,
                      marginBottom: 20,
                    }}
                  >
                    <Icon />
                  </div>
                  <h3
                    style={{
                      fontSize: "clamp(1.15rem,1.8vw,1.35rem)",
                      fontWeight: 800,
                      color: T.ink,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                      margin: "0 0 10px",
                    }}
                  >
                    {title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: T.muted, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR APPROACH + VALUES — forest ─────────────────────── */}
        <section className="grain" style={{ background: T.ink, padding: SECTION_PAD }}>
          <div style={WRAP}>
            <SectionHead
              eyebrow="Our approach"
              lead="Audit, build, report."
              accent="Then do it again."
              dark
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
                gap: 20,
                marginBottom: "clamp(40px,6vw,64px)",
              }}
            >
              {APPROACH.map(({ num, title, body }, i) => (
                <div
                  key={num}
                  className={`reveal reveal-delay-${i + 1}`}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.12)",
                    padding: "30px 28px",
                  }}
                >
                  <div
                    className="font-display"
                    style={{ fontSize: 40, fontWeight: 800, color: T.sage, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 16 }}
                  >
                    {num}
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: T.onInk, letterSpacing: "-0.02em", margin: "0 0 10px" }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: T.onInkMuted, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>

            {/* values note */}
            <div
              className="reveal"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.12)",
                paddingTop: "clamp(32px,5vw,48px)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))",
                gap: "clamp(24px,4vw,44px)",
              }}
            >
              {VALUES.map(({ title, body }) => (
                <div key={title}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: T.sage, marginBottom: 10 }}>
                    {title}
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: T.onInkMuted, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO WE ARE — ivory ─────────────────────────────────── */}
        <section style={{ background: T.cream, padding: SECTION_PAD }}>
          <div style={{ ...WRAP, maxWidth: 820 }}>
            <SectionHead eyebrow="Who we are" lead="Your neighbor in this," accent="not a slick agency." maxWidth={760} />
            <div className="reveal">
              <p style={{ fontSize: 18, lineHeight: 1.8, color: T.ink, margin: "0 0 18px" }}>
                We started Main Street Compass because we kept seeing the same thing: a restaurant everyone in town
                loves, quietly losing customers to businesses that were simply easier to find online. We are a small,
                hands-on team that would rather know a handful of restaurants well than churn through hundreds.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.8, color: T.muted, margin: 0 }}>
                When you work with us you get a real person who learns your restaurant, answers the phone, and treats
                your marketing budget like it is their own. No account-manager roulette, no jargon, no pressure. Just
                steady work that puts more people in your seats.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: T.muted, margin: "26px 0 0" }}>
                Proudly serving independent restaurants across Mississippi &amp; the Southeast.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA — forest ───────────────────────────────────────── */}
        <section className="grain" style={{ background: T.ink, padding: SECTION_PAD }}>
          <div style={{ ...WRAP, textAlign: "center", maxWidth: 780 }}>
            <div className="reveal">
              <Eyebrow dark>Let us take a look</Eyebrow>
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
                See exactly what is costing you customers,{" "}
                <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: T.sage }}>
                  for free.
                </span>
              </h2>
              <p style={{ fontSize: 17, color: T.onInkMuted, lineHeight: 1.7, margin: "0 auto 32px", maxWidth: 560 }}>
                We will audit your online presence and show you where new customers are slipping away, before you
                spend a dollar.
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

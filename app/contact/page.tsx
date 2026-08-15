import SiteNav from "../_components/SiteNav";
import SiteFooter from "../_components/SiteFooter";
import ContactForm from "../_components/ContactForm";
import { theme as T, SITE } from "../_lib/theme";

export const metadata = {
  title: "Contact | Main Street Compass",
  description:
    "Get a free revenue audit for your restaurant. We'll show you exactly what's costing you customers online. No cost, no obligation. Serving Mississippi & the Southeast.",
};

const Eyebrow = ({ children, color = T.sage }: { children: React.ReactNode; color?: string }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color, marginBottom: 18 }}>
    <span style={{ width: 22, height: 2, background: color, display: "inline-block" }} />
    {children}
  </div>
);

const EXPECT = [
  { n: "01", h: "Free revenue audit", b: "We review your search rankings, Google listing, website, and local competitors before we even get on the phone." },
  { n: "02", h: "Live in ~2 weeks", b: "Your website, Google profile, and ads are set up and running fast. No long, drawn-out process." },
  { n: "03", h: "No setup fees, no contract", b: "One flat monthly fee. Cancel any time. We earn your business every month." },
];

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main style={{ fontFamily: "var(--font-body,system-ui)", background: T.cream, color: T.charcoal }}>
        {/* Hero */}
        <section className="grain" style={{ background: T.ink, color: T.onInk, padding: "clamp(64px,10vw,110px) 24px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div className="reveal">
              <Eyebrow>Get started</Eyebrow>
              <h1 style={{ fontSize: "clamp(2.6rem,6vw,4.4rem)", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.04em", margin: 0, maxWidth: 760 }}>
                Let&apos;s fill your tables.{" "}
                <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: T.sage }}>Starting with a free audit.</span>
              </h1>
              <p style={{ fontSize: 18, color: T.onInkMuted, lineHeight: 1.7, marginTop: 20, maxWidth: 540 }}>
                Tell us about your restaurant and we&apos;ll audit your current online presence for free, and show you exactly what&apos;s costing you customers.
              </p>
            </div>
          </div>
        </section>

        {/* Body: details + form */}
        <section style={{ background: T.cream, padding: "clamp(56px,8vw,96px) 24px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(32px,5vw,64px)", alignItems: "start" }}>
            {/* Left: what to expect + details */}
            <div className="reveal">
              <Eyebrow color={T.green}>What to expect</Eyebrow>
              <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 32 }}>
                {EXPECT.map(({ n, h, b }) => (
                  <div key={n} style={{ padding: "18px 0", borderTop: "1px solid rgba(34,26,17,0.1)" }}>
                    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <span className="font-display" style={{ fontSize: 18, fontWeight: 800, color: "rgba(34,26,17,0.3)", flexShrink: 0 }}>{n}</span>
                      <div>
                        <div style={{ fontSize: 16, fontWeight: 700, color: T.ink, marginBottom: 4 }}>{h}</div>
                        <p style={{ fontSize: 14, color: T.muted, lineHeight: 1.7, margin: 0 }}>{b}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "1px solid rgba(34,26,17,0.1)", paddingTop: 22, display: "flex", flexDirection: "column", gap: 10 }}>
                <a href={SITE.phoneHref} style={{ display: "flex", alignItems: "center", gap: 10, color: T.ink, textDecoration: "none", fontSize: 15, fontWeight: 600 }}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={T.green} strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.6a1 1 0 01.95.68l1.2 3.4a1 1 0 01-.27 1.06l-1.6 1.5a13 13 0 006.1 6.1l1.5-1.6a1 1 0 011.06-.27l3.4 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2A16 16 0 013 5z" /></svg>
                  {SITE.phone}
                </a>
                <a href={`mailto:${SITE.email}`} style={{ display: "flex", alignItems: "center", gap: 10, color: T.ink, textDecoration: "none", fontSize: 15, fontWeight: 600 }}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={T.green} strokeWidth={1.8}><rect x="3" y="5" width="18" height="14" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" /></svg>
                  {SITE.email}
                </a>
                <div style={{ display: "flex", alignItems: "center", gap: 10, color: T.muted, fontSize: 15 }}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke={T.green} strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
                  {SITE.area}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="reveal reveal-delay-1">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

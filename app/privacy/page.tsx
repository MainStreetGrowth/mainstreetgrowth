import KukieShell from "../_components/KukieShell";

export const metadata = {
  title: "Privacy Policy | Main Street Compass",
  description:
    "How Main Street Compass collects, uses, and protects the information you share with us. Read our plain-English privacy policy.",
};

/* ── Shared presentational pieces (server-safe, no hooks) ───────── */
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="rv">
      <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--ink)", margin: "28px 0 10px", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>{children}</div>
    </section>
  );
}

const proseStyle: React.CSSProperties = { fontSize: 16, lineHeight: 1.8, color: "var(--body)", margin: 0 };

function P({ children }: { children: React.ReactNode }) {
  return <p style={proseStyle}>{children}</p>;
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 16, lineHeight: 1.8, color: "var(--body)" }}>
          <span aria-hidden="true" style={{ flexShrink: 0, width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", marginTop: 12 }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <KukieShell>
      <section className="hero">
        <div className="wrap">
          <div className="hero-panel rv">
            <div>
              <span className="eyebrow" style={{ color: "var(--p-green-fg)" }}>LEGAL</span>
              <h1 style={{ marginTop: 14 }}>
                Privacy <span className="accent">Policy</span>
              </h1>
              <p className="sub" style={{ marginBottom: 20 }}>Last updated: July 2026</p>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  margin: 0,
                  padding: "16px 20px",
                  background: "var(--p-amber-bg)",
                  color: "var(--p-amber-fg)",
                  borderRadius: 12,
                  border: "1px solid var(--win-border)",
                  maxWidth: 620,
                }}
              >
                This document is a plain-English template provided for convenience. It is not legal advice and should be reviewed
                and adapted by qualified legal counsel before you publish or rely on it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="wash">
        <section className="block">
          <div className="inner" style={{ maxWidth: 800 }}>
            <Section id="introduction" title="Introduction">
              <P>
                Main Street Compass (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides done-for-you digital-marketing
                services for small-town independent restaurants. This Privacy Policy explains what information we collect when you
                visit our website or contact us, how we use it, and the choices you have.
              </P>
              <P>By using our website or submitting information to us, you agree to the practices described in this policy.</P>
            </Section>

            <Section id="information-we-collect" title="Information We Collect">
              <P>We collect information in the following ways:</P>
              <List
                items={[
                  <>
                    <strong>Information you give us.</strong> When you fill out a contact or inquiry form, we collect your name,
                    business name, email address, phone number, and any message or details you choose to share.
                  </>,
                  <>
                    <strong>Usage and analytics data.</strong> We automatically collect limited technical information such as your
                    device type, browser, pages visited, and how you interact with the site.
                  </>,
                  <>
                    <strong>Cookies and similar technologies.</strong> We use cookies and comparable tools to remember preferences
                    and understand site traffic.
                  </>,
                ]}
              />
            </Section>

            <Section id="how-we-use-your-information" title="How We Use Your Information">
              <P>We use the information we collect to:</P>
              <List
                items={[
                  "Respond to your inquiries and follow up about a free audit or our services.",
                  "Provide, operate, and deliver the services you request.",
                  "Maintain, improve, and secure our website and offerings.",
                  "Send marketing or promotional communications, where you have consented and always with an easy way to opt out.",
                ]}
              />
            </Section>

            <Section id="cookies-and-analytics" title="Cookies & Analytics">
              <P>
                We use analytics tools (such as Google Analytics) and advertising pixels to understand how visitors find and use
                our site and to measure the performance of our marketing. These tools may set cookies on your device and collect
                aggregated, usually non-identifying, information.
              </P>
              <P>
                Most browsers let you refuse or delete cookies through their settings. Disabling cookies may affect how some parts
                of the site function.
              </P>
            </Section>

            <Section id="sharing-and-third-parties" title="Sharing & Third Parties">
              <P>
                We do not sell your personal information. We share it only with trusted service providers who help us operate our
                business, and only to the extent needed to perform their work for us. These may include:
              </P>
              <List
                items={[
                  "Email and communication providers used to reply to your inquiries.",
                  "Analytics providers that help us understand site traffic.",
                  "Advertising platforms used to run and measure marketing campaigns.",
                ]}
              />
              <P>We may also disclose information if required by law or to protect our rights, safety, or property.</P>
            </Section>

            <Section id="data-retention" title="Data Retention">
              <P>
                We keep your information only for as long as it is needed to fulfill the purposes described in this policy, to
                provide our services, and to comply with our legal obligations. When information is no longer needed, we take
                reasonable steps to delete or anonymize it.
              </P>
            </Section>

            <Section id="your-rights" title="Your Rights">
              <P>Depending on where you live, you may have rights regarding your personal information, including the ability to:</P>
              <List
                items={[
                  "Access the information we hold about you.",
                  "Request correction of inaccurate or incomplete information.",
                  "Request deletion of your information.",
                  "Opt out of marketing communications at any time.",
                ]}
              />
              <P>
                To exercise any of these rights, contact us using the details below and we will respond within a reasonable
                timeframe.
              </P>
            </Section>

            <Section id="childrens-privacy" title="Children&apos;s Privacy">
              <P>
                Our website and services are intended for business owners and are not directed to children under 13. We do not
                knowingly collect personal information from children under 13. If you believe a child has provided us with
                information, please contact us and we will delete it.
              </P>
            </Section>

            <Section id="changes-to-this-policy" title="Changes to This Policy">
              <P>
                We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Last updated&quot; date
                above. We encourage you to review this page periodically to stay informed about how we protect your information.
              </P>
            </Section>

            <Section id="contact-us" title="Contact Us">
              <P>
                If you have questions about this Privacy Policy or how we handle your information, please reach out:
              </P>
              <P>
                <a href="mailto:hello@mainstreetcompass.com" style={{ color: "var(--accent)", fontWeight: 700 }}>
                  hello@mainstreetcompass.com
                </a>
              </P>
            </Section>
          </div>
        </section>
      </div>
    </KukieShell>
  );
}

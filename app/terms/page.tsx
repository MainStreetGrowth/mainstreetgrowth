import SiteNav from "../_components/SiteNav";
import SiteFooter from "../_components/SiteFooter";
import { theme as T } from "../_lib/theme";

export const metadata = {
  title: "Terms of Service | Main Street Compass",
  description:
    "The terms that govern your use of Main Street Compass services — fees, cancellation, responsibilities, and more, in plain English.",
};

/* ── Shared presentational pieces (server-safe, no hooks) ───────── */
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="reveal" style={{ marginTop: 44 }}>
      <h2
        className="font-display"
        style={{
          fontSize: "clamp(1.4rem,3vw,1.85rem)",
          fontWeight: 800,
          color: T.ink,
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
          margin: "0 0 14px",
        }}
      >
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {children}
      </div>
    </section>
  );
}

const proseStyle: React.CSSProperties = {
  fontSize: 16,
  lineHeight: 1.75,
  color: "rgba(34,26,17,0.78)",
  margin: 0,
};

function P({ children }: { children: React.ReactNode }) {
  return <p style={proseStyle}>{children}</p>;
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
            fontSize: 16,
            lineHeight: 1.7,
            color: "rgba(34,26,17,0.78)",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              flexShrink: 0,
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: T.green,
              marginTop: 11,
            }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <>
      <SiteNav />
      <main style={{ background: T.cream, color: T.ink }}>
        <section
          style={{
            padding: "clamp(56px,8vw,96px) clamp(20px,5vw,24px) clamp(72px,10vw,120px)",
          }}
        >
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            {/* ── Header ─────────────────────────────────────────── */}
            <div className="reveal">
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: T.green,
                  marginBottom: 18,
                }}
              >
                <span
                  style={{
                    width: 22,
                    height: 2,
                    background: T.green,
                    display: "inline-block",
                  }}
                />
                Legal
              </div>
              <h1
                style={{
                  fontSize: "clamp(2.4rem,6vw,3.6rem)",
                  fontWeight: 800,
                  color: T.ink,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.02,
                  margin: "0 0 16px",
                }}
              >
                Terms of{" "}
                <span
                  className="font-display"
                  style={{ fontStyle: "italic", fontWeight: 700, color: T.green }}
                >
                  Service
                </span>
              </h1>
              <p style={{ fontSize: 14, color: T.muted, margin: "0 0 20px", fontWeight: 600 }}>
                Last updated: July 2026
              </p>
              <p
                className="font-display"
                style={{
                  fontStyle: "italic",
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: T.muted,
                  margin: 0,
                  padding: "16px 20px",
                  background: T.linen,
                  borderRadius: 4,
                  borderLeft: `3px solid ${T.terracotta}`,
                }}
              >
                This document is a plain-English template provided for convenience. It is not
                legal advice and should be reviewed and adapted by qualified legal counsel
                before you publish or rely on it.
              </p>
            </div>

            {/* ── Sections ───────────────────────────────────────── */}
            <Section id="agreement-to-terms" title="Agreement to Terms">
              <P>
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
                services provided by Main Street Compass (&quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;). By engaging our services or using our website, you agree to be
                bound by these Terms. If you do not agree, please do not use our services.
              </P>
            </Section>

            <Section id="our-services" title="Our Services">
              <P>
                We provide done-for-you digital-marketing services for independent
                restaurants, which may include a website, Google Business Profile setup and
                management, local search optimization, managed Google Ads, and monthly
                reporting. The specific services included depend on the plan you select.
              </P>
              <P>
                Advertising spend (for example, the budget paid to Google Ads) is separate from
                our service fee. Ad spend is billed and paid directly by you to the advertising
                platform, and it is not included in our monthly fee unless we agree otherwise
                in writing.
              </P>
            </Section>

            <Section id="fees-and-billing" title="Fees &amp; Billing">
              <P>
                Our services are offered for a flat monthly fee, typically between $200 and
                $300 per month depending on your plan. Billing is month-to-month, with no setup
                fees and no long-term contract. Fees are billed monthly in advance and are due
                on the billing date for each period.
              </P>
            </Section>

            <Section id="cancellation" title="Cancellation">
              <P>
                You may cancel at any time. There is no cancellation fee. Because our service is
                billed monthly in advance, cancellations take effect at the end of the current
                billing period, and fees already paid for the current period are
                non-refundable. We will not bill you for any period after your cancellation
                takes effect.
              </P>
            </Section>

            <Section id="client-responsibilities" title="Client Responsibilities">
              <P>To help us deliver strong results, you agree to:</P>
              <List
                items={[
                  "Provide accurate business information, content, photos, and any other materials we reasonably need.",
                  "Grant timely access to accounts and platforms required to perform the services (for example, your Google Business Profile).",
                  "Review deliverables and provide timely feedback and approvals so work can move forward.",
                ]}
              />
            </Section>

            <Section id="intellectual-property" title="Intellectual Property">
              <P>
                You retain ownership of the content you provide to us, such as your business
                name, logo, photos, and text. We retain ownership of our methods, processes,
                templates, and know-how used to deliver the services.
              </P>
              <P>
                While your account is active and in good standing, we grant you a license to
                use the website and materials we create for you as part of the services.
              </P>
            </Section>

            <Section id="no-guarantee-of-results" title="No Guarantee of Results">
              <P>
                Marketing results depend on many factors outside our control, including your
                market, competition, pricing, seasonality, and how you serve customers. Any
                figures, projections, or example outcomes we share are illustrative estimates
                only and are not promises or guarantees of specific results.
              </P>
            </Section>

            <Section id="disclaimers-and-limitation-of-liability" title="Disclaimers &amp; Limitation of Liability">
              <P>
                Our services are provided on an &quot;as is&quot; and &quot;as available&quot;
                basis, without warranties of any kind, whether express or implied, to the
                fullest extent permitted by law.
              </P>
              <P>
                To the maximum extent permitted by law, Main Street Compass will not be liable
                for any indirect, incidental, special, or consequential damages. Our total
                liability for any claim relating to the services will not exceed the amount you
                paid us in the three months preceding the event giving rise to the claim.
              </P>
            </Section>

            <Section id="governing-law" title="Governing Law">
              <P>
                These Terms are governed by the laws of the State of Mississippi, without regard
                to its conflict-of-laws principles. Any disputes arising from these Terms or our
                services will be subject to the exclusive jurisdiction of the courts located in
                Mississippi.
              </P>
            </Section>

            <Section id="changes-to-terms" title="Changes to Terms">
              <P>
                We may update these Terms from time to time. When we do, we will revise the
                &quot;Last updated&quot; date above. Continued use of our services after changes
                take effect constitutes your acceptance of the revised Terms.
              </P>
            </Section>

            <Section id="contact" title="Contact">
              <P>If you have any questions about these Terms, please contact us:</P>
              <P>
                <a
                  href="mailto:hello@mainstreetcompass.com"
                  style={{ color: T.green, fontWeight: 700, textDecoration: "none" }}
                >
                  hello@mainstreetcompass.com
                </a>
              </P>
            </Section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

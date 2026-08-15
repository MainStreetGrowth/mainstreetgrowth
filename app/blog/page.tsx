import type { Metadata } from "next";
import SiteNav from "../_components/SiteNav";
import SiteFooter from "../_components/SiteFooter";
import { theme as T } from "../_lib/theme";
import { POSTS } from "../_lib/posts";

export const metadata: Metadata = {
  title: "Blog — Ideas for filling more tables | Main Street Compass",
  description:
    "Practical, no-jargon restaurant-marketing advice for small-town independent restaurants: local SEO, getting found on Google, direct ordering, and websites that fill tables.",
};

/* ─── Small helpers ─────────────────────────────────────────── */
function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

const Eyebrow = ({ children, color = T.green }: { children: React.ReactNode; color?: string }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
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

const Arrow = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function BlogIndex() {
  return (
    <div style={{ fontFamily: "var(--font-body,system-ui)", backgroundColor: T.cream, color: T.ink }}>
      <SiteNav />

      <main>
        {/* ── HERO (forest) ─────────────────────────────────── */}
        <section className="grain" style={{ background: T.ink, padding: "clamp(64px,10vw,110px) 24px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div className="reveal" style={{ maxWidth: 720 }}>
              <Eyebrow color={T.sage}>The Main Street Compass blog</Eyebrow>
              <h1
                style={{
                  fontSize: "clamp(2.8rem,6vw,4.8rem)",
                  fontWeight: 800,
                  lineHeight: 1.0,
                  letterSpacing: "-0.04em",
                  color: T.onInk,
                  margin: "0 0 22px",
                }}
              >
                Ideas for{" "}
                <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: T.sage }}>
                  filling more tables.
                </span>
              </h1>
              <p
                className="reveal reveal-delay-1"
                style={{ fontSize: "clamp(17px,2.2vw,20px)", color: T.onInkMuted, lineHeight: 1.65, margin: 0, maxWidth: 560 }}
              >
                Practical, no-jargon restaurant-marketing advice for small-town owners. How to get found on Google, keep more of
                every order, and turn first-timers into regulars, from the people who do it for a living.
              </p>
            </div>
          </div>
        </section>

        {/* ── POST GRID (ivory) ─────────────────────────────── */}
        <section style={{ background: T.cream, padding: "clamp(64px,10vw,110px) 24px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
                gap: 24,
              }}
            >
              {POSTS.map((post, i) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`lift reveal reveal-delay-${Math.min(i + 1, 4)}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "#FFFFFF",
                    border: "1px solid rgba(34,26,17,0.14)",
                    borderRadius: 8,
                    padding: "clamp(26px,3vw,34px)",
                    textDecoration: "none",
                    color: T.ink,
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11.5,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: T.green,
                      marginBottom: 16,
                    }}
                  >
                    {post.category}
                  </div>
                  <h2
                    className="font-display"
                    style={{
                      fontSize: "clamp(1.35rem,2.2vw,1.7rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                      color: T.ink,
                      margin: "0 0 14px",
                    }}
                  >
                    {post.title}
                  </h2>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: T.muted, margin: "0 0 24px" }}>{post.excerpt}</p>
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: 18,
                      borderTop: "1px solid rgba(34,26,17,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                    }}
                  >
                    <span style={{ fontSize: 13, color: T.muted }}>
                      {formatDate(post.date)} · {post.readMins} min read
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", color: T.green }}>
                      <Arrow />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA (forest) ──────────────────────────────────── */}
        <section className="grain" style={{ background: T.ink, padding: "clamp(64px,10vw,110px) 24px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div className="reveal" style={{ maxWidth: 760 }}>
              <Eyebrow color={T.terracotta}>Get started</Eyebrow>
              <h2
                style={{
                  fontSize: "clamp(2.2rem,5vw,3.6rem)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-0.035em",
                  color: T.onInk,
                  margin: "0 0 18px",
                }}
              >
                Want us to do this for your restaurant?{" "}
                <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: T.terracotta }}>
                  Start with a free audit.
                </span>
              </h2>
              <p style={{ fontSize: 17, color: T.onInkMuted, lineHeight: 1.7, margin: "0 0 30px", maxWidth: 560 }}>
                We&apos;ll review your Google listing, your website, and how you stack up against the restaurants nearby, then
                show you exactly what&apos;s costing you customers. No pressure, no jargon.
              </p>
              <a
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                  background: T.onInk,
                  color: T.ink,
                  padding: "15px 30px",
                  borderRadius: 4,
                  fontSize: 16,
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                Get a free revenue audit <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

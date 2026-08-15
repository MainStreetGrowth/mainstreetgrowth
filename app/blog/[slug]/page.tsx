import { notFound } from "next/navigation";
import SiteNav from "../../_components/SiteNav";
import SiteFooter from "../../_components/SiteFooter";
import { theme as T } from "../../_lib/theme";
import { POSTS, getPost } from "../../_lib/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return {
    title: post ? `${post.title} | Main Street Compass` : "Article",
    description: post?.excerpt,
  };
}

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

const ArrowLeft = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
  </svg>
);

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div style={{ fontFamily: "var(--font-body,system-ui)", backgroundColor: T.cream, color: T.ink }}>
      <SiteNav />

      <main>
        {/* ── ARTICLE HEADER (linen) ────────────────────────── */}
        <section style={{ background: T.linen, padding: "clamp(56px,9vw,96px) 24px clamp(40px,6vw,64px)" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <a
              href="/blog"
              className="reveal"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                fontSize: 13,
                fontWeight: 700,
                color: T.green,
                textDecoration: "none",
                marginBottom: 26,
              }}
            >
              <ArrowLeft /> All articles
            </a>
            <div className="reveal reveal-delay-1">
              <Eyebrow>{post.category}</Eyebrow>
              <h1
                style={{
                  fontSize: "clamp(2.2rem,5vw,3.6rem)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-0.035em",
                  color: T.ink,
                  margin: "0 0 22px",
                }}
              >
                {post.title}
              </h1>
              <div style={{ fontSize: 14, color: T.muted, fontWeight: 600 }}>
                {formatDate(post.date)} · {post.readMins} min read
              </div>
            </div>
          </div>
        </section>

        {/* ── ARTICLE BODY (ivory) ──────────────────────────── */}
        <section style={{ background: T.cream, padding: "clamp(48px,8vw,84px) 24px" }}>
          <article style={{ maxWidth: 720, margin: "0 auto" }}>
            {post.body.map((para, i) => {
              if (para.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="font-display"
                    style={{
                      fontSize: "clamp(1.5rem,3vw,2rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                      color: T.ink,
                      margin: "44px 0 4px",
                    }}
                  >
                    {para.slice(3)}
                  </h2>
                );
              }
              return (
                <p
                  key={i}
                  style={{
                    fontSize: "clamp(16px,2vw,18px)",
                    lineHeight: 1.8,
                    color: "rgba(34,26,17,0.86)",
                    margin: "22px 0 0",
                  }}
                >
                  {para}
                </p>
              );
            })}

            {/* Back to blog */}
            <div
              style={{
                marginTop: 56,
                paddingTop: 28,
                borderTop: "1px solid rgba(34,26,17,0.12)",
              }}
            >
              <a
                href="/blog"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 15,
                  fontWeight: 700,
                  color: T.green,
                  textDecoration: "none",
                }}
              >
                <ArrowLeft /> Back to all articles
              </a>
            </div>
          </article>
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
                Ready to put this to work?{" "}
                <span className="font-display" style={{ fontStyle: "italic", fontWeight: 700, color: T.terracotta }}>
                  Start with a free audit.
                </span>
              </h2>
              <p style={{ fontSize: 17, color: T.onInkMuted, lineHeight: 1.7, margin: "0 0 30px", maxWidth: 560 }}>
                We&apos;ll review your Google listing, your website, and how you compare to the restaurants nearby, then show you
                exactly where you&apos;re leaving customers on the table. No pressure, no jargon.
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

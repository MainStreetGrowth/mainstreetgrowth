import { notFound } from "next/navigation";
import KukieShell from "../../_components/KukieShell";
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

const Arrow = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const ArrowLeft = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
  </svg>
);

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <KukieShell>
      {/* ── ARTICLE HEADER ──────────────────────────────────── */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-panel">
            <div className="rv" style={{ maxWidth: 760 }}>
              <a href="/blog" className="btn-text" style={{ marginBottom: 22 }}>
                <ArrowLeft /> All posts
              </a>
              <div style={{ marginTop: 6 }}>
                <span className="pill amber">
                  <span className="dot" />
                  {post.category}
                </span>
              </div>
              <h1
                style={{
                  fontSize: "clamp(2rem,4.4vw,3.4rem)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-0.035em",
                  color: "var(--ink)",
                  margin: "16px 0 16px",
                }}
              >
                {post.title}
              </h1>
              <div style={{ fontSize: 14, color: "var(--faint)", fontWeight: 600 }}>
                {formatDate(post.date)} · {post.readMins} min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ────────────────────────────────────── */}
      <div className="wash">
        <section className="block">
          <div className="inner" style={{ maxWidth: 760 }}>
            <article>
              {post.body.map((para, i) => {
                if (para.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      style={{
                        fontSize: "clamp(1.5rem,3vw,2rem)",
                        fontWeight: 800,
                        color: "var(--ink)",
                        margin: "32px 0 12px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {para.slice(3)}
                    </h2>
                  );
                }
                return (
                  <p key={i} style={{ fontSize: 17, color: "var(--body)", lineHeight: 1.8, margin: "18px 0 0" }}>
                    {para}
                  </p>
                );
              })}
            </article>

            {/* ── CTA card ──────────────────────────────────── */}
            <div
              className="card rv"
              style={{
                marginTop: 44,
                padding: "28px 30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 22,
                flexWrap: "wrap",
              }}
            >
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--ink)", margin: "0 0 6px", letterSpacing: "-0.02em" }}>
                  Want us to do this for your restaurant?
                </h3>
                <p style={{ color: "var(--body)", fontSize: 14.5, margin: 0 }}>
                  Start with a free revenue audit. No pressure, no jargon.
                </p>
              </div>
              <a className="btn btn-primary" href="/contact" style={{ flexShrink: 0 }}>
                Get a free audit <Arrow />
              </a>
            </div>

            {/* Back to blog */}
            <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
              <a href="/blog" className="btn-text">
                <ArrowLeft /> All posts
              </a>
            </div>
          </div>
        </section>
      </div>
    </KukieShell>
  );
}

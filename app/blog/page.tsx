import type { Metadata } from "next";
import KukieShell from "../_components/KukieShell";
import { POSTS } from "../_lib/posts";

export const metadata: Metadata = {
  title: "Blog: Ideas for filling more tables | Main Street Compass",
  description:
    "Practical, no-jargon restaurant-marketing advice for small-town independent restaurants: local SEO, getting found on Google, direct ordering, and websites that fill tables.",
};

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

export default function BlogIndex() {
  return (
    <KukieShell>
      {/* ── HERO HEADER ─────────────────────────────────────── */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-panel">
            <div className="rv" style={{ maxWidth: 720 }}>
              <span className="eyebrow">BLOG</span>
              <h1 style={{ fontSize: "clamp(2.6rem,5.4vw,4.4rem)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.045em", margin: "14px 0 20px" }}>
                Ideas for <span className="accent">filling more tables.</span>
              </h1>
              <p className="sub" style={{ maxWidth: 560 }}>
                Practical, no-jargon restaurant-marketing advice for small-town owners. How to get found on Google, keep
                more of every order, and turn first-timers into regulars, from the people who do it for a living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── POST GRID ───────────────────────────────────────── */}
      <div className="wash">
        <section className="block">
          <div className="inner">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 18 }}>
              {POSTS.map((post) => (
                <a key={post.slug} className="card rv" style={{ padding: 26, display: "flex", flexDirection: "column" }} href={`/blog/${post.slug}`}>
                  <span className="pill amber">
                    <span className="dot" />
                    {post.category}
                  </span>
                  <h3
                    style={{
                      fontSize: "clamp(1.25rem,2vw,1.55rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.22,
                      color: "var(--ink)",
                      margin: "16px 0 10px",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p style={{ color: "var(--body)", fontSize: 15, lineHeight: 1.65, margin: "0 0 20px" }}>{post.excerpt}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginTop: "auto" }}>
                    <span style={{ fontSize: 13, color: "var(--faint)" }}>
                      {formatDate(post.date)} · {post.readMins} min read
                    </span>
                    <span className="btn-text">
                      Read more <Arrow />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </KukieShell>
  );
}

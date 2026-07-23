"use client";

const DIRECTIONS: {
  href: string;
  name: string;
  tag: string;
  desc: string;
  bg: string;
  fg: string;
  accent: string;
  serif: boolean;
}[] = [
  {
    href: "/",
    name: "Current",
    tag: "Live",
    desc: "The editorial warm-broadsheet site currently in place. Source Serif and Work Sans, forest and terracotta, sticky nav.",
    bg: "#1e3a2f",
    fg: "#fff8f4",
    accent: "#df8752",
    serif: true,
  },
  {
    href: "/classic",
    name: "Classic",
    tag: "Proven",
    desc: "The conventional, high-converting layout popular marketing and SaaS companies use. Centered hero, feature grid, stats band, testimonials, pricing, FAQ. Safe and familiar.",
    bg: "#fff8f4",
    fg: "#1e3a2f",
    accent: "#df8752",
    serif: false,
  },
  {
    href: "/outcomes",
    name: "Outcomes",
    tag: "Benefit-led",
    desc: "Messaging led purely by what the restaurant gets — more tables, more catering, more regulars. How it works and what's included are demoted to quiet secondary detail.",
    bg: "#1e3a2f",
    fg: "#fff8f4",
    accent: "#df8752",
    serif: true,
  },
  {
    href: "/modernist",
    name: "Bold Modernist",
    tag: "Premium",
    desc: "Huge tight type, high contrast, full-viewport blocks, terracotta used loudly but rarely. Confident agency energy.",
    bg: "#07241a",
    fg: "#fff8f4",
    accent: "#df8752",
    serif: false,
  },
  {
    href: "/dashboard",
    name: "Dashboard-led",
    tag: "Concrete",
    desc: "Shows the actual monthly report and deliverables. Metric cards, a hand-built chart, sample site and Google profile previews. Answers what am I paying for.",
    bg: "#f4ede1",
    fg: "#1e3a2f",
    accent: "#3b6933",
    serif: false,
  },
  {
    href: "/story",
    name: "Story Scroll",
    tag: "Human",
    desc: "One restaurant's journey from invisible to booked out. Narrow column, chapter markers, big pull-quotes, full-bleed color blocks. Emotional and trust-building.",
    bg: "#faf3e8",
    fg: "#1e3a2f",
    accent: "#b5551f",
    serif: true,
  },
];

export default function PreviewsIndex() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--ivory, #fff8f4)",
        color: "var(--charcoal, #221a11)",
        fontFamily: "var(--font-body, system-ui, sans-serif)",
        padding: "72px 24px 120px",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--amber, #df8752)",
              marginBottom: 14,
            }}
          >
            Main Street Compass
          </div>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: 900,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: "var(--forest, #1e3a2f)",
              margin: 0,
            }}
          >
            Five design directions.
          </h1>
          <p
            style={{
              marginTop: 16,
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--charcoal, #221a11)",
              opacity: 0.65,
              maxWidth: 560,
            }}
          >
            The same business, the same content, five different treatments. Open
            each to compare. The floating switcher at the bottom jumps between
            them from anywhere.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {DIRECTIONS.map((d) => (
            <a
              key={d.href}
              href={d.href}
              className="lift"
              style={{
                textDecoration: "none",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid rgba(34,26,17,0.1)",
                background: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  background: d.bg,
                  color: d.fg,
                  padding: "28px 24px 30px",
                  minHeight: 128,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    alignSelf: "flex-start",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: d.accent,
                    border: `1px solid ${d.accent}`,
                    borderRadius: 999,
                    padding: "3px 10px",
                  }}
                >
                  {d.tag}
                </span>
                <div
                  style={{
                    fontFamily: d.serif
                      ? "var(--font-display, Georgia, serif)"
                      : "var(--font-body, system-ui, sans-serif)",
                    fontSize: 26,
                    fontWeight: d.serif ? 700 : 800,
                    letterSpacing: d.serif ? "-0.01em" : "-0.02em",
                    lineHeight: 1.05,
                    marginTop: 20,
                  }}
                >
                  {d.name}
                </div>
              </div>
              <div style={{ padding: "20px 24px 24px", flex: 1 }}>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: "var(--charcoal, #221a11)",
                    opacity: 0.68,
                    margin: 0,
                  }}
                >
                  {d.desc}
                </p>
                <div
                  style={{
                    marginTop: 18,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--forest, #1e3a2f)",
                  }}
                >
                  View this version
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

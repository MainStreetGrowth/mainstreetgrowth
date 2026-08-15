import SiteNav from "./_components/SiteNav";
import SiteFooter from "./_components/SiteFooter";
import { theme as T } from "./_lib/theme";

const Arrow = () => (
  <svg
    width="15"
    height="15"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main
        style={{
          background: T.cream,
          color: T.ink,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "clamp(72px,12vw,140px) clamp(20px,5vw,24px)",
          minHeight: "62vh",
        }}
      >
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div
            className="font-display"
            style={{
              fontSize: "clamp(4.5rem,16vw,8rem)",
              fontStyle: "italic",
              fontWeight: 800,
              color: T.green,
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              margin: 0,
            }}
          >
            404
          </div>
          <h1
            style={{
              fontSize: "clamp(1.9rem,5vw,2.8rem)",
              fontWeight: 800,
              color: T.ink,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              margin: "22px 0 14px",
            }}
          >
            Page not found
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: T.muted,
              margin: "0 auto 34px",
              maxWidth: 420,
            }}
          >
            The page you&apos;re looking for moved or never existed. Let&apos;s get you back on
            the map.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a
              href="/"
              style={{
                background: T.green,
                color: T.onInk,
                padding: "15px 28px",
                borderRadius: 4,
                fontSize: 15,
                fontWeight: 800,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
              }}
            >
              Back home <Arrow />
            </a>
            <a
              href="/services"
              style={{
                color: T.ink,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                borderBottom: `2px solid rgba(30,58,47,0.25)`,
                paddingBottom: 3,
              }}
            >
              Our services
            </a>
            <a
              href="/contact"
              style={{
                color: T.ink,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
                borderBottom: `2px solid rgba(30,58,47,0.25)`,
                paddingBottom: 3,
              }}
            >
              Contact us
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

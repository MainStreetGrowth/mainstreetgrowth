import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Main Street Compass: Get Found. Get Customers. Grow.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const cream = "#fff8f4";
  const ink = "#1e3a2f";
  const sage = "#86a496";
  const terracotta = "#df8752";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: ink,
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              border: `3px solid ${sage}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: sage,
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            ✦
          </div>
          <div style={{ color: cream, fontSize: 30, fontWeight: 700, letterSpacing: "-0.01em" }}>
            Main Street Compass
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: cream,
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 920,
            }}
          >
            Get found. Get customers. Grow.
          </div>
          <div style={{ color: "rgba(255,248,244,0.72)", fontSize: 32, marginTop: 26, maxWidth: 860, lineHeight: 1.4 }}>
            Done-for-you digital marketing for small-town restaurants. From $200/month.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 40, height: 4, background: terracotta }} />
          <div style={{ color: sage, fontSize: 24, fontWeight: 600 }}>
            Mississippi &amp; the Southeast
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

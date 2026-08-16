"use client";
import { usePathname } from "next/navigation";
import { theme as T } from "../_lib/theme";

/* Floating switch between the two homepage variants.
   Only renders on "/" (warm) and "/light" (clean white). */
export default function VariantToggle() {
  const pathname = usePathname();
  if (pathname !== "/" && pathname !== "/light") return null;
  const onLight = pathname === "/light";

  const pill = (active: boolean): React.CSSProperties => ({
    padding: "7px 14px",
    borderRadius: 999,
    fontSize: 12.5,
    fontWeight: 700,
    textDecoration: "none",
    color: active ? T.onInk : T.ink,
    background: active ? T.ink : "transparent",
    transition: "background 0.15s, color 0.15s",
    whiteSpace: "nowrap",
  });

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        gap: 2,
        padding: 4,
        borderRadius: 999,
        background: "rgba(255,248,244,0.92)",
        border: "1px solid rgba(34,26,17,0.12)",
        boxShadow: "0 6px 24px rgba(34,26,17,0.16)",
        backdropFilter: "saturate(1.1) blur(6px)",
      }}
      role="group"
      aria-label="Homepage style"
    >
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: T.muted, padding: "0 8px 0 10px" }}>
        Style
      </span>
      <a href="/" style={pill(!onLight)} aria-current={!onLight ? "page" : undefined}>Warm</a>
      <a href="/light" style={pill(onLight)} aria-current={onLight ? "page" : undefined}>Clean</a>
    </div>
  );
}

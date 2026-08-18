"use client";
import { usePathname } from "next/navigation";
import { theme as T } from "../_lib/theme";

/* Floating switch between the homepage variants:
   "/" (warm, main), "/light" (kukie-style green), "/blue" (kukie-style blue). */
const ROUTES = ["/", "/light", "/blue", "/terracotta", "/plum", "/teal"] as const;

export default function VariantToggle() {
  const pathname = usePathname();
  if (!ROUTES.includes(pathname as (typeof ROUTES)[number])) return null;

  const pill = (href: string, label: string) => {
    const active = pathname === href;
    return (
      <a
        key={href}
        href={href}
        aria-current={active ? "page" : undefined}
        style={{
          padding: "7px 14px",
          borderRadius: 999,
          fontSize: 12.5,
          fontWeight: 700,
          textDecoration: "none",
          color: active ? T.onInk : T.ink,
          background: active ? T.ink : "transparent",
          transition: "background 0.15s, color 0.15s",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </a>
    );
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 95,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        maxWidth: "calc(100vw - 24px)",
        gap: 2,
        padding: 4,
        borderRadius: 22,
        background: "rgba(255,248,244,0.94)",
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
      {pill("/", "Warm")}
      {pill("/light", "Green")}
      {pill("/blue", "Blue")}
      {pill("/terracotta", "Terracotta")}
      {pill("/plum", "Plum")}
      {pill("/teal", "Teal")}
    </div>
  );
}

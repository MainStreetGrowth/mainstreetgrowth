"use client";
import { usePathname } from "next/navigation";

const LINKS: { href: string; label: string }[] = [
  { href: "/", label: "Current" },
  { href: "/classic", label: "Classic" },
  { href: "/outcomes", label: "Outcomes" },
  { href: "/modernist", label: "Modernist" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/story", label: "Story" },
];

export default function PreviewSwitcher() {
  const pathname = usePathname();

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: 4,
        padding: 4,
        borderRadius: 999,
        background: "rgba(7,36,26,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 8px 28px rgba(0,0,0,0.28)",
        fontFamily: "var(--font-body, system-ui, sans-serif)",
        maxWidth: "calc(100vw - 24px)",
        overflowX: "auto",
      }}
    >
      <span
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(255,248,244,0.4)",
          padding: "0 8px",
          whiteSpace: "nowrap",
        }}
      >
        Preview
      </span>
      {LINKS.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <a
            key={href}
            href={href}
            style={{
              fontSize: 12.5,
              fontWeight: 700,
              padding: "7px 14px",
              borderRadius: 999,
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "background 0.15s, color 0.15s",
              background: active ? "var(--amber, #df8752)" : "transparent",
              color: active ? "#2a1408" : "rgba(255,248,244,0.75)",
            }}
          >
            {label}
          </a>
        );
      })}
    </div>
  );
}

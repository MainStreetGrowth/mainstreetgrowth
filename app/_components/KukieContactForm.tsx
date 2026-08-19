"use client";
import { useState } from "react";

type State = "idle" | "sending" | "ok" | "error";

const Arrow = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function KukieContactForm() {
  const [form, setForm] = useState({ name: "", business: "", email: "", phone: "", message: "", company: "" });
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  const up = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      setState("ok");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const inp: React.CSSProperties = {
    width: "100%",
    padding: "13px 14px",
    borderRadius: 12,
    border: "1px solid var(--line)",
    fontSize: 14.5,
    color: "var(--ink)",
    background: "var(--mock)",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
  };
  const label: React.CSSProperties = {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--faint)",
    marginBottom: 6,
  };
  const cardStyle: React.CSSProperties = {
    background: "#fff",
    border: "1px solid var(--line)",
    borderRadius: 20,
    boxShadow: "0 2px 6px rgba(0,0,0,.04), 0 22px 44px -26px rgba(0,0,0,.20)",
    padding: "clamp(24px,4vw,36px)",
  };

  if (state === "ok") {
    return (
      <div style={{ ...cardStyle, textAlign: "center" }}>
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: "50%",
            background: "color-mix(in srgb, var(--accent) 14%, transparent)",
            color: "var(--accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 18px",
          }}
        >
          <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 style={{ fontSize: 24, fontWeight: 800, color: "var(--ink)", margin: "0 0 8px", letterSpacing: "-0.02em" }}>
          Request received.
        </h3>
        <p style={{ fontSize: 15, color: "var(--body)", lineHeight: 1.7, margin: "0 0 10px" }}>
          We&apos;ll review your online presence and get back to you within one business day.
        </p>
        <p style={{ fontSize: 14, color: "var(--faint)", margin: 0 }}>We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ ...cardStyle, display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--ink)", margin: "0 0 4px", letterSpacing: "-0.015em" }}>
          Tell us about your restaurant
        </h3>
        <p style={{ fontSize: 13, color: "var(--body)", margin: 0 }}>We&apos;ll audit your online presence before we call.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
        <div>
          <label style={label} htmlFor="cf-name">Your name *</label>
          <input id="cf-name" type="text" required value={form.name} onChange={up("name")} placeholder="Jane Smith" style={inp} />
        </div>
        <div>
          <label style={label} htmlFor="cf-business">Restaurant name *</label>
          <input id="cf-business" type="text" required value={form.business} onChange={up("business")} placeholder="Main Street Diner" style={inp} />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
        <div>
          <label style={label} htmlFor="cf-email">Email *</label>
          <input id="cf-email" type="email" required value={form.email} onChange={up("email")} placeholder="you@example.com" style={inp} />
        </div>
        <div>
          <label style={label} htmlFor="cf-phone">Phone</label>
          <input id="cf-phone" type="tel" value={form.phone} onChange={up("phone")} placeholder="(601) 555-0100" style={inp} />
        </div>
      </div>

      <div>
        <label style={label} htmlFor="cf-message">About your restaurant</label>
        <textarea
          id="cf-message"
          rows={4}
          value={form.message}
          onChange={up("message")}
          placeholder="e.g. Family BBQ in Hattiesburg, MS. We rely on word of mouth and want to grow."
          style={{ ...inp, resize: "vertical" }}
        />
      </div>

      {/* Honeypot — hidden from humans */}
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={up("company")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      {state === "error" && (
        <p
          role="alert"
          style={{
            fontSize: 13,
            color: "#a3271f",
            background: "rgba(163,39,31,0.08)",
            border: "1px solid rgba(163,39,31,0.2)",
            borderRadius: 10,
            padding: "10px 12px",
            margin: 0,
          }}
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="btn btn-primary"
        style={{
          width: "100%",
          justifyContent: "center",
          cursor: state === "sending" ? "default" : "pointer",
          opacity: state === "sending" ? 0.7 : 1,
        }}
      >
        {state === "sending" ? "Sending…" : (<>Get my free revenue audit <Arrow /></>)}
      </button>
      <p style={{ textAlign: "center", fontSize: 12, color: "var(--faint)", margin: 0 }}>
        No spam. No sales pressure. Just a conversation.
      </p>
    </form>
  );
}

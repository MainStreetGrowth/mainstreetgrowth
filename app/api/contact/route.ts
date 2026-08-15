import { NextResponse } from "next/server";

/* Host-agnostic contact endpoint.
   Sends the audit request by email via the Resend REST API (no SDK, so nothing
   is locked to a host or a package). Configure with env vars:
     RESEND_API_KEY  — your Resend API key (required to actually deliver)
     CONTACT_TO      — where submissions are emailed (default below)
     CONTACT_FROM    — verified sender, e.g. "Main Street Compass <hello@yourdomain>"
   To switch providers later, only this file changes — the UI stays the same.
   Without RESEND_API_KEY the endpoint logs the submission and returns success,
   so the form works in dev/preview before you add the key. */

function esc(s: unknown): string {
  return String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string)
  );
}

export async function POST(req: Request) {
  try {
    const data = await req.json().catch(() => ({}));
    const { name, business, email, phone, message, company } = data as Record<string, string>;

    // Honeypot: bots fill the hidden "company" field; humans don't.
    if (company) return NextResponse.json({ ok: true, delivered: false });

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json({ ok: false, error: "Please include your name and email." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "That email doesn't look right." }, { status: 400 });
    }

    const key = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO || "hello@mainstreetcompass.com";
    const from = process.env.CONTACT_FROM || "Main Street Compass <onboarding@resend.dev>";

    if (!key) {
      console.log("[contact] submission (RESEND_API_KEY not set):", { name, business, email, phone, message });
      return NextResponse.json({ ok: true, delivered: false });
    }

    const subject = `Revenue-audit request — ${name}${business ? " (" + business + ")" : ""}`;
    const html = `
      <h2 style="font-family:sans-serif">New revenue-audit request</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
        <tr><td style="padding:4px 12px 4px 0"><strong>Name</strong></td><td>${esc(name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0"><strong>Restaurant</strong></td><td>${esc(business || "—")}</td></tr>
        <tr><td style="padding:4px 12px 4px 0"><strong>Email</strong></td><td>${esc(email)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0"><strong>Phone</strong></td><td>${esc(phone || "—")}</td></tr>
      </table>
      <p style="font-family:sans-serif;font-size:14px"><strong>Message</strong><br/>${esc(message || "—").replace(/\n/g, "<br/>")}</p>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to, subject, html, reply_to: email }),
    });

    if (!res.ok) {
      console.error("[contact] provider error", res.status, await res.text().catch(() => ""));
      return NextResponse.json({ ok: false, error: "We couldn't send that right now. Please email us directly." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] unexpected error", err);
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 500 });
  }
}

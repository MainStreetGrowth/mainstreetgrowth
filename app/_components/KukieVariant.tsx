"use client";
import { useEffect, useRef } from "react";

/* ────────────────────────────────────────────────────────────────
   kukie-inspired homepage variant, ported from the standalone concept.
   One markup + scoped CSS; the palette (blue vs green) is supplied as
   CSS custom properties so both variants share everything else.
   ──────────────────────────────────────────────────────────────── */

type Variant = "green" | "blue";

const PALETTES: Record<Variant, React.CSSProperties> = {
  green: {
    ["--accent" as string]: "#3b6933",
    "--accent-dark": "#2f5426",
    "--accent-glow": "rgba(59,105,51,.7)",
    "--ink": "#17281f",
    "--body": "#4f5a51",
    "--faint": "#899487",
    "--line": "rgba(23,40,31,0.09)",
    "--line-soft": "rgba(23,40,31,0.05)",
    "--page": "#fbfaf6",
    "--mock": "#f5f3ec",
    "--star": "#e0913f",
    "--win-bg": "#e9f0e6",
    "--win-border": "#cfe0cc",
    "--photo": "linear-gradient(135deg,#dfe8e0,#e9dbc9)",
    "--dark":
      "radial-gradient(1500px 950px at 50% 54%, rgba(66,124,78,.16), transparent 60%)," +
      "radial-gradient(1200px 640px at 50% -4%, rgba(92,150,92,.10), transparent 58%)," +
      "radial-gradient(1700px 1100px at 50% 122%, rgba(0,0,0,.55), transparent 55%)," +
      "linear-gradient(180deg,#0b1c12 0%, #07140d 100%)",
    "--dark-card3": "rgba(103,176,96,.20)",
    "--accent-bright": "#8cb86e",
    "--p-blue-bg": "#e5efe2", "--p-blue-fg": "#2b5226",
    "--p-green-bg": "#e7efe9", "--p-green-fg": "#3f574c",
    "--p-amber-bg": "#fbe7d3", "--p-amber-fg": "#9c5220",
    "--p-purple-bg": "#f2ddca", "--p-purple-fg": "#8a441a",
    "--p-pink-bg": "#f6e6da", "--p-pink-fg": "#a5561f",
    "--wash":
      "radial-gradient(1400px 620px at 20% 0%, rgba(134,164,150,.20), transparent 60%)," +
      "radial-gradient(1300px 640px at 96% 4%, rgba(223,135,82,.12), transparent 60%)," +
      "linear-gradient(168deg, #eef2ec 0%, #f6f4ec 44%, #ffffff 100%)",
    "--hero-bg": "linear-gradient(103deg, #e7efe8 0%, #eef2ee 48%, #f6eee2 100%)",
    "--cta-bg": "linear-gradient(103deg, #e7efe8 0%, #eef2ee 50%, #f6eee2 100%)",
  } as React.CSSProperties,
  blue: {
    ["--accent" as string]: "#3a5bff",
    "--accent-dark": "#2b45d6",
    "--accent-glow": "rgba(58,91,255,.75)",
    "--ink": "#10132a",
    "--body": "#5a5f73",
    "--faint": "#8a8fa3",
    "--line": "rgba(16,19,42,0.08)",
    "--line-soft": "rgba(16,19,42,0.05)",
    "--page": "#f6f8fe",
    "--mock": "#f7f8fb",
    "--star": "#f4a935",
    "--win-bg": "#eef1fb",
    "--win-border": "#d3dbfb",
    "--photo": "linear-gradient(135deg,#c9d3f6,#e9dbc9)",
    "--dark":
      "radial-gradient(1500px 950px at 50% 54%, rgba(58,92,230,.16), transparent 60%)," +
      "radial-gradient(1200px 640px at 50% -4%, rgba(80,110,255,.10), transparent 58%)," +
      "radial-gradient(1700px 1100px at 50% 122%, rgba(0,0,0,.55), transparent 55%)," +
      "linear-gradient(180deg,#080b20 0%, #06081a 100%)",
    "--dark-card3": "rgba(58,91,255,.16)",
    "--accent-bright": "#6d8cff",
    "--p-blue-bg": "#e7ecff", "--p-blue-fg": "#2b45d6",
    "--p-green-bg": "#e2f4e6", "--p-green-fg": "#2f8a4a",
    "--p-amber-bg": "#fdf1d6", "--p-amber-fg": "#a5761a",
    "--p-purple-bg": "#efe7fb", "--p-purple-fg": "#6b4bbd",
    "--p-pink-bg": "#fce6ef", "--p-pink-fg": "#b83f77",
    "--wash":
      "radial-gradient(1400px 620px at 18% 0%, rgba(120,150,255,.16), transparent 60%)," +
      "radial-gradient(1300px 660px at 98% 4%, rgba(122,214,178,.16), transparent 60%)," +
      "linear-gradient(168deg, #edf0fb 0%, #f4f7fd 44%, #ffffff 100%)",
    "--hero-bg": "linear-gradient(103deg, #ecf0fb 0%, #eef2f7 48%, #e8f6ef 100%)",
    "--cta-bg": "linear-gradient(103deg, #ecf0fb 0%, #eef2f7 50%, #e8f6ef 100%)",
  } as React.CSSProperties,
};

const CSS = `
.kk{font-family:'Plus Jakarta Sans',system-ui,sans-serif;color:var(--ink);line-height:1.5;-webkit-font-smoothing:antialiased;background:#ffffff;min-height:100vh}
.kk .wash{background:var(--wash)}
.kk *{box-sizing:border-box;margin:0;padding:0}
.kk a{text-decoration:none;color:inherit}
.kk img{display:block;max-width:100%}
.kk .wrap{max-width:1600px;margin:0 auto;padding:0 clamp(18px,2.6vw,40px)}
.kk .inner{max-width:1340px;margin:0 auto;padding:0 clamp(18px,2.6vw,40px)}
.kk .btn{display:inline-flex;align-items:center;gap:9px;font-weight:700;font-size:15px;border-radius:12px;padding:14px 24px;cursor:pointer;border:none;transition:transform .15s, box-shadow .15s, background .15s}
.kk .btn-primary{background:var(--accent);color:#fff;box-shadow:0 12px 26px -12px var(--accent-glow)}
.kk .btn-primary:hover{background:var(--accent-dark);transform:translateY(-1px)}
.kk .btn-ghost{background:#fff;color:var(--ink);border:1px solid var(--line)}
.kk .btn-ghost:hover{background:var(--mock)}
.kk .btn-text{font-weight:700;font-size:15px;color:var(--ink);display:inline-flex;align-items:center;gap:7px}
.kk .btn-text:hover{color:var(--accent)}
.kk header.nav{position:sticky;top:0;z-index:90;background:rgba(255,255,255,.9);backdrop-filter:saturate(1.1) blur(10px);border-bottom:1px solid transparent;transition:border-color .2s}
.kk header.nav.scrolled{border-bottom:1px solid var(--line)}
.kk .nav-in{height:74px;display:flex;align-items:center;justify-content:space-between}
.kk .brand{display:flex;align-items:center;gap:10px;font-weight:800;font-size:18px;letter-spacing:-.02em}
.kk .brand .mark{width:30px;height:30px;border-radius:9px;background:var(--accent);display:flex;align-items:center;justify-content:center;color:#fff}
.kk .nav-links{display:flex;align-items:center;gap:30px}
.kk .nav-links a.link{font-size:14.5px;font-weight:600;color:var(--body);display:inline-flex;align-items:center;gap:5px}
.kk .nav-links a.link:hover{color:var(--ink)}
.kk .nav-cta{display:flex;align-items:center;gap:22px}
.kk .menu-btn{display:none;background:none;border:none;cursor:pointer;color:var(--ink)}
@media(max-width:900px){.kk .nav-links{display:none}.kk .menu-btn{display:flex}}
.kk .eyebrow{font-size:13px;font-weight:800;color:var(--accent);letter-spacing:.02em}
.kk .sec-head{text-align:center;max-width:700px;margin:0 auto 60px}
.kk .sec-head h2{font-size:clamp(2.1rem,4.6vw,3.4rem);font-weight:800;letter-spacing:-.035em;line-height:1.06;margin:14px 0 0}
.kk .sec-head p{font-size:17px;color:var(--body);margin:16px auto 0;max-width:540px}
.kk .accent{color:var(--accent)}
.kk .pill{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:700;padding:5px 11px;border-radius:999px;white-space:nowrap}
.kk .pill .dot{width:6px;height:6px;border-radius:999px}
.kk .pill.blue{background:var(--p-blue-bg);color:var(--p-blue-fg)} .kk .pill.blue .dot{background:var(--p-blue-fg)}
.kk .pill.green{background:var(--p-green-bg);color:var(--p-green-fg)} .kk .pill.green .dot{background:var(--p-green-fg)}
.kk .pill.amber{background:var(--p-amber-bg);color:var(--p-amber-fg)} .kk .pill.amber .dot{background:var(--p-amber-fg)}
.kk .pill.purple{background:var(--p-purple-bg);color:var(--p-purple-fg)} .kk .pill.purple .dot{background:var(--p-purple-fg)}
.kk .pill.pink{background:var(--p-pink-bg);color:var(--p-pink-fg)} .kk .pill.pink .dot{background:var(--p-pink-fg)}
.kk .hero{padding:22px 0 12px}
.kk .hero-panel{border-radius:34px;overflow:hidden;padding:clamp(44px,5vw,72px) clamp(28px,4vw,64px);background:var(--hero-bg)}
.kk .hero-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:56px;align-items:center}
.kk .hero h1{font-size:clamp(3.4rem,5.8vw,5.4rem);font-weight:800;line-height:.96;letter-spacing:-.05em;margin:0 0 22px}
.kk .hero .sub{font-size:clamp(1.05rem,1.4vw,1.25rem);color:var(--body);line-height:1.55;max-width:460px;margin:0 0 30px}
.kk .badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.72);border:1px solid var(--line);padding:6px 14px;border-radius:999px;font-size:12.5px;font-weight:700;color:var(--body);margin-bottom:22px;backdrop-filter:blur(6px)}
.kk .badge .dot{width:7px;height:7px;border-radius:999px;background:var(--accent)}
.kk .hero-actions{display:flex;gap:20px;flex-wrap:wrap;align-items:center}
.kk .trust{display:flex;gap:20px;flex-wrap:wrap;margin-top:26px;font-size:13.5px;color:var(--body)}
.kk .trust span{display:flex;align-items:center;gap:7px}
.kk .trust .ck{color:var(--p-green-fg);display:inline-flex}
.kk .hero-visual{position:relative}
.kk .photo{border-radius:26px;overflow:hidden;box-shadow:var(--shadow, 0 4px 10px rgba(0,0,0,.04), 0 26px 54px -26px rgba(0,0,0,.22));border:1px solid rgba(255,255,255,.6);aspect-ratio:5/6;background:var(--photo)}
.kk .photo img{width:100%;height:100%;object-fit:cover}
.kk .float{position:absolute;background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:0 8px 22px -8px rgba(0,0,0,.28);padding:10px 13px;display:flex;align-items:center;gap:10px}
.kk .float .ic{width:30px;height:30px;border-radius:999px;display:flex;align-items:center;justify-content:center}
.kk .float .t1{font-size:12.5px;font-weight:800}
.kk .float .t2{font-size:11px;color:var(--faint)}
.kk .float.res{top:-20px;right:-18px}
.kk .float.rev{bottom:-20px;left:-22px}
@media(max-width:900px){.kk .hero-grid{grid-template-columns:1fr;gap:44px}.kk .hero h1{font-size:3.1rem}.kk .float.res{right:8px}.kk .float.rev{left:6px}}
.kk .marquee{padding:clamp(48px,6vw,80px) 0 clamp(56px,7vw,88px)}
.kk .marquee p{text-align:center;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.14em;color:var(--faint);margin-bottom:26px}
.kk .marq-mask{overflow:hidden;-webkit-mask-image:linear-gradient(to right,transparent,#000 12%,#000 88%,transparent)}
.kk .marq-track{display:flex;align-items:center;gap:60px;width:max-content;padding:8px 0;animation:kkscroll 34s linear infinite}
.kk .marq-track span{font-size:clamp(19px,1.7vw,24px);font-weight:600;font-style:italic;color:var(--ink);opacity:.34;white-space:nowrap;line-height:1.3}
@keyframes kkscroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.kk section.block{padding:92px 0}
.kk .card{background:#fff;border:1px solid var(--line);border-radius:24px;box-shadow:0 2px 6px rgba(0,0,0,.04), 0 16px 34px -22px rgba(0,0,0,.16)}
.kk .feat-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.kk .feat{padding:28px;display:flex;flex-direction:column;gap:22px}
.kk .feat.span{grid-column:span 2;flex-direction:row}
.kk .feat .side{flex:1 1 0}
.kk .feat .chead{display:flex;align-items:center;gap:11px;margin-bottom:16px}
.kk .feat .chip{width:40px;height:40px;border-radius:12px;display:flex;align-items:center;justify-content:center}
.kk .feat .clabel{font-size:11.5px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--faint)}
.kk .feat h3{font-size:22px;font-weight:800;letter-spacing:-.02em;line-height:1.18;margin:0 0 8px}
.kk .feat p{font-size:14.5px;color:var(--body);line-height:1.6;margin:0}
.kk .mock{flex:1 1 0;background:var(--mock);border:1px solid var(--line);border-radius:16px;padding:16px;display:flex;flex-direction:column;justify-content:center;gap:6px}
.kk .mock .bignum{display:flex;align-items:baseline;gap:8px;margin-bottom:10px}
.kk .mock .bignum b{font-size:clamp(2rem,3.4vw,2.7rem);font-weight:800;letter-spacing:-.04em;line-height:1}
.kk .mock .bignum span{font-size:12.5px;color:var(--faint);font-weight:600}
.kk .mrow{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:9px 12px;border-radius:10px}
.kk .mrow.strong{background:#fff;border:1px solid var(--line);box-shadow:0 2px 6px rgba(0,0,0,.04)}
.kk .mrow .l{font-size:13px;color:var(--body);display:flex;align-items:center;gap:8px}
.kk .mrow.strong .l{font-weight:700;color:var(--ink)}
.kk .mono{font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
.kk .avatars{display:flex}
.kk .avatars .av{width:34px;height:34px;border-radius:999px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11.5px;font-weight:800;border:2px solid var(--mock);margin-left:-9px}
.kk .avatars .av:first-child{margin-left:0}
@media(max-width:900px){.kk .feat-grid{grid-template-columns:1fr}.kk .feat.span{grid-column:auto;flex-direction:column}}
.kk .roi-grid{display:grid;grid-template-columns:1fr 1fr 1.1fr;gap:16px}
.kk .roi{padding:30px 28px}
.kk .roi .lab{margin-bottom:14px}
.kk .roi .num{font-size:clamp(2.2rem,4vw,3rem);font-weight:800;letter-spacing:-.035em;line-height:1;margin-bottom:8px}
.kk .roi.win{background:var(--win-bg);border-color:var(--win-border)}
.kk .roi.win .num{font-size:clamp(2.6rem,5vw,3.6rem)}
.kk .roi .note{font-size:12.5px;color:var(--body)}
.kk .roi-aside{margin-top:16px;padding:22px 28px;display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}
.kk .roi-aside p{font-size:15px;color:var(--ink)} .kk .roi-aside span{font-size:12px;color:var(--faint);max-width:220px}
@media(max-width:900px){.kk .roi-grid{grid-template-columns:1fr}}
.kk .three{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
@media(max-width:900px){.kk .three{grid-template-columns:1fr}}
.kk .step{padding:28px}
.kk .step .n{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:13px;background:var(--p-blue-bg);color:var(--accent);font-weight:800;font-size:16px;margin-bottom:18px}
.kk .step h3{font-size:19px;font-weight:800;letter-spacing:-.015em;margin:0 0 9px}
.kk .step p{font-size:14.5px;color:var(--body);line-height:1.65}
.kk .tcard{padding:26px;display:flex;flex-direction:column}
.kk .stars{display:flex;gap:3px;color:var(--star);margin-bottom:16px}
.kk .tcard q{font-size:15.5px;color:var(--ink);line-height:1.6;font-weight:500;quotes:none;flex:1;margin-bottom:22px}
.kk .tperson{display:flex;align-items:center;gap:11px;padding-top:18px;border-top:1px solid var(--line)}
.kk .tperson .av{width:40px;height:40px;border-radius:999px;color:#fff;font-weight:800;font-size:14px;display:flex;align-items:center;justify-content:center}
.kk .tperson .nm{font-weight:700;font-size:14px} .kk .tperson .rs{color:var(--body);font-size:13px}
.kk .price-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;max-width:860px;margin:0 auto}
@media(max-width:900px){.kk .price-grid{grid-template-columns:1fr}}
.kk .plan{padding:34px}
.kk .plan.hot{border:2px solid var(--accent);position:relative}
.kk .plan .badge2{position:absolute;top:-13px;left:34px}
.kk .plan .amt{margin:18px 0 4px} .kk .plan .amt b{font-size:52px;font-weight:800;letter-spacing:-.03em} .kk .plan .amt span{font-size:16px;color:var(--body);margin-left:4px}
.kk .plan .desc{font-size:14px;color:var(--body);margin-bottom:24px}
.kk .plan ul{list-style:none;display:flex;flex-direction:column;gap:12px;margin-bottom:28px}
.kk .plan li{display:flex;align-items:center;gap:11px;font-size:14.5px}
.kk .plan li .ck{width:20px;height:20px;border-radius:999px;background:var(--p-blue-bg);color:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.kk .cta-panel{border-radius:34px;overflow:hidden;padding:clamp(44px,5vw,72px) clamp(28px,4vw,64px);text-align:center;background:var(--cta-bg)}
.kk .cta-panel h2{font-size:clamp(2.2rem,4.8vw,3.6rem);font-weight:800;letter-spacing:-.035em;line-height:1.04;margin:14px 0 0}
.kk .cta-panel p{font-size:17px;color:var(--body);margin:16px auto 30px;max-width:520px}
.kk footer{border-top:1px solid var(--line);padding:56px 0 0}
.kk .foot-grid{display:flex;flex-wrap:wrap;justify-content:space-between;gap:56px}
.kk .foot-brand{max-width:320px}
.kk .foot-brand p{font-size:14px;color:var(--body);line-height:1.7;margin:14px 0 18px}
.kk .foot-cols{display:flex;gap:64px;flex-wrap:wrap}
.kk .foot-cols h4{font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--faint);margin-bottom:12px}
.kk .foot-cols a{display:block;font-size:14px;color:var(--body);line-height:2}
.kk .foot-bottom{margin-top:44px;padding:20px 0;border-top:1px solid var(--line);display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:12.5px;color:var(--faint)}
.kk .foot-bottom a{color:var(--faint);margin-left:18px}
.kk .rv{opacity:0;transform:translateY(16px);transition:opacity .6s ease, transform .6s ease}
.kk .rv.in{opacity:1;transform:none}
/* Dark contrast band (How it works) */
.kk section.dark{background:var(--dark);padding:clamp(72px,8vw,108px) 0}
.kk section.dark .eyebrow{color:var(--accent-bright)}
.kk section.dark .sec-head h2{color:#fff;white-space:nowrap;font-size:clamp(1.9rem,3.8vw,3rem)}
@media(max-width:640px){.kk section.dark .sec-head h2{white-space:normal;font-size:1.9rem}}
.kk section.dark .sec-head p{color:rgba(255,255,255,.62)}
.kk section.dark .accent{color:var(--accent-bright)}
.kk section.dark .card.step{background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.09);box-shadow:none}
.kk section.dark .step h3{color:#fff}
.kk section.dark .step p{color:rgba(255,255,255,.6)}
.kk section.dark .step .n{background:rgba(255,255,255,.1);color:var(--accent-bright)}
/* Third "Go live" card: glassy accent fill + animated border-beam travelling the edge */
@property --kkangle{syntax:"<angle>";initial-value:0deg;inherits:false}
@keyframes kkspin{to{--kkangle:360deg}}
.kk section.dark .three>.card.step:last-child{position:relative;isolation:isolate;background:linear-gradient(180deg, var(--dark-card3), rgba(255,255,255,.03));border:1px solid rgba(255,255,255,.14)}
.kk section.dark .three>.card.step:last-child::before{content:"";position:absolute;inset:0;border-radius:24px;padding:1.6px;background:conic-gradient(from var(--kkangle), transparent 58%, var(--accent-bright) 80%, #ffffff 90%, var(--accent-bright) 100%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude;animation:kkspin 4.5s linear infinite;pointer-events:none}
/* Hero fits the viewport height on desktop so the photo never crops */
@media(min-width:900px){
  .kk .hero{padding:14px 0 12px}
  .kk .hero-panel{display:flex;align-items:center;min-height:calc(100dvh - 108px)}
  .kk .hero-grid{width:100%}
  .kk .photo{aspect-ratio:auto;height:calc(100dvh - 234px);min-height:340px}
}
@media(prefers-reduced-motion:reduce){.kk .rv{opacity:1;transform:none;transition:none}.kk .marq-track{animation:none}.kk section.dark .three>.card.step:last-child::before{animation:none}}
`;

const STAR = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 20.5l1.4-6.8L2.2 9l6.9-.7L12 2z"/></svg>`;
const STAR5 = STAR.repeat(5);
const ARROW = `<svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.4"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>`;
const CK = `<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>`;

const BODY = `
<header class="nav" data-nav>
  <div class="wrap nav-in">
    <a href="#" class="brand"><span class="mark"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="9"/><path d="M15 9l-2.5 5.5L9 15l2.5-5.5z" fill="currentColor" stroke="none"/></svg></span>Main Street Compass</a>
    <nav class="nav-links">
      <a class="link" href="#outcomes">Services</a>
      <a class="link" href="#pricing">Pricing</a>
      <a class="link" href="/about">About</a>
      <a class="link" href="/blog">Blog</a>
      <a class="link" href="/faq">FAQ</a>
    </nav>
    <div class="nav-cta nav-links">
      <a class="link" href="tel:+16015550100">Call us</a>
      <a class="btn btn-primary" href="/contact">Get a free audit ${ARROW}</a>
    </div>
    <button class="menu-btn" aria-label="Menu"><svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg></button>
  </div>
</header>

<section class="hero">
  <div class="wrap">
    <div class="hero-panel">
      <div class="hero-grid">
        <div>
          <div class="badge rv"><span class="dot"></span> Independent restaurants · MS &amp; the Southeast</div>
          <h1 class="rv">More full tables. More catering. <span class="accent">More regulars.</span></h1>
          <p class="sub rv">Your next customer is already searching. We make sure they find you first, book the table, and come back again. You just cook.</p>
          <div class="hero-actions rv">
            <a class="btn btn-primary" href="#contact">Get a free revenue audit ${ARROW}</a>
            <a class="btn-text" href="#outcomes">See what you get</a>
          </div>
          <div class="trust rv">
            <span><span class="ck">${CK}</span> No setup fees</span>
            <span><span class="ck">${CK}</span> No contracts</span>
            <span><span class="ck">${CK}</span> Live in ~2 weeks</span>
          </div>
        </div>
        <div class="hero-visual rv">
          <div class="photo">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80" alt="A warm, busy neighborhood restaurant" />
          </div>
          <div class="float res">
            <span class="ic" style="background:var(--p-green-bg);color:var(--p-green-fg)">${CK}</span>
            <div><div class="t1">New reservation</div><div class="t2">Table for 4 · just now</div></div>
          </div>
          <div class="float rev">
            <span class="stars" style="margin:0">${STAR5}</span>
            <div><div class="t1">New 5-star review</div><div class="t2">2 minutes ago</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="marquee">
  <div class="inner">
    <p>Trusted by local restaurants across the region</p>
    <div class="marq-mask"><div class="marq-track" data-marq></div></div>
  </div>
</section>

<div class="wash">
<section class="block" id="outcomes">
  <div class="inner">
    <div class="sec-head rv">
      <span class="eyebrow">WHAT YOU GET</span>
      <h2>Everything you need to <span class="accent">fill more tables.</span></h2>
      <p>Four outcomes, one system, built and managed for you.</p>
    </div>
    <div class="feat-grid">
      <div class="card feat span rv">
        <div class="side">
          <div class="chead"><span class="chip" style="background:var(--p-blue-bg);color:var(--accent)"><svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><circle cx="11" cy="11" r="8"/><path stroke-linecap="round" d="M21 21l-4.35-4.35"/></svg></span><span class="clabel">Search</span></div>
          <h3>Show up first when locals search</h3>
          <p>When someone nearby searches for a place to eat, you are the one they find, not your competitor down the street. First page of Google, first pin on the map, first choice for dinner.</p>
        </div>
        <div class="mock">
          <div class="bignum"><b style="color:var(--accent)">80%</b><span>search online first</span></div>
          <div class="mrow"><span class="l mono"><svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" style="vertical-align:-2px;margin-right:4px"><circle cx="11" cy="11" r="7"/><path stroke-linecap="round" d="M21 21l-4-4"/></svg>best bbq near me</span></div>
          <div class="mrow strong"><span class="l"><span style="color:var(--star);display:inline-flex">${STAR}</span>Your restaurant</span><span class="pill blue"><span class="dot"></span>Ranked #1</span></div>
          <div class="mrow"><span class="l">Competitor down the street</span><span style="font-size:12px;color:var(--faint)">page 2</span></div>
        </div>
      </div>
      <div class="card feat rv">
        <div>
          <div class="chead"><span class="chip" style="background:var(--p-green-bg);color:var(--p-green-fg)"><svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M4 10h16M4 10l1-4h14l1 4M4 10v2m16-2v2M6 12v6m12-6v6"/></svg></span><span class="clabel">Tables</span></div>
          <h3>Fill your slow nights</h3>
          <p>Turn empty Tuesday tables into booked ones. Five extra tables a week at an $80 average is about $1,600 more every month.</p>
        </div>
        <div class="mock">
          <div class="bignum"><b style="color:var(--p-green-fg)">$1,600</b><span>extra a month</span></div>
          <div class="mrow strong"><span class="l">Fri · 7:00pm · Party of 4</span><span class="pill green"><span class="dot"></span>Booked</span></div>
          <div class="mrow strong"><span class="l">Sat · 6:30pm · Party of 6</span><span class="pill green"><span class="dot"></span>Booked</span></div>
        </div>
      </div>
      <div class="card feat rv">
        <div>
          <div class="chead"><span class="chip" style="background:var(--p-purple-bg);color:var(--p-purple-fg)"><svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="16" rx="2"/><path stroke-linecap="round" d="M3 9h18M8 3v4m8-4v4"/></svg></span><span class="clabel">Catering</span></div>
          <h3>Win catering and private events</h3>
          <p>Private events and catering spend 5 to 20 times more than a table. Two bookings a month at $750 is another $1,500 in your inbox.</p>
        </div>
        <div class="mock">
          <div class="bignum"><b style="color:var(--p-purple-fg)">5–20×</b><span>per booking</span></div>
          <div class="mrow strong"><span class="l">Rehearsal dinner · 30 pax</span><span class="pill purple"><span class="dot"></span>Lead</span></div>
          <div class="mrow"><span class="l">Est. value</span><span style="font-size:12.5px;font-weight:700;color:var(--p-purple-fg)">$1,500+</span></div>
        </div>
      </div>
      <div class="card feat span rv">
        <div class="side">
          <div class="chead"><span class="chip" style="background:var(--p-pink-bg);color:var(--p-pink-fg)"><svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M20.8 6.6a5.5 5.5 0 00-7.8 0L12 7.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 000-7.8z"/></svg></span><span class="clabel">Regulars</span></div>
          <h3>Turn first-timers into regulars</h3>
          <p>With your own email list, text list, and loyalty program, you bring your best customers back on your terms instead of hoping they remember you.</p>
        </div>
        <div class="mock" style="justify-content:center">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:12px">
            <div class="avatars">
              <span class="av" style="background:var(--accent)">TR</span>
              <span class="av" style="background:var(--p-green-fg)">ML</span>
              <span class="av" style="background:var(--p-purple-fg)">JP</span>
              <span class="av" style="background:var(--ink)">+9</span>
            </div>
            <span class="pill pink"><span class="dot"></span>+38% repeat</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="block" style="padding-top:0">
  <div class="inner">
    <div class="sec-head rv">
      <span class="eyebrow" style="color:var(--p-green-fg)">WHAT IT'S WORTH</span>
      <h2>About <span style="color:var(--p-green-fg)">$3,100 more</span> in your pocket, monthly.</h2>
      <p>A conservative picture of what stronger digital capture is worth to a typical small-town restaurant.</p>
    </div>
    <div class="roi-grid">
      <div class="card roi rv"><span class="pill green lab"><span class="dot"></span>More tables filled</span><div class="num" style="color:var(--p-green-fg)">$1,600</div><div class="note">5 tables/week × $80 × 4 weeks</div></div>
      <div class="card roi rv"><span class="pill green lab"><span class="dot"></span>Catering and events</span><div class="num" style="color:var(--p-green-fg)">$1,500</div><div class="note">2 bookings/month × $750 avg</div></div>
      <div class="card roi win rv"><span class="pill blue lab"><span class="dot"></span>In your pocket</span><div class="num" style="color:var(--accent)">~$3,100</div><div class="note">every month</div></div>
    </div>
    <div class="card roi-aside rv"><p>Your investment is just <b>$200–$300/month</b>, all done for you. One catering booking pays for months of service.</p><span>Illustrative estimates. Results vary by market and execution.</span></div>
  </div>
</section>

<section class="block" style="padding-top:0">
  <div class="inner">
    <div class="sec-head rv"><span class="eyebrow">WHAT RESTAURANTS SAY</span><h2>Real results, <span class="accent">real restaurants.</span></h2></div>
    <div class="three">
      <div class="card tcard rv"><div class="stars">${STAR5}</div><q>We went from invisible to showing up first in Google for our area. Our Friday nights are now fully booked weeks in advance.</q><div class="tperson"><span class="av" style="background:var(--accent)">T</span><div><div class="nm">Tommy R.</div><div class="rs">Red River Smokehouse · Natchez, MS</div></div></div></div>
      <div class="card tcard rv"><div class="stars">${STAR5}</div><q>I've wasted money on marketing before, so I was skeptical. Within 6 weeks we were getting 30 to 40 extra calls a month.</q><div class="tperson"><span class="av" style="background:var(--p-green-fg)">M</span><div><div class="nm">Maria L.</div><div class="rs">Delta Blues Café · Greenville, MS</div></div></div></div>
      <div class="card tcard rv"><div class="stars">${STAR5}</div><q>They built everything in two weeks and handled every detail. I didn't have to think about it once.</q><div class="tperson"><span class="av" style="background:var(--p-purple-fg)">J</span><div><div class="nm">James P.</div><div class="rs">Porch &amp; Table · Tupelo, MS</div></div></div></div>
    </div>
  </div>
</section>

<section class="block dark">
  <div class="inner">
    <div class="sec-head rv"><span class="eyebrow">HOW IT WORKS</span><h2>Up and running in three steps.</h2></div>
    <div class="three">
      <div class="card step rv"><span class="n">01</span><h3>We audit your revenue funnel</h3><p>We map exactly where customers are slipping away before we build anything.</p></div>
      <div class="card step rv"><span class="n">02</span><h3>We build your capture system</h3><p>Website, Google profile, local SEO, and ads. All live within two weeks.</p></div>
      <div class="card step rv"><span class="n">03</span><h3>You see results every month</h3><p>A clear monthly report. Calls, visits, reservations, and leads. No jargon.</p></div>
    </div>
  </div>
</section>

<section class="block" id="pricing">
  <div class="inner">
    <div class="sec-head rv"><span class="eyebrow">PRICING</span><h2>Simple, <span class="accent">transparent pricing.</span></h2><p>No setup fees. No long-term contracts. No surprises.<br><span style="white-space:nowrap">Cancel any time.</span></p></div>
    <div class="price-grid">
      <div class="card plan rv">
        <span class="pill amber">Starter</span>
        <div class="amt"><b>$200</b><span>/month</span></div>
        <div class="desc">Get found online</div>
        <ul>
          <li><span class="ck">${CK}</span>Professional website</li>
          <li><span class="ck">${CK}</span>Domain and hosting</li>
          <li><span class="ck">${CK}</span>Google Business Profile</li>
          <li><span class="ck">${CK}</span>Local SEO</li>
          <li><span class="ck">${CK}</span>Monthly report</li>
          <li><span class="ck">${CK}</span>2 content updates / month</li>
        </ul>
        <a class="btn btn-ghost" style="width:100%;justify-content:center" href="/contact">Get started</a>
      </div>
      <div class="card plan hot rv">
        <span class="badge2 pill blue"><span class="dot"></span>Most popular</span>
        <span class="pill blue">Growth</span>
        <div class="amt"><b>$300</b><span>/month</span></div>
        <div class="desc">Full revenue capture system</div>
        <ul>
          <li><span class="ck">${CK}</span>Everything in Starter</li>
          <li><span class="ck">${CK}</span>Google Ads management</li>
          <li><span class="ck">${CK}</span>Keyword targeting</li>
          <li><span class="ck">${CK}</span>Call and lead tracking</li>
          <li><span class="ck">${CK}</span>Catering landing page</li>
          <li><span class="ck">${CK}</span>Unlimited content updates</li>
        </ul>
        <a class="btn btn-primary" style="width:100%;justify-content:center" href="/contact">Get started ${ARROW}</a>
      </div>
    </div>
    <p style="text-align:center;font-size:14.5px;color:var(--body);margin-top:26px">Not sure which plan fits? <a href="/contact" style="color:var(--accent);font-weight:700">Let's talk.</a> We'll help you figure it out.</p>
  </div>
</section>

<section class="block" style="padding-top:12px" id="contact">
  <div class="wrap">
    <div class="cta-panel rv">
      <span class="eyebrow">GET STARTED</span>
      <h2>Let's fill your tables. <span class="accent">Starting with a free audit.</span></h2>
      <p>We'll audit your current online presence for free and show you exactly what's costing you customers. Before we even get on the phone.</p>
      <a class="btn btn-primary" href="/contact" style="font-size:16px;padding:16px 30px">Get a free revenue audit ${ARROW}</a>
    </div>
  </div>
</section>
</div>

<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot-brand">
        <a href="#" class="brand"><span class="mark"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="9"/></svg></span>Main Street Compass</a>
        <p>Customer acquisition for small-town restaurants. Serving Mississippi &amp; the Southeast.</p>
      </div>
      <div class="foot-cols">
        <div><h4>Explore</h4><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/about">About</a><a href="/blog">Blog</a><a href="/faq">FAQ</a><a href="/contact">Contact</a></div>
        <div><h4>Contact</h4><a href="tel:+16015550100">(601) 555-0100</a><a href="mailto:hello@mainstreetcompass.com">hello@mainstreetcompass.com</a><a href="#">Mississippi &amp; the Southeast</a></div>
      </div>
    </div>
    <div class="foot-bottom"><span>© ${new Date().getFullYear()} Main Street Compass. All rights reserved.</span><span><a href="/privacy">Privacy</a><a href="/terms">Terms</a></span></div>
  </div>
</footer>
`;

export default function KukieVariant({ variant }: { variant: Variant }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the Plus Jakarta Sans web font once.
    if (!document.getElementById("kk-font")) {
      const l = document.createElement("link");
      l.id = "kk-font";
      l.rel = "stylesheet";
      l.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
      document.head.appendChild(l);
    }

    const root = rootRef.current;
    if (!root) return;

    // Marquee fill
    const marq = root.querySelector("[data-marq]");
    if (marq && !marq.childElementCount) {
      const names = ["The Magnolia Café", "River Bend BBQ", "Cotton Row Diner", "Delta Blues Kitchen", "Porch & Table", "Red River Smokehouse", "Southern Roots Kitchen", "Main Street Diner"];
      marq.innerHTML = [...names, ...names].map((n) => `<span>${n}</span>`).join("");
    }

    // Sticky nav border on scroll
    const nav = root.querySelector("[data-nav]");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Reveal on scroll
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    root.querySelectorAll(".rv").forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = (Math.min(i % 4, 3) * 60) + "ms";
      io.observe(el);
    });

    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, [variant]);

  return (
    <div className="kk" ref={rootRef} style={PALETTES[variant]}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div dangerouslySetInnerHTML={{ __html: BODY }} />
    </div>
  );
}

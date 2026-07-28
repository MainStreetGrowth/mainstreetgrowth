"use client";
import { useEffect, useState } from "react";
import CompassMark from "../_components/CompassMark";

/* ─── Scroll reveal fallback (visible without JS) is handled by GSAP below ── */

const FOREST = "#07241a";
const FOREST_MID = "#1e3a2f";
const IVORY = "#fff8f4";
const AMBER = "#df8752";
const SAGE = "#86a496";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => {
    const check = () => setM(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);
  return m;
}

const CHAPTERS = [
  {
    n: "01", stat: "80%", label: "of diners search online first",
    title: "Show up first when locals search",
    body: "When someone nearby looks for a place to eat, you are the one they find — not the competitor down the street.",
    panel: FOREST_MID, accent: SAGE,
  },
  {
    n: "02", stat: "$1,600", label: "in extra table bookings a month",
    title: "Fill your slow nights",
    body: "Turn empty Tuesday tables into booked ones. Five extra tables a week at an $80 average is about $1,600 more every month.",
    panel: "#2b1a12", accent: AMBER,
  },
  {
    n: "03", stat: "5–20×", label: "more revenue per catering booking",
    title: "Win catering & private events",
    body: "Private events and catering jobs spend far more than a regular table. Two bookings a month at $750 is another $1,500.",
    panel: "#3a2a16", accent: AMBER,
  },
  {
    n: "04", stat: "∞", label: "reasons for regulars to return",
    title: "Turn first-timers into regulars",
    body: "With your own email and text list, you bring your best customers back on your terms — instead of hoping they remember.",
    panel: "#12271d", accent: SAGE,
  },
];

export default function Motion() {
  const mob = useIsMobile();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const w = window as unknown as {
      gsap?: any; ScrollTrigger?: any; Lenis?: any;
    };
    let lenis: any = null;
    let killed = false;
    const cleanups: Array<() => void> = [];

    const addScript = (src: string) =>
      new Promise<void>((res, rej) => {
        const el = document.createElement("script");
        el.src = src; el.async = true;
        el.setAttribute("data-motion", "1");
        el.onload = () => res();
        el.onerror = () => rej(new Error("load"));
        document.head.appendChild(el);
      });

    (async () => {
      try {
        if (!w.gsap) await addScript("https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js");
        if (!w.ScrollTrigger) await addScript("https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js");
        if (!reduce && !w.Lenis) await addScript("https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.min.js");
        if (killed) return;

        const gsap = w.gsap;
        const ScrollTrigger = w.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        if (!reduce && w.Lenis) {
          // Lenis requires its own CSS (scroll-behavior:auto, html/body height).
          if (!document.getElementById("lenis-css")) {
            const st = document.createElement("style");
            st.id = "lenis-css";
            st.textContent =
              "html.lenis,html.lenis body{height:auto}" +
              ".lenis.lenis-smooth{scroll-behavior:auto!important}" +
              ".lenis.lenis-smooth [data-lenis-prevent]{overscroll-behavior:contain}" +
              ".lenis.lenis-stopped{overflow:hidden}" +
              ".lenis.lenis-smooth iframe{pointer-events:none}";
            document.head.appendChild(st);
          }
          // autoRaf:false — GSAP's ticker is the single driver (no double-stepping).
          lenis = new w.Lenis({ lerp: 0.1, smoothWheel: true, autoRaf: false });
          lenis.on("scroll", ScrollTrigger.update);
          const rafFn = (t: number) => lenis && lenis.raf(t * 1000);
          gsap.ticker.add(rafFn);
          gsap.ticker.lagSmoothing(0);
          cleanups.push(() => gsap.ticker.remove(rafFn));
        }

        if (reduce) {
          ScrollTrigger.refresh();
          return; // leave content in its natural, visible state
        }

        // Hero line reveal (masked slide-up)
        gsap.from("[data-hero-line]", {
          yPercent: 120, opacity: 0, duration: 1.05, ease: "power4.out", stagger: 0.12, delay: 0.15,
        });

        // Generic reveals
        gsap.utils.toArray("[data-reveal]").forEach((el: any) => {
          gsap.from(el, {
            y: 44, opacity: 0, duration: 0.95, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 86%" },
          });
        });

        // Parallax drift
        gsap.utils.toArray("[data-parallax]").forEach((el: any) => {
          const sp = parseFloat(el.getAttribute("data-parallax") || "0.2");
          gsap.to(el, {
            yPercent: -sp * 100, ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          });
        });

        // Clip-path image reveals
        gsap.utils.toArray("[data-clip]").forEach((el: any) => {
          gsap.fromTo(el,
            { clipPath: "inset(0 0 100% 0)" },
            { clipPath: "inset(0 0 0% 0)", duration: 1.15, ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 82%" } });
        });

        // Sticky chapter index updates
        const idxEl = document.querySelector("[data-idx]");
        gsap.utils.toArray("[data-chapter]").forEach((el: any) => {
          ScrollTrigger.create({
            trigger: el, start: "top 55%", end: "bottom 55%",
            onToggle: (self: any) => {
              if (self.isActive && idxEl) idxEl.textContent = el.getAttribute("data-chapter");
            },
          });
        });

        // ROI count-up
        const roi = document.querySelector("[data-count]");
        if (roi) {
          const obj = { v: 0 };
          gsap.to(obj, {
            v: 3100, duration: 1.7, ease: "power2.out",
            scrollTrigger: { trigger: roi, start: "top 82%" },
            onUpdate: () => { roi.textContent = "~$" + Math.round(obj.v).toLocaleString(); },
          });
        }

        ScrollTrigger.refresh();
        cleanups.push(() => {
          ScrollTrigger.getAll().forEach((t: any) => t.kill());
        });
      } catch {
        /* CDN blocked or offline: content stays visible, page still works */
      }
    })();

    return () => {
      killed = true;
      cleanups.forEach((f) => f());
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div style={{ fontFamily: "var(--font-body,system-ui)", background: FOREST, color: IVORY }}>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "0 clamp(16px,4vw,40px)", background: "rgba(7,36,26,0.6)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", height: 66, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <CompassMark size={28} ring={IVORY} north={AMBER} south={IVORY} hub={FOREST} />
            <span className="font-display" style={{ fontWeight: 700, fontSize: 15, color: IVORY, letterSpacing: "-0.01em" }}>Main Street Compass</span>
          </a>
          <a href="#contact" style={{ border: `1px solid rgba(255,248,244,0.35)`, color: IVORY, padding: "9px 20px", borderRadius: 99, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Get started</a>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", padding: "0 clamp(16px,4vw,40px)" }}>
        <div aria-hidden="true" data-parallax="0.25" style={{ position: "absolute", right: "-4%", top: "10%", fontFamily: "var(--font-display,Georgia,serif)", fontSize: "clamp(180px,34vw,460px)", fontWeight: 900, letterSpacing: "-0.06em", color: "rgba(134,164,150,0.06)", lineHeight: 1, userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap" }}>FOUND</div>
        <div style={{ maxWidth: 1240, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ overflow: "hidden", marginBottom: 8 }}>
            <div data-hero-line style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: SAGE }}>Mississippi &amp; the Southeast</div>
          </div>
          <h1 className="font-display" style={{ fontSize: "clamp(2.8rem,7vw,6.2rem)", fontWeight: 900, lineHeight: 1.02, letterSpacing: "-0.035em", margin: "10px 0 0" }}>
            <span style={{ display: "block", overflow: "hidden" }}><span data-hero-line style={{ display: "block" }}>Your next customer</span></span>
            <span style={{ display: "block", overflow: "hidden" }}><span data-hero-line style={{ display: "block" }}>is already searching.</span></span>
            <span style={{ display: "block", overflow: "hidden" }}><span data-hero-line style={{ display: "block", fontStyle: "italic", color: AMBER }}>Help them find yours.</span></span>
          </h1>
          <div style={{ overflow: "hidden", marginTop: 26 }}>
            <p data-hero-line style={{ fontSize: "clamp(15px,1.4vw,18px)", color: "rgba(255,248,244,0.72)", lineHeight: 1.7, maxWidth: 460 }}>
              Someone in your town is searching for a restaurant right now. We build the system that makes sure they find yours. Starting at $200/month.
            </p>
          </div>
          <div style={{ overflow: "hidden", marginTop: 32 }}>
            <div data-hero-line>
              <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: IVORY, color: FOREST, padding: "15px 30px", borderRadius: 99, fontSize: 15, fontWeight: 800, textDecoration: "none" }}>Get a free revenue audit →</a>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 26, left: "50%", transform: "translateX(-50%)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,248,244,0.4)" }}>Scroll to explore</div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "22px 0", overflow: "hidden" }}>
        <div className="marquee-track" style={{ gap: 56 }}>
          {[..."The Magnolia Café · River Bend BBQ · Cotton Row Diner · Delta Blues Kitchen · Porch & Table · Red River Smokehouse · Southern Roots Kitchen".split(" · "),
            ..."The Magnolia Café · River Bend BBQ · Cotton Row Diner · Delta Blues Kitchen · Porch & Table · Red River Smokehouse · Southern Roots Kitchen".split(" · ")].map((n, i) => (
            <span key={i} className="font-display" style={{ fontSize: 18, fontWeight: 700, color: "rgba(255,248,244,0.42)", whiteSpace: "nowrap" }}>{n}</span>
          ))}
        </div>
      </section>

      {/* ── CHAPTERS (sticky-scroll outcomes) ───────────────── */}
      <section style={{ position: "relative", padding: "0 clamp(16px,4vw,40px)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: mob ? "1fr" : "0.9fr 1.1fr", gap: mob ? 0 : 56 }}>

          {/* Sticky left */}
          {!mob && (
            <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: SAGE, marginBottom: 20 }}>What you get</div>
              <div className="font-display" data-idx style={{ fontSize: "clamp(6rem,12vw,11rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 1, color: IVORY }}>01</div>
              <div style={{ marginTop: 12, width: 60, height: 3, background: AMBER }} />
              <p style={{ marginTop: 22, fontSize: 15, color: "rgba(255,248,244,0.6)", lineHeight: 1.7, maxWidth: 300 }}>
                People already want great food. Four ways we make sure it&apos;s yours they find, book, and come back to.
              </p>
            </div>
          )}

          {/* Right chapters */}
          <div>
            {CHAPTERS.map((c) => (
              <div key={c.n} data-chapter={c.n} style={{ minHeight: mob ? "auto" : "92vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: mob ? "56px 0" : "40px 0" }}>
                {/* Visual panel with clip reveal + parallax numeral */}
                <div style={{ position: "relative", height: mob ? 200 : 300, background: c.panel, borderRadius: 16, overflow: "hidden", marginBottom: 30 }} data-clip>
                  <div aria-hidden="true" data-parallax="0.14" className="font-display" style={{ position: "absolute", right: -10, bottom: -40, fontSize: mob ? 220 : 340, fontWeight: 900, lineHeight: 1, color: "rgba(255,255,255,0.05)", letterSpacing: "-0.05em" }}>{c.n}</div>
                  <div style={{ position: "absolute", left: mob ? 20 : 34, bottom: mob ? 20 : 30 }}>
                    <div className="font-display" style={{ fontSize: mob ? "3rem" : "clamp(3.4rem,5vw,4.8rem)", fontWeight: 900, color: c.accent, letterSpacing: "-0.04em", lineHeight: 1 }}>{c.stat}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,248,244,0.7)", marginTop: 6 }}>{c.label}</div>
                  </div>
                </div>
                <div data-reveal>
                  {mob && <div className="font-display" style={{ fontSize: 40, fontWeight: 900, color: "rgba(255,248,244,0.25)", lineHeight: 1 }}>{c.n}</div>}
                  <h2 className="font-display" style={{ fontSize: "clamp(1.7rem,3vw,2.6rem)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.12, margin: "8px 0 12px" }}>{c.title}</h2>
                  <p style={{ fontSize: 16, color: "rgba(255,248,244,0.7)", lineHeight: 1.8, maxWidth: 520 }}>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROI count-up ────────────────────────────────────── */}
      <section style={{ padding: "clamp(80px,14vh,160px) clamp(16px,4vw,40px)", textAlign: "center", background: FOREST_MID }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div data-reveal style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: SAGE, marginBottom: 22 }}>What it&apos;s worth to you</div>
          <div className="font-display" data-count style={{ fontSize: "clamp(4rem,12vw,9rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 1, color: IVORY }}>~$3,100</div>
          <p data-reveal style={{ fontSize: 17, color: "rgba(255,248,244,0.65)", lineHeight: 1.7, marginTop: 20, maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>
            A conservative monthly uplift from stronger digital capture — for an investment of $200–$300/month. One catering booking pays for months of service.
          </p>
        </div>
      </section>

      {/* ── Testimonial (parallax) ──────────────────────────── */}
      <section style={{ position: "relative", padding: "clamp(90px,16vh,180px) clamp(16px,4vw,40px)", overflow: "hidden" }}>
        <div aria-hidden="true" data-parallax="0.3" className="font-display" style={{ position: "absolute", left: "50%", top: "8%", transform: "translateX(-50%)", fontSize: "clamp(200px,40vw,520px)", fontWeight: 900, color: "rgba(223,135,82,0.06)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>&ldquo;</div>
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <blockquote data-reveal className="font-display" style={{ fontSize: "clamp(1.6rem,3.4vw,2.8rem)", fontWeight: 700, fontStyle: "italic", lineHeight: 1.4, color: IVORY, margin: 0 }}>
            &ldquo;We went from invisible to showing up first in Google for our area. Our Friday nights are now fully booked weeks in advance.&rdquo;
          </blockquote>
          <div data-reveal style={{ marginTop: 26, fontSize: 14, color: "rgba(255,248,244,0.6)" }}>
            <strong style={{ color: IVORY, fontWeight: 700 }}>Tommy R.</strong> · Red River Smokehouse, Natchez, MS
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section id="contact" style={{ minHeight: "80vh", display: "flex", alignItems: "center", padding: "0 clamp(16px,4vw,40px)", background: FOREST }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", width: "100%", textAlign: "center" }}>
          <h2 data-reveal className="font-display" style={{ fontSize: "clamp(2.6rem,6vw,5rem)", fontWeight: 900, letterSpacing: "-0.035em", lineHeight: 1.05, margin: 0 }}>
            Let us find where<br /><span style={{ fontStyle: "italic", color: SAGE }}>revenue is leaking.</span>
          </h2>
          <p data-reveal style={{ fontSize: 18, color: "rgba(255,248,244,0.65)", lineHeight: 1.7, margin: "22px auto 0", maxWidth: 520 }}>
            A free audit of your online presence — before we even get on the phone.
          </p>
          <div data-reveal style={{ marginTop: 34 }}>
            <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: AMBER, color: FOREST, padding: "17px 36px", borderRadius: 99, fontSize: 16, fontWeight: 800, textDecoration: "none" }}>Get my free revenue audit →</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer style={{ padding: "28px clamp(16px,4vw,40px)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", flexDirection: mob ? "column" : "row", alignItems: "center", justifyContent: "space-between", gap: mob ? 10 : 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <CompassMark size={26} ring={IVORY} north={AMBER} south={IVORY} hub={FOREST} />
            <span className="font-display" style={{ fontWeight: 700, color: IVORY, fontSize: 15 }}>Main Street Compass</span>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,248,244,0.45)", margin: 0 }}>© 2026 Main Street Compass · Serving Mississippi &amp; the Southeast</p>
        </div>
      </footer>
    </div>
  );
}

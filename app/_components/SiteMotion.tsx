"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/* Site-wide motion: scroll reveals, count-up figures, and Lenis smooth
   scroll. Lives in the layout so it runs on every route (and re-scans on
   client navigation). Fully reduced-motion safe. */
export default function SiteMotion() {
  const pathname = usePathname();

  // Reveals + count-up — re-scan whenever the route changes.
  useEffect(() => {
    document.documentElement.classList.add("js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let io: IntersectionObserver | null = null;
    if (reduce) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    } else {
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              io && io.unobserve(e.target);
            }
          }),
        { threshold: 0.15, rootMargin: "0px 0px -12% 0px" }
      );
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => io && io.observe(el));
    }

    const fmt = (el: HTMLElement, v: number) =>
      (el.getAttribute("data-prefix") || "") + Math.round(v).toLocaleString() + (el.getAttribute("data-suffix") || "");
    const countEls = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    const rafs: number[] = [];
    let cio: IntersectionObserver | null = null;
    if (countEls.length) {
      if (reduce) {
        countEls.forEach((el) => { el.textContent = fmt(el, parseFloat(el.getAttribute("data-count") || "0")); });
      } else {
        cio = new IntersectionObserver(
          (entries) =>
            entries.forEach((e) => {
              if (!e.isIntersecting) return;
              const el = e.target as HTMLElement;
              cio && cio.unobserve(el);
              const target = parseFloat(el.getAttribute("data-count") || "0");
              const t0 = performance.now();
              const dur = 1400;
              const tick = (now: number) => {
                const p = Math.min(1, (now - t0) / dur);
                el.textContent = fmt(el, target * (1 - Math.pow(1 - p, 3)));
                if (p < 1) rafs.push(requestAnimationFrame(tick));
              };
              rafs.push(requestAnimationFrame(tick));
            }),
          { threshold: 0.5 }
        );
        countEls.forEach((el) => cio && cio.observe(el));
      }
    }

    return () => { io && io.disconnect(); cio && cio.disconnect(); rafs.forEach(cancelAnimationFrame); };
  }, [pathname]);

  // Lenis smooth scroll — init once; persists across client navigations.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const w = window as unknown as { Lenis?: new (o: object) => { raf: (t: number) => void; destroy: () => void } };
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let rafId = 0;
    let killed = false;
    const add = (src: string) =>
      new Promise<void>((res, rej) => {
        const el = document.createElement("script");
        el.src = src; el.async = true;
        el.onload = () => res();
        el.onerror = () => rej(new Error("load"));
        document.head.appendChild(el);
      });
    (async () => {
      try {
        if (!w.Lenis) await add("https://cdn.jsdelivr.net/npm/lenis@1.1.14/dist/lenis.min.js");
        if (killed || !w.Lenis) return;
        if (!document.getElementById("lenis-css")) {
          const st = document.createElement("style");
          st.id = "lenis-css";
          st.textContent = "html.lenis,html.lenis body{height:auto}.lenis.lenis-smooth{scroll-behavior:auto!important}.lenis.lenis-stopped{overflow:hidden}";
          document.head.appendChild(st);
        }
        lenis = new w.Lenis({ lerp: 0.1, smoothWheel: true, autoRaf: false });
        const raf = (t: number) => { lenis && lenis.raf(t); rafId = requestAnimationFrame(raf); };
        rafId = requestAnimationFrame(raf);
      } catch { /* CDN blocked: native scroll still works */ }
    })();
    return () => { killed = true; cancelAnimationFrame(rafId); if (lenis) lenis.destroy(); };
  }, []);

  return null;
}

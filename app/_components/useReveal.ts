import { useEffect, type RefObject } from "react";

/**
 * Scroll-reveal for `.rv` elements inside `rootRef`.
 *
 * An IntersectionObserver adds `.in` when an element enters the viewport, which
 * triggers a timed CSS transition (see the `.rv` rules in KukieVariant's CSS).
 * A timed reveal-on-enter reads more clearly than a scroll-linked one, which
 * tends to finish while the element is still low in the viewport.
 *
 * Progressive: with JS disabled, `.rv` stays visible (handled in CSS).
 */
export function useReveal(rootRef: RefObject<HTMLElement | null>, deps: unknown[] = []) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    root.querySelectorAll<HTMLElement>(".rv").forEach((el, i) => {
      el.style.transitionDelay = Math.min(i % 4, 3) * 60 + "ms";
      io.observe(el);
    });
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

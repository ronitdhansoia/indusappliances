"use client";

import { useEffect, type RefObject } from "react";

type Mode =
  /* A sticky child pinned inside a taller parent: 0 when the pin starts,
     1 when it releases. */
  | "pin"
  /* The viewport's centre travelling through the element. */
  | "center"
  /* From the element entering at the bottom to leaving at the top. */
  | "enter";

type Options = {
  mode: Mode;
  /* Only runs while this media query matches. */
  media?: string;
  onProgress: (p: number, el: HTMLElement) => void;
};

/* Scroll-linked progress, 0 to 1, for one element. Listens only while the
   element is near the viewport, measures on resize rather than on scroll,
   and coalesces to one update per frame. */
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  { mode, media, onProgress }: Options,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = media ? window.matchMedia(media) : null;
    let enabled = false;
    let listening = false;
    let ticking = false;
    let raf = 0;
    let start = 0;
    let length = 1;

    const measure = () => {
      const top = el.getBoundingClientRect().top + window.scrollY;
      const vh = window.innerHeight;
      if (mode === "pin") {
        const sticky = el.firstElementChild as HTMLElement | null;
        const offset = sticky ? parseFloat(getComputedStyle(sticky).top) || 0 : 0;
        start = top - offset;
        length = Math.max(1, el.offsetHeight - (vh - offset));
      } else if (mode === "center") {
        start = top - vh * 0.5;
        length = Math.max(1, el.offsetHeight);
      } else {
        start = top - vh;
        length = Math.max(1, el.offsetHeight + vh);
      }
    };
    const update = () => {
      ticking = false;
      const p = Math.min(1, Math.max(0, (window.scrollY - start) / length));
      onProgress(p, el);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };
    const listen = () => {
      if (listening) return;
      listening = true;
      measure();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize);
      onScroll();
    };
    const unlisten = () => {
      if (!listening) return;
      listening = false;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
      ticking = false;
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!enabled) return;
        if (entry.isIntersecting) listen();
        else {
          unlisten();
          measure();
          update();
        }
      },
      { rootMargin: "25% 0px 25% 0px" },
    );

    const enable = () => {
      if (enabled) return;
      enabled = true;
      io.observe(el);
    };
    const disable = () => {
      if (!enabled) return;
      enabled = false;
      io.disconnect();
      unlisten();
      onProgress(0, el);
    };
    const sync = () => {
      if (!mq || mq.matches) enable();
      else disable();
    };

    sync();
    mq?.addEventListener("change", sync);
    return () => {
      mq?.removeEventListener("change", sync);
      disable();
    };
  }, [ref, mode, media, onProgress]);
}

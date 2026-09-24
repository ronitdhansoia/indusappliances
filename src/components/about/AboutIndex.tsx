"use client";

import { useEffect, useRef, useState } from "react";

type Item = { id: string; label: string };
type Tone = "light" | "dark";

/* Relative luminance of a computed colour; null when it is transparent. */
function luminance(color: string): number | null {
  const m = color.match(/[\d.]+/g);
  if (!m || m.length < 3) return null;
  const [r, g, b] = m.map(Number);
  const a = m.length > 3 ? Number(m[3]) : 1;
  if (a === 0) return null;
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

/* The tone of the ground directly behind a point: the first painted
   background found walking down the elements under it and up their
   ancestors. Photographs count as dark ground. */
function toneAt(x: number, y: number, ignore: Element): Tone {
  for (const hit of document.elementsFromPoint(x, y)) {
    if (ignore.contains(hit)) continue;
    if (hit.tagName === "IMG" || hit.tagName === "VIDEO") return "dark";
    let el: Element | null = hit;
    while (el) {
      const lum = luminance(getComputedStyle(el).backgroundColor);
      if (lum !== null) return lum < 0.45 ? "dark" : "light";
      el = el.parentElement;
    }
  }
  return "light";
}

/* Fixed page index in the left rail. Tracks the section under the reading
   line and hides once the closing blocks arrive. Each label samples the
   ground behind it and sets its own colour, so the index stays legible
   as light and dark sections pass beneath it. */
export default function AboutIndex({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const [hidden, setHidden] = useState(false);
  const [tones, setTones] = useState<Tone[]>(() => items.map(() => "light"));
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.38;
      let current = items[0]?.id ?? "";
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= line) current = item.id;
      }
      const last = document.getElementById(items[items.length - 1]?.id ?? "");
      const past = last ? last.getBoundingClientRect().bottom < line : false;
      setActive(current);
      setHidden(past);

      const nav = navRef.current;
      if (nav && !past) {
        const next = items.map((_, i) => {
          const a = linkRefs.current[i];
          if (!a) return "light" as Tone;
          const r = a.getBoundingClientRect();
          return toneAt(r.left + 2, r.top + r.height / 2, nav);
        });
        setTones((prev) => (prev.join() === next.join() ? prev : next));
      }
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [items]);

  return (
    <nav
      ref={navRef}
      aria-label="On this page"
      className="about-index hidden xl:block"
      data-hidden={hidden ? "true" : "false"}
    >
      <ol>
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              ref={(el) => {
                linkRefs.current[i] = el;
              }}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              data-tone={tones[i]}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

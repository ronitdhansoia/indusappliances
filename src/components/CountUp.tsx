"use client";

import { useEffect, useRef, useState } from "react";

/* Animated counter: parses "50M+" into prefix/number/suffix, counts the
   number up on first view, and paints trailing +/% glyphs in brand red. */
export default function CountUp({ value }: { value: string }) {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[2]) : 0;
  const decimals = match?.[2].includes(".") ? 1 : 0;
  const [display, setDisplay] = useState(match ? "0" : value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();
        if (reduced) {
          setDisplay(match[2]);
          return;
        }
        const t0 = performance.now();
        const duration = 1300;
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay((target * eased).toFixed(decimals));
          if (p < 1) requestAnimationFrame(tick);
          else setDisplay(match[2]);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!match) return <span>{value}</span>;

  const rest = match[3];
  const glyph = rest.match(/([+%]+)$/)?.[1] ?? "";
  const mid = glyph ? rest.slice(0, -glyph.length) : rest;

  return (
    <span ref={ref}>
      {match[1]}
      {display}
      {mid}
      {glyph && <span className="text-brand">{glyph}</span>}
    </span>
  );
}

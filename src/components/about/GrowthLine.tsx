"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Milestone = { year: number; text: string };

const START = 2004;
const END = 2026;
const RATE = 1.3;
const W = 1000;
const H = 560;
const PAD = { l: 16, r: 16, t: 28, b: 16 };

type Pt = { year: number; x: number; y: number };

function buildPoints(): Pt[] {
  const max = Math.pow(RATE, END - START);
  const pts: Pt[] = [];
  for (let year = START; year <= END; year++) {
    const v = Math.pow(RATE, year - START) / max;
    const x = PAD.l + ((year - START) / (END - START)) * (W - PAD.l - PAD.r);
    const y = H - PAD.b - v * (H - PAD.t - PAD.b);
    pts.push({ year, x, y });
  }
  return pts;
}

/* The page's one bold device: the company's ~30% compound growth drawn as a
   single red stroke that advances with the reader's scroll through the
   milestones. Reduced motion draws it complete. */
export default function GrowthLine({
  title,
  rate,
  rateNote,
  body,
  milestones,
  facts,
}: {
  title: string;
  rate: string;
  rateNote: string;
  body: string;
  milestones: Milestone[];
  facts: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [progress, setProgress] = useState(0);

  const points = useMemo(() => buildPoints(), []);
  const { d, total, cum } = useMemo(() => {
    let total = 0;
    const cum = [0];
    for (let i = 1; i < points.length; i++) {
      total += Math.hypot(
        points[i].x - points[i - 1].x,
        points[i].y - points[i - 1].y,
      );
      cum.push(total);
    }
    const d = points
      .map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
      .join(" ");
    return { d, total, cum };
  }, [points]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let raf = 0;
    const update = () => {
      raf = 0;
      if (reduced) {
        setProgress(1);
        return;
      }
      const vh = window.innerHeight;
      let p = 1;
      if (window.matchMedia("(min-width: 1024px)").matches) {
        /* Panel is sticky: draw across the whole section's travel */
        const rect = el.getBoundingClientRect();
        const headerH =
          parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
              "--header-h",
            ),
          ) || 122;
        const travel = rect.height - (vh - headerH);
        p = travel > 0 ? (headerH - rect.top) / travel : 1;
      } else if (svgRef.current) {
        /* Panel scrolls with the page: draw as the chart rises into view */
        const r = svgRef.current.getBoundingClientRect();
        p = (vh * 0.92 - r.top) / (r.height * 1.1);
      }
      setProgress(Math.min(1, Math.max(0, p)));
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
  }, []);

  const drawn = total * progress;
  const reached = (year: number) => drawn >= cum[year - START] - 0.5;

  const tip = (() => {
    if (drawn <= 0) return points[0];
    for (let i = 1; i < points.length; i++) {
      if (cum[i] >= drawn) {
        const seg = cum[i] - cum[i - 1];
        const t = seg ? (drawn - cum[i - 1]) / seg : 0;
        return {
          x: points[i - 1].x + (points[i].x - points[i - 1].x) * t,
          y: points[i - 1].y + (points[i].y - points[i - 1].y) * t,
        };
      }
    }
    return points[points.length - 1];
  })();

  return (
    <div
      ref={ref}
      className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16"
    >
      <div className="stick-under-header">
        <h2 className="font-display text-[clamp(2rem,3.4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
          {title}
        </h2>
        <div className="mt-8 flex items-end gap-4">
          <span className="font-display text-[clamp(4rem,7vw,7.5rem)] font-semibold leading-[0.85] tracking-[-0.05em] text-ink">
            {rate}
          </span>
          <span className="max-w-[11rem] pb-1 text-sm leading-snug text-muted">
            {rateNote}
          </span>
        </div>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="mt-6 h-auto w-full"
          aria-hidden
        >
          <path
            d={d}
            fill="none"
            stroke="rgba(14, 22, 32, 0.08)"
            strokeWidth="2"
          />
          <path
            d={d}
            fill="none"
            stroke="var(--color-brand)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={total}
            strokeDashoffset={total - drawn}
          />
          {milestones.map((m) => {
            const p = points[m.year - START];
            if (!p) return null;
            return (
              <circle
                key={m.year}
                cx={p.x}
                cy={p.y}
                r="7"
                fill="#ffffff"
                stroke="var(--color-brand)"
                strokeWidth="3"
                style={{
                  opacity: reached(m.year) ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              />
            );
          })}
          <circle cx={tip.x} cy={tip.y} r="8" fill="var(--color-brand)" />
        </svg>
        <div className="mt-2 flex justify-between text-sm text-muted">
          <span>2004</span>
          <span>2026</span>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-line pt-5 text-sm text-body">
          {facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className="max-w-[60ch] text-lg leading-relaxed text-body">{body}</p>
        <ol className="mt-12 border-t border-line">
          {milestones.map((m) => (
            <li
              key={m.year}
              className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-6 border-b border-line py-8 transition-opacity duration-500 sm:py-10"
              style={{ opacity: reached(m.year) ? 1 : 0.35 }}
            >
              <span className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
                {m.year}
              </span>
              <p className="max-w-[44ch] text-base leading-relaxed text-body sm:text-lg">
                {m.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

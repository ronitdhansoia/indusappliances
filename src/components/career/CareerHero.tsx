"use client";

import { useCallback, useEffect, useRef, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { hero } from "@/data/careers";
import { useScrollProgress } from "./useScrollProgress";
import Arrow from "./Arrow";
import Lines from "./Lines";

/* Wide screens with motion allowed pin the hero. The photograph fills the
   stage and holds still; the headline block rises out as the page scrolls
   and the statement lands in its place. Everywhere else the same elements
   simply stack: headline, frame, statement. */
const PIN = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const smooth = (t: number) => t * t * (3 - 2 * t);

export default function CareerHero({ count }: { count: number }) {
  const ref = useRef<HTMLElement>(null);

  /* One page-load moment: the rule draws, the headline rises, the shutter
     slides off the photograph. */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const id = requestAnimationFrame(() => el.setAttribute("data-in", "true"));
    return () => cancelAnimationFrame(id);
  }, []);

  const onProgress = useCallback((p: number, el: HTMLElement) => {
    const copy = smooth(clamp01(p / 0.32));
    const state = smooth(clamp01((p - 0.42) / 0.3));
    el.style.setProperty("--p-copy", copy.toFixed(4));
    el.style.setProperty("--p-state", state.toFixed(4));
    el.setAttribute("data-copy", copy >= 1 ? "gone" : "shown");
  }, []);
  useScrollProgress(ref, { mode: "pin", media: PIN, onProgress });

  return (
    <section ref={ref} className="cr-hero" data-in="false" data-copy="shown" aria-labelledby="cr-hero-title">
      <div className="cr-hero-stage">
        <div className="cr-hero-copy shell">
          <div className="cr-sheet cr-mono">
            <span>Careers</span>
            <span className="cr-sheet-rule" aria-hidden />
            <span>Indus Appliances</span>
            <span className="cr-sheet-rule" aria-hidden />
            <span className="cr-sheet-note">{hero.marks.place}</span>
          </div>

          <h1 id="cr-hero-title" className="cr-display cr-hero-h1">
            <Lines lines={hero.lines} />
          </h1>

          <div className="cr-hero-lede cr-rise" style={{ "--i": 3 } as CSSProperties}>
            <p className="mt-6 max-w-[34rem] text-base leading-relaxed text-body sm:text-lg">{hero.body}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href="#roles" className="btn btn-primary">
                View {count} open positions
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden>
                  <path d="M8 2v11M3 9l5 5 5-5" />
                </svg>
              </Link>
              <Link href="#life" className="cr-link">
                <span>Life at Indus</span>
                <Arrow />
              </Link>
            </div>
          </div>
        </div>

        <figure className="cr-hero-figure shell">
          <div className="cr-hero-frame">
            <Image src={hero.image.src} alt={hero.image.alt} fill priority sizes="100vw" />
            <span className="cr-hero-shutter" aria-hidden />
            <span className="cr-hero-scrim" aria-hidden />
          </div>
          <figcaption className="cr-hero-marks cr-mono">
            <span>Fig. 01</span>
            <span>{hero.image.caption}</span>
            <span>{hero.marks.est}</span>
            <span>{hero.marks.kind}</span>
          </figcaption>
        </figure>

        <div className="cr-hero-statement">
          <div className="shell">
            <p className="cr-mono text-steel">{hero.marks.coords}</p>
            <h2 className="cr-display mt-5">
              {hero.statement.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

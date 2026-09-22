"use client";

import { useCallback, useRef } from "react";
import Image from "next/image";
import { stages } from "@/data/careers";
import { useScrollProgress } from "./useScrollProgress";
import InView from "./InView";
import SheetHeader from "./SheetHeader";
import Lines from "./Lines";
import { pad } from "./format";

/* Seven stages read like a production line. On wide screens each stage's
   text holds still while its photograph passes, and a rail between the
   columns fills as the reader advances. */
export default function ProductionLine() {
  const ref = useRef<HTMLDivElement>(null);
  const onProgress = useCallback((p: number, el: HTMLElement) => {
    el.style.setProperty("--p", p.toFixed(4));
  }, []);
  useScrollProgress(ref, { mode: "center", media: "(min-width: 1024px)", onProgress });

  return (
    <section id="line" className="cr-section under-header-offset" aria-labelledby="cr-line-title">
      <InView className="shell">
        <SheetHeader n="03" title="The line" note="Seven stages, one roof" />
        <h2 id="cr-line-title" className="cr-display mt-10 text-[clamp(2.25rem,7.2vw,7rem)] text-ink">
          <Lines lines={["From an idea", "to millions."]} />
        </h2>
        <p className="cr-rise mt-6 max-w-[44ch] text-lg leading-relaxed text-body" style={{ "--i": 2 } as React.CSSProperties}>
          Seven stages take a product from a sketch to a truck, all under one roof in Bahadurgarh. This is the system you join.
        </p>
      </InView>

      <div ref={ref} className="shell relative mt-12 sm:mt-16">
        <span className="cr-rail" aria-hidden />
        <ol className="cr-stages">
          {stages.map((s, i) => (
            <InView as="li" key={s.name} className="cr-stage" threshold={0.2}>
              <div className="cr-stage-text">
                <p className="cr-stage-index cr-mono">
                  <b>{pad(i + 1)}</b>
                  <span>/ {pad(stages.length)}</span>
                </p>
                <h3 className="cr-display cr-stage-name text-ink">
                  <span className="cr-mask">
                    <span>{s.name}</span>
                  </span>
                </h3>
                <p className="cr-stage-body">{s.body}</p>
                <div className="cr-ticks" aria-hidden>
                  {stages.map((t, j) => (
                    <span key={t.name} data-on={j <= i ? "true" : "false"} />
                  ))}
                </div>
              </div>
              <figure className="cr-stage-media m-0">
                <div className="cr-stage-frame cr-clip">
                  <Image src={s.image} alt={s.alt} fill sizes="(min-width: 1024px) 58vw, 100vw" />
                </div>
                <figcaption className="cr-stage-caption cr-mono">{s.caption}</figcaption>
              </figure>
            </InView>
          ))}
        </ol>
      </div>
    </section>
  );
}

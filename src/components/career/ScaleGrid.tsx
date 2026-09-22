import type { CSSProperties } from "react";
import CountUp from "@/components/CountUp";
import { scale } from "@/data/careers";
import InView from "./InView";
import SheetHeader from "./SheetHeader";

/* Four figures stamped on a dark sheet, registration marks at the corners. */
export default function ScaleGrid() {
  return (
    <section className="cr-dark cr-section bg-night text-white" aria-label="The scale of what we build">
      <InView className="shell">
        <SheetHeader n="02" title="Scale" note="Bahadurgarh, Haryana" />
        <dl className="cr-figures mt-10 sm:mt-14">
          {scale.figures.map((f, i) => (
            <div key={f.label} className="cr-figure cr-rise" style={{ "--i": i } as CSSProperties}>
              <dt className="mt-4 text-sm leading-snug text-white/85">
                {f.label}
                <span className="cr-mono mt-1 block text-steel">{f.note}</span>
              </dt>
              <dd className="cr-display cr-figure-value">
                <CountUp value={f.value} />
              </dd>
            </div>
          ))}
        </dl>
        <p className="cr-rise mt-12 max-w-[54ch] text-lg leading-relaxed text-steel" style={{ "--i": 4 } as CSSProperties}>
          {scale.body}
        </p>
      </InView>
    </section>
  );
}

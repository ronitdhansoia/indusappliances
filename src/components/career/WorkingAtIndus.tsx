import type { CSSProperties } from "react";
import Image from "next/image";
import { working } from "@/data/careers";
import InView from "./InView";
import SheetHeader from "./SheetHeader";
import Lines from "./Lines";
import { pad } from "./format";

/* Four spreads, statement on one side and a photograph on the other,
   alternating like the pages of a magazine. */
export default function WorkingAtIndus() {
  return (
    <section id="working" className="cr-section under-header-offset border-t border-line" aria-labelledby="cr-working-title">
      <div className="shell">
        <InView>
          <SheetHeader n="06" title="Working here" note="For qualified candidates, we offer" />
          <h2 id="cr-working-title" className="cr-display mt-10 text-[clamp(2.25rem,7.2vw,7rem)] text-ink">
            <Lines lines={["Real products.", "Real responsibility."]} />
          </h2>
        </InView>

        <div className="cr-spreads">
          {working.items.map((w, i) => (
            <InView key={w.image} className="cr-spread">
              <div className="cr-spread-text">
                <span className="cr-spread-n cr-mono">{pad(i + 1)}</span>
                <h3 className="cr-display text-ink">
                  <Lines lines={w.lines} />
                </h3>
                <p className="cr-spread-body cr-rise" style={{ "--i": 2 } as CSSProperties}>
                  {w.body}
                </p>
              </div>
              <figure className="cr-photo">
                <div className="cr-photo-frame cr-clip">
                  <Image src={w.image} alt={w.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" />
                </div>
                <figcaption className="cr-mono">{w.caption}</figcaption>
              </figure>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}

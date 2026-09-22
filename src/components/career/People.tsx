import type { CSSProperties } from "react";
import Image from "next/image";
import { people } from "@/data/careers";
import InView from "./InView";
import SheetHeader from "./SheetHeader";
import Lines from "./Lines";

export default function People() {
  return (
    <section id="life" className="cr-section under-header-offset border-t border-line" aria-labelledby="cr-people-title">
      <div className="shell">
        <InView>
          <SheetHeader n="04" title="People" note="The Bahadurgarh team" />
          <h2 id="cr-people-title" className="cr-display mt-10 text-[clamp(2.25rem,7.2vw,7rem)] text-ink">
            <Lines lines={people.lines} />
          </h2>
        </InView>

        <InView className="cr-people-grid">
          {people.photos.map((p, i) => (
            <figure key={p.src} className="cr-photo">
              <div className="cr-photo-frame cr-clip" style={{ "--i": i } as CSSProperties}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 40vw, 100vw"}
                />
              </div>
              <figcaption className="cr-mono">{p.caption}</figcaption>
            </figure>
          ))}
        </InView>

        <InView as="ul" className="cr-values">
          {people.values.map((v, i) => (
            <li key={v.name} className="cr-value cr-rise" style={{ "--i": i } as CSSProperties}>
              <h3 className="cr-display text-ink">{v.name}</h3>
              <p>{v.body}</p>
            </li>
          ))}
        </InView>
      </div>
    </section>
  );
}

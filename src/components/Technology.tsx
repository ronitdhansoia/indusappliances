import Image from "next/image";
import { technology } from "@/data/site";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Technology() {
  return (
    <section id="technology" className="scroll-mt-28 border-y border-line bg-soft">
      <div className="shell py-20 sm:py-28">
        <Reveal>
          <SectionHeader
            title="An Industry 4.0 shop floor"
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <p className="max-w-md text-base leading-relaxed text-body">
              Every Indus line feeds a live digital loop, monitored, tested and
              tuned in our in-house quality lab through lifecycle, energy and
              safety assessments. Fewer breakdowns, faster decisions, and a
              field failure rate of 0.2%.
            </p>
            {/* Shop floor: a still for now, to be replaced by the short clip */}
            <figure className="mt-8 max-w-md">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-night">
                <Image
                  src="/videos/line-cnc-control-poster.jpg"
                  alt="An operator at the control panel of a CNC machine on the Bahadurgarh shop floor"
                  fill
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="anno mt-3 text-muted">CNC control, Bahadurgarh</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <ul>
              {technology.map((item, i) => (
                <li
                  key={item.name}
                  className="-mx-4 flex items-baseline gap-5 rounded-xl border-b border-line px-4 py-5 transition-colors duration-200 last:border-0 hover:bg-white"
                >
                  <span className="anno shrink-0 text-brand">
                    T{String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="display-sub shrink-0 text-lg text-ink">
                      {item.name}
                    </h3>
                    <p className="text-[15px] text-muted">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

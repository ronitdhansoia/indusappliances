import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { manifest } from "@/data/export";

/* Nine lines as a shipping manifest: number, render, name, capacity and
   the marks each carries. Every row links to its division page. */
export default function Manifest() {
  return (
    <section className="bg-white">
      <div className="shell py-20 sm:py-28">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-12">
            <h2 className="display max-w-3xl text-[clamp(2.2rem,4.5vw,3.75rem)] text-ink">
              Nine lines, one dock
              <span className="text-brand">.</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-body lg:justify-self-end">
              Everything below is designed, tooled and built in Bahadurgarh under one ISO 9001
              system, and ships from the same plant. Product marks are listed where a licence is held.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="xp-manifest-head anno mt-12 text-muted sm:mt-16">
            <span>No.</span>
            <span />
            <span>Line</span>
            <span>Annual capacity</span>
            <span>Marks carried</span>
            <span />
          </div>
          <ol className="xp-manifest">
            {manifest.map((d) => (
              <li key={d.id}>
                <Link href={d.href} className="xp-row group">
                  <span className="anno text-brand">{d.id}</span>
                  <span className="xp-thumb">
                    <Image src={d.image} alt="" fill sizes="4.5rem" className="object-cover" />
                  </span>
                  <span className="min-w-0">
                    <span className="display-sub block text-lg text-ink sm:text-xl">{d.name}</span>
                    <span className="xp-row-marks-inline">{d.marks.length ? d.marks.join(" · ") : "ISO 9001 system"}</span>
                  </span>
                  <span className="xp-row-cap">
                    <span className="text-ink tabular-nums">{d.capacity}</span>
                    <span className="anno block text-muted">{d.capacityNote}</span>
                  </span>
                  <span className="xp-row-marks">
                    {d.marks.length ? (
                      d.marks.map((m) => (
                        <span key={m} className="xp-mark">
                          {m}
                        </span>
                      ))
                    ) : (
                      <span className="text-muted">ISO 9001 system</span>
                    )}
                  </span>
                  <span className="xp-go" aria-hidden>
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                      <path d="M2 8h11M9 3l5 5-5 5" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

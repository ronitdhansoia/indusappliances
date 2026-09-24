"use client";

import { useState } from "react";
import CountUp from "@/components/CountUp";
import { ExportMapCanvas } from "@/components/ExportMap";
import { countryCount, exportHero, figures, regions } from "@/data/export";

/* The route map as the hero's ground. Choosing a region lights its routes
   and lists its countries; pointing at one previews it. Phones get the
   same map inline, under the headline. */
export default function ExportHero() {
  const [locked, setLocked] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  const focus = hover ?? locked;
  const current = regions.find((r) => r.name === focus);

  return (
    <section className="xp-hero hero-stage grid-ink relative isolate flex flex-col overflow-hidden bg-night text-white">
      <div className="xp-hero-map" aria-hidden>
        <ExportMapCanvas highlight={focus} />
      </div>
      <div className="xp-hero-scrim" aria-hidden />

      <div className="shell relative z-10 flex flex-1 flex-col justify-end pt-10 sm:pt-14 lg:pt-16">
        <p className="hero-enter text-sm text-white/70">Export</p>
        <h1 className="hero-enter mt-3 max-w-[13ch] font-display text-[clamp(2.5rem,5.6vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
          {exportHero.headline}
        </h1>
        <p className="hero-enter mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg" style={{ "--d": "120ms" } as React.CSSProperties}>
          {exportHero.lead}
        </p>

        <div className="xp-hero-inline" aria-hidden>
          <ExportMapCanvas highlight={focus} />
        </div>

        <div className="hero-enter mt-8 lg:mt-10" style={{ "--d": "220ms" } as React.CSSProperties}>
          <div
            className="xp-chips"
            role="group"
            aria-label="Show routes by region"
            onMouseLeave={() => setHover(null)}
          >
            <button
              type="button"
              className="xp-chip"
              aria-pressed={locked === null}
              onClick={() => setLocked(null)}
              onMouseEnter={() => setHover(null)}
            >
              All routes
            </button>
            {regions.map((r) => (
              <button
                key={r.name}
                type="button"
                className="xp-chip"
                aria-pressed={locked === r.name}
                onClick={() => setLocked(locked === r.name ? null : r.name)}
                onMouseEnter={() => setHover(r.name)}
                onFocus={() => setHover(r.name)}
                onBlur={() => setHover(null)}
              >
                {r.name}
              </button>
            ))}
          </div>
          <p className="xp-places" aria-live="polite">
            <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden />
            {current ? current.places.join(" · ") : `${countryCount} countries across ${regions.length} regions, all from Bahadurgarh`}
          </p>
        </div>
      </div>

      <div className="hero-enter shell relative z-10 mt-10 border-t border-white/15 sm:mt-12" style={{ "--d": "320ms" } as React.CSSProperties}>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 py-6 lg:grid-cols-4 lg:py-7">
          {figures.map((f) => (
            <div key={f.label}>
              <dd className="display-sub text-3xl text-white sm:text-4xl">
                <CountUp value={f.value} />
              </dd>
              <dt className="mt-1 text-sm text-white/75">
                {f.label}
                <span className="anno block text-steel">{f.note}</span>
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

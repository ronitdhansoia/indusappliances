import type { CSSProperties } from "react";
import { worldMap } from "@/data/world-dots";

/* Drop-in panel: a dotted world map with export routes that draw out from
   the Bahadurgarh plant in a slow loop. Pure SVG and CSS, no runtime JS,
   so it can sit inside any section. Routes are illustrative and live in
   data/world-dots.ts. */
export default function ExportMap({
  title = "Built in Bahadurgarh. Shipped across borders.",
  note = "Export routes from the Bahadurgarh plant",
  className = "",
}: {
  title?: string;
  note?: string;
  className?: string;
}) {
  const { width, height, dots, india, origin, destinations } = worldMap;

  const arcs = destinations.map((d, i) => {
    const dist = Math.hypot(d.x - origin.x, d.y - origin.y);
    const lift = Math.min(18, dist * 0.26);
    const cx = (origin.x + d.x) / 2;
    const cy = (origin.y + d.y) / 2 - lift;
    return {
      ...d,
      path: `M${origin.x} ${origin.y} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${d.x} ${d.y}`,
      delay: `${(i * 0.45).toFixed(2)}s`,
    };
  });

  return (
    <figure
      className={`export-map overflow-hidden rounded-3xl border border-line-dark bg-night p-6 text-white sm:p-8 ${className}`}
    >
      <p className="max-w-[20ch] font-display text-xl font-semibold leading-tight tracking-[-0.02em] sm:text-2xl">
        {title}
      </p>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="mt-6 block h-auto w-full sm:mt-8"
        role="img"
        aria-label="World map with export routes radiating from Bahadurgarh, India"
      >
        <defs>
          <filter id="export-map-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.9" />
          </filter>
        </defs>
        <path d={dots} className="export-map-dots" />
        <path d={india} className="export-map-india" />
        {arcs.map((a) => (
          <g key={a.name} style={{ "--delay": a.delay } as CSSProperties}>
            <path
              d={a.path}
              pathLength={1}
              className="export-map-arc export-map-arc-glow"
              filter="url(#export-map-glow)"
            />
            <path d={a.path} pathLength={1} className="export-map-arc" />
            <circle cx={a.x} cy={a.y} r="0.7" className="export-map-dest" />
            <circle
              cx={a.x}
              cy={a.y}
              r="0.7"
              className="export-map-dest-ring"
            />
          </g>
        ))}
        <circle
          cx={origin.x}
          cy={origin.y}
          r="1"
          className="export-map-origin-ring"
        />
        <circle
          cx={origin.x}
          cy={origin.y}
          r="1"
          className="export-map-origin-ring export-map-origin-ring-2"
        />
        <circle cx={origin.x} cy={origin.y} r="0.9" className="export-map-origin" />
      </svg>

      <figcaption className="mt-5 flex items-center gap-2 text-sm text-steel sm:mt-6">
        <span className="inline-block h-2 w-2 rounded-full bg-brand" aria-hidden />
        {note}
      </figcaption>
    </figure>
  );
}

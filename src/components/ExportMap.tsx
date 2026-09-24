import type { CSSProperties } from "react";
import { worldMap } from "@/data/world-dots";

/* Dotted map of the plant's export reach. The land dots sit on one layer
   and the routes on another that the browser composites separately, so
   only the routes ever repaint. Each route is a faint trace with a bright
   pulse travelling along it and a ring that answers when it lands. No
   labels. With `highlight` set to a region, every other route dims.
   Destinations and the projection come from data/world-dots.ts,
   regenerated with scripts/dotmap.py. */
export function ExportMapCanvas({
  highlight = null,
  className = "",
}: {
  highlight?: string | null;
  className?: string;
}) {
  const { view, spacing, dots, origin, destinations } = worldMap;
  const u = view.w / 760; // roughly one pixel at the panel's desktop width
  const box = `0 0 ${view.w} ${view.h}`;

  const arcs = destinations.map((d, i) => {
    const dist = Math.hypot(d.x - origin.x, d.y - origin.y);
    const lift = Math.min(view.h * 0.22, dist * 0.2) + 4 * u;
    const cx = (origin.x + d.x) / 2;
    const cy = (origin.y + d.y) / 2 - lift;
    return {
      ...d,
      path: `M${origin.x} ${origin.y} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${d.x} ${d.y}`,
      delay: `${(i * 0.55).toFixed(2)}s`,
    };
  });

  return (
    <div className={`relative ${className}`}>
      <svg viewBox={box} className="block h-auto w-full" aria-hidden>
        <path d={dots} className="export-map-dots" style={{ strokeWidth: spacing * 0.5 }} />
      </svg>

      <svg
        viewBox={box}
        className="export-map-routes absolute inset-0 h-full w-full"
        role="img"
        aria-label={`Export routes from Bahadurgarh, India to ${destinations.map((d) => d.name).join(", ")}`}
      >
        {arcs.map((a) => (
          <g
            key={a.name}
            data-region={a.region}
            data-dim={highlight && a.region !== highlight ? "true" : undefined}
            style={{ "--delay": a.delay } as CSSProperties}
          >
            <path d={a.path} className="export-map-trace" style={{ strokeWidth: 1.3 * u }} />
            <path
              d={a.path}
              pathLength={1}
              className="export-map-pulse export-map-pulse-halo"
              style={{ strokeWidth: 5.5 * u }}
            />
            <path d={a.path} pathLength={1} className="export-map-pulse" style={{ strokeWidth: 1.8 * u }} />
            <circle cx={a.x} cy={a.y} r={3 * u} className="export-map-dest" />
            <circle cx={a.x} cy={a.y} r={3 * u} className="export-map-dest-ring" style={{ strokeWidth: 1.2 * u }} />
          </g>
        ))}
        <circle cx={origin.x} cy={origin.y} r={5 * u} className="export-map-origin-ring" style={{ strokeWidth: 1.6 * u }} />
        <circle
          cx={origin.x}
          cy={origin.y}
          r={5 * u}
          className="export-map-origin-ring export-map-origin-ring-2"
          style={{ strokeWidth: 1.6 * u }}
        />
        <circle cx={origin.x} cy={origin.y} r={4.6 * u} className="export-map-origin" />
      </svg>
    </div>
  );
}

/* The map as a titled panel, used in the closing block of the home and
   About pages. */
export default function ExportMap({
  title = "Built in India. Shipped across borders.",
  note = "Export routes from India",
  className = "",
}: {
  title?: string;
  note?: string;
  className?: string;
}) {
  return (
    <figure
      className={`export-map overflow-hidden rounded-3xl border border-line-dark bg-night p-6 text-white sm:p-8 ${className}`}
    >
      <p className="max-w-[20ch] font-display text-xl font-semibold leading-tight tracking-[-0.02em] sm:text-2xl">
        {title}
      </p>
      <ExportMapCanvas className="mt-6 sm:mt-8" />
      <figcaption className="mt-5 flex items-center gap-2 text-sm text-steel sm:mt-6">
        <span className="inline-block h-2 w-2 rounded-full bg-brand" aria-hidden />
        {note}
      </figcaption>
    </figure>
  );
}

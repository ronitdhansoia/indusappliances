import type { CSSProperties } from "react";
import { worldMap } from "@/data/world-dots";

/* Drop-in panel: a dotted map of the export region with routes that draw
   out from the Bahadurgarh plant in a slow loop. Pure SVG and CSS, no
   runtime JS. Sizes are derived from the view width so the same look
   holds whatever the crop. Destinations live in data/world-dots.ts. */
export default function ExportMap({
  title = "Built in India. Shipped across borders.",
  note = "Export routes from India",
  className = "",
}: {
  title?: string;
  note?: string;
  className?: string;
}) {
  const { view, dots, india, origin, destinations } = worldMap;
  const u = view.w / 760; // one unit is roughly one pixel at the panel's desktop width

  /* Hover card: a pill centred above the dot, sized to the name */
  const tipFor = (x: number, y: number, name: string) => {
    const w = (name.length * 7.2 + 22) * u;
    const h = 24 * u;
    return { x: x - w / 2, y: y - h - 12 * u, w, h, tx: x, ty: y - h / 2 - 12 * u + 4.3 * u };
  };
  const originTip = tipFor(origin.x, origin.y, "Bahadurgarh plant");

  const arcs = destinations.map((d, i) => {
    const dist = Math.hypot(d.x - origin.x, d.y - origin.y);
    const lift = Math.min(view.h * 0.16, dist * 0.22) + 5 * u;
    const cx = (origin.x + d.x) / 2;
    const cy = (origin.y + d.y) / 2 - lift;
    return {
      ...d,
      path: `M${origin.x} ${origin.y} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${d.x} ${d.y}`,
      delay: `${(i * 0.5).toFixed(2)}s`,
      tip: tipFor(d.x, d.y, d.name),
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
        viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`}
        className="mt-6 block h-auto w-full sm:mt-8"
        role="img"
        aria-label={`Map of export routes from Bahadurgarh, India to ${destinations.map((d) => d.name).join(", ")}`}
      >
        <defs>
          <filter id="export-map-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation={5 * u} />
          </filter>
        </defs>
        <path d={dots} className="export-map-dots" style={{ strokeWidth: 3.4 * u }} />
        <path d={india} className="export-map-india" style={{ strokeWidth: 3.8 * u }} />
        {arcs.map((a) => (
          <g key={a.name} style={{ "--delay": a.delay } as CSSProperties}>
            <path
              d={a.path}
              pathLength={1}
              className="export-map-arc export-map-arc-glow"
              filter="url(#export-map-glow)"
              style={{ strokeWidth: 6.5 * u }}
            />
            <path d={a.path} pathLength={1} className="export-map-arc" style={{ strokeWidth: 1.9 * u }} />
            <circle cx={a.x} cy={a.y} r={4 * u} className="export-map-dest" />
            <circle cx={a.x} cy={a.y} r={4 * u} className="export-map-dest-ring" style={{ strokeWidth: 1.5 * u }} />
            <g className="export-map-pin" tabIndex={0} role="img" aria-label={a.name}>
              <title>{a.name}</title>
              <circle cx={a.x} cy={a.y} r={14 * u} className="export-map-hit" />
              <g className="export-map-tip">
                <rect x={a.tip.x} y={a.tip.y} width={a.tip.w} height={a.tip.h} rx={a.tip.h / 2} style={{ strokeWidth: 1 * u }} />
                <text x={a.tip.tx} y={a.tip.ty} textAnchor="middle" style={{ fontSize: 12 * u }}>
                  {a.name}
                </text>
              </g>
            </g>
          </g>
        ))}
        <circle cx={origin.x} cy={origin.y} r={6 * u} className="export-map-origin-ring" style={{ strokeWidth: 1.8 * u }} />
        <circle cx={origin.x} cy={origin.y} r={6 * u} className="export-map-origin-ring export-map-origin-ring-2" style={{ strokeWidth: 1.8 * u }} />
        <circle cx={origin.x} cy={origin.y} r={5.4 * u} className="export-map-origin" />
        <text
          x={origin.x + 11 * u}
          y={origin.y + 4.5 * u}
          className="export-map-label"
          style={{ fontSize: 12.5 * u }}
        >
          India
        </text>
        <g className="export-map-pin" tabIndex={0} role="img" aria-label="Bahadurgarh plant, India">
          <title>Bahadurgarh plant</title>
          <circle cx={origin.x} cy={origin.y} r={14 * u} className="export-map-hit" />
          <g className="export-map-tip">
            <rect x={originTip.x} y={originTip.y} width={originTip.w} height={originTip.h} rx={originTip.h / 2} style={{ strokeWidth: 1 * u }} />
            <text x={originTip.tx} y={originTip.ty} textAnchor="middle" style={{ fontSize: 12 * u }}>
              Bahadurgarh plant
            </text>
          </g>
        </g>
      </svg>

      <figcaption className="mt-5 flex items-center gap-2 text-sm text-steel sm:mt-6">
        <span className="inline-block h-2 w-2 rounded-full bg-brand" aria-hidden />
        {note}
      </figcaption>
    </figure>
  );
}

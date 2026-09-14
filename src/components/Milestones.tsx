"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { milestones } from "@/data/site";

/* A real time axis, 2004 to 2026, with one tick per year. Milestones sit
   at their true year, alternating above and below the line, and the gaps
   between them carry the story: they shrink as the company accelerates.
   Labels stay on their year where they fit and are nudged along the axis
   with an elbowed leader when neighbours collide. Vertical on phones. */

const START = 2004;
const END = 2026;
const SPAN = END - START;

// Horizontal geometry (px)
const H_CALL_W = 200;
const H_GAP = 28;
const H_ROW = 128;
const H_LEAD = 44;
const H_AXIS_Y = H_ROW + H_LEAD;
const H_STAGE = H_AXIS_Y * 2;

// Vertical geometry (px)
const V_PER_YEAR = 46;
const V_CALL_H = 92;
const V_GAP = 16;
const V_AXIS_X = 12;
const V_CALL_X = 44;
const V_STAGE = SPAN * V_PER_YEAR + V_CALL_H;

function layout(anchors: number[], size: number, gap: number, bound: number) {
  const pos = anchors.slice();
  for (let i = 1; i < pos.length; i++) {
    pos[i] = Math.max(pos[i], pos[i - 1] + size + gap);
  }
  const last = pos.length - 1;
  if (last >= 0) pos[last] = Math.min(pos[last], Math.max(0, bound - size));
  for (let i = last - 1; i >= 0; i--) {
    pos[i] = Math.min(pos[i], pos[i + 1] - size - gap);
  }
  return pos.map((p) => Math.max(0, p));
}

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));

export default function Milestones() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setWidth(Math.round(entry.contentRect.width));
    });
    ro.observe(el);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  const items = milestones.map((m) => ({
    year: parseInt(m.year, 10),
    text: m.text,
  }));
  const horizontal = width >= 1024;
  const ready = width > 0;
  const stageH = horizontal ? H_STAGE : V_STAGE;

  // Year ticks along the axis
  const tickPath = Array.from({ length: SPAN + 1 }, (_, i) => {
    const f = i / SPAN;
    return horizontal
      ? `M${(f * width).toFixed(1)} ${H_AXIS_Y - 5}v10`
      : `M${V_AXIS_X - 5} ${(f * SPAN * V_PER_YEAR).toFixed(1)}h10`;
  }).join("");

  let placed: {
    year: number;
    text: string;
    i: number;
    ax: number;
    ay: number;
    left: number;
    top: number;
    leader: string;
  }[] = [];

  if (horizontal) {
    const anchors = items.map((it) => ((it.year - START) / SPAN) * width);
    const rows: [number[], number[]] = [[], []];
    items.forEach((_, i) => rows[i % 2].push(i));
    const pos = new Array<number>(items.length);
    rows.forEach((idx) => {
      const p = layout(idx.map((i) => anchors[i]), H_CALL_W, H_GAP, width);
      idx.forEach((i, k) => (pos[i] = p[k]));
    });
    placed = items.map((it, i) => {
      const above = i % 2 === 0;
      const ax = anchors[i];
      const left = pos[i];
      const attach = clamp(ax, left + 8, left + H_CALL_W - 8);
      const mid = above ? H_AXIS_Y - H_LEAD / 2 : H_AXIS_Y + H_LEAD / 2;
      const end = above ? H_AXIS_Y - H_LEAD : H_AXIS_Y + H_LEAD;
      const leader =
        Math.abs(attach - ax) < 0.5
          ? `M${ax.toFixed(1)} ${H_AXIS_Y} V${end}`
          : `M${ax.toFixed(1)} ${H_AXIS_Y} V${mid} H${attach.toFixed(1)} V${end}`;
      return {
        ...it,
        i,
        ax,
        ay: H_AXIS_Y,
        left,
        top: above ? 0 : H_AXIS_Y + H_LEAD,
        leader,
      };
    });
  } else {
    const anchors = items.map((it) => ((it.year - START) / SPAN) * SPAN * V_PER_YEAR);
    const pos = layout(anchors, V_CALL_H, V_GAP, V_STAGE);
    placed = items.map((it, i) => {
      const ay = anchors[i];
      const top = pos[i];
      const attach = clamp(ay, top + 14, top + V_CALL_H - 14);
      const midX = (V_AXIS_X + V_CALL_X) / 2;
      const leader =
        Math.abs(attach - ay) < 0.5
          ? `M${V_AXIS_X} ${ay.toFixed(1)} H${V_CALL_X - 8}`
          : `M${V_AXIS_X} ${ay.toFixed(1)} H${midX} V${attach.toFixed(1)} H${V_CALL_X - 8}`;
      return { ...it, i, ax: V_AXIS_X, ay, left: V_CALL_X, top, leader };
    });
  }

  return (
    <section className="border-t border-line bg-soft">
      <div className="shell py-20 sm:py-28">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <h2 className="display max-w-3xl text-[clamp(1.9rem,3.4vw,3rem)] text-ink">
            Two decades on the line
          </h2>
          <p className="max-w-md text-base leading-relaxed text-body">
            Eight steps since 2004, spaced as they happened. Each one added a
            capability the one before made possible.
          </p>
        </div>

        <div
          ref={stageRef}
          data-in={ready && inView ? "true" : "false"}
          className="tl relative mt-16 sm:mt-20"
          style={{ height: stageH }}
        >
          {ready && (
            <>
              <svg
                className="absolute inset-0 h-full w-full overflow-visible"
                viewBox={`0 0 ${width} ${stageH}`}
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d={tickPath} className="tl-ticks" />
                {horizontal ? (
                  <line
                    x1="0"
                    y1={H_AXIS_Y}
                    x2={width}
                    y2={H_AXIS_Y}
                    className="tl-axis"
                  />
                ) : (
                  <line
                    x1={V_AXIS_X}
                    y1="0"
                    x2={V_AXIS_X}
                    y2={SPAN * V_PER_YEAR}
                    className="tl-axis tl-axis-v"
                  />
                )}
                {placed.map((p) => (
                  <g key={p.year} style={{ "--i": p.i } as CSSProperties}>
                    <path d={p.leader} pathLength={1} className="tl-leader" />
                    <circle cx={p.ax} cy={p.ay} r="5" className="tl-dot" />
                  </g>
                ))}
              </svg>

              <ol>
                {placed.map((p) => (
                  <li
                    key={p.year}
                    className={`tl-item absolute flex flex-col ${
                      horizontal && p.i % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                    style={
                      {
                        left: p.left,
                        top: p.top,
                        width: horizontal ? H_CALL_W : `calc(100% - ${V_CALL_X}px)`,
                        height: horizontal ? H_ROW : undefined,
                        minHeight: horizontal ? undefined : V_CALL_H,
                        "--i": p.i,
                      } as CSSProperties
                    }
                  >
                    <span className="display-sub text-[1.75rem] leading-none text-ink">
                      {p.year}
                    </span>
                    <p className="mt-2 max-w-[36ch] text-[14px] leading-snug text-body">
                      {p.text}
                    </p>
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

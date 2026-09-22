import type { CSSProperties } from "react";
import { path, roles } from "@/data/careers";
import InView from "./InView";
import SheetHeader from "./SheetHeader";
import Lines from "./Lines";
import { pad } from "./format";

/* Four treads drawn as a staircase, each a step higher than the last. */
export default function CareerPath() {
  const leads = roles.filter((r) => /\bhead\b/i.test(r.title)).length;

  return (
    <section id="growth" className="cr-section under-header-offset border-t border-line" aria-labelledby="cr-path-title">
      <div className="shell">
        <InView>
          <SheetHeader n="05" title="Growth" note="Learn, build, own, lead" />
          <h2 id="cr-path-title" className="cr-display mt-10 text-[clamp(2.25rem,7.2vw,7rem)] text-ink">
            <Lines lines={path.lines} />
          </h2>
        </InView>

        <InView as="ol" className="cr-steps">
          {path.steps.map((s, i) => (
            <li key={s.name} className="cr-step cr-rise" style={{ "--n": i, "--i": i } as CSSProperties}>
              <span className="cr-step-n cr-mono">Step {pad(i + 1)}</span>
              <h3 className="cr-display text-ink">{s.name}</h3>
              <p>
                {s.body}
                {i === path.steps.length - 1 && leads > 0 && (
                  <>
                    {" "}
                    {leads} of the {roles.length} roles open today lead a function.
                  </>
                )}
              </p>
            </li>
          ))}
        </InView>

        <InView className="cr-training">
          <h3 className="cr-display cr-rise text-[clamp(1.75rem,3.6vw,3.25rem)] text-ink">{path.training.title}</h3>
          <p className="cr-rise max-w-[46ch] text-lg leading-relaxed text-body" style={{ "--i": 1 } as CSSProperties}>
            {path.training.body}
          </p>
        </InView>
      </div>
    </section>
  );
}

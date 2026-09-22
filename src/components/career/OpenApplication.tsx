import type { CSSProperties } from "react";
import { openApplication } from "@/data/careers";
import { contact } from "@/data/site";
import InView from "./InView";
import Lines from "./Lines";
import Arrow from "./Arrow";

const href = `mailto:${contact.careersEmail}?subject=${encodeURIComponent("Open application")}&body=${encodeURIComponent(
  "Role: Open application\nName: \nEmail: \nPhone: \n\n\n(CV attached)",
)}`;

export default function OpenApplication() {
  return (
    <section className="cr-dark border-t border-line-dark bg-navy text-white" aria-labelledby="cr-open-title">
      <InView className="shell cr-section grid gap-10 lg:grid-cols-2 lg:gap-16">
        <h2 id="cr-open-title" className="cr-display text-[clamp(2.25rem,7vw,6.75rem)]">
          <Lines lines={openApplication.lines} />
        </h2>
        <div className="lg:pt-3">
          <p className="cr-display text-[clamp(1.5rem,3.4vw,3.25rem)] text-steel">
            <Lines lines={openApplication.answer} start={2} />
          </p>
          <p className="cr-rise mt-6 max-w-[40ch] text-lg leading-relaxed text-white/80" style={{ "--i": 4 } as CSSProperties}>
            {openApplication.body}
          </p>
          <a href={href} className="cr-link cr-rise mt-9" style={{ "--i": 5 } as CSSProperties}>
            <span>{openApplication.cta}</span>
            <Arrow />
          </a>
        </div>
      </InView>
    </section>
  );
}

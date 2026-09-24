import Reveal from "@/components/Reveal";
import { journey } from "@/data/export";

/* Eight stations from the first email to the container, on one rail that
   draws itself as the section comes into view. */
export default function Journey() {
  return (
    <section className="border-t border-line bg-white">
      <div className="shell py-20 sm:py-28">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-12">
            <h2 className="display max-w-3xl text-[clamp(2.2rem,4.5vw,3.75rem)] text-ink">
              From your first email to the container
              <span className="text-brand">.</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-body lg:justify-self-end">
              One process, under one roof, with a reply inside a day and a proposal inside a week.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <ol className="xp-journey mt-12 sm:mt-16">
            <span className="xp-rail" aria-hidden />
            {journey.map((s, i) => (
              <li key={s.name} className="xp-station" style={{ "--i": i } as React.CSSProperties}>
                <span className="anno text-brand">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display-sub mt-2 text-lg text-ink">{s.name}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-body">{s.detail}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

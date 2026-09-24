import { processSteps, statsBand } from "@/data/site";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

export default function Process() {
  return (
    <section className="bg-soft">
      <div className="shell py-20 sm:py-28">
        <Reveal>
          <div className="flex items-end justify-between gap-10">
            <div className="min-w-0 flex-1">
              <SectionHeader
                title="From design to dispatch"
              />
            </div>
            {/* Sheet metal rolling on our fabrication line */}
            <div className="relative mb-14 hidden w-80 shrink-0 overflow-hidden rounded-2xl shadow-lg shadow-ink/10 xl:block">
              <video
                className="aspect-video h-auto w-full object-cover"
                src="/videos/sheet-metal.mp4"
                poster="/videos/sheet-metal-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Sheet metal moving through a rolling line"
              />
              <div className="chip anno absolute bottom-3 left-3 inline-flex items-center gap-2 !py-1.5 text-ink">
                Sheet metal line
              </div>
            </div>
          </div>
        </Reveal>

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.name} delay={(i % 3) * 90}>
              <li className="group h-full rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/6">
                <p className="anno text-brand">
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="display-sub mt-4 text-xl text-ink">
                  {step.name}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-body">
                  {step.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <dl className="mt-16 grid grid-cols-2 gap-y-10 border-t border-line pt-10 sm:grid-cols-3 lg:grid-cols-6">
            {statsBand.map((stat, i) => (
              <div
                key={stat.label}
                className={`pr-6 ${i > 0 ? "lg:border-l lg:border-line lg:pl-6" : ""}`}
              >
                <dd className="display-sub text-3xl text-ink">
                  <CountUp value={stat.value} />
                </dd>
                <dt className="anno mt-1.5 text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

import { pillars } from "@/data/about";

export default function WhyIndus() {
  return (
    <section id="why" className="under-header-offset border-t border-line">
      <div className="shell py-20 sm:py-28">
        <div className="about-cols">
          <div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
              Why brands build with Indus
            </h2>
            <ol className="mt-12 border-t border-line">
              {pillars.map((p) => (
                <li
                  key={p.title}
                  className="grid gap-6 border-b border-line py-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14 lg:py-14"
                >
                  <h3 className="max-w-md font-display text-[clamp(1.5rem,2.2vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
                    {p.title}
                  </h3>
                  <div>
                    <p className="max-w-[60ch] text-lg leading-relaxed text-body">
                      {p.lead}
                    </p>
                    <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-3">
                      {p.points.map(([term, detail]) => (
                        <div key={term}>
                          <dt className="font-semibold text-ink">{term}</dt>
                          <dd className="mt-1.5 text-sm leading-relaxed text-body">
                            {detail}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

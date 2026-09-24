import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CertMarquee from "@/components/CertMarquee";
import ExportMap from "@/components/ExportMap";
import CertificateGrid from "@/components/CertificateGrid";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
import { certificates, countryCount, exportHero, lines, marks, regions, steps } from "@/data/export";

export const metadata: Metadata = {
  title: "Export | Indus Appliances",
  description:
    "Water heaters, kitchen hoods, washing machines, air coolers, fans, motors and air fryers shipped from Bahadurgarh to the Middle East, South Asia, Africa, Europe and North America, with ISO 9001 and BIS certification.",
};

const h2 = "font-display text-[clamp(2rem,3.4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink";

export default function ExportPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative isolate flex min-h-[min(72svh,46rem)] flex-col justify-end overflow-hidden bg-night text-white">
          <Image src={exportHero.image.src} alt={exportHero.image.alt} fill priority sizes="100vw" className="-z-20 object-cover object-[50%_55%]" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/60 to-night/20" aria-hidden />
          <div className="shell pb-10 pt-40 sm:pb-14">
            <p className="text-sm text-white/70">Export</p>
            <h1 className="mt-3 max-w-[14ch] font-display text-[clamp(2.5rem,5.4vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
              {exportHero.headline}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{exportHero.lead}</p>
          </div>
        </section>

        <CertMarquee />

        {/* Where it ships */}
        <section className="bg-white">
          <div className="shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <Reveal>
              <h2 className={h2}>Where Indus ships</h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-body">
                Export routes run from the Bahadurgarh plant to {countryCount} countries across five regions.
              </p>
              <dl className="mt-10 border-t border-line">
                {regions.map((r) => (
                  <div key={r.name} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6">
                    <dt className="font-semibold text-ink">{r.name}</dt>
                    <dd className="text-body">{r.places.join(" · ")}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={120}>
              <ExportMap />
            </Reveal>
          </div>
        </section>

        {/* What ships */}
        <section className="border-t border-line bg-soft">
          <div className="shell py-20 sm:py-28">
            <Reveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <h2 className={h2}>Nine product lines, one dock</h2>
                <p className="max-w-md text-body">
                  Everything below is designed, tooled and built in Bahadurgarh and ships from the same plant.
                </p>
              </div>
            </Reveal>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {lines.map((d, i) => (
                <Reveal key={d.id} delay={(i % 3) * 90}>
                  <li className="h-full">
                    <Link
                      href={d.href}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-soft">
                        <Image
                          src={d.image}
                          alt={d.name}
                          fill
                          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <p className="anno text-brand">IND-{d.id}</p>
                        <h3 className="display-sub mt-2 text-xl text-ink">{d.name}</h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-body">{d.blurb}</p>
                        <p className="anno mt-auto pt-5 text-muted">
                          <span className="text-ink tabular-nums">{d.capacity}</span> {d.capacityNote}
                        </p>
                      </div>
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Certification */}
        <section className="border-t border-line bg-white">
          <div className="shell py-20 sm:py-28">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
                <div>
                  <h2 className={h2}>The papers that travel with the product</h2>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-body">
                    Every certificate opens at full size. Ask for copies with your quotation.
                  </p>
                </div>
                <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  {marks.map((m) => (
                    <div key={m.name} className="border-t border-line pt-4">
                      <dt className="font-semibold text-ink">{m.name}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-body">{m.note}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-14">
                <CertificateGrid items={certificates} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* How an order runs */}
        <section className="border-t border-line bg-soft">
          <div className="shell grid gap-10 py-20 sm:py-28 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <Reveal>
              <h2 className={h2}>How an export order runs</h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-body">
                One process from the first drawing to the container, all under one roof.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ol className="border-t border-line">
                {steps.map((s, i) => (
                  <li key={s.name} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6">
                    <span className="anno text-brand">{String(i + 1).padStart(2, "0")}</span>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                      <h3 className="display-sub shrink-0 text-lg text-ink">{s.name}</h3>
                      <p className="text-[15px] text-muted sm:text-right">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        <CtaSection map={false} />
      </main>
      <Footer />
    </>
  );
}

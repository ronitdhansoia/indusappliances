import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import LineStrip from "@/components/division/LineStrip";
import { technology } from "@/data/site";

export const metadata: Metadata = {
  title: "Smart technology | Indus Appliances",
  description: "Real-time process monitoring, adaptive quality control, predictive maintenance and automated data feedback on every Indus line, with in-house lifecycle, energy and safety testing.",
};

const stations = [
  { src: "/plant/motor-test.jpg", caption: "Motor load and insulation test" },
  { src: "/plant/wm-test-panel.jpg", caption: "Washing machine electrical safety panel" },
  { src: "/plant/test-panel.jpg", caption: "High-voltage and earth continuity" },
  { src: "/plant/wm-test-2.jpg", caption: "Live wash cycle in the sound booth" },
  { src: "/plant/motor-test-2.jpg", caption: "Winding resistance check" },
  { src: "/plant/paint-booth.jpg", caption: "Coating oven" },
];

const certifications = [
  ["ISO 9001:2015", "Quality management, certified by ICV"],
  ["BEE star rating", "Energy efficiency on water heaters"],
  ["ISI mark", "Indian Standards conformity"],
  ["IS 2082", "Storage water heater standard"],
  ["BIS", "Bureau of Indian Standards registration"],
  ["RoHS", "Restricted substances compliance"],
];

export default function SmartTechnologyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative isolate flex min-h-[min(78svh,50rem)] flex-col justify-end overflow-hidden bg-night text-white">
          <video className="absolute inset-0 -z-20 h-full w-full object-cover" src="/videos/line-cnc-control.mp4" poster="/videos/line-cnc-control-poster.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="An operator working a CNC control panel" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/60 to-night/20" aria-hidden />
          <div className="shell pb-10 pt-40 sm:pb-14">
            <p className="text-sm text-white/70">Smart technology</p>
            <h1 className="mt-3 max-w-[18ch] font-display text-[clamp(2.5rem,5.4vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.04em]">Every unit is tested before it ships.</h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Each Indus line feeds a live digital loop. Machines report as they run, quality is checked as parts move rather than at the end, and maintenance happens before a breakdown, not after. The result is a field failure rate under two percent.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="shell py-16 sm:py-24">
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">Four loops on every line</h2>
            <ol className="mt-10 divide-y divide-line border-y border-line">
              {technology.map((t) => (
                <li key={t.name} className="grid gap-2 py-6 sm:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] sm:gap-10">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl">{t.name}</h3>
                  <p className="max-w-[60ch] text-body sm:text-lg">{t.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <LineStrip title="Test stations" photos={stations} intro="Lifecycle, energy and safety tests run in-house, on the floor and in the lab." />

        <section className="border-t border-line bg-soft">
          <div className="shell py-16 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20">
              <figure>
                <div className="relative aspect-[724/1024] max-w-[18rem] overflow-hidden border border-line bg-white">
                  <Image src="/about/iso-9001.jpg" alt="ISO 9001:2015 certificate issued to Indus Appliances Private Limited" fill sizes="(min-width: 1024px) 20vw, 60vw" className="object-cover" />
                </div>
                <figcaption className="mt-3 text-sm text-muted">ISO 9001:2015 certificate</figcaption>
              </figure>
              <div>
                <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">Certified and auditable</h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-body">Certifications are current and available to any customer&apos;s audit team on request.</p>
                <dl className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                  {certifications.map(([name, what]) => (
                    <div key={name} className="border-t border-line pt-4">
                      <dt className="font-semibold text-ink">{name}</dt>
                      <dd className="mt-1 text-sm text-body">{what}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

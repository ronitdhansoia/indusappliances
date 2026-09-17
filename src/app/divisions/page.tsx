import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import BrandMarquee from "@/components/BrandMarquee";
import { divisions } from "@/data/site";
import { backwardIntegration } from "@/data/divisions";

export const metadata: Metadata = {
  title: "Business divisions | Indus Appliances",
  description: "Nine product lines under one roof in Bahadurgarh: water heaters, kitchen hoods, washing machines, air fryers, fans, motors, air coolers, heating elements and the tool room that supports them.",
};

export default function DivisionsIndex() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative isolate flex min-h-[min(72svh,46rem)] flex-col justify-end overflow-hidden bg-night text-white">
          <Image src="/plant/aerial.jpg" alt="Aerial view of the Indus Appliances plant beside the Delhi Rohtak Road in Bahadurgarh" fill priority sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/55 to-night/10" aria-hidden />
          <div className="shell pb-10 pt-40 sm:pb-14">
            <h1 className="max-w-[16ch] font-display text-[clamp(2.75rem,6vw,6rem)] font-semibold leading-[0.96] tracking-[-0.04em]">Nine lines. One roof.</h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Everything Indus makes is built on one site on the Delhi Rohtak Road. The sheet metal, the motors and the moulds for every line come from the same floor.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="shell py-6">
            <ol className="divide-y divide-line">
              {divisions.map((d, i) => (
                <li key={d.id}>
                  <Link href={d.href} className="group grid grid-cols-[3rem_minmax(0,1fr)_auto] items-center gap-4 py-6 sm:grid-cols-[4rem_minmax(0,1fr)_minmax(0,14rem)_7rem] sm:gap-8 sm:py-8">
                    <span className="text-sm text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <div className="min-w-0">
                      <h2 className="font-display text-[clamp(1.6rem,3vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink underline-offset-8 group-hover:underline">{d.name}</h2>
                      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-body">{d.blurb}</p>
                    </div>
                    <p className="hidden text-right sm:block">
                      <span className="block font-display text-2xl font-semibold tracking-[-0.02em] text-ink">{d.capacity}</span>
                      <span className="text-sm text-muted">{d.capacityNote}</span>
                    </p>
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-soft sm:h-28 sm:w-28">
                      <Image src={d.image} alt="" fill sizes="7rem" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-line bg-soft">
          <div className="shell py-16 sm:py-24">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
              <div>
                <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">Why one roof matters</h2>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-body">
                  Indus makes its own sheet-metal parts, its own motors and its own moulds. Five steps that used to be bought in now happen a few metres from the assembly lines, which is why lead times, quality and cost stay in our hands.
                </p>
              </div>
              <ol className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
                {backwardIntegration.map((b, i) => (
                  <li key={b.step} className={i === 4 ? "sm:col-span-2" : ""}>
                    <div className="relative aspect-[3/2] overflow-hidden bg-white">
                      <Image src={b.image} alt={b.step} fill sizes="(min-width: 1024px) 30vw, 90vw" className="object-cover" />
                    </div>
                    <p className="mt-3 flex items-baseline gap-3">
                      <span className="text-sm text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-semibold text-ink">{b.step}</span>
                    </p>
                    <p className="mt-1 text-sm text-body">{b.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <BrandMarquee />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

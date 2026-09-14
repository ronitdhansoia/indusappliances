import Image from "next/image";
import type { DivisionPage } from "@/data/divisions";

export default function DivisionHero({ page, capacity, capacityNote }: { page: DivisionPage; capacity: string; capacityNote: string }) {
  const { hero } = page;
  if (hero.kind === "product") {
    return (
      <section className="bg-soft">
        <div className="shell grid gap-10 pb-14 pt-14 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:items-center lg:gap-16 lg:pb-20 lg:pt-20">
          <div>
            <p className="text-sm text-muted">{page.name}</p>
            <h1 className="mt-3 max-w-[18ch] font-display text-[clamp(2.5rem,5vw,4.75rem)] font-semibold leading-[1] tracking-[-0.04em] text-ink">
              {page.headline}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-body">{page.lead}</p>
            <p className="mt-8 font-display text-3xl font-semibold tracking-[-0.03em] text-ink">
              {capacity} <span className="text-lg font-medium text-muted">{capacityNote}</span>
            </p>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-xl">
            <Image src={hero.src} alt={hero.alt} fill priority sizes="(min-width: 1024px) 45vw, 90vw" className="object-contain" />
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="relative isolate flex min-h-[min(78svh,50rem)] flex-col justify-end overflow-hidden bg-night text-white">
      {hero.kind === "video" ? (
        <video className="absolute inset-0 -z-20 h-full w-full object-cover" src={hero.src} poster={hero.poster} autoPlay muted loop playsInline preload="metadata" aria-label={hero.alt} />
      ) : (
        <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" className="-z-20 object-cover" />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/55 to-night/15" aria-hidden />
      <div className="shell pb-10 pt-40 sm:pb-14">
        <p className="text-sm text-white/70">{page.name}</p>
        <h1 className="mt-3 max-w-[20ch] font-display text-[clamp(2.5rem,5.4vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
          {page.headline}
        </h1>
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{page.lead}</p>
          <p className="shrink-0 font-display text-3xl font-semibold tracking-[-0.03em]">
            {capacity} <span className="text-lg font-medium text-white/70">{capacityNote}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { aboutOpening } from "@/data/about";

export default function AboutOpening() {
  return (
    <>
      <section className="shell pt-14 sm:pt-20 lg:pt-24">
        <div className="about-cols">
          <div>
            <h1 className="max-w-[16ch] font-display text-[clamp(2.5rem,5.2vw,5.25rem)] font-semibold leading-[1] tracking-[-0.04em] text-ink">
              {aboutOpening.headline}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-body sm:text-xl">
              {aboutOpening.intro}
            </p>
          </div>
        </div>
      </section>
      <figure className="mt-14 sm:mt-20">
        <div className="relative aspect-[4/3] overflow-hidden bg-night sm:aspect-[21/9]">
          <Image
            src="/about/plant-dusk.jpg"
            alt={aboutOpening.photoAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="shell mt-3 text-sm text-muted">
          {aboutOpening.photoCaption}
        </figcaption>
      </figure>
    </>
  );
}

import type { CSSProperties } from "react";
import Link from "next/link";
import { contact, heroFacts } from "@/data/site";

/* Full-bleed plant footage as the ground, a single large headline on it,
   and the facts a sourcing manager needs written as plain sentences. */
export default function Hero() {
  return (
    <section className="hero-stage relative isolate flex flex-col justify-end overflow-hidden bg-night text-white">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src="/videos/hero-line.mp4"
        poster="/videos/hero-line-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/60 to-night/25"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-night/60 via-night/20 to-transparent"
        aria-hidden
      />

      <div className="hero-copy shell pb-8 pt-14 sm:pb-14 sm:pt-36 lg:pt-44">
        <h1 className="hero-enter font-display max-w-[21ch] text-[clamp(2.5rem,6.4vw,7rem)] font-semibold leading-[0.96] tracking-[-0.04em]">
          Global brands are built here.
        </h1>

        <div
          className="hero-enter mt-6 flex flex-col gap-6 sm:mt-8 sm:gap-8 lg:mt-10 lg:flex-row lg:items-end lg:justify-between"
          style={{ "--d": "140ms" } as CSSProperties}
        >
          <p className="max-w-[36rem] text-base leading-relaxed text-white/80 sm:hidden">
            Since 2004, Indus has built more than 50 million appliances for
            Havells, Bajaj, A.O. Smith and fifty other brands, from one plant
            in Bahadurgarh, Haryana.
          </p>
          <p className="hidden max-w-[36rem] text-lg leading-relaxed text-white/80 sm:block">
            Since 2004, Indus has designed, tooled and assembled more than 50
            million water heaters, kitchen hoods, fans, motors and coolers for
            Havells, Bajaj, A.O. Smith and fifty other brands, all from one
            plant in Bahadurgarh, Haryana.
          </p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href={`mailto:${contact.email}?subject=Quote%20request`}
              className="btn btn-primary"
            >
              Request a quote
            </a>
            <Link href="#divisions" className="hero-link">
              See what we build
            </Link>
          </div>
        </div>
      </div>

      <div
        className="hero-enter shell border-t border-white/15"
        style={{ "--d": "280ms" } as CSSProperties}
      >
        <ul className="hero-facts grid grid-cols-2 gap-x-6 gap-y-3 py-5 text-center text-[13px] leading-snug text-white/70 sm:gap-x-8 sm:gap-y-5 sm:py-6 sm:text-[15px] sm:leading-normal lg:grid-cols-4 lg:py-7">
          {heroFacts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

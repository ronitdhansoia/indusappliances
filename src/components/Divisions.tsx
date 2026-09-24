"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { divisions } from "@/data/site";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Divisions() {
  const [active, setActive] = useState(0);
  const current = divisions[active];

  return (
    <section id="divisions" className="scroll-mt-28 bg-white">
      <div className="shell py-20 sm:py-28">
        <Reveal>
          <SectionHeader
            title="Our product lines."
          />
        </Reveal>

        {/* Desktop: numbered index + live image panel */}
        <Reveal className="hidden gap-14 lg:grid lg:grid-cols-[1.15fr_1fr]">
          <ul>
            {divisions.map((division, i) => (
              <li key={division.id} className="border-b border-line">
                <Link
                  href={division.href}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`group flex items-baseline gap-5 py-5 transition-colors duration-300 ${
                    active === i ? "text-ink" : "text-muted hover:text-body"
                  }`}
                >
                  <span
                    className={`anno w-7 shrink-0 transition-colors duration-300 ${
                      active === i ? "text-brand" : ""
                    }`}
                  >
                    {division.id}
                  </span>
                  <span
                    className={`display-sub flex-1 text-2xl transition-transform duration-300 xl:text-[1.75rem] ${
                      active === i ? "translate-x-1.5" : ""
                    }`}
                  >
                    {division.name}
                  </span>
                  <span className="anno hidden shrink-0 text-muted xl:block">
                    {division.capacity}{" "}
                    <span className="text-faint">{division.capacityNote}</span>
                  </span>
                  <span
                    className={`shrink-0 transition-all duration-300 ${
                      active === i
                        ? "translate-x-0 text-brand opacity-100"
                        : "-translate-x-2 opacity-0"
                    }`}
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="sticky top-40 self-start">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-soft shadow-sm">
              {divisions.map((division, i) => (
                <Image
                  key={division.id}
                  src={division.image}
                  alt={division.name}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className={`object-cover transition-all duration-500 ease-out ${
                    active === i
                      ? "scale-100 opacity-100"
                      : "scale-[1.03] opacity-0"
                  }`}
                />
              ))}
              <div className="anno absolute left-5 top-5 rounded-full bg-white/85 px-3.5 py-2 text-ink shadow-sm backdrop-blur-md">
                IND-{current.id} · {current.capacity} {current.capacityNote}
              </div>
            </div>
            <p className="mt-5 min-h-16 max-w-md text-[15px] leading-relaxed text-body">
              {current.blurb}
            </p>
          </div>
        </Reveal>

        {/* Mobile: stacked cards */}
        <ul className="grid gap-6 sm:grid-cols-2 lg:hidden">
          {divisions.map((division, i) => (
            <li key={division.id}>
              <Reveal delay={(i % 2) * 90}>
                <Link
                  href={division.href}
                  className="block overflow-hidden rounded-2xl border border-line bg-white transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-soft">
                    <Image
                      src={division.image}
                      alt={division.name}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="anno absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1.5 text-ink backdrop-blur-md">
                      IND-{division.id}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="display-sub text-lg text-ink">
                      {division.name}
                    </h3>
                    <p className="anno mt-1 text-muted">
                      {division.capacity} {division.capacityNote}
                    </p>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-body">
                      {division.blurb}
                    </p>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

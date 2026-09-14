import Image from "next/image";
import { awards } from "@/data/site";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Awards() {
  return (
    <section id="about" className="scroll-mt-28 bg-white">
      <div className="shell py-20 sm:py-28">
        <Reveal>
          <SectionHeader
            title="Honoured at the highest level"
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <figure>
              <div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-sm">
                <Image
                  src="/awards/pm-manmohan-singh.png"
                  alt="Founder Dinesh Garg receiving a National Award from Prime Minister Manmohan Singh"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>
              <figcaption className="anno mt-4 text-muted">
                National Award, presented by the Prime Minister of India
              </figcaption>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-sm">
                  <Image
                    src="/awards/president-patil.png"
                    alt="Receiving a National Award from President Pratibha Patil"
                    fill
                    sizes="25vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-sm">
                  <Image
                    src="/awards/nitin-gadkari.png"
                    alt="Recognition presented by Minister Nitin Gadkari"
                    fill
                    sizes="25vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
              </div>
            </figure>
          </Reveal>

          <Reveal delay={120}>
            <p className="max-w-md text-base leading-relaxed text-body">
              Seven national and industry awards across two decades, presented
              by a President and a Prime Minister of India, for quality,
              innovation and entrepreneurship in appliance manufacturing.
            </p>
            <ol className="mt-8">
              {awards.map((award) => (
                <li
                  key={`${award.year}-${award.title}`}
                  className="-mx-4 flex gap-5 rounded-xl border-b border-line px-4 py-4 transition-colors duration-200 last:border-0 hover:bg-soft"
                >
                  <span className="anno w-16 shrink-0 pt-1 text-brand">
                    {award.year}
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-ink">
                      {award.title}
                    </p>
                    <p className="anno mt-1 text-muted">{award.recipient}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

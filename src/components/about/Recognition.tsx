import Image from "next/image";
import { awards } from "@/data/site";

export default function Recognition() {
  return (
    <section id="recognition" className="under-header-offset bg-soft">
      <div className="shell py-20 sm:py-28">
        <div className="about-cols">
          <div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
              Recognised at the national level
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-body">
              Seven national and industry awards across two decades, presented
              by a President and a Prime Minister of India, for quality,
              innovation and entrepreneurship in appliance manufacturing.
            </p>
            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <figure>
                <div className="relative aspect-[3/2] overflow-hidden bg-[#e6e9ec]">
                  <Image
                    src="/awards/pm-manmohan-singh.png"
                    alt="Dinesh Garg receiving a National Award from Prime Minister Manmohan Singh"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-muted">
                  National Award, presented by the Prime Minister of India
                </figcaption>
              </figure>
              <ol className="border-t border-line">
                {awards.map((a) => (
                  <li
                    key={`${a.year}-${a.title}`}
                    className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 border-b border-line py-4"
                  >
                    <span className="text-sm text-muted">{a.year}</span>
                    <div>
                      <p className="font-semibold text-ink">{a.title}</p>
                      <p className="mt-0.5 text-sm text-muted">{a.recipient}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { founder } from "@/data/about";

export default function FounderLetter() {
  return (
    <section id="founder" className="under-header-offset bg-soft">
      <div className="shell py-20 sm:py-28">
        <div className="about-cols">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20">
            <figure className="max-w-sm">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#e6e9ec]">
                <Image
                  src={founder.image}
                  alt={`Portrait of ${founder.name}`}
                  fill
                  sizes="(min-width: 1024px) 28vw, 80vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="mt-4">
                <span className="block font-semibold text-ink">
                  {founder.name}
                </span>
                <span className="text-sm text-muted">{founder.role}</span>
              </figcaption>
            </figure>

            <div>
              <h2 className="max-w-[22ch] font-display text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
                {founder.pull}
              </h2>
              <div className="mt-10 max-w-[62ch] space-y-6 text-lg leading-relaxed text-body">
                {founder.letter.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>
              <p className="mt-10 font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                {founder.name}
              </p>
              <p className="text-sm text-muted">{founder.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

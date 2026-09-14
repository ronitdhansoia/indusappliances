import Image from "next/image";
import { quality } from "@/data/about";

export default function Quality() {
  return (
    <section id="quality" className="under-header-offset">
      <div className="shell py-20 sm:py-28">
        <div className="about-cols">
          <div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
              How quality is kept
            </h2>
            <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20">
              <figure>
                <div className="relative aspect-[724/1024] max-w-[18rem] overflow-hidden border border-line bg-white">
                  <Image
                    src={quality.certificate.image}
                    alt={quality.certificate.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, 60vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-muted">
                  {quality.certificate.caption}
                </figcaption>
              </figure>
              <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
                {quality.pillars.map((p) => (
                  <div key={p.title} className="border-t border-line pt-5">
                    <dt className="font-display text-xl font-semibold tracking-[-0.02em] text-ink">
                      {p.title}
                    </dt>
                    <dd className="mt-2 max-w-[40ch] leading-relaxed text-body">
                      {p.text}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

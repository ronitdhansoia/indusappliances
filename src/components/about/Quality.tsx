import Image from "next/image";
import { quality } from "@/data/about";

/* The certificates Indus holds, each opening at full size in a new tab,
   then the four commitments that keep quality on the line. */
export default function Quality() {
  return (
    <section id="quality" className="under-header-offset">
      <div className="shell py-20 sm:py-28">
        <div className="about-cols">
          <div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
              How quality is kept
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-body">{quality.lead}</p>

            <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 lg:grid-cols-4">
              {quality.certificates.map((c) => (
                <li key={c.image}>
                  <a
                    href={c.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                    aria-label={`${c.title}, ${c.product}. Opens the certificate in a new tab`}
                  >
                    <figure>
                      <div className="relative aspect-[3/4] overflow-hidden border border-line bg-white">
                        <Image
                          src={c.image}
                          alt={c.alt}
                          fill
                          sizes="(min-width: 1024px) 22vw, 45vw"
                          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                        />
                      </div>
                      <figcaption className="mt-3">
                        <span className="block font-semibold text-ink">{c.title}</span>
                        <span className="mt-0.5 block text-sm leading-snug text-body">{c.product}</span>
                        <span className="anno mt-1.5 block text-muted">{c.ref}</span>
                      </figcaption>
                    </figure>
                  </a>
                </li>
              ))}
            </ul>

            <dl className="mt-16 grid gap-x-10 gap-y-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {quality.pillars.map((p) => (
                <div key={p.title}>
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
    </section>
  );
}

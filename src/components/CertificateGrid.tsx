import Image from "next/image";
import type { Certificate } from "@/data/about";

/* The certificates Indus holds, each opening at full size in a new tab. */
export default function CertificateGrid({ items }: { items: Certificate[] }) {
  return (
    <ul className="grid max-w-4xl grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 sm:gap-x-6">
      {items.map((c) => (
        <li key={c.image}>
          <a
            href={c.image}
            target="_blank"
            rel="noopener noreferrer"
            className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            aria-label={`${c.title}, ${c.product}. Opens the certificate in a new tab`}
          >
            <figure>
              <div className="relative aspect-[5/7] overflow-hidden border border-line bg-white">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 896px) 13rem, (min-width: 640px) 22vw, 45vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
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
  );
}

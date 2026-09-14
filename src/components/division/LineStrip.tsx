import Image from "next/image";
import type { LinePhoto } from "@/data/divisions";

/* Full-bleed row of real photographs from the line, in process order.
   Scrolls sideways under the reader's own hand; no autoplay. */
export default function LineStrip({ title, photos, intro }: { title: string; photos: LinePhoto[]; intro?: string }) {
  return (
    <section className="border-t border-line bg-white py-16 sm:py-20">
      <div className="shell flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">{title}</h2>
        {intro && <p className="max-w-md text-sm text-muted">{intro}</p>}
      </div>
      <ol className="line-strip mt-8 flex gap-4 overflow-x-auto px-[clamp(1rem,2vw,2rem)] pb-4 sm:gap-5">
        {photos.map((p, i) => (
          <li key={p.src + i} className="w-[min(78vw,34rem)] shrink-0 snap-start">
            <figure>
              <div className="relative aspect-[3/2] overflow-hidden bg-soft">
                <Image src={p.src} alt={p.caption} fill sizes="(min-width: 640px) 34rem, 78vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 flex items-baseline gap-3 text-sm text-body">
                <span className="text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                {p.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ol>
    </section>
  );
}

import Image from "next/image";
import type { Dispatch } from "@/data/divisions";

/* The last stop on the line: finished, boxed stock waiting for trucks. */
export default function DispatchSection({ dispatch }: { dispatch: Dispatch }) {
  return (
    <section className="border-t border-line bg-white py-16 sm:py-20">
      <div className="shell grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-16">
        <div>
          <p className="text-sm text-muted">Dispatch</p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
            {dispatch.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-body sm:text-lg">{dispatch.body}</p>
          <ul className="mt-8 border-t border-line">
            {dispatch.points.map((p) => (
              <li key={p} className="border-b border-line py-3.5 text-[15px] text-ink">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <figure>
          <div className="relative aspect-[16/9] overflow-hidden bg-soft">
            <Image src={dispatch.image} alt={dispatch.alt} fill sizes="(min-width: 1024px) 55vw, 92vw" className="object-cover" />
          </div>
          <figcaption className="mt-3 text-sm text-muted">{dispatch.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}

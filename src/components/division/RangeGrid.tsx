import Image from "next/image";
import type { Model } from "@/data/divisions";

export default function RangeGrid({ title, note, models }: { title: string; note?: string; models: Model[] }) {
  return (
    <section className="bg-white">
      <div className="shell py-16 sm:py-24">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">{title}</h2>
          {note && <p className="max-w-lg text-sm leading-relaxed text-body">{note}</p>}
        </div>
        {models.every((m) => !m.image) ? (
          <ol className="mt-10 divide-y divide-line border-y border-line">
            {models.map((m) => (
              <li key={m.name} className="grid gap-3 py-6 sm:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] sm:gap-10">
                <div>
                  {m.series && <p className="text-sm text-muted">{m.series}</p>}
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">{m.name}</h3>
                  {m.sizes && <p className="mt-1 text-body">{m.sizes}</p>}
                </div>
                <ul className="space-y-1 text-body">
                  {m.specs.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        ) : (
        <ul className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((m) => (
            <li key={m.name}>
              <div className="relative aspect-[4/3] overflow-hidden bg-soft">
                {m.image && (
                  <Image src={m.image} alt={m.name} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" className="object-contain p-8" />
                )}
              </div>
              <div className="mt-4">
                {m.series && <p className="text-sm text-muted">{m.series}</p>}
                <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">{m.name}</h3>
                {m.sizes && <p className="mt-1 text-body">{m.sizes}</p>}
                <ul className="mt-3 space-y-1 border-t border-line pt-3 text-sm leading-relaxed text-body">
                  {m.specs.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        )}
      </div>
    </section>
  );
}

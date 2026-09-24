import Reveal from "@/components/Reveal";
import CertificateGrid from "@/components/CertificateGrid";
import { certificates, marks } from "@/data/export";

export default function Papers() {
  return (
    <section className="border-t border-line bg-soft">
      <div className="shell py-20 sm:py-28">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <div>
              <h2 className="display max-w-xl text-[clamp(2.2rem,4.5vw,3.75rem)] text-ink">
                The papers that travel with the product
                <span className="text-brand">.</span>
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-body">
                Every certificate opens at full size. Ask for the set for your market with your quotation.
              </p>
            </div>
            <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {marks.map((m) => (
                <div key={m.name} className="border-t border-line pt-4">
                  <dt className="font-semibold text-ink">{m.name}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-body">{m.note}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-14">
            <CertificateGrid items={certificates} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

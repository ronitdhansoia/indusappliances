import CertificateGrid from "@/components/CertificateGrid";
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

            <div className="mt-12">
              <CertificateGrid items={quality.certificates} />
            </div>

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

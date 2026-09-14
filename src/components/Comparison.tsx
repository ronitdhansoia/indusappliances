import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const rows = [
  {
    old: "Subcontracted steps, without notice",
    indus: "100% under one roof: tooling, fabrication, coating and assembly",
  },
  {
    old: "Vague delivery promises",
    indus: "30+ assembly lines and 5M+ units a year of committed capacity",
  },
  {
    old: "Quality inspected only at the end",
    indus:
      "Adaptive QC on every line, lifecycle-tested in our in-house lab, under 2% field failure",
  },
  {
    old: "Catalogue products, re-badged",
    indus:
      "ODM engineering around your spec. We were first to localise SS tank manufacturing",
  },
  {
    old: "Certification gaps you discover late",
    indus: "ISO 9001 · BEE star rated · ISI marked, current and auditable",
  },
  {
    old: "Enquiries that sit for weeks",
    indus: "Every enquiry answered within 24 hours on business days",
  },
];

export default function Comparison() {
  return (
    <section className="bg-white">
      <div className="shell py-20 sm:py-28">
        <Reveal>
          <SectionHeader
            title="Contract manufacturing, without the usual fine print"
          />
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-line shadow-sm">
            <div className="grid md:grid-cols-2">
              <p className="anno border-b border-line bg-soft px-7 py-4 text-muted">
                The usual way
              </p>
              <p className="anno hidden items-center gap-2 border-b border-line bg-white px-7 py-4 text-ink md:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                The Indus way
              </p>
              {rows.map((row, i) => (
                <div key={row.old} className="contents">
                  <div
                    className={`flex items-baseline gap-4 bg-soft px-7 py-5 ${
                      i < rows.length - 1 ? "border-b border-line" : ""
                    }`}
                  >
                    <span className="anno shrink-0 text-faint" aria-hidden>
                      ✕
                    </span>
                    <p className="text-[15px] leading-relaxed text-muted">
                      {row.old}
                    </p>
                  </div>
                  <div
                    className={`flex items-baseline gap-4 bg-white px-7 py-5 ${
                      i < rows.length - 1 ? "border-b border-line" : ""
                    }`}
                  >
                    <span className="anno shrink-0 text-brand" aria-hidden>
                      ✓
                    </span>
                    <p className="text-[15px] font-medium leading-relaxed text-ink">
                      {row.indus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

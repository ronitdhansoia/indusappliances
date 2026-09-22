import Link from "next/link";
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

function Cross() {
  return (
    <span
      aria-hidden
      className="mt-[2px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line text-faint transition-colors duration-300 group-hover:border-faint group-hover:text-muted"
    >
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 fill-none stroke-current stroke-[1.5]" strokeLinecap="round">
        <path d="M3 3l6 6M9 3l-6 6" />
      </svg>
    </span>
  );
}

function Check() {
  return (
    <span
      aria-hidden
      className="mt-[2px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-[0_6px_16px_-6px_rgba(227,34,39,0.7)] transition-transform duration-300 group-hover:scale-110"
    >
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 fill-none stroke-current stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 6.4l2.4 2.4 4.6-5" />
      </svg>
    </span>
  );
}

/* Two columns on one shared row grid, so each objection lines up with its
   answer. The Indus column sits on a raised dark panel that spans every
   row; on phones the pairs simply alternate down one column. */
export default function Comparison() {
  return (
    <section className="bg-white">
      <div className="shell py-20 sm:py-28">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-12">
            <h2 className="display max-w-3xl text-[clamp(2.2rem,4.5vw,3.75rem)] text-ink">
              Contract manufacturing, without the usual fine print
              <span className="text-brand">.</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-body lg:justify-self-end">
              Six things brands usually have to write into a contract, and how
              Indus handles each of them by default.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="cmp mt-12 sm:mt-16">
            <span className="cmp-panel grid-ink" aria-hidden />
            <p className="cmp-head cmp-head-old anno">The usual way</p>
            <p className="cmp-head cmp-head-indus anno">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
              The Indus way
            </p>
            {rows.map((row) => (
              <div key={row.old} className="group contents">
                <div className="cmp-cell cmp-old">
                  <Cross />
                  <p>{row.old}</p>
                </div>
                <div className="cmp-cell cmp-indus">
                  <Check />
                  <p>{row.indus}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-xl text-[15px] leading-relaxed text-muted sm:mt-12">
            Most customers visit the plant before their first order.{" "}
            <Link href="/contact" className="hero-link !text-ink">
              Come and see the line
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

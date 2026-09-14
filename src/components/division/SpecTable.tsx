import type { SpecTable as SpecTableData } from "@/data/divisions";

export default function SpecTable({ table }: { table: SpecTableData }) {
  return (
    <section className="border-t border-line bg-soft">
      <div className="shell py-16 sm:py-24">
        <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">{table.title}</h2>
        {table.note && <p className="mt-3 max-w-lg text-sm text-body">{table.note}</p>}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-ink/60 text-ink">
                {table.columns.map((c) => (
                  <th key={c} scope="col" className="py-3 pr-6 font-semibold">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((r) => (
                <tr key={r.join("|")} className="border-b border-line text-body">
                  {r.map((cell, i) => (
                    <td key={i} className={`py-3 pr-6 align-top ${i === 0 ? "font-semibold text-ink" : ""}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

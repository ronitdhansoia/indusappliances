import Link from "next/link";
import { divisionPages } from "@/data/divisions";

export default function DivisionNav({ slug }: { slug: string }) {
  const i = divisionPages.findIndex((d) => d.slug === slug);
  const prev = divisionPages[(i - 1 + divisionPages.length) % divisionPages.length];
  const next = divisionPages[(i + 1) % divisionPages.length];
  return (
    <nav aria-label="Other divisions" className="border-t border-line bg-white">
      <div className="shell grid grid-cols-2 py-8">
        <Link href={`/divisions/${prev.slug}`} className="group pr-4">
          <span className="text-sm text-muted">Previous line</span>
          <span className="mt-1 block font-display text-xl font-semibold tracking-[-0.02em] text-ink underline-offset-4 group-hover:underline sm:text-2xl">{prev.name}</span>
        </Link>
        <Link href={`/divisions/${next.slug}`} className="group pl-4 text-right">
          <span className="text-sm text-muted">Next line</span>
          <span className="mt-1 block font-display text-xl font-semibold tracking-[-0.02em] text-ink underline-offset-4 group-hover:underline sm:text-2xl">{next.name}</span>
        </Link>
      </div>
    </nav>
  );
}

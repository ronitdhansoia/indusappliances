import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import BrandMarquee from "@/components/BrandMarquee";
import DivisionHero from "@/components/division/DivisionHero";
import LineStrip from "@/components/division/LineStrip";
import RangeGrid from "@/components/division/RangeGrid";
import SpecTable from "@/components/division/SpecTable";
import DivisionNav from "@/components/division/DivisionNav";
import DivisionSubnav from "@/components/division/DivisionSubnav";
import { divisionBySlug, divisionPages, summaryFor } from "@/data/divisions";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return divisionPages.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = divisionBySlug(slug);
  if (!page) return {};
  return {
    title: `${page.name} | Indus Appliances`,
    description: page.lead,
  };
}

export default async function DivisionPageRoute({ params }: Props) {
  const { slug } = await params;
  const page = divisionBySlug(slug);
  const s = summaryFor(slug);
  if (!page || !s) notFound();

  return (
    <>
      <Navbar />
      <main>
        <div id="overview" className="under-header-offset">
          <DivisionHero page={page} capacity={s.capacity} capacityNote={s.capacityNote} />
        </div>
        <DivisionSubnav name={page.name} hasSpecs={Boolean(page.table)} />
        <section className="bg-white">
          <ul className="shell grid grid-cols-1 gap-x-8 gap-y-4 border-b border-line py-8 text-[15px] leading-snug text-body sm:grid-cols-2 lg:grid-cols-4">
            {page.facts.map((f) => (
              <li key={f} className="border-l border-line pl-4">{f}</li>
            ))}
          </ul>
        </section>
        <div id="range" className="subnav-offset">
          <RangeGrid title={page.rangeTitle} note={page.rangeNote} models={page.range} />
        </div>
        {page.table && (
          <div id="specs" className="subnav-offset">
            <SpecTable table={page.table} />
          </div>
        )}
        <div id="line" className="subnav-offset">
          <LineStrip title={page.lineTitle} photos={page.line} intro="Photographed on the Bahadurgarh floor." />
        </div>
        <DivisionNav slug={page.slug} />
        <BrandMarquee />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

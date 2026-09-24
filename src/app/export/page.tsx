import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandMarquee from "@/components/BrandMarquee";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
import ExportHero from "@/components/export/ExportHero";
import Manifest from "@/components/export/Manifest";
import Statement from "@/components/export/Statement";
import Papers from "@/components/export/Papers";
import Journey from "@/components/export/Journey";
import { countryCount } from "@/data/export";

export const metadata: Metadata = {
  title: "Export | Indus Appliances",
  description: `Water heaters, kitchen hoods, washing machines, air coolers, fans, motors and air fryers shipped from Bahadurgarh to ${countryCount} countries across the Middle East, South Asia, Africa, Europe and North America, with ISO 9001 and BIS certification.`,
};

export default function ExportPage() {
  return (
    <>
      <Navbar />
      <main>
        <ExportHero />
        <Manifest />
        <Statement />
        <Papers />
        <Journey />
        <section className="border-t border-line bg-white">
          <div className="shell pt-16 sm:pt-20">
            <Reveal>
              <h2 className="display max-w-3xl text-[clamp(1.9rem,3.4vw,3rem)] text-ink">
                Built for fifty brands
                <span className="text-brand">.</span>
              </h2>
            </Reveal>
          </div>
          <BrandMarquee />
        </section>
        <CtaSection
          map={false}
          title="Ship your next product from Bahadurgarh"
          body="Send a spec, a sketch or just a category, and tell us the market. We reply within 24 hours on business days."
          subject="Export enquiry"
        />
      </main>
      <Footer />
    </>
  );
}

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
          title="Want us to make your product?"
          body="Tell us what you want to sell and which country it is for. We will reply within one working day."
          subject="Export enquiry"
        />
      </main>
      <Footer />
    </>
  );
}

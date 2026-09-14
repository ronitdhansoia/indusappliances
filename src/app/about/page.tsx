import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import BrandMarquee from "@/components/BrandMarquee";
import AboutIndex from "@/components/about/AboutIndex";
import AboutOpening from "@/components/about/AboutOpening";
import GrowthLine from "@/components/about/GrowthLine";
import WhyIndus from "@/components/about/WhyIndus";
import FounderLetter from "@/components/about/FounderLetter";
import Board from "@/components/about/Board";
import VisionMission from "@/components/about/VisionMission";
import Quality from "@/components/about/Quality";
import Recognition from "@/components/about/Recognition";
import { aboutSections, growth } from "@/data/about";

export const metadata: Metadata = {
  title: "About Indus Appliances | OEM & ODM manufacturer since 2004",
  description:
    "Founded in Bahadurgarh in 2004 by Dinesh Garg, Indus Appliances has grown at nearly 30% a year into India's largest water heater OEM and a partner to fifty brands.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutIndex items={aboutSections} />
        <AboutOpening />
        <section id="growth" className="under-header-offset">
          <div className="shell py-20 sm:py-28">
            <div className="about-cols">
              <GrowthLine
                title={growth.title}
                rate={growth.rate}
                rateNote={growth.rateNote}
                body={growth.body}
                milestones={growth.milestones}
                facts={growth.facts}
              />
            </div>
          </div>
        </section>
        <WhyIndus />
        <FounderLetter />
        <Board />
        <VisionMission />
        <Quality />
        <Recognition />
        <BrandMarquee />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

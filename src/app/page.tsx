import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import CertMarquee from "@/components/CertMarquee";
import Divisions from "@/components/Divisions";
import Awards from "@/components/Awards";
import Process from "@/components/Process";
import Technology from "@/components/Technology";
import Comparison from "@/components/Comparison";
import StatementVideo from "@/components/StatementVideo";
import Milestones from "@/components/Milestones";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CertMarquee />
        <Divisions />
        <Process />
        <Awards />
        <StatementVideo />
        <Technology />
        <Comparison />
        <Milestones />
        <BrandMarquee />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

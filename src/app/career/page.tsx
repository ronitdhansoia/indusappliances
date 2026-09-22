import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareerHero from "@/components/career/CareerHero";
import ScaleGrid from "@/components/career/ScaleGrid";
import ProductionLine from "@/components/career/ProductionLine";
import People from "@/components/career/People";
import CareerPath from "@/components/career/CareerPath";
import WorkingAtIndus from "@/components/career/WorkingAtIndus";
import CareersBoard from "@/components/career/CareersBoard";
import OpenApplication from "@/components/career/OpenApplication";
import Closing from "@/components/career/Closing";
import { roles } from "@/data/careers";
import "./career.css";

export const metadata: Metadata = {
  title: "Careers | Indus Appliances",
  description:
    "Build what the world uses. Open roles in engineering, quality, production, sales and management at the Indus Appliances plant in Bahadurgarh, Haryana, and how to apply.",
};

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <main className="cr">
        <CareerHero count={roles.length} />
        <ScaleGrid />
        <ProductionLine />
        <People />
        <CareerPath />
        <WorkingAtIndus />
        <CareersBoard roles={roles} />
        <OpenApplication />
        <Closing />
      </main>
      <Footer />
    </>
  );
}

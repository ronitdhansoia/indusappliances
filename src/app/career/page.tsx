import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OpenRoles from "@/components/career/OpenRoles";
import { careerIntro, roles } from "@/data/careers";

export const metadata: Metadata = {
  title: "Careers | Indus Appliances",
  description:
    "Meaningful, inspiring, fun. Open roles in sales, design, quality and management at the Indus Appliances plant in Bahadurgarh, and how to apply.",
};

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative isolate flex min-h-[min(82svh,52rem)] flex-col justify-end overflow-hidden bg-night text-white">
          <Image
            src="/plant/team.jpg"
            alt="The Indus Appliances team seated and standing in front of the Bahadurgarh plant"
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-[50%_42%]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/50 to-night/10" aria-hidden />
          <div className="shell pb-10 pt-44 sm:pb-14">
            <p className="text-sm text-white/70">Careers</p>
            <h1 className="mt-3 max-w-[16ch] font-display text-[clamp(2.5rem,5.6vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
              {careerIntro.headline}
            </h1>
            <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                <span className="font-display text-xl font-semibold text-white sm:text-2xl">
                  {careerIntro.words.join(" ")}
                </span>{" "}
                {careerIntro.body}
              </p>
              <Link href="#roles" className="hero-link shrink-0">
                See the {roles.length} open roles
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="shell grid gap-10 py-16 sm:py-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <h2 className="font-display text-[clamp(1.75rem,3.4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
              For qualified candidates, we offer
            </h2>
            <ol className="divide-y divide-line border-y border-line">
              {careerIntro.offers.map((o) => (
                <li key={o} className="py-6 text-lg leading-relaxed text-body sm:text-xl">
                  {o}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <OpenRoles roles={roles} />
      </main>
      <Footer />
    </>
  );
}

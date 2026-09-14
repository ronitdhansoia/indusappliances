import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact | Indus Appliances",
  description: "Talk to Indus Appliances about your next product. Plant on the Delhi Rohtak Road in Bahadurgarh, office in Mangolpuri, New Delhi. Every enquiry answered within 24 hours on business days.",
};

const plantMap = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.plant)}`;
const officeMap = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.office)}`;

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative isolate flex min-h-[min(66svh,42rem)] flex-col justify-end overflow-hidden bg-night text-white">
          <Image src="/plant/aerial-entrance.jpg" alt="The entrance of the Indus Appliances plant from above" fill priority sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/55 to-night/15" aria-hidden />
          <div className="shell pb-10 pt-40 sm:pb-14">
            <p className="text-sm text-white/70">Contact</p>
            <h1 className="mt-3 max-w-[16ch] font-display text-[clamp(2.5rem,5.4vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.04em]">Come and see the line.</h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Send a spec, a sketch or just a category. Our engineering team answers every enquiry within 24 hours on business days, and the plant is 40 minutes from Delhi.
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="shell grid gap-12 py-16 sm:py-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">Plant</h2>
                <p className="mt-2 max-w-xs text-body">{contact.plant}</p>
                <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                  <a href={plantMap} target="_blank" rel="noopener noreferrer" className="hero-link !text-ink">Directions</a>
                  <a href={contact.salesPhoneHref} className="hero-link !text-ink">Sales, {contact.salesPhone}</a>
                  <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="hero-link !text-ink">WhatsApp</a>
                </p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">Office</h2>
                <p className="mt-2 max-w-xs text-body">{contact.office}</p>
                <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                  <a href={officeMap} target="_blank" rel="noopener noreferrer" className="hero-link !text-ink">Directions</a>
                  <a href={contact.hrPhoneHref} className="hero-link !text-ink">HR, {contact.hrPhone}</a>
                </p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">Email</h2>
                <p className="mt-2 text-body">
                  <a href={`mailto:${contact.email}`} className="hero-link !text-ink">{contact.email}</a> for sales and product enquiries
                </p>
                <p className="mt-1 text-body">
                  <a href={`mailto:${contact.careersEmail}`} className="hero-link !text-ink">{contact.careersEmail}</a> for careers
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">Tell us what you want to build</h2>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-soft">
          <div className="shell grid gap-8 py-16 sm:grid-cols-3 sm:py-20">
            {[
              ["Within 24 hours", "An engineer, not a form response, replies on business days."],
              ["Within a week", "A first proposal: platform, tooling route and indicative volume pricing."],
              ["Any time", "Visit the plant. Most customers do before their first order."],
            ].map(([when, what]) => (
              <div key={when} className="border-t border-line pt-4">
                <p className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">{when}</p>
                <p className="mt-2 text-body">{what}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

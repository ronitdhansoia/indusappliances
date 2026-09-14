import { contact } from "@/data/site";
import Reveal from "./Reveal";
import ExportMap from "./ExportMap";

export default function CtaSection() {
  return (
    <section id="contact" className="grid-ink scroll-mt-28 bg-night text-white">
      <div className="shell py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-16">
        <Reveal>
          <h2 className="display max-w-4xl text-[clamp(2.2rem,4.5vw,3.75rem)]">
            Put your next product on our line
            <span className="text-brand">.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-steel">
            Send us a spec, a sketch, or just a category, and our engineering
            team will answer within 24 hours on business days.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${contact.email}?subject=Quote%20request`}
              className="btn btn-primary"
            >
              Request a quote
            </a>
            <a href={contact.salesPhoneHref} className="btn btn-ghost-dark">
              Call sales · {contact.salesPhone}
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="anno text-steel underline-offset-4 transition-colors duration-200 hover:text-white hover:underline"
            >
              or message us on WhatsApp
            </a>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ExportMap />
        </Reveal>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { nav, contact } from "@/data/site";

export default function Footer() {
  const divisionLinks = nav.find((item) => item.children)?.children ?? [];

  return (
    <footer className="border-t border-line-dark bg-navy text-white">
      <div className="shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Image
              src="/misc/logo-white.png"
              alt="Indus Appliances"
              width={140}
              height={80}
              className="h-12 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-steel">
              Indus Appliances Private Limited, OEM & ODM partner in consumer
              durables since 2004, improving ordinary living through
              development and innovation.
            </p>
            <div className="anno mt-6 flex gap-5 text-steel">
              <a
                href={contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-white"
              >
                YouTube
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="anno text-steel">Company</p>
            <ul className="mt-4 space-y-2.5">
              {nav
                .filter((item) => !item.children)
                .map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/75 transition-colors duration-200 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          <nav aria-label="Divisions">
            <p className="anno text-steel">Divisions</p>
            <ul className="mt-4 space-y-2.5">
              {divisionLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="anno text-steel">Reach us</p>
            <ul className="mt-4 space-y-4 text-sm leading-relaxed text-white/75">
              <li>
                <span className="anno block text-steel">Plant</span>
                {contact.plant}
              </li>
              <li>
                <span className="anno block text-steel">Office</span>
                {contact.office}
              </li>
              <li className="space-y-1">
                <a
                  href={contact.salesPhoneHref}
                  className="block transition-colors duration-200 hover:text-white"
                >
                  {contact.salesPhone} · Sales
                </a>
                <a
                  href={contact.hrPhoneHref}
                  className="block transition-colors duration-200 hover:text-white"
                >
                  {contact.hrPhone} · HR
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="block transition-colors duration-200 hover:text-white"
                >
                  {contact.email}
                </a>
                <a
                  href={`mailto:${contact.careersEmail}`}
                  className="block transition-colors duration-200 hover:text-white"
                >
                  {contact.careersEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="anno mt-14 flex flex-col gap-2 border-t border-line-dark pt-6 text-steel sm:flex-row sm:justify-between">
          <p>© 2026 Indus Appliances Private Limited. All rights reserved.</p>
          <p>28.69°N 76.93°E · Made in Bahadurgarh, India</p>
        </div>
      </div>
    </footer>
  );
}

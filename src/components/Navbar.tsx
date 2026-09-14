"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { nav, contact } from "@/data/site";

function SocialIcons({ className = "" }: { className?: string }) {
  const icons = [
    {
      href: contact.youtube,
      label: "YouTube",
      path: "M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.28 5 12 5 12 5s-6.28 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.72 19 12 19 12 19s6.28 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z",
    },
    {
      href: contact.linkedin,
      label: "LinkedIn",
      path: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.2 8.4h4.6V23H.2V8.4Zm7.4 0h4.4v2h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.48 3.05 5.48 7.02V23h-4.6v-6.7c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V23H7.6V8.4Z",
    },
    {
      href: contact.whatsapp,
      label: "WhatsApp",
      path: "M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.35A10 10 0 1 0 12 2Zm5.3 14.1c-.23.63-1.32 1.2-1.83 1.24-.5.05-.97.23-3.27-.68-2.77-1.1-4.53-3.93-4.67-4.11-.13-.18-1.11-1.48-1.11-2.83s.7-2 .95-2.28c.25-.27.54-.34.72-.34h.52c.17 0 .4-.06.62.47.23.55.78 1.9.85 2.04.07.14.11.3.02.48-.08.18-.13.3-.25.46-.13.15-.27.34-.38.45-.13.13-.26.27-.11.52.14.25.64 1.06 1.38 1.72.95.85 1.75 1.11 2 1.24.25.12.4.1.54-.06.15-.16.62-.73.79-.98.17-.25.34-.2.57-.12.23.08 1.47.7 1.72.82.25.13.42.19.48.3.06.1.06.63-.17 1.26Z",
    },
  ];
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {icons.map((icon) => (
        <a
          key={icon.label}
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={icon.label}
          className="text-muted transition-colors duration-200 hover:text-ink"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
            <path d={icon.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileDivisions, setMobileDivisions] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const openRef = useRef(false);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  /* Expose the header's rendered height so the hero can fill exactly the
     rest of the viewport. Skipped while the mobile menu is open so the
     hero does not jump under it. */
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const publish = () => {
      if (openRef.current) return;
      document.documentElement.style.setProperty(
        "--header-h",
        `${el.offsetHeight}px`,
      );
    };
    publish();
    const ro = new ResizeObserver(publish);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      {/* Utility strip */}
      <div className="border-b border-line bg-soft">
        <div className="shell flex h-8 items-center justify-between gap-4">
          <p className="anno hidden truncate text-muted lg:block">
            ISO 9001 · BEE Star Rated · ISI Marked · 28.69°N 76.93°E
          </p>
          <div className="flex items-center gap-5">
            <a
              href={contact.salesPhoneHref}
              className="anno whitespace-nowrap text-muted transition-colors hover:text-ink"
            >
              Sales {contact.salesPhone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="anno hidden text-muted transition-colors hover:text-ink lg:block"
            >
              {contact.email}
            </a>
            <SocialIcons />
          </div>
        </div>
      </div>

      {/* Main bar: bright, frosted, hairline-separated */}
      <div className="border-b border-line bg-white/85 backdrop-blur-xl">
        <nav className="shell flex h-[88px] items-center justify-between gap-6">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/misc/logo.png"
              alt="Indus Appliances"
              width={143}
              height={80}
              className="h-[3.35rem] w-auto"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {nav.map((item) =>
              item.children ? (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className="nav-link flex items-center gap-1.5 py-2 text-[15px] font-medium text-ink/80 transition-colors duration-200 hover:text-ink"
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 10 6"
                      className="h-1.5 w-2.5 fill-none stroke-current stroke-[1.5] transition-transform duration-300 group-hover:rotate-180"
                    >
                      <path d="M1 1l4 4 4-4" />
                    </svg>
                  </Link>
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 ease-out group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="grid w-[30rem] grid-cols-2 gap-1 rounded-2xl border border-line bg-white p-2 shadow-xl shadow-ink/8">
                      {item.children.map((child, i) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="flex items-baseline gap-3 rounded-xl px-3.5 py-2.5 text-[13.5px] font-medium text-body transition-colors duration-200 hover:bg-soft hover:text-ink"
                          >
                            <span className="anno text-faint">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="nav-link py-2 text-[15px] font-medium text-ink/80 transition-colors duration-200 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${contact.email}?subject=Quote%20request`}
              className="btn btn-primary hidden !px-7 !py-3.5 sm:inline-flex"
            >
              Request a quote
            </a>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-line text-ink transition-colors hover:bg-soft lg:hidden"
            >
              <span
                className={`h-px w-5 bg-current transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-5 bg-current transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile menu: smooth height transition */}
        <div
          className={`grid overflow-hidden transition-[grid-template-rows] duration-400 ease-out lg:hidden ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0">
            <ul className="border-t border-line bg-white px-5 py-3">
              {nav.map((item) =>
                item.children ? (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => setMobileDivisions(!mobileDivisions)}
                      aria-expanded={mobileDivisions}
                      className="flex w-full items-center justify-between py-3.5 text-[15px] font-semibold text-ink"
                    >
                      {item.label}
                      <svg
                        viewBox="0 0 10 6"
                        className={`h-1.5 w-2.5 fill-none stroke-current stroke-[1.5] transition-transform duration-300 ${mobileDivisions ? "rotate-180" : ""}`}
                      >
                        <path d="M1 1l4 4 4-4" />
                      </svg>
                    </button>
                    {mobileDivisions && (
                      <ul className="mb-2 rounded-xl bg-soft p-2">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-body"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-3.5 text-[15px] font-semibold text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
              <li className="py-3">
                <a
                  href={`mailto:${contact.email}?subject=Quote%20request`}
                  className="btn btn-primary w-full"
                >
                  Request a quote
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

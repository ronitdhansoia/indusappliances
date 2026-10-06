"use client";

import { useEffect, useState } from "react";
import { contact } from "@/data/site";

const items = [
  { id: "overview", label: "Overview" },
  { id: "range", label: "Range" },
  { id: "specs", label: "Specs" },
  { id: "line", label: "On the line" },
];

/* Spine for the long division pages: pinned under the site header, tracks
   the section under the reading line, and keeps the quote action in reach. */
export default function DivisionSubnav({ name, hasSpecs }: { name: string; hasSpecs: boolean }) {
  const links = items.filter((i) => hasSpecs || i.id !== "specs");
  const [active, setActive] = useState("overview");

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.35;
      let current = links[0].id;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= line) current = l.id;
      }
      setActive(current);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasSpecs]);

  return (
    <nav aria-label={`${name} sections`} className="division-subnav sticky z-40 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="shell flex h-12 items-center gap-6">
        <span className="hidden shrink-0 text-sm font-semibold text-ink md:block">{name}</span>
        <ul className="flex min-w-0 flex-1 gap-5 overflow-x-auto text-sm sm:gap-7">
          {links.map((l) => (
            <li key={l.id} className="shrink-0">
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`subnav-link block py-3 transition-colors ${active === l.id ? "text-ink" : "text-muted hover:text-ink"}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${contact.email}?subject=Quote%20request%3A%20${encodeURIComponent(name)}`}
          className="hero-link hidden shrink-0 !text-ink sm:block"
        >
          Quote for {name.toLowerCase()}
        </a>
      </div>
    </nav>
  );
}

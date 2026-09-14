"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

/* Fixed page index in the left rail. Tracks the section under the reading
   line, hides once the closing blocks arrive, and inverts over dark ground
   via mix-blend-mode so it never needs its own background. */
export default function AboutIndex({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.38;
      let current = items[0]?.id ?? "";
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= line) current = item.id;
      }
      const last = document.getElementById(items[items.length - 1]?.id ?? "");
      const past = last ? last.getBoundingClientRect().bottom < line : false;
      setActive(current);
      setHidden(past);
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
  }, [items]);

  return (
    <nav
      aria-label="On this page"
      className="about-index hidden xl:block"
      data-hidden={hidden ? "true" : "false"}
    >
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

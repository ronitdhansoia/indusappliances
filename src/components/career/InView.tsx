"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode, type Ref } from "react";

type Tag = "div" | "section" | "ol" | "ul" | "li" | "figure" | "header";

/* Marks its element data-in="true" the first time it enters the viewport.
   The CSS in career.css does the rest: rules draw, lines slide up out of
   their masks, photographs uncover. Never nest one InView inside another;
   the selectors bind to any ancestor. */
export default function InView({
  as = "div",
  className,
  children,
  id,
  style,
  labelledBy,
  threshold = 0.12,
  rootMargin = "0px 0px -8% 0px",
}: {
  as?: Tag;
  className?: string;
  children: ReactNode;
  id?: string;
  style?: CSSProperties;
  labelledBy?: string;
  threshold?: number;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref as Ref<HTMLDivElement>}
      id={id}
      style={style}
      className={className}
      aria-labelledby={labelledBy}
      data-in={inView ? "true" : "false"}
    >
      {children}
    </Tag>
  );
}

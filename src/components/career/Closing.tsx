"use client";

import { useCallback, useRef } from "react";
import Image from "next/image";
import { closing } from "@/data/careers";
import { useScrollProgress } from "./useScrollProgress";
import InView from "./InView";
import Lines from "./Lines";

/* The plant at dusk, settling from a slight zoom as it scrolls through,
   then a seamless fade into the footer's navy. */
export default function Closing() {
  const ref = useRef<HTMLElement>(null);
  const onProgress = useCallback((p: number, el: HTMLElement) => {
    el.style.setProperty("--p", p.toFixed(4));
  }, []);
  useScrollProgress(ref, { mode: "enter", media: "(prefers-reduced-motion: no-preference)", onProgress });

  return (
    <section ref={ref} className="cr-closing" aria-labelledby="cr-closing-title">
      <Image src={closing.image.src} alt={closing.image.alt} fill sizes="100vw" />
      <span className="cr-closing-scrim" aria-hidden />
      <InView className="shell relative pb-14 pt-[44svh] sm:pb-20">
        <h2 id="cr-closing-title" className="cr-display">
          <Lines lines={closing.lines} />
        </h2>
      </InView>
    </section>
  );
}

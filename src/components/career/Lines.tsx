import type { CSSProperties } from "react";

/* A statement set one line per block, each line masked so it can slide up
   into place. --i staggers the lines; start offsets the stagger when other
   elements precede them. */
export default function Lines({ lines, start = 0 }: { lines: string[]; start?: number }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={line} className="cr-mask" style={{ "--i": start + i } as CSSProperties}>
          <span>{line}</span>
        </span>
      ))}
    </>
  );
}

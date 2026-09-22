/* Title block at the head of each sheet: its number, the sheet name and a
   note, joined by rules that draw once the block is in view. */
const SHEETS = "08";

export default function SheetHeader({ n, title, note }: { n: string; title: string; note?: string }) {
  return (
    <div className="cr-sheet cr-mono">
      <span>
        {n} / {SHEETS}
      </span>
      <span className="cr-sheet-rule" aria-hidden />
      <span>{title}</span>
      {note && (
        <>
          <span className="cr-sheet-rule" aria-hidden />
          <span className="cr-sheet-note">{note}</span>
        </>
      )}
    </div>
  );
}

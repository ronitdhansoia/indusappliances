/* Circular arrow badge. The parent (.cr-row or .cr-link) drives its hover. */
export default function Arrow({ dir = "right" }: { dir?: "right" | "down" }) {
  return (
    <span className="cr-arrow" data-dir={dir} aria-hidden="true">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <path d="M2 8h11M9 3l5 5-5 5" />
      </svg>
    </span>
  );
}

const items = [
  "ISO 9001",
  "BEE Star Rated",
  "ISI Marked",
  "50 Million Units",
  "Est. 2004",
  "OEM · ODM",
];

/* Full-width outlined-type ticker, after Irongrid's certification marquee */
export default function CertMarquee() {
  const row = [...items, ...items];
  return (
    <div
      className="edge-fade overflow-hidden border-b border-line bg-white py-7"
      aria-hidden
    >
      <div className="marquee-track animate-marquee flex w-max items-center gap-10">
        {row.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-10">
            <span className="outline-text whitespace-nowrap text-5xl sm:text-6xl">
              {item}
            </span>
            <span className="h-2 w-2 rounded-full bg-brand" />
          </span>
        ))}
      </div>
    </div>
  );
}

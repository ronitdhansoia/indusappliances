export default function SectionHeader({
  title,
  dark = false,
}: {
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-10 sm:mb-14">
      <h2
        className={`display max-w-3xl text-[clamp(1.9rem,3.4vw,3rem)] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

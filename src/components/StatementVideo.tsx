import Reveal from "./Reveal";

/* Full-bleed factory footage under a dark scrim: the page's one cinematic
   pause, in the spirit of Machin's sticky statement block. */
export default function StatementVideo() {
  return (
    <section className="relative flex min-h-[70svh] items-end overflow-hidden bg-night text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        src="/videos/welding.mp4"
        poster="/videos/welding-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/20"
        aria-hidden
      />
      <div className="shell relative pb-16 pt-40 sm:pb-20">
        <Reveal>
          <h2 className="display max-w-4xl text-[clamp(2.4rem,5vw,4.25rem)]">
            Crafted in India.{" "}
            <em className="font-medium not-italic text-steel">
              Trusted across borders.
            </em>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}

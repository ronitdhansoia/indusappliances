import Reveal from "@/components/Reveal";
import { statement } from "@/data/export";

/* Finished units leaving the line, under a dark scrim, with one claim. */
export default function Statement() {
  return (
    <section className="relative flex min-h-[64svh] items-end overflow-hidden bg-night text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        src={statement.video}
        poster={statement.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={statement.alt}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/45 to-night/15" aria-hidden />
      <div className="shell relative pb-16 pt-40 sm:pb-20">
        <Reveal>
          <h2 className="display max-w-4xl text-[clamp(2.4rem,5vw,4.25rem)]">{statement.title}</h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">{statement.body}</p>
        </Reveal>
      </div>
    </section>
  );
}

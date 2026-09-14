import { mission, vision } from "@/data/about";

export default function VisionMission() {
  return (
    <section id="vision" className="under-header-offset bg-night text-white">
      <div className="shell py-20 sm:py-32">
        <div className="about-cols">
          <div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              Where this is going
            </h2>
            <p className="mt-8 max-w-4xl font-display text-[clamp(1.5rem,2.6vw,2.5rem)] font-medium leading-[1.2] tracking-[-0.02em]">
              {vision.statement}
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-steel">
              {vision.future}
            </p>

            <div className="mt-20 grid gap-10 border-t border-line-dark pt-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.02em]">
                  Our mission
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-steel">
                  {mission.statement}
                </p>
              </div>
              <ul className="grid gap-x-10 sm:grid-cols-2">
                {mission.commitments.map((c) => (
                  <li
                    key={c}
                    className="border-b border-line-dark py-4 text-lg text-white/90"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { board } from "@/data/about";

export default function Board() {
  return (
    <section id="board" className="under-header-offset">
      <div className="shell py-20 sm:py-28">
        <div className="about-cols">
          <div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
              The board
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-body">
              Four directors lead Indus Appliances.
            </p>
            <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
              {board.map((person) => (
                <li key={person.name}>
                  <figure>
                    <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#e6e9ec]">
                      {person.image ? (
                        <Image
                          src={person.image}
                          alt={`Portrait of ${person.name}`}
                          fill
                          sizes="(min-width: 1024px) 22vw, 45vw"
                          className="object-cover object-top"
                        />
                      ) : (
                        <span
                          className="font-display text-[clamp(2.5rem,4vw,4rem)] font-semibold tracking-[-0.04em] text-faint"
                          aria-hidden
                        >
                          {person.initials}
                        </span>
                      )}
                    </div>
                    <figcaption className="mt-4">
                      <span className="block font-semibold text-ink">
                        {person.name}
                      </span>
                      <span className="text-sm text-muted">{person.role}</span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { brands } from "@/data/site";
import Reveal from "./Reveal";

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="edge-fade overflow-hidden">
      <div
        className={`marquee-track flex w-max items-center ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        }`}
      >
        {doubled.map((brand, i) => (
          <div
            key={`${brand}-${i}`}
            className="flex h-16 w-[7.5rem] shrink-0 items-center justify-center sm:h-36 sm:w-80"
          >
            <Image
              src={`/brands/${brand}.png`}
              alt={brand.replace(/-/g, " ")}
              width={260}
              height={260}
              className="h-16 w-[7.5rem] scale-125 object-contain opacity-90 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-32 sm:w-72 sm:scale-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BrandMarquee() {
  const half = Math.ceil(brands.length / 2);
  return (
    <Reveal>
      <div className="space-y-2 py-10 sm:space-y-6 sm:py-16">
        <Row items={brands.slice(0, half)} />
        <Row items={brands.slice(half)} reverse />
      </div>
    </Reveal>
  );
}

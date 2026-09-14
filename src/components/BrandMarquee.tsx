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
            className="flex h-28 w-64 shrink-0 items-center justify-center sm:h-36 sm:w-80"
          >
            <Image
              src={`/brands/${brand}.png`}
              alt={brand.replace(/-/g, " ")}
              width={260}
              height={260}
              className="h-24 w-56 object-contain opacity-90 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-32 sm:w-72"
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
      <div className="space-y-6 py-12 sm:py-16">
        <Row items={brands.slice(0, half)} />
        <Row items={brands.slice(half)} reverse />
      </div>
    </Reveal>
  );
}

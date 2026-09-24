import { worldMap } from "./world-dots";
import { quality } from "./about";
import { divisions, processSteps } from "./site";

/* The Export page. Destinations come from the map data, product lines
   from the divisions, certificates from the About page and the order
   steps from the home page, so one edit updates every page. */

export const exportHero = {
  headline: "Built in India. Shipped across borders.",
  lead: "Since 2004, more than fifty million appliances have left one plant in Bahadurgarh for fifty brands. Nine product lines ship from the same dock, built under an ISO 9001 system and carrying the ISI mark where a Bureau of Indian Standards licence applies.",
  image: {
    src: "/plant/shop-floor-2.jpg",
    alt: "Packed units waiting in the dispatch aisle of the Bahadurgarh plant",
  },
};

const regionOrder = ["Middle East", "South Asia", "Africa", "Europe", "North America"];

export type Region = { name: string; places: string[] };

/* Countries per region, with cities folded under their country. */
export const regions: Region[] = regionOrder.map((name) => {
  const byCountry = new Map<string, string[]>();
  for (const d of worldMap.destinations) {
    if (d.region !== name) continue;
    const cities = byCountry.get(d.country) ?? [];
    if (d.city) cities.push(d.city);
    byCountry.set(d.country, cities);
  }
  return {
    name,
    places: [...byCountry].map(([country, cities]) =>
      cities.length ? `${country} (${cities.join(", ")})` : country,
    ),
  };
});

export const countryCount = new Set(worldMap.destinations.map((d) => d.country)).size;

export const lines = divisions;
export const certificates = quality.certificates;
export const steps = processSteps;

export const marks = [
  { name: "ISO 9001 : 2015", note: "Quality management system, certified" },
  { name: "BIS / ISI mark", note: "Product licences for storage water heaters, single-phase motors and desert air coolers" },
  { name: "BEE star rating", note: "Energy-rated water heaters" },
  { name: "In-house test lab", note: "Lifecycle, energy and safety testing before dispatch" },
];

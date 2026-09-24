import { worldMap } from "./world-dots";
import { quality } from "./about";
import { divisions, processSteps } from "./site";

/* The Export page. Destinations come from the map data, product lines
   from the divisions, certificates from the About page and the order
   steps from the home page, so one edit updates every page. */

export const exportHero = {
  headline: "Built in India. Shipped across borders.",
  lead: "Since 2004, more than fifty million appliances have left one plant in Bahadurgarh for fifty brands. Nine product lines ship from the same dock, built under an ISO 9001 system and carrying the ISI mark where a Bureau of Indian Standards licence applies.",
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

export const figures = [
  { value: String(countryCount), label: "countries", note: "on the route map" },
  { value: String(regions.length), label: "regions", note: "Middle East to North America" },
  { value: String(divisions.length), label: "product lines", note: "from one plant" },
  { value: "50M+", label: "units built", note: "since 2004" },
];

/* Product marks documented on the site, by division id. ISO 9001 covers
   the plant's quality system and is stated once, above the manifest. */
const marksByLine: Record<string, string[]> = {
  "01": ["ISI mark, IS 302-2-21", "BEE star rated"],
  "06": ["ISI mark, IS 996"],
  "07": ["ISI mark, IS 3315"],
};

export const manifest = divisions.map((d) => ({ ...d, marks: marksByLine[d.id] ?? [] }));

export const statement = {
  title: "Tested before it's packed.",
  body: "Lifecycle, energy and safety testing in the in-house lab, on every line. Field failure rate: 0.2%.",
  video: "/videos/line-washers-conveyor.mp4",
  poster: "/videos/line-washers-conveyor-poster.jpg",
  alt: "Finished washing machines moving along the conveyor after test",
};

export const certificates = quality.certificates;

export const marks = [
  { name: "ISO 9001 : 2015", note: "Quality management system, certified" },
  { name: "ISI mark", note: "BIS licences for storage water heaters, single-phase motors and desert air coolers" },
  { name: "BEE star rating", note: "Energy-rated water heaters" },
  { name: "In-house test lab", note: "Lifecycle, energy and safety testing before dispatch" },
];

/* From the first email to the container: the two response promises from
   the contact page, then the plant's six-step process. */
export const journey = [
  { name: "Enquiry", detail: "Within 24 hours, our team reaches out to you." },
  { name: "Proposal", detail: "Within a week, you receive your proposal." },
  ...processSteps.map((s) => ({ name: s.name, detail: s.detail })),
];

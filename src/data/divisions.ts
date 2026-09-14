import { divisions as summary } from "./site";

export type Spec = { label: string; value: string };
export type Model = {
  name: string;
  series?: string;
  image?: string;
  sizes?: string;
  specs: string[];
};
export type LinePhoto = { src: string; caption: string };
export type Hero =
  | { kind: "video"; src: string; poster: string; alt: string }
  | { kind: "image"; src: string; alt: string }
  | { kind: "product"; src: string; alt: string };
export type SpecTable = { title: string; note?: string; columns: string[]; rows: string[][] };

export type DivisionPage = {
  slug: string;
  name: string;
  headline: string;
  lead: string;
  hero: Hero;
  facts: string[];
  lineTitle: string;
  line: LinePhoto[];
  rangeTitle: string;
  rangeNote?: string;
  range: Model[];
  table?: SpecTable;
};

const bySlug = Object.fromEntries(
  summary.map((d) => [d.href.replace("/divisions/", ""), d]),
);

export function summaryFor(slug: string) {
  return bySlug[slug];
}

export const divisionPages: DivisionPage[] = [
  {
    slug: "water-heaters",
    name: "Water heaters",
    headline: "The water heater line India's brands are built on.",
    lead: "Indus was the first ODM in India to localise stainless steel tank manufacturing, in 2004. Today the Bahadurgarh plant builds two million instant and storage water heaters a year, from the tank weld to the box.",
    hero: { kind: "product", src: "/range/wh-square-angle.webp", alt: "Square series storage water heater in white" },
    facts: [
      "2,000,000 units a year, the largest instant water heater OEM in India",
      "Eight series from 3 to 100 litres, instant and storage",
      "SS304 tanks and copper heating elements made in-house",
      "BEE star rated and ISI marked, IPX4 throughout",
    ],
    lineTitle: "Sheet to tank to test",
    line: [
      { src: "/plant/laser-cutting.jpg", caption: "Sheet laser cutting" },
      { src: "/plant/press-brake.jpg", caption: "CNC bending on the press brakes" },
      { src: "/plant/paint-booth.jpg", caption: "Powder coating" },
      { src: "/plant/fabrication-line.jpg", caption: "Fabrication line 1" },
      { src: "/plant/test-panel.jpg", caption: "High-voltage and earth test panel" },
      { src: "/plant/shop-floor.jpg", caption: "Dispatch aisle" },
    ],
    rangeTitle: "Eight series",
    rangeNote: "Every series runs 220 to 240 V, 50 to 60 Hz, adjustable from ambient to 75 °C, rated IPX4.",
    range: [
      { name: "Instant", image: "/range/wh-instant.webp", sizes: "3, 5.5 and 5.9 litres", specs: ["3 kW element", "0.65 bar rated pressure", "White, blue, black, grey and gold fronts"] },
      { name: "Square", image: "/range/wh-square.webp", sizes: "10, 15 and 25 litres", specs: ["2 kW element", "0.8 bar rated pressure", "White, gold and black glass fronts"] },
      { name: "Vertical metal", image: "/range/wh-vertical-metal.webp", sizes: "6, 10, 15 and 25 litres", specs: ["2 kW element", "Brushed steel body", "Digital or dial control"] },
      { name: "Vertical plastic", image: "/range/wh-vertical-plastic.webp", sizes: "6, 10, 15 and 25 litres", specs: ["2 kW element", "Lighter body, same tank", "Economical variant available"] },
      { name: "Sumo", image: "/range/wh-vertical-metal-angle.webp", sizes: "50, 70 and 100 litres", specs: ["2 kW element", "Vertical or horizontal mounting", "Up to 27 kg net"] },
      { name: "Super slim horizontal", image: "/range/wh-horizontal.webp", sizes: "10, 15 and 25 litres", specs: ["2 kW element", "350 mm tall", "Fits above a door or under a shelf"] },
    ],
    table: {
      title: "Series at a glance",
      columns: ["Series", "Capacities", "Element", "Pressure"],
      rows: [
        ["Instant", "3 / 5.5 / 5.9 L", "3 kW", "0.65 bar"],
        ["Square", "10 / 15 / 25 L", "2 kW", "0.8 bar"],
        ["Vertical metal", "6 / 10 / 15 / 25 L", "2 kW", "0.8 bar"],
        ["Vertical plastic", "6 / 10 / 15 / 25 L", "2 kW", "0.8 bar"],
        ["Vertical economical", "6 / 10 / 15 / 25 L", "2 kW", "0.8 bar"],
        ["Sumo", "50 / 70 / 100 L", "2 kW", "0.8 bar"],
        ["Sumo horizontal", "50 / 70 / 100 L", "2 kW", "0.8 bar"],
        ["Super slim horizontal", "10 / 15 / 25 L", "2 kW", "0.8 bar"],
      ],
    },
  },
  {
    slug: "kitchen-hoods",
    name: "Kitchen hoods",
    headline: "Nine hood families, cut, bent, wound and assembled under one roof.",
    lead: "From the sheet that becomes the canopy to the BLDC motor inside it, every part of an Indus hood is made on the Bahadurgarh floor. Pyramid to filterless, 60 to 90 centimetres, up to 1,600 cubic metres an hour.",
    hero: { kind: "image", src: "/plant/hood-assembly-wide.jpg", alt: "Kitchen hood assembly line 2 at the Bahadurgarh plant" },
    facts: [
      "200,000 units a year across nine families",
      "130 W BLDC motors with ten speeds and turbo, 45 to 55 dBA",
      "Heat auto-clean, motion and touch control, filterless designs",
      "Sheet laser cutting, CNC bending, turret punching and motors all in-house",
    ],
    lineTitle: "From the sheet to the showroom",
    line: [
      { src: "/plant/laser-cutting.jpg", caption: "Sheet laser cutting, BFC 3015" },
      { src: "/plant/press-brake-operator.jpg", caption: "CNC bending" },
      { src: "/plant/fabrication-line-sign.jpg", caption: "Fabrication line 1" },
      { src: "/plant/hood-body-riveting.jpg", caption: "Canopy riveting" },
      { src: "/plant/hood-assembly-line.jpg", caption: "Assembly line 2" },
      { src: "/plant/hood-motor-fit.jpg", caption: "Motor and blower fitting" },
      { src: "/plant/hood-final.jpg", caption: "Final inspection" },
      { src: "/plant/showroom.jpg", caption: "The sample room" },
    ],
    rangeTitle: "Nine families",
    rangeNote: "Most families come in AC and BLDC versions. Suction figures are at the inlet, within ten percent.",
    range: [
      { name: "Pyramid", image: "/range/hood-pyramid-60.webp", sizes: "60 cm", specs: ["90 W AC motor", "1,000 m³/h suction", "Push button or motion sensor"] },
      { name: "Curve", image: "/range/hood-curve-punch-60.webp", sizes: "60, 75 and 90 cm", specs: ["200 W AC or 130 W BLDC", "1,300 or 1,600 m³/h", "Curved toughened glass"] },
      { name: "Curve plane, auto-clean", image: "/range/hood-c-plane-60.webp", sizes: "60, 75 and 90 cm", specs: ["200 W AC or 130 W BLDC", "Heat auto-clean, 60 W strip", "Motion and touch control"] },
      { name: "T shape", image: "/range/hood-t-shape-90.webp", sizes: "60, 75 and 90 cm", specs: ["200 W AC or 130 W BLDC", "1,300 or 1,600 m³/h", "Digital display"] },
      { name: "Draw, 60 cm", image: "/range/hood-c-draw-60.webp", sizes: "60 cm", specs: ["130 W BLDC", "1,600 m³/h, ten speeds and turbo", "45 to 55 dBA"] },
      { name: "Draw, 90 cm", image: "/range/hood-c-draw-90.webp", sizes: "90 cm", specs: ["130 W BLDC", "1,600 m³/h", "Matte black or steel grey"] },
      { name: "Cube", image: "/range/hood-cube-60.webp", sizes: "60 cm", specs: ["130 W BLDC or 200 W induction", "1,500 m³/h", "Auto-clean, 58 dB"] },
      { name: "Inclined", image: "/range/hood-slant-60.webp", sizes: "60 cm", specs: ["200 W AC", "1,200 m³/h", "Touchless motion control"] },
      { name: "Oval, ductless", image: "/range/hood-oval-75.webp", sizes: "75 cm", specs: ["130 W BLDC", "Filterless and ductless", "Wall mounted, no chimney"] },
    ],
    table: {
      title: "Families compared",
      columns: ["Family", "Sizes", "Motor", "Suction", "Speeds", "Noise"],
      rows: [
        ["Pyramid", "60 cm", "90 W AC", "1,000 m³/h", "3", "55–65 dBA"],
        ["Curve", "60 / 75 / 90 cm", "200 W AC · 130 W BLDC", "1,300 · 1,600 m³/h", "3 · 10 + turbo", "55–65 · 45–55 dBA"],
        ["T shape", "60 / 75 / 90 cm", "200 W AC · 130 W BLDC", "1,300 · 1,600 m³/h", "3 · 10 + turbo", "55–65 · 45–55 dBA"],
        ["Draw", "60 / 90 cm", "200 W AC · 130 W BLDC", "1,400 · 1,600 m³/h", "3 · 10 + turbo", "55–65 · 45–55 dBA"],
        ["Cube", "60 cm", "130 W BLDC · 200 W induction", "1,500 · 1,200 m³/h", "—", "58 dB"],
        ["Inclined", "60 cm", "200 W AC", "1,200 m³/h", "—", "58 dB"],
        ["Oval ductless", "75 cm", "130 W BLDC", "Filterless", "—", "—"],
      ],
    },
  },
  {
    slug: "washing-machines",
    name: "Washing machines",
    headline: "Fully automatic top-loaders, in production since 2025.",
    lead: "The newest large line at Bahadurgarh builds 7 to 8 kilogram fully automatic top-load machines with diamond-pattern stainless drums, PCB control and self-cleaning tubs. Nine and ten kilogram capacities follow in 2026.",
    hero: { kind: "image", src: "/plant/wm-conveyor.jpg", alt: "Rows of finished top-load washing machines on the conveyor" },
    facts: [
      "300,000 units a year on a line commissioned in 2025",
      "7.0, 7.5 and 8.0 kg today, 9 and 10 kg from July 2026",
      "Diamond stainless drum, PCB control, self tub clean on every model",
      "Every machine runs a live wash and leak test before packing",
    ],
    lineTitle: "Down the line",
    line: [
      { src: "/plant/wm-line.jpg", caption: "Cabinet and drum marriage" },
      { src: "/plant/wm-line-2.jpg", caption: "Harness and PCB fitting" },
      { src: "/plant/wm-conveyor-2.jpg", caption: "Waiting for test" },
      { src: "/plant/wm-test-panel.jpg", caption: "Electrical safety test" },
      { src: "/plant/wm-test.jpg", caption: "Live wash cycle test" },
      { src: "/plant/wm-test-3.jpg", caption: "Water fill and drain check" },
    ],
    rangeTitle: "Three capacities, two lids",
    range: [
      { name: "7.0 kg", image: "/range/wm-compact.webp", specs: ["135 W aluminium-winding motor", "525 × 495 × 920 mm, 22 kg", "Knob programme selector, soft-closing lid"] },
      { name: "7.5 kg", image: "/range/wm-front.webp", specs: ["150 W aluminium-winding motor", "550 × 520 × 920 mm, 22 kg", "Soft-closing or opaque classic lid"] },
      { name: "8.0 kg", image: "/range/wm-angle.webp", specs: ["165 W aluminium-winding motor", "550 × 520 × 980 mm, 24 kg", "Soft-closing or transparent lid"] },
      { name: "Inside the drum", image: "/range/wm-open.webp", specs: ["Diamond-pattern stainless drum", "Strong pulsator, fuzzy logic wash", "Ten wash programmes, self tub clean"] },
    ],
    table: {
      title: "Specifications",
      note: "Class F or class B winding on every motor.",
      columns: ["Capacity", "Motor", "Size, mm", "Net weight", "Lid"],
      rows: [
        ["7.0 kg", "135 W", "525 × 495 × 920", "22 kg", "Soft closing"],
        ["7.5 kg", "150 W", "550 × 520 × 920 or 890", "22 or 21.5 kg", "Soft closing or opaque classic"],
        ["8.0 kg", "165 W", "550 × 520 × 980 or 950", "24 or 23.5 kg", "Soft closing or transparent"],
      ],
    },
  },
  {
    slug: "air-fryers",
    name: "Air fryers",
    headline: "The newest line on the floor.",
    lead: "Air fryer assembly was commissioned in 2026. Manual-knob and digital-touch series from 4 to 8 litres, built to the same test regime as everything else that leaves Bahadurgarh.",
    hero: { kind: "product", src: "/products/air-fryer.png", alt: "Digital touch air fryer" },
    facts: [
      "200,000 units a year, line commissioned in 2026",
      "4, 4.5, 5, 6, 7 and 8 litre baskets",
      "1,400 to 1,800 W, 80 to 200 °C, 60 minute timer",
      "Non-stick detachable basket, auto shut-off and cool-touch body",
    ],
    lineTitle: "Shared floor, same tests",
    line: [
      { src: "/plant/showroom-airfryers.jpg", caption: "Air fryers in the sample room" },
      { src: "/plant/fabrication-line.jpg", caption: "Sub-assembly line" },
      { src: "/plant/test-panel.jpg", caption: "Electrical safety test" },
      { src: "/plant/shop-floor-2.jpg", caption: "Packing and dispatch" },
    ],
    rangeTitle: "Two series",
    range: [
      { name: "Manual control", sizes: "4, 4.5, 5, 6, 7 and 8 litres", specs: ["Two-knob timer and temperature", "1,400 to 1,800 W", "Cool-touch handle and body"] },
      { name: "Digital touch", sizes: "4, 4.5, 5, 6, 7 and 8 litres", specs: ["Touch panel with presets", "80 to 200 °C, 60 minute timer", "Auto shut-off"] },
    ],
  },
  {
    slug: "fans",
    name: "Fans",
    headline: "A million fans a year, around motors we wind ourselves.",
    lead: "Table, pedestal and wall fans, farratas and heavy-duty air circulators, all built around double ball-bearing motors from the Indus motor line next door.",
    hero: { kind: "product", src: "/products/fans.png", alt: "Indus pedestal and table fans" },
    facts: [
      "1,000,000 units a year",
      "TPW, farrata and heavy-duty air circulator platforms",
      "Double ball-bearing motors wound in-house",
      "90 degree oscillation on pedestal and wall models",
    ],
    lineTitle: "The motor comes first",
    line: [
      { src: "/plant/winding-machine.jpg", caption: "Stator winding" },
      { src: "/plant/bearing-press.jpg", caption: "Bearing pressing" },
      { src: "/plant/motor-line-wide.jpg", caption: "Motor assembly line" },
      { src: "/plant/motor-test.jpg", caption: "Motor test bench" },
      { src: "/plant/fabrication-line.jpg", caption: "Final assembly" },
    ],
    rangeTitle: "Three platforms",
    range: [
      { name: "Table, pedestal and wall", specs: ["Double ball-bearing motor", "90 degree oscillation", "Three speeds"] },
      { name: "Farrata", specs: ["High-velocity metal blade", "Floor or wall mounting", "Industrial and domestic grades"] },
      { name: "Heavy-duty air circulator", specs: ["Continuous-duty motor", "Metal guard and blade", "Workshops and halls"] },
    ],
  },
  {
    slug: "motors",
    name: "Motors",
    headline: "The quiet part inside everything else we make.",
    lead: "Indus is India's largest BLDC motor manufacturer. The motor line winds, presses, balances and tests the motors that go into our own hoods, fans, coolers and washing machines, and supplies them to other brands.",
    hero: { kind: "video", src: "/videos/line-motor-winding.mp4", poster: "/videos/line-motor-winding-poster.jpg", alt: "A stator being hand-wound with copper wire on the motor line" },
    facts: [
      "200,000 motors a year, the largest BLDC motor maker in India",
      "BLDC and AC, 8 W pumps to 200 W hood motors",
      "Aluminium and copper windings, class F and class B insulation",
      "Every motor load-tested before it leaves the line",
    ],
    lineTitle: "Wind, press, balance, test",
    line: [
      { src: "/plant/motor-stator-line.jpg", caption: "Stator line" },
      { src: "/plant/winding-machine.jpg", caption: "Winding machine" },
      { src: "/plant/motor-stator-bench.jpg", caption: "Coil insertion" },
      { src: "/plant/bearing-press.jpg", caption: "Bearing pressing" },
      { src: "/plant/motor-assembly.jpg", caption: "Rotor and end-shield assembly" },
      { src: "/plant/motor-test.jpg", caption: "Load and insulation test" },
      { src: "/plant/motor-final.jpg", caption: "Finished motor" },
    ],
    rangeTitle: "What we wind",
    range: [
      { name: "BLDC hood motor", image: "/products/motor.png", specs: ["130 W", "Ten speeds and turbo", "45 to 55 dBA in the hood"] },
      { name: "AC hood motor", image: "/products/motor.png", specs: ["90 W and 200 W", "Three speeds", "Aluminium winding"] },
      { name: "Cooler main motor", image: "/products/motor.png", specs: ["90 to 150 W, 1,350 to 2,400 rpm", "100 or 110 mm diameter, 19 to 40 mm stack", "Thermal overload protector"] },
      { name: "Washing machine motor", image: "/products/motor.png", specs: ["135, 150 and 165 W", "Aluminium winding, class F or B", "Direct to pulsator"] },
    ],
    table: {
      title: "Motor families",
      columns: ["Motor", "Rating", "Goes into"],
      rows: [
        ["BLDC hood motor", "130 W, 10 speeds + turbo", "Kitchen hoods"],
        ["AC hood motor", "90 W, 200 W", "Kitchen hoods"],
        ["Cooler main motor", "90–150 W, 1,350–2,400 rpm", "Air coolers"],
        ["Cooler pump", "8, 16, 20 W", "Air coolers"],
        ["Swing motor", "Synchronous", "Air coolers"],
        ["Washing machine motor", "135, 150, 165 W", "Washing machines"],
        ["Fan motor", "Double ball bearing", "Fans"],
      ],
    },
  },
  {
    slug: "air-coolers",
    name: "Air coolers",
    headline: "Desert, personal and commercial coolers, 45 to 150 litres.",
    lead: "Indus entered air coolers in 2022 and now builds five model families on mechanical and electronic platforms, with the tanks moulded, the motors wound and the pads cut on the same site.",
    hero: { kind: "video", src: "/videos/line-coolers-row.mp4", poster: "/videos/line-coolers-row-poster.jpg", alt: "A row of finished air coolers moving down the line" },
    facts: [
      "400,000 units a year since 2022",
      "Five families from 45 litre personal to 150 litre commercial",
      "Ice chamber, honeycomb pads and four-way swing on every model",
      "One year product and two year motor warranty",
    ],
    lineTitle: "Moulded, wired, tested",
    line: [
      { src: "/plant/moulding-machine.jpg", caption: "Tank and body injection moulding" },
      { src: "/videos/line-cooler-fan-poster.jpg", caption: "Fan and motor mounting" },
      { src: "/videos/line-cooler-assembly-poster.jpg", caption: "Pad frame assembly" },
      { src: "/videos/line-cooler-panel-poster.jpg", caption: "Control panel fitting" },
      { src: "/videos/line-coolers-row-poster.jpg", caption: "Finished coolers on the line" },
    ],
    rangeTitle: "Five families",
    rangeNote: "Cooling efficiency is 75 percent across the range. Every cooler ships with anti-bacterial pads and multi-direction castors.",
    range: [
      { name: "Glacier Wave", series: "Mini desert", image: "/range/cooler-glacier-wave.webp", sizes: "45 and 55 litres", specs: ["8 to 9 metre air throw", "2,200 to 2,500 CMH, 95 to 105 W", "Cools up to 3,000 sq ft"] },
      { name: "Weather King", series: "Desert", image: "/range/cooler-weather-king.webp", sizes: "80 and 100 litres", specs: ["13 metre air throw", "3,800 CMH, 200 W, 16 inch blade", "Cools up to 5,000 sq ft"] },
      { name: "Polar Chill", series: "Semi-commercial", image: "/range/cooler-polar-chill.webp", sizes: "90 litres", specs: ["20 metre air throw", "7,500 CMH, 250 W", "20 inch blade"] },
      { name: "Snow Crest", series: "Semi-commercial", image: "/range/cooler-snow-crest.webp", sizes: "120 and 140 litres", specs: ["20 metre air throw", "7,800 CMH, 250 W", "20 inch blade"] },
      { name: "Supercool X", series: "Commercial", image: "/range/cooler-supercool-x.webp", sizes: "130 and 150 litres", specs: ["8,000 to 8,800 CMH", "300 W, 20 inch blade", "Halls, shops and workshops"] },
    ],
    table: {
      title: "Models compared",
      columns: ["Model", "Series", "Tank", "Air throw", "Air flow", "Power", "Blade"],
      rows: [
        ["Glacier Wave 45", "Mini desert", "45 L", "8–9 m", "2,200–2,500 CMH", "95–105 W", "12/13 in"],
        ["Glacier Wave 55", "Mini desert", "55 L", "8–9 m", "2,200–2,500 CMH", "105 W", "12/13 in"],
        ["Weather King 80", "Desert", "80 L", "13 m", "3,800 CMH", "200 W", "16 in"],
        ["Weather King 100", "Desert", "100 L", "13 m", "3,800 CMH", "200 W", "16 in"],
        ["Polar Chill 90", "Semi-commercial", "90 L", "20 m", "7,500 CMH", "250 W", "20 in"],
        ["Snow Crest 120", "Semi-commercial", "120 L", "20 m", "7,800 CMH", "250 W", "20 in"],
        ["Snow Crest 140", "Semi-commercial", "140 L", "20 m", "7,800 CMH", "250 W", "20 in"],
        ["Supercool X 130", "Commercial", "130 L", "—", "8,800 CMH", "300 W", "20 in"],
        ["Supercool X 150", "Commercial", "150 L", "—", "8,000 CMH", "300 W", "20 in"],
      ],
    },
  },
  {
    slug: "tools-and-moulds",
    name: "Tools and moulds",
    headline: "The tool room that makes the rest of the plant possible.",
    lead: "Small and medium injection moulds and press tools, cut on Haas machining centres from CAD/CAM, tried out on our own injection machines. It is how Indus went from buying parts to making them, and it takes outside work too.",
    hero: { kind: "video", src: "/videos/line-cnc-milling.mp4", poster: "/videos/line-cnc-milling-poster.jpg", alt: "A vertical machining centre cutting a mould cavity under coolant" },
    facts: [
      "CAD/CAM design and CNC machining in one room",
      "Moulds for white goods, automotive, lighting and electrical",
      "Complex 3-D profiles, tried on the plant's own injection machines",
      "Sheet laser cutting, CNC bending, power press and turret punching alongside",
    ],
    lineTitle: "Design, cut, try, run",
    line: [
      { src: "/plant/cnc-haas.jpg", caption: "Haas vertical machining centre" },
      { src: "/plant/cnc-chips.jpg", caption: "Cavity roughing" },
      { src: "/videos/line-mould-inspection-poster.jpg", caption: "Mould inspection" },
      { src: "/plant/moulding-operator.jpg", caption: "Mould trial on the injection floor" },
      { src: "/plant/moulding-machine.jpg", caption: "Production moulding" },
      { src: "/plant/laser-cutting.jpg", caption: "Sheet laser cutting" },
      { src: "/plant/press-brake-parts.jpg", caption: "Press tools in use" },
    ],
    rangeTitle: "What the room does",
    range: [
      { name: "Injection moulds", image: "/products/tools.png", specs: ["Small to medium tonnage", "White goods, automotive, lighting, electrical", "Complex 3-D core and cavity work"] },
      { name: "Press tools", image: "/plant/press-brake-parts.jpg", specs: ["Blanking, forming and punching tools", "For the plant's own sheet-metal lines", "Turret punch tooling"] },
      { name: "Machining", image: "/plant/cnc-haas-wide.jpg", specs: ["Haas vertical machining centres", "CAD/CAM programmed", "Fixtures and jigs for every line"] },
      { name: "Mould trials", image: "/plant/moulding-machine.jpg", specs: ["Tried on in-house injection machines", "First-off inspection", "Straight into production"] },
    ],
  },
];

export function divisionBySlug(slug: string) {
  return divisionPages.find((d) => d.slug === slug);
}

export const backwardIntegration = [
  { step: "Sheet laser cutting", text: "High-precision cutting for accurate parts.", image: "/plant/laser-cutting.jpg" },
  { step: "CNC bending", text: "Precision bending for consistent quality.", image: "/plant/press-brake.jpg" },
  { step: "Power press", text: "High-speed punching for accurate component forming.", image: "/plant/press-brake-parts.jpg" },
  { step: "CNC turret punching", text: "High-speed, accurate punching for productivity.", image: "/plant/laser-operator.jpg" },
  { step: "Sub-assembly", text: "Integrated sub-assemblies for higher efficiency.", image: "/plant/fabrication-line.jpg" },
];

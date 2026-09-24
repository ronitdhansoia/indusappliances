export const contact = {
  salesPhone: "+91 92180 16373",
  salesPhoneHref: "tel:+919218016373",
  hrPhone: "+91 87663 07495",
  hrPhoneHref: "tel:+918766307495",
  email: "info@indusgroup.co.in",
  careersEmail: "careers@indusgroup.co.in",
  whatsapp: "https://wa.me/+919218016373",
  youtube: "https://www.youtube.com/@indusappliances76",
  linkedin: "https://www.linkedin.com/company/indus-appliances-private-limited/",
  plant:
    "Delhi Rohtak Road, Village Jakhoda, Bahadurgarh, Haryana 124505, India",
  office: "A-34 Mangolpuri Industrial Area Phase-2, New Delhi 110034, India",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Business Divisions",
    href: "/divisions",
    children: [
      { label: "Water Heaters", href: "/divisions/water-heaters" },
      { label: "Kitchen Hoods", href: "/divisions/kitchen-hoods" },
      { label: "Washing Machines", href: "/divisions/washing-machines" },
      { label: "Air Fryers", href: "/divisions/air-fryers" },
      { label: "Fans", href: "/divisions/fans" },
      { label: "Motors", href: "/divisions/motors" },
      { label: "Air Coolers", href: "/divisions/air-coolers" },
      { label: "Heating Elements", href: "/divisions/heating-elements" },
      { label: "Tools & Moulds", href: "/divisions/tools-and-moulds" },
    ],
  },
  { label: "Smart Technology", href: "/smart-technology" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
];

export type Division = {
  id: string;
  name: string;
  capacity: string;
  capacityNote: string;
  blurb: string;
  image: string;
  href: string;
};

export const divisions: Division[] = [
  {
    id: "01",
    name: "Water Heaters",
    capacity: "2,000,000",
    capacityNote: "units / year",
    blurb:
      "India's largest instant water heater OEM. SS304 tanks, copper heating elements, glass-lined storage models, BEE star rated and ISI marked.",
    image: "/products/div-1.png",
    href: "/divisions/water-heaters",
  },
  {
    id: "02",
    name: "Kitchen Hoods",
    capacity: "200,000",
    capacityNote: "units / year",
    blurb:
      "Nine chimney families from pyramid to filterless with auto-clean, up to 1,600 m³/h suction, built end-to-end under one roof.",
    image: "/products/div-2.png",
    href: "/divisions/kitchen-hoods",
  },
  {
    id: "03",
    name: "Washing Machines",
    capacity: "300,000",
    capacityNote: "units / year",
    blurb:
      "Fully automatic 7 to 8 kg top-load machines with diamond stainless drums, engineered to the latest energy-efficiency standards.",
    image: "/products/div-3.png",
    href: "/divisions/washing-machines",
  },
  {
    id: "04",
    name: "Air Fryers",
    capacity: "200,000",
    capacityNote: "units / year",
    blurb:
      "Our newest line: assembly commissioned in 2026, delivering energy-efficient air fryers for every kitchen.",
    image: "/products/div-4.png",
    href: "/divisions/air-fryers",
  },
  {
    id: "05",
    name: "Fans",
    capacity: "1,000,000",
    capacityNote: "units / year",
    blurb:
      "TPW, farrata and heavy-duty air circulators with double ball-bearing motors and 90° oscillation.",
    image: "/products/fans.png",
    href: "/divisions/fans",
  },
  {
    id: "06",
    name: "Motors",
    capacity: "200,000",
    capacityNote: "units / year",
    blurb:
      "#1 BLDC motor manufacturer, the quiet, efficient core inside our fans, hoods and coolers.",
    image: "/products/motors.png",
    href: "/divisions/motors",
  },
  {
    id: "07",
    name: "Air Coolers",
    capacity: "400,000",
    capacityNote: "units / year",
    blurb:
      "Desert, personal and commercial coolers from 45 to 150 litres, on mechanical and electronic platforms.",
    image: "/products/air-cooler.png",
    href: "/divisions/air-coolers",
  },
  {
    id: "08",
    name: "Heating Elements",
    capacity: "2 & 3 kW",
    capacityNote: "copper elements, in-house",
    blurb:
      "The copper heating elements inside every Indus water heater, made on our own line: 2 kW for storage models and 3 kW for instant, rated 220 to 240 V.",
    image: "/plant/test-panel.jpg",
    href: "/divisions/heating-elements",
  },
  {
    id: "09",
    name: "Tools & Moulds",
    capacity: "CAD / CAM",
    capacityNote: "in-house tooling",
    blurb:
      "Small-to-medium moulds for automotive, white goods, lighting and electrical, with complex 3-D profiles cut from our own tool room.",
    image: "/products/tools.png",
    href: "/divisions/tools-and-moulds",
  },
];

/* Products surfaced in the Business Divisions menu. Each links to its
   division's range section. */
export const menuProducts = [
  { name: "Instant water heater", division: "Water heaters", href: "/divisions/water-heaters#range" },
  { name: "Square series storage heater", division: "Water heaters", href: "/divisions/water-heaters#range" },
  { name: "Curve plane auto-clean hood", division: "Kitchen hoods", href: "/divisions/kitchen-hoods#range" },
  { name: "Cube BLDC hood", division: "Kitchen hoods", href: "/divisions/kitchen-hoods#range" },
  { name: "8 kg top-load washer", division: "Washing machines", href: "/divisions/washing-machines#range" },
  { name: "Digital touch air fryer", division: "Air fryers", href: "/divisions/air-fryers#range" },
  { name: "Glacier Wave 45 L", division: "Air coolers", href: "/divisions/air-coolers#range" },
  { name: "Supercool X 150 L", division: "Air coolers", href: "/divisions/air-coolers#range" },
  { name: "130 W BLDC hood motor", division: "Motors", href: "/divisions/motors#range" },
  { name: "3 kW copper heating element", division: "Heating elements", href: "/divisions/heating-elements#range" },
  { name: "Pedestal fan", division: "Fans", href: "/divisions/fans#range" },
];

export const heroStats = [
  { value: "#1", label: "Instant water heater OEM in India" },
  { value: "#1", label: "BLDC motor manufacturer" },
  { value: "50M+", label: "Products supplied since 2004" },
  { value: "50+", label: "Global brands served" },
];

export const heroFacts = [
  "50 million units built since 2004",
  "9 product lines under one roof",
  "30+ assembly lines across 5 plants",
  "50 brands, from Havells to A.O. Smith",
];

export const statsBand = [
  { value: "50M+", label: "products supplied" },
  { value: "<2%", label: "field failure rate" },
  { value: "30+", label: "assembly lines" },
  { value: "5+", label: "manufacturing facilities" },
  { value: "1000+", label: "employees" },
  { value: "~30%", label: "revenue CAGR" },
];

export const brands = [
  "Havells",
  "Crompton",
  "Bajaj",
  "Voltas",
  "Haier",
  "Midea",
  "Ao-Smith",
  "Ariston",
  "Racold",
  "Hindware",
  "Kaff",
  "Signify",
  "Realme",
  "Reliance",
  "Flipkart",
  "Livpure",
  "BPL",
  "Onida",
  "Kenstar",
  "GM",
  "Intek",
  "Goldmedal",
  "Somany",
  "Infra-market",
  "RR",
  "CG",
  "VW",
  "Parryware",
];

export const awards = [
  {
    year: "2024–25",
    title: "Rotary RATN Award",
    recipient: "Mr. Dinesh Garg",
  },
  {
    year: "2022–23",
    title: "ISO 9001 Small Enterprises Award",
    recipient: "Mr. Dinesh Garg",
  },
  {
    year: "2012",
    title: "National Award: Quality Production in MSE, Electrical Home Appliances",
    recipient: "Ms. Ruby Garg",
  },
  {
    year: "2011",
    title: "National Award: Innovation in Micro Enterprises",
    recipient: "Ms. Ruby Garg",
  },
  {
    year: "2010",
    title: "National Award: Small Scale Entrepreneur",
    recipient: "Ms. Ruby Garg",
  },
  {
    year: "2002",
    title: "National Award: Small Scale Entrepreneur",
    recipient: "Mr. Dinesh Garg",
  },
  {
    year: "2001",
    title: "National Award: Automobile Parts, Sheet Metal",
    recipient: "Mr. Dinesh Garg",
  },
];

export const milestones = [
  {
    year: "2004",
    text: "First ODM in India to localise SS water heater tank manufacturing.",
  },
  { year: "2008", text: "First water heater assembly line commissioned." },
  {
    year: "2012",
    text: "Three new units set up for critical water heater components.",
  },
  {
    year: "2016",
    text: "Became India's largest water heater OEM & ODM manufacturer.",
  },
  { year: "2018", text: "Fan and motor assembly lines commissioned." },
  { year: "2022", text: "Entered air cooler manufacturing." },
  {
    year: "2025",
    text: "Fully automatic washing machine and kitchen hood production started.",
  },
  { year: "2026", text: "Air fryer assembly line commissioned." },
];

export const processSteps = [
  {
    name: "Design & Engineering",
    detail: "From market insight to CAD, concepts engineered around your brief.",
  },
  {
    name: "Tooling & Moulds",
    detail: "In-house tool room cuts complex 3-D profiles on CAD/CAM.",
  },
  {
    name: "Fabrication & Coating",
    detail: "Sheet metal forming and powder coating under one roof.",
  },
  {
    name: "Motor & Assembly",
    detail: "30+ lines assemble motors, electricals and finished goods.",
  },
  {
    name: "Testing & QC",
    detail: "Lifecycle, energy and safety testing in our in-house lab.",
  },
  {
    name: "Volume & Dispatch",
    detail: "Millions of units a year, shipped across borders on time.",
  },
];

export const technology = [
  {
    name: "Real-time process monitoring",
    detail: "Continuous optimisation across every production line.",
  },
  {
    name: "Adaptive quality control",
    detail: "Consistent output with zero compromise, line by line.",
  },
  {
    name: "Predictive maintenance",
    detail: "Downtime prevented before it happens; machine life extended.",
  },
  {
    name: "Automated data feedback",
    detail: "Faster, smarter decisions on the shop floor.",
  },
];

export const productionLine = [
  { name: "Water Heater", capacity: "2,000,000 / yr", image: "/products/water-heater.png" },
  { name: "Kitchen Hood", capacity: "200,000 / yr", image: "/products/hood-curve.png" },
  { name: "Air Cooler", capacity: "400,000 / yr", image: "/products/personal-cooler.png" },
  { name: "Pedestal Fan", capacity: "1,000,000 / yr", image: "/products/pedestal-fan.png" },
  { name: "Air Fryer", capacity: "200,000 / yr", image: "/products/air-fryer.png" },
  { name: "BLDC Motor", capacity: "200,000 / yr", image: "/products/motor.png" },
];

export const aboutOpening = {
  headline: "Started by one engineer in 2004. Now the factory behind fifty brands.",
  intro:
    "Indus Appliances Private Limited designs and manufactures consumer durables for other companies' brands. Dinesh Garg, a mechanical engineer and first-generation entrepreneur, founded it in Bahadurgarh, Haryana in 2004 with a small manufacturing setup. Today it is a trusted OEM and ODM partner to the leading names in the category, and it has grown every single year.",
  photoAlt: "Aerial view of the Indus Appliances plant in Bahadurgarh at dusk",
  photoCaption: "The Bahadurgarh plant on Delhi Rohtak Road, at dusk.",
};

export const growth = {
  title: "Grown every year since 2004",
  rate: "30%",
  rateNote: "compound annual growth, 2004 to today",
  body:
    "Since inception, Indus has grown at a compound annual rate of nearly thirty percent. Each step added a capability the previous one made possible: stainless steel tanks, then complete water heaters, then the components inside them, then motors, fans, coolers, washing machines, kitchen hoods and air fryers. The ambition has not changed: to be the partner of choice for world-class consumer products, and to set new benchmarks for Indian manufacturing on the global stage.",
  milestones: [
    {
      year: 2004,
      text: "The first ODM in India to localise stainless steel water heater tank manufacturing.",
    },
    { year: 2008, text: "First water heater assembly line commissioned." },
    {
      year: 2012,
      text: "Three new units set up for critical water heater components.",
    },
    {
      year: 2016,
      text: "Became India's largest water heater OEM and ODM manufacturer.",
    },
    { year: 2018, text: "Fan and motor assembly lines commissioned." },
    { year: 2022, text: "Entered air cooler manufacturing." },
    {
      year: 2025,
      text: "Fully automatic washing machine and kitchen hood production started.",
    },
    { year: 2026, text: "Air fryer assembly line commissioned." },
  ],
  facts: [
    "50 million products supplied",
    "Field failure rate under 2 percent",
    "More than 30 assembly lines",
    "More than 20 years in operation",
  ],
};

export type Pillar = {
  title: string;
  lead: string;
  points: [string, string][];
};

export const pillars: Pillar[] = [
  {
    title: "End to end, from the first sketch to the finished product",
    lead: "Indus is a full-service partner. Whether the product is a fan, a water heater, an air cooler or a washing machine, one turnkey process carries it from brief to box.",
    points: [
      [
        "Product design",
        "We listen closely to your brief and blend market insight with creative engineering to craft products that resonate.",
      ],
      [
        "Prototype and testing",
        "Every concept moves through rigorous trials to prove performance, safety and longevity.",
      ],
      [
        "Final assembly",
        "Modern facilities and strict quality control deliver products that work flawlessly, day in and day out.",
      ],
    ],
  },
  {
    title: "Collaboration at the core",
    lead: "We serve both OEM and ODM clients, and it is the collaborative way we work that sets us apart. Customers, suppliers and stakeholders take part in every phase.",
    points: [
      [
        "Innovate faster",
        "Real-time feedback fuels improvements and fresh ideas.",
      ],
      [
        "Optimise costs",
        "Shared insight uncovers smarter sourcing and leaner processes.",
      ],
      [
        "Guarantee satisfaction",
        "Transparency and teamwork build trust, and products you can count on.",
      ],
    ],
  },
  {
    title: "Building the future of consumer goods",
    lead: "Together with our partners, we keep pushing on three fronts.",
    points: [
      [
        "Innovation",
        "Adopting the latest technologies to solve tomorrow's challenges today.",
      ],
      [
        "Performance",
        "Designing for efficiency, reliability and long-term value.",
      ],
      [
        "Customer delight",
        "Every interaction, from enquiry to after-sales support, should feel seamless and supportive.",
      ],
    ],
  },
  {
    title: "People-driven, system-enabled",
    lead: "Our greatest asset is our people. Robust business systems let them be creative, work efficiently and keep growing. When the team thrives, your project benefits.",
    points: [
      ["Faster turnaround", "Decisions and changes move through the plant quickly."],
      ["Higher quality standards", "Owned by the people on the line, not only by inspection."],
      ["Proactive problem solving", "Issues are raised and fixed before they reach you."],
    ],
  },
];

export const founder = {
  name: "Dinesh Garg",
  role: "Founder and Managing Director",
  image: "/about/dinesh-garg.jpg",
  pull: "We don't just build machines. We build long-term value, trust and relationships that last.",
  letter: [
    "When I started Indus Appliances, my vision was simple: to build products that genuinely make a difference in people's lives. As a mechanical engineer by training and an entrepreneur at heart, I have always believed that innovation must go hand in hand with reliability and customer satisfaction.",
    "From day one, my goal has been to design products that not only meet real-world needs but also last longer and perform better, all while keeping them affordable. This approach has guided every decision we have made, from research and development to the way we engage with our customers.",
    "Back in 2004, I was humbled to receive recognition from the Honourable Prime Minister of India for our work in bringing practical, creative solutions to market. But the real reward has been watching our company grow, from a one-person venture to a trusted brand with a strong team of over 500 people.",
  ],
};

export type Director = {
  name: string;
  role: string;
  image: string | null;
  initials: string;
};

export const board: Director[] = [
  {
    name: "Dinesh Garg",
    role: "Founder and Managing Director",
    image: "/about/dinesh-garg.jpg",
    initials: "DG",
  },
  {
    name: "Ruby Garg",
    role: "Director",
    image: "/about/ruby-garg.jpg",
    initials: "RG",
  },
  {
    name: "Aaryan Garg",
    role: "Director",
    image: "/about/aaryan-garg.jpg",
    initials: "AG",
  },
  {
    name: "Surya Garg",
    role: "Director",
    image: "/about/surya-garg.jpg",
    initials: "SG",
  },
];

export const vision = {
  statement:
    "To be a globally trusted and preferred partner in consumer durables, transforming everyday living through innovation, intelligent manufacturing, superior quality and sustainable value creation.",
  future:
    "We envision a future where technology, engineering excellence and human ingenuity come together to create smarter, more reliable, energy-efficient and accessible products for homes and businesses worldwide.",
};

export const mission = {
  statement:
    "To design, develop and manufacture high-quality consumer durable products that deliver exceptional value to customers and partners.",
  commitments: [
    "Innovate continuously",
    "Deliver uncompromising quality",
    "Advance intelligent manufacturing",
    "Create customer value",
    "Build through backward integration",
    "Develop our people",
    "Grow responsibly",
  ],
};

export const quality = {
  certificate: {
    image: "/about/iso-9001.jpg",
    alt: "ISO 9001 quality management certificate issued to Indus Appliances",
    caption: "ISO 9001 certificate",
  },
  pillars: [
    {
      title: "We are pioneers",
      text: "Innovation is our legacy. We lead the way, shaping the industry with progressive creativity and pioneering tomorrow's solutions today.",
    },
    {
      title: "Total quality control",
      text: "Every product is monitored from inception to delivery, so that it meets thorough standards at every step.",
    },
    {
      title: "We test rigorously",
      text: "Every component and system is tested to surpass industry standards, for reliability and performance you can trust.",
    },
    {
      title: "Customer satisfaction",
      text: "A seamless experience from start to finish, with solutions that exceed expectations at every interaction.",
    },
  ],
};

export const aboutSections = [
  { id: "growth", label: "Growth" },
  { id: "why", label: "Why Indus" },
  { id: "founder", label: "From the founder" },
  { id: "board", label: "Board" },
  { id: "vision", label: "Vision and mission" },
  { id: "quality", label: "Quality" },
  { id: "recognition", label: "Recognition" },
];

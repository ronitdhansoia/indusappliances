export type Department =
  | "Engineering"
  | "Quality"
  | "Production"
  | "Sales"
  | "Management";

/* Departments in the order the filter shows them. Only those with at
   least one open role are rendered. */
export const departmentOrder: Department[] = [
  "Engineering",
  "Quality",
  "Production",
  "Sales",
  "Management",
];

export type Role = {
  slug: string;
  title: string;
  team: string;
  department: Department;
  experience: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  skills: string[];
};

/* Open roles, taken from the postings on the current Indus careers page. */
export const roles: Role[] = [
  {
    "slug": "chimney-production-head",
    "title": "Business development and OEM sales head",
    "team": "Sales",
    "department": "Sales",
    "experience": "10 to 15 years",
    "location": "Bahadurgarh, Haryana",
    "type": "Full time",
    "summary": "The Business Development / OEM Sales Head will be responsible for driving business growth by managing existing OEM/B2B customers and developing new business opportunities in the Home Appliances segment. The role requires strong technical understanding of products, commercial acumen, customer relationship management, and close coordination with internal departments to deliver customized solutions and achieve sales targets. The ideal candidate should have extensive experience in the Home Appliance manufacturing industry with excellent communication, presentation, negotiation, and project coordination skills.",
    "responsibilities": [
      "Handle Product Sales & Business Development for Home Appliance products.",
      "Manage OEM / B2B customers and develop new business opportunities.",
      "Strong understanding of products like Coolers, Fans, Geysers, Washing Machines, Chimneys & Motors.",
      "Coordinate with Production, Quality, R&D and Purchase departments.",
      "Prepare product presentations, costing and technical discussions with customers.",
      "Understand market trends, competitor analysis and customer requirements.",
      "Visit customers for meetings and product development discussions.",
      "Support new product launches and commercial negotiations. Achieve monthly and yearly sales targets."
    ],
    "qualifications": [
      "B.Tech / Diploma / MBA Marketing / Graduate"
    ],
    "skills": [
      "Excellent English Communication (Written & Verbal)",
      "Strong knowledge of MIS Reporting & Advanced Excel",
      "Good knowledge of ChatGPT / AI tools",
      "Professional email drafting and presentation skills",
      "Strong coordination and follow-up ability",
      "Smart, professional and organized personality",
      "Ability to work independently with management"
    ]
  },
  {
    "slug": "sales-production-manager",
    "title": "Sales and production manager",
    "team": "Sales and production",
    "department": "Production",
    "experience": "5 to 10 years",
    "location": "Bahadurgarh, Haryana",
    "type": "Full time",
    "summary": "The Sales / Production Manager is responsible for driving business growth while ensuring efficient production planning, execution, and timely product delivery. This role oversees sales performance, production operations, inventory management, quality standards, and cross-functional coordination to meet customer requirements and organizational objectives. The ideal candidate will possess strong leadership, analytical, and operational management skills with the ability to optimize resources, improve productivity, and achieve sales and production targets.",
    "responsibilities": [
      "Strong Sales & Product Management experience",
      "Technical knowledge of Home Appliances products",
      "Good communication & negotiation skills",
      "Knowledge of product development & manufacturing processes",
      "Ability to coordinate with Production, Quality & R&D teams",
      "Target-oriented and customer-focused approach."
    ],
    "qualifications": [
      "B.Tech / Diploma / MBA Marketing / Graduate"
    ],
    "skills": []
  },
  {
    "slug": "chimney-designer",
    "title": "Chimney designer",
    "team": "Design and engineering",
    "department": "Engineering",
    "experience": "0 to 2 years",
    "location": "Bahadurgarh, Haryana",
    "type": "Full time",
    "summary": "The Chimney Designer is responsible for the design, development, and continuous improvement of kitchen chimney products, ensuring they meet functional, aesthetic, quality, and regulatory requirements. The role involves creating innovative product designs, developing 2D and 3D models, preparing manufacturing drawings, and collaborating with cross-functional teams to bring new products from concept to production. The ideal candidate should have strong technical expertise in sheet metal design, airflow systems, product development, and manufacturing processes.",
    "responsibilities": [
      "Design and develop kitchen chimney products from concept through production.",
      "Create detailed 2D drawings, 3D models, and assembly designs using CAD software.",
      "Develop product specifications, BOMs (Bill of Materials), and manufacturing documentation.",
      "Design sheet metal components, housings, brackets, and structural assemblies.",
      "Collaborate with R&D, Production, Quality, Procurement, and Tool Room teams during product development.",
      "Optimize product designs for performance, manufacturability, cost, and reliability.",
      "Conduct prototype evaluation, product testing, and design validation.",
      "Ensure compliance with applicable safety, quality, and regulatory standards.",
      "Support New Product Development (NPD) activities, engineering changes, and product improvements.",
      "Coordinate with suppliers for component development and technical feasibility.",
      "Perform root cause analysis and implement design improvements based on customer feedback and field performance.",
      "Maintain engineering documentation, revision control, and product design records."
    ],
    "qualifications": [],
    "skills": [
      "Good coordination and reporting skills."
    ]
  },
  {
    "slug": "quality-npd-head-moter-dept",
    "title": "Quality and NPD head, motor department",
    "team": "Quality",
    "department": "Quality",
    "experience": "0 to 2 years",
    "location": "Bahadurgarh, Haryana",
    "type": "Full time",
    "summary": "The Quality / New Product Development (NPD) Head - Motor Department is responsible for leading quality assurance, product development, and continuous improvement initiatives for electric motor manufacturing. This role oversees the complete product lifecycle, from concept and design validation to production, ensuring all products meet quality standards, customer requirements, regulatory compliance, and cost objectives. The incumbent will work closely with R&D, production, procurement, and sales teams to develop innovative motor solutions while driving process excellence and reducing quality defects.",
    "responsibilities": [
      "Lead quality assurance and quality control activities for motor manufacturing operations.",
      "Manage the complete New Product Development (NPD) process from concept, prototyping, testing, validation, and commercialization.",
      "Develop and implement quality standards, inspection procedures, and testing protocols.",
      "Coordinate with design, production, procurement, and supplier teams to ensure smooth product development and manufacturing.",
      "Conduct root cause analysis and implement corrective and preventive actions (CAPA) for quality issues.",
      "Drive continuous improvement initiatives using Lean Manufacturing, Six Sigma, Kaizen, and other quality methodologies.",
      "Monitor product performance, warranty claims, customer complaints, and field failures to improve product reliability.",
      "Ensure compliance with industry standards, customer specifications, and regulatory requirements.",
      "Lead product validation, reliability testing, performance evaluation, and documentation.",
      "Manage supplier quality audits and incoming material quality for motor components.",
      "Prepare technical reports, quality dashboards, NPD progress reports, and management presentations.",
      "Mentor and lead quality and NPD teams while fostering a culture of innovation and operational excellence.",
      "Collaborate with cross-functional teams to achieve cost optimization, improved manufacturability, and faster product launches."
    ],
    "qualifications": [
      "Graduate / MBA / BBA / B.Com"
    ],
    "skills": [
      "Good communication and negotiation skills."
    ]
  },
  {
    "slug": "corporate-quality-head",
    "title": "Corporate quality head",
    "team": "Quality",
    "department": "Quality",
    "experience": "0 to 2 years",
    "location": "Bahadurgarh, Haryana",
    "type": "Full time",
    "summary": "The Corporate Quality Head is responsible for developing, implementing, and overseeing the organization's overall quality strategy to ensure excellence across all manufacturing facilities, products, and business operations. This leadership role drives quality assurance, quality control, supplier quality, customer satisfaction, regulatory compliance, and continuous improvement initiatives. The Corporate Quality Head collaborates with cross-functional teams to establish robust quality systems, standardize processes, enhance operational efficiency, and foster a culture of quality throughout the organization.",
    "responsibilities": [
      "Develop and implement corporate quality policies, systems, and standards across all manufacturing units.",
      "Lead Quality Assurance (QA), Quality Control (QC), Incoming Quality Control (IQC), In-Process Quality Control (IPQC), Outgoing Quality Control (OQC), Supplier Quality, and Customer Quality functions.",
      "Ensure compliance with ISO 9001 and other applicable industry standards, statutory requirements, and customer specifications.",
      "Drive continuous improvement initiatives using Lean Manufacturing, Six Sigma, Kaizen, 5S, and other quality methodologies.",
      "Monitor quality KPIs, defect rates, customer complaints, warranty claims, and cost of poor quality (COPQ), implementing corrective and preventive actions (CAPA) where required.",
      "Establish quality objectives, inspection standards, audit systems, and process control mechanisms across all operations.",
      "Lead internal and external quality audits, customer audits, supplier audits, and certification activities.",
      "Collaborate with R&D, Production, Procurement, Engineering, Sales, and Service teams to improve product quality, reliability, and manufacturability.",
      "Strengthen supplier quality management through qualification, performance monitoring, and development programs.",
      "Review and approve quality documentation, SOPs, control plans, inspection procedures, and quality reports.",
      "Lead root cause analysis, risk assessments, and quality improvement projects to eliminate recurring issues.",
      "Build, mentor, and develop high-performing quality teams while promoting a culture of accountability and operational excellence.",
      "Present quality performance, compliance status, and strategic improvement plans to senior management and executive leadership."
    ],
    "qualifications": [],
    "skills": [
      "Knowledge of product specifications, manufacturing processes and market requirements."
    ]
  },
  {
    "slug": "iqc-head",
    "title": "IQC head",
    "team": "Quality",
    "department": "Quality",
    "experience": "0 to 2 years",
    "location": "Bahadurgarh, Haryana",
    "type": "Full time",
    "summary": "The IQC Head is responsible for leading the Incoming Quality Control function to ensure that all raw materials, purchased components, and supplier deliveries meet the company's quality standards and technical specifications before being released for production. This role oversees inspection processes, supplier quality performance, quality documentation, and cross-functional coordination to minimize defects, improve supplier quality, and support uninterrupted manufacturing operations. The IQC Head plays a key role in driving continuous improvement, maintaining compliance with quality management systems, and ensuring only approved materials enter the production process.",
    "responsibilities": [
      "Lead and manage all Incoming Quality Control (IQC) activities for raw materials, components, and purchased parts.",
      "Develop and implement inspection standards, sampling plans, and quality control procedures.",
      "Ensure incoming materials comply with engineering drawings, specifications, and quality requirements.",
      "Monitor supplier quality performance and coordinate corrective and preventive actions (CAPA) with suppliers.",
      "Investigate non-conforming materials, perform root cause analysis, and ensure timely resolution.",
      "Coordinate with Procurement, Production, Engineering, and Supplier Quality teams to resolve material quality issues.",
      "Maintain inspection records, quality reports, non-conformance reports (NCRs), and supplier quality documentation.",
      "Conduct supplier audits and support supplier qualification and development initiatives.",
      "Analyze quality trends, defect data, and key performance indicators (KPIs) to identify improvement opportunities.",
      "Ensure compliance with ISO 9001 and other applicable quality management standards.",
      "Train, mentor, and supervise the IQC team to maintain high inspection accuracy and productivity.",
      "Drive continuous improvement initiatives to reduce incoming defects, improve supplier performance, and optimize inspection efficiency."
    ],
    "qualifications": [],
    "skills": [
      "Ability to handle OEM customers independently."
    ]
  },
  {
    "slug": "ea-to-director",
    "title": "Executive assistant to the Director",
    "team": "Management office",
    "department": "Management",
    "experience": "5 to 6 years",
    "location": "Bahadurgarh, Haryana",
    "type": "Full time",
    "summary": "The Executive Assistant to the Director provides high-level administrative, strategic, and operational support to ensure the Director's office functions efficiently. This role requires exceptional organizational skills, strong communication abilities, and the capability to manage confidential information with discretion. The Executive Assistant acts as a key point of coordination between the Director, internal departments, clients, and external stakeholders while managing schedules, correspondence, meetings, travel, and business priorities.",
    "responsibilities": [
      "Work closely with Director for daily business operations and management coordination.",
      "Prepare MIS Reports, Production Reports, Sales Reports and Management Dashboards.",
      "Handle professional email communication and meeting coordination.",
      "Prepare presentations, MOM (Minutes of Meeting) and business summaries.",
      "Use AI tools like OpenAI ChatGPT for reporting, drafting and data management support.",
      "Coordinate with Production, Purchase, Sales, Quality and HR departments.",
      "Maintain confidential business data and reports.",
      "Follow-up with department heads for daily and monthly updates.",
      "Support management in data analysis and decision-making."
    ],
    "qualifications": [
      "Graduate / MBA / BBA / B.Com"
    ],
    "skills": [
      "Knowledge of product specifications, manufacturing processes and market requirements."
    ]
  }
];

/* Page copy. Every number and claim below is taken from content that
   already exists on the site (site.ts, about.ts, divisions.ts) or from the
   original careers page. Nothing is invented. */

/* What the original careers page offers qualified candidates, verbatim. */
export const offers = [
  "A friendly and flexible environment with lots of autonomy and meaningful work for everyone.",
  "Funding for work-related courses and training to accelerate your professional development.",
  "Smart, talented co-workers, all growing and enjoying working together to help us shape a better future.",
];

export const hero = {
  lines: ["Build", "what the", "world uses."],
  body: "Behind every appliance is a team of engineers, makers, operators and problem-solvers turning ideas into products used every day.",
  image: {
    src: "/plant/hood-assembly-line.jpg",
    alt: "Kitchen hood assembly line 2 at the Bahadurgarh plant, with an operator fitting a hood body in the foreground and colleagues working down the line",
    caption: "Kitchen hood assembly line 2",
  },
  marks: {
    place: "Bahadurgarh, India",
    coords: "28.69° N / 76.93° E",
    est: "Est. 2004",
    kind: "OEM / ODM manufacturing",
  },
  statement: ["Your work doesn't stay on a screen.", "It leaves the factory."],
};

/* Figures from site.ts heroFacts and statsBand, and about.ts growth.facts. */
export const scale = {
  figures: [
    { value: "50M+", label: "Products built", note: "since 2004" },
    { value: "9", label: "Product lines", note: "under one roof" },
    { value: "30+", label: "Assembly lines", note: "in Bahadurgarh" },
    { value: "20+", label: "Years of manufacturing", note: "founded 2004" },
  ],
  body: "Since 2004, Indus has designed, tooled and built water heaters, kitchen hoods, washing machines, air coolers, fans, motors, heating elements and air fryers in Bahadurgarh, Haryana, for more than fifty brands.",
};

export type Stage = {
  name: string;
  body: string;
  image: string;
  alt: string;
  caption: string;
};

export const stages: Stage[] = [
  {
    name: "Design",
    body: "Ideas begin as sketches, requirements and engineering decisions.",
    image: "/plant/office-desk.jpg",
    alt: "An engineer working on a drawing at a desk in the plant office",
    caption: "Engineering office",
  },
  {
    name: "Engineering",
    body: "Concepts become drawings, bills of materials and specifications a line can build.",
    image: "/plant/hood-parts-bench.jpg",
    alt: "Kitchen hood components laid out on a bench: glass panel, motor, blower, impellers and control boards",
    caption: "Hood components on the bench",
  },
  {
    name: "Tooling",
    body: "Those ideas become physical production systems, cut in our own tool room on CAD/CAM.",
    image: "/plant/cnc-haas.jpg",
    alt: "A Haas vertical machining centre cutting a mould block in the tool room",
    caption: "Tool room, CNC machining",
  },
  {
    name: "Fabrication",
    body: "Sheet is laser cut, bent on CNC press brakes and powder coated under one roof.",
    image: "/plant/laser-cutting.jpg",
    alt: "Two operators at the BFC 3015 sheet laser cutting machine",
    caption: "Sheet laser cutting, BFC 3015",
  },
  {
    name: "Assembly",
    body: "Components become products across more than thirty high-volume manufacturing lines.",
    image: "/plant/motor-line-wide.jpg",
    alt: "Operators on the motor assembly line with a bench of wound stators in front of them",
    caption: "Motor assembly line",
  },
  {
    name: "Quality",
    body: "Every product earns the right to leave the factory. Lifecycle, energy and safety testing happens in-house.",
    image: "/plant/motor-test.jpg",
    alt: "A technician testing a motor on the bench in the test room",
    caption: "Motor test bench",
  },
  {
    name: "Dispatch",
    body: "Millions of units a year, shipped on time to brands across India and beyond.",
    image: "/plant/wm-conveyor.jpg",
    alt: "A row of finished top-load washing machines moving along the conveyor",
    caption: "Finished washing machines on the conveyor",
  },
];

export const people = {
  lines: ["Machines build products.", "People build Indus."],
  photos: [
    {
      src: "/plant/team.jpg",
      alt: "The Indus Appliances team seated and standing in front of the Bahadurgarh plant",
      caption: "The team, in front of the plant",
    },
    {
      src: "/plant/hood-final-check.jpg",
      alt: "Two colleagues checking a finished kitchen hood at the end of the line",
      caption: "Final inspection, kitchen hood line",
    },
    {
      src: "/plant/motor-stator-bench.jpg",
      alt: "An operator fitting a stator at the motor assembly bench",
      caption: "Motor assembly bench",
    },
  ],
  values: [
    {
      name: "Ownership",
      body: "Make decisions. Take responsibility for the outcome. Every position at Indus plays a central role in its projects and in the growth of the company.",
    },
    {
      name: "Learning",
      body: "Build skills through real products, real problems and real production. Work-related courses and training are funded.",
    },
    {
      name: "Collaboration",
      body: "Engineering, production, quality, sales and leadership work as one system. Most roles here coordinate across departments every day.",
    },
    {
      name: "Impact",
      body: "The work you do becomes something physical, built in volume and used every day.",
    },
  ],
};

export const path = {
  lines: ["Don't just join a role.", "Build a career."],
  steps: [
    {
      name: "Learn",
      body: "Start with real work on real lines, alongside people who know their craft.",
    },
    {
      name: "Build",
      body: "Take products, processes and problems end to end, from concept through production.",
    },
    {
      name: "Own",
      body: "Exercise autonomy in your decisions and take responsibility for the result.",
    },
    {
      name: "Lead",
      body: "Build, mentor and lead teams as the lines keep growing.",
    },
  ],
  training: {
    title: "Training, funded.",
    body: offers[1],
  },
};

export const working = {
  items: [
    {
      lines: ["Real responsibility.", "From day one."],
      body: "Every position at Indus is impactful and plays a central role in our projects and in the growth of the company. You are encouraged to exercise autonomy in your decision-making.",
      image: "/plant/moulding-operator-2.jpg",
      alt: "An operator at the controls of an injection moulding machine",
      caption: "Injection moulding",
    },
    {
      lines: ["Learn while", "building."],
      body: "Skills are built on real products and real production, and Indus funds work-related courses and training to accelerate your professional development.",
      image: "/plant/office-meeting.jpg",
      alt: "Two colleagues working through figures together at a desk",
      caption: "Plant office",
    },
    {
      lines: ["Work with people", "who know their craft."],
      body: "Smart, talented co-workers, all growing and enjoying working together. Quality here is owned by the people on the line, not only by inspection.",
      image: "/plant/winding-machine.jpg",
      alt: "An operator at the motor winding machine",
      caption: "Motor winding",
    },
    {
      lines: ["See your work", "become real."],
      body: "Nine product lines. More than thirty assembly lines. Fifty million products since 2004, in homes across India and beyond.",
      image: "/plant/wm-conveyor-2.jpg",
      alt: "Finished washing machines lined up on the conveyor after test",
      caption: "Washing machine line, after test",
    },
  ],
};

export const positions = {
  lines: ["Find your place", "on the line."],
  note: "Every role is at the Bahadurgarh plant.",
};

export const apply = {
  lines: ["Ready to", "build with us?"],
  body: "Pick a role or apply generally. Sending opens an email to the HR team with your details filled in. Attach your CV before you send it. We reply within five working days.",
  attachNote: "Your mail app opens with the details filled in. Attach your CV, then send.",
  sentNote: "Your mail app should now be open. Attach your CV, then send.",
};

export const openApplication = {
  lines: ["Don't see", "your role?"],
  answer: ["We still want", "to hear from you."],
  body: "Our lines keep growing. Send us your CV and we'll keep you in mind for what comes next.",
  cta: "Send an open application",
};

export const closing = {
  lines: ["Made in Bahadurgarh.", "Built by people who care how things are made."],
  image: {
    src: "/about/plant-dusk.jpg",
    alt: "The Indus Appliances plant in Bahadurgarh at dusk, seen from above",
  },
};

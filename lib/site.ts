export const site = {
  name: "TheMellCode",
  url: "https://themellcode.com",
  email: "info@themellcode.com",
  linkedin: "https://www.linkedin.com/in/mjlessington",
  calendly: "https://calendly.com/mjlessington/it-consultation",
  intakeForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSfE4M3nZTPhNjS9_7INvEMe6FYevpJSJq1Z4W2oNy86F8RskQ/viewform?embedded=true",
  areas: ["Atlanta, GA", "Charlotte, NC"],
  description:
    "TheMellCode helps small businesses and nonprofits in Atlanta and Charlotte cut busywork. We assess how your team works, then build the right fix: a simple automation, an AI tool, or stronger IT underneath.",
};

export const assessment = {
  name: "Workflow Assessment",
  price: "$950",
  priceNote: "Fixed price. Credited toward any build project booked within 60 days.",
  timeline: "About 2 weeks",
  summary:
    "Before anyone recommends a tool, we look at how work actually moves through your team. You get a clear picture of where time is going and a plan to get it back, with costs and expected hours saved for every fix.",
  parts: [
    {
      title: "Kickoff interview",
      body: "60 to 90 minutes with you and one or two staff to map how work moves today.",
    },
    {
      title: "Workflow map",
      body: "Your 3 most time-consuming processes, drawn out step by step, with hours spent per week.",
    },
    {
      title: "Recommendations",
      body: "The right fix for each process (automation, AI, a process change, or IT) with cost and expected hours saved.",
    },
    {
      title: "90-day roadmap",
      body: "A prioritized plan that puts the quick wins first.",
    },
    {
      title: "Readout",
      body: "A 45-minute walkthrough call and a written report you keep.",
    },
  ],
};

export const faqs = [
  {
    q: "How long does the assessment take?",
    a: "About two weeks from kickoff to readout. Your team spends roughly two to three hours in total: the kickoff interview, a few follow-up questions, and the readout call.",
  },
  {
    q: "What do you need from us?",
    a: "Time with the owner and one or two people who do the day-to-day work, plus a look at the tools you use now.",
  },
  {
    q: "What happens after the readout?",
    a: "You choose. We can build the top fixes for a fixed price, support you on a monthly retainer, or you can take the roadmap and run with it yourself. If you book a build within 60 days, the $950 is credited toward it.",
  },
  {
    q: "What if the answer isn't AI?",
    a: "Then we won't recommend AI. Many processes need a simple automation, a cleaner handoff, or better IT underneath. The assessment tells you which, and we don't take product commissions.",
  },
  {
    q: "Do you work outside Atlanta and Charlotte?",
    a: "Yes. We meet clients in the Atlanta and Charlotte areas in person, and the assessment works just as well over video for teams elsewhere in the US.",
  },
];

export const featuredService = {
  title: "Automation & AI",
  summary:
    "We map your workflows first, then match each one to the right fix. Sometimes that's a simple automation, sometimes it's AI, and sometimes it's cleaning up the process itself.",
  items: [
    "Workflow and process assessments with a prioritized roadmap",
    "Automations that connect your email, forms, CRM, and spreadsheets",
    "AI assistants and agents, where they add real value",
    "AI features built into your existing tools and website",
    "Staff training and usage policies for every new tool",
  ],
};

export const supportingServices = [
  {
    icon: "server",
    title: "IT Infrastructure & Cloud",
    body: "Network design, email and collaboration platforms, cloud migrations, backup and disaster recovery, and security hardening.",
  },
  {
    icon: "compass",
    title: "IT Strategy & Fractional CIO",
    body: "Technology roadmaps, vendor selection, budget planning, and ongoing IT leadership for organizations without a full-time CIO.",
  },
  {
    icon: "code",
    title: "Custom Software & Web",
    body: "Websites, internal tools, API integrations, and client-facing apps, built to solve a specific problem and easy to maintain.",
  },
] as const;

export const audiences = [
  {
    title: "Small businesses",
    intro:
      "Owners and lean teams who need IT and AI expertise without hiring a full department.",
    examples: [
      "Lead follow-up and quoting that run on their own",
      "Invoices, scheduling, and reminders tied together",
      "A clear plan for which tools are worth paying for",
    ],
  },
  {
    title: "Nonprofits",
    intro:
      "Mission-driven organizations that want to stretch every dollar and volunteer hour further.",
    examples: [
      "Donor and volunteer records that update automatically",
      "Grant reports and newsletters drafted from your own data",
      "Secure, affordable systems for staff and volunteers",
    ],
  },
];

export const process = [
  {
    title: "Discovery call",
    body: "A free conversation about your goals, your current tools, and where time is being lost.",
  },
  {
    title: "Assessment & plan",
    body: "We map your workflows and processes, then recommend the right fix for each one, with costs and expected time savings.",
  },
  {
    title: "Build & launch",
    body: "We set up the automations, AI tools, and systems, then test them with your team before go-live.",
  },
  {
    title: "Train & support",
    body: "Your staff learns the new tools, and we stay on call for adjustments as your needs change.",
  },
];

export const reasons = [
  {
    title: "Vendor-neutral advice",
    body: "We don't take product commissions. Recommendations are based on what fits your budget and goals.",
  },
  {
    title: "Right tool for the job",
    body: "Some processes call for AI. Many need a simple automation or a cleaner process. We recommend whichever actually fits.",
  },
  {
    title: "Full-stack IT depth",
    body: "Infrastructure, strategy, and software under one roof means fewer vendors and fewer gaps between them.",
  },
  {
    title: "Senior-level attention",
    body: "No ticket queues or junior handoffs. You work with an experienced consultant from first call to launch.",
  },
  {
    title: "Flexible engagements",
    body: "Hourly, monthly retainer, or fixed-price project, with no long-term lock-in.",
  },
  {
    title: "Business-first thinking",
    body: "Every project ties back to a result you care about: hours saved, revenue gained, or risk reduced.",
  },
];

// Hyder Law, PC — Central site data
// All firm information, practice areas, and shared content

export const FIRM = {
  name: "Hyder Law, PC",
  attorney: "Steven M. Hyder",
  phone: "(734) 241-6611",
  phoneRaw: "7342416611",
  email: "hyders@hyderlawfirm.net",
  address: "204 S. Macomb St., Ste. 7, Monroe, MI 48161",
  addressShort: "204 S. Macomb St., Ste. 7",
  city: "Monroe",
  state: "MI",
  zip: "48161",
  domain: "www.attorneystevehyder.com",
  googleMapsUrl: "https://maps.app.goo.gl/sjqsxyFgPKGvgsuWA",
  mapsEmbedQuery: "204 S Macomb St, Monroe, MI 48161",
};

export const AREAS_SERVED = [
  "Monroe", "Frenchtown Township", "Bedford", "Milan", "Temperance",
  "Dundee", "Dundee Township", "Monroe Township", "Berlin Township",
  "Britton", "Trenton", "Deerfield", "Allen Park", "Wyandotte",
  "Adrian", "Blissfield", "Erie", "Village of Erie", "LaSalle", "Erie Township",
];

export const PRACTICE_AREAS = [
  {
    slug: "criminal-defense",
    number: "01",
    title: "Criminal Defense",
    short: "From misdemeanors to serious felonies — OWI/DUI, drug charges, assault, theft, probation violations, expungements. Aggressive defense for every charge.",
    icon: "Shield",
    subPages: [
      { slug: "dui-owi", title: "OWI / DUI Defense" },
      { slug: "drug-charges", title: "Drug Charges" },
    ],
    whatWeHandle: [
      "OWI / DUI (Operating While Intoxicated)",
      "Drug charges — possession, delivery, manufacturing",
      "Assault & battery",
      "Theft & larceny",
      "Probation violations",
      "Expungements",
      "Felonies & misdemeanors",
    ],
  },
  {
    slug: "personal-injury",
    number: "02",
    title: "Personal Injury",
    short: "Injured in an accident? We fight for full compensation — medical bills, lost wages, pain and suffering. You pay nothing unless we win.",
    icon: "HeartPulse",
    whatWeHandle: [
      "Car accidents",
      "Truck accidents",
      "Motorcycle accidents",
      "Slip & fall",
      "Wrongful death",
    ],
  },
  {
    slug: "family-law",
    number: "03",
    title: "Family Law",
    short: "Divorce, custody, support, and adoption — compassionate yet firm representation to protect your family and your future.",
    icon: "Users",
    whatWeHandle: [
      "Divorce",
      "Child custody",
      "Child support",
      "Alimony / spousal support",
      "Adoption",
    ],
  },
  {
    slug: "civil-litigation",
    number: "04",
    title: "Civil Litigation",
    short: "Contract disputes, business conflicts, and property matters — strategic advocacy to resolve civil disputes efficiently and effectively.",
    icon: "Scale",
    whatWeHandle: [
      "Contract disputes",
      "Business disputes",
      "Property disputes",
      "General civil matters",
    ],
  },
  {
    slug: "real-estate",
    number: "05",
    title: "Real Estate",
    short: "Residential and commercial closings, purchase agreements, title issues, and landlord/tenant matters handled with precision and care.",
    icon: "Home",
    whatWeHandle: [
      "Residential & commercial closings",
      "Purchase agreements",
      "Title issues",
      "Landlord / tenant disputes",
    ],
  },
  {
    slug: "estate-planning",
    number: "06",
    title: "Estate Planning",
    short: "Wills, trusts, powers of attorney, probate, and estate administration — protecting your legacy and your loved ones.",
    icon: "FileText",
    whatWeHandle: [
      "Wills",
      "Trusts",
      "Powers of attorney",
      "Probate",
      "Estate administration",
    ],
  },
];

export const ALSO_HANDLING = [
  "OWI/DUI", "Drug Charges", "Divorce", "Child Custody", "Wills & Trusts",
];

export const STATS = [
  { number: "20+", caption: "Years Experience" },
  { number: "1,000+", caption: "Cases Handled" },
  { number: "6", caption: "Practice Areas" },
  { number: "24/7", caption: "Attorney Access" },
];

export const QUICK_FACTS = [
  { label: "Availability", value: "Open 24/7" },
  { label: "Consultation", value: "Always Free" },
  { label: "Payment", value: "Flexible Plans" },
  { label: "Location", value: "Monroe, MI" },
];

export const ATTORNEY_BIO = {
  name: "Steven M. Hyder",
  title: "Attorney at Law",
  paragraphs: [
    "Hyder Law, PC is a dedicated law firm serving Monroe and all of Southeast Michigan. Attorney Steven M. Hyder brings decades of courtroom experience to every case, offering each client a highly personalized level of service that is rare among Michigan law firms.",
    "When you call Hyder Law, PC, you reach an attorney — not a paralegal, not a receptionist. Steven M. Hyder knows your case and is ready to fight for you from day one.",
    "From OWI charges to serious felonies, personal injury claims to family law matters, Steven M. Hyder has the experience, knowledge, and tenacity to build the strongest possible case for you. He understands what is at stake — your freedom, your family, and your future.",
  ],
  credentials: [
    "20+ years of legal experience in Michigan",
    "All misdemeanors and felonies handled",
    "Direct attorney access — 24/7 availability",
    "Flexible, affordable payment plans",
    "Free initial consultation — no obligation",
    "Serving all of Monroe County and Southeast Michigan",
  ],
  areasOfFocus: [
    "Criminal Defense",
    "Personal Injury",
    "Family Law",
    "Civil Litigation",
    "Real Estate",
    "Estate Planning",
  ],
};

export const REVIEWS = [
  {
    quote: "Steven Hyder fought tirelessly for my case. He was always available to answer my questions and kept me informed every step of the way. I couldn't have asked for a better attorney.",
    author: "Carlos M.",
    detail: "Criminal Defense Client",
  },
  {
    quote: "I was charged with OWI and thought my life was over. Steven fought hard, knew the system inside and out, and got my charges reduced. I am forever grateful.",
    author: "Jennifer R.",
    detail: "OWI Defense Client",
  },
  {
    quote: "Facing a felony charge was the scariest moment of my life. Steven Hyder was calm, strategic, and relentless. He got the result I needed. Highly recommend.",
    author: "David T.",
    detail: "Criminal Defense Client",
  },
];

export const FAQS_HOME = [
  {
    q: "Do you offer free consultations?",
    a: "Yes. Your initial consultation with Steven M. Hyder is always free and carries no obligation. We'll discuss your situation, explain your options, and help you understand the road ahead.",
  },
  {
    q: "What areas of law does Hyder Law, PC handle?",
    a: "We handle criminal defense (including OWI/DUI and drug charges), personal injury, family law, civil litigation, real estate, and estate planning. We are a full-service law firm serving Monroe County and Southeast Michigan.",
  },
  {
    q: "How much will it cost to hire an attorney?",
    a: "Costs vary depending on the complexity of your case. We offer flexible payment plans to make quality legal representation accessible. During your free consultation, we'll discuss fees upfront so there are no surprises.",
  },
  {
    q: "Will I speak directly with the attorney?",
    a: "Absolutely. When you call Hyder Law, PC, you speak directly with Steven M. Hyder — not a paralegal, not a receptionist. We believe direct attorney access is essential to building a strong case.",
  },
  {
    q: "What should I do if I've been arrested in Michigan?",
    a: "Remain calm, exercise your right to remain silent, and do not discuss your case with anyone except your attorney. Contact us as soon as possible — the sooner we get involved, the better we can protect your rights.",
  },
  {
    q: "What's the difference between OWI and DUI in Michigan?",
    a: "Michigan uses the term OWI (Operating While Intoxicated) rather than DUI (Driving Under the Influence). They refer to the same offense. Michigan also has OWVI (Operating While Visibly Impaired) as a lesser charge.",
  },
  {
    q: "How long do I have to file a personal injury claim in Michigan?",
    a: "Michigan's statute of limitations for most personal injury claims is three years from the date of the accident. However, it's best to contact an attorney as soon as possible to preserve evidence and build a strong case.",
  },
  {
    q: "Do you handle cases outside of Monroe County?",
    a: "Yes. While our office is in Monroe, we serve clients throughout Southeast Michigan, including Frenchtown Township, Bedford, Milan, Temperance, Dundee, Trenton, Wyandotte, Adrian, and surrounding communities.",
  },
];

export const FAQS_DUI = [
  {
    q: "What are the penalties for a first OWI in Michigan?",
    a: "A first OWI conviction in Michigan can result in up to 93 days in jail, fines of $100–$500, 360 hours of community service, 6-month driver's license suspension (with restricted license possible after 30 days), and 6 points on your license. Enhanced penalties apply for high BAC (.17 or above).",
  },
  {
    q: "Will I lose my license after an OWI arrest?",
    a: "Your license may be suspended administratively by the Secretary of State. However, you have the right to request an administrative hearing to challenge the suspension. We can help you fight to keep your driving privileges.",
  },
  {
    q: "Can you challenge breathalyzer results?",
    a: "Yes. Breathalyzer results can be challenged on multiple grounds — improper calibration, operator error, medical conditions, or mouth alcohol contamination. We examine every detail to find weaknesses in the prosecution's evidence.",
  },
  {
    q: "What is OWVI and how is it different from OWI?",
    a: "OWVI (Operating While Visibly Impaired) is a lesser charge than OWI. It carries lighter penalties but still results in a criminal record. In some cases, we can negotiate a reduction from OWI to OWVI.",
  },
  {
    q: "What happens if I refuse a breathalyzer in Michigan?",
    a: "Refusing a chemical test in Michigan results in an automatic one-year license suspension (two years for a prior refusal) under the implied consent law. However, you can request an administrative hearing to challenge the suspension.",
  },
  {
    q: "Do I need an attorney for a first-time OWI?",
    a: "Yes. Even a first-time OWI carries serious consequences — jail time, license suspension, fines, and a permanent criminal record. An experienced attorney can challenge the evidence, negotiate reduced charges, and protect your future.",
  },
];

export const FAQS_DRUG = [
  {
    q: "What are the penalties for drug possession in Michigan?",
    a: "Penalties vary by substance and amount. Possession of a controlled substance can range from a misdemeanor to a felony carrying years in prison. Marijuana possession (under 2.5 oz) is legal for adults 21+ in Michigan, but other controlled substances carry severe penalties.",
  },
  {
    q: "Can drug charges be challenged on illegal search grounds?",
    a: "Yes. If law enforcement conducted an unlawful search or seizure in violation of your Fourth Amendment rights, evidence may be suppressed — meaning it cannot be used against you. This can lead to reduced charges or dismissal.",
  },
  {
    q: "Are there diversion programs for first-time drug offenders?",
    a: "Michigan offers diversion programs such as MCL 333.7411 (for first-time controlled substance offenders) and drug courts. Successful completion can result in dismissal of charges and avoid a criminal record.",
  },
  {
    q: "What's the difference between possession and delivery/manufacturing?",
    a: "Possession means having a controlled substance for personal use. Delivery/manufacturing involves distributing, producing, or intending to distribute. Delivery/manufacturing carries far more severe penalties, including mandatory minimum prison sentences.",
  },
  {
    q: "Can a drug conviction be expunged in Michigan?",
    a: "Under Michigan's Clean Slate laws, certain drug convictions may be eligible for expungement. Eligibility depends on the specific offense, time elapsed, and your criminal history. We can evaluate whether your conviction qualifies.",
  },
  {
    q: "Should I talk to the police without an attorney present?",
    a: "No. You have the right to remain silent and the right to an attorney. Anything you say can and will be used against you. Always exercise these rights and contact an attorney before speaking with law enforcement.",
  },
];

export const BLOG_POSTS = [
  {
    slug: "what-to-do-if-arrested-in-michigan",
    title: "What to Do If You're Arrested in Michigan",
    category: "Criminal Defense",
    date: "January 15, 2025",
    excerpt: "Being arrested is a frightening experience, but knowing what to do in the moment can make all the difference in the outcome of your case.",
  },
  {
    slug: "michigan-owi-penalties-and-how-to-fight",
    title: "Michigan OWI: Penalties, Fines, and How to Fight a Charge",
    category: "OWI / DUI",
    date: "January 10, 2025",
    excerpt: "Michigan takes OWI offenses seriously. Understanding the penalties and your defense options is the first step toward protecting your license and your freedom.",
  },
  {
    slug: "personal-injury-claim-time-limit-michigan",
    title: "How Long Do I Have to File a Personal Injury Claim in Michigan?",
    category: "Personal Injury",
    date: "January 5, 2025",
    excerpt: "Time is not on your side after an accident. Michigan's statute of limitations sets a strict deadline for filing personal injury claims.",
  },
  {
    slug: "divorce-in-michigan-what-to-know",
    title: "Divorce in Michigan: What You Need to Know Before You File",
    category: "Family Law",
    date: "December 28, 2024",
    excerpt: "Divorce is a major life decision. Understanding Michigan's divorce process, property division rules, and custody factors can help you prepare.",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Attorney", href: "/attorney" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const ALL_PAGES = [
  { title: "Homepage", url: "/", section: "Core Pages" },
  { title: "Attorney Bio", url: "/attorney", section: "Core Pages" },
  { title: "Practice Areas", url: "/practice-areas", section: "Core Pages" },
  { title: "Testimonials", url: "/testimonials", section: "Core Pages" },
  { title: "Blog", url: "/blog", section: "Core Pages" },
  { title: "Contact", url: "/contact", section: "Core Pages" },
  { title: "Legal Disclaimer", url: "/disclaimer", section: "Core Pages" },
  { title: "Privacy Policy", url: "/privacy-policy", section: "Core Pages" },
  { title: "HTML Sitemap", url: "/sitemap", section: "Core Pages" },
  { title: "Criminal Defense", url: "/criminal-defense", section: "Practice Areas" },
  { title: "Personal Injury", url: "/personal-injury", section: "Practice Areas" },
  { title: "Family Law", url: "/family-law", section: "Practice Areas" },
  { title: "Civil Litigation", url: "/civil-litigation", section: "Practice Areas" },
  { title: "Real Estate", url: "/real-estate", section: "Practice Areas" },
  { title: "Estate Planning", url: "/estate-planning", section: "Practice Areas" },
  { title: "OWI / DUI Defense", url: "/criminal-defense/dui-owi", section: "Criminal Defense Sub-Pages" },
  { title: "Drug Charges", url: "/criminal-defense/drug-charges", section: "Criminal Defense Sub-Pages" },
  { title: "Monroe, Michigan Office", url: "/monroe", section: "Location" },
];

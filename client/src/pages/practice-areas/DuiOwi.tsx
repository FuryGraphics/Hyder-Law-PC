import PracticeSubPage from "@/components/PracticeSubPage";
import { FAQS_DUI } from "@/lib/siteData";

export default function DuiOwi() {
  return (
    <PracticeSubPage
      slug="dui-owi"
      parentSlug="criminal-defense"
      pageTitle="OWI / DUI Lawyer Monroe MI"
      heroTitle="OWI / DUI Defense Attorney Monroe MI"
      heroEyebrow="Criminal Defense"
      intro="Michigan takes operating while intoxicated (OWI) offenses seriously. A first-time OWI can result in jail time, license suspension, steep fines, and a permanent criminal record. But an OWI charge is not a conviction — there are many ways to challenge the evidence. Steven M. Hyder has extensive experience defending OWI cases in Monroe County and throughout Southeast Michigan. We challenge breathalyzer results, field sobriety tests, traffic stop legality, and procedural errors. Whether this is your first offense or you're facing enhanced penalties for a repeat OWI, we fight to protect your license, your freedom, and your future."
      whatWeHandle={[
        "First-time OWI charges",
        "Repeat OWI offenses (2nd, 3rd offense)",
        "High BAC (.17 or above) enhanced charges",
        "OWVI (Operating While Visibly Impaired)",
        "Breathalyzer refusal cases",
        "Underage drinking and driving (Zero Tolerance)",
        "CDL OWI charges",
        "OWI involving accidents or injuries",
      ]}
      process={[
        {
          title: "Immediate Action",
          description: "Contact us as soon as possible after your arrest. We explain the administrative license suspension process and help you request a hearing to challenge the suspension within the required 14-day window.",
        },
        {
          title: "Evidence Review",
          description: "We examine every detail — the traffic stop, field sobriety tests, breathalyzer calibration records, officer training, and body camera footage. We identify procedural errors and constitutional violations.",
        },
        {
          title: "Defense Strategy",
          description: "We file motions to suppress evidence, challenge breathalyzer reliability, question the legality of the stop, and negotiate for reduced charges (such as OWVI) when appropriate.",
        },
      ]}
      faqs={FAQS_DUI}
      relatedLinks={[
        { label: "Criminal Defense", href: "/criminal-defense" },
        { label: "Drug Charges", href: "/criminal-defense/drug-charges" },
        { label: "Contact Us", href: "/contact" },
      ]}
      metaDescription="Charged with OWI/DUI in Monroe, Michigan? Attorney Steven M. Hyder fights OWI charges, challenges breathalyzer results, and protects your license. Free consultation."
    />
  );
}

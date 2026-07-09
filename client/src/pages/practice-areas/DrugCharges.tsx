import PracticeSubPage from "@/components/PracticeSubPage";
import { FAQS_DRUG } from "@/lib/siteData";

export default function DrugCharges() {
  return (
    <PracticeSubPage
      slug="drug-charges"
      parentSlug="criminal-defense"
      pageTitle="Drug Crime Attorney Monroe MI"
      heroTitle="Drug Charges Defense Attorney Monroe MI"
      heroEyebrow="Criminal Defense"
      intro="Drug charges in Michigan carry severe consequences — from possession misdemeanors to felony delivery and manufacturing charges that can result in years in prison. But drug cases often involve complex constitutional issues, particularly around search and seizure. Steven M. Hyder has extensive experience defending drug charges in Monroe County and Southeast Michigan. We challenge illegal searches, question probable cause, examine warrant validity, and pursue diversion programs for first-time offenders. Whether you're charged with simple possession or serious delivery/manufacturing, we fight to protect your rights, your freedom, and your future."
      whatWeHandle={[
        "Possession of controlled substances",
        "Possession with intent to deliver",
        "Delivery / distribution charges",
        "Manufacturing charges",
        "Prescription drug fraud",
        "Marijuana-related offenses",
        "Drug paraphernalia charges",
        "Diversion program eligibility (MCL 333.7411)",
      ]}
      process={[
        {
          title: "Case Review",
          description: "We examine the circumstances of your arrest, the search and seizure process, warrant validity, and whether your constitutional rights were violated.",
        },
        {
          title: "Motion to Suppress",
          description: "If evidence was obtained through an illegal search or seizure, we file motions to suppress that evidence — which can lead to reduced charges or complete dismissal.",
        },
        {
          title: "Defense & Resolution",
          description: "We pursue diversion programs for first-time offenders, negotiate reduced charges, and provide aggressive trial defense when necessary. Every option is explored to protect your future.",
        },
      ]}
      faqs={FAQS_DRUG}
      relatedLinks={[
        { label: "Criminal Defense", href: "/criminal-defense" },
        { label: "OWI / DUI Defense", href: "/criminal-defense/dui-owi" },
        { label: "Contact Us", href: "/contact" },
      ]}
      metaDescription="Facing drug charges in Monroe, Michigan? Attorney Steven M. Hyder challenges illegal searches, pursues diversion programs, and fights drug possession and delivery charges. Free consultation."
    />
  );
}

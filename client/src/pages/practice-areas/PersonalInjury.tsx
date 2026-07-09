import PracticeAreaPage from "@/components/PracticeAreaPage";

export default function PersonalInjury() {
  return (
    <PracticeAreaPage
      slug="personal-injury"
      intro="If you've been injured because of someone else's negligence, you deserve full and fair compensation. Medical bills, lost wages, pain and suffering, and long-term care costs can overwhelm you and your family. Steven M. Hyder fights for injury victims across Monroe County and Southeast Michigan — handling car accidents, truck accidents, motorcycle accidents, slip and fall cases, and wrongful death claims. You pay nothing unless we win your case. We deal with the insurance companies so you can focus on recovery, and we don't settle for less than what your case is worth."
      process={[
        {
          title: "Free Consultation",
          description: "We review the circumstances of your injury, assess your damages, and explain your legal options. You pay nothing unless we recover compensation for you.",
        },
        {
          title: "Investigation",
          description: "We gather evidence — accident reports, medical records, witness statements, and expert opinions — to build a strong case proving liability and damages.",
        },
        {
          title: "Demand & Negotiation",
          description: "We prepare a comprehensive demand package and negotiate aggressively with insurance companies. Most cases settle here, but we never accept a lowball offer.",
        },
        {
          title: "Trial if Necessary",
          description: "If the insurance company won't offer fair compensation, we take your case to trial. We prepare every case as if it will be argued before a jury.",
        },
      ]}
      whyHire={[
        "No fee unless we win — you pay nothing upfront",
        "20+ years of experience negotiating with insurance companies",
        "Direct attorney access throughout your entire case",
        "We handle all communication with insurance adjusters",
        "Free initial consultation — understand your rights at no cost",
        "Serving Monroe County and all of Southeast Michigan",
      ]}
      relatedLinks={[
        { label: "Criminal Defense", href: "/criminal-defense" },
        { label: "Civil Litigation", href: "/civil-litigation" },
        { label: "Family Law", href: "/family-law" },
      ]}
    />
  );
}

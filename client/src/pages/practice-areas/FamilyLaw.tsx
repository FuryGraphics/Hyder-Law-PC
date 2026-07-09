import PracticeAreaPage from "@/components/PracticeAreaPage";

export default function FamilyLaw() {
  return (
    <PracticeAreaPage
      slug="family-law"
      intro="Family law matters are deeply personal and emotionally challenging. Whether you're facing divorce, a custody dispute, or considering adoption, you need an attorney who combines legal expertise with genuine compassion. Steven M. Hyder helps families across Monroe County navigate divorce, child custody and support, alimony, and adoption with dignity and clarity. We work to protect your rights and your relationships, advocating for fair outcomes while minimizing conflict wherever possible. When negotiation is appropriate, we pursue it. When aggressive representation is necessary, we provide it."
      process={[
        {
          title: "Free Consultation",
          description: "We discuss your family situation, explain Michigan family law as it applies to your case, and outline your options and likely outcomes.",
        },
        {
          title: "Strategy & Filing",
          description: "We develop a strategy tailored to your goals — whether that's negotiating a settlement or preparing for litigation. We handle all filings and procedural requirements.",
        },
        {
          title: "Negotiation & Mediation",
          description: "We pursue negotiated settlements whenever possible to save you time, money, and emotional stress. We mediate custody, support, and property division issues.",
        },
        {
          title: "Court Representation",
          description: "When agreement isn't possible, we provide strong courtroom advocacy. We present your case clearly and fight for the outcome you and your family deserve.",
        },
      ]}
      whyHire={[
        "Compassionate yet firm representation for sensitive family matters",
        "20+ years of Michigan family law experience",
        "Direct attorney access — your questions answered promptly",
        "Skilled in both negotiation and litigation",
        "Flexible payment plans available",
        "Serving Monroe County and Southeast Michigan",
      ]}
      relatedLinks={[
        { label: "Criminal Defense", href: "/criminal-defense" },
        { label: "Estate Planning", href: "/estate-planning" },
        { label: "Civil Litigation", href: "/civil-litigation" },
      ]}
    />
  );
}

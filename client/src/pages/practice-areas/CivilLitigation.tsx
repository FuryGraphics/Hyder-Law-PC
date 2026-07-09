import PracticeAreaPage from "@/components/PracticeAreaPage";

export default function CivilLitigation() {
  return (
    <PracticeAreaPage
      slug="civil-litigation"
      intro="When disputes arise that can't be resolved through negotiation, civil litigation may be necessary. Steven M. Hyder represents individuals and businesses in Monroe County and Southeast Michigan in contract disputes, business conflicts, property disputes, and general civil matters. We approach every case strategically — evaluating the strengths and weaknesses, pursuing resolution through mediation or settlement when possible, and providing aggressive courtroom advocacy when trial is necessary. Our goal is to resolve your dispute efficiently and effectively while protecting your interests and minimizing costs."
      process={[
        {
          title: "Case Evaluation",
          description: "We review the facts of your dispute, assess the legal issues, and provide an honest evaluation of your position, potential outcomes, and costs.",
        },
        {
          title: "Pre-Suit Resolution",
          description: "We attempt to resolve the dispute through demand letters, negotiation, or mediation before filing suit — saving you time and money when possible.",
        },
        {
          title: "Litigation",
          description: "If pre-suit resolution fails, we file suit and manage all aspects of litigation — pleadings, discovery, motions, and trial preparation.",
        },
        {
          title: "Resolution",
          description: "We pursue resolution through settlement, mediation, or trial — always with your goals and best interests as our priority.",
        },
      ]}
      whyHire={[
        "20+ years of civil litigation experience in Michigan courts",
        "Strategic approach — we pursue resolution, not unnecessary litigation",
        "Direct attorney access throughout your case",
        "Skilled in negotiation, mediation, and trial advocacy",
        "Free initial consultation to evaluate your case",
        "Serving Monroe County and Southeast Michigan",
      ]}
      relatedLinks={[
        { label: "Real Estate", href: "/real-estate" },
        { label: "Personal Injury", href: "/personal-injury" },
        { label: "Criminal Defense", href: "/criminal-defense" },
      ]}
    />
  );
}

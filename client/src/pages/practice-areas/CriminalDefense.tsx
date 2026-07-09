import PracticeAreaPage from "@/components/PracticeAreaPage";

export default function CriminalDefense() {
  return (
    <PracticeAreaPage
      slug="criminal-defense"
      intro="A criminal charge can put your freedom, your job, and your future at risk. Whether you're facing a misdemeanor or a serious felony, you need an attorney who will fight for you from day one. Steven M. Hyder defends clients across Monroe County and Southeast Michigan against OWI/DUI, drug charges, assault, theft, probation violations, and more — and helps eligible clients clear their records through expungement. With 20+ years of courtroom experience, we protect your rights, scrutinize the evidence against you, and pursue the best possible outcome. Your first consultation is free and completely confidential."
      process={[
        {
          title: "Free Consultation",
          description: "We review the charges against you, explain what you're facing, and lay out your options. Everything you tell us is confidential and protected.",
        },
        {
          title: "Case Investigation",
          description: "We examine police reports, evidence, and the conduct of law enforcement — looking for constitutional violations, weak evidence, and procedural errors we can use in your defense.",
        },
        {
          title: "Defense Strategy",
          description: "We build a tailored strategy — whether that means negotiating a reduced charge, filing motions to suppress evidence, or preparing for trial.",
        },
        {
          title: "Resolution or Trial",
          description: "We pursue dismissals and favorable plea agreements where appropriate, and we're fully prepared to take your case to trial and fight for an acquittal.",
        },
      ]}
      whyHire={[
        "20+ years defending criminal cases in Michigan courts",
        "Free, confidential initial consultation",
        "Direct attorney access throughout your case",
        "Aggressive defense for misdemeanors and felonies alike",
        "Deep familiarity with Monroe County courts and prosecutors",
        "Serving Monroe County and all of Southeast Michigan",
      ]}
      relatedLinks={[
        { label: "OWI / DUI Defense", href: "/criminal-defense/dui-owi" },
        { label: "Drug Charges", href: "/criminal-defense/drug-charges" },
        { label: "Personal Injury", href: "/personal-injury" },
      ]}
    />
  );
}

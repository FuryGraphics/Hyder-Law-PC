import PracticeAreaPage from "@/components/PracticeAreaPage";

export default function EstatePlanning() {
  return (
    <PracticeAreaPage
      slug="estate-planning"
      intro="Estate planning is about protecting your legacy and your loved ones. Steven M. Hyder helps individuals and families in Monroe County and Southeast Michigan prepare for the future with comprehensive estate planning services. We draft wills, establish trusts, prepare powers of attorney, and guide families through probate and estate administration. Don't leave your family's future to chance — a well-crafted estate plan ensures your wishes are honored, minimizes tax burdens, and provides peace of mind for you and your loved ones."
      process={[
        {
          title: "Consultation",
          description: "We discuss your family situation, assets, and goals. We explain your estate planning options in plain English and recommend the right approach for your needs.",
        },
        {
          title: "Document Preparation",
          description: "We draft your will, trust, power of attorney, and any other necessary documents with careful attention to your specific wishes and Michigan law.",
        },
        {
          title: "Execution & Review",
          description: "We ensure proper execution of all documents and provide guidance on keeping your estate plan current as your life circumstances change.",
        },
      ]}
      whyHire={[
        "20+ years of estate planning experience under Michigan law",
        "Personalized plans tailored to your family and assets",
        "Direct attorney access — not handed off to a paralegal",
        "We also handle probate and estate administration",
        "Free initial consultation to discuss your needs",
        "Serving Monroe County and Southeast Michigan",
      ]}
      relatedLinks={[
        { label: "Family Law", href: "/family-law" },
        { label: "Real Estate", href: "/real-estate" },
        { label: "Civil Litigation", href: "/civil-litigation" },
      ]}
    />
  );
}

import PracticeAreaPage from "@/components/PracticeAreaPage";

export default function RealEstate() {
  return (
    <PracticeAreaPage
      slug="real-estate"
      intro="Real estate transactions and disputes involve significant financial investments and complex legal requirements. Steven M. Hyder provides comprehensive real estate legal services to individuals and businesses in Monroe County and Southeast Michigan. We handle residential and commercial closings, purchase agreements, title issues, and landlord/tenant matters with precision and care. Whether you're buying your first home, closing a commercial deal, or facing a property dispute, we ensure your interests are protected and the process goes smoothly from start to finish."
      process={[
        {
          title: "Consultation",
          description: "We review your real estate matter — whether a transaction, agreement, or dispute — and explain the legal requirements and process.",
        },
        {
          title: "Document Review",
          description: "We review or prepare all necessary documents — purchase agreements, closing documents, leases, or litigation filings — ensuring your interests are protected.",
        },
        {
          title: "Closing or Resolution",
          description: "For transactions, we guide you through closing. For disputes, we pursue resolution through negotiation, mediation, or litigation as appropriate.",
        },
      ]}
      whyHire={[
        "20+ years of real estate law experience in Michigan",
        "We handle both residential and commercial matters",
        "Direct attorney access — your questions answered promptly",
        "Attention to detail in every document and transaction",
        "Free initial consultation",
        "Serving Monroe County and Southeast Michigan",
      ]}
      relatedLinks={[
        { label: "Civil Litigation", href: "/civil-litigation" },
        { label: "Estate Planning", href: "/estate-planning" },
        { label: "Family Law", href: "/family-law" },
      ]}
    />
  );
}

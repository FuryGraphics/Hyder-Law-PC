import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { PageHero, FadeIn } from "@/components/Sections";
import { FIRM } from "@/lib/siteData";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Hyder Law, PC"
        description="Privacy policy for Hyder Law, PC. Learn how we protect and handle your personal information."
        canonicalPath="/privacy-policy"
      />

      <PageHero eyebrow="Legal" title="Privacy Policy" />

      <Breadcrumb items={[{ label: "Privacy Policy" }]} />

      <section className="py-20">
        <div className="container max-w-3xl">
          <FadeIn>
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-white mb-4">
                  Information We Collect
                </h2>
                <p className="text-[#A0A0A0] leading-relaxed">
                  Hyder Law, PC respects your privacy. When you contact us through
                  our website, we may collect personal information you provide,
                  including your name, email address, phone number, and any
                  information you include in your message about your legal
                  situation. We also collect non-personal information such as
                  browser type, IP address, and pages visited for website
                  analytics purposes.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-white mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-[#A0A0A0] leading-relaxed">
                  We use the personal information you provide to respond to your
                  inquiries, schedule consultations, and provide legal services.
                  We do not sell, rent, or share your personal information with
                  third parties for marketing purposes. Non-personal information
                  is used to improve our website and understand how visitors use
                  our content.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-white mb-4">
                  Attorney-Client Confidentiality
                </h2>
                <p className="text-[#A0A0A0] leading-relaxed">
                  Please note that submitting information through our website
                  contact form does not create an attorney-client relationship.
                  Until an attorney-client relationship is established through a
                  signed engagement agreement, any information you share may not
                  be protected by attorney-client privilege. For confidential
                  matters, please call us directly at {FIRM.phone}.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-white mb-4">
                  Cookies and Analytics
                </h2>
                <p className="text-[#A0A0A0] leading-relaxed">
                  This website may use cookies and analytics tools to understand
                  how visitors interact with our content. You can control cookies
                  through your browser settings. We do not use cookies to collect
                  personally identifiable information.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-white mb-4">
                  Data Security
                </h2>
                <p className="text-[#A0A0A0] leading-relaxed">
                  We implement reasonable security measures to protect your
                  personal information from unauthorized access, alteration, or
                  disclosure. However, no method of transmission over the internet
                  or electronic storage is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-white mb-4">
                  Your Rights
                </h2>
                <p className="text-[#A0A0A0] leading-relaxed">
                  You have the right to request access to, correction of, or
                  deletion of your personal information. To exercise these rights,
                  please contact us at {FIRM.email} or {FIRM.phone}.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-white mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-[#A0A0A0] leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes
                  will be posted on this page with an updated revision date.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-white mb-4">
                  Contact Us
                </h2>
                <p className="text-[#A0A0A0] leading-relaxed">
                  If you have questions about this Privacy Policy, please contact
                  us at:<br /><br />
                  Hyder Law, PC<br />
                  {FIRM.address}<br />
                  Phone: {FIRM.phone}<br />
                  Email: {FIRM.email}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

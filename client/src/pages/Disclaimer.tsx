import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { PageHero, FadeIn } from "@/components/Sections";
import { FIRM } from "@/lib/siteData";

export default function Disclaimer() {
  return (
    <>
      <SEO
        title="Legal Disclaimer | Hyder Law, PC"
        description="Legal disclaimer for Hyder Law, PC. The information on this website is for general informational purposes only and is not legal advice."
        canonicalPath="/disclaimer"
      />

      <PageHero eyebrow="Legal" title="Legal Disclaimer" />

      <Breadcrumb items={[{ label: "Disclaimer" }]} />

      <section className="py-20">
        <div className="container max-w-3xl">
          <FadeIn>
            <div className="prose prose-invert max-w-none">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                Important Legal Information
              </h2>
              <p className="text-[#A0A0A0] leading-relaxed mb-6">
                The information provided on this website by Hyder Law, PC is for
                general informational purposes only and is not intended to be
                legal advice. Nothing on this website creates an attorney-client
                relationship between you and Hyder Law, PC or attorney Steven M.
                Hyder. An attorney-client relationship is established only when a
                written engagement agreement has been signed by both parties.
              </p>

              <h2 className="font-serif text-2xl font-bold text-white mb-4 mt-10">
                No Guarantee of Results
              </h2>
              <p className="text-[#A0A0A0] leading-relaxed mb-6">
                Prior results and case outcomes do not guarantee or predict
                similar results in future cases. Every legal matter is unique, and
                the outcome of your case depends on the specific facts and
                circumstances involved.
              </p>

              <h2 className="font-serif text-2xl font-bold text-white mb-4 mt-10">
                Not a Substitute for Legal Counsel
              </h2>
              <p className="text-[#A0A0A0] leading-relaxed mb-6">
                The content on this website should not be used as a substitute for
                competent legal advice from a licensed attorney. You should consult
                an attorney for advice regarding your individual situation. We
                invite you to contact us for a free consultation to discuss your
                specific legal needs.
              </p>

              <h2 className="font-serif text-2xl font-bold text-white mb-4 mt-10">
                Jurisdiction
              </h2>
              <p className="text-[#A0A0A0] leading-relaxed mb-6">
                Attorney Steven M. Hyder is licensed to practice law in the State
                of Michigan. This website is intended for informational purposes
                for residents of Michigan and those with legal matters pending in
                Michigan courts. The laws of other jurisdictions may differ
                significantly.
              </p>

              <h2 className="font-serif text-2xl font-bold text-white mb-4 mt-10">
                Third-Party Links
              </h2>
              <p className="text-[#A0A0A0] leading-relaxed mb-6">
                This website may contain links to third-party websites. We are not
                responsible for the content, accuracy, or practices of any
                third-party websites and do not endorse or guarantee the
                information provided by these external sources.
              </p>

              <h2 className="font-serif text-2xl font-bold text-white mb-4 mt-10">
                Contact Information
              </h2>
              <p className="text-[#A0A0A0] leading-relaxed">
                Hyder Law, PC<br />
                {FIRM.address}<br />
                Phone: {FIRM.phone}<br />
                Email: {FIRM.email}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

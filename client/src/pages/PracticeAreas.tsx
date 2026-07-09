import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { PageHero, FadeIn, SectionHeading, CTABand } from "@/components/Sections";
import { FIRM, PRACTICE_AREAS } from "@/lib/siteData";

export default function PracticeAreas() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: FIRM.name,
    description:
      "Full-service law firm in Monroe, Michigan offering criminal defense, personal injury, family law, civil litigation, real estate, and estate planning.",
    provider: { "@type": "Attorney", name: FIRM.attorney },
    areaServed: "Monroe County, Michigan",
  };

  return (
    <>
      <SEO
        title="Monroe Michigan Law Firm | Practice Areas | Hyder Law, PC"
        description="Hyder Law, PC offers criminal defense, personal injury, family law, civil litigation, real estate, and estate planning in Monroe, Michigan. Free consultation."
        canonicalPath="/practice-areas"
        schema={schema}
      />

      <PageHero
        eyebrow="Practice Areas"
        title="Legal Services in Monroe, Michigan"
        subtitle="From criminal defense to estate planning, Hyder Law, PC provides comprehensive legal representation across Southeast Michigan."
      />

      <Breadcrumb items={[{ label: "Practice Areas" }]} />

      {/* Intro */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Practice"
              title="Comprehensive Legal Representation"
            />
            <p className="mt-8 text-lg text-[#A0A0A0] leading-relaxed">
              Hyder Law, PC is a full-service law firm serving Monroe County and
              Southeast Michigan. Whether you're facing criminal charges, dealing
              with a family law matter, recovering from an injury, or planning
              your estate, attorney Steven M. Hyder provides the experienced,
              personalized representation you need. With over 20 years of
              experience and direct attorney access, we handle every case with
              the attention and dedication it deserves.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Practice Area Grid */}
      <section className="py-20 bg-[#0e0e0e] border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICE_AREAS.map((area, i) => (
              <FadeIn key={area.slug} delay={i * 0.08}>
                <Link
                  href={`/${area.slug}`}
                  className="group block bg-[#111] border border-white/5 p-8 h-full hover:border-[#C9A84C]/30 transition-all duration-300"
                >
                  <span className="font-serif text-5xl font-bold text-[#C9A84C]/30 group-hover:text-[#C9A84C]/50 transition-colors block mb-4">
                    {area.number}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mb-3 group-hover:text-[#C9A84C] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed mb-6">
                    {area.short}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C9A84C] font-semibold">
                    Learn More{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-pages for Criminal Defense */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Criminal Defense Sub-Topics"
              title="Specialized Defense Services"
            />
            <p className="mt-6 text-[#A0A0A0] leading-relaxed">
              Within our criminal defense practice, we offer specialized
              representation for specific charges:
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/criminal-defense/dui-owi"
                className="group flex items-center justify-between bg-[#111] border border-white/5 p-6 hover:border-[#C9A84C]/30 transition-colors"
              >
                <div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#C9A84C] transition-colors">
                    OWI / DUI Defense
                  </h3>
                  <p className="text-sm text-[#707070] mt-1">
                    Operating While Intoxicated charges
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-[#C9A84C] group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/criminal-defense/drug-charges"
                className="group flex items-center justify-between bg-[#111] border border-white/5 p-6 hover:border-[#C9A84C]/30 transition-colors"
              >
                <div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#C9A84C] transition-colors">
                    Drug Charges
                  </h3>
                  <p className="text-sm text-[#707070] mt-1">
                    Possession, delivery, manufacturing
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-[#C9A84C] group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  );
}

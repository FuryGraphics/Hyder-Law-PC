import { Link } from "wouter";
import { Check, Phone, Award, Briefcase, Scale } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { PageHero, FadeIn, SectionHeading, CTABand } from "@/components/Sections";
import { FIRM, ATTORNEY_BIO } from "@/lib/siteData";

export default function Attorney() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: ATTORNEY_BIO.name,
    jobTitle: ATTORNEY_BIO.title,
    worksFor: { "@type": "LegalService", name: FIRM.name },
    address: {
      "@type": "PostalAddress",
      streetAddress: "204 S. Macomb St., Ste. 7",
      addressLocality: "Monroe",
      addressRegion: "MI",
      postalCode: "48161",
    },
    telephone: FIRM.phone,
    email: FIRM.email,
  };

  return (
    <>
      <SEO
        title="Steven Hyder Monroe MI Attorney | Hyder Law, PC"
        description="Meet Steven M. Hyder, experienced Monroe Michigan attorney. 20+ years practicing criminal defense, personal injury, family law, and more. Direct attorney access. Free consultation."
        canonicalPath="/attorney"
        schema={schema}
      />

      <PageHero
        eyebrow="Attorney Bio"
        title="Steven M. Hyder — Attorney at Law"
        subtitle="Direct, experienced, and relentless legal representation for Monroe County and Southeast Michigan."
      />

      <Breadcrumb items={[{ label: "Attorney" }]} />

      {/* Bio section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Portrait */}
            <FadeIn>
              <div className="lg:sticky lg:top-28">
                <div className="relative">
                  <div className="absolute inset-0 border border-[#C9A84C]/20 translate-x-4 translate-y-4" />
                  <img
                    src="/manus-storage/attorney-portrait-real_6a980e63.png"
                    alt="Steven M. Hyder, Attorney at Law"
                    className="relative w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-6 bg-[#111] border border-white/5 p-6">
                  <h3 className="font-serif text-lg font-bold text-white mb-4">
                    Contact
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`tel:${FIRM.phoneRaw}`}
                      className="flex items-center gap-2 text-sm text-[#A0A0A0] hover:text-[#C9A84C] transition-colors"
                    >
                      <Phone size={14} className="text-[#C9A84C]" />
                      {FIRM.phone}
                    </a>
                    <p className="text-sm text-[#A0A0A0]">{FIRM.address}</p>
                  </div>
                  <Link href="/contact" className="btn-gold w-full mt-4">
                    Free Consultation
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Bio content */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.1}>
                <SectionHeading
                  eyebrow="About Steven M. Hyder"
                  title="A Commitment to Direct Client Access"
                />
                <div className="mt-8 space-y-5">
                  {ATTORNEY_BIO.paragraphs.map((p, i) => (
                    <p key={i} className="text-lg text-[#A0A0A0] leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </FadeIn>

              {/* Areas of Focus */}
              <FadeIn delay={0.15}>
                <div className="mt-12">
                  <h3 className="font-serif text-2xl font-bold text-white mb-6">
                    Areas of Focus
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {ATTORNEY_BIO.areasOfFocus.map((area, i) => (
                      <Link
                        key={i}
                        href={`/${area.toLowerCase().replace(/ /g, "-")}`}
                        className="flex items-center gap-3 bg-[#111] border border-white/5 px-5 py-4 hover:border-[#C9A84C]/30 transition-colors group"
                      >
                        <Scale
                          size={18}
                          className="text-[#C9A84C] group-hover:scale-110 transition-transform"
                        />
                        <span className="text-sm text-[#E8E8E8]">{area}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Credentials */}
              <FadeIn delay={0.2}>
                <div className="mt-12">
                  <h3 className="font-serif text-2xl font-bold text-white mb-6">
                    Credentials & Experience
                  </h3>
                  <ul className="space-y-3">
                    {ATTORNEY_BIO.credentials.map((cred, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          size={18}
                          className="text-[#C9A84C] mt-0.5 shrink-0"
                        />
                        <span className="text-[#E8E8E8]">{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Experience highlights */}
              <FadeIn delay={0.25}>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-[#111] border border-white/5 p-6 text-center">
                    <Award className="mx-auto text-[#C9A84C] mb-3" size={28} />
                    <p className="font-serif text-3xl font-bold text-[#C9A84C]">
                      20+
                    </p>
                    <p className="text-xs uppercase tracking-widest text-[#707070] mt-1">
                      Years Experience
                    </p>
                  </div>
                  <div className="bg-[#111] border border-white/5 p-6 text-center">
                    <Briefcase className="mx-auto text-[#C9A84C] mb-3" size={28} />
                    <p className="font-serif text-3xl font-bold text-[#C9A84C]">
                      1,000+
                    </p>
                    <p className="text-xs uppercase tracking-widest text-[#707070] mt-1">
                      Cases Handled
                    </p>
                  </div>
                  <div className="bg-[#111] border border-white/5 p-6 text-center">
                    <Scale className="mx-auto text-[#C9A84C] mb-3" size={28} />
                    <p className="font-serif text-3xl font-bold text-[#C9A84C]">
                      6
                    </p>
                    <p className="text-xs uppercase tracking-widest text-[#707070] mt-1">
                      Practice Areas
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Philosophy */}
              <FadeIn delay={0.3}>
                <div className="mt-12 bg-[#0e0e0e] border-l-2 border-[#C9A84C] p-8">
                  <h3 className="font-serif text-2xl font-bold text-white mb-4">
                    Philosophy of Direct Client Access
                  </h3>
                  <p className="text-[#A0A0A0] leading-relaxed">
                    When you call Hyder Law, PC, you reach an attorney — not a
                    paralegal, not a receptionist. Steven M. Hyder believes that
                    direct communication is the foundation of effective
                    representation. He knows your case, answers your questions,
                    and fights for you from day one.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

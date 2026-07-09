import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Building2 } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { PageHero, FadeIn, SectionHeading, CTABand } from "@/components/Sections";
import { FIRM, PRACTICE_AREAS, AREAS_SERVED } from "@/lib/siteData";

export default function Monroe() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: FIRM.name,
    description:
      "Attorney in Monroe, Michigan. Steven M. Hyder provides criminal defense, personal injury, family law, and more in Monroe County.",
    telephone: FIRM.phone,
    email: FIRM.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "204 S. Macomb St., Ste. 7",
      addressLocality: "Monroe",
      addressRegion: "MI",
      postalCode: "48161",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.9164",
      longitude: "-83.3977",
    },
    openingHours: "Mo-Su 00:00-23:59",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "3",
    },
  };

  return (
    <>
      <SEO
        title="Attorney Monroe Michigan | Hyder Law, PC"
        description="Monroe, Michigan attorney Steven M. Hyder. Criminal defense, personal injury, family law, and more. Located at 204 S. Macomb St., Monroe, MI. Free consultation."
        canonicalPath="/monroe"
        schema={schema}
      />

      <PageHero
        eyebrow="Our Location"
        title="Attorney in Monroe, Michigan"
        subtitle="Hyder Law, PC is located in the heart of Monroe, serving clients throughout Monroe County and Southeast Michigan."
      />

      <Breadcrumb items={[{ label: "Monroe, Michigan" }]} />

      {/* Intro */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Monroe, MI"
              title="Your Local Monroe Attorney"
            />
            <p className="mt-8 text-lg text-[#A0A0A0] leading-relaxed">
              Hyder Law, PC is proud to serve the Monroe, Michigan community.
              Located at 204 S. Macomb St. in downtown Monroe, our office is
              conveniently positioned near the Monroe County Circuit Court and
              the 1st District Court. Attorney Steven M. Hyder has been
              representing clients in Monroe and throughout Southeast Michigan
              for over 20 years, handling criminal defense, personal injury,
              family law, civil litigation, real estate, and estate planning
              matters. When you need a local attorney who knows the Monroe
              County court system, understands the community, and will fight for
              your rights, Hyder Law, PC is here for you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Map + Contact Info */}
      <section className="py-20 bg-[#0e0e0e] border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <FadeIn>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-6">
                  Our Office
                </h3>
                <div className="aspect-[4/3] w-full bg-[#111] border border-white/10 overflow-hidden">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960!2d-83.3977!3d41.9164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b1b2b2b2b2b2b%3A0x0!2s204%20S%20Macomb%20St%2C%20Monroe%2C%20MI%2048161!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus`}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hyder Law, PC office location"
                  />
                </div>
                <a
                  href={FIRM.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-[#C9A84C] hover:text-[#D4B85E] transition-colors"
                >
                  <MapPin size={14} /> View on Google Maps
                </a>
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.1}>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4 bg-[#111] border border-white/5 p-5">
                    <MapPin className="text-[#C9A84C] shrink-0" size={20} />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#707070] mb-1">
                        Address
                      </p>
                      <p className="text-[#E8E8E8]">{FIRM.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-[#111] border border-white/5 p-5">
                    <Phone className="text-[#C9A84C] shrink-0" size={20} />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#707070] mb-1">
                        Phone
                      </p>
                      <a
                        href={`tel:${FIRM.phoneRaw}`}
                        className="text-[#E8E8E8] hover:text-[#C9A84C] transition-colors"
                      >
                        {FIRM.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-[#111] border border-white/5 p-5">
                    <Mail className="text-[#C9A84C] shrink-0" size={20} />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#707070] mb-1">
                        Email
                      </p>
                      <a
                        href={`mailto:${FIRM.email}`}
                        className="text-[#E8E8E8] hover:text-[#C9A84C] transition-colors"
                      >
                        {FIRM.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-[#111] border border-white/5 p-5">
                    <Clock className="text-[#C9A84C] shrink-0" size={20} />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#707070] mb-1">
                        Hours
                      </p>
                      <p className="text-[#E8E8E8]">Open 24/7 — Call Anytime</p>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="btn-gold mt-6 inline-flex">
                  Free Consultation
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Practice Areas Served Locally */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Local Practice Areas"
              title="Legal Services in Monroe"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {PRACTICE_AREAS.map((area) => (
                <Link
                  key={area.slug}
                  href={`/${area.slug}`}
                  className="group flex items-center justify-between bg-[#111] border border-white/5 p-5 hover:border-[#C9A84C]/30 transition-colors"
                >
                  <span className="text-[#E8E8E8] group-hover:text-[#C9A84C] transition-colors">
                    {area.title}
                  </span>
                  <span className="text-[#C9A84C] text-sm">→</span>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Courthouse Info */}
      <section className="py-20 bg-[#0e0e0e] border-y border-white/5">
        <div className="container max-w-4xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Monroe County Courts"
              title="Local Court Information"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#111] border border-white/5 p-6">
                <Building2 className="text-[#C9A84C] mb-4" size={28} />
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  Monroe County Circuit Court
                </h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">
                  106 E. First St., Monroe, MI 48161. The Circuit Court handles
                  felonies, civil cases over $25,000, and family law matters in
                  Monroe County.
                </p>
              </div>
              <div className="bg-[#111] border border-white/5 p-6">
                <Building2 className="text-[#C9A84C] mb-4" size={28} />
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  Monroe County 1st District Court
                </h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">
                  106 E. First St., Monroe, MI 48161. The District Court handles
                  misdemeanors, OWI/DUI cases, preliminary examinations, and civil
                  cases up to $25,000.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <FadeIn>
            <SectionHeading
              eyebrow="Areas We Serve"
              title="Serving All of Monroe County"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-2">
              {AREAS_SERVED.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 text-sm text-[#A0A0A0] px-4 py-2 bg-[#111] border border-white/5"
                >
                  <MapPin size={12} className="text-[#C9A84C]" />
                  {city}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  );
}

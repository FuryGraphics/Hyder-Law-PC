import { Link } from "wouter";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Check, Star, MapPin } from "lucide-react";
import SEO from "@/components/SEO";
import { FadeIn, SectionHeading, CTABand } from "@/components/Sections";
import FAQAccordion from "@/components/FAQAccordion";
import {
  FIRM,
  PRACTICE_AREAS,
  ALSO_HANDLING,
  STATS,
  QUICK_FACTS,
  ATTORNEY_BIO,
  REVIEWS,
  FAQS_HOME,
  AREAS_SERVED,
} from "@/lib/siteData";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: FIRM.name,
    description:
      "Experienced criminal defense and general practice attorney in Monroe, Michigan. Steven M. Hyder provides aggressive legal representation across Southeast Michigan.",
    telephone: FIRM.phone,
    email: FIRM.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "204 S. Macomb St., Ste. 7",
      addressLocality: "Monroe",
      addressRegion: "MI",
      postalCode: "48161",
    },
    attorney: { "@type": "Attorney", name: FIRM.attorney },
    areaServed: ["Monroe, MI", "Southeast Michigan", "Monroe County"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "3",
    },
  };

  return (
    <>
      <SEO
        title="Monroe MI Attorney | Monroe Criminal Defense Lawyer | Hyder Law, PC"
        description="Experienced criminal defense, personal injury, family law attorney in Monroe, Michigan. Direct access to attorney Steven M. Hyder. Free consultation. Call (734) 241-6611."
        canonicalPath="/"
        schema={schema}
      />

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/manus-storage/hero-bg_b49c51ce.png"
            alt="Monroe Michigan courthouse at night"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
        </div>

        <div className="container relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-3xl"
          >
            <p className="eyebrow mb-4">Monroe, Michigan</p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Experienced Legal Representation Across Southeast Michigan
            </h1>
            <div className="w-20 h-[2px] bg-[#C9A84C] mb-6" />
            <p className="text-lg md:text-xl text-[#A0A0A0] leading-relaxed mb-10 max-w-2xl">
              Criminal defense, personal injury, family law and more in Monroe
              County — direct access to attorney Steven M. Hyder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-gold">
                Free Consultation
              </Link>
              <a href={`tel:${FIRM.phoneRaw}`} className="btn-ghost">
                <Phone size={16} /> Call {FIRM.phone}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C] to-transparent" />
        </motion.div>
      </section>

      {/* ===== ATTORNEY QUICK-FACTS STRIP ===== */}
      <section className="bg-[#0e0e0e] border-y border-white/5 py-12">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-8">
              <p className="font-serif text-2xl font-bold text-white">
                {ATTORNEY_BIO.name}{" "}
                <span className="text-[#C9A84C]">— {ATTORNEY_BIO.title}</span>
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {QUICK_FACTS.map((fact, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-[#111] border border-white/5 p-6 text-center hover:border-[#C9A84C]/20 transition-colors">
                  <p className="text-xs uppercase tracking-widest text-[#707070] mb-2">
                    {fact.label}
                  </p>
                  <p className="font-serif text-lg font-semibold text-[#C9A84C]">
                    {fact.value}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SPECIALTIES (NUMBERED CARDS) ===== */}
      <section className="py-24">
        <div className="container">
          <FadeIn>
            <SectionHeading
              eyebrow="Law Specialties"
              title="Practice Areas"
              center
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {PRACTICE_AREAS.map((area, i) => (
              <FadeIn key={area.slug} delay={i * 0.08}>
                <Link
                  href={`/${area.slug}`}
                  className="group block bg-[#111] border border-white/5 p-8 h-full hover:border-[#C9A84C]/30 transition-all duration-300 hover:bg-[#141414]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-serif text-5xl font-bold text-[#C9A84C]/30 group-hover:text-[#C9A84C]/50 transition-colors">
                      {area.number}
                    </span>
                  </div>
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

          {/* Also handling tags */}
          <FadeIn delay={0.2}>
            <div className="mt-12 text-center">
              <p className="text-xs uppercase tracking-widest text-[#707070] mb-4">
                Also Handling
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {ALSO_HANDLING.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 border border-white/10 text-sm text-[#A0A0A0] hover:border-[#C9A84C]/30 hover:text-[#C9A84C] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== AREAS SERVED BAND ===== */}
      <section className="py-24 bg-[#0e0e0e] border-y border-white/5">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="eyebrow mb-3">Serving Monroe County & Southeast Michigan</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white gold-underline-center inline-block">
                Areas We Serve
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-[#A0A0A0] leading-relaxed max-w-3xl mx-auto text-center mb-12">
              We represent clients across Monroe County and throughout Southeast
              Michigan — including Monroe, Frenchtown Township, Bedford, Milan,
              Temperance, Dundee, Trenton, Wyandotte, Adrian, and surrounding
              communities. If you need an attorney in Southeast Michigan, we're
              here to help.
            </p>
          </FadeIn>

          {/* Stat block */}
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {STATS.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-serif text-5xl md:text-6xl font-bold text-[#C9A84C] mb-2">
                    {stat.number}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-[#707070]">
                    {stat.caption}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* City tags */}
          <FadeIn delay={0.2}>
            <div className="mt-12 flex flex-wrap justify-center gap-2">
              {AREAS_SERVED.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 text-xs text-[#707070] px-3 py-1.5 bg-[#111] border border-white/5"
                >
                  <MapPin size={10} className="text-[#C9A84C]" />
                  {city}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== ABOUT / ATTORNEY ===== */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait */}
            <FadeIn>
              <div className="relative">
                <div className="absolute inset-0 border border-[#C9A84C]/20 translate-x-4 translate-y-4" />
                <img
                  src="/manus-storage/attorney-portrait-real_6a980e63.png"
                  alt="Steven M. Hyder, Attorney at Law"
                  className="relative w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>

            {/* Bio */}
            <FadeIn delay={0.1}>
              <div>
                <SectionHeading
                  eyebrow="Meet Your Attorney"
                  title="Steven M. Hyder"
                />
                <div className="mt-8 space-y-4">
                  {ATTORNEY_BIO.paragraphs.map((p, i) => (
                    <p key={i} className="text-[#A0A0A0] leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                <ul className="mt-6 space-y-3">
                  {ATTORNEY_BIO.credentials.map((cred, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="text-[#C9A84C] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#E8E8E8]">{cred}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/attorney" className="btn-gold">
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-24 bg-[#0e0e0e] border-y border-white/5">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="eyebrow mb-3">Client Reviews</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white gold-underline-center inline-block">
                What Our Clients Say
              </h2>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-[#C9A84C] fill-[#C9A84C]"
                    />
                  ))}
                </div>
                <span className="text-lg font-serif font-bold text-white">
                  5.0
                </span>
                <span className="text-sm text-[#707070]">Google Reviews</span>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {REVIEWS.map((review, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#111] border border-white/5 p-8 h-full flex flex-col">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className="text-[#C9A84C] fill-[#C9A84C]"
                      />
                    ))}
                  </div>
                  <p className="text-[#E8E8E8] leading-relaxed italic mb-6 flex-1">
                    "{review.quote}"
                  </p>
                  <div className="border-t border-white/5 pt-4">
                    <p className="font-serif font-bold text-white">
                      {review.author}
                    </p>
                    <p className="text-xs text-[#707070] uppercase tracking-wider mt-1">
                      {review.detail}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 text-sm text-[#C9A84C] hover:text-[#D4B85E] transition-colors uppercase tracking-wider font-semibold"
              >
                Read More Reviews <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <FAQAccordion items={FAQS_HOME} />

      {/* ===== CTA BAND ===== */}
      <CTABand
        title="Get Your Free Consultation Today"
        subtitle="Available to help. Call directly or fill out our form and we'll get back to you promptly."
      />
    </>
  );
}

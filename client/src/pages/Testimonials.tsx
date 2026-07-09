import { Star, Quote } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { PageHero, FadeIn, SectionHeading, CTABand } from "@/components/Sections";
import { FIRM, REVIEWS } from "@/lib/siteData";

export default function Testimonials() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: FIRM.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: String(REVIEWS.length),
    },
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody: r.quote,
    })),
  };

  return (
    <>
      <SEO
        title="Hyder Law Reviews Monroe MI | Client Testimonials"
        description="Read what clients say about Hyder Law, PC. 5.0 star Google Reviews. Steven M. Hyder provides trusted legal representation in Monroe, Michigan."
        canonicalPath="/testimonials"
        schema={schema}
      />

      <PageHero
        eyebrow="Testimonials"
        title="Client Reviews"
        subtitle="Don't just take our word for it. Here's what our clients have to say about their experience with Hyder Law, PC."
      />

      <Breadcrumb items={[{ label: "Testimonials" }]} />

      {/* Rating Badge */}
      <section className="py-20">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex flex-col items-center bg-[#111] border border-white/5 px-12 py-8">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={28}
                      className="text-[#C9A84C] fill-[#C9A84C]"
                    />
                  ))}
                </div>
                <p className="font-serif text-5xl font-bold text-[#C9A84C]">
                  5.0
                </p>
                <p className="text-sm text-[#707070] uppercase tracking-widest mt-2">
                  Google Reviews
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Google Reviews widget placeholder */}
          <FadeIn delay={0.1}>
            <div className="text-center mb-12">
              <a
                href={FIRM.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#C9A84C] hover:text-[#D4B85E] transition-colors uppercase tracking-wider font-semibold"
              >
                View All Reviews on Google
              </a>
            </div>
          </FadeIn>

          {/* Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#111] border border-white/5 p-8 h-full flex flex-col">
                  <Quote
                    className="text-[#C9A84C]/30 mb-4"
                    size={32}
                  />
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
        </div>
      </section>

      <CTABand
        title="Experience the Hyder Law Difference"
        subtitle="Join our satisfied clients. Call today for your free consultation."
      />
    </>
  );
}

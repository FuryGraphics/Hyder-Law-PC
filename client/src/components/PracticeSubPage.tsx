import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { PageHero, FadeIn, CTABand, ProcessStep, WhatWeHandle, SectionHeading } from "./Sections";
import Breadcrumb from "./Breadcrumb";
import FAQAccordion from "./FAQAccordion";
import SEO from "./SEO";
import { FIRM } from "@/lib/siteData";

interface PracticeSubPageProps {
  slug: string;
  parentSlug: string;
  pageTitle: string;
  heroTitle: string;
  heroEyebrow: string;
  intro: string;
  whatWeHandle: string[];
  process: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
  relatedLinks: { label: string; href: string }[];
  metaDescription: string;
}

export default function PracticeSubPage({
  slug,
  parentSlug,
  pageTitle,
  heroTitle,
  heroEyebrow,
  intro,
  whatWeHandle,
  process,
  faqs,
  relatedLinks,
  metaDescription,
}: PracticeSubPageProps) {
  const parent = PRACTICE_AREAS_LOOKUP[parentSlug];
  const crumbs = [
    { label: "Practice Areas", href: "/practice-areas" },
    { label: parent, href: `/${parentSlug}` },
    { label: pageTitle },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <SEO
        title={`${pageTitle} | ${FIRM.name}`}
        description={metaDescription}
        canonicalPath={`/${parentSlug}/${slug}`}
        schema={schema}
      />

      <PageHero eyebrow={heroEyebrow} title={heroTitle} subtitle={intro.slice(0, 160)}>
        <Link href="/contact" className="btn-gold inline-flex">
          Free Consultation
        </Link>
      </PageHero>

      <Breadcrumb items={crumbs} />

      {/* Intro */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <FadeIn>
            <SectionHeading eyebrow={heroEyebrow} title="Understanding Your Situation" />
            <p className="mt-8 text-lg text-[#A0A0A0] leading-relaxed">{intro}</p>
          </FadeIn>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-20 bg-[#0e0e0e] border-y border-white/5">
        <div className="container max-w-4xl">
          <FadeIn>
            <SectionHeading eyebrow="What We Handle" title="Types of Cases We Defend" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-10">
              <WhatWeHandle items={whatWeHandle} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <FadeIn>
            <SectionHeading eyebrow="The Process" title="How We Defend You" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-12">
              {process.map((step, i) => (
                <ProcessStep
                  key={i}
                  number={`0${i + 1}`}
                  title={step.title}
                  description={step.description}
                  isLast={i === process.length - 1}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion items={faqs} />

      {/* Related Links */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <FadeIn>
            <h3 className="font-serif text-2xl font-bold text-white mb-6">
              Related Pages
            </h3>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="inline-flex items-center gap-2 bg-[#111] border border-white/5 px-5 py-3 text-sm text-[#A0A0A0] hover:border-[#C9A84C]/30 hover:text-[#C9A84C] transition-colors"
                >
                  {link.label} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  );
}

// Lookup table for parent area titles
const PRACTICE_AREAS_LOOKUP: Record<string, string> = {
  "criminal-defense": "Criminal Defense",
  "personal-injury": "Personal Injury",
  "family-law": "Family Law",
  "civil-litigation": "Civil Litigation",
  "real-estate": "Real Estate",
  "estate-planning": "Estate Planning",
};

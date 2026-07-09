import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero, FadeIn, CTABand, ProcessStep, WhatWeHandle, SectionHeading } from "./Sections";
import Breadcrumb from "./Breadcrumb";
import SEO from "./SEO";
import { FIRM, PRACTICE_AREAS } from "@/lib/siteData";

interface PracticeAreaPageProps {
  slug: string;
  intro: string;
  process: { title: string; description: string }[];
  whyHire: string[];
  relatedLinks?: { label: string; href: string }[];
}

export default function PracticeAreaPage({
  slug,
  intro,
  process,
  whyHire,
  relatedLinks = [],
}: PracticeAreaPageProps) {
  const area = PRACTICE_AREAS.find((a) => a.slug === slug);
  if (!area) return null;

  const crumbs = [
    { label: "Practice Areas", href: "/practice-areas" },
    { label: area.title },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${area.title} — ${FIRM.name}`,
    description: intro,
    provider: {
      "@type": "Attorney",
      name: FIRM.attorney,
    },
    areaServed: "Monroe County, Michigan",
    telephone: FIRM.phone,
  };

  return (
    <>
      <SEO
        title={`${area.title} Lawyer Monroe MI | ${FIRM.name}`}
        description={`${area.title} attorney in Monroe, Michigan. ${area.short.slice(0, 140)}`}
        canonicalPath={`/${slug}`}
        schema={schema}
      />

      {/* Hero */}
      <PageHero
        eyebrow="Practice Area"
        title={`${area.title} Attorney Monroe MI`}
        subtitle={area.short}
      >
        <Link href="/contact" className="btn-gold inline-flex">
          Free Consultation
        </Link>
      </PageHero>

      <Breadcrumb items={crumbs} />

      {/* Intro */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <FadeIn>
            <SectionHeading eyebrow={area.title.toUpperCase()} title="How We Can Help" />
            <p className="mt-8 text-lg text-[#A0A0A0] leading-relaxed">{intro}</p>
          </FadeIn>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-20 bg-[#0e0e0e] border-y border-white/5">
        <div className="container max-w-4xl">
          <FadeIn>
            <SectionHeading eyebrow="What We Handle" title={`${area.title} Practice Scope`} />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-10">
              <WhatWeHandle items={area.whatWeHandle} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <FadeIn>
            <SectionHeading eyebrow="The Process" title="What to Expect" />
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

      {/* Why Hire */}
      <section className="py-20 bg-[#0e0e0e] border-y border-white/5">
        <div className="container max-w-4xl">
          <FadeIn>
            <SectionHeading eyebrow="Why Hyder Law" title="Why Hire Steven M. Hyder" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyHire.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={20} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  <span className="text-[#E8E8E8]">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related Links */}
      {relatedLinks.length > 0 && (
        <section className="py-16">
          <div className="container max-w-4xl">
            <FadeIn>
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Related Practice Areas
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
      )}

      {/* CTA */}
      <CTABand />
    </>
  );
}

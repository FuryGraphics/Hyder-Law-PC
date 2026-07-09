import { Link } from "wouter";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { PageHero, FadeIn } from "@/components/Sections";
import { ALL_PAGES } from "@/lib/siteData";

export default function Sitemap() {
  // Group pages by section
  const sections = ALL_PAGES.reduce((acc, page) => {
    if (!acc[page.section]) acc[page.section] = [];
    acc[page.section].push(page);
    return acc;
  }, {} as Record<string, typeof ALL_PAGES>);

  const sectionOrder = [
    "Core Pages",
    "Practice Areas",
    "Criminal Defense Sub-Pages",
    "Location",
  ];

  return (
    <>
      <SEO
        title="Sitemap | Hyder Law, PC"
        description="Complete sitemap of all pages on the Hyder Law, PC website. Find all practice areas, attorney info, blog posts, and more."
        canonicalPath="/sitemap"
      />

      <PageHero eyebrow="Navigation" title="Site Map" />

      <Breadcrumb items={[{ label: "Sitemap" }]} />

      <section className="py-20">
        <div className="container max-w-4xl">
          {sectionOrder.map((section, si) => {
            const pages = sections[section];
            if (!pages) return null;
            return (
              <FadeIn key={section} delay={si * 0.05}>
                <div className="mb-12">
                  <h2 className="font-serif text-2xl font-bold text-white mb-6 gold-underline">
                    {section}
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {pages.map((page) => (
                      <li key={page.url}>
                        <Link
                          href={page.url}
                          className="flex items-center gap-3 bg-[#111] border border-white/5 px-5 py-4 hover:border-[#C9A84C]/30 hover:text-[#C9A84C] transition-colors text-[#A0A0A0]"
                        >
                          <span className="text-[#C9A84C]">→</span>
                          {page.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </>
  );
}

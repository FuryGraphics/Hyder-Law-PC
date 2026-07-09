import { Link } from "wouter";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { PageHero, FadeIn, CTABand } from "@/components/Sections";
import { BLOG_POSTS } from "@/lib/siteData";

export default function Blog() {
  return (
    <>
      <SEO
        title="Monroe Michigan Legal Tips | Blog | Hyder Law, PC"
        description="Legal tips and insights from attorney Steven M. Hyder. Articles on criminal defense, OWI/DUI, personal injury, and family law in Monroe, Michigan."
        canonicalPath="/blog"
      />

      <PageHero
        eyebrow="Blog"
        title="Monroe Michigan Legal Tips"
        subtitle="Insights and guidance from attorney Steven M. Hyder on criminal defense, personal injury, family law, and more."
      />

      <Breadcrumb items={[{ label: "Blog" }]} />

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-[#111] border border-white/5 overflow-hidden hover:border-[#C9A84C]/30 transition-all duration-300 h-full"
                >
                  {/* Placeholder image area */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-[#1a1a1a] to-[#0e0e0e] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06),transparent_70%)]" />
                    <span className="font-serif text-6xl font-bold text-[#C9A84C]/20 group-hover:text-[#C9A84C]/30 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C9A84C] font-semibold">
                        <Tag size={12} /> {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#707070]">
                        <Calendar size={12} /> {post.date}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#C9A84C] transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#A0A0A0] leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C9A84C] font-semibold">
                      Read More{" "}
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

import { Link } from "wouter";
import { Calendar, Tag, ArrowLeft, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { PageHero, FadeIn, CTABand } from "@/components/Sections";
import { BLOG_POSTS, FIRM } from "@/lib/siteData";

interface BlogPostContent {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  sections: { heading: string; paragraphs: string[] }[];
  ctaText: string;
}

const BLOG_CONTENT: Record<string, BlogPostContent> = {
  "what-to-do-if-arrested-in-michigan": {
    slug: "what-to-do-if-arrested-in-michigan",
    title: "What to Do If You're Arrested in Michigan",
    category: "Criminal Defense",
    date: "January 15, 2025",
    excerpt:
      "Being arrested is a frightening experience, but knowing what to do in the moment can make all the difference in the outcome of your case.",
    ctaText: "Facing an arrest? Get a free consultation.",
    sections: [
      {
        heading: "Stay Calm and Exercise Your Rights",
        paragraphs: [
          "The moments following an arrest are critical. Your first and most important action is to remain calm. Do not resist, argue, or attempt to flee — doing so can result in additional charges and weaken your defense. Instead, comply with lawful commands while exercising your constitutional rights.",
          "You have the right to remain silent. Anything you say can and will be used against you in court. Politely but firmly inform the arresting officer that you wish to exercise this right and that you want to speak with an attorney. Do not answer questions or make statements without your lawyer present.",
        ],
      },
      {
        heading: "Do Not Consent to Searches",
        paragraphs: [
          "If officers ask to search your person, vehicle, or property, you have the right to refuse. Do not consent to any search without a warrant. Politely state, 'I do not consent to any searches.' If they search anyway, do not resist — your objection will be noted for the record, which your attorney can use later to challenge the search's legality.",
        ],
      },
      {
        heading: "Contact an Attorney Immediately",
        paragraphs: [
          "The sooner you contact an attorney, the better protected your rights will be. An experienced criminal defense attorney can advise you during questioning, review the circumstances of your arrest, identify procedural errors, and begin building your defense strategy.",
          "At Hyder Law, PC, we offer free initial consultations and are available 24/7. When you call, you speak directly with attorney Steven M. Hyder — not a paralegal or receptionist. We understand the urgency of your situation and act quickly to protect your interests.",
        ],
      },
      {
        heading: "Document Everything",
        paragraphs: [
          "As soon as possible, write down everything you remember about the arrest — the time, location, officers involved, what was said, and any witnesses present. This information can be crucial to your defense. Do not discuss your case with anyone except your attorney, including family members or friends, as these conversations are not privileged.",
        ],
      },
    ],
  },
  "michigan-owi-penalties-and-how-to-fight": {
    slug: "michigan-owi-penalties-and-how-to-fight",
    title: "Michigan OWI: Penalties, Fines, and How to Fight a Charge",
    category: "OWI / DUI",
    date: "January 10, 2025",
    excerpt:
      "Michigan takes OWI offenses seriously. Understanding the penalties and your defense options is the first step toward protecting your license and your freedom.",
    ctaText: "Charged with OWI? Get a free consultation.",
    sections: [
      {
        heading: "Understanding Michigan OWI Laws",
        paragraphs: [
          "Michigan uses the term OWI (Operating While Intoxicated) rather than DUI. Under Michigan law, you can be charged with OWI if your blood alcohol content (BAC) is 0.08 or higher, or if you are impaired by alcohol or controlled substances to the point that your ability to operate a vehicle is substantially affected.",
          "Michigan also recognizes OWVI (Operating While Visibly Impaired), a lesser charge that carries lighter penalties. For a first offense, OWVI may be an option your attorney can negotiate to reduce the impact on your life.",
        ],
      },
      {
        heading: "Penalties for a First-Time OWI",
        paragraphs: [
          "A first-time OWI conviction in Michigan can result in up to 93 days in jail, fines ranging from $100 to $500, 360 hours of community service, a 6-month driver's license suspension (with restricted license possible after 30 days), and 6 points on your driving record.",
          "If your BAC is 0.17 or higher, enhanced penalties apply under Michigan's 'Super Drunk' law: up to 180 days in jail, fines up to $700, and a 1-year license suspension with no restricted license for the first 45 days.",
        ],
      },
      {
        heading: "Defenses Against OWI Charges",
        paragraphs: [
          "An OWI charge is not a conviction. There are numerous defenses available, including challenging the legality of the traffic stop, questioning the accuracy of breathalyzer results, challenging field sobriety test administration, and identifying procedural errors in the arrest process.",
          "Breathalyzer devices must be properly calibrated and maintained. If the device was not calibrated correctly or the officer was not properly trained, the results may be inadmissible. Similarly, medical conditions, mouth alcohol, or certain diets can produce false readings.",
        ],
      },
      {
        heading: "The Importance of Acting Quickly",
        paragraphs: [
          "After an OWI arrest, you have only 14 days to request an administrative hearing with the Secretary of State to challenge your license suspension. Failing to request this hearing results in an automatic suspension. Contact an attorney immediately to protect your driving privileges.",
        ],
      },
    ],
  },
  "personal-injury-claim-time-limit-michigan": {
    slug: "personal-injury-claim-time-limit-michigan",
    title: "How Long Do I Have to File a Personal Injury Claim in Michigan?",
    category: "Personal Injury",
    date: "January 5, 2025",
    excerpt:
      "Time is not on your side after an accident. Michigan's statute of limitations sets a strict deadline for filing personal injury claims.",
    ctaText: "Injured in an accident? Get a free consultation.",
    sections: [
      {
        heading: "Michigan's Statute of Limitations",
        paragraphs: [
          "In Michigan, the statute of limitations for most personal injury claims is three years from the date of the accident. This means you have three years to file a lawsuit, or you lose your right to pursue compensation forever. There are limited exceptions, but relying on them is risky.",
          "For claims against government entities (such as a city or state agency), the deadline is even shorter. You must file a formal notice of claim within 6 months of the incident, and the lawsuit must be filed within the applicable limitations period.",
        ],
      },
      {
        heading: "Why You Shouldn't Wait",
        paragraphs: [
          "Even though you have three years, waiting to contact an attorney is a mistake. Evidence disappears, witnesses forget details, and memories fade over time. The sooner you involve an attorney, the better we can preserve evidence, document your injuries, and build a strong case.",
          "Insurance companies also use delay tactics. The longer you wait, the more they may argue that your injuries weren't serious or weren't caused by the accident. Early documentation of your injuries and treatment is essential to proving your damages.",
        ],
      },
      {
        heading: "What Compensation Can You Recover?",
        paragraphs: [
          "Michigan personal injury victims may be entitled to compensation for medical expenses (past and future), lost wages, loss of earning capacity, pain and suffering, emotional distress, and property damage. In cases of severe negligence, punitive damages may also be available.",
          "At Hyder Law, PC, we handle personal injury cases on a contingency fee basis — you pay nothing unless we recover compensation for you. We deal with the insurance companies so you can focus on your recovery.",
        ],
      },
    ],
  },
  "divorce-in-michigan-what-to-know": {
    slug: "divorce-in-michigan-what-to-know",
    title: "Divorce in Michigan: What You Need to Know Before You File",
    category: "Family Law",
    date: "December 28, 2024",
    excerpt:
      "Divorce is a major life decision. Understanding Michigan's divorce process, property division rules, and custody factors can help you prepare.",
    ctaText: "Considering divorce? Get a free consultation.",
    sections: [
      {
        heading: "Michigan Is a No-Fault Divorce State",
        paragraphs: [
          "Michigan allows no-fault divorce, meaning you don't need to prove that your spouse did something wrong. You simply state that there has been a breakdown of the marriage to the point that the objects of matrimony have been destroyed and there is no reasonable likelihood the marriage can be preserved.",
          "However, while fault isn't required to obtain a divorce, certain factors — such as fault in the breakdown of the marriage — can still be considered in property division and spousal support determinations.",
        ],
      },
      {
        heading: "Property Division in Michigan",
        paragraphs: [
          "Michigan follows the principle of equitable distribution. This does not mean a 50/50 split — it means the court divides marital property in a manner it considers fair, considering factors such as each spouse's contribution to the marriage, the length of the marriage, each party's needs, and each party's ability to work.",
          "Marital property includes assets acquired during the marriage, regardless of whose name they're in. Separate property (assets owned before the marriage or received as gifts/inheritance) is generally not subject to division, but commingling can complicate this distinction.",
        ],
      },
      {
        heading: "Child Custody and Support",
        paragraphs: [
          "Michigan courts make custody decisions based on the best interests of the child. Factors include the emotional ties between parent and child, each parent's capacity to provide love and guidance, the child's adjustment to home and school, and the mental and physical health of all parties.",
          "Child support in Michigan is calculated using the Michigan Child Support Formula, which considers each parent's income, the number of overnight parenting time periods, and other factors such as child care and health care costs.",
        ],
      },
      {
        heading: "The Importance of Legal Representation",
        paragraphs: [
          "Even in an amicable divorce, having an attorney protects your rights and ensures you don't overlook important issues. An experienced family law attorney can help you understand your options, negotiate a fair settlement, and navigate the complex legal process.",
          "At Hyder Law, PC, we provide compassionate yet firm representation in divorce and family law matters. We pursue negotiated settlements when possible to save you time and money, but we are prepared to fight for you in court when necessary.",
        ],
      },
    ],
  },
};

export default function BlogPost({ params }: { params: { slug?: string } }) {
  const slug = params?.slug || "";
  const post = BLOG_CONTENT[slug];
  const meta = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post || !meta) {
    return (
      <div className="pt-32 container text-center">
        <h1 className="font-serif text-3xl text-white mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-[#C9A84C] hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: FIRM.attorney },
    publisher: { "@type": "Organization", name: FIRM.name },
  };

  return (
    <>
      <SEO
        title={`${post.title} | ${FIRM.name}`}
        description={post.excerpt}
        canonicalPath={`/blog/${slug}`}
        schema={schema}
      />

      <PageHero eyebrow={post.category} title={post.title} />

      <Breadcrumb
        items={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      {/* Article */}
      <article className="py-20">
        <div className="container max-w-3xl">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C9A84C] font-semibold">
                <Tag size={12} /> {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#707070]">
                <Calendar size={12} /> {post.date}
              </span>
            </div>
          </FadeIn>

          {post.sections.map((section, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-white mb-4">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-[#A0A0A0] leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </div>
            </FadeIn>
          ))}

          {/* CTA */}
          <FadeIn delay={0.2}>
            <div className="bg-[#0e0e0e] border-l-2 border-[#C9A84C] p-8 mt-12">
              <p className="font-serif text-xl font-bold text-white mb-4">
                {post.ctaText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-gold">
                  Free Consultation
                </Link>
                <a href={`tel:${FIRM.phoneRaw}`} className="btn-ghost">
                  Call {FIRM.phone}
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Back to blog */}
          <FadeIn delay={0.3}>
            <div className="mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-[#C9A84C] hover:text-[#D4B85E] transition-colors"
              >
                <ArrowLeft size={14} /> Back to Blog
              </Link>
            </div>
          </FadeIn>
        </div>
      </article>

      {/* Related posts */}
      <section className="py-16 bg-[#0e0e0e] border-t border-white/5">
        <div className="container max-w-3xl">
          <FadeIn>
            <h3 className="font-serif text-xl font-bold text-white mb-6">
              More Articles
            </h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {BLOG_POSTS.filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((p, i) => (
                <FadeIn key={p.slug} delay={i * 0.05}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group block bg-[#111] border border-white/5 p-5 hover:border-[#C9A84C]/30 transition-colors h-full"
                  >
                    <p className="text-xs text-[#C9A84C] uppercase tracking-wider mb-2">
                      {p.category}
                    </p>
                    <p className="text-sm text-[#E8E8E8] group-hover:text-[#C9A84C] transition-colors leading-snug">
                      {p.title}
                    </p>
                    <ArrowRight
                      size={14}
                      className="text-[#C9A84C] mt-3 group-hover:translate-x-1 transition-transform"
                    />
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

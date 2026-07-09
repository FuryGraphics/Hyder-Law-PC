import { useEffect } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { PageHero, FadeIn, SectionHeading } from "@/components/Sections";
import { FIRM } from "@/lib/siteData";

const CASECLIMB_EMBED_SRC = "https://services.caseclimb.com/js/form_embed.js";

export default function Contact() {
  // Load the CaseClimb form embed script (handles iframe auto-resizing).
  useEffect(() => {
    if (document.querySelector(`script[src="${CASECLIMB_EMBED_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = CASECLIMB_EMBED_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: FIRM.name,
    telephone: FIRM.phone,
    email: FIRM.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "204 S. Macomb St., Ste. 7",
      addressLocality: "Monroe",
      addressRegion: "MI",
      postalCode: "48161",
    },
  };

  return (
    <>
      <SEO
        title="Free Consultation Monroe MI Attorney | Contact Hyder Law, PC"
        description="Contact Hyder Law, PC for a free consultation. Call (734) 241-6611 or fill out our form. Located at 204 S. Macomb St., Monroe, MI 48161."
        canonicalPath="/contact"
        schema={schema}
      />

      <PageHero
        eyebrow="Contact"
        title="Get Your Free Consultation"
        subtitle="Available to help. Call directly or fill out our form and we'll get back to you promptly."
      />

      <Breadcrumb items={[{ label: "Contact" }]} />

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <FadeIn>
              <div>
                <SectionHeading
                  eyebrow="Send a Message"
                  title="Tell Us About Your Case"
                />
                <div className="mt-8">
                  <iframe
                    src="https://services.caseclimb.com/widget/form/2ObUM7W6BX0UIKI83O4q"
                    style={{ width: "100%", height: "600px", border: "none", borderRadius: "10px" }}
                    id="inline-2ObUM7W6BX0UIKI83O4q"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Website Form (Hyder Law, PC)"
                    data-height="541"
                    data-layout-iframe-id="inline-2ObUM7W6BX0UIKI83O4q"
                    data-form-id="2ObUM7W6BX0UIKI83O4q"
                    title="Website Form (Hyder Law, PC)"
                  />
                  <p className="mt-4 text-xs text-[#505050] text-center">
                    Submitting this form does not create an attorney-client
                    relationship. For urgent matters, please call {FIRM.phone}.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Contact Info + Map */}
            <FadeIn delay={0.1}>
              <div>
                <SectionHeading
                  eyebrow="Contact Information"
                  title="Reach Us Directly"
                />
                <div className="mt-8 space-y-4">
                  <a
                    href={`tel:${FIRM.phoneRaw}`}
                    className="flex items-start gap-4 bg-[#111] border border-white/5 p-5 hover:border-[#C9A84C]/30 transition-colors group"
                  >
                    <Phone className="text-[#C9A84C] shrink-0" size={20} />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#707070] mb-1">
                        Phone
                      </p>
                      <p className="text-[#E8E8E8] group-hover:text-[#C9A84C] transition-colors">
                        {FIRM.phone}
                      </p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${FIRM.email}`}
                    className="flex items-start gap-4 bg-[#111] border border-white/5 p-5 hover:border-[#C9A84C]/30 transition-colors group"
                  >
                    <Mail className="text-[#C9A84C] shrink-0" size={20} />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#707070] mb-1">
                        Email
                      </p>
                      <p className="text-[#E8E8E8] group-hover:text-[#C9A84C] transition-colors break-all">
                        {FIRM.email}
                      </p>
                    </div>
                  </a>
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
                    <Clock className="text-[#C9A84C] shrink-0" size={20} />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#707070] mb-1">
                        Hours
                      </p>
                      <p className="text-[#E8E8E8]">Open 24/7 — Call Anytime</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-6 aspect-[4/3] w-full bg-[#111] border border-white/10 overflow-hidden">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960!2d-83.3977!3d41.9164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s204%20S%20Macomb%20St%2C%20Monroe%2C%20MI%2048161!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus`}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hyder Law, PC office location"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

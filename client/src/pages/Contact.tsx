import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { PageHero, FadeIn, SectionHeading } from "@/components/Sections";
import { FIRM } from "@/lib/siteData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    matterType: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you! Your message has been received. We'll contact you shortly.");
      setFormData({ name: "", email: "", phone: "", matterType: "", message: "" });
    }, 1500);
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
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#707070] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-white/10 px-4 py-3 text-[#E8E8E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#707070] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#111] border border-white/10 px-4 py-3 text-[#E8E8E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#707070] mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#111] border border-white/10 px-4 py-3 text-[#E8E8E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
                        placeholder="(734) 000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#707070] mb-2">
                      Matter Type
                    </label>
                    <select
                      name="matterType"
                      value={formData.matterType}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-white/10 px-4 py-3 text-[#E8E8E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
                    >
                      <option value="">Select a type...</option>
                      <option value="criminal-defense">Criminal Defense</option>
                      <option value="owi-dui">OWI / DUI</option>
                      <option value="drug-charges">Drug Charges</option>
                      <option value="personal-injury">Personal Injury</option>
                      <option value="family-law">Family Law</option>
                      <option value="civil-litigation">Civil Litigation</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="estate-planning">Estate Planning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#707070] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-white/10 px-4 py-3 text-[#E8E8E8] focus:border-[#C9A84C] focus:outline-none transition-colors resize-none"
                      placeholder="Briefly describe your situation..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold w-full disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                    {!submitting && <Send size={16} />}
                  </button>
                  <p className="text-xs text-[#505050] text-center">
                    Submitting this form does not create an attorney-client
                    relationship. For urgent matters, please call {FIRM.phone}.
                  </p>
                </form>
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

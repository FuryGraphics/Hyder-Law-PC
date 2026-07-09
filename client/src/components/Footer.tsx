import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FIRM, PRACTICE_AREAS, NAV_LINKS, AREAS_SERVED } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5">
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Firm blurb */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">
              HYDER<span className="text-[#C9A84C]"> LAW</span>
            </h3>
            <p className="text-sm text-[#A0A0A0] leading-relaxed mb-4">
              Experienced legal representation across Southeast Michigan. Direct
              access to attorney Steven M. Hyder for criminal defense, personal
              injury, family law, and more.
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${FIRM.phoneRaw}`}
                className="flex items-center gap-2 text-sm text-[#A0A0A0] hover:text-[#C9A84C] transition-colors"
              >
                <Phone size={14} className="text-[#C9A84C]" />
                {FIRM.phone}
              </a>
              <a
                href={`mailto:${FIRM.email}`}
                className="flex items-center gap-2 text-sm text-[#A0A0A0] hover:text-[#C9A84C] transition-colors"
              >
                <Mail size={14} className="text-[#C9A84C]" />
                {FIRM.email}
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C9A84C] font-semibold mb-4">
              Practice Areas
            </h4>
            <ul className="space-y-2">
              {PRACTICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/${area.slug}`}
                    className="text-sm text-[#A0A0A0] hover:text-white transition-colors"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/criminal-defense/dui-owi"
                  className="text-sm text-[#A0A0A0] hover:text-white transition-colors"
                >
                  OWI / DUI Defense
                </Link>
              </li>
              <li>
                <Link
                  href="/criminal-defense/drug-charges"
                  className="text-sm text-[#A0A0A0] hover:text-white transition-colors"
                >
                  Drug Charges
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C9A84C] font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A0A0A0] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/monroe"
                  className="text-sm text-[#A0A0A0] hover:text-white transition-colors"
                >
                  Monroe Office
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-sm text-[#A0A0A0] hover:text-white transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-[#A0A0A0] hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-sm text-[#A0A0A0] hover:text-white transition-colors"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Office + Areas */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C9A84C] font-semibold mb-4">
              Office
            </h4>
            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-2 text-sm text-[#A0A0A0]">
                <MapPin size={14} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <span>{FIRM.address}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#A0A0A0]">
                <Clock size={14} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <span>Open 24/7 — Call Anytime</span>
              </div>
            </div>
            <h4 className="text-xs uppercase tracking-widest text-[#C9A84C] font-semibold mb-3 mt-6">
              Areas We Serve
            </h4>
            <p className="text-xs text-[#707070] leading-relaxed">
              {AREAS_SERVED.slice(0, 12).join(", ")} and surrounding communities
              throughout Southeast Michigan.
            </p>
          </div>
        </div>
      </div>

      {/* Legal disclaimer bar */}
      <div className="border-t border-white/5 bg-[#050505]">
        <div className="container py-6">
          <p className="text-xs text-[#505050] leading-relaxed text-center">
            © {new Date().getFullYear()} Hyder Law, PC. All rights reserved. The
            information on this website is for general informational purposes only
            and is not legal advice. Use of this site does not create an
            attorney-client relationship. Past results do not guarantee future
            outcomes. Attorney Steven M. Hyder is licensed to practice law in the
            State of Michigan.
          </p>
        </div>
      </div>
    </footer>
  );
}

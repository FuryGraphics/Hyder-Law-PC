import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { FIRM, NAV_LINKS } from "@/lib/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between h-20">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-serif text-xl font-bold text-white tracking-tight">
              HYDER<span className="text-[#C9A84C]"> LAW</span>
            </span>
            <span className="hidden sm:inline text-[10px] text-[#707070] uppercase tracking-widest font-sans">
              PC
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  location === link.href
                    ? "text-[#C9A84C]"
                    : "text-[#A0A0A0] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${FIRM.phoneRaw}`}
              className="flex items-center gap-2 text-sm text-[#A0A0A0] hover:text-[#C9A84C] transition-colors"
            >
              <Phone size={16} className="text-[#C9A84C]" />
              {FIRM.phone}
            </a>
            <Link href="/contact" className="btn-gold text-sm">
              Free Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-[#0a0a0a] border-y border-white/10 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="container py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 px-4 rounded text-base font-medium transition-colors ${
                    location === link.href
                      ? "text-[#C9A84C] bg-white/5"
                      : "text-[#E8E8E8] hover:text-[#C9A84C] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={`tel:${FIRM.phoneRaw}`}
                  className="btn-ghost w-full"
                >
                  <Phone size={16} /> Call {FIRM.phone}
                </a>
                <Link href="/contact" className="btn-gold w-full">
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

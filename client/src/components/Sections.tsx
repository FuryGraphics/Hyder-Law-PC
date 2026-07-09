import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Phone } from "lucide-react";
import { FIRM } from "@/lib/siteData";

// Fade-in wrapper for scroll-triggered reveals
export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Section heading with eyebrow + gold underline
export function SectionHeading({
  eyebrow,
  title,
  center = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight ${
          center ? "gold-underline-center" : "gold-underline"
        } ${className}`}
      >
        {title}
      </h2>
    </div>
  );
}

// Dark hero section for inner pages
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden pt-20">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-[#0a0a0a] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.04),transparent_70%)]" />

      <div className="container relative z-10 py-20 text-center">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight gold-underline-center inline-block"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="mt-8 text-lg text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

// Full-width CTA band
export function CTABand({
  title = "Get Your Free Consultation Today",
  subtitle = "Available to help. Call directly or fill out our contact form.",
  variant = "dark",
}: {
  title?: string;
  subtitle?: string;
  variant?: "dark" | "gold";
}) {
  if (variant === "gold") {
    return (
      <section className="bg-[#C9A84C] py-20">
        <div className="container text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a0a0a] leading-tight mb-4">
              {title}
            </h2>
            <p className="text-[#0a0a0a]/80 text-lg mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0a0a0a] text-white font-semibold text-sm uppercase tracking-wider px-8 py-4 hover:bg-[#222] transition-colors"
              >
                Free Consultation
              </Link>
              <a
                href={`tel:${FIRM.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 border border-[#0a0a0a] text-[#0a0a0a] font-semibold text-sm uppercase tracking-wider px-8 py-4 hover:bg-[#0a0a0a]/10 transition-colors"
              >
                <Phone size={16} /> {FIRM.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-[#0a0a0a] py-24 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06),transparent_70%)]" />
      <div className="container relative z-10 text-center">
        <FadeIn>
          <p className="eyebrow mb-4">Ready to Talk?</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {title}
          </h2>
          <p className="text-[#A0A0A0] text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Free Consultation
            </Link>
            <a href={`tel:${FIRM.phoneRaw}`} className="btn-ghost">
              <Phone size={16} /> Call {FIRM.phone}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// Process timeline step
export function ProcessStep({
  number,
  title,
  description,
  isLast = false,
}: {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <div className="relative flex gap-6 pb-12 last:pb-0">
      {/* Line connector */}
      {!isLast && (
        <div className="absolute left-[27px] top-14 bottom-0 w-px bg-gradient-to-b from-[#C9A84C]/40 to-transparent" />
      )}
      <div className="shrink-0 w-14 h-14 rounded-full border border-[#C9A84C]/30 bg-[#111] flex items-center justify-center text-[#C9A84C] font-serif text-xl font-bold">
        {number}
      </div>
      <div className="pt-2">
        <h3 className="font-serif text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-[#A0A0A0] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// What We Handle grid
export function WhatWeHandle({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-3 bg-[#111] border border-white/5 px-5 py-4 hover:border-[#C9A84C]/30 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-[#C9A84C] shrink-0" />
          <span className="text-sm text-[#E8E8E8]">{item}</span>
        </div>
      ))}
    </div>
  );
}

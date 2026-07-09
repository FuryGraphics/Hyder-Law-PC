import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "./Sections";

interface FAQ {
  q: string;
  a: string;
}

export default function FAQAccordion({
  items,
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
}: {
  items: FAQ[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="container max-w-3xl">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">{eyebrow}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white gold-underline-center inline-block">
              {title}
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-[#111] border border-white/5 px-6 rounded-sm"
              >
                <AccordionTrigger className="text-left font-serif text-lg text-white hover:text-[#C9A84C] transition-colors hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#A0A0A0] leading-relaxed text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}

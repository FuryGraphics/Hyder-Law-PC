import { Phone } from "lucide-react";
import { FIRM } from "@/lib/siteData";

export default function FloatingCall() {
  return (
    <a
      href={`tel:${FIRM.phoneRaw}`}
      className="fixed bottom-6 right-6 z-50 lg:hidden flex items-center gap-2 bg-[#C9A84C] text-[#0a0a0a] font-semibold text-sm px-5 py-3 rounded-full shadow-lg shadow-[#C9A84C]/30 active:scale-95 transition-transform"
      aria-label="Call now"
    >
      <Phone size={18} />
      Call Now
    </a>
  );
}

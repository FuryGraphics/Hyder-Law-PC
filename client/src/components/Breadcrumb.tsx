import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="container pt-28 pb-4" aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-1 text-xs text-[#707070]">
        <li>
          <Link href="/" className="hover:text-[#C9A84C] transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight size={12} className="text-[#505050]" />
            {item.href ? (
              <Link href={item.href} className="hover:text-[#C9A84C] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#A0A0A0]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

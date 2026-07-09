import { useEffect } from "react";
import { FIRM } from "@/lib/siteData";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schema?: object;
}

/**
 * Lightweight SEO component that updates document head on route change.
 * Uses vanilla DOM manipulation since this is a static SPA.
 */
export default function SEO({ title, description, canonicalPath, schema }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    if (canonicalPath) {
      const canonicalUrl = `https://${FIRM.domain}${canonicalPath}`;
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonicalUrl);
      setMeta("og:url", canonicalUrl, "property");
    }

    // Inject schema markup
    if (schema) {
      let script = document.querySelector('script[type="application/ld+json"][data-seo-schema]');
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute("data-seo-schema", "true");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }
  }, [title, description, canonicalPath, schema]);

  return null;
}

// src/components/Footer.tsx
import { siteConfig } from "@/lib/useSiteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 md:flex md:items-center md:justify-between text-sm">
        <div className="mb-4 md:mb-0">
          <p className="text-white font-semibold mb-1">{siteConfig.companyName}</p>
          <p className="text-xs text-slate-500">運営責任者: {siteConfig.representativeName}</p>
        </div>
        <div className="text-xs text-slate-500">
          &copy; {currentYear} {siteConfig.copyrightName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
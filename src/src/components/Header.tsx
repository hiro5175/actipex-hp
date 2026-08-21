"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "私たちについて" },
  { href: "/services", label: "サービス" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="px-6 md:px-10 lg:px-14 h-[76px] flex items-center justify-between">
        <Link href="/" className="block flex-shrink-0">
          <div className="relative w-[160px] h-[53px] md:w-[200px] md:h-[66px]">
            <Image
              src="/logo.png"
              alt="ACTIPEX Logo"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[15px] font-bold text-slate-600">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={
                  isActive
                    ? "text-red-600 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-red-600"
                    : "hover:text-red-600 transition-colors"
                }
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isMenuOpen}
          className="md:hidden relative flex-shrink-0 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block w-6 h-[2px] bg-slate-900 transition-transform duration-300 ${
              isMenuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-slate-900 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-slate-900 transition-transform duration-300 ${
              isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <nav
        className={`md:hidden overflow-hidden bg-white border-t border-slate-200 transition-[max-height] duration-300 ease-in-out ${
          isMenuOpen ? "max-h-80" : "max-h-0 border-t-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-1 text-[15px] font-bold text-slate-600">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={
                  isActive
                    ? "text-red-600 py-3 border-b border-slate-100"
                    : "py-3 border-b border-slate-100 hover:text-red-600 transition-colors"
                }
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

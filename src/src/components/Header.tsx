"use client";
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

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="px-6 md:px-10 lg:px-14 h-[76px] flex items-center justify-between">
        <Link href="/" className="block flex-shrink-0">
          <div className="relative w-[200px] h-[66px]">
            <Image
              src="/logo.png"
              alt="ACTIPEX Logo"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        <nav className="flex items-center gap-8 text-[15px] font-bold text-slate-600">
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
      </div>
    </header>
  );
}

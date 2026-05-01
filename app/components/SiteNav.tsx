import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Coverage", href: "/#coverage" },
  { label: "How We Work", href: "/#how-we-work" },
  { label: "Clinical Programs", href: "/#clinical-programs" },
  { label: "FAQ", href: "/faq" },
];

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/netlinkrx-logo.svg"
            alt="NetLinkRx"
            width={240}
            height={64}
            priority
            className="h-11 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}

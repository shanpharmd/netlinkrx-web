import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "/#services" },
  { label: "Coverage", href: "/#coverage" },
  { label: "How We Work", href: "/#how-we-work" },
  { label: "Clinical Programs", href: "/#clinical-programs" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-md">
            <Image
              src="/netlinkrx-logo.svg"
              alt="NetLinkRx"
              width={240}
              height={64}
              className="h-12 w-auto"
            />
            <p className="mt-4 text-sm text-slate-600">
              Clinical Telepharmacy for Critical Access &amp; Rural Hospitals.
              A NABP-Compliant LLC.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500">
          <p>© 2026 NetLinkRx. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-700 transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-slate-700 transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

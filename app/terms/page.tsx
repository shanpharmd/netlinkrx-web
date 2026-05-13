import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | NetLinkRx",
  description: "Terms of Service for NetLinkRx clinical telepharmacy services.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: May 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-7 text-slate-700">
        <section>
          <h2 className="text-base font-semibold text-slate-900">1. Overview</h2>
          <p className="mt-3">
            These Terms of Service govern your use of the NetLinkRx website located at netlinkrx.com
            and any related services provided by NetLinkRx, a NABP-compliant LLC. By accessing or
            using this site, you agree to be bound by these terms.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">2. Services</h2>
          <p className="mt-3">
            NetLinkRx provides clinical telepharmacy services to licensed healthcare facilities.
            Use of our clinical services is governed by a separate Master Services Agreement (MSA)
            executed between NetLinkRx and the contracting facility. Nothing on this website
            constitutes a binding clinical services agreement.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">3. Website Use</h2>
          <p className="mt-3">
            This website is intended for informational purposes for healthcare facilities and
            pharmacy professionals evaluating telepharmacy services. You agree not to misuse the
            site, attempt unauthorized access, or use it in any way that violates applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">4. Intellectual Property</h2>
          <p className="mt-3">
            All content on this website, including text, graphics, logos, and software, is the
            property of NetLinkRx and protected by applicable intellectual property laws. You may
            not reproduce or distribute any content without written permission.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">5. Disclaimer</h2>
          <p className="mt-3">
            The information on this website is provided for general informational purposes only and
            does not constitute medical, legal, or regulatory advice. NetLinkRx makes no warranties
            regarding the accuracy or completeness of the information provided.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">6. Contact</h2>
          <p className="mt-3">
            Questions about these terms can be directed through our{" "}
            <Link href="/#contact" className="text-blue-600 hover:text-blue-700">
              contact form
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | NetLinkRx",
  description: "Privacy Policy for NetLinkRx clinical telepharmacy services.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-slate-500">Last updated: May 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-7 text-slate-700">
        <section>
          <h2 className="text-base font-semibold text-slate-900">1. Information We Collect</h2>
          <p className="mt-3">
            When you submit an inquiry through our contact form, we collect the information you
            provide: name, title, email address, facility name, and any notes you include. We also
            collect standard web analytics data such as page views and referral sources.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">2. How We Use Your Information</h2>
          <p className="mt-3">
            Information submitted through our contact form is used solely to respond to your
            inquiry and provide information about NetLinkRx services. We do not sell, rent, or
            share your contact information with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">3. HIPAA</h2>
          <p className="mt-3">
            This website does not collect, transmit, or store Protected Health Information (PHI).
            Clinical services provided under contract are governed by a separate Business Associate
            Agreement (BAA) and comply with applicable HIPAA requirements.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">4. Cookies and Analytics</h2>
          <p className="mt-3">
            We may use standard web analytics tools to understand how visitors use our site.
            This data is aggregated and anonymized. We do not use tracking cookies for advertising
            purposes.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">5. Data Security</h2>
          <p className="mt-3">
            We take reasonable measures to protect information submitted through this website.
            However, no internet transmission is completely secure, and we cannot guarantee the
            security of information transmitted to us.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-slate-900">6. Contact</h2>
          <p className="mt-3">
            Questions about this privacy policy can be directed through our{" "}
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

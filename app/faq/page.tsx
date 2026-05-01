import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | NetLinkRx Clinical Telepharmacy",
  description:
    "Answers to the most common questions hospital pharmacy directors ask about NetLinkRx telepharmacy services, deployment, integration, pricing, and clinical programs.",
};

const faqGroups = [
  {
    section: "Deployment & Onboarding",
    items: [
      {
        q: "How quickly can NetLinkRx be deployed at our facility?",
        a: "Most hospitals are live within 30 days. Larger systems with multi-site EHR integration typically complete onboarding in 45 to 60 days. Our discovery and design phases happen in parallel to compress timeline.",
      },
      {
        q: "What does the onboarding process look like?",
        a: "We follow a 4-step process: Discover (scope your operations and gaps), Design (architect the telepharmacy model and integrations), Deploy (go live with continuous support), and Optimize (weekly review of coverage and outcomes). You get a dedicated implementation lead and clinical liaison from day one.",
      },
      {
        q: "Will NetLinkRx interrupt our existing pharmacy workflow?",
        a: "No. NetLinkRx is built to integrate as an extension of your team, not replace it. We sync with your current pharmacy information system, follow your existing protocols, and route escalations through your local clinical leadership.",
      },
    ],
  },
  {
    section: "Clinical & Staffing",
    items: [
      {
        q: "Do your pharmacists work as W-2 employees or contractors?",
        a: "All NetLinkRx clinical pharmacists are W-2 employees. This guarantees continuity, accountability, and consistent clinical quality. You will work with the same clinical team, not a rotating contractor pool.",
      },
      {
        q: "What credentials do your pharmacists hold?",
        a: "Every NetLinkRx pharmacist holds a PharmD and is board-certified or board-eligible. We average 10+ years of clinical hospital experience. Many of our team carry BCPS, BCCCP, BCIDP, or BCACP certifications. ASHP-aligned clinical competencies are required for all team members.",
      },
      {
        q: "Are your pharmacists licensed in our state?",
        a: "Yes. Before go-live, we ensure pharmacists serving your facility hold active licensure in your state. NetLinkRx maintains multi-state licensure across all team members and tracks renewals to avoid coverage gaps.",
      },
      {
        q: "How are escalations and clinical questions handled?",
        a: "Each engagement has a documented escalation pathway built during the Design phase. Routine clinical questions resolve within minutes through our integrated platform. Critical escalations route directly to your designated on-site clinical leadership with a sub-15-minute response SLA.",
      },
    ],
  },
  {
    section: "Integration & Technology",
    items: [
      {
        q: "What pharmacy information systems do you integrate with?",
        a: "We support 60+ pharmacy information systems and CPOE platforms, including Epic, Cerner, Meditech, Pyxis, Omnicell, McKesson, and more. If your system is on the list, integration is plug-and-play. If not, we build a tailored connection during the Design phase.",
      },
      {
        q: "Can NetLinkRx cover during EHR go-lives or transitions?",
        a: "Yes. EHR go-live is one of the most common scenarios we cover. Our pharmacists are trained on the major platforms and can run dual-coverage during transitions to keep patient safety intact while your team adjusts.",
      },
      {
        q: "How does NetLinkRx handle HIPAA compliance and data security?",
        a: "All NetLinkRx infrastructure is HIPAA-compliant. We sign a Business Associate Agreement (BAA) with every facility. Data is encrypted in transit and at rest. Access controls follow least-privilege principles, and we maintain SOC 2 Type II controls across our environment.",
      },
    ],
  },
  {
    section: "Coverage & Pricing",
    items: [
      {
        q: "Do you support both Critical Access and rural multi-site systems?",
        a: "Yes. We serve individual Critical Access Hospitals (25 beds or fewer) as well as multi-site rural health systems with shared coverage models. We also support specialty telepharmacy for infusion centers and outpatient facilities.",
      },
      {
        q: "Can we customize coverage hours and clinical programs?",
        a: "Coverage is fully customizable. Common configurations include overnight-only (typically 7pm-7am), weekend-only, peak-hour overflow, 24/7 continuous, or scheduled blocks tied to your staffing gaps. Clinical programs (antimicrobial stewardship, opioid stewardship, etc.) are added as modular layers on top of base coverage.",
      },
      {
        q: "What happens during emergencies or unexpected coverage gaps?",
        a: "On-call surge coverage is available for emergencies, weather events, or sudden licensure absences. We maintain a buffer of credentialed pharmacists ready to deploy within hours, not days.",
      },
      {
        q: "How is service priced?",
        a: "Pricing is tailored to facility size, coverage hours, and clinical program scope. Most rural and Critical Access Hospitals see hard cost savings of up to 70% versus full-time pharmacist FTEs. We provide a custom proposal within one business day of your initial inquiry.",
      },
      {
        q: "Is there a minimum contract term?",
        a: "Standard agreements are 12 months with auto-renewal. Pilot engagements (3 to 6 months) are available for facilities that want to validate fit before a full commitment.",
      },
    ],
  },
];

function Arrow() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 10a1 1 0 011-1h11.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 11H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function FaqPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div
          className="orb orb-blue"
          style={{ top: "-150px", left: "-100px", width: "500px", height: "500px", opacity: 0.4 }}
        />
        <div
          className="orb orb-emerald"
          style={{ top: "-100px", right: "-100px", width: "400px", height: "400px", opacity: 0.3 }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
            Frequently Asked Questions
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
            Everything you need to know about{" "}
            <span className="text-emerald-600">NetLinkRx</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-slate-600">
            Answers to the questions hospital pharmacy directors and
            administrators ask most. If you don&apos;t see your question here,
            reach out and we&apos;ll respond within one business day.
          </p>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="relative bg-soft py-20 md:py-28 overflow-hidden">
        <div
          className="orb orb-cyan"
          style={{ top: "30%", left: "-150px", width: "400px", height: "400px", opacity: 0.15 }}
        />
        <div className="relative mx-auto max-w-3xl px-6">
          {faqGroups.map((group) => (
            <div key={group.section} className="mb-12 last:mb-0">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-6">
                {group.section}
              </h2>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-300 transition-colors [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-4">
                      <h3 className="font-semibold text-slate-900 leading-snug">
                        {item.q}
                      </h3>
                      <span className="flex-shrink-0 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 text-slate-600 group-open:bg-slate-900 group-open:border-slate-900 group-open:text-white transition-colors">
                        <svg
                          className="h-3.5 w-3.5 transition-transform group-open:rotate-45"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 md:py-28 border-t border-slate-200">
        <div
          className="orb orb-emerald"
          style={{ top: "20%", right: "-100px", width: "400px", height: "400px", opacity: 0.18 }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Still have questions?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tell us about your facility and we&apos;ll respond within one
            business day with a tailored telepharmacy proposal.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              Contact Us <Arrow />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

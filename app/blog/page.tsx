import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Newspaper, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | NetLinkRx Clinical Telepharmacy",
  description:
    "Insights on telepharmacy operations, rural hospital clinical programs, and what actually works in Critical Access and rural health systems. Coming soon.",
};

const upcomingTopics = [
  {
    category: "Operations",
    description:
      "Coverage models, staffing analysis, and workflow integration for rural pharmacy teams.",
  },
  {
    category: "Strategy",
    description:
      "ROI breakdowns, vendor selection criteria, and long-term planning for hospital pharmacy leadership.",
  },
  {
    category: "Clinical",
    description:
      "Antimicrobial stewardship, medication reconciliation, and transitions of care insights from the front lines.",
  },
  {
    category: "Compliance",
    description:
      "HIPAA, state licensure, ASHP alignment, and regulatory updates relevant to telepharmacy practice.",
  },
];

export default function BlogComingSoon() {
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
        <div
          className="orb orb-cyan"
          style={{ bottom: "-100px", left: "30%", width: "400px", height: "400px", opacity: 0.25 }}
        />

        <div className="relative mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
            Coming Soon
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
            Notes from the front lines of{" "}
            <span className="text-emerald-600">rural pharmacy</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-slate-600">
            We&apos;re building a publication focused on practical analysis for
            hospital pharmacy directors and administrators. Operational
            insight, clinical depth, and zero fluff. Launching shortly.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              Get notified at launch <ArrowRight className="h-4 w-4" strokeWidth={2} />
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

      {/* WHAT TO EXPECT */}
      <section className="relative bg-soft py-20 md:py-24 overflow-hidden border-y border-slate-200">
        <div
          className="orb orb-indigo"
          style={{ top: "20%", right: "-150px", width: "400px", height: "400px", opacity: 0.15 }}
        />
        <div className="relative mx-auto max-w-4xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 shadow-[inset_0_1px_2px_rgba(15,23,42,0.06)] mx-auto">
              <Newspaper className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              What to expect
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Coverage areas planned for the NetLinkRx publication.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {upcomingTopics.map((topic) => (
              <div
                key={topic.category}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
                  {topic.category}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <div
          className="orb orb-emerald"
          style={{ top: "10%", left: "-100px", width: "400px", height: "400px", opacity: 0.15 }}
        />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Want a heads up when we publish?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Drop us a note through the contact form and we&apos;ll add you to
            the launch list. No marketing emails between now and then.
          </p>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              Contact us <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

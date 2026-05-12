import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Newspaper, Sparkles } from "lucide-react";
import { getAllPosts, pillarBadge, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | NetLinkRx Clinical Telepharmacy",
  description:
    "Insights on telepharmacy operations, rural hospital clinical programs, and what actually works in Critical Access and rural health systems.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  if (posts.length === 0) {
    return <ComingSoon />;
  }

  const [latest, ...rest] = posts;

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div
          className="orb orb-blue"
          style={{ top: "-150px", left: "-100px", width: "500px", height: "500px", opacity: 0.4 }}
        />
        <div
          className="orb orb-cyan"
          style={{ top: "-100px", right: "-100px", width: "400px", height: "400px", opacity: 0.3 }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
            <Newspaper className="h-3.5 w-3.5" strokeWidth={2} />
            The NetLinkRx Brief
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
            Notes from the front lines of{" "}
            <span className="text-blue-600">hospital pharmacy</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-slate-600">
            Operational insight, clinical depth, and zero fluff for hospital
            pharmacy directors and clinical leaders.
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="relative bg-soft border-b border-slate-200 py-16 md:py-20 overflow-hidden">
        <div
          className="orb orb-indigo"
          style={{ top: "10%", right: "-150px", width: "400px", height: "400px", opacity: 0.15 }}
        />
        <div className="relative mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Latest
          </p>
          <Link
            href={`/blog/${latest.slug}`}
            className="group mt-4 block rounded-2xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              {/* TEXT (left on desktop, bottom on mobile) */}
              <div className="order-2 md:order-1 md:px-4 md:py-4 flex flex-col">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                    Featured
                  </span>
                  <PillarBadge pillar={latest.pillar} />
                </div>
                <h2 className="mt-5 text-2xl md:text-[1.65rem] lg:text-[2rem] font-semibold tracking-tight text-slate-900 leading-[1.15] text-balance">
                  {latest.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600 line-clamp-3">
                  {latest.description}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span>{formatDate(latest.date)}</span>
                  <span>·</span>
                  <span>{latest.readingTime} min read</span>
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Read article <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </div>
              </div>

              {/* IMAGE (right on desktop, top on mobile). 3:2 cell matches native 1200x800 image — no cropping. */}
              {latest.ogImage && (
                <div className="order-1 md:order-2 relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-slate-50">
                  <Image
                    src={latest.ogImage}
                    alt={latest.title}
                    fill
                    priority
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              )}
            </div>
          </Link>
        </div>
      </section>

      {/* REST OF POSTS */}
      {rest.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              More from the brief
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  {post.ogImage && (
                    <div className="relative aspect-[3/2] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={post.ogImage}
                        alt={post.title}
                        fill
                        sizes="(min-width: 768px) 384px, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <PillarBadge pillar={post.pillar} />
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900 leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                      <span>{formatDate(post.date)}</span>
                      <span>·</span>
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-slate-200 bg-soft py-20 md:py-24">
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Every Tuesday in your inbox
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Subscribe to the NetLinkRx Brief for weekly insights on hospital
            telepharmacy operations, clinical quality, and regulatory shifts.
            Direct, cited, no fluff.
          </p>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              Subscribe <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function PillarBadge({ pillar }: { pillar: Parameters<typeof pillarBadge>[0] }) {
  const badge = pillarBadge(pillar);
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-widest ${badge.classes}`}
    >
      {badge.label}
    </span>
  );
}

function ComingSoon() {
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

  return (
    <div>
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div
          className="orb orb-blue"
          style={{ top: "-150px", left: "-100px", width: "500px", height: "500px", opacity: 0.4 }}
        />
        <div
          className="orb orb-cyan"
          style={{ top: "-100px", right: "-100px", width: "400px", height: "400px", opacity: 0.3 }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
            Coming Soon
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
            Notes from the front lines of{" "}
            <span className="text-blue-600">rural pharmacy</span>
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

      <section className="relative bg-soft py-20 md:py-24 overflow-hidden border-y border-slate-200">
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
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
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
    </div>
  );
}

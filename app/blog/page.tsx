import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog | NetLinkRx Clinical Telepharmacy",
  description:
    "Insights on telepharmacy operations, rural hospital clinical programs, antimicrobial stewardship, and ROI for Critical Access and rural health systems.",
};

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

export default function BlogIndex() {
  const [featured, ...rest] = posts;

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
            NetLinkRx Insights
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
            Notes from the front lines of{" "}
            <span className="text-emerald-600">rural pharmacy</span>
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-slate-600">
            Practical analysis on telepharmacy operations, ROI, clinical
            programs, and what actually moves the needle in Critical Access
            and rural health systems.
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
      {featured && (
        <section className="relative overflow-hidden py-20 md:py-24">
          <div
            className="orb orb-cyan"
            style={{ top: "20%", right: "-150px", width: "400px", height: "400px", opacity: 0.15 }}
          />
          <div className="relative mx-auto max-w-7xl px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-6">
              Featured
            </p>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-3xl border border-slate-200 bg-white p-6 lg:p-10 hover:border-slate-300 hover:shadow-xl transition-all"
            >
              {/* Text on left, image on right (TheraIntel format) */}
              <div className="lg:order-1 order-2">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest">
                  <span className="text-emerald-600">{featured.category}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">{featured.readingTime}</span>
                </div>
                <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {featured.author.name}
                    </p>
                    <p className="text-xs text-slate-500">{featured.date}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                    Read article <Arrow />
                  </span>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 lg:order-2 order-1">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* POST GRID */}
      {rest.length > 0 && (
        <section className="relative bg-soft py-20 md:py-24 border-y border-slate-200 overflow-hidden">
          <div
            className="orb orb-emerald"
            style={{ top: "10%", left: "-150px", width: "400px", height: "400px", opacity: 0.15 }}
          />
          <div className="relative mx-auto max-w-7xl px-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-10">
              More articles
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-slate-300 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="relative aspect-[16/10] bg-slate-200 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest">
                      <span className="text-emerald-600">{post.category}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500">{post.readingTime}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-semibold text-slate-900">
                          {post.author.name}
                        </p>
                        <p className="text-slate-500">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <div
          className="orb orb-blue"
          style={{ top: "10%", right: "-100px", width: "400px", height: "400px", opacity: 0.18 }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Want this in your inbox?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We publish honest analysis on rural pharmacy operations roughly
            twice a month. No fluff, no sales emails, no list trades.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              Get on the list <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

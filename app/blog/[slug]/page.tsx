import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPostBySlug } from "../posts";

type Params = { slug: string };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found | NetLinkRx" };
  return {
    title: `${post.title} | NetLinkRx`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.dateISO,
      authors: [post.author.name],
      images: [{ url: post.image }],
    },
  };
}

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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const Content = post.content;

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div
          className="orb orb-blue"
          style={{ top: "-150px", left: "-100px", width: "500px", height: "500px", opacity: 0.35 }}
        />
        <div
          className="orb orb-emerald"
          style={{ top: "-100px", right: "-100px", width: "400px", height: "400px", opacity: 0.25 }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-16 md:py-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M17 10a1 1 0 01-1 1H4.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L4.414 9H16a1 1 0 011 1z"
                clipRule="evenodd"
              />
            </svg>
            Back to all articles
          </Link>
          <div className="mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest">
            <span className="text-emerald-600">{post.category}</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500">{post.readingTime}</span>
          </div>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {post.excerpt}
          </p>
          <div className="mt-8 flex items-center gap-4 border-t border-slate-200 pt-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
              {post.author.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {post.author.name}
              </p>
              <p className="text-xs text-slate-500">
                {post.author.title} · {post.date}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COVER IMAGE */}
      <div className="bg-soft border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-200 shadow-xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* ARTICLE BODY */}
      <article className="relative py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-6">
          <div className="prose-content text-slate-700 text-base leading-8 space-y-5">
            <Content />
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="relative bg-soft py-16 md:py-20 border-y border-slate-200 overflow-hidden">
        <div
          className="orb orb-emerald"
          style={{ top: "20%", right: "-100px", width: "400px", height: "400px", opacity: 0.18 }}
        />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            Talk to NetLinkRx
          </h2>
          <p className="mt-4 text-base text-slate-600">
            See how telepharmacy can fit your facility. We&apos;ll respond
            within one business day.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
            >
              Request a Demo <Arrow />
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              View FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* MORE POSTS */}
      {otherPosts.length > 0 && (
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-10">
              Keep reading
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-slate-300 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="relative aspect-[16/10] bg-slate-200 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest">
                      <span className="text-emerald-600">{p.category}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500">{p.readingTime}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 flex-1">
                      {p.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

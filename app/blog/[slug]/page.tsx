import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllPostSlugs,
  getPostBySlug,
  pillarBadge,
  formatDate,
} from "@/lib/blog";
import { mdxComponents } from "@/lib/mdx-components";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const { meta } = post;
  return {
    title: `${meta.title} | NetLinkRx Brief`,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: meta.author }],
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      publishedTime: meta.date,
      authors: [meta.author],
      images: meta.ogImage
        ? [
            {
              url: meta.ogImage,
              width: 1200,
              height: 800,
              alt: meta.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: meta.ogImage
        ? [
            {
              url: meta.ogImage,
              width: 1200,
              height: 800,
              alt: meta.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const { meta, content } = post;
  const badge = pillarBadge(meta.pillar);

  return (
    <article>
      {/* HEADER */}
      <header className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div
          className="orb orb-blue"
          style={{ top: "-150px", left: "-100px", width: "500px", height: "500px", opacity: 0.3 }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-16 md:py-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} /> Back to the brief
          </Link>

          <div className="mt-8">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-widest ${badge.classes}`}
            >
              {badge.label}
            </span>
          </div>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
            {meta.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {meta.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="font-semibold text-slate-700">{meta.author}</span>
            <span>·</span>
            <span>{formatDate(meta.date)}</span>
            <span>·</span>
            <span>{meta.readingTime} min read</span>
          </div>
        </div>
      </header>

      {/* BODY */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-slate-700">
            <MDXRemote source={content} components={mdxComponents} />
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="relative overflow-hidden border-t border-slate-200 bg-soft py-16 md:py-20">
        <div
          className="orb orb-cyan"
          style={{ top: "10%", right: "-150px", width: "400px", height: "400px", opacity: 0.15 }}
        />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            Want hospital telepharmacy insights every Tuesday?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            The NetLinkRx Brief publishes weekly for pharmacy leaders on
            operational ROI, clinical quality, regulatory shifts, and the
            future of the department. Direct, cited, no fluff.
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
    </article>
  );
}

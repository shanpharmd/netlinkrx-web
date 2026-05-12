import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

// MDX components map for next-mdx-remote. Styling matches the NetLinkRx
// design system: slate text, blue accent, generous typography.

export const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="mt-14 mb-6 text-4xl font-semibold tracking-tight text-slate-900 leading-tight"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-14 mb-4 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-10 mb-3 text-xl font-semibold tracking-tight text-slate-900"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mb-6 text-lg leading-8 text-slate-700" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="mb-6 ml-6 list-disc space-y-2 text-lg leading-8 text-slate-700 marker:text-blue-600"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="mb-6 ml-6 list-decimal space-y-2 text-lg leading-8 text-slate-700 marker:text-blue-600 marker:font-semibold"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="pl-2" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="my-8 border-l-4 border-blue-600 bg-blue-50 px-6 py-4 italic text-slate-700"
      {...props}
    />
  ),
  a: ({
    href,
    children,
    ...rest
  }: ComponentPropsWithoutRef<"a">) => {
    const isInternal = href?.startsWith("/") || href?.startsWith("#");
    if (isInternal && href) {
      return (
        <Link
          href={href}
          className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline underline-offset-2 hover:text-blue-700"
        {...rest}
      >
        {children}
      </a>
    );
  },
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-slate-900" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="italic" {...props} />
  ),
  hr: () => <hr className="my-14 border-slate-200" />,
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="rounded bg-slate-100 px-1.5 py-0.5 text-sm font-mono text-slate-900"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100"
      {...props}
    />
  ),
  table: (props: ComponentPropsWithoutRef<"table">) => (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props: ComponentPropsWithoutRef<"thead">) => (
    <thead className="bg-slate-50" {...props} />
  ),
  th: (props: ComponentPropsWithoutRef<"th">) => (
    <th
      className="border-b-2 border-slate-300 px-4 py-3 text-left font-semibold text-slate-900"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<"td">) => (
    <td className="border-b border-slate-200 px-4 py-3 text-slate-700" {...props} />
  ),
};

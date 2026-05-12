import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type Pillar = "Operations" | "Clinical Quality" | "Innovation" | "Regulatory";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  author: string;
  pillar: Pillar;
  description: string;
  ogImage?: string;
  readingTime: number;
  keywords: string[];
};

export type PostWithContent = {
  meta: PostMeta;
  content: string;
};

function postsDirExists(): boolean {
  return fs.existsSync(POSTS_DIR);
}

export function getAllPostSlugs(): string[] {
  if (!postsDirExists()) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllPosts(): PostMeta[] {
  if (!postsDirExists()) return [];
  const slugs = getAllPostSlugs();
  const posts = slugs.map((slug) => {
    const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data } = matter(raw);
    return { ...(data as Omit<PostMeta, "slug">), slug };
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): PostWithContent | null {
  if (!postsDirExists()) return null;
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    meta: { ...(data as Omit<PostMeta, "slug">), slug },
    content,
  };
}

const PILLAR_STYLES: Record<Pillar, { label: string; classes: string }> = {
  Operations: {
    label: "Operations",
    classes: "bg-blue-50 text-blue-700",
  },
  "Clinical Quality": {
    label: "Clinical Quality",
    classes: "bg-emerald-50 text-emerald-700",
  },
  Innovation: {
    label: "Innovation",
    classes: "bg-indigo-50 text-indigo-700",
  },
  Regulatory: {
    label: "Regulatory",
    classes: "bg-amber-50 text-amber-700",
  },
};

export function pillarBadge(pillar: Pillar) {
  return PILLAR_STYLES[pillar];
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

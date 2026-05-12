# NetLinkRx Blog Setup

This adds an MDX-powered blog to your existing Next.js 16 site. Articles live as `.mdx` files in `content/blog/`. Posts render at `netlinkrx.com/blog/[slug]` with full SEO metadata, OpenGraph, and Twitter cards. The blog index at `netlinkrx.com/blog` lists everything newest-first, with a featured latest post and a grid of the rest.

## One-time install

From the `website/` directory, run:

```bash
npm install next-mdx-remote gray-matter
npm install --save-dev @types/mdx
```

That's it. No Tailwind config changes, no next.config.ts changes, no postcss tweaks.

## Test it locally

```bash
npm run dev
```

Open these URLs:

| URL | What you should see |
|-----|---------------------|
| http://localhost:3000/blog | Hero, featured article card ("The True ROI of Hospital Telepharmacy..."), CTA section |
| http://localhost:3000/blog/true-roi-hospital-telepharmacy | The full Week 1 article rendered with proper typography, pillar badge, byline, reading time |

If both pages render with the NetLinkRx orb backgrounds and Tailwind styling intact, the install is good.

## Build for production

```bash
npm run build
```

Watch for:
- `Generating static pages` line should list `/blog` and `/blog/[slug]`
- No errors about missing modules
- No TypeScript errors

## Deploy

Push to your git repo. Your host (Vercel, Netlify, etc.) auto-deploys.

```bash
git add .
git commit -m "Launch blog with MDX. Week 1: True ROI of Hospital Telepharmacy."
git push
```

## Weekly workflow going forward

Every Sunday at 8:06 AM Central, the scheduled task `netlinkrx-weekly-draft` will create the next Tuesday's article as an MDX file in `C:\Users\shans\Documents\claude cowork\NetLinkRx cowork\content\02_drafts\{quarter}\`.

To publish:

1. Review and edit the draft `.mdx` file in `02_drafts/`
2. Copy or move it to `website/content/blog/{slug}.mdx`
3. Generate an OG image for the post (1200x630, save to `website/public/blog/og/{slug}.png`)
4. `git add . && git commit -m "Publish: {Article Title}" && git push`
5. Site auto-deploys, article goes live at `netlinkrx.com/blog/{slug}`
6. Post the LinkedIn teaser (lives in the draft file) ~30 min after blog publish

## File map of what was added

```
website/
├── lib/
│   ├── blog.ts                          # Frontmatter parsing, post listing, pillar badges
│   └── mdx-components.tsx               # MDX styling (h2, p, ul, blockquote, etc.)
├── content/
│   └── blog/
│       └── true-roi-hospital-telepharmacy.mdx   # Week 1 article
└── app/
    └── blog/
        ├── page.tsx                     # Index (rewritten; falls back to "coming soon" if zero posts)
        └── [slug]/
            └── page.tsx                 # Dynamic post route with SEO metadata
```

## Frontmatter spec for new posts

Every `.mdx` file in `content/blog/` must have this frontmatter:

```yaml
---
title: "Full article title"
slug: "kebab-case-slug-matching-filename"
date: "YYYY-MM-DD"
author: "NetLinkRx Clinical Team"
pillar: "Operations" | "Clinical Quality" | "Innovation" | "Regulatory"
description: "Meta description under 155 characters"
ogImage: "/blog/og/your-slug.png"
readingTime: 7
keywords:
  - "primary keyword"
  - "secondary keyword 1"
  - "secondary keyword 2"
  - "secondary keyword 3"
---
```

Filename must match the `slug` value exactly: `kebab-case-slug-matching-filename.mdx`.

## Pillar badge colors

| Pillar | Color |
|--------|-------|
| Operations | Blue |
| Clinical Quality | Emerald |
| Innovation | Indigo |
| Regulatory | Amber |

If you want different colors, edit `PILLAR_STYLES` in `lib/blog.ts`.

## Common gotchas

**The page shows "Coming Soon" instead of my posts.**
The `content/blog/` directory might be empty or missing. Run `ls content/blog` and confirm at least one `.mdx` file exists with valid frontmatter.

**A post returns 404.**
The filename slug must exactly match the URL. If your file is `my-post.mdx`, the URL is `/blog/my-post`.

**OG image not showing on LinkedIn share preview.**
LinkedIn caches OG images aggressively. Use the LinkedIn Post Inspector (linkedin.com/post-inspector) to force a re-scrape after deploy. Image must be at least 1200x627.

**TypeScript complains about MDXRemote types.**
You may need `@types/mdx`. Already in the install command above. If still failing, restart your TS server.

## Optional polish (not required to ship)

- **OG image generation**: install `@vercel/og` and create `app/blog/[slug]/opengraph-image.tsx` to auto-generate OG images per post. Saves you the manual graphic step every week.
- **RSS feed**: create `app/rss.xml/route.ts` to expose an RSS feed. Useful if you want syndication or Substack imports.
- **Sitemap**: create `app/sitemap.ts` to list all blog URLs for search engines.
- **View counts / popular posts**: needs a backend or a service like Plausible. Skip for now.

These are nice-to-haves. Ship without them first.

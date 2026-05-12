# OG Images for Blog Posts

Drop your social-share preview images here, one per published article.

## File spec

| Property | Value |
|----------|-------|
| Format | PNG (preferred) or JPG |
| Dimensions | **1200 x 800 pixels** (3:2 aspect — fits both LinkedIn share preview and blog card without cropping) |
| Max size | Under 1 MB (LinkedIn caps preview fetch at ~5 MB but smaller renders faster) |
| Filename | Must match the post's `slug` in frontmatter |

**Why 1200x800 not 1200x630**: 1200x630 is LinkedIn's classic OG preview spec but it renders too wide and short inside the blog card layout. 1200x800 fits cleanly in both — LinkedIn handles the slightly-taller image, and the blog card displays it without cropping.

## Filename rule

If your post frontmatter is:
```yaml
slug: "true-roi-hospital-telepharmacy"
ogImage: "/blog/og/true-roi-hospital-telepharmacy.png"
```

Then the file in this folder must be exactly:
`true-roi-hospital-telepharmacy.png`

Mismatches will show no preview image on LinkedIn shares.

## Design guidance

To match the NetLinkRx site aesthetic:

- Background: white or `#f8fafc` (soft slate)
- Accent: blue `#2563eb`
- Pillar color band (top or left edge):
  - Operations: blue `#2563eb`
  - Clinical Quality: emerald `#059669`
  - Innovation: indigo `#4f46e5`
  - Regulatory: amber `#d97706`
- Title: Geist Sans Bold, ~48-64px, slate-900 `#0f172a`
- Subtitle/description: Geist Sans Regular, ~24px, slate-600 `#475569`
- Logo: NetLinkRx wordmark in the corner
- Optional: subtle blurred orb in the background (matches site hero treatment)

## Quick options

**Option A: Figma or Canva template (recommended for solo workflow)**
Build one template, swap title + pillar color each week. Export at 1200x630 PNG. 5 min per article.

**Option B: Auto-generate with @vercel/og**
Install `@vercel/og`, create `app/blog/[slug]/opengraph-image.tsx`, the image gets generated server-side from the frontmatter on every deploy. Zero per-article work. Setup is ~30 min one-time.

If you want option B, ask and I'll write the generator.

## After upload, force LinkedIn to re-scrape

LinkedIn caches OG images aggressively. After deploy, paste the article URL into:
**linkedin.com/post-inspector**

Click "Inspect" to force a fresh fetch. Then the preview will show your new image.

## What's NOT in this folder

This folder is for `og:image` only. The article body images (charts, framework graphics, etc.) live in `public/blog/inline/` instead. Keep them separate so you don't confuse a tweet preview with an in-article diagram.

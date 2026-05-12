# Inline Blog Images

Drop in-article images here (charts, framework graphics, diagrams, screenshots).

## Reference from MDX

Inside any `.mdx` file in `content/blog/`:

```mdx
![7-Variable ROI Framework](/blog/inline/roi-framework-tile.png)
```

The leading slash is important. It resolves to `public/blog/inline/` automatically.

## File spec

| Property | Value |
|----------|-------|
| Format | PNG or SVG (SVG preferred for diagrams, PNG for screenshots/photos) |
| Width | At least 1600px for retina sharpness on a 800px display column |
| Filename | kebab-case, descriptive (`roi-framework-tile.png` not `image1.png`) |

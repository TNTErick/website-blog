# website-blog

LIM Chunki's blog: a Next.js static export deployed to GitHub Pages. Split out from `website-chunki` (the profile site).

## Writing posts

Add `.mdx` files to `posts/` with frontmatter:

```yaml
---
title: My first post
date: 2026-11-22
slug: my-first-post
summary: One-line summary shown in the list.
tags: [linguistics]
draft: false
---
```

`lib/blog.ts` reads the frontmatter and `app/page.tsx` lists the posts. Individual post pages (`/posts/[slug]`) and MDX rendering are not built yet.

## Development

```bash
yarn install
yarn dev     # http://localhost:3000
yarn build   # static output in out/
```

Pushing to `main` deploys via `.github/workflows/deploy.yml`. Set the custom domain with `public/CNAME`.

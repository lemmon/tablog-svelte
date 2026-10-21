# Tablog

A minimalist blog theme for SvelteKit. Write posts in Markdown, deploy anywhere.

[Live demo](https://tablogdemo.vercel.app)

## Features

- Markdown posts and pages with Svelte components ([mdsvex](https://mdsvex.pngwn.io))
- Tags, authors, pinned posts and drafts
- RSS feed, Open Graph cards and automatic dark mode
- Styled with Tailwind CSS

## Getting started

Requires Node.js 22.17 or later.

```sh
npx degit lemmon/tablog-svelte my-blog
cd my-blog
npm install
npm run dev
```

## Content

Posts and pages are Markdown files in `content/`. The file name becomes the URL.

```md
---
title: Hello World
date: 2026-01-15
author: Jane Doe
tags: Svelte, Notes
description: Optional summary for search engines and the feed.
---

Your content here.
```

| Field         | Description                                              |
| ------------- | -------------------------------------------------------- |
| `title`       | Required.                                                |
| `date`        | Makes the entry a post. Without it, the entry is a page. |
| `author`      | Links to an author page.                                 |
| `tags`        | Comma-separated. Each tag gets its own page.             |
| `description` | Defaults to the first paragraph.                         |
| `pinned`      | Keeps the post at the top of the home page and archive.  |
| `draft`       | Excludes the entry from the site.                        |

Site title, tagline and date format are set in `src/config.js`.

## Scripts

| Command          | Description                   |
| ---------------- | ----------------------------- |
| `npm run dev`    | Start the development server. |
| `npm run build`  | Build for production.         |
| `npm run lint`   | Check formatting and lint.    |
| `npm run check`  | Type-check Svelte components. |
| `npm run format` | Format all files.             |

## Deployment

Tablog uses [`adapter-auto`](https://svelte.dev/docs/kit/adapter-auto), which supports Vercel, Netlify and Cloudflare out of the box. For other hosts, see [SvelteKit adapters](https://svelte.dev/docs/kit/adapters).

## License

[MIT](LICENSE)

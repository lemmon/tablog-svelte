import { render } from 'svelte/server';
import slugify from '$lib/slugify';

const pages = Object.entries(import.meta.glob('/content/**/*.md', { eager: true }))
  .map(([path, Page]) => ({
    id: path.match(/content\/(.*)\.\w+$/)[1],
    meta: Page.metadata,
    Page: Page.default,
  }))
  .filter((x) => x.meta && !x.meta.draft);

export function loadPages() {
  return pages
    .filter((x) => !x.meta.date)
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((x) => ({
      id: x.id,
      title: x.meta.title,
    }));
}

export function loadPosts(props) {
  const opt = {
    pinned: true,
    description: false,
    content: false,
    ...props,
  };
  return pages
    .filter((x) => x.meta.date)
    .sort(
      (a, b) =>
        (opt.pinned ? !a.meta.pinned - !b.meta.pinned : 0) ||
        new Date(b.meta.date) - new Date(a.meta.date),
    )
    .map((page) => {
      const content = opt.content || opt.description ? render(page.Page).body : null;
      return {
        id: page.id,
        title: page.meta.title,
        date: page.meta.date,
        pinned: page.meta.pinned,
        author: page.meta.author,
        authorId: slugify(page.meta.author),
        tags: parseTags(page.meta.tags),
        description: opt.description
          ? page.meta.description || createDescription(content)
          : undefined,
        content: opt.content ? content : undefined,
      };
    });
}

export function loadPage(id) {
  const page = pages.find((x) => x.id === id);
  if (!page) return;
  const content = render(page.Page).body;
  return {
    ...page.meta,
    id: page.id,
    content,
    authorId: slugify(page.meta.author),
    tags: parseTags(page.meta.tags),
    description: page.meta.description || createDescription(content),
  };
}

function parseTags(tags) {
  return tags?.split(',').map((x) => [slugify(x), x.trim()]);
}

function createDescription(html) {
  return html.split('\n')[0].replace(/<.+?>/g, '');
}

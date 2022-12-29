const pages = Object.entries(import.meta.glob('/content/**/*.md', { eager: true }))
  .map(([path, Page]) => ({
    id: path.match(/content\/(.*)\.\w+$/)[1],
    meta: Page.metadata,
    Page: Page.default,
  }))
  .filter((x) => x.meta && !x.meta.draft)

export function loadPages() {
  return pages.map((x) => ({
    id: x.id,
    title: x.meta.title,
    date: x.meta.date,
  }))
}

export function loadPage(id) {
  const page = pages.find((x) => x.id === id)
  const content = page.Page.render().html
  return (
    page && {
      ...page.meta,
      id: page.id,
      content,
      description: page.meta.description || createDescription(content),
    }
  )
}

function createDescription(html) {
  return html.split('\n')[0].replace(/<.+?>/g, '')
}

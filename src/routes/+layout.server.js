import { loadPages } from '$lib/content'

export async function load({ url }) {
  const all = loadPages()

  const posts = all.filter((x) => x.date).sort((a, b) => !a.pinned - !b.pinned || new Date(b.date) - new Date(a.date))
  const pages = all.filter((x) => !x.date).sort((a, b) => a.id.localeCompare(b.id))

  return {
    host: url.host,
    posts,
    pages,
  }
}

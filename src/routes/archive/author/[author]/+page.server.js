import { error } from '@sveltejs/kit'

export async function load({ params, parent }) {
  const data = await parent()
  const posts = data.posts.filter((x) => x.authorId === params.author)

  if (!posts.length) {
    throw error(404, { message: 'Not found' })
  }

  return {
    author: posts[0].author,
    posts,
  }
}

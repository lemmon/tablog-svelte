import { error } from '@sveltejs/kit'
import { API_URL } from '$env/static/private'

export async function load({ params }) {
  const post = await fetch(`${API_URL}/blog/${params.slug}`).then((x) => x.json())

  if (!post) {
    throw error(404, { message: 'Not found' })
  }

  return {
    post,
  }
}

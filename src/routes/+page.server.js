import { API_URL } from '$env/static/private'

export async function load({ parent }) {
  const data = await parent()

  return {
    post: await fetch(`${API_URL}/blog/${data.posts[0].id}`).then((x) => x.json()),
  }
}

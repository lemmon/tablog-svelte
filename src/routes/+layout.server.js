import { API_URL } from '$env/static/private'

export async function load({ url }) {
  return {
    host: url.host,
    ...(await fetch(`${API_URL}/blog`).then((x) => x.json())),
  }
}

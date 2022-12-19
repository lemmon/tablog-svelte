import { API_URL } from '$env/static/private'

export async function load() {
  return {
    ...(await fetch(`${API_URL}/blog`).then((x) => x.json())),
  }
}

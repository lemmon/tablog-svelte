import { loadPage } from '$lib/content';

export async function load({ parent }) {
  const data = await parent();
  const post = loadPage(data.posts[0].id);

  return {
    post,
  };
}

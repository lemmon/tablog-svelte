import { error } from '@sveltejs/kit';

export async function load({ params, parent }) {
  const data = await parent();
  const posts = data.posts.filter((post) => post.tags?.find((x) => x[0] === params.id));

  if (!posts.length) {
    error(404, { message: 'Not found' });
  }

  return {
    tag: posts[0].tags.find((x) => x[0] === params.id)[1],
    posts,
  };
}

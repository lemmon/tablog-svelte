import { loadPages, loadPosts } from '#lib/content.js';

export async function load({ url }) {
	return {
		host: url.host,
		posts: loadPosts(),
		pages: loadPages(),
	};
}

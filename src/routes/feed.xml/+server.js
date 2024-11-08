import config from '/src/config';
import { loadPosts } from '$lib/content';

export function GET({ url }) {
  const posts = loadPosts({
    pinned: false,
    description: true,
  });

  return new Response(
    `<?xml version='1.0' encoding='utf-8'?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${config.siteTitle}</title>
    <description>${config.siteTagline}</description>
    <link>${url.origin}</link>
    <generator>Tablog</generator>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${url.origin}/feed.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `<item>
      <title>${post.title}</title>
      <link>${url.origin}/${post.id}</link>
      <guid isPermaLink="true">${url.origin}/${post.id}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${post.description}</description>
    </item>`,
      )
      .join(`\n    `)}
  </channel>
</rss>`,
    {
      headers: new Headers([
        ['Cache-Control', 'max-age=0, s-maxage=3600'],
        ['Content-Type', 'text/xml; charset=UTF-8'],
      ]),
    },
  );
}

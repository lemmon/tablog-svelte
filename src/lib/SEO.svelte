<script>
import { page } from '$app/state';
import { Base64 } from 'js-base64';
import config from '/src/config';

let { title, description, og = undefined } = $props();
let image = $derived(
  `https://og.tablo.me/card/${Base64.encode(
    JSON.stringify({
      t: og?.title || title,
      a: og?.author || config.siteTitle,
    }),
    true,
  )
    .replace(/\+/g, '-')
    .replace(/\//g, '_')}.png`,
);
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={page.url.href} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={image} />
  <meta property="og:image:alt" content={title} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  <meta name="twitter:image:alt" content={title} />
</svelte:head>

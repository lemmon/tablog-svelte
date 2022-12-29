<script>
import '/src/css/index.css'
import config from '/src/config'
import Logo from '$lib/Logo.svelte'
import PageLoader from './PageLoader.svelte'

export let data
</script>

<svelte:head>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <!-- Analytics for Demo Website; you can safely remove this section -->
  {#if data.host === 'tablogdemo.vercel.app'}<script
      defer
      data-domain="tablogdemo.vercel.app"
      src="https://plausible.io/js/script.js"
    ></script>{/if}
</svelte:head>

<PageLoader />

<div class="minvh mindvh col max49 mx">
  <header class="px1 py2 md:p2 row">
    <figure class="logo"><a href="/" title={config.siteTitle}><Logo /></a></figure>
  </header>

  <main class="span1">
    <slot />
  </main>

  <nav class="px05 py1 md:px15 h5 lh2">
    <ul class="py075 row-wrap gapx15">
      {#each data.pages as item (item.id)}
        <li><a class="block px05 py025 ul" href="/{item.id}">{item.title}</a></li>
      {/each}
      <li><a class="row gap0125 px05 py025 ul" href="https://www.github.com/lemmon">Github</a></li>
      <li><a class="row gap0125 px05 py025 ul" href="https://www.twitter.com/lemmon">Twitter</a></li>
    </ul>
  </nav>

  <footer class="px1 py2 md:p2">
    <div class="copy h5 lh2">
      <p
        >&copy; {new Date().getFullYear()}
        {config.siteTitle} <span class="inlineblock mx05 gray lum80">|</span> Built with
        <a href="https://tablogdemo.vercel.app/">Tablog Theme</a>
        for SvelteKit by
        <a href="https://www.lemmonjuice.com/">Lemmon Juice</a></p
      >
    </div>
  </footer>
</div>

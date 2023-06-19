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
    <figure
      ><a class="row items-center gap1" href="/" title={config.siteTitle}>
        <Logo />
        <!-- display site title next to the logo
        <h1 class="h2 lsh">{config.siteTitle}</h1>
        -->
      </a></figure
    >
  </header>

  <main class="span1">
    <slot />
  </main>

  <footer class="pt2">
    <nav class="py1 md:p1 h5 lh2">
      <ul class="p05 row-wrap gapx15">
        {#each data.pages as item (item.id)}
          <li><a class="block p05 ul" href="/{item.id}">{item.title}</a></li>
        {/each}
        <li
          ><a
            class="row gap0125 p05 anchor"
            href="https://www.github.com/lemmon"
            target="_blank"
            rel="external noreferrer nofollow"><span class="ul">Github</span><span class="o20">&#8599;</span></a
          ></li
        >
        <li
          ><a
            class="row gap0125 p05 anchor"
            href="https://www.twitter.com/lemmon"
            target="_blank"
            rel="external noreferrer nofollow"><span class="ul">Twitter</span><span class="o20">&#8599;</span></a
          ></li
        >
      </ul>
    </nav>

    <div class="px1 py2 md:p2 copy h5 lh2">
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

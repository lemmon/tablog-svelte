<script>
import '/src/css/index.css'
import config from '/src/config'
import Logo from '$lib/Logo.svelte'
import PageLoader from './PageLoader.svelte'

export let data
</script>

<svelte:head>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="alternate" type="application/rss+xml" title="RSS" href="/feed.xml" />
  <!-- Analytics for Demo Website; you can safely remove this section -->
  {#if data.host === 'tablogdemo.vercel.app'}<script
      defer
      data-domain="tablogdemo.vercel.app"
      src="https://plausible.io/js/script.js"
    ></script>{/if}
</svelte:head>

<PageLoader />

<div class="min-h-screen min-h-dvh max-w-container mx-auto flex flex-col">
  <header class="px-4 py-8 md:p-8 flex flex-row">
    <figure
      ><a class="flex flex-row items-center gap-4" href="/" title={config.siteTitle}>
        <Logo />
        <!-- display site title next to the logo
        <h1 class="text-3xl leading-none tracking-tight">{config.siteTitle}</h1>
        -->
      </a></figure
    >
  </header>

  <main class="flex-1">
    <slot />
  </main>

  <footer class="mt-8">
    <nav class="py-4 md:p-4 text-xl">
      <ul class="p-2 flex flex-row flex-wrap gap-x-6">
        <li><a class="flex flex-row gap-0.5 p-2 underline" href="/feed.xml">Feed</a></li>
        {#each data.pages as item (item.id)}
          <li><a class="block p-2 underline" href="/{item.id}">{item.title}</a></li>
        {/each}
        <li
          ><a
            class="flex flex-row gap-0.5 p-2"
            href="https://github.com/lemmon/tablog-svelte"
            target="_blank"
            rel="external noreferrer nofollow"
            ><span class="underline">Github</span><span class="text-current/20">&#8599;</span></a
          ></li
        >
        <li
          ><a
            class="flex flex-row gap-0.5 p-2"
            href="https://www.twitter.com/lemmon"
            target="_blank"
            rel="external noreferrer nofollow"
            ><span class="underline">Twitter</span><span class="text-current/20">&#8599;</span></a
          ></li
        >
      </ul>
    </nav>

    <div class="px-4 py-8 md:p-8 copy text-xl">
      <p
        >&copy; {new Date().getFullYear()}
        {config.siteTitle} <span class="inline-block mx-2 text-current/20">|</span> Built with
        <a href="https://tablogdemo.vercel.app/">Tablog Theme</a>
        for SvelteKit by
        <a href="https://www.lemmonjuice.com/">Lemmon</a></p
      >
    </div>
  </footer>
</div>

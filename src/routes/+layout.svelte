<script>
import '/src/css/index.css';
import config from '/src/config';
import Logo from '$lib/Logo.svelte';
import PageLoader from './PageLoader.svelte';

let { data, children } = $props();
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

<div class="max-w-container mx-auto flex min-h-dvh min-h-screen flex-col">
  <header class="flex flex-row px-4 py-8 md:p-8">
    <figure>
      <a class="flex flex-row items-center gap-4" href="/" title={config.siteTitle}>
        <Logo />
        <!-- display site title next to the logo
        <h1 class="text-3xl leading-none tracking-tight">{config.siteTitle}</h1>
        -->
      </a>
    </figure>
  </header>

  <main class="flex-1">
    {@render children()}
  </main>

  <footer class="mt-8">
    <nav class="py-4 text-xl md:p-4">
      <ul class="flex flex-row flex-wrap gap-x-6 p-2">
        <li><a class="flex flex-row gap-0.5 p-2 underline" href="/feed.xml">Feed</a></li>
        {#each data.pages as item (item.id)}
          <li><a class="block p-2 underline" href="/{item.id}">{item.title}</a></li>
        {/each}
        <li>
          <a
            class="flex flex-row gap-0.5 p-2"
            href="https://github.com/lemmon/tablog-svelte"
            target="_blank"
            rel="external noreferrer nofollow"
            ><span class="underline">Github</span><span class="text-current/20">&#8599;</span></a
          >
        </li>
        <li>
          <a
            class="flex flex-row gap-0.5 p-2"
            href="https://www.twitter.com/lemmon"
            target="_blank"
            rel="external noreferrer nofollow"
            ><span class="underline">Twitter</span><span class="text-current/20">&#8599;</span></a
          >
        </li>
      </ul>
    </nav>

    <div class="copy px-4 py-8 text-xl md:p-8">
      <p>
        &copy; {new Date().getFullYear()}
        {config.siteTitle} <span class="mx-2 inline-block text-current/20">|</span> Built with
        <a href="https://tablogdemo.vercel.app/">Tablog Theme</a>
        for SvelteKit by
        <a href="https://www.jakubpelak.com/">Jakub Pelák</a>
      </p>
    </div>
  </footer>
</div>

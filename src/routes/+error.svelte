<script>
import { page } from '$app/stores'
import Action from '$lib/Action.svelte'
import Button from '$lib/Button.svelte'
</script>

<svelte:head>
  <title>Error {$page.status}</title>
</svelte:head>

<section class="py2">
  <header class="px1 py2 md:p2">
    <h1 class="h1 lh1 lsh">Error {$page.status}</h1>
  </header>

  <div class="px1 py2 md:p2">
    <div class="copy h5 lh2">
      {#if $page.status === 404}
        <p>Page not found.</p>
      {:else}
        <p>{$page.error.message}.</p>
      {/if}
    </div>
  </div>

  <Action class="px1 py2 md:p2">
    <Button href="/archive">Return home</Button>
  </Action>
</section>

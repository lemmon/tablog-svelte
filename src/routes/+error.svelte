<script>
import { page } from '$app/stores'
</script>

<svelte:head>
  <title>Error {$page.status}</title>
</svelte:head>

<section class="py2">
  <header class="px1 py2 md:p2">
    <h1 class="h1 lh1 lsh">Error</h1>
  </header>

  <div class="px1 py2 md:p2">
    <div class="copy h5 lh2">
      <p>{$page.error.message}.</p>
    </div>
  </div>

  <aside class="px1 py2 md:p2">
    <div class="h5 lh2">
      <p><a href="/"><span class="ul">Return home</span> &rarr;</a></p>
    </div>
  </aside>
</section>

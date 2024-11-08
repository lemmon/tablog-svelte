<script>
let { children } = $props();
</script>

<header class="copy px-4 py-8 md:p-8">
  <h1 class="text-5xl">{@render children()}</h1>
</header>

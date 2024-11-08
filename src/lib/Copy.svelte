<script>
let { children } = $props();
</script>

<div class="px-4 py-8 md:p-8">
  <div class="copy text-xl">
    {@render children()}
  </div>
</div>

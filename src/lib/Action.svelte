<script>
let { class: classname, children } = $props();
</script>

<aside class={['text-action flex flex-row flex-wrap gap-2', classname]}>
  {@render children()}
</aside>

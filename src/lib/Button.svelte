<script>
let { href, primary = false, children } = $props();
</script>

<a class="button" class:button--primary={primary} {href}>{@render children()}</a>

<script>
export let href
export let primary = false
</script>

<a class="button" class:button--primary={primary} {href}><slot /></a>

<script>
	let { class: classname, children } = $props();
</script>

<aside class={['flex flex-row flex-wrap gap-2 text-action', classname]}>
	{@render children()}
</aside>

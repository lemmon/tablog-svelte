<script>
	let {
		src,
		srcset = undefined,
		width = undefined,
		height = undefined,
		alt = '',
		caption = undefined,
	} = $props();
</script>

<figure>
	<img {src} {srcset} {width} {height} {alt} />
	{#if caption}
		<figcaption class="mt-2 text-center text-sm text-balance">{caption}</figcaption>
	{/if}
</figure>

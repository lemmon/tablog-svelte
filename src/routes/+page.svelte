<script>
	import config from '/src/config';
	import ArchiveSection from '$lib/ArchiveSection.svelte';
	import PostSection from '$lib/PostSection.svelte';
	import SEO from '$lib/SEO.svelte';

	let { data } = $props();
</script>

<SEO
	title={`${config.siteTitle} — ${config.siteTagline}`}
	description={data.post.description}
	og={{ title: config.siteTagline }}
/>

<PostSection post={data.post} />

<ArchiveSection />

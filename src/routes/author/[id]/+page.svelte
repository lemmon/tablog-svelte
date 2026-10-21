<script>
	import config from '#config';
	import ArchiveSection from '#lib/ArchiveSection.svelte';
	import SEO from '#lib/SEO.svelte';
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

<SEO
	title={`${data.author} — ${config.siteTitle} ${config.archiveTitle}`}
	description={config.siteTagline}
	og={{ title: `${data.author} ${config.archiveTitle}` }}
/>

<ArchiveSection posts={data.posts}>
	{#snippet header()}
		<a class="hover:underline" href={resolve('/archive')}>{config.archiveTitle}</a>
		<span class="text-current/20">/</span>
		{data.author}
	{/snippet}
</ArchiveSection>

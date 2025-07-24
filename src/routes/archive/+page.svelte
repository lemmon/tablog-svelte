<script>
	import config from '/src/config';
	import ArchiveSection from '$lib/ArchiveSection.svelte';
	import SEO from '$lib/SEO.svelte';
</script>

<SEO
	title={`${config.siteTitle} ${config.archiveTitle}`}
	description={config.siteTagline}
	og={{ title: config.archiveTitle }}
/>

<ArchiveSection limit={false} />

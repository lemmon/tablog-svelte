<script>
import config from '/src/config';
import SEO from '$lib/SEO.svelte';
import ArchiveSection from '$lib/ArchiveSection.svelte';
</script>

<SEO
  title={`${config.siteTitle} ${config.archiveTitle}`}
  description={config.siteTagline}
  og={{ title: config.archiveTitle }}
/>

<ArchiveSection limit={false} />

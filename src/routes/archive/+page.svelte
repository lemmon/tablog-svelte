<script>
import config from '/src/config'
import SEO from '$lib/SEO.svelte'
import ArchiveSection from '$lib/ArchiveSection.svelte'
</script>

<SEO title={`${config.siteTitle} Archive`} description={config.siteTagline} og={{ title: 'Archive' }} />

<ArchiveSection limit={false} />

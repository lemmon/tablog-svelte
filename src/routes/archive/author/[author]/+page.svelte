<script>
import config from '/src/config'
import SEO from '$lib/SEO.svelte'
import ArchiveSection from '$lib/ArchiveSection.svelte'

export let data
</script>

<SEO
  title={`${data.author} — ${config.siteTitle} Archive`}
  description={config.siteTagline}
  og={{ title: `${data.author} Archive` }}
/>

<ArchiveSection posts={data.posts}>
  <svelte:fragment slot="header"
    ><a class="ul:hover" href="/archive">Archive</a> <span class="o20">/</span> {data.author}</svelte:fragment
  >
</ArchiveSection>

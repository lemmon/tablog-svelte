<script>
import config from '/src/config'
import SEO from '$lib/SEO.svelte'
import ArchiveSection from '$lib/ArchiveSection.svelte'

export let data
</script>

<SEO
  title={`${data.author} — ${config.siteTitle} ${config.archiveTitle}`}
  description={config.siteTagline}
  og={{ title: `${data.author} ${config.archiveTitle}` }}
/>

<ArchiveSection posts={data.posts}>
  <svelte:fragment slot="header"
    ><a class="ul:hover" href="/archive">{config.archiveTitle}</a> <span class="o20">/</span>
    {data.author}</svelte:fragment
  >
</ArchiveSection>

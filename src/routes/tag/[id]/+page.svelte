<script>
import config from '/src/config'
import SEO from '$lib/SEO.svelte'
import ArchiveSection from '$lib/ArchiveSection.svelte'

export let data
</script>

<SEO
  title={`${data.tag} — ${config.siteTitle} ${config.archiveTitle}`}
  description={config.siteTagline}
  og={{ title: `${data.tag} ${config.archiveTitle}` }}
/>

<ArchiveSection posts={data.posts}>
  <svelte:fragment slot="header"
    ><a class="hover:underline" href="/archive">{config.archiveTitle}</a> <span class="text-current/20">/</span>
    {data.tag}</svelte:fragment
  >
</ArchiveSection>

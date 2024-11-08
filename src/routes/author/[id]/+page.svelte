<script>
import config from '/src/config';
import SEO from '$lib/SEO.svelte';
import ArchiveSection from '$lib/ArchiveSection.svelte';

let { data } = $props();
</script>

<SEO
  title={`${data.author} — ${config.siteTitle} ${config.archiveTitle}`}
  description={config.siteTagline}
  og={{ title: `${data.author} ${config.archiveTitle}` }}
/>

<ArchiveSection posts={data.posts}>
  {#snippet header()}
    <a class="hover:underline" href="/archive">{config.archiveTitle}</a>
    <span class="text-current/20">/</span>
    {data.author}
  {/snippet}
</ArchiveSection>

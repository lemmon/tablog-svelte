<script>
import config from '/src/config'
import PostSection from '$lib/PostSection.svelte'
import ArchiveSection from '$lib/ArchiveSection.svelte'

export let data
</script>

<svelte:head>
  <title>{data.post.title} &ndash; {config.siteTitle}</title>
  <meta name="description" content={data.post.description} />
</svelte:head>

<PostSection post={data.post} />

<ArchiveSection />

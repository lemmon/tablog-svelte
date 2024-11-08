<script>
import config from '/src/config';
import SEO from '$lib/SEO.svelte';
import PostSection from '$lib/PostSection.svelte';
import ArchiveSection from '$lib/ArchiveSection.svelte';

let { data } = $props();
</script>

<SEO
  title={`${data.post.title} — ${config.siteTitle}`}
  description={data.post.description}
  og={{ title: data.post.title }}
/>

<PostSection post={data.post} />

<ArchiveSection />

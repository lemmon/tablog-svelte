<script>
export let src
export let srcset = undefined
export let width = undefined
export let height = undefined
export let alt = ''
export let caption = undefined
</script>

<figure>
  <img {src} {srcset} {width} {height} {alt} />
  {#if caption}
    <figcaption>{caption}</figcaption>
  {/if}
</figure>

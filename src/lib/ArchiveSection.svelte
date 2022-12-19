<script>
import { format } from 'date-fns'
import { page } from '$app/stores'
import config from '/src/config'
import Header from './Header.svelte'

export let limit = 5
</script>

<section class="py2">
  <Header>Archive</Header>
  <div class="px1 py175 md:px2">
    <ul class="h5 lh2">
      {#each $page.data.posts.slice(0, limit || Infinity) as item (item.id)}
        <li class="py025 row justify-between items-end gap1"
          ><a class="ul ellipsis" href="/{item.id}">{item.title}</a>
          <span class="span1 border-bottom border-dashed border-gray border-alpha20" style="min-width: 1rem;" />
          <span class="nowrap">{format(new Date(item.date), config.dateFormat)}</span></li
        >
      {/each}
    </ul>
  </div>
  {#if limit}
    <aside class="px1 py2 md:p2">
      <div class="h5 lh2">
        <p><a href="/archive"><span class="ul">All posts</span> &rarr;</a></p>
      </div>
    </aside>
  {/if}
</section>

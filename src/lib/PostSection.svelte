<script>
import { format } from 'date-fns'
import CalendarIcon from 'svelte-bootstrap-icons/lib/Calendar.svelte'
import config from '/src/config'
import Header from '$lib/Header.svelte'
import Copy from '$lib/Copy.svelte'

export let post
</script>

{#key post.id}
  <section class="py2">
    <article>
      <Header>{post.title}</Header>
      {#if post.date}
        <aside class="px1 py1 md:px2">
          <a class="h5 lh2 inline-row items-center gap05" href="/{post.id}"
            ><CalendarIcon /> <span class="ul">{format(new Date(post.date), config.dateFormat)}</span></a
          >
        </aside>
      {/if}
      <Copy>{@html post.content}</Copy>
    </article>
  </section>
{/key}

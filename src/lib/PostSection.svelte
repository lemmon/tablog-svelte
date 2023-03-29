<script>
import { format } from 'date-fns'
import config from '/src/config'
import Header from '$lib/Header.svelte'
import Copy from '$lib/Copy.svelte'

import CalendarIcon from 'svelte-bootstrap-icons/lib/Calendar.svelte'
import PinAngleFillIcon from 'svelte-bootstrap-icons/lib/PinAngleFill.svelte'

export let post
</script>

{#key post.id}
  <section class="py2">
    <article>
      <Header>{post.title}</Header>
      {#if post.date}
        <aside class="px1 py1 md:px2">
          <a class="h5 rlh4 inline-row items-center gap05" href="/{post.id}"
            >{#if post.pinned}<PinAngleFillIcon />{:else}<CalendarIcon />{/if}
            <span class="ul">{format(new Date(post.date), config.dateFormat)}</span></a
          >
        </aside>
      {/if}
      <Copy>{@html post.content}</Copy>
    </article>
  </section>
{/key}

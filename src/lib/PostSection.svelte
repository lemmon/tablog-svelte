<script>
import { format } from 'date-fns'
import config from '/src/config'
import Header from '$lib/Header.svelte'
import Copy from '$lib/Copy.svelte'

import CalendarIcon from 'svelte-bootstrap-icons/lib/Calendar.svelte'
import PinAngleFillIcon from 'svelte-bootstrap-icons/lib/PinAngleFill.svelte'
import PencilFillIcon from 'svelte-bootstrap-icons/lib/PencilFill.svelte'

export let post
</script>

{#key post.id}
  <section class="py2">
    <article>
      <Header>{post.title}</Header>

      {#if post.date || post.author}
        <aside class="px1 py075 md:px2 row-wrap gapx2 gapy025">
          {#if post.date}
            <a class="block py025 h5 rlh4 row gap05" href="/{post.id}"
              ><span class="row py025"
                >{#if post.pinned}<PinAngleFillIcon />{:else}<CalendarIcon />{/if}</span
              ><span class="ul">{format(new Date(post.date), config.dateFormat)}</span></a
            >
          {/if}
          {#if post.author}
            <a class="block py025 h5 rlh4 row gap05" href="/archive/author/{post.authorId}"
              ><span class="row py025"><PencilFillIcon /></span><span class="ul">{post.author}</span></a
            >
          {/if}
        </aside>
      {/if}

      <Copy>{@html post.content}</Copy>
    </article>
  </section>
{/key}

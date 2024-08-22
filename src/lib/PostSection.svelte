<script>
import { format } from 'date-fns'
import config from '/src/config'
import Header from '$lib/Header.svelte'
import Copy from '$lib/Copy.svelte'

import CalendarIcon from 'svelte-bootstrap-icons/lib/Calendar.svelte'
import PinAngleFillIcon from 'svelte-bootstrap-icons/lib/PinAngleFill.svelte'
import PencilFillIcon from 'svelte-bootstrap-icons/lib/PencilFill.svelte'
import TagFillIcon from 'svelte-bootstrap-icons/lib/TagFill.svelte'

export let post
</script>

{#key post.id}
  <section class="py-8">
    <article>
      <Header>{post.title}</Header>

      {#if post.date || post.author || post.tags}
        <aside class="px-4 py-3 md:px-8 flex flex-row flex-wrap gap-x-8 gap-y-4 text-metadata">
          {#if post.date}
            <a class="block py-1 flex flex-row gap-2" href="/{post.id}"
              ><span class="flex flex-row py-1"
                >{#if post.pinned}<PinAngleFillIcon />{:else}<CalendarIcon />{/if}</span
              ><span class="underline">{format(new Date(post.date), config.dateFormat)}</span></a
            >
          {/if}
          {#if post.author}
            <a class="block py-1 flex flex-row gap-2" href="/author/{post.authorId}"
              ><span class="flex flex-row py-1"><PencilFillIcon /></span><span class="underline">{post.author}</span></a
            >
          {/if}
          {#if post.tags}
            <div class="flex flex-row items-start gap-2">
              <div class="flex flex-row py-2"><TagFillIcon /></div>
              <div
                >{#each post.tags as tag, i}{#if i},
                  {/if}<a class="inline-block py-1 underline" href="/tag/{tag[0]}">{tag[1]}</a>{/each}</div
              >
            </div>
          {/if}
        </aside>
      {/if}

      <Copy>{@html post.content}</Copy>
    </article>
  </section>
{/key}

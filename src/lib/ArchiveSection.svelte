<script>
import { format } from 'date-fns'
import { page } from '$app/stores'
import config from '/src/config'
import Header from '$lib/Header.svelte'
import Action from '$lib/Action.svelte'
import Button from '$lib/Button.svelte'

import PinAngleFillIcon from 'svelte-bootstrap-icons/lib/PinAngleFill.svelte'

export let limit = 5
export let posts = $page.data.posts.slice(0, limit || Infinity)
</script>

<section class="py-8">
  <Header><slot name="header">{config.archiveTitle}</slot></Header>
  <div class="px-4 py-7 md:px-8">
    <ul class="text-metadata">
      {#each posts as item (item.id)}
        <li class="flex flex-row gap-4"
          ><a class="py-1 flex flex-row gap-2 min-w-0" href="/{item.id}"
            >{#if item.pinned}<PinAngleFillIcon class="my-1" />
            {/if}<span class="flex-1 underline truncate">{item.title}</span></a
          >
          <span class="my-1 flex-1 min-w-4 border-b border-dashed text-current/20" />
          <span class="my-1 whitespace-nowrap">{format(new Date(item.date), config.dateFormat)}</span></li
        >
      {/each}
    </ul>
  </div>
  {#if limit}
    <Action class="px-4 py-8 md:p-8">
      <Button href="/archive">All posts &rarr;</Button>
    </Action>
  {/if}
</section>

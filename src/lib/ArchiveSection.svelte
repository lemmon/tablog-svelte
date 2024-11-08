<script>
import { format } from 'date-fns';
import { page } from '$app/stores';
import config from '/src/config';
import Header from '$lib/Header.svelte';
import Action from '$lib/Action.svelte';
import Button from '$lib/Button.svelte';

import PinIcon from '$lib/icons/PinIcon.svelte';

let { limit = 5, posts = $page.data.posts.slice(0, limit || Infinity), header } = $props();
</script>

<section class="py-8">
  <Header
    >{#if header}{@render header()}{:else}{config.archiveTitle}{/if}</Header
  >
  <div class="px-4 py-7 md:px-8">
    <ul class="text-metadata">
      {#each posts as item (item.id)}
        <li class="flex flex-row gap-4">
          <a class="flex min-w-0 flex-row gap-2 py-1" href="/{item.id}"
            >{#if item.pinned}<PinIcon />
            {/if}<span class="flex-1 truncate underline">{item.title}</span></a
          >
          <span class="my-1 min-w-4 flex-1 border-b border-dashed text-current/20"></span>
          <span class="my-1 whitespace-nowrap"
            >{format(new Date(item.date), config.dateFormat)}</span
          >
        </li>
      {/each}
    </ul>
  </div>
  {#if limit}
    <Action class="px-4 py-8 md:p-8">
      <Button href="/archive">All posts &rarr;</Button>
    </Action>
  {/if}
</section>

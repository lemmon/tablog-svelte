<script>
import { format } from 'date-fns'
import config from '/src/config'
import CalendarIcon from '$lib/icons/CalendarIcon.svelte'
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
      <Copy>
        {#each post.content as block}
          {#if block.type === 'html'}
            {@html block.html}
          {:else if block.type === 'image'}
            <figure>
              <img
                src={block.srcset[block.srcset.length - 1].url}
                srcset={block.srcset.map((x) => `${x.url} ${x.width}w`).join(', ')}
                width={block.width}
                height={block.height}
                alt=""
              />
              {#if block.caption}
                <figcaption>{block.caption}</figcaption>
              {/if}
            </figure>
          {:else if block.type === 'actions'}
            <aside class="row-wrap gap05">
              {#each block.actions as action}
                <a class="button" class:button--primary={action.primary} href={action.url}>{action.label}</a>
              {/each}
            </aside>
          {/if}
        {/each}
      </Copy>
    </article>
  </section>
{/key}

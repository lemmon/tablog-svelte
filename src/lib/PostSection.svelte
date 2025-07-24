<script>
	import { format } from 'date-fns';

	import config from '/src/config';
	import Copy from '$lib/Copy.svelte';
	import Header from '$lib/Header.svelte';
	import CalendarIcon from '$lib/icons/CalendarIcon.svelte';
	import PenToolIcon from '$lib/icons/PenToolIcon.svelte';
	import PinIcon from '$lib/icons/PinIcon.svelte';
	import TagIcon from '$lib/icons/TagIcon.svelte';

	let { post } = $props();
</script>

{#key post.id}
	<section class="py-8">
		<article>
			<Header>{post.title}</Header>

			{#if post.date || post.author || post.tags}
				<aside class="text-metadata flex flex-row flex-wrap gap-x-6 px-4 py-3 md:px-8">
					{#if post.date}
						<a class="flex flex-row gap-2 py-1" href="/{post.id}"
							><span class="flex flex-row"
								>{#if post.pinned}<PinIcon />{:else}<CalendarIcon />{/if}</span
							><span class="underline">{format(new Date(post.date), config.dateFormat)}</span></a
						>
					{/if}
					{#if post.author}
						<a class="flex flex-row gap-2 py-1" href="/author/{post.authorId}"
							><span class="flex flex-row"><PenToolIcon /></span><span class="underline"
								>{post.author}</span
							></a
						>
					{/if}
					{#if post.tags}
						<div class="flex flex-row items-start gap-2">
							<div class="flex flex-row py-1"><TagIcon /></div>
							<div>
								{#each post.tags as tag, i (tag[0])}
									{#if i},
									{/if}
									<a class="inline-block py-1 underline" href="/tag/{tag[0]}">{tag[1]}</a>
								{/each}
							</div>
						</div>
					{/if}
				</aside>
			{/if}

			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			<Copy>{@html post.content}</Copy>
		</article>
	</section>
{/key}

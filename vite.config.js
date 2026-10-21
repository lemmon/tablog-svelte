import adapter from '@sveltejs/adapter-auto';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			adapter: adapter(),
			extensions: ['.svelte', '.md', '.svx'],
			preprocess: [
				mdsvex({
					extensions: ['.md', '.svx'],
				}),
			],
		}),
	],
});

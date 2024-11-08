import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md', '.svx'],
  kit: {
    adapter: adapter(),
  },
  preprocess: [
    mdsvex({
      extensions: ['.md', '.svx'],
    }),
  ],
};

export default config;

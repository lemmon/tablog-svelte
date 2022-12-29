import adapter from '@sveltejs/adapter-auto'
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

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
    sveltePreprocess({
      postcss: true,
    }),
  ],
}

export default config

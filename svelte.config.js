import adapter from '@sveltejs/adapter-auto'
import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'],
  kit: {
    adapter: adapter(),
  },
  preprocess: [
    sveltePreprocess({
      postcss: true,
    }),
  ],
}

export default config

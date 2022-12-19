const postcssImport = require('postcss-import')
const postcssPresetEnv = require('postcss-preset-env')
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

module.exports = {
  plugins: [
    postcssImport(),
    postcssPresetEnv({
      stage: 0,
    }),
    !dev &&
      purgecss({
        content: ['./src/**/*.svelte', './src/**/*.html'],
        defaultExtractor: (x) => x.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: ['-d', '-view'],
          deep: [/svelte/, /^copy/],
        },
      }),
    !dev &&
      cssnano({
        preset: 'default',
      }),
  ],
}

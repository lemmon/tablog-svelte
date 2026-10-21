# Repository Guidelines

Tablog is a minimalist SvelteKit blog theme. People clone it as a starter, so keep the code simple and readable.

- Content is Markdown in `content/`, processed by mdsvex. Loading logic lives in `src/lib/content.js`.
- SvelteKit 3: config goes into `sveltekit({...})` in `vite.config.js`. There is no `svelte.config.js`.
- Import with `#lib/...` (include the file extension) and site settings with `#config`. `$lib` is not available.
- Wrap internal links in `resolve()` from `$app/paths`.
- Run `npm run lint`, `npm run check` and `npm run build` before committing.
- Record notable changes in `content/changelog.md` under the current month: major version upgrades, user-facing features and significant tooling changes, one short line each. Skip minor bumps and small internal details.

# Tablog

A minimalistic blog theme built with SvelteKit.

📺 [Demo](https://tablogdemo.vercel.app)

## Install

```sh
npx degit lemmon/tablog-svelte
npm install
npm run dev
```

## Usage

Posts and pages are generated with mdsvex processor. All content is located in `/content` folder. If an entry has the `date` prop it is treated as a blog post. If not it is considered a static page. All pages containing `draft: true` prop are treated as drafts and therefore inaccessible.

General site configuration can be adjusted by editing the `/src/config.js` file.

You can easily upgrade this example project to hook to any blog api of your choice; render static or dynamic content and deploy to numerous production environemtns, with just few simple tweaks. See [SvelteKit documentation](https://kit.svelte.dev/docs) for more info.

## License

MIT

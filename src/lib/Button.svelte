<script>
	import { resolve } from '$app/paths';

	let { href, primary = false, children } = $props();

	// Only root-relative paths get the base path. External links pass through
	// unchanged. The leading slash is dropped so resolve() takes a pathname
	// rather than a route ID.
	function resolveHref(href) {
		if (!href.startsWith('/') || href.startsWith('//')) return href;
		return resolve(href.slice(1));
	}
</script>

<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- resolveHref() resolves internal paths -->
<a class="button" class:button--primary={primary} href={resolveHref(href)}>{@render children()}</a>

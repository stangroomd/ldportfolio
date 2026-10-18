// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// Pages kept out of the sitemap while they're hidden. Remove an entry to list it.
const hidden = ["/blog", "/indev"];

// https://astro.build/config
export default defineConfig({
	site: "https://stangroom.uk",
	integrations: [
		mdx(),
		sitemap({ filter: (page) => !hidden.some((path) => page.includes(path)) }),
	],
	// Old addresses that now live elsewhere.
	redirects: {
		"/sectors": "/services",
	},
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});

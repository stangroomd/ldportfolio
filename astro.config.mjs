// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://stangroom.uk",
	integrations: [
		mdx(),
		// The blog and the in-development homepage are hidden for now,
		// so keep them out of the sitemap.
		sitemap({ filter: (page) => !page.includes("/blog") && !page.includes("/indev") }),
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

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
		// The blog is hidden for now, so keep it out of the sitemap.
		sitemap({ filter: (page) => !page.includes("/blog") }),
	],
	// Old addresses that now live elsewhere.
	redirects: {
		"/indev": "/services",
		"/sectors": "/services",
	},
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});

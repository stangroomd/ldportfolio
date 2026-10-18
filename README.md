# stangroom.uk

Website for stangroom.uk, built with [Astro](https://astro.build) and deployed on Cloudflare.

## Editing the site

| To change… | Edit |
| :-- | :-- |
| Email, phone, site description, photos | `src/consts.ts` |
| Colours | the `:root` block at the top of `src/styles/global.css` (the font is set in the `body` rule just below) |
| Menu links | `src/components/Navbar.astro` |
| Footer links | `src/components/Footer.astro` |
| "Coming Soon" page (the live homepage) | `src/pages/index.astro` |
| New homepage (in development, at `/indev`) | `src/pages/indev.astro` |
| Services (the three categories and their bullet points) | the list at the top of `src/pages/services.astro` |
| Policy PDFs | add the file to `public/policies/`, then add a line to `src/pages/reports-policies.astro` |
| Blog posts | `src/content/blog/` (copy `example-post.md` to start a new one) |

Each page in `src/pages/` becomes a web address: `contact.astro` → `/contact`.

### Images

Each photo slot is set in the `IMAGES` list in `src/consts.ts`. Until a photo is set, a stage-light placeholder drawn in CSS is shown instead.

1. Create a `public/images/` folder if there isn't one, and put the photo in it, e.g. `public/images/hero.webp`.
2. Enter its path in `src/consts.ts`, e.g. `hero: "/images/hero.webp"`.

WebP or JPG at around 1600–2000px wide keeps pages fast. Only use photos you have the rights to. Free sources whose licences allow commercial use without payment include [Unsplash](https://unsplash.com/license) (free photos only, not "Unsplash+"), [Pexels](https://www.pexels.com/license/) and [Pixabay](https://pixabay.com/service/license-summary/). Avoid photos with recognisable faces or brand logos.

### Launching the new homepage

The live homepage shows "Coming Soon". The new homepage is at `/indev`, hidden from search engines and the sitemap. When it's ready:

1. Delete `src/pages/index.astro`, then rename `src/pages/indev.astro` to `index.astro`.
2. In that file, change `<BaseLayout noindex>` to `<BaseLayout>`.
3. In `src/consts.ts`, change `HOME` to `"/"`.
4. In `astro.config.mjs`, remove `"/indev"` from the `hidden` list, and add `"/indev": "/",` under `redirects`.

### Blog

The blog is hidden for now. It isn't in the menu, it's left out of the sitemap, and search engines are asked not to index it. You can still visit `/blog` directly to try it out. To make it public:

1. Add `{ href: "/blog", label: "Blog" }` to the list in `src/components/Navbar.astro`.
2. Remove `noindex` from `src/pages/blog/index.astro` and `src/layouts/BlogPost.astro`.
3. In `astro.config.mjs`, remove `"/blog"` from the `hidden` list.

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Local preview at `localhost:4321` |
| `npm run build` | Build the site into `./dist/` |
| `npm run deploy` | Deploy to Cloudflare |

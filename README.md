# stangroom.uk

Website for stangroom.uk, built with [Astro](https://astro.build) and deployed on Cloudflare.

## Editing the site

| To change… | Edit |
| :-- | :-- |
| Email, phone, site description | `src/consts.ts` |
| Colours and fonts | `src/styles/global.css` (the `:root` block at the top) |
| Menu links | `src/components/Navbar.astro` |
| Footer links | `src/components/Footer.astro` |
| Home page | `src/pages/index.astro` |
| Services (text, bullet points, photos) | the list at the top of `src/pages/services.astro` |
| Policy PDFs | add the file to `public/policies/`, then add a line to `src/pages/reports-policies.astro` |
| Blog posts | `src/content/blog/` (copy `example-post.md` to start a new one) |

Each page in `src/pages/` becomes a web address: `contact.astro` → `/contact`.

### Images

Put images in `public/images/` and refer to them as `/images/name.webp`. WebP or JPG at around 1600–2000px wide keeps pages fast.

### Blog

The blog is hidden for now. It isn't in the menu, it's left out of the sitemap, and search engines are asked not to index it. You can still visit `/blog` directly to try it out. To make it public:

1. Add `{ href: "/blog", label: "Blog" }` to the list in `src/components/Navbar.astro`.
2. Remove `noindex` from `src/pages/blog/index.astro` and `src/layouts/BlogPost.astro`.
3. Remove the `filter` line from `sitemap(...)` in `astro.config.mjs`.

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Local preview at `localhost:4321` |
| `npm run build` | Build the site into `./dist/` |
| `npm run deploy` | Deploy to Cloudflare |

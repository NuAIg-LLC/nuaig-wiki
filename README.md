# nuaig-wiki

The product wiki for the Financial Assessment Tool, a senior-living financial qualification
platform. A static site: no database, no authentication, nothing to operate.

Read `src/content/docs/decisions/contributing.mdx` (published as "How to change this wiki")
before editing. The short version: describe behaviour, never implementation; name no client;
use synthetic screenshots only; no em dashes; verify against the code, not older prose.

## Run it

```sh
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static output in dist/
pnpm preview
```

## Deploy

It is a plain static site. On Vercel, import the folder and accept the detected framework
preset. No environment variables are needed.

## Where things live

| Looking for | Go to |
| --- | --- |
| Pages | `src/content/docs/<section>/<page>.mdx` |
| The sidebar | `astro.config.mjs` |
| Colours and layout | `src/styles/theme.css` (every colour is a token) |
| Diagrams | `src/components/Flow.astro`, drawn from data in the page |
| Screenshots | `src/components/Shot.astro`, images in `public/img/shots/` |
| The floating summary ("The gist") | `src/components/Gist.astro`, bullets in each page's `tldr` frontmatter |

Every page needs a `title`, a `description` and a `tldr` list of three to five sentences.

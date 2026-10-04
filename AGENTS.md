# AGENTS.md

Guidelines for AI agents working on this repository.

## Project Overview

Personal website and blog of **Kevin Valmorbida** (Software Engineer), hosted at
[kevinvalmo.github.io](https://kevinvalmo.github.io).

The site is intentionally built with **plain HTML and CSS only** — no frameworks,
no build pipeline, no package manager, no bundler. Every file served is the file
as written. Keep it that way.

## Repository Structure

```
.
├── .github/
│   └── workflows/
│       ├── build-deploy.yaml   # GitHub Actions: deploy to GitHub Pages on push to main
│       └── check-links.yaml    # Link checker (lychee): on push and weekly, never blocks deploys
├── about/
│   └── index.html              # Redirects to / (kept for old links)
├── blog/
│   ├── index.html              # Blog listing (post cards)
│   ├── back-to-simplicity.html
│   ├── enhanced-software-engineers.html
│   └── my-first-post.html
├── design/
│   └── index.html              # Design system documentation (tokens, components)
├── services/
│   └── index.html              # Placeholder page (noindex)
├── public/
│   ├── style.css               # Single shared stylesheet
│   ├── *.jpg                   # Hero / thumbnail images (full and .low variants)
│   ├── euthymia-icon.png       # App icon for the Apps section
│   ├── favicon.svg             # Favicon (modern browsers)
│   └── apple-touch-icon.png    # 180×180 icon for iOS home screens
├── 404.html                    # Custom 404 page (served by GitHub Pages)
├── index.html                  # Home / About page
├── favicon.ico                 # Legacy favicon (browsers and crawlers request /favicon.ico)
├── feed.xml                    # Atom feed of the blog (hand-written)
├── sitemap.xml                 # Sitemap (hand-written)
├── robots.txt
├── _post-template.html         # Template for new blog posts
├── .editorconfig
└── .nojekyll                   # Disables Jekyll if the Pages source is ever a branch
```

## Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Markup      | Plain HTML5                       |
| Styling     | Plain CSS3 (custom properties)    |
| Hosting     | GitHub Pages                      |
| CI/CD       | GitHub Actions                    |
| Build step  | **None**                          |
| Dependencies| **None**                          |

## Architecture

- **No framework, no SSG, no bundler.** There is no `package.json`, no `node_modules`,
  no compilation step. Every `.html` file is served as-is.
- **Single stylesheet**: pages in a subdirectory link to `../public/style.css`, the root
  `index.html` to `public/style.css`. Do not add additional stylesheets or inline `<style>`
  blocks unless absolutely necessary.
- **Paths**: assets (CSS, images, icons) use relative paths, so pages still render when
  opened straight from disk. Navigation links are root-absolute (`/blog/`, `/design/`).
  **Exception: `404.html` must use root-absolute paths everywhere** (`/public/style.css`),
  because GitHub Pages serves it at whatever URL was requested.
- **Design tokens**: colours and spacing are defined as CSS custom properties in `:root`
  inside `style.css`. Always use those variables; never hardcode colour hex values in HTML
  or in new CSS rules (for translucent variants use `color-mix()` on a token).
- **Dark scheme**: `style.css` remaps the same `--color-*` tokens inside
  `@media screen and (prefers-color-scheme: dark)`. When adding a colour token, add its
  dark value there too and document both on the design page.
- **Images** live in `public/`. Each image has a full version (`*.jpg`, cropped to 2:1,
  max 1440px wide, JPEG quality ~80) used in article heroes and as `og:image`, and a
  thumbnail (`*.low.jpg`, cropped to 16:9 at 640×360, quality ~75) used in post cards.
  Always set `width`/`height` on `<img>`; hero images get `fetchpriority="high"`,
  below-the-fold thumbnails `loading="lazy"`.
- **Routing**: GitHub Pages serves `index.html` from each directory and resolves
  extensionless URLs, so `/blog/back-to-simplicity` serves `blog/back-to-simplicity.html`.
  **Post URLs are extensionless everywhere** (internal links, `canonical`, `og:url`,
  share links, feed, sitemap). The root `index.html` is the home/About page;
  `about/index.html` redirects to `/`.
- **`.nojekyll`** must remain at the repository root. The Actions-based deploy does not run
  Jekyll anyway (and leaves dotfiles out of the artifact), but the file keeps files starting
  with `_` working if the Pages source is ever switched back to a branch.

## Deployment

Deployment is fully automated via `.github/workflows/build-deploy.yaml`:

1. Triggered on every push to the `main` branch (or manually via `workflow_dispatch`).
2. The repository is uploaded as a GitHub Pages artifact (dotfiles excluded).
3. The artifact is deployed to the `github-pages` environment, one deployment at a time.

`.github/workflows/check-links.yaml` checks internal and external links with lychee on
every push and every Monday. It runs separately, so a broken link never blocks a deploy.

There is no staging environment. **Changes merged to `main` are live immediately.**

## Code Style

Follow `.editorconfig` for all files:

- **Encoding**: UTF-8 (no BOM)
- **Indentation**: 2 spaces (no tabs)
- **Trailing newline**: always insert one at end of file
- **Trailing whitespace**: always trim (except in `.md` files)

HTML/CSS conventions observed across the codebase:

- Comments use `<!-- Section name -->` to delimit major blocks (Header, Content, Footer).
- Class names are kebab-case (e.g., `post-card`, `hero-image-wrap`).
- All pages share the same header/footer structure — keep them consistent. The current
  page's nav link carries `aria-current="page"`.
- Decorative emoji inside links and text are wrapped in `<span aria-hidden="true">`.
- Every public page's `<head>` contains: `<title>` ("Page — Kevin Valmorbida"),
  `meta description`, `link rel="canonical"`, `og:type`, `og:site_name`, `og:title`,
  `og:description`, `og:image`, `og:url`, `twitter:card`, the favicon links and the feed
  `link rel="alternate"`. **`og:image`, `og:url` and `canonical` must be absolute URLs**
  (`https://kevinvalmo.github.io/...`): social networks do not resolve relative paths.
- `meta description` and `og:description` are **100–160 characters**: LinkedIn's Post
  Inspector warns below 100, Google truncates snippets above ~160.
- The root `index.html` carries the `google-site-verification` meta tag for Google Search
  Console. **Never remove it**, or the site loses its verified ownership.

## Adding a New Blog Post

1. Copy `_post-template.html` to `blog/<slug>.html` and follow the checklist at its top.
2. Replace every `{{PLACEHOLDER}}`: title, subtitle (short, shown under the title),
   description (100–160 characters, for meta and Open Graph), slug, dates (ISO and human),
   hero image and its dimensions, tags, read-time estimate, and the body content.
3. Place the images in `public/`: `<name>.jpg` (2:1) and `<name>.low.jpg` (16:9, 640×360).
4. Add the post card to the top of `blog/index.html` following the existing pattern
   (thumbnail uses the `.low.jpg` variant; only the first card loads eagerly).
5. Add an `<entry>` to `feed.xml` (newest first) and bump the feed's `<updated>`.
6. Add the post URL to `sitemap.xml`.

## What Agents Must NOT Do

- **Do not introduce any build tool, framework, or package manager** (no npm, no Vite,
  no Tailwind CLI, no Jekyll, no Next.js, etc.).
- **Do not add external CSS or JS CDN links** to pages.
- **Do not create additional stylesheets.** Extend `public/style.css` instead.
- **Do not hardcode colours.** Use the existing CSS custom properties.
- **Do not commit secrets, API keys, or personal data** beyond what is already public.
- **Do not modify `.nojekyll`** or remove it.
- **Do not alter the CI/CD workflows** without an explicit request from the owner.
- **Do not reformat or refactor files unrelated to the task at hand.**

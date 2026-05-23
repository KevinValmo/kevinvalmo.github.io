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
│       └── build-deploy.yaml   # GitHub Actions: deploy to GitHub Pages on push to main
├── .vscode/                    # Editor settings (ignored by agents)
├── about/
│   └── index.html              # About / bio page
├── blog/
│   ├── index.html              # Blog listing (post cards)
│   ├── back-to-simplicity.html
│   ├── enhanced-software-engineers.html
│   └── my-first-post.html
├── cv/
│   └── index.html              # CV / résumé page
├── services/
│   └── index.html              # Placeholder page
├── public/
│   ├── style.css               # Single shared stylesheet
│   ├── *.jpg                   # Hero / thumbnail images (full and low-res variants)
│   └── 404.html
├── 404.html                    # Root-level 404 fallback
├── index.html                  # Redirects to /about/
├── .editorconfig
├── .nojekyll                   # Disables Jekyll processing on GitHub Pages
└── _blogpost_template.md       # Markdown template for drafting new posts
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
- **Single stylesheet**: all pages link to `../public/style.css` (or `/public/style.css`
  for root-level pages). Do not add additional stylesheets or inline `<style>` blocks
  unless absolutely necessary.
- **Design tokens**: colours and spacing are defined as CSS custom properties in `:root`
  inside `style.css`. Always use those variables; never hardcode colour hex values in HTML
  or in new CSS rules.
- **Images** live in `public/`. Each image has a full-resolution version (`*.jpg`) used
  in article hero sections, and a low-resolution variant (`*.low.jpg`) used in post-card
  thumbnails in the blog listing.
- **Routing**: GitHub Pages serves `index.html` from each directory, so `/about/` maps to
  `about/index.html`. The root `index.html` is a client-side redirect to `/about/`.
- **`.nojekyll`** must remain at the repository root; without it, GitHub Pages would ignore
  files whose names start with `_`.

## Deployment

Deployment is fully automated via `.github/workflows/build-deploy.yaml`:

1. Triggered on every push to the `main` branch.
2. The entire repository is uploaded as a GitHub Pages artifact.
3. The artifact is deployed to the `github-pages` environment.

There is no staging environment. **Changes merged to `main` are live immediately.**

## Code Style

Follow `.editorconfig` for all files:

- **Encoding**: UTF-8
- **Indentation**: 2 spaces (no tabs)
- **Trailing newline**: always insert one at end of file
- **Trailing whitespace**: always trim (except in `.md` files)

HTML/CSS conventions observed across the codebase:

- Comments use `<!-- Section name -->` to delimit major blocks (Header, Content, Footer).
- Class names are kebab-case (e.g., `post-card`, `hero-image-wrap`).
- All pages share the same header/footer structure — keep them consistent.
- `<meta>` OG tags (`og:title`, `og:description`, `og:image`, `og:url`) should be present
  on all public-facing pages.

## Adding a New Blog Post

1. Copy an existing post (e.g., `blog/back-to-simplicity.html`) as a starting point.
2. Update: `<title>`, OG meta tags, `og:url`, hero image, `<h1>`, subtitle `<p><em>`,
   tags, date, read-time estimate, and the body content.
3. Add the corresponding post card to `blog/index.html` following the existing pattern
   (thumbnail uses the `.low.jpg` variant).
4. Place any new images in `public/` and provide both a full-res and a `.low.jpg` variant.
5. Use `_blogpost_template.md` only as a content-drafting aid; the actual post must be HTML.

## What Agents Must NOT Do

- **Do not introduce any build tool, framework, or package manager** (no npm, no Vite,
  no Tailwind CLI, no Jekyll, no Next.js, etc.).
- **Do not add external CSS or JS CDN links** to pages.
- **Do not create additional stylesheets.** Extend `public/style.css` instead.
- **Do not hardcode colours.** Use the existing CSS custom properties.
- **Do not commit secrets, API keys, or personal data** beyond what is already public.
- **Do not modify `.nojekyll`** or remove it.
- **Do not alter the CI/CD workflow** without an explicit request from the owner.
- **Do not reformat or refactor files unrelated to the task at hand.**

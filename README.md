# Thomas N. Harvey – research website

Personal research website in English and Norwegian (bokmål), built with [Astro](https://astro.build) and published on GitHub Pages.

Live site: https://tomharvey19.github.io/Toms-website/

## Editing content

All content lives in `src/data/`. Text that appears in both languages is written as `{ en: '…', no: '…' }`.

| What | File |
|---|---|
| Name, title, affiliation, e-mail, profile links, intro text | `src/data/profile.ts` |
| Research themes (Research page and front-page cards) | `src/data/research.ts` |
| Publications | `src/data/publications.ts` |
| CV: positions, education, projects, awards, teaching, supervision, service | `src/data/cv.ts` |
| Front-page screen figure (data and caption) | `src/data/screen.csv`, `src/data/screen.ts` |
| Menu labels, buttons and other interface text | `src/i18n/index.ts` |

**Adding a paper:** copy an existing entry at the top of `publications` in `src/data/publications.ts` and fill it in. Set `featured: true` to show it on the front page, and list the research `themes` it belongs to so it appears on the Research page.

**Screen figure:** replace `src/data/screen.csv` with gene-level results (columns `gene,score,fdr`; `fdr` is optional). Genes with `fdr` at or below `hitFdr` in `src/data/screen.ts` are highlighted. Then set `illustrative: false` to remove the "Illustrative data" note, and optionally list genes in `labels` to name them on the plot. The file currently holds made-up placeholder data.

## Running locally

Requires Node 22 or newer.

```sh
npm install
npm run dev      # http://localhost:4321/Toms-website/
npm run build    # type-check and build to dist/
```

## Deployment

Every push to `main` builds and deploys the site through `.github/workflows/deploy.yml`.
One-time setup: in the GitHub repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.

### Moving to a custom domain later

1. Buy the domain and point it at GitHub Pages ([GitHub's guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
2. In `astro.config.mjs`, set `site` to the new domain and delete the `base` line.
3. Add the domain under **Settings → Pages → Custom domain**.

## Structure

```
src/
  data/        content (edit these)
  i18n/        languages, page URLs per language, interface text
  views/       one template per page, shared by both languages
  pages/       URL routes: English at /, Norwegian under /no/
  components/  header, footer, publication entry, profile links
  layouts/     page shell (metadata, theme, language alternates)
  styles/      design tokens and global styles
```

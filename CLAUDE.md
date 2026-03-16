# Personal Site — satyan-g.github.io

This is a personal portfolio/blog site built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme.

## Content Language & Privacy

- **Tone**: Semi-formal throughout all portal content.
- **No proprietary content on the portal**: No company-specific metrics (throughput, AUM, team sizes, client counts, infrastructure scale), no proprietary product/service names (B-PIPE, BPOD, //blp/* services, Tradeweb Marks, FTSE Russell IOSCO Close, etc.). Keep portal descriptions capability-focused — emphasize what was built and skills demonstrated, not internal details of any employer.
- **PDF resume** (`assets/pdf/resume.pdf`): The authoritative, full-detail version with all specifics. It is `.gitignored` and must NEVER be committed to the public repo. Resume can be requested by email.
- **`chatbase_context.md`**: Privacy-scrubbed context file uploaded to Chatbase for "Chat with Resume". Must stay in sync with resume updates but must contain NO company names, NO proprietary product names, NO company-specific metrics. Focus on: capabilities, career trajectory, skills, education, and how Satya works. Use generic descriptors (e.g., "major financial data provider", "buy-side asset manager", "electronic trading platform") instead of company names.
- **PR scan**: `.github/workflows/proprietary-scan.yml` runs on every PR to main and blocks merges if proprietary content (metrics or product names) is detected in personal content files.

## Golden Rule

**Only modify "Personal Content Files" listed below.** Never edit theme files (layouts, includes, sass, plugins, scripts) unless explicitly asked. The al-folio upstream theme handles everything else.

## Personal Content Files (ONLY edit these)

| File / Directory | Purpose |
|---|---|
| `_config.yml` | Site settings: name, URL, features, blog config |
| `_pages/about.md` | Homepage / about page content |
| `_posts/*.md` | Blog posts (filename: `YYYY-MM-DD-title.md`) |
| `_projects/*.md` | Project showcase entries |
| `_news/*.md` | News/announcement items |
| `_books/*.md` | Book entries |
| `_teachings/*.md` | Teaching entries |
| `_bibliography/papers.bib` | Publications in BibTeX format |
| `_data/cv.yml` | CV/resume structured data |
| `_data/socials.yml` | Social media links and contact info |
| `_data/repositories.yml` | GitHub repos to display |
| `_data/coauthors.yml` | Publication coauthors |
| `_data/venues.yml` | Publication venue metadata |
| `_data/citations.yml` | Auto-generated citation counts |
| `assets/json/resume.json` | JSONResume format CV (alternative to cv.yml) |
| `assets/img/` | Your images (profile pic, project images, post images) |
| `assets/pdf/` | PDFs (CV, papers, etc.) |
| `robots.txt` | Crawler access rules (currently blocks all for privacy) |

## DO NOT Edit (theme/infrastructure files)

- `_layouts/`, `_includes/`, `_sass/`, `_plugins/`, `_scripts/` — theme internals
- `Gemfile`, `Gemfile.lock`, `package.json`, `package-lock.json` — dependencies
- `Dockerfile`, `docker-compose.yml`, `docker-compose-slim.yml` — Docker setup
- `AGENTS.md`, `.github/` — agent/CI configuration (from upstream)
- `bin/`, `purgecss.config.js`, `requirements.txt` — build tooling
- All `*.md` docs in root (`INSTALL.md`, `CUSTOMIZE.md`, `FAQ.md`, etc.) — upstream docs

## Workflow

### Adding a blog post

1. Create `_posts/YYYY-MM-DD-your-title.md` with front matter:
   ```markdown
   ---
   layout: post
   title: "Your Title"
   date: YYYY-MM-DD HH:MM:SS
   description: "Short description"
   tags: [tag1, tag2]
   categories: [category]
   ---

   Your content in Markdown here.
   ```

### Adding a project

1. Create `_projects/name.md` with front matter:
   ```markdown
   ---
   layout: page
   title: "Project Name"
   description: "Short description"
   img: assets/img/project-image.jpg
   importance: 1
   category: work
   ---

   Project details here.
   ```

### Adding a news item

1. Create `_news/announcement_N.md`:
   ```markdown
   ---
   layout: post
   date: YYYY-MM-DD
   inline: true
   related_posts: false
   ---

   Your news text here.
   ```

### Updating CV

Edit `_data/cv.yml` for the YAML-based CV, or `assets/json/resume.json` for JSONResume format. Both are supported — the site uses whichever is configured.

### Adding images

Drop images into `assets/img/`. Reference them in posts/projects as `assets/img/filename.jpg`.

Profile picture: replace `assets/img/prof_pic.jpg`.

## Local Development

```bash
# Start dev server with Docker (recommended)
docker compose pull && docker compose up
# Site at http://localhost:8080

# Rebuild after dependency changes
docker compose up --build

# Stop
docker compose down
```

## Pre-Commit Checklist

1. Format code: `npx prettier . --write`
2. Build locally: `docker compose up --build`
3. Verify at http://localhost:8080 — check navigation, pages, images, dark mode

## Privacy Notes

- `robots.txt` is set to `Disallow: /` — blocks all crawlers
- `serve_og_meta` and `serve_schema_org` are `false` — no social previews
- Social links in `_data/socials.yml` are commented out by default
- For full privacy, keep the GitHub repo private and deploy via Cloudflare Pages + Cloudflare Access

## Key Config Decisions

- `url`: `https://satyan-g.github.io`
- `baseurl`: empty (personal site, not project site)
- Comments (giscus/disqus): disabled
- External blog sources: removed
- Analytics: all disabled
- Open Graph / Schema.org: disabled for privacy

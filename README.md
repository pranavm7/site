# astro-webtui-blog

A terminal-style blog built with [Astro](https://astro.build) and [webTUI](https://webtui.ironclad.sh).  
Inspired by [stefvuck.dev/blog](https://stefvuck.dev/blog/).

## Features

- 🖥 Terminal/TUI aesthetic with file-tree sidebar
- 🎨 5 built-in themes: Catppuccin Mocha, Nord, Dracula, Tokyo Night, Gruvbox
- ⌨ Keyboard shortcuts (press `?` to see them)
- 📁 Collapsible sidebar with tree navigation
- 📝 Write posts in pure **Markdown** via Astro Content Collections
- 🔍 Full-text **search** via pagefind — floating terminal modal, blurred backdrop
- 🔢 Auto-generated Table of Contents per post
- ✅ Frontmatter validated by Zod at build time
- ⚡ Zero client-side JS framework

## Getting Started

```bash
npm install

# First build (creates the pagefind search index)
npm run build

# Dev server — search works after the build above
npm run dev

# Or build + dev in one shot
npm run dev:search

# Production preview
npm run preview
```

> **Search requires a build first.** Pagefind generates its index from the compiled HTML output in `dist/`. Run `npm run build` once, then `npm run dev` — the dev server serves the pagefind index from `dist/pagefind/`. The shortcut `npm run dev:search` does both in sequence.

## Project Structure

```
src/
├── content/
│   ├── config.ts              # Zod schema for blog frontmatter
│   └── blog/
│       ├── rust-ownership.md  # write your posts here
│       ├── wasm-intro.md
│       ├── terminal-tools.md
│       └── git-internals.md
├── layouts/
│   └── BaseLayout.astro       # Shell: sidebar + tabbar + statusbar
├── pages/
│   ├── index.astro            # Home page
│   ├── cv/                    # CV section
│   └── blog/
│       ├── index.astro        # Blog listing (auto-populated)
│       └── [slug].astro       # Dynamic post renderer
└── styles/
    └── global.css             # webTUI + all custom styles
```

## Writing a Post

Create a `.md` file in `src/content/blog/`. The blog index and post pages update automatically.

```markdown
---
title: "My New Post"
date: 2026-03-25
description: "Shown on the blog index card."
tags: ["tag1", "tag2"]
draft: false
---

Write in standard **Markdown**. Code blocks, tables, blockquotes all work.
A table of contents is auto-generated from your headings.
```

### Frontmatter Fields

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | string | yes | Post title |
| `date` | date | yes | YYYY-MM-DD |
| `description` | string | yes | Index card excerpt |
| `tags` | string[] | no | Defaults to [] |
| `draft` | boolean | no | Defaults to false |

## Themes

Add a `[data-theme="my-theme"]` block to `src/styles/global.css` and add it to the `themes` array in `src/layouts/BaseLayout.astro`.

## Keyboard Shortcuts (inspired by vim/tmux)

| Key | Action |
|-----|--------|
| `/` | Open search |
| `?` | Show help |
| `T` | Open theme picker |
| `Ctrl+B` | Toggle sidebar |
| `G` | Go to blog index |
| `Alt+←` | Go back |
| `Esc` | Close modals |

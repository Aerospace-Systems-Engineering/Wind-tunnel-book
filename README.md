# PROTOFLOW Website — Developer Guide

*2026-10-31*

## Project overview

PROTOFLOW is a public onboarding course for MSc students who want to work with the PROTOFLOW rapid-prototyping wind tunnel at TU/e. It is a static website built with **Docusaurus 3.7**, a React-based documentation framework that turns Markdown files into a polished, searchable site.

The source is version-controlled in the GitHub repository `Aerospace-Systems-Engineering/ProtoFlow` and hosted for free on **GitHub Pages** at `https://aerospace-systems-engineering.github.io/ProtoFlow/`.

**What makes it tick**

Each chapter is a single Markdown file. Docusaurus compiles those files into a React app — it handles the navbar, sidebar, search, light/dark theme, and responsive layout automatically. Two additions sit on top of the standard setup:

- **Math rendering** via `remark-math` + `rehype-katex`: write standard LaTeX (`$Re = UL/\nu$` inline, `$$...$$` for display) and it renders as formatted equations.
- **Interactive quizzes** via a custom React component (`src/components/Quiz/index.jsx`): drop a `<Quiz ... />` block anywhere in a chapter and students get an instant-feedback multiple-choice question.

## Local development

### Prerequisites

- **Node.js 18 or higher** — check with `node --version`
- **npm** (comes with Node)
- A terminal — the built-in one in VS Code works perfectly

### First-time setup

Only needed once per machine, or after deleting `node_modules/`:

```bash
cd ProtoFlow
npm install
```

### Daily workflow

1. Open the `ProtoFlow` folder in VS Code.
2. Open the integrated terminal (`` Ctrl+` `` or Terminal → New Terminal).
3. Start the local dev server:

```bash
npm start
```

The site opens at **http://localhost:3000/ProtoFlow/**. Every time you save a Markdown file the browser refreshes automatically — no manual reload needed.

4. Edit `.md` files in `docs/` to update content (see the next section).
5. Stop the server with `Ctrl+C` when done.

### Troubleshooting

| Symptom | Fix |
|---|---|
| Port 3000 already in use | `npm start -- --port 3001` |
| Sidebar shows wrong order | Check that `id:` in the file's frontmatter matches `sidebars.js` |
| Math does not render | Wrap equations in `$...$` (inline) or `$$...$$` (display block) |
| Quiz does not appear | Confirm `import Quiz from '@site/src/components/Quiz';` is at the top of the `.md` file |

## Adding and editing content

### Editing an existing chapter

Open the relevant file in `docs/` and edit the Markdown. Changes appear instantly in the browser while `npm start` is running.

| Chapter | File |
|---|---|
| 1. Introduction | `docs/01-introduction/index.md` |
| 2. Wind Tunnel Fundamentals | `docs/02-fundamentals/index.md` |
| 3. The Wind Tunnel | `docs/03-windtunnel/index.md` |
| 4. Measurement Instruments | `docs/04-instrumentation/index.md` |
| 5. Operating PROTOFLOW | `docs/05-operating/index.md` |

### Adding a quiz question

Every chapter file starts with `import Quiz from '@site/src/components/Quiz';`. To add a question anywhere in a chapter:

```jsx
<Quiz
  question="Your question text here?"
  options={[
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ]}
  correct={1}
  feedback="Explanation shown after the student answers."
/>
```

`correct` is the zero-based index of the right answer (0 = A, 1 = B, 2 = C, 3 = D).

### Adding math

Inline: `$Re = UL/\nu$`

Display block:

```
$$
C_L = \frac{L}{\tfrac{1}{2}\rho U^2 A}
$$
```

Standard LaTeX syntax works. Rendered by KaTeX in the browser.

### Adding a new chapter

1. Create a new folder under `docs/`, e.g. `docs/06-advanced/`.
2. Create `docs/06-advanced/index.md` with frontmatter:

```markdown
---
id: index
title: Advanced Topics
sidebar_label: 6. Advanced Topics
slug: /advanced
---

import Quiz from '@site/src/components/Quiz';

# Advanced Topics
```

3. Add it to `sidebars.js`:

```js
{ type: 'doc', id: 'advanced/index', label: '6. Advanced Topics' },
```

### Adding images

Put image files in `static/img/`. Reference them in Markdown as:

```markdown
![Alt text](/ProtoFlow/img/your-image.png)
```

The `/ProtoFlow/` prefix is required because of the `baseUrl` setting.

## Deploying to GitHub Pages

### First-time setup

Make sure your local git remote points to the correct repository:

```bash
git remote -v
# Should show: https://github.com/Aerospace-Systems-Engineering/ProtoFlow.git
```

If not:

```bash
git remote add origin https://github.com/Aerospace-Systems-Engineering/ProtoFlow.git
```

GitHub Pages must be configured to serve from the `gh-pages` branch. In the GitHub repository settings:

1. Go to **Settings → Pages**.
2. Under **Source**, select **Deploy from a branch**.
3. Choose branch `gh-pages` and folder `/ (root)`.
4. Save.

### Deploying

From the project root, run:

```bash
USE_SSH=true npm run deploy
```

Or with HTTPS:

```bash
GIT_USER=<your-github-username> npm run deploy
```

This command:
1. Builds the site with `npm run build`.
2. Pushes the contents of `build/` to the `gh-pages` branch of the repository.
3. GitHub Pages then serves the site at `https://aerospace-systems-engineering.github.io/ProtoFlow/`.

The deploy takes about 1–2 minutes to go live after the push completes.

### Typical workflow

```bash
# 1. Edit content in docs/
# 2. Preview locally
npm start

# 3. Commit your changes
git add .
git commit -m "Add section on pitot tubes"
git push

# 4. Deploy
GIT_USER=<your-github-username> npm run deploy
```

### Troubleshooting deployment

| Issue | Fix |
|---|---|
| `git push` fails with 403 | Use a GitHub personal access token or SSH key; `GIT_USER` must have write access to the repo |
| Site shows 404 | Check that GitHub Pages is set to `gh-pages` branch in repo settings |
| Old content still visible | GitHub Pages CDN caches aggressively; wait 5 minutes and hard-refresh |
| Build fails before push | Run `npm run build` locally to see the error; fix it, then re-deploy |

## Reference

### Project file map

```
ProtoFlow/
├── docusaurus.config.js      # Site config: title, URL, math plugins, navbar, footer
├── sidebars.js               # Sidebar structure and chapter order
├── package.json              # Dependencies, scripts, webpack version pin
├── README.md                 # This file
├── docs/                     # All course content lives here
│   ├── 01-introduction/
│   │   └── index.md
│   ├── 02-fundamentals/
│   │   └── index.md
│   ├── 03-windtunnel/
│   │   └── index.md
│   ├── 04-instrumentation/
│   │   └── index.md
│   └── 05-operating/
│       └── index.md
├── src/
│   ├── components/
│   │   └── Quiz/
│   │       └── index.jsx   # Interactive multiple-choice quiz component
│   └── css/
│       └── custom.css      # Global CSS overrides and brand colors
└── static/
    └── img/
        └── protoflow-logo.svg  # Site logo (navbar and favicon)
```

### Key configuration values

| Setting | Value | Where |
|---|---|---|
| Live site URL | `https://aerospace-systems-engineering.github.io/ProtoFlow/` | `docusaurus.config.js` → `url` + `baseUrl` |
| GitHub repo | `https://github.com/Aerospace-Systems-Engineering/ProtoFlow` | `docusaurus.config.js` → `projectName` |
| webpack version | `5.95.0` (pinned) | `package.json` → `overrides` |
| KaTeX CSS version | `0.16.8` | `docusaurus.config.js` → `stylesheets` |
| remark-math | `^6.0.0` | `package.json` → `dependencies` |
| rehype-katex | `^7.0.0` | `package.json` → `dependencies` |
| Docs root path | `/` (no `/docs` prefix) | `docusaurus.config.js` → `routeBasePath: '/'` |

### npm scripts

| Script | Command | What it does |
|---|---|---|
| `npm start` | `docusaurus start` | Start dev server at `http://localhost:3000/ProtoFlow/` |
| `npm run build` | `docusaurus build` | Build static site into `build/` |
| `npm run deploy` | `docusaurus deploy` | Build and push to `gh-pages` branch |
| `npm run clear` | `docusaurus clear` | Delete `.docusaurus/` and `build/` caches |

### Why webpack is pinned to 5.95.0

Docusaurus 3.7.0 declares `"webpack": "^5.95.0"` as its own dependency. Webpack 5.112+ introduced a schema change in `ProgressPlugin` that is incompatible with the version of `webpackbar` that Docusaurus bundles. The `overrides` field in `package.json` forces npm to use exactly 5.95.0 for all transitive packages, preventing npm from hoisting a newer incompatible version.

If you ever run `npm install` and the dev server stops working with a `ValidationError: name is not allowed`, the webpack pin has been overridden. Run `npm install` again after confirming `package.json` still has `"overrides": { "webpack": "5.95.0" }` and that there is no direct `webpack` entry under `devDependencies`.

# Dean Cruz - Software Engineer Portfolio

My personal site: [deancruz1.github.io](https://deancruz1.github.io/)

I'm a full-stack engineer, strongest on the frontend. The site shows my side projects (React, TypeScript, Next.js, Node.js) and a breakdown of how each one is built, alongside my work and study history.

## Pages

- **Work** (`/`): the hero, four featured projects as cards, and an archive of smaller projects.
- **Info** (`/info`): a short intro, an interactive story of how I got here, a work and study explorer, and the tools I use.
- **Project pages** (`/projects/:slug`): one per project, with three results under the links, a demo video, highlights, an overview, an annotated screenshot that explains the engineering behind the interface, the problems and how I fixed them, before and after comparisons, measured outcomes, takeaways and the screens. Smaller projects only have some of these sections.

## Features

- **Pre-rendered pages:** every page ships its full content in the HTML, so search engines and link previews see the real page before any JavaScript runs.
- **Per-page code:** each page's JavaScript is its own file, so visitors only download the page they open. A spinner or skeleton shows while a page loads.
- **Two themes:** Moss and Daylight, picked from the footer and remembered between visits.
- **Annotated screens:** hover or tap a note to highlight the part of the screenshot it explains.
- **Collapsed galleries:** a project with more than six screens shows the first four, with a button to open and close the rest.
- **Responsive:** laid out separately for phones, tablets and wide screens, scaling up to 2560px.
- **Accessible:** skip-to-content link, visible focus rings, keyboard support for every interactive part, text contrast that meets WCAG AA, and reduced-motion support.
- **Light on data:** project videos only download once they're on screen.

## Tech

- React 19, React Router 7, Vite 8
- Tailwind CSS 4, plus plain CSS per page
- vite-react-ssg and a custom render step for pre-rendering
- react-helmet-async for per-page titles and sharing tags
- GitHub Pages for hosting

## Project structure

```text
├── public/        # Resume, robots.txt, 404 redirect, link preview image, icons
├── scripts/       # Build step that renders every page and writes the sitemap
└── src/
    ├── assets/       # Project images, screenshots, videos and logos
    ├── components/   # Navbar, Footer, Background, page fallbacks, the annotated
    │                 # screen inspector and the Info page story scenes
    ├── context/      # Theme list and provider
    ├── data/         # Projects, work and study history, personal links
    ├── hooks/        # Hook for reading the current theme
    ├── pages/        # Home (Work), Info, ProjectDetail and NotFound
    ├── styles/       # Styles shared by the inspector and the Info story
    ├── App.jsx       # Routes, scroll handling and page fallbacks
    └── main.jsx
```

## Adding a project

Projects live in `src/data/project-info-home.jsx`. Each one has:

- `title`, `slug`, `description` (one line, also used as the page's search description), `tags` (the stack) and `image` (the card thumbnail)
- `overview`: two short paragraphs for the project page
- `features`: a list of feature names
- `liveDemo` and `github` links, both optional
- `results`: up to three figures shown under the links, each a `value` or a `from` and `to`, with a `label`
- `heroVideo`: the demo video at the top of the project page
- `highlights`: a one-line `summary` and short looping videos or images with captions
- `annotatedScreen`: the screenshot with notes, each pointing at one part of it
- `fixes`: the problems and fixes rows, each a `problem` and a `fix`, with an optional SVG `diagram` and its `diagramLabel` for screen readers
- `notes`: an optional `next`, what I'd do if I picked the project back up
- `beforeAfter`: pairs of old and new screenshots, for rebuilt projects
- `outcomes`: measured results, each with a `detail` and a `source`
- `takeaways`: one line each
- `gallery`: the screenshots, picked up from `src/assets/img/project-gallery/<folder>/`, with `galleryPortrait` for phone-shaped ones
- `stageMeta` for featured projects (card summary and the `glow-<name>` hover colour class in `src/pages/Home.css`), or `archiveMeta` for archive rows

Most sections are optional: the page leaves one out when its field is missing.

Add the slug to `FEATURED_SLUGS` or `ARCHIVE_SLUGS` at the bottom of the file to show it on the Work page. The build adds its page and sitemap entry automatically.

Two places on the Info page name projects by hand and need updating too: the builds deck in `src/components/StoryScenes.jsx` and the side-builds chapter in `src/pages/Info.jsx`. The resume in `public/` lists projects as well.

## Scripts

- `npm run dev`: local development
- `npm run build`: builds the site, then `scripts/prerender-meta.mjs` renders every page into its own `index.html` with the right title, description, preview image and canonical link, and writes `sitemap.xml`
- `npm run preview`: serves the built site
- `npm run lint`: ESLint
- `npm run deploy`: builds and publishes `dist` to GitHub Pages

GitHub Pages only serves real files, so unknown addresses fall through to `public/404.html`, which sends them back to the app to show the right page or a 404.

## Contact

- **Email:** [deancruzgg@gmail.com](mailto:deancruzgg@gmail.com)
- **GitHub:** [github.com/deancruz1](https://github.com/deancruz1)
- **LinkedIn:** [linkedin.com/in/dean-cruz](https://www.linkedin.com/in/dean-cruz/)

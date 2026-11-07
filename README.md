# Dean Cruz - Software Engineer Portfolio

This is my personal portfolio website showcasing my work as a frontend-focused software engineer. It includes sections like Hero, Short profile, Work experience, and Featured projects to give recruiters a comprehensive view of my skills and experience.

## Features
- **Responsive design**: Works on mobile, tablet, and desktop, with compact project cards and a drop-down menu on phones.
- **Living background**: Three coloured lights wander on their own and drift toward the cursor on desktop, with a subtle grid glow; on touch screens they sit still.
- **Theme toggle**: Light/dark mode switching with persistent user preference, revealed with a circular wipe.
- **Pre-rendered pages**: Every page ships its full content in the HTML, so shared links and search engines see the real page before any JavaScript runs.
- **Per-page code**: Each page's JavaScript is its own file, so visitors only download the page they open.
- **Accessible by default**: Skip-to-content link, visible focus rings, and reduced-motion support.
- **Case studies**: Project pages with the problem, the approach, technical decisions, challenges, and what I'd do differently.

## Technologies Used
- **React 19**: For building the frontend.
- **Vite 8**: For development and bundling.
- **React Router 7**: For navigation between pages.
- **Tailwind CSS 4**: For styling the website.
- **Framer Motion**: For page animations and transitions.
- **vite-react-ssg**: For pre-rendering the home page at build time.
- **react-helmet-async**: For per-page titles and sharing tags.
- **GitHub Pages**: For deploying the website.

## Project Structure

### `App.jsx`

```jsx
import { lazy, Suspense } from "react";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Each page's code is its own file, so a visitor only downloads the page
// they open. scripts/prerender-meta.mjs adds the matching preload to each page.
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Dynamically select the router based on the environment
const Router = typeof window !== "undefined" ? BrowserRouter : MemoryRouter;

const skipToContent = (e) => {
  e.preventDefault();
  document.getElementById("content").focus();
};

function App() {
  // At build time scripts/prerender-meta.mjs sets which page to render
  const routerProps =
    typeof window !== "undefined"
      ? {}
      : { initialEntries: [globalThis.__prerenderPath ?? "/"] };

  return (
    // Use the dynamic Router instead of hardcoding BrowserRouter
    <Router {...routerProps}>
      {/* Drops slide and scale animations for people who ask for less motion */}
      <MotionConfig reducedMotion="user">
        <div className="flex min-h-screen flex-col">
          {/* Off screen until a keyboard user tabs to it */}
          <a
            href="#content"
            onClick={skipToContent}
            className="fixed top-3 left-3 z-120 -translate-y-24 rounded-full bg-(--accent) px-4 py-2 font-bold text-(--button-primary) focus:translate-y-0"
          >
            Skip to content
          </a>
          <Background />
          <Navbar />

          <div className="grow outline-none" id="content" tabIndex={-1}>
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>

          <Footer />
        </div>
      </MotionConfig>
    </Router>
  );
}

export default App;
```
## Folder Structure

```text
├── public/                 # Resume, robots.txt, 404 redirect, link preview image, icons
├── scripts/                # Build step that renders every page and writes the sitemap
├── src/
│   ├── assets/             # Media assets (images, icons, videos, project gallery)
│   ├── components/         # Cards, Navbar, Background, section headers, etc.
│   ├── context/            # Light/dark mode theme management
│   ├── data/               # Experience, education, awards, projects, links
│   ├── hooks/              # Hook for reading the current theme
│   ├── pages/              # Main route components
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── package.json
└── vite.config.js
```

### Navigation Structure
The navbar includes links to:
- Home (with anchor links: `#hero`, `#about`, `#experience`, `#projects`, labelled Home, Short profile, Work experience, Featured projects)
- All projects (`/projects` route)
- Light/dark mode toggle and a Connect button

### Key Components
- **Background:** Three coloured lights that wander on their own loops and chase the cursor on pointer devices.
- **Grid:** Faint grid overlay used inside cards and the hero, with a glow that follows the cursor.
- **Navbar:** Fixed navigation with theme toggle, scroll progress bar, and mobile hamburger menu.
- **SectionHeader:** Numbered section heading used by the home page sections.
- **SkillCard:** Technology tile in the Short profile section.
- **WorkExperienceCard / HomeExperienceSection:** Role switcher with number tiles and animated detail text.
- **ProjectCardHome / HomeProjectsSection:** Featured project cards with live demo, code, and case study links.
- **ProjectCardGrid:** Project cards for the All projects page (grid on desktop, compact rows on phones).
- **EducationItem / AwardItem:** Rows in the Education and Awards cards.
- **ThemeToggle:** Sun/moon icon button that switches between light and dark mode.
- **HydrationGate:** Keeps the first render in step with the pre-rendered HTML.
- **Footer:** Contains name, email contact, and social links.

### Context & Hooks
- **ThemeContext / ThemeProvider:** Manages light/dark mode state.
- **useTheme:** Custom hook for accessing theme context.

### Data Files
- `awards.js` - Awards and honours data
- `education.js` - Education history
- `personal-links.js` - Email, GitHub, LinkedIn, and resume links
- `project-info-home.jsx` - All project data, including case studies, galleries, and card thumbnails
- `tech-icons.jsx` - Technology icons mapping
- `work-experience.js` - Work experience entries

### Routing
The website has the following routes:
- `/` - Homepage with Hero, Short profile, Work experience, and Featured projects sections
- `/projects` - All projects page, filterable by category
- `/projects/:slug` - Individual project detail page

## Build
`npm run build` runs in two steps:
1. `vite-react-ssg build` bundles the app and pre-renders the home page.
2. `scripts/prerender-meta.mjs` renders every page (home, All projects, and each project) into its own `index.html` with the right title, description, link preview image, canonical link, and script preloads, then writes `sitemap.xml` from the same list of pages.

GitHub Pages only serves real files, so unknown addresses fall through to `public/404.html`, which redirects to the home page with the original path; the app then shows the right page or a 404.

Other scripts: `npm run dev` for local development, `npm run preview` to serve the built site, and `npm run lint`.

## Deployment
This website is hosted on GitHub Pages. You can view the live version at:
[https://deancruz1.github.io/](https://deancruz1.github.io/)

## Usage
This portfolio website has the following main sections:
- **Home (Hero):** The landing page that introduces me as a Software Engineer, with my stack, key stats, and call-to-action buttons for projects, Resume, GitHub, and LinkedIn.
- **Short profile:** Work and side project tiles, a technologies grid, hobbies, education, and awards.
- **Work experience:** My professional journey showing roles at NCS and OCBC Bank.
- **Featured projects:** My three best apps with live demo, code, and case study links.
- **All projects page:** A complete view of every project, filterable by Full-stack, Frontend, and Design, accessible via the "All projects" link in the navigation bar.
- **Project detail pages:** Individual pages for each project with case study information on certain projects.
- **Footer:** Contains my name, email contact, and social links (GitHub, LinkedIn, Resume).

To navigate the website, simply click on the links in the navigation bar. The homepage uses anchor links (`/#about`, `/#experience`, `/#projects`) to scroll smoothly to sections. The "All projects" link navigates to a separate page with the complete project collection.

## Contact Information
If you'd like to get in touch with me, here are the best ways to reach me:
- **Email:** [deancruzgg@gmail.com](mailto:deancruzgg@gmail.com)
- **GitHub:** [https://github.com/deancruz1](https://github.com/deancruz1)
- **LinkedIn:** [https://www.linkedin.com/in/dean-cruz/](https://www.linkedin.com/in/dean-cruz/)
- **Location:** Singapore, SG

Feel free to send me a message for collaborations, opportunities, or general questions about my work. I'm always open to new opportunities and feedback!

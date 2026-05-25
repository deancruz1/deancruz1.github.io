# Dean Cruz - Software Engineer Portfolio

This is my personal portfolio website showcasing my work as a frontend-focused software engineer. It includes sections like Hero, About, Experience, and Featured Projects to give recruiters a comprehensive view of my skills and experience.

## Features
- **Responsive design**: Works on mobile, tablet, and desktop.
- **Smooth animations**: Custom blob animations and 3D hover effects on project cards.
- **Theme toggle**: Light/dark mode switching with persistent user preference.
- **Carousel Style All Projects Page**: Projects in "All Projects" page scrolls endlessly with optional user input to direct the carousel. Includes parallax animation in the project cards.

## Technologies Used
- **React**: For building the frontend.
- **React Router**: For navigation between pages.
- **Tailwind CSS**: For styling the website.
- **Framer Motion**: For page animations and transitions.
- **GitHub Pages**: For deploying the website.

## Project Structure

### `App.jsx`

```jsx
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Router = typeof window !== "undefined" ? BrowserRouter : MemoryRouter;

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Background />
        <Navbar />
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
```

### Navigation Structure
The navbar includes links to:
- Home (with anchor links: `#hero`, `#about`, `#experience`, `#projects`)
- All Projects (`/projects` route)
- Light/dark mode toggle

### Key Components
- **Background:** Animated blob elements that move dynamically in the background.
- **Navbar:** Fixed navigation with theme toggle and mobile hamburger menu.
- **ProjectCard:** 3D tilt-enabled card with image, description, tech tags, and action buttons.
- **ProjectCardHome:** Featured project card on the homepage.
- **DesktopCarousel:** Carousel component for project galleries.
- **ThemeToggle:** Sun/moon icon button that switches between light and dark mode.
- **Footer:** Contains name, email contact, and social links.

### Context & Hooks
- **ThemeContext / ThemeProvider:** Manages light/dark mode state.
- **useTheme:** Custom hook for accessing theme context.
- **useIsMobile:** Custom hook for responsive breakpoint detection.

### Data Files
- `awards.js` - Awards and honors data
- `education.js` - Education history
- `project-info-home.jsx` - Featured projects data
- `tech-icons.jsx` - Technology icons mapping
- `work-experience.js` - Work experience entries

### Routing
The website has the following routes:
- `/` - Homepage with Hero, About, Experience, and Featured Projects sections
- `/projects` - All Projects page
- `/projects/:slug` - Individual project detail page

## Deployment
This website is hosted on GitHub Pages. You can view the live version at:
[https://deancruz1.github.io/](https://deancruz1.github.io/)

## Usage
This portfolio website has the following main sections:
- **Home (Hero):** The landing page that introduces me as a Software Engineer with my key selling points and call-to-action buttons for GitHub, LinkedIn, and Resume.
- **About:** A detailed profile section with background, technologies grid (React, Next.js, TypeScript, Tailwind, Node.js, Python, Java, PHP), education, and awards.
- **Experience:** My professional journey showing roles at NCS and OCBC Bank.
- **Featured Projects:** A filterable grid of my best work with live demo and GitHub links.
- **All Projects Page:** A complete view of every project, accessible via the "All Projects" link in the navigation bar.
- **Project Detail Pages:** Individual pages for each project with case study information on certain projects.
- **Footer:** Contains my name, email contact, and social links (GitHub, LinkedIn, Resume).

To navigate the website, simply click on the links in the navigation bar. The homepage uses anchor links (`/#about`, `/#experience`, `/#projects`) to scroll smoothly to sections. The "All Projects" link navigates to a separate page with the complete project collection.

## Contact Information
If you'd like to get in touch with me, here are the best ways to reach me:
- **Email:** [deancruzgg@gmail.com](mailto:deancruzgg@gmail.com)
- **GitHub:** [https://github.com/deancruz1](https://github.com/deancruz1)
- **LinkedIn:** [https://www.linkedin.com/in/dean-cruz/](https://www.linkedin.com/in/dean-cruz/)
- **Location:** Singapore, SG

Feel free to send me a message for collaborations, opportunities, or general questions about my work. I'm always open to new opportunities and feedback!

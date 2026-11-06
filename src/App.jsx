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

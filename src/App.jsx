import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  MemoryRouter,
  Navigate,
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Each page's code is its own file, so a visitor only downloads the page
// they open. scripts/prerender-meta.mjs adds the matching preload to each page.
const Home = lazy(() => import("./pages/Home"));
const Info = lazy(() => import("./pages/Info"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Dynamically select the router based on the environment
const Router = typeof window !== "undefined" ? BrowserRouter : MemoryRouter;

// Start each new page at the top. Back/forward keeps the browser's own
// scroll position, and hash links scroll to their target instead.
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "POP" || hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, navigationType]);

  return null;
}

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
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        {/* Off screen until a keyboard user tabs to it */}
        <a
          href="#content"
          onClick={skipToContent}
          className="fixed top-3 left-3 z-120 -translate-y-24 rounded-full bg-(--accent) px-4 py-2 font-bold text-white focus:translate-y-0"
        >
          Skip to content
        </a>
        <Background />
        <Navbar />

        <div className="grow outline-none" id="content" tabIndex={-1}>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/info" element={<Info />} />
              <Route path="/projects" element={<Navigate to="/" replace />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

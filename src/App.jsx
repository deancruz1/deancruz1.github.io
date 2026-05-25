import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Dynamically select the router based on the environment
const Router = typeof window !== "undefined" ? BrowserRouter : MemoryRouter;

function App() {
  return (
    // Use the dynamic Router instead of hardcoding BrowserRouter
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
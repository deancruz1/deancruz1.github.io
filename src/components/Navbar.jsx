import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", to: "/#hero" },
  { label: "About", to: "/#about" },
  { label: "Experience", to: "/#experience" },
  { label: "Featured Projects", to: "/#projects" },
  { label: "All Projects", to: "/projects" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isProjectDetail = /^\/projects\/.+/.test(location.pathname);

  const introButton =
    "bg-transparent hover:bg-[var(--accent)] text-[var(--text-primary)] font-bold py-2 px-4 border border-[var(--text-primary)] hover:border-[var(--accent)] rounded transition-colors duration-300 ease-in-out text-center cursor-pointer rounded-full";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setMenuOpen(false), 0);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 z-110 h-0.5 w-full bg-transparent">
        <div
          className="standard-progress-bar h-full origin-left bg-(--accent)"
          style={{
            animationTimeline: "scroll()",
            animationName: "grow-progress",
            animationTimingFunction: "linear",
            animationFillMode: "both",
          }}
        />
        <style>{`
          @keyframes grow-progress {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
        `}</style>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`fixed top-0 right-0 left-0 z-100 flex items-center border-b-[1.5px] px-8 py-6 transition-all duration-300 lg:px-32 lg:py-8 ${
          scrolled || menuOpen
            ? "border-(--accent) bg-(--bg-primary)/40 backdrop-blur-md"
            : isProjectDetail
              ? "border-transparent bg-transparent lg:border-(--accent) lg:bg-(--bg-primary)/40 lg:backdrop-blur-md"
              : "border-transparent bg-transparent"
        }`}
      >
        {/* Left - Name */}
        <div className="flex-1">
          <Link
            to="/"
            className="text-2xl font-bold text-(--text-primary) lg:text-4xl"
          >
            Dean<span className="text-(--accent)">.</span>
          </Link>
        </div>

        {/* Center - Nav Links (Desktop only) */}
        <div
          className={`hidden items-center gap-8 rounded-full border-2 px-8 py-3 font-bold transition-all duration-300 lg:flex ${
            isProjectDetail || scrolled
              ? "border-transparent"
              : "border-(--accent)"
          }`}
        >
          {navLinks.map((link, i) => (
            <HashLink
              key={link.label}
              smooth
              to={link.to}
              className="flex items-center gap-1 text-sm text-(--text-primary) transition-colors duration-300 hover:text-(--accent)"
            >
              {link.label}
              <sup className="text-[10px] text-(--accent)">
                {String(i + 1).padStart(2, "0")}
              </sup>
            </HashLink>
          ))}
        </div>

        {/* Right */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <ThemeToggle />

          {/* Connect Button - Desktop only */}
          <a
            href="https://www.linkedin.com/in/dean-cruz/"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden lg:inline-flex ${introButton}`}
          >
            Connect
          </a>

          {/* Hamburger - Mobile/Tablet only */}
          <button
            className="flex flex-col gap-1.5 p-2 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-(--text-primary) transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-(--text-primary) transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-(--text-primary) transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-18 right-0 left-0 z-99 flex flex-col gap-6 border-b border-(--accent) bg-(--bg-primary)/40 px-8 py-6 backdrop-blur-md lg:hidden"
          >
            {navLinks.map((link, i) => (
              <HashLink
                key={link.label}
                smooth
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-lg font-bold text-(--text-primary) transition-colors duration-300 hover:text-(--accent)"
              >
                <sup className="text-[10px] text-(--accent)">
                  {String(i + 1).padStart(2, "0")}
                </sup>
                {link.label}
              </HashLink>
            ))}
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
            <a
              href="https://www.linkedin.com/in/dean-cruz/"
              target="_blank"
              rel="noopener noreferrer"
              className={introButton}
            >
              Connect →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

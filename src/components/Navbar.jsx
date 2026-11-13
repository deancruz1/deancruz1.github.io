import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { socialButtons } from "../data/personal-links";
import "./Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();
  const isInfo = pathname === "/info" || pathname === "/info/";
  const isWork = !isInfo;

  // Remembers which page the links menu was opened on, so changing page closes it
  const [menuPath, setMenuPath] = useState(null);
  const menuOpen = menuPath === pathname;
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onPointerDown = (e) => {
      if (!menuRef.current?.contains(e.target)) setMenuPath(null);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuPath(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    let rafId = null;

    const updateProgress = () => {
      rafId = null;
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - doc.clientHeight;
      const pct = maxScroll > 0 ? Math.min(100, Math.max(0, (doc.scrollTop / maxScroll) * 100)) : 0;
      doc.style.setProperty("--scroll-pct", `${pct.toFixed(2)}%`);
    };

    const scheduleUpdate = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [pathname]);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <header className="topbar-wrap">
        <div className="site-container">
          <div className="topbar">
            <Link to="/" className="brand-lockup">
              <span className="brand-wordmark">
                Dean Cruz<span className="brand-dot">.</span>
              </span>
              <span className="brand-role">Software Engineer</span>
            </Link>

            <nav className="nav-pill" aria-label="Primary">
              <Link
                to="/"
                className={`nav-pill-link${isWork ? " active" : ""}`}
                aria-current={isWork ? "page" : undefined}
              >
                Work
              </Link>
              <Link
                to="/info"
                className={`nav-pill-link${isInfo ? " active" : ""}`}
                aria-current={isInfo ? "page" : undefined}
              >
                Info
              </Link>
            </nav>

            <div className="nav-right">
              <div className="nav-action-links">
                {socialButtons.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label} ↗
                  </a>
                ))}
              </div>

              {/* Smaller screens hide the links above and use this menu instead */}
              <div className="nav-menu" ref={menuRef}>
                <button
                  type="button"
                  className="nav-menu-btn"
                  aria-expanded={menuOpen}
                  aria-controls="nav-menu-popup"
                  aria-label={menuOpen ? "Close links menu" : "Open links menu"}
                  onClick={() => setMenuPath(menuOpen ? null : pathname)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {menuOpen ? (
                      <path d="M18 6 6 18M6 6l12 12" />
                    ) : (
                      <>
                        <circle cx="12" cy="12" r="4" />
                        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                      </>
                    )}
                  </svg>
                </button>

                {menuOpen && (
                  <div className="nav-menu-popup" id="nav-menu-popup">
                    {socialButtons.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setMenuPath(null)}
                      >
                        {item.label}
                        <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

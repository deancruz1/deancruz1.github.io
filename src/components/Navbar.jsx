import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { socialButtons } from "../data/personal-links";
import "./Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();
  const isInfo = pathname === "/info" || pathname === "/info/";
  const isWork = !isInfo;

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
          </div>
        </div>
      </header>
    </>
  );
}

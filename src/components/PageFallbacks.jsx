import WindowBar from "./WindowBar";
import "./PageFallbacks.css";

// Shown while a page's code is still downloading. Both fade in after a short
// delay, so a page that loads quickly never flashes them.

export function PageSpinner() {
  return (
    <div className="page-spinner" role="status">
      <span className="page-spinner-ring" aria-hidden="true" />
      <span className="sr-only">Loading page</span>
    </div>
  );
}

// Mirrors the top of the project page: back pill, centred title block with
// its links and three results, then the demo video in its window frame
export function ProjectSkeleton() {
  return (
    <main className="site-container sk-page" aria-busy="true">
      <span className="sr-only" role="status">
        Loading project
      </span>

      <div className="sk sk-back" />

      <div className="sk-header">
        <div className="sk sk-title" />
        <div className="sk-desc">
          <div className="sk sk-line" />
          <div className="sk sk-line short" />
          <div className="sk sk-line phone" />
        </div>
        <div className="sk-links">
          <div className="sk sk-link" />
          <div className="sk sk-link" />
        </div>
        <div className="sk-results">
          {[0, 1, 2].map((i) => (
            <div key={i}>
              <div className="sk sk-result-value" />
              <div className="sk sk-result-label" />
              <div className="sk sk-result-label short" />
            </div>
          ))}
        </div>
      </div>

      <div className="bezel-outer">
        <div className="bezel-inner">
          <WindowBar />
          <div className="sk sk-media" />
        </div>
      </div>
    </main>
  );
}

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

// Mirrors the project page layout: header, then the annotated screen and its notes
export function ProjectSkeleton() {
  return (
    <main className="site-container sk-page" aria-busy="true">
      <span className="sr-only" role="status">
        Loading project
      </span>

      <div className="sk sk-back" />
      <div className="sk sk-meta" />
      <div className="sk sk-title" />
      <div className="sk sk-line" />
      <div className="sk sk-line short" />

      <div className="sk-tags">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="sk sk-tag" />
        ))}
      </div>

      <div className="sk sk-heading" />
      <div className="sk-inspector">
        <div className="sk sk-frame" />
        <div className="sk-notes">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="sk-note">
              <div className="sk sk-note-title" />
              <div className="sk sk-note-line" />
              <div className="sk sk-note-line short" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

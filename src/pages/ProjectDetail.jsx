import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import AnnotatedScreenInspector from "../components/AnnotatedScreenInspector";
import WindowBar from "../components/WindowBar";
import {
  ARCHIVE_SLUGS,
  FEATURED_SLUGS,
  projects,
} from "../data/project-info-home.jsx";
import "./ProjectDetail.css";

function ProjectDetailBody({ project }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const gallery = project.gallery || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.slug]);

  useEffect(() => {
    if (lightboxIndex === null || gallery.length === 0) return undefined;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % gallery.length);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, gallery.length]);

  const orderedSlugs = [...FEATURED_SLUGS, ...ARCHIVE_SLUGS];
  const cycleList = orderedSlugs.includes(project.slug)
    ? orderedSlugs.map((s) => projects.find((p) => p.slug === s)).filter(Boolean)
    : projects;
  const currentCycleIndex = cycleList.findIndex((p) => p.slug === project.slug);
  const nextProject = cycleList[(currentCycleIndex + 1) % cycleList.length];

  return (
    <>
      <Helmet>
        <title>{`Dean Cruz - ${project.title}`}</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <main className="site-container view-fade">
        <div className="pd-back-wrap">
          <Link to="/" className="pd-back">
            ← Back
          </Link>
        </div>

        <header className="pd-header">
          <div className="pd-meta">
            {project.stageMeta?.stack || `${project.category} · ${project.tags.slice(0, 3).join(" · ")}`}
          </div>
          <h1 className="pd-title">{project.title}</h1>
          <p className="pd-desc">{project.description}</p>

          <div className="pd-head-bar">
            <div className="pd-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="pd-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="pd-links">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="pd-link-primary"
                >
                  Live site ↗
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="pd-link-muted"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </header>

        {project.annotatedScreen ? (
          <AnnotatedScreenInspector key={project.slug} project={project} />
        ) : (
          <section className="pd-hero-media" aria-label={`${project.title} preview`}>
            <div className="pd-browser-frame">
              <WindowBar />
              {project.heroVideo ? (
                <video
                  className="pd-media-el"
                  src={project.heroVideo}
                  poster={project.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  className="pd-media-el"
                  src={project.image}
                  alt={project.title}
                />
              )}
            </div>
          </section>
        )}

        <div className="pd-sections">
          {project.caseStudy ? (
            <>
              <section className="pd-section">
                <h2 className="pd-section-title">Why I built it</h2>
                <div className="pd-prose">
                  {project.card?.why && <p className="pd-lead">{project.card.why}</p>}
                  <p>{project.caseStudy.problem}</p>
                </div>
              </section>

              <section className="pd-section">
                <h2 className="pd-section-title">How it works</h2>
                <div className="pd-prose">
                  {project.card?.how && <p className="pd-lead">{project.card.how}</p>}
                  <p>{project.caseStudy.solution}</p>
                </div>
              </section>

              {project.caseStudy.technicalDecisions?.length > 0 && (
                <section className="pd-section">
                  <h2 className="pd-section-title">Technical decisions</h2>
                  <div className="pd-decisions">
                    {project.caseStudy.technicalDecisions.map((item) => (
                      <div key={item.decision} className="pd-decision-item">
                        <h3>{item.decision}</h3>
                        <p>{item.reason}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {(project.caseStudy.challenges?.length > 0 ||
                project.caseStudy.improvements?.length > 0) && (
                <section className="pd-section">
                  <h2 className="pd-section-title">Challenges &amp; reflections</h2>
                  <ul className="pd-list">
                    {project.caseStudy.challenges?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                    {project.caseStudy.improvements?.map((item) => (
                      <li key={item}>Next: {item}</li>
                    ))}
                  </ul>
                </section>
              )}
            </>
          ) : (
            <>
              {project.about && (
                <section className="pd-section">
                  <h2 className="pd-section-title">Overview</h2>
                  <div className="pd-prose">
                    <p>{project.about}</p>
                  </div>
                </section>
              )}

              {project.features?.length > 0 && (
                <section className="pd-section">
                  <h2 className="pd-section-title">Key features</h2>
                  <div className="pd-decisions">
                    {project.features.map((feat) => (
                      <div key={feat.title} className="pd-decision-item">
                        <h3>{feat.title}</h3>
                        <p>{feat.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </>
          )}
        </div>

        {gallery.length > 0 && (
          <section className="pd-gallery-section" aria-label="Screenshots">
            <h2 className="pd-gallery-heading">Screens</h2>
            <div className={`pd-gallery${project.galleryPortrait ? " portrait" : ""}`}>
              {gallery.map((shot, idx) => (
                <button
                  key={shot.caption || idx}
                  type="button"
                  className="pd-shot-btn"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <div className="pd-shot-frame">
                    <img
                      src={shot.image}
                      alt={shot.caption || `${project.title} screen ${idx + 1}`}
                      loading="lazy"
                    />
                  </div>
                  {shot.caption && <span className="pd-shot-cap">{shot.caption}</span>}
                </button>
              ))}
            </div>
          </section>
        )}

        <nav className="pd-bottom-nav" aria-label="Project navigation">
          <Link to="/">← All work</Link>
          {nextProject && nextProject.slug !== project.slug && (
            <Link to={`/projects/${nextProject.slug}`}>
              Next: {nextProject.title} →
            </Link>
          )}
        </nav>
      </main>

      {lightboxIndex !== null && gallery[lightboxIndex] && (
        <div
          className="pd-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={gallery[lightboxIndex].caption || `${project.title} screenshot`}
          onClick={() => setLightboxIndex(null)}
        >
          <div className="pd-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[lightboxIndex].image}
              alt={gallery[lightboxIndex].caption || `${project.title} screenshot`}
            />
            <div className="pd-lightbox-bar">
              <span>
                {gallery[lightboxIndex].caption || `Screen ${lightboxIndex + 1}`} (
                {lightboxIndex + 1} / {gallery.length})
              </span>
              <div className="pd-lightbox-controls">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
                  }
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxIndex((prev) => (prev + 1) % gallery.length)}
                >
                  Next
                </button>
                <button type="button" onClick={() => setLightboxIndex(null)}>
                  Close ×
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <>
        <Helmet>
          <title>Project Not Found — Dean Cruz</title>
        </Helmet>
        <main className="site-container view-fade">
          <div className="pd-back-wrap">
            <Link to="/" className="pd-back">
              ← Back to work
            </Link>
          </div>
          <div className="pd-header">
            <h1 className="pd-title">Project not found</h1>
            <p className="pd-desc">
              No project exists at this route. Head back to Work to browse selected builds.
            </p>
          </div>
        </main>
      </>
    );
  }

  return <ProjectDetailBody key={project.slug} project={project} />;
}

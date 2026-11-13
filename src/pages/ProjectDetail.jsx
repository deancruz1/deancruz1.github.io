import { useEffect, useRef, useState } from "react";
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

function HeroVideo({ src, poster, label }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || typeof IntersectionObserver === "undefined") return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="pd-media-el"
      src={src}
      poster={poster}
      aria-label={label}
      preload="none"
      loop
      muted
      playsInline
    />
  );
}

// "On this page" list for wide screens; highlights the section in view
function ContentsNav({ sections }) {
  const [current, setCurrent] = useState(sections[0]?.id);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setCurrent(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="pd-toc" aria-label="On this page">
      <p>Contents</p>
      <ul>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <button
              type="button"
              className={current === id ? "active" : undefined}
              aria-current={current === id ? "true" : undefined}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ProjectDetailBody({ project }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const gallery = project.gallery || [];
  const [sections] = useState(() =>
    [
      { id: "overview", label: "Overview" },
      project.annotatedScreen && { id: "under-the-interface", label: "Under the interface" },
      project.notes && { id: "decisions", label: "Decisions" },
      project.notes && { id: "what-was-hard", label: "What was hard" },
      gallery.length > 0 && { id: "screens", label: "Screens" },
      { id: "next-project", label: "Next project" },
    ].filter(Boolean),
  );

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
        <Link to="/" className="pd-back">
          ← Back
        </Link>

        <ContentsNav sections={sections} />

        <header className="pd-header">
          <h1 className="pd-title">{project.title}</h1>
          <p className="pd-desc">{project.description}</p>

          <div className="pd-links">
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noreferrer" className="pd-link-primary">
                Live site ↗
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="pd-link-muted">
                GitHub ↗
              </a>
            )}
          </div>
        </header>

        <section className="pd-hero-media" aria-label={`${project.title} preview`}>
          <div className="bezel-outer">
            <div className="bezel-inner">
              <WindowBar />
              {project.heroVideo ? (
                <HeroVideo src={project.heroVideo} poster={project.image} label={`${project.title} demo`} />
              ) : (
                <img className="pd-media-el" src={project.image} alt={project.title} />
              )}
            </div>
          </div>
        </section>

        <section className="pd-overview" id="overview">
          <dl className="pd-facts">
            <div>
              <dt>Built with</dt>
              <dd>{project.tags.join(", ")}</dd>
            </div>
            {project.features?.length > 0 && (
              <div>
                <dt>Features</dt>
                <dd>{project.features.join(", ")}</dd>
              </div>
            )}
            {project.github && (
              <div>
                <dt>Source</dt>
                <dd>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    {project.github.replace("https://", "")} ↗
                  </a>
                </dd>
              </div>
            )}
          </dl>

          <div className="pd-overview-text">
            <h2>Overview</h2>
            {(project.overview || [project.description]).map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </section>

        {project.annotatedScreen && (
          <section className="pd-panel" id="under-the-interface">
            <AnnotatedScreenInspector key={project.slug} project={project} />
          </section>
        )}

        {project.notes && (
          <>
            <section className="pd-chapter" id="decisions" aria-labelledby="pd-decisions-heading">
              <div className="pd-chapter-head">
                <p className="pd-overline">Decisions</p>
                <h2 id="pd-decisions-heading">Why it&apos;s built this way.</h2>
              </div>
              <ul className="pd-rows">
                {project.notes.decisions.map(([choice, why]) => (
                  <li key={choice}>
                    <b>{choice}.</b> {why}
                  </li>
                ))}
              </ul>
            </section>

            <section className="pd-chapter" id="what-was-hard" aria-labelledby="pd-hard-heading">
              <div className="pd-chapter-head">
                <p className="pd-overline">What was hard</p>
                <h2 id="pd-hard-heading">The parts that fought back.</h2>
              </div>
              <ol className="pd-rows numbered">
                {project.notes.hard.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>

            {project.notes.next && (
              <section className="pd-callout">
                <p className="pd-overline">If I picked it back up</p>
                <p className="pd-callout-text">{project.notes.next}</p>
              </section>
            )}
          </>
        )}

        {gallery.length > 0 && (
          <section className="pd-panel pd-screens" id="screens" aria-label="Screenshots">
            <p className="pd-overline">Screens</p>
            <div className={`pd-figures${project.galleryPortrait ? " portrait" : ""}`}>
              {gallery.map((shot, idx) => (
                <figure key={shot.caption || idx} className="pd-figure">
                  <button
                    type="button"
                    className="pd-shot-btn"
                    aria-label={`Open screenshot ${idx + 1}`}
                    onClick={() => setLightboxIndex(idx)}
                  >
                    <img
                      src={shot.image}
                      alt={shot.caption || `${project.title} screen ${idx + 1}`}
                      loading="lazy"
                    />
                  </button>
                  <figcaption>0.{idx + 1}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {nextProject && nextProject.slug !== project.slug && (
          <section className="pd-next" id="next-project" aria-labelledby="pd-next-heading">
            <h2 id="pd-next-heading">Next project:</h2>
            <Link to={`/projects/${nextProject.slug}`} className="bezel-outer pd-next-card">
              <div className="bezel-inner">
                <div className="pd-next-head">
                  <div>
                    <h3>{nextProject.title}</h3>
                    <p>
                      <b>{nextProject.stageMeta?.stack || nextProject.archiveMeta?.stack}</b> —{" "}
                      {nextProject.stageMeta?.summary || nextProject.description}
                    </p>
                  </div>
                  <span aria-hidden="true">→</span>
                </div>
                <div className="pd-next-shot">
                  <div className="pd-next-browser">
                    <WindowBar />
                    <img src={nextProject.image} alt="" loading="lazy" />
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}
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
                {lightboxIndex + 1} / {gallery.length}
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
          <title>Dean Cruz - Project not found</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <main className="site-container view-fade">
          <Link to="/" className="pd-back">
            ← Back to work
          </Link>
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

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

function HeroVideo({ src, poster, label, className = "pd-media-el", preload = "none" }) {
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
      className={className}
      src={src}
      poster={poster}
      aria-label={label}
      preload={preload}
      loop
      muted
      playsInline
    />
  );
}

function FigureCaption({ text }) {
  return <figcaption className="pd-cap">{text}</figcaption>;
}

function Callout({ lead, text }) {
  return (
    <section className="pd-callout">
      <p className="pd-callout-text">
        {lead && <span className="pd-callout-lead">{lead} </span>}
        {text}
      </p>
    </section>
  );
}

function DiagramFigure({ svg, caption }) {
  return (
    <figure className="pd-figure pd-diagram-figure">
      {/* Inlined so the drawing picks up the theme's text colour */}
      <div className="pd-diagram" dangerouslySetInnerHTML={{ __html: svg }} />
      <FigureCaption text={caption} />
    </figure>
  );
}

function Highlights({ highlights }) {
  const stripRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [atEnd, setAtEnd] = useState(false);
  const total = highlights.items.length;

  const stepWidth = () => {
    const strip = stripRef.current;
    const first = strip.firstElementChild;
    return first.getBoundingClientRect().width + parseFloat(getComputedStyle(strip).columnGap || 0);
  };

  const onScroll = () => {
    const strip = stripRef.current;
    const end = strip.scrollLeft >= strip.scrollWidth - strip.clientWidth - 2;
    setAtEnd(end);
    setIndex(end ? total - 1 : Math.round(strip.scrollLeft / stepWidth()));
  };

  const move = (dir) => stripRef.current.scrollBy({ left: dir * stepWidth(), behavior: "smooth" });

  return (
    <section className="pd-highlights" id="highlights" aria-label="Highlights">
      <div className="pd-hl-head">
        <p className="pd-hl-lead">{highlights.summary}</p>
      </div>

      <div className="pd-hl-controls">
        <span>
          {index + 1} / {total}
        </span>
        <button type="button" aria-label="Previous highlight" disabled={index === 0} onClick={() => move(-1)}>
          ‹
        </button>
        <button type="button" aria-label="Next highlight" disabled={atEnd} onClick={() => move(1)}>
          ›
        </button>
      </div>

      <div className="pd-hl-strip" ref={stripRef} onScroll={onScroll}>
        {highlights.items.map((item) => (
          <figure key={item.caption} className="pd-hl-item">
            <div className="pd-frame">
              {item.video ? (
                <HeroVideo className="" src={item.video} label={item.caption} preload="metadata" />
              ) : (
                <img
                  className={item.portrait ? "portrait" : undefined}
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                />
              )}
            </div>
            <FigureCaption text={item.caption} />
          </figure>
        ))}
      </div>
    </section>
  );
}

function BeforeAfter({ pairs }) {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);
  const pair = pairs[active];

  const media = (src, label) =>
    pair.video ? (
      <HeroVideo className="" src={src} label={label} preload="metadata" />
    ) : (
      <img src={src} alt={label} loading="lazy" draggable="false" />
    );

  return (
    <section className="pd-panel pd-ba" id="before-and-after" aria-label="Before and after">
      <div className="pd-ba-tabs">
        {pairs.map((p, idx) => (
          <button
            key={p.label}
            type="button"
            className={idx === active ? "active" : undefined}
            aria-pressed={idx === active}
            onClick={() => {
              setActive(idx);
              setPos(50);
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      <figure className="pd-figure">
        <div
          key={active}
          className="pd-ba-compare"
          style={{ aspectRatio: pair.ratio, "--pos": `${pos}%` }}
        >
          <div className="pd-ba-layer">{media(pair.after, `After: ${pair.caption}`)}</div>
          <div className="pd-ba-layer pd-ba-before">{media(pair.before, `Before: ${pair.caption}`)}</div>
          <input
            className="pd-ba-range"
            type="range"
            min="0"
            max="100"
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            aria-label={`Compare before and after: ${pair.caption}`}
          />
          <div className="pd-ba-handle" aria-hidden="true" />
          <span className="pd-ba-tag start" aria-hidden="true">
            Before
          </span>
          <span className="pd-ba-tag end" aria-hidden="true">
            After
          </span>
        </div>
      </figure>
    </section>
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

const SCREENS_SHOWN_FIRST = 4;
const SCREENS_COLLAPSE_OVER = 6;
// Matches the .pd-screens-rest transition in ProjectDetail.css
const SCREENS_ANIMATION_MS = 600;

function ProjectDetailBody({ project }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [showAllScreens, setShowAllScreens] = useState(false);
  // The hidden screens stay out of the page until first opened, so they don't download early
  const [restScreensMounted, setRestScreensMounted] = useState(false);
  const moreScreensRef = useRef(null);
  const gallery = project.gallery || [];
  // Long galleries start with a few screens so the next project isn't buried
  const firstScreens =
    gallery.length > SCREENS_COLLAPSE_OVER ? gallery.slice(0, SCREENS_SHOWN_FIRST) : gallery;
  const restScreens = gallery.slice(firstScreens.length);
  const hasTakeaways = project.takeaways?.length > 0;
  const [sections] = useState(() =>
    [
      project.highlights && { id: "highlights", label: "Highlights" },
      { id: "overview", label: "Overview" },
      project.constraints?.length > 0 && { id: "constraints", label: "Constraints" },
      project.annotatedScreen && { id: "under-the-interface", label: "Under the interface" },
      project.notes && { id: "decisions", label: "Decisions" },
      project.notes && { id: "what-was-hard", label: "Challenges" },
      project.beforeAfter?.length > 0 && { id: "before-and-after", label: "Before and after" },
      project.outcomes?.length > 0 && { id: "outcomes", label: "Outcomes" },
      hasTakeaways && { id: "takeaways", label: "Takeaways" },
      gallery.length > 0 && { id: "screens", label: "Screens" },
      { id: "next-project", label: "Next project" },
    ].filter(Boolean),
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.slug]);

  // The hidden screens haven't loaded yet, so they borrow the first one's
  // shape to open at the right height
  const shareShotRatio = (img) => {
    if (!img?.naturalWidth) return;
    img
      .closest(".pd-screens")
      ?.style.setProperty("--shot-ratio", `${img.naturalWidth} / ${img.naturalHeight}`);
  };

  const toggleScreens = () => {
    const button = moreScreensRef.current;
    if (showAllScreens && button) {
      // Closing removes a lot of page above the button, so hold it where it is on screen
      const top = button.getBoundingClientRect().top;
      const until = performance.now() + SCREENS_ANIMATION_MS + 100;
      const hold = () => {
        window.scrollBy({ top: button.getBoundingClientRect().top - top, behavior: "instant" });
        if (performance.now() < until) window.requestAnimationFrame(hold);
      };
      window.requestAnimationFrame(hold);
    }
    setRestScreensMounted(true);
    setShowAllScreens((open) => !open);
  };

  const renderShot = (shot, idx) => (
    <figure key={shot.caption || idx} className="pd-figure">
      <button
        type="button"
        className="pd-shot-btn"
        aria-label={`Open screenshot ${idx + 1}`}
        onClick={() => setLightboxIndex(idx)}
      >
        <img
          ref={idx === 0 ? shareShotRatio : undefined}
          onLoad={idx === 0 ? (e) => shareShotRatio(e.currentTarget) : undefined}
          src={shot.image}
          alt={shot.caption || `${project.title} screen ${idx + 1}`}
          loading="lazy"
        />
      </button>
    </figure>
  );

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

          {project.results?.length > 0 && (
            <dl className="pd-meta">
              {project.results.map((r) => (
                <div key={r.label}>
                  <dt>
                    {r.value ?? (
                      <>
                        {r.from} <span>to</span> {r.to}
                      </>
                    )}
                  </dt>
                  <dd>{r.label}</dd>
                </div>
              ))}
            </dl>
          )}
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

        {project.highlights && <Highlights highlights={project.highlights} />}

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

        {project.constraints?.length > 0 && (
          <section className="pd-chapter" id="constraints" aria-labelledby="pd-constraints-heading">
            <div className="pd-chapter-head">
              <h2 id="pd-constraints-heading">Constraints</h2>
            </div>
            <ul className="pd-rows">
              {project.constraints.map(([limit, detail]) => (
                <li key={limit}>
                  <b>{limit}.</b> {detail}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.annotatedScreen && (
          <section className="pd-panel" id="under-the-interface">
            <AnnotatedScreenInspector key={project.slug} project={project} />
          </section>
        )}

        {project.notes && (
          <>
            <section className="pd-chapter" id="decisions" aria-labelledby="pd-decisions-heading">
              <div className="pd-chapter-head">
                <h2 id="pd-decisions-heading">Decisions</h2>
              </div>
              <ul className="pd-rows">
                {project.notes.decisions.map(([choice, why]) => (
                  <li key={choice}>
                    <b>{choice}.</b> {why}
                  </li>
                ))}
              </ul>
            </section>

            {project.diagrams?.decisions?.map((d) => (
              <DiagramFigure
                key={d.caption}
                svg={d.svg}
                caption={d.caption}
              />
            ))}
            {project.callouts?.decisions && <Callout text={project.callouts.decisions} />}

            <section className="pd-chapter" id="what-was-hard" aria-labelledby="pd-hard-heading">
              <div className="pd-chapter-head">
                <h2 id="pd-hard-heading">Challenges</h2>
              </div>
              <ul className="pd-rows">
                {project.notes.hard.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            {project.diagrams?.hard?.map((d) => (
              <DiagramFigure
                key={d.caption}
                svg={d.svg}
                caption={d.caption}
              />
            ))}
            {project.callouts?.hard && <Callout text={project.callouts.hard} />}

            {/* With takeaways, this line closes that section instead */}
            {project.notes.next && !hasTakeaways && (
              <Callout lead="If I picked it back up." text={project.notes.next} />
            )}
          </>
        )}

        {project.beforeAfter?.length > 0 && (
          <BeforeAfter pairs={project.beforeAfter} />
        )}

        {project.outcomes?.length > 0 && (
          <section className="pd-chapter" id="outcomes" aria-labelledby="pd-outcomes-heading">
            <div className="pd-chapter-head">
              <h2 id="pd-outcomes-heading">Outcomes</h2>
            </div>
            <ul className="pd-outcomes">
              {project.outcomes.map((o) => (
                <li key={o.detail}>
                  <p className="v">
                    {o.value ?? (
                      <>
                        {o.from} <span>to</span> {o.to}
                      </>
                    )}
                  </p>
                  <p className="d">{o.detail}</p>
                  <p className="s">{o.source}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {hasTakeaways && (
          <section className="pd-chapter" id="takeaways" aria-labelledby="pd-takeaways-heading">
            <div className="pd-chapter-head">
              <h2 id="pd-takeaways-heading">Takeaways</h2>
            </div>
            <div>
              <ul className="pd-rows">
                {project.takeaways.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {project.notes?.next && (
                <p className="pd-next-line">
                  <b>If I picked it back up.</b> {project.notes.next}
                </p>
              )}
            </div>
          </section>
        )}

        {gallery.length > 0 && (
          <section className="pd-panel pd-screens" id="screens" aria-label="Screenshots">
            <div className={`pd-figures${project.galleryPortrait ? " portrait" : ""}`}>
              {firstScreens.map(renderShot)}
            </div>
            {restScreens.length > 0 && (
              <>
                <div className={`pd-screens-rest${showAllScreens ? " open" : ""}`} id="pd-screens-rest">
                  <div>
                    <div className={`pd-figures${project.galleryPortrait ? " portrait" : ""}`}>
                      {restScreensMounted &&
                        restScreens.map((shot, i) => renderShot(shot, firstScreens.length + i))}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="pd-screens-more"
                  ref={moreScreensRef}
                  aria-expanded={showAllScreens}
                  aria-controls="pd-screens-rest"
                  onClick={toggleScreens}
                >
                  {showAllScreens ? "Show fewer screens" : `Show all ${gallery.length} screens`}
                </button>
              </>
            )}
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
                      {nextProject.archiveMeta?.stack && (
                        <>
                          <b>{nextProject.archiveMeta.stack}</b> —{" "}
                        </>
                      )}
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

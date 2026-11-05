import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { projects } from "../data/project-info-home.jsx";
import Grid from "../components/Grid";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Same order as the All Projects page, so "Next" follows the grid
const orderedProjects = [...projects].sort(
  (a, b) => Number(b.featured) - Number(a.featured),
);

const Panel = ({ title, className = "", children }) => (
  <div
    className={`relative overflow-hidden rounded-2xl bg-(--bg-secondary) p-6 ${className}`}
  >
    <Grid />
    <h2 className="relative z-10 pb-4 text-2xl font-bold text-(--text-primary)">
      {title}
    </h2>
    <div className="relative z-10">{children}</div>
  </div>
);

const VISIBLE_CHALLENGES = 2;

const ChallengeList = ({ items }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, VISIBLE_CHALLENGES);

  return (
    <>
      <ul className="flex list-disc flex-col gap-2 pl-5 text-(--text-secondary) marker:text-(--accent)">
        {visibleItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {items.length > VISIBLE_CHALLENGES && (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            aria-expanded={showAll}
            onClick={() => setShowAll(!showAll)}
            className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) ${
              showAll
                ? "border-(--accent) bg-(--accent) text-(--button-primary)"
                : "border-(--border) bg-(--bg-tertiary) text-(--text-secondary) hover:border-(--accent)"
            }`}
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [slug]);

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main id="main-content">
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-2xl text-(--text-primary)">Project not found.</p>
        </div>
      </main>
    );
  }

  const liveLabel = project.category === "Design" ? "Live demo" : "Live site";
  const focusRing =
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)";
  const primaryButton = `rounded-full bg-(--text-primary) px-4 py-2 text-center text-sm font-semibold text-(--bg-primary) transition-colors duration-300 hover:bg-(--accent) hover:text-(--button-primary) ${focusRing}`;
  const secondaryButton = `rounded-full border border-(--border) bg-(--bg-tertiary) px-4 py-2 text-center text-sm font-semibold text-(--text-primary) transition-colors duration-300 hover:border-(--accent) ${focusRing}`;

  const { caseStudy, about, features = [], gallery = [] } = project;
  const nextProject =
    orderedProjects[
      (orderedProjects.indexOf(project) + 1) % orderedProjects.length
    ];

  return (
    <>
      <Helmet>
        <title>{`Dean Cruz - ${project.title}`}</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`Dean Cruz - ${project.title}`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />
        <meta name="twitter:title" content={`Dean Cruz - ${project.title}`} />
        <meta name="twitter:description" content={project.description} />
        <meta name="twitter:image" content={project.image} />
      </Helmet>

      <main id="main-content">
        <section className="relative flex min-h-screen flex-col gap-6 px-5 pt-24 pb-12 lg:pt-32 lg:pb-16">
          {/* Hero */}
          <div>
            <div className="relative h-[45vh] min-h-80 overflow-hidden rounded-2xl border-b-5 border-(--accent) shadow-[0_4px_40px_var(--shadow-accent)]">
              <video
                src={project.heroVideo}
                poster={project.image}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/10" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 md:flex-row md:items-end md:justify-between md:p-10">
                <div className="flex flex-col gap-3">
                  <span className="w-fit rounded-full border border-(--accent) bg-(--accent)/20 px-3 py-1 text-xs text-(--text-overlay)">
                    {project.category}
                  </span>
                  <h1 className="text-4xl font-bold text-(--text-overlay) md:text-7xl">
                    {project.title}
                  </h1>
                  <p className="max-w-xl text-(--text-overlay)/80">
                    {project.description}
                  </p>
                </div>
                {(project.liveDemo || project.github) && (
                  <div className="flex shrink-0 flex-wrap gap-2">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`rounded-full bg-(--text-overlay) px-4 py-2 text-center text-sm font-semibold text-black transition-colors duration-300 hover:bg-(--accent) hover:text-(--button-primary) ${focusRing}`}
                      >
                        {liveLabel}
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`rounded-full border border-white/30 bg-black/40 px-4 py-2 text-center text-sm font-semibold text-(--text-overlay) backdrop-blur-sm transition-colors duration-300 hover:border-(--accent) ${focusRing}`}
                      >
                        Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-(--border) bg-(--bg-secondary) px-3 py-1 text-xs whitespace-nowrap text-(--text-secondary)"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Why and how */}
          {caseStudy ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Panel title="Why I built it">
                <p className="text-(--text-secondary)">{caseStudy.problem}</p>
              </Panel>
              <Panel title="How it works">
                <p className="text-(--text-secondary)">{caseStudy.solution}</p>
              </Panel>
            </div>
          ) : (
            about && (
              <Panel title="About">
                <p className="text-(--text-secondary)">{about}</p>
              </Panel>
            )
          )}

          {/* Decisions */}
          {caseStudy?.technicalDecisions?.length > 0 && (
            <Panel title="Decisions">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {caseStudy.technicalDecisions.map((item) => (
                  <div
                    key={item.decision}
                    className="rounded-xl bg-(--bg-tertiary) p-4"
                  >
                    <h3 className="font-semibold text-(--text-primary)">
                      {item.decision}
                    </h3>
                    <p className="text-sm text-(--text-secondary)">
                      {item.reason}
                    </p>
                  </div>
                ))}
              </div>
            </Panel>
          )}

          {/* Features */}
          {features.length > 0 && (
            <Panel title="What it does">
              <div
                className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${
                  features.length % 3 === 0 ? "lg:grid-cols-3" : ""
                }`}
              >
                {features.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl bg-(--bg-tertiary) p-4"
                  >
                    <h3 className="font-semibold text-(--text-primary)">
                      {item.title}
                    </h3>
                    <p className="text-sm text-(--text-secondary)">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </Panel>
          )}

          {/* Screens */}
          {gallery.length > 0 && (
            <div
              className={`grid gap-6 ${
                project.galleryPortrait
                  ? "grid-cols-2 md:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-2"
              }`}
            >
              {gallery.map((item) => (
                <figure key={item.caption}>
                  <button
                    type="button"
                    onClick={() => setSelectedImage(item)}
                    aria-label={`Enlarge screenshot: ${item.caption}`}
                    className={`group block w-full cursor-pointer overflow-hidden rounded-2xl border border-(--border) ${focusRing}`}
                  >
                    <img
                      src={item.thumb ?? item.image}
                      alt={item.caption}
                      loading="lazy"
                      decoding="async"
                      className={`w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 ${
                        project.galleryPortrait ? "aspect-1/2" : "aspect-video"
                      }`}
                    />
                  </button>
                  <figcaption className="pt-2 text-sm text-(--text-secondary)">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          {/* Challenges and improvements */}
          {caseStudy && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
              {caseStudy.challenges?.length > 0 && (
                <Panel title="Challenges" className="md:col-span-3">
                  <ChallengeList key={slug} items={caseStudy.challenges} />
                </Panel>
              )}
              {caseStudy.improvements?.length > 0 && (
                <Panel title="What I'd do differently" className="md:col-span-2">
                  <ul className="flex list-disc flex-col gap-2 pl-5 text-(--text-secondary) marker:text-(--accent)">
                    {caseStudy.improvements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Panel>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
            <Link to="/projects" className={secondaryButton}>
              All projects
            </Link>
            <Link
              to={`/projects/${nextProject.slug}`}
              className={primaryButton}
            >
              Next: {nextProject.title}
            </Link>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-200 flex items-center justify-center bg-black/90 p-8"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.caption}
                className="max-h-[80vh] w-full rounded-2xl object-contain"
              />
              <div className="mt-4 flex justify-center">
                <p className="inline-block rounded-2xl bg-black/60 px-4 py-2 font-semibold text-white">
                  {selectedImage.caption}
                </p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close lightbox"
                className="absolute -top-4 -right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-(--accent) text-(--text-primary) transition-colors duration-300 hover:bg-(--text-primary) hover:text-(--bg-primary)"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDetail;

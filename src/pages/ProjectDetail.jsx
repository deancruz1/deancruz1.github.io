import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { projects } from "../data/project-info-home.jsx";
import Grid from "../components/Grid";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCaseStudy from "../components/ProjectCaseStudy";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState("features");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [slug]);

  const project = projects.find((p) => p.slug === slug);
  const introButton =
    "bg-transparent hover:bg-[var(--accent)] text-[var(--text-primary)] font-bold py-2 px-4 border border-[var(--text-primary)] hover:border-[var(--accent)] rounded transition-colors duration-300 ease-in-out text-center cursor-pointer rounded-full";

  if (!project) {
    return (
      <main id="main-content">
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-2xl text-(--text-primary)">Project not found.</p>
        </div>
      </main>
    );
  }

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
        {/* Hero */}
        <div className="mt-28 px-4 md:mx-2 md:px-8 lg:mx-4 lg:px-0">
          <div className="relative h-[45vh] w-full overflow-hidden rounded-2xl border-b-5 border-(--accent) shadow-[0_4px_40px_var(--shadow-accent)] lg:rounded-t-none lg:rounded-b-4xl">
            <video
              src={project.heroVideo}
              autoPlay
              muted
              loop
              preload="none"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10">
              <span className="mb-4 inline-block shrink-0 rounded-full border border-(--accent) bg-(--accent)/20 px-3 py-1 text-xs text-(--text-overlay) lg:text-sm">
                {project.category}
              </span>
              <h1 className="text-4xl font-bold text-(--text-overlay) md:text-7xl">
                {project.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="px-4 py-16 md:mx-2 md:px-8 lg:mx-0 lg:px-0">
          <motion.div
            layout
            transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
            className="grid grid-cols-1 gap-12 md:grid-cols-3"
          >
            {/* Left - Meta */}
            <div className="relative order-2 h-fit overflow-hidden rounded-2xl bg-(--bg-secondary) p-8 md:order-1 md:col-span-1">
              <Grid />
              <div className="relative z-10 flex flex-col gap-6">
                {/* Tags */}
                <div>
                  <p className="pb-2 text-sm font-bold tracking-widest text-(--accent) uppercase">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-(--border) bg-(--bg-tertiary) px-3 py-1 text-sm text-(--text-secondary)"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(project.liveDemo || project.github) && (
                  <div>
                    <p className="pb-2 text-sm font-bold tracking-widest text-(--accent) uppercase">
                      Links
                    </p>
                    <div className="flex flex-col gap-3">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-(--text-primary) px-4 py-2 text-center text-sm font-semibold text-(--bg-primary) transition-colors duration-300 hover:bg-(--accent) hover:text-(--text-primary)"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-(--border) bg-(--bg-tertiary) px-4 py-2 text-center text-sm font-semibold text-(--text-primary) transition-colors duration-300 hover:border-(--accent)"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right - Description */}
            <motion.div
              layout
              transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
              className="relative order-1 rounded-2xl bg-(--bg-secondary) p-8 md:order-2 md:col-span-2"
            >
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <Grid />
              </div>
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-(--accent)">
                    {activeTab === "features" ? "Features" : "Case Study"}
                  </h1>
                  {project.caseStudy && (
                    <button
                      onClick={() =>
                        setActiveTab(
                          activeTab === "features" ? "casestudy" : "features",
                        )
                      }
                      className="shrink-0 cursor-pointer rounded-full border border-(--border) bg-(--bg-tertiary) px-4 py-2 text-sm font-semibold text-(--text-primary) transition-colors duration-300 hover:border-(--accent)"
                    >
                      {activeTab === "features" ? "Case Study" : "Features"}
                    </button>
                  )}
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="text-lg leading-relaxed whitespace-pre-line text-(--text-secondary)"
                  >
                    {activeTab === "features" ? (
                      <p className="text-lg leading-relaxed whitespace-pre-line text-(--text-secondary)">
                        {project.longDescription || project.description}
                      </p>
                    ) : (
                      <ProjectCaseStudy caseStudy={project.caseStudy} />
                    )}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-8 text-center text-3xl font-bold text-(--text-primary) md:text-left">
                Gallery
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {project.gallery.map((item, i) => (
                  <div
                    key={i}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl"
                    onClick={() => setSelectedImage(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedImage(item);
                      }
                    }}
                    aria-label={`View gallery image: ${item.caption}`}
                  >
                    <img
                      src={item.image}
                      alt={item.caption}
                      loading="lazy"
                      decoding="async"
                      className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:aspect-auto lg:h-48"
                    />
                    <div className="absolute inset-0 flex items-end bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="font-semibold text-white">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="mt-16 text-center">
            <Link to="/projects" className={introButton}>
              Back to Projects
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

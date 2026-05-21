import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { projects } from "../data/project-info-home.jsx";
import Grid from "../components/Grid";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectDetail = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [slug]);

  const project = projects.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(null);
  const introButton =
    "bg-transparent hover:bg-[#6864e7] text-white font-bold py-2 px-4 border border-white hover:border-[#6864e7] rounded transition-colors duration-300 ease-in-out text-center cursor-pointer rounded-full";

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-2xl text-white">Project not found.</p>
      </div>
    );
  }
  console.log("project:", project);
  console.log("slug:", slug);

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

      {/* Hero */}
      <div className="mt-28 px-4 md:mx-2 md:px-8 lg:mx-4 lg:px-0">
        <div className="relative h-[45vh] w-full overflow-hidden rounded-2xl border-b-5 border-[#6864e7] shadow-[0_4px_40px_rgba(104,100,231,0.4)] lg:rounded-t-none lg:rounded-b-4xl">
          <video
            src={project.heroVideo}
            autoPlay
            muted
            loop
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-10">
            <span className="mb-4 inline-block shrink-0 rounded-full border border-[#6864e7] bg-[#6864e7]/20 px-3 py-1 text-xs text-white lg:text-sm">
              {project.category}
            </span>
            <h1 className="text-4xl font-bold text-white md:text-7xl">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="px-4 py-16 md:mx-2 md:px-8 lg:mx-0 lg:px-0">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left - Meta */}
          <div className="relative order-2 overflow-hidden rounded-2xl bg-[#171717] p-8 md:order-1 md:col-span-1">
            <Grid />
            <div className="relative z-10 flex flex-col gap-6">
              {/* Tags */}
              <div>
                <p className="pb-2 text-sm font-bold tracking-widest text-[#6864e7] uppercase">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-[#2e2e2e] bg-[#1e1e1e] px-3 py-1 text-sm text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(project.liveDemo || project.github) && (
                <div>
                  <p className="pb-2 text-sm font-bold tracking-widest text-[#6864e7] uppercase">
                    Links
                  </p>
                  <div className="flex flex-col gap-3">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-4 py-2 text-center text-sm font-semibold text-black transition-colors duration-300 hover:bg-[#6864e7] hover:text-white"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-[#2e2e2e] bg-[#1e1e1e] px-4 py-2 text-center text-sm font-semibold text-white transition-colors duration-300 hover:border-[#6864e7]"
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
          <div className="order-1 flex flex-col gap-4 md:order-2 md:col-span-2">
            <p className="text-justify text-lg leading-relaxed whitespace-pre-line text-gray-400">
              {project.longDescription || project.description}
            </p>
          </div>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-left">
              Gallery
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {" "}
              {project.gallery.map((item, i) => (
                <div
                  key={i}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl"
                  onClick={() => setSelectedImage(item)}
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:aspect-auto lg:h-48"
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

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-8"
            onClick={() => setSelectedImage(null)}
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
              <p className="mt-4 rounded-lg bg-black/60 px-4 py-2 text-center font-semibold text-white">
                {selectedImage.caption}
              </p>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#6864e7] text-white transition-colors duration-300 hover:bg-white hover:text-black"
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

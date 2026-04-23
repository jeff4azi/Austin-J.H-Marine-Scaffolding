import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useProjects } from "../context/ProjectContext";
import Nav from "../components/Nav";
import GetQuoteButton from "../components/GetQuoteButton";
import { useOverlay } from "../context/OverlayContext";
import ContactOverlay from "../components/ContactOverlay";

const ProjectDetails = () => {
  const { id } = useParams();
  const { projects, loading } = useProjects();
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = useOverlay();
  const [project, setProject] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!loading) {
      const found = projects.find((p) => String(p.id) === String(id));
      setProject(found || null);
    }
  }, [id, projects, loading]);

  // lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="size-12 border-2 border-accent border-t-transparent animate-spin rounded-full" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-dark text-light flex flex-col items-center justify-center gap-4">
        <p className="text-fluid-h3">Project not found.</p>
        <button
          onClick={() => navigate("/#projects")}
          className="text-accent underline text-fluid-p"
        >
          Back to projects
        </button>
      </div>
    );
  }

  return (
    <>
      <Nav />
      <ContactOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-accent duration-200"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-8"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            >
              {project.mediaType === "video" ? (
                <video
                  src={project.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full max-h-[85vh] rounded-xl object-contain"
                />
              ) : (
                <img
                  src={project.url}
                  alt={project.name}
                  className="w-full max-h-[85vh] rounded-xl object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen bg-dark text-light pt-24 pb-16">
        <div className="container mx-auto px-6 md:px-16">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-accent hover:opacity-70 duration-200 mb-8 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 group-hover:-translate-x-1 duration-200"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
            </svg>
            <span className="text-fluid-small uppercase tracking-widest">
              Back
            </span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">
            {/* Media */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onClick={() => setLightboxOpen(true)}
              className="w-full rounded-xl overflow-hidden shadow-2xl cursor-zoom-in relative group"
            >
              {project.mediaType === "video" ? (
                <video
                  src={project.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-64 md:h-80 lg:h-[480px] object-cover"
                />
              ) : (
                <img
                  src={project.url}
                  alt={project.name}
                  className="w-full h-64 md:h-80 lg:h-[480px] object-cover"
                />
              )}
              {/* expand hint */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 duration-300 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 text-white opacity-0 group-hover:opacity-100 duration-300 drop-shadow-lg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,48H160a8,8,0,0,0,0,16h37.37L134.06,127.31a8,8,0,1,0,11.32,11.32L208,75.31V112a8,8,0,0,0,16,0V56A8,8,0,0,0,216,48ZM121.94,128.69A8,8,0,0,0,110.62,140L48,202.63V168a8,8,0,0,0-16,0v56a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16H58.63l62.69-62.69A8,8,0,0,0,121.94,128.69Z" />
                </svg>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              {/* Label */}
              <div className="flex items-center gap-2">
                <span className="w-8 border-t border-accent" />
                <span className="text-accent uppercase text-fluid-small tracking-widest">
                  Project
                </span>
              </div>

              {/* Title */}
              <h1 className="text-fluid-h1 font-bold leading-tight !text-light">
                {project.name}
              </h1>

              {/* Date */}
              {project.time && (
                <p className="text-gray-400 text-fluid-small flex items-center gap-2 -mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-accent shrink-0"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88a8,8,0,1,1-8-8A8,8,0,0,1,112,120Zm48,0a8,8,0,1,1-8-8A8,8,0,0,1,160,120Zm-96,40a8,8,0,1,1-8-8A8,8,0,0,1,64,160Zm48,0a8,8,0,1,1-8-8A8,8,0,0,1,112,160Zm48,0a8,8,0,1,1-8-8A8,8,0,0,1,160,160Z" />
                  </svg>
                  {new Date(project.time).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              )}

              {/* Divider */}
              <hr className="border-gray-500/30" />

              {/* Description */}
              <p className="text-gray-300 text-fluid-p leading-relaxed">
                {project.description}
              </p>

              {/* CTA */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setIsOpen(true)}
                  className="px-5 py-2 rounded-full bg-accent text-dark font-semibold hover:bg-accent/70 hover:scale-105 active:scale-95 duration-300 shadow-md text-fluid-p"
                >
                  Contact Us
                </button>
                <GetQuoteButton size={4} border={true} />
              </div>
            </motion.div>
          </div>

          {/* Related projects */}
          <RelatedProjects
            current={project}
            projects={projects}
            navigate={navigate}
          />
        </div>
      </main>
    </>
  );
};

const RelatedProjects = ({ current, projects, navigate }) => {
  const related = projects.filter((p) => p.id !== current.id).slice(0, 3);
  if (!related.length) return null;

  return (
    <section className="mt-20">
      <div className="flex items-center gap-2 mb-6">
        <span className="w-8 border-t border-accent" />
        <span className="text-accent uppercase text-fluid-small tracking-widest">
          More Projects
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onClick={() => navigate(`/projects/${p.id}`)}
            className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:scale-105 duration-300 bg-dark/50 border border-gray-500/20"
          >
            {p.mediaType === "video" ? (
              <video
                src={p.url}
                muted
                playsInline
                className="w-full h-44 object-cover"
              />
            ) : (
              <img
                src={p.url}
                alt={p.name}
                className="w-full h-44 object-cover"
              />
            )}
            <div className="p-4">
              <p className="font-semibold text-fluid-p text-light">{p.name}</p>
              <p className="text-gray-400 text-fluid-small line-clamp-2 mt-1">
                {p.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectDetails;

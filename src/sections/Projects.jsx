import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { project_text, parentVariant, childVariant } from "../data";
import { useProjects } from "../context/ProjectContext";

const Projects = ({ limit = null }) => {
  const { projects, isLoading } = useProjects();
  const navigate = useNavigate();

  const displayed = limit ? projects.slice(0, limit) : projects;

  return (
    <>
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex items-center gap-1">
          <span className="w-[20px] lg:w-[50px]">
            <hr className="border-accent lg:border" />
          </span>
          <span className="text-accent uppercase text-fluid-small">
            recent work
          </span>
        </div>
        <motion.div
          variants={parentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-fluid-h1 mb-5 lg:mb-10 w-[95%] lg:w-[75%] text-light"
        >
          {project_text.split(" ").map((word, i) => (
            <motion.span key={i} variants={childVariant}>
              {word + " "}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <div className="container mx-auto px-6 md:px-16 ">
        <div className="border-t-2 border-gray-500/30 py-8 lg:py-13 w-full">
          {isLoading ? (
            <div className="w-full flex justify-center items-center">
              <div className="size-15 border-2 border-accent border-t-transparent animate-spin"></div>
            </div>
          ) : (
            <>
              <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {displayed.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </section>

              {limit && projects.length > limit && (
                <div className="flex justify-center mt-10">
                  <button
                    onClick={() => navigate("/projects")}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-accent text-accent hover:bg-accent hover:text-dark font-semibold duration-300 hover:scale-105 active:scale-95 text-fluid-p"
                  >
                    View All Projects
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;

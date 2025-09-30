import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { project_text, parentVariant, childVariant } from "../data";
import { useProjects } from "../context/ProjectContext";

const Projects = () => {
  const { projects, isLoading } = useProjects();

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
            <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;

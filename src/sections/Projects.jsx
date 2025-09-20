import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const Projects = () => {
  const projectCardEl = projects.map((project) => {
    <ProjectCard key={project.id} {...project} />
  })

  return (
      <>
        <div className="container mx-auto px-6 md:px-16">
          <div className="flex items-center gap-1">
            <span className="w-[20px] lg:w-[50px]">
              <hr className="border-accent lg:border"/>
            </span>
            <span className="text-accent uppercase text-fluid-small">recent work</span>
          </div>
          <div className="text-fluid-h1 mb-5 lg:mb-10 w-[95%] lg:w-[75%] text-light">
            Take A Look At Our Latest Projects
          </div>
        </div>
        <div className="container mx-auto px-6 md:px-16 ">
          <div className="border-y-2 border-gray-500/30 py-8 lg:py-13 w-full">
            <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {projectCardEl}
            </section>
          </div>
        </div>
      </>
    );
}

export default Projects
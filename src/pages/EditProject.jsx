import { useProjects } from "../context/ProjectContext";
import ProjectCard from "../components/ProjectCard";
import { supabase } from "../supabaseClient";

const EditProject = () => {
  const { projects, isLoading, setProjects } = useProjects();

  const handleDelete = async (id, bucketName, filePath) => {
      const { error } = await supabase.from("projects").delete().eq("id", id);
      deleteFile(bucketName, filePath)
  
      if (!error) {
        setProjects((prev) => prev.filter((project) => project.id !== id));
      } else {
        console.error("Delete failed:", error.message);
      }
    };

  const deleteFile = (bucketName, filePath) => {
    try {
      const {data, error} = await supabase.storage
        .from(bucketName)
        .remove([filePath]);
      
      if (error) {
        console.error('Error deleting file : ', error)
      }
      if (data) {
        console.error('File deleted successfully : ', data)
      }
    } catch (err) {
      console.log('Unexpected error', err);
    }
  }

  return (
    <>
      <h2 className="text-fluid-h2 container mx-5 md:mx-10">Edit Project</h2>
      <div className="mx-auto w-full space-y-3 lg:space-y-5 pb-10">
        {isLoading ? (
          <div className="w-full flex justify-center items-center">
            <div className="size-15 border-2 border-accent border-t-transparent animate-spin"></div>
          </div>
        ) : (
          <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} admin={true} onDelete={() => handleDelete(project.id, "project_files", project.file_path)} /> // create a row named file_path that stores the bucket path for the file
            ))}
          </section>
        )}
      </div>
    </>
  );
};

export default EditProject;

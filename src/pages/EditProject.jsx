import { useProjects } from "../context/ProjectContext";
import ProjectCard from "../components/ProjectCard";
import { supabase } from "../supabaseClient";

const EditProject = () => {
  const { projects, isLoading, setProjects } = useProjects();

  const handleDelete = async (id, bucketName, filePath) => {
    // delete from DB first
    const { error: dbError } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    if (dbError) {
      console.error("Delete failed:", dbError.message);
      return;
    }

    // delete from bucket (await so it actually runs)
    const { error: storageError } = await deleteFile(bucketName, filePath);

    if (storageError) {
      console.error("File delete failed:", storageError.message);
    } else {
      console.log("File deleted successfully");
    }

    // update local state
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  const deleteFile = async (bucketName, filePath) => {
    const { data, error } = await supabase.storage
      .from(bucketName)
      .remove([filePath]);

    if (error) {
      return { error };
    }

    return { data };
  };

  return (
    <>
      <h2 className="text-fluid-h2 container mx-5 md:mx-10">Edit Project</h2>
      <div className="mx-auto w-full space-y-3 lg:space-y-5 pb-10">
        {isLoading ? (
          <div className="w-full flex justify-center items-center">
            <div className="size-15 border-2 border-accent border-t-transparent animate-spin"></div>
          </div>
        ) : (
          <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                admin={true}
                onDelete={() =>
                  handleDelete(project.id, "project_files", project.file_path) // make sure you have `file_path` column in DB storing the bucket path
                }
              />
            ))}
          </section>
        )}
      </div>
    </>
  );
};

export default EditProject;

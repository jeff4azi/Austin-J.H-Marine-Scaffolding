import { useProjects } from "../context/ProjectContext";
import ProjectCard from "../components/ProjectCard";
import { supabase } from "../supabaseClient";
import { useAuth } from "../context/AuthContext";

const EditProject = () => {
  const { projects, isLoading, setProjects } = useProjects();
  const { session, loading: authLoading } = useAuth(); // ⬅️ get loading too

  let admin = false;
  if (session) {
    admin = true;
  }

  const handleDelete = async (id, bucketName, filePath) => {
    const { error: dbError } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    if (dbError) {
      console.error("Delete failed:", dbError.message);
      return;
    }

    const { error: storageError } = await deleteFile(bucketName, filePath);
    if (storageError) {
      console.error("File delete failed:", storageError.message);
    } else {
      console.log("File deleted successfully");
    }

    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  const deleteFile = async (bucketName, filePath) => {
    const { data, error } = await supabase.storage
      .from(bucketName)
      .remove([filePath]);

    if (error) return { error };
    return { data };
  };

  // ⏳ if auth is still loading, don’t render yet
  if (authLoading) {
    return (
      <div className="w-full flex justify-center items-center py-10">
        <div className="size-15 border-2 border-accent border-t-transparent animate-spin"></div>
      </div>
    );
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
          <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 px-5">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                admin={admin}
                onDelete={() =>
                  handleDelete(project.id, "project_files", project.file_path)
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

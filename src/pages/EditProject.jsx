import { useProjects } from "../context/ProjectContext";
import { supabase } from "../supabaseClient";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EditProject = () => {
  const { projects, isLoading, setProjects } = useProjects();
  const { session, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const handleDelete = async (id, filePath) => {
    const { error: dbError } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);
    if (dbError) {
      console.error("Delete failed:", dbError.message);
      return;
    }

    const { error: storageError } = await supabase.storage
      .from("project_files")
      .remove([filePath]);
    if (storageError)
      console.error("File delete failed:", storageError.message);

    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  if (authLoading || isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="size-8 border-2 border-accent border-t-transparent animate-spin rounded-full" />
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-4xl">
      {/* Stats */}
      <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
        <span className="size-2 rounded-full bg-accent" />
        <span className="text-accent text-fluid-small font-medium">
          {projects.length} {projects.length === 1 ? "project" : "projects"}
        </span>
      </div>

      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 gap-3 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-12 text-gray-600"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Z" />
          </svg>
          <p className="text-gray-500 text-fluid-p">No projects yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-[#1a2420] border border-gray-700/40 rounded-xl overflow-hidden group"
            >
              {/* Thumbnail */}
              <div
                className="relative h-40 cursor-pointer"
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                {project.mediaType === "video" ? (
                  <video
                    src={project.url}
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={project.url}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 duration-200 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 text-white opacity-0 group-hover:opacity-100 duration-200"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76Z" />
                  </svg>
                </div>
              </div>

              {/* Info + actions */}
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-light font-semibold text-fluid-p line-clamp-1">
                    {project.name}
                  </p>
                  <p className="text-gray-400 text-fluid-small line-clamp-2 mt-0.5">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-gray-700/40">
                  <span className="text-gray-500 text-fluid-small capitalize">
                    {project.mediaType}
                  </span>
                  <button
                    onClick={() => handleDelete(project.id, project.file_path)}
                    className="flex items-center gap-1.5 text-red-400 hover:text-red-300 text-fluid-small border border-red-500/30 hover:border-red-400/50 px-3 py-1.5 rounded-lg duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-3.5"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" />
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EditProject;

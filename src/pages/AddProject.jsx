import { useState } from "react";
import { supabase } from "../supabaseClient";

const AddProject = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files[0];
    if (!dropped) return;
    setFile(dropped);
    setPreview(URL.createObjectURL(dropped));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!projectName || !description || !file) return;
    setLoading(true);
    setError("");

    if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
      setError("Only images and videos are allowed.");
      setLoading(false);
      return;
    }

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("project_files")
      .upload(file.name, file);

    if (uploadError) {
      setError(uploadError.message);
      setLoading(false);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from("project_files")
      .getPublicUrl(uploadData.path);

    const mediaType = file.type.split("/")[0];

    const { error: insertError } = await supabase.from("projects").insert([
      {
        name: projectName,
        description,
        url: publicUrlData.publicUrl,
        mediaType,
        file_path: file.name,
      },
    ]);

    if (insertError) {
      setError(insertError.message);
    } else {
      setSubmitted(true);
      setFile(null);
      setPreview(null);
      setProjectName("");
      setDescription("");
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-5">
        <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-8 text-accent"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-light font-semibold text-fluid-h3">
            Project uploaded!
          </p>
          <p className="text-gray-400 text-fluid-small mt-1">
            Your project is now live
          </p>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-2.5 bg-accent text-dark font-semibold rounded-lg hover:bg-accent/80 active:scale-95 duration-300 text-fluid-p"
        >
          Add Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
      {/* Drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="relative border-2 border-dashed border-gray-600 hover:border-accent rounded-xl overflow-hidden duration-200 cursor-pointer"
      >
        <label className="block cursor-pointer">
          <input
            type="file"
            accept="image/*,video/*"
            className="hidden"
            onChange={handleFileChange}
          />
          {preview ? (
            <div className="relative">
              {file?.type.startsWith("video/") ? (
                <video
                  src={preview}
                  className="w-full h-52 object-cover"
                  muted
                />
              ) : (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-52 object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 duration-200">
                <span className="text-white text-fluid-small font-medium">
                  Change file
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 py-12 px-6 text-center">
              <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z" />
                </svg>
              </div>
              <div>
                <p className="text-light text-fluid-p font-medium">
                  Drop your file here
                </p>
                <p className="text-gray-500 text-fluid-small mt-1">
                  or click to browse — images & videos
                </p>
              </div>
            </div>
          )}
        </label>
      </div>

      {/* Fields */}
      <div className="space-y-1">
        <label className="text-gray-400 text-fluid-small block">
          Project Name
        </label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="e.g. Offshore Platform Scaffold"
          required
          className="w-full bg-white/5 border border-gray-600 text-light placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent duration-200 text-fluid-p"
        />
      </div>

      <div className="space-y-1">
        <label className="text-gray-400 text-fluid-small block">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the project..."
          required
          rows={4}
          className="w-full bg-white/5 border border-gray-600 text-light placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent duration-200 text-fluid-p resize-none"
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4 text-red-400 shrink-0"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M236.8,188.09,149.35,36.22a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z" />
          </svg>
          <p className="text-red-400 text-fluid-small">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-accent text-dark font-semibold py-3 rounded-lg hover:bg-accent/80 active:scale-95 duration-300 flex items-center justify-center gap-2 text-fluid-p"
      >
        {loading ? (
          <div className="size-5 border-2 border-dark border-t-transparent animate-spin rounded-full" />
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM93.66,77.66,120,51.31V144a8,8,0,0,0,16,0V51.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,77.66Z" />
            </svg>
            Upload Project
          </>
        )}
      </button>
    </form>
  );
};

export default AddProject;

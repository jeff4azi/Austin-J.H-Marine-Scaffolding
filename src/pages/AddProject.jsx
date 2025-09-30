import { useState } from "react";
import { supabase } from "../supabaseClient";

const AddProject = () => {
  return (
    <>
      <h2 className="text-fluid-h2 container mx-5 md:mx-10 mb-7">AddProject</h2>
      <div className="mx-auto w-full space-y-3 lg:space-y-5 pb-10 px-5 lg:px-10">
        <div>
          <ProjectUploadForm />
        </div>
      </div>
    </>
  );
};

export default AddProject;

const ProjectUploadForm = () => {
  const [file, setFile] = useState(null);
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!projectName || !description || !file) return;

    setLoading(true);
    if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
      alert("Only images and videos are allowed.");
      setLoading(false);
      return;
    }

    // Upload file to Supabase storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("project_files")
      .upload(file.name, file);

    if (uploadError) {
      console.error("File upload error:", uploadError.message);
      setLoading(false);
      return;
    }

    // Get the public URL
    const { data: publicUrlData } = supabase.storage
      .from("project_files")
      .getPublicUrl(uploadData.path);

    // Figure out if it's image or video
    const mediaType = file.type.split("/")[0]; // "image" or "video"

    // Insert project into projects table
    const { error } = await supabase.from("projects").insert([
      {
        name: projectName,
        description,
        url: publicUrlData.publicUrl, // store full URL
        mediaType,
        file_path: file.name, // set this to be the bucket url of the bucket file
      },
    ]);

    if (error) {
      console.error("Insert error:", error.message);
    } else {
      setSubmitted(true); // show confirmation screen
      setFile(null);
      setProjectName("");
      setDescription("");
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-5">
        <h2 className="text-2xl font-bold">Project Uploaded!</h2>
        <button
          className="bg-accent text-white px-6 py-3 rounded hover:bg-accent/80 active:scale-95 transition duration-300"
          onClick={() => setSubmitted(false)}
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 space-y-6 bg-white rounded-lg shadow-lg"
    >
      {/* File Input */}
      <label className="block w-full p-8 border-2 border-dashed border-gray-400 rounded-lg text-center cursor-pointer hover:border-accent hover:bg-gray-50">
        <input
          type="file"
          accept="image/*,video/*"
          className="hidden"
          onChange={(e) => setFile(e.target.files[0])}
        />
        {file ? (
          <p className="text-fluid-sm text-wrap text-center">{file.name}</p>
        ) : (
          <div className="space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="mx-auto text-gray-400"
              viewBox="0 0 256 256"
            >
              <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>
            </svg>
            <p>Drag and drop an image or video</p>
            <p>or</p>
            <button className="rounded text-accent border border-accent py-1 px-3">
              Click to Upload
            </button>
          </div>
        )}
      </label>

      {/* Project Name */}
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Project Name</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Enter project name"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          required
        />
      </div>

      {/* Description */}
      <div className="flex flex-col">
        <label className="mb-2 font-semibold">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter project description"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          rows={4}
          required
        />
      </div>

      {/* Upload Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-accent text-white py-3 rounded-lg shadow-md hover:bg-accent/80 active:scale-95 transition duration-300"
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </form>
  );
};

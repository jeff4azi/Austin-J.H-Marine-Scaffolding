import GetQuoteButton from "./GetQuoteButton";

// ProjectCard.jsx
const ProjectCard = ({ title, description, mediaType, mediaSrc }) => {
  return (
    <div className="w-full max-w-md space-y-4 roundedshadow-lg overflow-hidden text-light">
      {/* Media Section */}
      <div className="w-full h-48 md:50 lg:h-64 xl:h-80">
        {mediaType === "video" ? (
          <video
            src={mediaSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        ) : (
          <img
            src={mediaSrc}
            alt={title || "Project media"}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content Section */}
      <div className="space-y-2 border-b-2 border-b-gray-500/50 flex flex-col justify-between">
        <div>
          <div className="text-lg font-semibold text-fluid-h3 text-light">
            {title}
          </div>
          <p className="text-fluid-small line-clamp-2">{description}</p>
        </div>
        <div className="mb-5 flex items-center gap-3">
          <span>Get a quote</span> <GetQuoteButton size={4} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import { motion } from "framer-motion";
import GetQuoteButton from "./GetQuoteButton";

// ProjectCard.jsx
const ProjectCard = ({
  id,
  name,
  description,
  mediaType,
  url,
  admin = false,
  onDelete,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      id={id}
      className="w-full max-w-md space-y-4 rounded shadow-lg overflow-hidden text-light hover:scale-105 duration-300 bg-dark"
    >
      {/* Media Section */}
      <div className="w-full h-48 md:h-56 lg:h-64 xl:h-80">
        {mediaType === "video" ? (
          <video
            src={url}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        ) : (
          <img
            src={url}
            alt={name || "Project media"}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content Section */}
      <div className={`space-y-2 border-b-2 border-b-gray-500/50 flex flex-col justify-between  ${admin && "px-3 lg:px-5 pb-5"}`}>
        <div>
          <div className="text-lg font-semibold text-fluid-h3 text-light">
            {name}
          </div>
          <p className="text-fluid-small line-clamp-2">{description}</p>
        </div>
        {!admin && <div className="mb-5 flex items-center gap-3">
          <span>Get a quote</span> <GetQuoteButton size={4} />
        </div>}
        {admin && (
          <button onClick={onDelete} className="bg-red-500 py-1 px-3 text-light rounded mt-3 lg:mt-5 hover:brightness-50 active:scale-95 duration-300">Delete</button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

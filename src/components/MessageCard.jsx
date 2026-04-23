import { useState } from "react";

const avatarColors = [
  "bg-violet-500",
  "bg-blue-500",
  "bg-emerald-500",
  "bg-orange-500",
  "bg-pink-500",
  "bg-cyan-500",
];

const MessageCard = ({ time, name, email, message, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const [color] = useState(
    avatarColors[Math.floor(Math.random() * avatarColors.length)],
  );

  return (
    <article
      onClick={() => setExpanded(!expanded)}
      className="bg-[#1a2420] border border-gray-700/40 rounded-xl p-4 cursor-pointer hover:border-gray-600 duration-200 group"
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div
          className={`${color} shrink-0 size-10 rounded-full flex items-center justify-center font-bold text-white text-sm`}
        >
          {name.charAt(0).toUpperCase()}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="font-semibold text-light text-fluid-p">
              {name}
            </span>
            <span className="text-gray-500 text-fluid-small shrink-0">
              {time}
            </span>
          </div>
          <p className="text-gray-400 text-fluid-small">{email}</p>
          <p
            className={`text-gray-300 text-fluid-p mt-2 ${!expanded ? "line-clamp-2" : ""}`}
          >
            {message}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div
        className={`mt-4 flex items-center justify-between ${expanded ? "flex" : "hidden group-hover:flex"}`}
      >
        <span className="text-gray-500 text-fluid-small">
          {expanded ? "Click to collapse" : "Click to expand"}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
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
    </article>
  );
};

export default MessageCard;

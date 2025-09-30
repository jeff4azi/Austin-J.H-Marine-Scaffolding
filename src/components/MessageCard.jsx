import { useState } from "react";
const MessageCard = ({ time, name, email, message, onDelete }) => {
  const [showMessage, setShowMessage] = useState(false);

  const brightColors = [
    "bg-red-500",
    "bg-yellow-400",
    "bg-green-400",
    "bg-blue-500",
    "bg-pink-500",
  ];

  const [avatarColor] = useState(
    brightColors[Math.floor(Math.random() * brightColors.length)]
  );

  return (
    <article
      className="bg-white shadow-2xl rounded mx-5 lg:mx-10 p-3 flex"
      onClick={() => setShowMessage(!showMessage)}
      onMouseEnter={() => setShowMessage(true)}
      onMouseLeave={() => setShowMessage(false)}
    >
      <div>
        <div
          className={`size-10 lg:size-15 rounded-full ${avatarColor} flex-1/3 flex items-center justify-center font-bold mr-3 lg:text-2xl`}
        >
          {name.charAt(0)}
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <h3 className="text-fluid-h3">{name}</h3>
          <div className="flex justify-between">
            <p className="text-fluid-small">{email}</p>
            <p className="text-fluid-small translate-x-5 lg:-translate-x-5">
              {time}
            </p>
          </div>
        </div>
        <p
          className={`text-fluid-p ${
            !showMessage ? "line-clamp-1" : ""
          } max-w-[200px] lg:max-w-full`}
        >
          {message}
        </p>
        <button
          className="bg-red-600 text-light px-3 py-1 rounded hover:brightness-50 active:scale-95 duration-300"
          onClick={(e) => {
            e.stopPropagation(); // stop card click from toggling message
            onDelete();
          }}
        >
          Delete
        </button>
      </div>
    </article>
  );
};
export default MessageCard;

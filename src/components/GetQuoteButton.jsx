import { useState } from "react";
import { social_icons } from "../data";
import { motion } from "framer-motion";

const GetQuoteButton = ({ size = 6, border }) => {
  const whatsappIcon = { path: social_icons[0].path, class: "" };
  const arrowIcon = {
    path: "M197.66,69.66,83.31,184H168a8,8,0,0,1,0,16H64a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v84.69L186.34,58.34a8,8,0,0,1,11.32,11.32Z",
    class: "rotate-180",
  };

  const sizeClasses = {
    4: "w-4 h-4",
    6: "w-6 h-6",
    8: "w-8 h-8",
    10: "w-10 h-10",
  };

  const [activePath, setActivePath] = useState(arrowIcon);

  return (
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      href={social_icons[0].url}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-2 rounded-full text-dark ${
        border ? "lg:border" : ""
      } hover:text-light hover:scale-105 bg-light transition-colors active:bg-accent/90 active:scale-95 duration-300 hover:bg-accent/90`}
      onMouseEnter={() => setActivePath(whatsappIcon)}
      onMouseLeave={() => setActivePath(arrowIcon)}
      onClick={() => setActivePath(whatsappIcon)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} ${activePath.class}`}
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d={activePath.path}></path>
      </svg>
    </motion.a>
  );
};

export default GetQuoteButton;

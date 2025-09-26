import { motion } from "framer-motion";

const ServiceCard = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className={` bg-${props.color} text-${
        props.color == "dark" ? "light" : "dark"
      } p-5 rounded border-2 border-${
        props.color == "light" ? "dark" : props.color
      } flex flex-col gap-4 hover:scale-105 duration-300`}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-16 lg:size-20"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d={props.path}></path>
        </svg>
      </div>
      <div style={{ maxWidth: 200 }}>
        <span className="text-fluid-h3">{props.title}</span>
      </div>
      <p>{props.description}</p>
    </motion.div>
  );
};

export default ServiceCard;

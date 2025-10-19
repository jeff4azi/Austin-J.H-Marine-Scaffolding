import { motion } from "framer-motion";
import { cardVariant } from "../data";

const TestimonialCard = ({
  text,
  img,
  name,
  position,
  bg_color,
  text_color,
}) => {
  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      className={`px-5 py-3 lg:px-7 lg:py-5 rounded space-y-3 text-fluid-small shadow-2xl w-full md:[350px] lg:w-[400px] flex flex-col justify-between lg:h-[230px]`}
      style={{ backgroundColor: bg_color, color: text_color}}
    >
      <p>"{text}"</p>
      <div className="flex items-center gap-3">
        <img
          src={img}
          alt="client's image"
          className="size-10 object-cover rounded-full"
        />
        <div>
          <div className="text-xl font-medium">{name}</div>
          <p className="text-fluid-small">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

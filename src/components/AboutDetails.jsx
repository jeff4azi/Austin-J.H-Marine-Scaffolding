import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutDetails = ({ number, symbol, details }) => {
  const [count, setCount] = useState(0);

  // Create a ref for the component
  const ref = useRef(null);

  // Check if it's in view
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return; // only start counting when visible

    let start = 0;
    const end = parseInt(number);
    if (start === end) return;

    let duration = 1000;
    let incrementTime = 20;
    let step = (end - start) / (duration / incrementTime);

    let timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="text-fluid-h2 text-dark">
        {count}
        {symbol}
      </div>
      <p className="text-fluid-p -translate-y-2">{details}</p>
    </motion.div>
  );
};

export default AboutDetails;

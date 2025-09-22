import { useState } from "react";
import { motion } from "framer-motion";

const ContactOverlay = ({ isOpen, onClose }) => {
  const [isFocused, setIsFocused] = useState(false);

  if (!isOpen) return null;

  // optional: check window width for small devices
  const isSmallDevice =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
    >
      <motion.form
        action="https://formsubmit.co/jeff4azi@gmail.com"
        method="POST"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        // Translate up if an input is focused and it's a small device
        style={{ translateY: isFocused && isSmallDevice ? -50 : 0 }}
        className="bg-white p-8 rounded-xl shadow-xl w-11/12 max-w-md flex flex-col gap-4"
      >
        <h2 className="text-2xl text-fluid-h1">Contact Us</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="border border-gray-300 rounded p-2 outline-1 outline-accent focus:outline-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="border border-gray-300 rounded p-2 outline-1 outline-accent focus:outline-2"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="border border-gray-300 rounded p-2 outline-1 outline-accent focus:outline-2 resize-none h-32"
        />
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="bg-accent text-light rounded py-2 font-medium hover:bg-accent/50 active:scale-95 transition"
          >
            Send
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:underline active:text-accent"
          >
            Cancel
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default ContactOverlay;

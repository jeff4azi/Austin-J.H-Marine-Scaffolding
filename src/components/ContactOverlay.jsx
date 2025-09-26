import { useState } from "react";
import { motion } from "framer-motion";

const ContactOverlay = ({ isOpen, onClose }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const isSmallDevice =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  const handleSubmit = () => {
    setSubmitted(true); // show thank-you immediately
    // form will still submit naturally to FormSubmit
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
    >
      <iframe name="hidden" className="hidden"></iframe>
      <motion.form
        action="https://formsubmit.co/58936c73ce3aefb0472f0526e39a22fb"
        method="POST"
        target="hidden"
        onSubmit={handleSubmit}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ translateY: isFocused && isSmallDevice ? -50 : 0 }}
        className="bg-white p-8 rounded-xl shadow-xl w-11/12 max-w-md flex flex-col gap-4"
      >
        
        {!submitted ? (
          <>
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

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="AJH website client request" />

            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="bg-accent text-light rounded py-2 font-medium hover:bg-accent/50 active:scale-95 transition flex items-center justify-center gap-2"
                onClick={() => setIsLoading(true)}
              >
                Send
                {isLoading ? (
                  <div className="border border-light border-t-transparent animate-spin size-3 rounded-full"></div>
                ) : (
                  ""
                )}
              </button>
              <button
                type="submit"
                onClick={() => {
                  onClose()
                  setIsLoading(false)
                }}
                className="text-gray-500 hover:underline active:text-accent"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <h2 className="text-xl font-bold text-accent">
              Thank you! Your message was sent.
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 bg-accent text-light rounded py-2 px-4 hover:bg-accent/50 transition"
            >
              Close
            </button>
          </div>
        )}
      </motion.form>
    </motion.div>
  );
};

export default ContactOverlay;

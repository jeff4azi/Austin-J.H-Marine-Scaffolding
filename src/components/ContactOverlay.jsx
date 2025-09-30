import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EMAIL_KEY } from "../data";

import { service_id, email_template_id } from "../data";
import { supabase } from "../supabaseClient"; 

const ContactOverlay = ({ isOpen, onClose }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  if (!isOpen) return null;

  const isSmallDevice =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 1️⃣ Send email
      await emailjs.send(
        service_id,
        email_template_id,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        EMAIL_KEY
      );

      // 2️⃣ Save to Supabase "messages" table
      const { error } = await supabase.from("messages").insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) {
        console.error("❌ Supabase insert failed:", error.message);
      }

      setSubmitted(true);
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("❌ Failed:", err);
      setIsLoading(false);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
    >
      <motion.form
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
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="border border-gray-300 rounded p-2 outline-1 outline-accent focus:outline-2"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="border border-gray-300 rounded p-2 outline-1 outline-accent focus:outline-2"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="border border-gray-300 rounded p-2 outline-1 outline-accent focus:outline-2 resize-none h-32"
            />

            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="bg-accent text-light rounded py-2 font-medium hover:bg-accent/50 active:scale-95 transition flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <div className="border border-light border-t-transparent animate-spin size-4 rounded-full"></div>
                ) : (
                  "Send"
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  setIsLoading(false);
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

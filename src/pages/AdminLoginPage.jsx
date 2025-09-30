import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../supabaseClient"; // make sure this is setup
import { admin_login_text, childVariant, parentVariant } from "../data";
import { motion } from "framer-motion";
import AJH_Logo from "../assets/images/AJH_Logo.png";

const AdminLoginPage = () => {
  const navigate = useNavigate(); // hook for redirecting
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      console.log("Logged in:", data);
      navigate("/admin-dashboard"); // change to your route
    }
  };

  return (
    <div className="h-screen md:h-screen text-light flex">
      <section className="h-full md:h-screen w-full lg:w-1/2 bg-dark">
        <div className="container mx-auto px-6 md:px-16 space-y-5">
          <div className="flex items-center gap-1">
            <span className="w-[20px] lg:w-[50px]">
              <hr className="border-accent lg:border" />
            </span>
            <span className="text-accent uppercase text-fluid-small">
              welcome back
            </span>
          </div>
          <img
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={AJH_Logo}
            alt="AJH Logo"
            className="lg:hidden w-[150px] relative z-10 mx-auto"
          />
          <motion.h2
            variants={parentVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-fluid-h1 text-center mb-1 lg:mb-3 w-[95%] lg:[75%]"
            style={{ color: "var(--color-light)" }}
          >
            {admin_login_text.split(" ").map((word, i) => (
              <motion.span key={i} variants={childVariant}>
                {word + " "}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            initial={{ scale: 0.9, opacity: 0.3 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-fluid-p text-center mb-5 lg:mb-10 text-light/75 "
          >
            This page is strictly for this site's Administrator only!
          </motion.p>
        </div>
        <div className="container mx-auto px-6 md:px-16 ">
          <div className="border-y-2 border-gray-500/50 py-8 lg:py-13">
            <form
              onSubmit={handleLogin}
              className="w-full max-w-sm space-y-5 lg:space-y-8 mx-auto"
            >
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent shadow-sm"
              />
              <input
                type="password"
                placeholder="• • • • • • • •"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent shadow-sm"
              />
              {errorMsg && (
                <p className="text-red-500 text-sm text-center">{errorMsg}</p>
              )}
              <button
                type="submit"
                className="w-full bg-accent flex items-center justify-center text-white py-3 rounded-xl shadow-md hover:bg-accent/50 active:scale-95 duration-300 transition"
              >
                {isLoading ? (
                  <div className="border border-light border-t-transparent animate-spin size-4 rounded-full"></div>
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${AJH_Logo})` }}
        className="hidden h-screen w-1/2 overflow-hidden lg:flex items-center justify-center bg-center bg-cover bg-no-repeat relative"
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>
        <motion.img
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          src={AJH_Logo}
          alt="AJH Logo"
          className="w-[500px] relative z-10"
        />
      </section>
    </div>
  );
};

export default AdminLoginPage;

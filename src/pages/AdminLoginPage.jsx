import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../supabaseClient";
import { motion } from "framer-motion";
import AJH_Logo from "../assets/images/AJH_Logo.png";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
      navigate("/admin-dashboard");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-dark flex">
      {/* Left panel */}
      <motion.section
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 py-16"
      >
        <div className="max-w-sm w-full mx-auto space-y-8">
          {/* Logo + brand */}
          <div className="flex items-center gap-3">
            <img src={AJH_Logo} alt="AJH Logo" className="w-10" />
            <span className="text-light font-semibold tracking-wide text-fluid-p">
              AJH Admin
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <h1 className="!text-light text-fluid-h2 font-bold">
              Welcome back
            </h1>
            <p className="text-gray-400 text-fluid-small">
              Sign in to access the admin dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-gray-400 text-fluid-small block">
                Email
              </label>
              <input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-gray-600 text-light placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent duration-200 text-fluid-p"
              />
            </div>

            <div className="space-y-1">
              <label className="text-gray-400 text-fluid-small block">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-gray-600 text-light placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent duration-200 text-fluid-p pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-accent duration-200"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M228,175a8,8,0,0,1-10.92-3l-19-33.2A123.23,123.23,0,0,1,162,155.46l5.87,35.22a8,8,0,0,1-6.58,9.21A8.4,8.4,0,0,1,160,200a8,8,0,0,1-7.88-6.69L146.3,158.9a124.06,124.06,0,0,1-36.6,0l-5.82,35.41A8,8,0,0,1,96,200a8.4,8.4,0,0,1-1.32-.11,8,8,0,0,1-6.58-9.21L94,155.46a123.23,123.23,0,0,1-36.06-16.69L39,172a8,8,0,1,1-13.94-8l20-35a153.47,153.47,0,0,1-19.3-20A8,8,0,1,1,38.22,99c16.6,20.54,45.64,45,89.78,45s73.18-24.49,89.78-45A8,8,0,1,1,230.22,109a153.47,153.47,0,0,1-19.3,20l20,35A8,8,0,0,1,228,175Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {errorMsg && (
              <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-red-400 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M236.8,188.09,149.35,36.22a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z" />
                </svg>
                <p className="text-red-400 text-fluid-small">{errorMsg}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-accent text-dark font-semibold py-3 rounded-lg hover:bg-accent/80 active:scale-95 duration-300 flex items-center justify-center gap-2 text-fluid-p mt-2"
            >
              {isLoading ? (
                <div className="size-5 border-2 border-dark border-t-transparent animate-spin rounded-full" />
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>
      </motion.section>

      {/* Right panel — decorative */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex w-1/2 bg-accent/10 border-l border-gray-700 items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
        <img
          src={AJH_Logo}
          alt="AJH Logo"
          className="w-48 relative z-10 opacity-90"
        />
      </motion.section>
    </div>
  );
};

export default AdminLoginPage;

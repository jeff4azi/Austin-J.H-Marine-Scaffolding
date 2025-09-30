import { motion } from "framer-motion";

import { sections, social_icons, parentVariant, childVariant } from "../data";
import logo from "../assets/images/AJH_Logo.png";
import { Link } from "react-router-dom";
import { useProjects } from "../context/ProjectContext";

const iconsEl = social_icons.map((social_icon) => (
  <a key={social_icon.path.slice(0, 5)} target="_blank" rel="noopener noreferrer" href={social_icon.url}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-6 hover:text-accent transition-colors duration-300 hover:scale-105 active:scale-95"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d={social_icon.path}></path>
    </svg>
  </a>
));

const Footer = () => {
  const { projects } = useProjects();

  return (
    <>
      <div className="container mx-auto px-6 md:px-16 pb-5 lg:pb-10">
        <motion.div
          variants={parentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 place-items-end"
        >
          <motion.div
            variants={childVariant}
            className="space-y-5 place-self-center lg:place-self-start"
          >
            <img
              src={logo}
              alt="AJH company logo"
              className="grayscale w-20 place-self-center lg:place-self-start"
            />
            <address className="place-self-center  text-center lg:place-self-start">
              40 Muslim Avenue Imeke Badagry Lagos Nigeria
            </address>
            <div className="flex gap-2 place-self-center lg:place-self-start">
              {iconsEl}
            </div>
          </motion.div>

          <motion.div
            variants={childVariant}
            className="place-self-center text-center lg:text-start"
          >
            <span className="text-fluid-p">Menu</span>
            <ul className="lg:space-y-3 lg:mt-3">
              {sections.map((section) => (
                <li
                  key={section}
                  style={{
                    color: "var(--color-light)",
                    fontSize: "clamp(0.75rem, 0.5rem + 0.5vw, 0.875rem)",
                  }}
                >
                  <a href={`#${section}`}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
              <Link to="/admin-login">
                <button className="bg-accent hover:brightness-150 py-1 px-2 rounded text-light mt-5 active:scale-95 duration-300">
                  Log in
                </button>
              </Link>
            </ul>
          </motion.div>

          <motion.div
            variants={childVariant}
            className="place-self-center text-center lg:text-start"
          >
            <span className="text-fluid-p">Projects</span>
            <ul className="lg:space-y-3 lg:mt-3">
              {projects.map((project) => (
                <li
                  key={project.id}
                  style={{
                    color: "var(--color-light)",
                    fontSize: "clamp(0.75rem, 0.5rem + 0.5vw, 0.875rem)",
                  }}
                >
                  <a href={`#${project.id}`}>
                    {project.name.charAt(0).toUpperCase() +
                      project.name.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
      <div className="container mx-auto px-6 md:px-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-y-2 border-gray-500/30 py-1 lg:py-3 w-full flex justify-between items-center"
        >
          <p className="text-fluid-small">
            © <time dateTime="2025">{new Date().getFullYear()}</time> Austin J.H Technical Support Services Ltd.
          </p>
          <span className="hidden md:block text-fluid-small text-fluid-small">
            Privacy Policy
          </span>
        </motion.div>
      </div>
    </>
  );
};

export default Footer;

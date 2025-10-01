import { useState, useEffect } from "react";
import AJH_logo from "../assets/images/AJH_Logo.png";
import { sections } from "../data";
import GetQuoteButton from "./GetQuoteButton";
import { motion } from "framer-motion";

import { useOverlay } from "../context/OverlayContext";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOverlayOpen, setIsNavOverlayOpen] = useState(false);
  const [active, setActive] = useState("home");

  const { setIsOpen } = useOverlay();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    setActive(
      `${
        localStorage.getItem("active-link")
          ? localStorage.getItem("active-link")
          : "home"
      }`
    );

    window.addEventListener("scroll", handleScroll);

    // cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linksEl = sections.map((section) => (
    <motion.li key={section}>
      <a
        onClick={() => {
          setIsNavOverlayOpen(!isNavOverlayOpen);
          setActive(section);
          localStorage.setItem("active-link", section);
        }}
        className={`${active == section ? "link-active" : ""}`}
        href={`#${section}`}
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </a>
    </motion.li>
  ));

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`w-full fixed top-0 left-0 right-0 z-50 duration-300 ${
        isScrolled ? "bg-light shadow-md" : "lg:bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 md:px-16 py-3 md:py-3 flex justify-between items-center lg:gap-15 text-fluid-p">
        <img
          src={AJH_logo}
          alt="AJH Logo Marine Scaffolding"
          className={`${
            isScrolled ? "w-[40px] md:w-[60px]" : "w-[50px] md:w-[80px]"
          } hover:rotate-360 duration-300 ease-in-out`}
        />

        <ul
          className={`absolute inset-0 h-[80vh] flex flex-col items-center justify-center font-bold bg-accent/20 backdrop-blur-xl duration-300 ease-in-out ${
            isNavOverlayOpen ? "translate-x-0" : "translate-x-full"
          } lg:static lg:translate-0 lg:flex-row lg:h-fit lg:font-normal lg:text-nowrap lg:w-full lg:justify-between lg:backdrop-blur-none lg:bg-transparent`}
        >
          <ul
            className="gap-5 flex flex-col items-center justify-center 
             lg:flex-row lg:gap-8 lg:opacity-100 lg:translate-x-0 
             lg:!transform-none lg:!transition-none
             h-[80vh] lg:h-fit lg:w-full"
          >
            {linksEl}
          </ul>

          <div className="flex items-center gap-1 absolute bottom-10 lg:static">
            <button
              className="text-fluid-p px-3 py-1 rounded-full font-normal bg-accent text-black active:bg-accent/30 active:scale-95 duration-300 hover:bg-accent/70 hover:scale-105 shadow-md"
              onClick={() => setIsOpen(true)}
            >
              Contact Us
            </button>
            <GetQuoteButton size={4} border={true} />
          </div>
        </ul>

        {/* hambuger */}
        <button
          className="z-50 lg:hidden"
          onClick={() => {
            setIsNavOverlayOpen(!isNavOverlayOpen);
          }}
        >
          {!isNavOverlayOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-8 md:size-[2rem]"
              fill="#000"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-8 md:size-[2rem]"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
          )}
        </button>
      </nav>
    </motion.header>
  );
};

export default Nav;

import { useOverlay } from "../context/OverlayContext";

import Nav from "../components/Nav";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Testimonials from "../sections/Testimonials";
import Quote from "../sections/Quote";
import Footer from "../sections/Footer";
import ContactOverlay from "../components/ContactOverlay";



const Landing_Page = () => {
  const { isOpen, setIsOpen } = useOverlay();

  return (
    <>
      <Nav />
      <ContactOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <div id="home">
        <Hero />
      </div>
      <section id="services">
        <Services />
      </section>
      <section id="projects" className="bg-dark text-gray-300">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="quote">
        <Quote />
      </section>
      <section className="bg-dark text-gray-300">
        <Footer />
      </section>
    </>
  );
};

export default Landing_Page;

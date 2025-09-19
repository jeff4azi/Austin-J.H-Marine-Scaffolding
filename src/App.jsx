import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Quote from "./sections/Quote";
import Footer from "./sections/Footer";

const shit = () => {
  return (
    <main>
      <Nav />
      <div id="home">
        <Hero />
      </div>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="quote">
        <Quote />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
};

export default shit;

import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Quote from "./sections/Quote";
import Footer from "./sections/Footer";
import ContactOverlay from "./components/ContactOverlay";

/* context */
import { OverlayProvider } from "./context/OverlayContext";
import { useOverlay } from "./context/OverlayContext";

const App = () => {
  return (
    <OverlayProvider>
      <MainContent />
    </OverlayProvider>
  );
};

// separate component inside provider so useOverlay works
const MainContent = () => {
  const { isOpen, setIsOpen } = useOverlay();

  return (
    <main className="relative">
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
    </main>
  );
};

export default App;

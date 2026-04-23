import Nav from "../components/Nav";
import Projects from "../sections/Projects";
import Footer from "../sections/Footer";
import ContactOverlay from "../components/ContactOverlay";
import { useOverlay } from "../context/OverlayContext";

const AllProjects = () => {
  const { isOpen, setIsOpen } = useOverlay();

  return (
    <>
      <Nav />
      <ContactOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <main className="min-h-screen bg-dark text-gray-300 pt-24 pb-16">
        <Projects />
      </main>

      <section className="bg-dark text-gray-300">
        <Footer />
      </section>
    </>
  );
};

export default AllProjects;

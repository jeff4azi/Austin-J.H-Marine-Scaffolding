import img from "../assets/images/offshore-plaform.jpg";
import AboutDetails from "../components/AboutDetails";
import { about_details } from "../data";

const About = () => {
  const aboutDetailsEl = about_details.map((about_detail) => <AboutDetails key={about_detail.id} {...about_detail} />)

  return (
    <>
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex items-center gap-1">
          <span className="w-[20px] lg:w-[50px]">
            <hr className="border-dark lg:border" />
          </span>
          <span className="text-dark uppercase text-fluid-small">about us</span>
        </div>
        <h2 className="text-fluid-h1 mb-5 lg:mb-10 w-[95%] lg:w-[75%]">
          Sustainable And Innovative Development Infrastructure
        </h2>
      </div>
      <div className="container mx-auto px-6 md:px-16 ">
        <div className="border-y-2 border-gray-400 py-8 lg:py-13 w-full">
          <div className="w-full space-y-5 lg:space-y-10 ">
            <img src={img} alt="offshore platform" className="w-full object-cover rounded" />
            <p>Austin J.H Technical Support Services Ltd. is a Lagos-based scaffolding company with over 20 years of hands-on experience in the industry. Specializing in industrial projects, we pride ourselves on delivering reliable scaffolding solutions that put safety first at every stage. Our team is made up of highly skilled professionals with the manpower and expertise to take on projects of any scale, ensuring efficiency, stability, and peace of mind for our clients. Backed by decades of practical knowledge and a strong commitment to excellence, we continue to build lasting relationships while supporting the success of construction and engineering projects across Nigeria.</p>
          </div>
          <section className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:place-items-center">
            {aboutDetailsEl}
          </section>
        </div>
      </div>
    </>
  );
};

export default About;

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
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi eius fugiat corrupti distinctio mollitia veritatis perspiciatis debitis deleniti labore, ipsum, hic enim. Dicta, veritatis eos cumque aliquam laboriosam incidunt porro. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime rem praesentium magnam, temporibus culpa ipsa veniam sit iusto officiis, harum magni alias eum dignissimos? Nostrum suscipit vitae odio? Suscipit, dolorem?</p>
          </div>
          <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {aboutDetailsEl}
          </section>
        </div>
      </div>
    </>
  );
};

export default About;

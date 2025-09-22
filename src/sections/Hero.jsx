import heroImage1 from "../assets/images/zach-theo-guADzpF9pDI-unsplash.jpg";
import GetQuoteButton from "../components/GetQuoteButton";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[90vh] lg:h-screen"
      style={{ padding: 0 }}
    >
      <div className="h-full">
        <div
          style={{ backgroundImage: `url(${heroImage1})` }}
          className="relative flex items-center lg:items-end h-full bg-cover bg-center bg-no-repeat"
        >
          {/* White overlay (BEHIND text) */}
          <div className="absolute inset-0 bg-white/20 z-0"></div>

          {/* Content */}
          <div className="container mx-auto p-6 md:p-16 flex flex-col gap-5 lg:flex-row lg:items-end z-10">
            <div className="font-heading text-gray-950 text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-tight leading-tight pointer-events-none select-none">
              Quality <br /> Scaffolding <br /> Solutions
            </div>

            <div className="flex items-center gap-1 lg:mb-8 lg:-translate-x-10">
              <button className="text-fluid-p px-5 py-2 bg-accent rounded-full text-dark font-medium active:bg-accent/30 active:scale-95 duration-300 hover:bg-accent/80 hover:scale-105">
                Book a Meeting
              </button>
              <GetQuoteButton size={6} border={false}/>
            </div>

            <div className="absolute bottom-5 right-5 lg:bottom-15 md:right-15 z-20 backdrop-blur-sm bg-black/30 w-[200px] md:w-[250px] p-5 md:p-5 rounded-xl space-y-2 md:space-y-5 hover:scale-105">
              <h1 className="text-sm md:text-xl lg:text-2xl font-bold">
                Building the Future One project at a Time
              </h1>
              <p className="text-fluid-small text-gray-900">
                Here at Austin J.H Technical Support we errect, modify and
                dismattle scaffolds
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

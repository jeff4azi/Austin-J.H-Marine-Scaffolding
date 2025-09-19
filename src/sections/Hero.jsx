import heroImage1 from "../assets/images/zach-theo-guADzpF9pDI-unsplash.jpg";

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
            <div className="font-heading text-gray-950 text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-tight leading-tight">
              Quality <br /> Scaffolding <br /> Solutions
            </div>

            <div className="flex items-center gap-1 lg:mb-8 lg:-translate-x-10">
              <button className="text-fluid-p px-5 py-2 bg-accent rounded-full text-dark font-medium">
                Book a Meeting
              </button>
              <button className="p-2 rounded-full bg-light text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 rotate-180"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M197.66,69.66,83.31,184H168a8,8,0,0,1,0,16H64a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v84.69L186.34,58.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </button>
            </div>

            <div className="absolute bottom-5 right-5 lg:bottom-15 md:right-15 z-20 backdrop-blur-sm bg-black/30 w-[200px] md:w-[250px] p-5 md:p-5 rounded-xl space-y-2 md:space-y-5">
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

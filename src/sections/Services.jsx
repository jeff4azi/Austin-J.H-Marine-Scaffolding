import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const Services = () => {
  const serviceCardEl = services.map((service) => (
    <ServiceCard key={service.id} {...service} />
  ));

  return (
    <>
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex items-center gap-1">
          <span className="w-[20px] lg:w-[50px]"><hr className="border-dark lg:border"/></span>
          <span className="text-dark uppercase text-fluid-small">our service</span>
        </div>
        <h2 className="text-fluid-h1 mb-5 lg:mb-10 w-[95%] lg:w-[75%]">A Comprehensive Set Of Services</h2>
      </div>
      <div className="container mx-auto px-6 md:px-16 ">
        <div className="border-y-2 border-gray-400 py-8 lg:py-13 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCardEl}
        </div>
      </div>
    </>
  );
};

export default Services;

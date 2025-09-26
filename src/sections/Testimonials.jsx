import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import TestimonialCard from "../components/TestimonialCard";
import { testimonial_text, testimonials, parentVariant, childVariant } from "../data";

const Testimonials = () => {
  return (
    <>
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex items-center gap-1">
          <span className="w-[20px] lg:w-[50px]">
            <hr className="border-dark lg:border" />
          </span>
          <span className="text-dark uppercase text-fluid-small">
            Testimonials
          </span>
        </div>
        <motion.h2
          variants={parentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-fluid-h1 mb-5 lg:mb-10 w-[95%] lg:w-[75%]"
        >
          {testimonial_text.split(" ").map((word, i) => (
            <>
              <motion.span key={i} variants={childVariant}>
                {word + " "}
              </motion.span>
            </>
          ))}
        </motion.h2>
      </div>

    <div className="container mx-auto px-6 md:px-16 w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={150}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 }, // 2 per view on tablets
            1024: { slidesPerView: 3 }, // 3 per view on desktop
          }}
          className="border-y-2 border-gray-400 w-full lg:px-20"
          style={{paddingTop: 64, paddingBottom: 64, paddingLeft: 5, paddingRight: 5}}
        >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} style={{width: 300}} breakpoints={{768: {style: {width: 1000}}}}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
        </Swiper>
        </div>
    </>
  );
};

export default Testimonials;

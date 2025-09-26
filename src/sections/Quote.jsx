import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

/* images */
import business_card from "../assets/images/AJH-business-card.jpg";
import business_card_back from "../assets/images/AJH-business-card-back.jpg";
import beam_image from "../assets/images/beam-bars-scaffolds.webp";
import GetQuoteButton from "../components/GetQuoteButton";

import { cardVariant } from "../data";

const Quote = () => {
  return (
    <div className="container mx-auto px-6 md:px-16 w-full">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 1.1 }, // 2 per view on tablets
          1024: { slidesPerView: 2.1 }, // 3 per view on desktop
        }}
        className="flex pl-8 lg:pl-13 w-full"
        style={{ paddingTop: 10, paddingBottom: 10 }}
      >
        <SwiperSlide key={1}>
          <motion.img
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            src={business_card}
            alt="AJH Business Card"
            className="border-2 border-dark hover:scale-105 duration-300"
          />
        </SwiperSlide>
        <SwiperSlide key={1}>
          <motion.img
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            src={business_card_back}
            alt="AJH Business Card Back"
            className="border-2 border-dark hover:scale-105 duration-300"
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
          key={1}
        >
          <motion.img
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            src={business_card_back}
            alt="AJH Business Card Back"
            className="border-2 border-dark hover:scale-105 duration-300"
          />

          <img
            src={beam_image}
            alt="AJH Business Card Back"
            className="absolute inset-0 border-2 border-dark hover:scale-105 duration-300"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-light bg-black/50 lg:space-y-5">
            <div className="text-fluid-h3 lg:text-fluid-h2 text-center">
              Start Building With Confidence Today
            </div>
            <div className="flex gap-1 items-center text-fluid-small">
              <p>Get a Quote</p>
              <GetQuoteButton size={4} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Quote;

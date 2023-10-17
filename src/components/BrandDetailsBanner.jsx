// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

// Import Swiper styles
import "swiper/css";

export const BrandDetailsBanner = ({ advertisements }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {advertisements.map((adv, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative">
            <img src={adv.imageUrl} className="w-full" />
            <div className="absolute inset-0 bg-black/20 z-10" />
            <div className="text-white z-30 absolute bottom-5 ">
              <h3>{adv.title}</h3>
              <p>{adv.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

BrandDetailsBanner.propTypes = {
  advertisements: PropTypes.array,
};

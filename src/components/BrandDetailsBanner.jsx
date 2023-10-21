// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";

import "swiper/css";

export const BrandDetailsBanner = ({ advertisements }) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      {advertisements?.map((adv, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full h-[300px] md:h-[500px]">
            <img
              src={adv.imageUrl}
              className="h-full min-h-[300px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 z-10" />
            <div className="text-white text-left z-30 absolute top-[60%] md:top-[70%] left-[5%]  space-y-5">
              <h3 className="text-3xl md:text-6xl font-extrabold">
                {adv?.title}
              </h3>
              <p className="text-sm md:text-base font-medium">
                {adv?.description}
              </p>
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

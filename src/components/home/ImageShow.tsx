"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

const ImageShow = () => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
      loop={true}
      id="showcase"
    >
      <SwiperSlide>
        <img src="/showcase/langchai1.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/showcase/langchai2.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/showcase/langchai3.webp" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageShow;

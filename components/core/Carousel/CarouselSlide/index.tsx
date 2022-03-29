import React, { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { SwiperSlideCoreProps } from "../../../../types/component";

const CarouselSlide: FC<SwiperSlideCoreProps> = (props) => {
  return <SwiperSlide {...props}>{props.children}</SwiperSlide>;
};

export default CarouselSlide;

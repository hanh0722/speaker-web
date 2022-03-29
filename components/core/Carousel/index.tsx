import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { classList } from "../../../utils/string";
import styles from "./styles.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperCoreProps } from "../../../types/component";

const Carousel: FC<SwiperCoreProps> = (props) => {
  const {children, className, ...pProps } = props;

  return (
    <Swiper
      className={classList(styles.swiper, className)}
      spaceBetween={30}
      slidesPerView={1}
      {...pProps}
    >
      {children}
    </Swiper>
  );
};

Carousel.defaultProps = Swiper.defaultProps;
Carousel.propTypes = Swiper.propTypes;

export default Object.assign(Carousel, {
  Slider: SwiperSlide,
});

import React, { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Navigation, Pagination } from "swiper";
import { classList } from "../../../utils/string";
import styles from "./styles.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SwiperCoreProps } from "../../../types/component";
import { IconArrowLeft, IconArrowRight } from "../Icons";
import { ButtonBase } from "@mui/material";

const Carousel: FC<SwiperCoreProps> = (props) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const { children, className, navigation, isCustomNavigation, ...pProps } =
    props;

  const renderNavigation = () => {
    if (!navigation) {
      return null;
    }
    return (
      <>
        <div
          className={`d-flex justify-end align-center ${styles.container} container-arrow`}
        >
          <ButtonBase className={`${styles["btn-ripple"]} ${styles.margin}`}>
            <div className={`${styles.left} arrow-prev`} ref={prevRef}>
              <IconArrowLeft variant="md" />
            </div>
          </ButtonBase>
          <ButtonBase className={styles["btn-ripple"]}>
            <div className={`${styles.right} arrow-next`} ref={nextRef}>
              <IconArrowRight variant="md" />
            </div>
          </ButtonBase>
        </div>
      </>
    );
  };

  const onHandlerInit = (swiper: SwiperCore) => {
    if (isCustomNavigation) {
      // @ts-ignore
      swiper.params.navigation.prevEl = prevRef.current;
      // @ts-ignore
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  };

  return (
    <>
      {isCustomNavigation && renderNavigation()}
      <Swiper
        className={classList(styles.swiper, className)}
        onInit={onHandlerInit}
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={(isCustomNavigation || !navigation) ? false : true}
        {...pProps}
      >
        {children}
      </Swiper>
    </>
  );
};

Carousel.defaultProps = Swiper.defaultProps;
Carousel.propTypes = Swiper.propTypes;

export default Object.assign(Carousel, {
  Slider: SwiperSlide,
});

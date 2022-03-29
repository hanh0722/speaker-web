import React from "react";
import Swiper from "swiper";
import { SHOP } from "../../../../constants/path";
import { Button, Carousel, Link } from "../../../core";
import styles from "./styles.module.scss";

const SwiperBanner = () => {
  const onInitSwiper = (swiper: Swiper) => {
    const realIndex = swiper.realIndex;
    const slides = swiper.slides;
    slides.removeClass(styles['active']);
    slides[realIndex].classList.add(styles.acitve);
  }
  return (
    <Carousel onInit={onInitSwiper}>
      <Carousel.Slider className={styles.slider}>
        <div className={styles.image} />
        <div
          className={`d-flex flex-column align-start justify-center ${styles.content}`}
        >
          <div className={styles["card-content"]}>
            <h2 className="f-48 text-uppercase weight-600">
              Innovative, wireless home speaker
            </h2>
            <p className="f-16">
              Designed to be positioned up against the wall on a shelf or side
              table.
            </p>
            <Link href={SHOP}><Button
              variant="outlined"
              prefix="normal"
              color="inherit"
              size="large"
            >
              Shop Now
            </Button></Link>
          </div>
        </div>
      </Carousel.Slider>
    </Carousel>
  );
};

export default SwiperBanner;

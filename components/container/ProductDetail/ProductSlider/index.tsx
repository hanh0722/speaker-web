import React, { FC, useState } from "react";
import PropTypes from "prop-types";
import { ProductDetailProps } from "../../../../types/components/ProductDetail";
import { Carousel, Image } from "../../../core";
import styles from "./styles.module.scss";
import { classList } from "../../../../utils/string";
import Swiper, { FreeMode, Navigation, Thumbs } from "swiper";
import { RootState } from "../../../../store";
import useMedia from "../../../../hook/useMedia";

const ProductSlider: FC<ProductDetailProps> = (props) => {
  const isSmallMobile = useMedia('(max-width: 576px)');
  const { data, className, ...restProps } = props;
  const [thumbSwiper, setThumbSwiper] = useState<null | Swiper>(null);

  return (
    <div {...restProps} className={classList(styles.container, className)}>
      <Carousel
        loop={true}
        spaceBetween={10}
        navigation
        autoplay={{
          delay: 5000
        }}
        grabCursor
        thumbs={{ swiper: thumbSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`${styles.main}`}
      >
        {data?.images?.map((item, index) => {
          return (
            <Carousel.Slider className={styles.slider} key={index}>
              <Image src={item} alt="" />
            </Carousel.Slider>
          );
        })}
      </Carousel>
      <Carousel
        onSwiper={setThumbSwiper}
        loop={true}
        spaceBetween={25}
        slidesPerView={isSmallMobile ? 2 : 4}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className={styles.swiper}
        >
        {data?.images?.map((item, index) => {
          return (
            <Carousel.Slider className={styles.slide} key={index}>
              <Image src={item} alt=""/>
            </Carousel.Slider>
          )
        })}
      </Carousel>
    </div>
  );
};

ProductSlider.defaultProps = {
  data: undefined,
  className: "",
};

ProductSlider.propTypes = {
  data: PropTypes.any,
  className: PropTypes.string,
};

export default ProductSlider;

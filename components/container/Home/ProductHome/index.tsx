import React, { FC } from "react";
import { Carousel } from "../../../core";
import styles from "./styles.module.scss";
import Heading from "../Heading";
import { ProductHomeProps } from "../../../../types/components/PremiumLanding";
import ProductPremium from "../../../common/ProductPremium";

const ProductHome: FC<ProductHomeProps> = (props) => {
  const { data } = props;
  return (
    <div className={styles.container}>
      <Heading title="Choose your style" subtitle="Beautiful design" />
      <div className={styles.swiper}>
        <Carousel
          isCustomNavigation
          loop
          navigation
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {data.map((item) => {
            return (
              <Carousel.Slider className={styles.slider} key={item?._id}>
                <ProductPremium items={item} />
              </Carousel.Slider>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductHome;

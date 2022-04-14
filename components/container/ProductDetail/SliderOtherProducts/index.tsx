import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { LoadingProducts, ProductPremium } from "../../../common";
import { useSuggestProducts } from "../../../../service/products";
import { Carousel, Image, ToastNotification, Grid } from "../../../core";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { BaseProductProps } from "../../../../types/request";
import Heading from "../../Home/Heading";

const SliderOtherProducts = () => {
  const isMobileScreen = useSelector<RootState>(
    (state) => state.ui.isMobileScreen
  );
  const router = useRouter();
  const productId = router.query["id"] as string;
  const { isLoading, data, error, onFetchSuggestProducts, onResetAsync } =
    useSuggestProducts();
  useEffect(() => {
    if (!productId) {
      return;
    }
    onFetchSuggestProducts(productId);
  }, [productId, onFetchSuggestProducts]);

  useEffect(() => {
    return () => {
      onResetAsync();
    };
  }, [onResetAsync]);

  useEffect(() => {
    if (!isLoading && error) {
      ToastNotification.error(error?.message || "Server Internal Error");
    }
  }, [isLoading, error]);
  return (
    <div className={styles.container}>
      <Heading subtitle="Related Products" title="You Might Also Like"/>
      {isLoading ? (
        <Grid cols={isMobileScreen ? 2 : 4} className={styles.grid}>
          <LoadingProducts quantity={isMobileScreen ? 2 : 4} />
        </Grid>
      ) : (
        <Carousel
          className={styles.swiper}
          navigation
          breakpoints={{
            200: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            991: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          loop
          isCustomNavigation
        >
          {data?.data?.map((item: BaseProductProps) => {
            return (
              <Carousel.Slider key={item?._id}>
                <ProductPremium items={item} />
              </Carousel.Slider>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};

export default SliderOtherProducts;

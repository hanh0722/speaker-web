import { GetServerSideProps } from "next";
import React, { ReactElement } from "react";
import { HeadGeneral } from "../../../components/common";
import {
  ProductDescription,
  ProductDescriptionContent,
  ProductSlider,
} from "../../../components/container/ProductDetail";
import SliderOtherProducts from "../../../components/container/ProductDetail/SliderOtherProducts";
import { Container } from "../../../components/core";
import BreadCrumbDirection from "../../../components/core/BreadCrumbDirection";
import MainLayout from "../../../components/layout/MainLayout";
import { PRODUCT_DETAIL } from "../../../constants/link";
import { HOME } from "../../../constants/path";
import { getProductById } from "../../../service/class/products";
import { NextPageWithLayout } from "../../../types/layout";
import styles from "./styles.module.scss";

const ProductDetail: NextPageWithLayout = ({ data }: any) => {
  return (
    <>
      <HeadGeneral title={`Product - ${data?.title}`} />
      <Container className={styles.container}>
        <BreadCrumbDirection>
          <BreadCrumbDirection.Element href={HOME}>
            Home
          </BreadCrumbDirection.Element>
          <BreadCrumbDirection.Element
            showCaret={false}
            href={PRODUCT_DETAIL(data?._id)}
          >
            {data?.title}
          </BreadCrumbDirection.Element>
        </BreadCrumbDirection>
        <div className={styles.main}>
          <ProductSlider className={styles.swiper} data={data} />
          <ProductDescription data={data} className={styles.description} />
        </div>
        <ProductDescriptionContent data={data}/>
        <SliderOtherProducts/>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
  const productId = params?.id as string;
  if (!productId) {
    return {
      notFound: true,
    };
  }

  const product = await getProductById(productId, req.cookies['token']);
  if (product.data?.code >= 400 || product.status >= 400) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: product.data.data,
    },
  };
};

ProductDetail.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default ProductDetail;

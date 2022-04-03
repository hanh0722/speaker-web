import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { HeadGeneral } from "../components/common";
import {
  Introduction,
  SwiperBanner,
  IntroLanding,
  Landing,
  PremiumLanding,
  ProductHome,
  StaticLanding,
  Question,
} from "../components/container/Home";
import { Container } from "../components/core";
import MainLayout from "../components/layout/MainLayout";
import { CREATION_TIME } from "../constants/request";
import { onFetchProducts } from "../service/class/products";
import { NextPageWithLayout } from "../types/layout";

const Home: NextPageWithLayout = ({ products, }: any) => {
  return (
    <>
      <HeadGeneral title="Home | Store" />
      <SwiperBanner />
      <Container>
        <Introduction />
        <Landing />
        <IntroLanding />
      </Container>
      <PremiumLanding />
      <Container>
        <ProductHome data={products}/>
        <StaticLanding/>
        <Question/>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies["token"];
  let products;
  try {
    const productResponse = await onFetchProducts(
      {
        page: 1,
        sort: -1,
        key: CREATION_TIME,
      },
      token
    );
    products = productResponse.data?.data;
  } catch (err: any) {
    console.log(err);
    products = [];
  }
  return {
    props: {
      products: products,
    },
  };
};
export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

import { ReactElement } from "react";
import { HeadGeneral } from "../components/common";
import { Introduction, SwiperBanner } from "../components/container/Home";
import { Container } from "../components/core";
import MainLayout from "../components/layout/MainLayout";
import { NextPageWithLayout } from "../types/layout";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <HeadGeneral title="Home | Store" />
      <SwiperBanner />
      <Container>
        <Introduction />
      </Container>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

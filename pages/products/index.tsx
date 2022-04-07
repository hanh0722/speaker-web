import { GetServerSideProps } from "next";
import React, { ReactElement } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { NextPageWithLayout } from "../../types/layout";

const Products: NextPageWithLayout = () => {
  return <div>

  </div>;
};

Products.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      hello: ''
    }
  }
}
export default Products;

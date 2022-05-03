import { GetServerSideProps } from "next";
import React, { ReactElement } from "react";
import ProductComponent from "../../components/container/Products";
import { Container } from "../../components/core";
import MainLayout from "../../components/layout/MainLayout";
import { NextPageWithLayout } from "../../types/layout";
import BreadCrumbDirection from "../../components/core/BreadCrumbDirection";
import { HOME, PRODUCTS } from "../../constants/path";
import { onFetchProducts } from "../../service/class/products";
import { HeadGeneral } from "../../components/common";
import { PAGE_DEFAULT, PER_PAGE_DEFAULT } from "../../constants/sort";

const Products: NextPageWithLayout = ({ products, total_products }: any) => {
  return (
    <>
      <HeadGeneral title="Products | Shop" />
      <Container>
        <BreadCrumbDirection title="Products">
          <BreadCrumbDirection.Element href={HOME}>
            Home
          </BreadCrumbDirection.Element>
          <BreadCrumbDirection.Element showCaret={false} href={PRODUCTS}>
            Products
          </BreadCrumbDirection.Element>
        </BreadCrumbDirection>
        <ProductComponent data={products} totalProducts={total_products} />
      </Container>
    </>
  );
};

Products.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const page = query['page'];
  try {
    const products = await onFetchProducts({
      page: page ? +page : PAGE_DEFAULT,
      page_size: PER_PAGE_DEFAULT,
      ...query
    });
    if (products.status >= 400 || products?.data?.code >= 400) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        products: products.data?.data,
        total_products: products?.data?.total_products,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
export default Products;

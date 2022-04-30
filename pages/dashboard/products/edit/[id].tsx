import { GetServerSideProps } from "next";
import React, { ReactElement } from "react";
import { HeadGeneral } from "../../../../components/common";
import DashboardLayout from "../../../../components/layout/DashboardLayout";
import { getProductById } from "../../../../service/class/products";
import { NextPageWithLayout } from "../../../../types/layout";
import EditProductContainer from "../../../../components/container/Dashboard/EditProduct";
import styles from './styles.module.scss';
import BreadCrumbDirection from "../../../../components/core/BreadCrumbDirection";
import { DASH_BOARD, DASH_BOARD_PRODUCTS, EDIT_PRODUCT } from "../../../../constants/path";

const EditProduct: NextPageWithLayout = ({ product }: any) => {
  return (
    <>
      <HeadGeneral title={`Edit - ${product?.title}`} />
      <BreadCrumbDirection className={styles.breadcrumb}>
        <BreadCrumbDirection.Element href={DASH_BOARD}>Dashboard</BreadCrumbDirection.Element>
        <BreadCrumbDirection.Element href={DASH_BOARD_PRODUCTS}>Products</BreadCrumbDirection.Element>
        <BreadCrumbDirection.Element href={EDIT_PRODUCT(product._id)} showCaret={false}>Edit Product</BreadCrumbDirection.Element>
      </BreadCrumbDirection>
      <EditProductContainer product={product}/>
    </>
  );
};

EditProduct.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout className={styles.layout}>{page}</DashboardLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const productId = params?.["id"] as string;
  const token = req.cookies["token"];
  if (!productId) {
    return {
      notFound: true,
    };
  }

  try {
    const product = await getProductById(productId, token);
    if (product.data?.code >= 400) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        product: product.data.data,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
EditProduct.defaultProps = DashboardLayout.defaultProps;

EditProduct.propTypes = DashboardLayout.propTypes;

export default EditProduct;

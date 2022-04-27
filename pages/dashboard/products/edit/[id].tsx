import { GetServerSideProps } from "next";
import React, { ReactElement } from "react";
import { HeadGeneral } from "../../../../components/common";
import DashboardLayout from "../../../../components/layout/DashboardLayout";
import { getProductById } from "../../../../service/class/products";
import { NextPageWithLayout } from "../../../../types/layout";

const EditProduct: NextPageWithLayout = ({ product }: any) => {
  return (
    <>
      <HeadGeneral title={`Edit - ${product?.title}`} />
    </>
  );
};

EditProduct.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
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

import React, { ReactElement } from "react";
import DashboardLayout from "../../../../components/layout/DashboardLayout";
import { NextPageWithLayout } from "../../../../types/layout";
import { HeadGeneral } from "../../../../components/common";
import ManageProducts from "../../../../components/container/Dashboard/ManageProducts";

const ManageProduct: NextPageWithLayout = () => {
  return (
    <>
      <HeadGeneral title="Manage Products"/>
      <ManageProducts/>
    </>
  );
};

ManageProduct.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default ManageProduct;

import React, { ReactElement } from "react";
import { HeadGeneral } from "../../../../components/common";
import CreateProducts from "../../../../components/container/Dashboard/CreateProducts";
import BreadCrumbDirection from "../../../../components/core/BreadCrumbDirection";
import DashboardLayout from "../../../../components/layout/DashboardLayout";
import {
  CREATE_PRODUCT,
  DASH_BOARD,
  DASH_BOARD_PRODUCTS,
} from "../../../../constants/path";
import { NextPageWithLayout } from "../../../../types/layout";
import styles from './styles.module.scss';

const CreateProduct: NextPageWithLayout = () => {
  return (
    <>
      <HeadGeneral title="Create Product" />
      <BreadCrumbDirection left className={styles.breadcrumb}>
        <BreadCrumbDirection.Element href={DASH_BOARD}>
          Dashboard
        </BreadCrumbDirection.Element>
        <BreadCrumbDirection.Element href={DASH_BOARD_PRODUCTS}>
          Products
        </BreadCrumbDirection.Element>
        <BreadCrumbDirection.Element showCaret={false} href={CREATE_PRODUCT}>
          Create Product
        </BreadCrumbDirection.Element>
      </BreadCrumbDirection>
      <CreateProducts/>
    </>
  );
};

CreateProduct.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout className={styles.dashboard}>{page}</DashboardLayout>;
};

export default CreateProduct;

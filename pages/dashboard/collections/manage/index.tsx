import React, { ReactElement } from "react";
import { HeadGeneral } from "../../../../components/common";
import DashboardLayout from "../../../../components/layout/DashboardLayout";
import { NextPageWithLayout } from "../../../../types/layout";
import ManageCollectionContainer from "../../../../components/container/Dashboard/ManageCollections";
import BreadCrumbDirection from "../../../../components/core/BreadCrumbDirection";
import { COLLECTIONS, DASH_BOARD } from "../../../../constants/path";
import styles from './styles.module.scss';

const ManageCollections: NextPageWithLayout = () => {
  return (
    <>
      <HeadGeneral title="Manage Collections" />
      <div className={styles.container}>
        <BreadCrumbDirection className={styles.direction}>
          <BreadCrumbDirection.Element href={DASH_BOARD}>
            Home
          </BreadCrumbDirection.Element>
          <BreadCrumbDirection.Element href={COLLECTIONS}>
            Manage Collections
          </BreadCrumbDirection.Element>
        </BreadCrumbDirection>
        <ManageCollectionContainer />
      </div>
    </>
  );
};

ManageCollections.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default ManageCollections;

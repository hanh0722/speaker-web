import React, { ReactElement } from "react";
import ManageBlogs from "../../../../components/container/Dashboard/ManageBlogs";
import BreadCrumbDirection from "../../../../components/core/BreadCrumbDirection";
import { DashboardContainer } from "../../../../components/layout";
import DashboardLayout from "../../../../components/layout/DashboardLayout";
import { HOME, MANAGE_BLOGS } from "../../../../constants/path";
import { NextPageWithLayout } from "../../../../types/layout";
import styles from "./styles.module.scss";

const ManageBlogContainer: NextPageWithLayout = () => {
  return (
    <>
      <DashboardContainer>
        <BreadCrumbDirection left className={styles.direction}>
          <BreadCrumbDirection.Element href={HOME}>
            Home
          </BreadCrumbDirection.Element>
          <BreadCrumbDirection.Element href={MANAGE_BLOGS}>
            Manage Blogs
          </BreadCrumbDirection.Element>
        </BreadCrumbDirection>
        <ManageBlogs/>
      </DashboardContainer>
    </>
  );
};

ManageBlogContainer.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default ManageBlogContainer;

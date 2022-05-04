import React, { ReactElement } from "react";
import BreadCrumbDirection from "../../../../components/core/BreadCrumbDirection";
import DashboardLayout from "../../../../components/layout/DashboardLayout";
import { CREATE_BLOGS, HOME } from "../../../../constants/path";
import { NextPageWithLayout } from "../../../../types/layout";
import styles from './styles.module.scss';
import CreateBlogContainer from "../../../../components/container/Dashboard/CreateBlog";
import { HeadGeneral } from "../../../../components/common";

const CreateBlog: NextPageWithLayout = () => {
  return (
   <>
    <HeadGeneral title="Create Blog"/>
    <div className={styles.container}>
      <BreadCrumbDirection className={styles.breadcrumb}>
        <BreadCrumbDirection.Element href={HOME}>Home</BreadCrumbDirection.Element>
        <BreadCrumbDirection.Element href={CREATE_BLOGS}>Create Blog</BreadCrumbDirection.Element>
      </BreadCrumbDirection>
      <CreateBlogContainer/>
    </div>
   </>
  )
};

CreateBlog.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}

export default CreateBlog;
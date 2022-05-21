import React, { ReactElement } from "react";
import { HeadGeneral } from "../../../../components/common";
import EditAccountContainer from "../../../../components/container/Dashboard/EditAccountContainer";
import BreadCrumbDirection from "../../../../components/core/BreadCrumbDirection";
import { DashboardLayout } from "../../../../components/layout";
import { EDIT_ACCOUNT, HOME } from "../../../../constants/path";
import { NextPageWithLayout } from "../../../../types/layout";
import styles from './styles.module.scss';

const AccountEdit: NextPageWithLayout = () => {
  return (
    <>
      <HeadGeneral title="Edit Account" />
      <div className={styles.general}>
        <BreadCrumbDirection className={styles.breadcrumb} left>
          <BreadCrumbDirection.Element href={HOME}>
            Home
          </BreadCrumbDirection.Element>
          <BreadCrumbDirection.Element href={EDIT_ACCOUNT}>
            Edit Account
          </BreadCrumbDirection.Element>
        </BreadCrumbDirection>
        <EditAccountContainer/>
      </div>
    </>
  );
};

AccountEdit.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AccountEdit;

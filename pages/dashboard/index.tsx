import React, { ReactElement } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { NextPageWithLayout } from "../../types/layout";
import { HeadGeneral } from "../../components/common";

const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <HeadGeneral title="Dashboard"/>
      <div></div>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;

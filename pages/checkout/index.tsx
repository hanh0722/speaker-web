import React, { ReactElement } from "react";
import MainLayout from "../../components/layout/MainLayout";
import { NextPageWithLayout } from "../../types/layout";

const Checkout: NextPageWithLayout = () => {
  return (
    <div>
      
    </div>
  );
};

Checkout.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>{page}</MainLayout>
  )
}

export default Checkout;
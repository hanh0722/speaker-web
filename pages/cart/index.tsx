import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { HeadGeneral } from "../../components/common";
import CartPage from "../../components/container/CartPage";
import { Container } from "../../components/core";
import BreadCrumbDirection from "../../components/core/BreadCrumbDirection";
import MainLayout from "../../components/layout/MainLayout";
import { CART, CHECKOUT, HOME, PRODUCT } from "../../constants/path";
import { NextPageWithLayout } from "../../types/layout";

const Cart: NextPageWithLayout = () => {
  const router = useRouter();
  const onCheckout = () => {
    router.push(CHECKOUT);
  }
  return (
    <>
      <HeadGeneral title="Cart" />
      <Container>
        <BreadCrumbDirection>
          <BreadCrumbDirection.Element href={HOME}>Home</BreadCrumbDirection.Element>
          <BreadCrumbDirection.Element href={PRODUCT}>Products</BreadCrumbDirection.Element>
          <BreadCrumbDirection.Element href={CART}>Cart</BreadCrumbDirection.Element>
        </BreadCrumbDirection>
        <CartPage onClick={onCheckout}/>
      </Container>
    </>
  );
};

Cart.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Cart;

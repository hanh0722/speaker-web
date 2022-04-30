import { useRouter } from "next/router";
import React, { ReactElement, useState } from "react";
import { HeadGeneral } from "../../components/common";
import CartPage from "../../components/container/CartPage";
import { Address, Payment } from "../../components/container/Checkout";
import { BreadCrumb, Button, Container } from "../../components/core";
import { IconCaretLeft } from "../../components/core/Icons";
import MainLayout from "../../components/layout/MainLayout";
import { PRODUCTS } from "../../constants/path";
import { STEP_BREADCRUMB, STEP_CHECKOUT } from "../../constants/steps";
import usePrevious from "../../hook/usePrevious";
import { NextPageWithLayout } from "../../types/layout";
import styles from './styles.module.scss';

const Checkout: NextPageWithLayout = () => {
  const router = useRouter();
  const [step, setStep] = useState(STEP_CHECKOUT.INFOR_CART);
  const previousStep = usePrevious(step);
  const onHandleClick = () => {
    setStep(STEP_CHECKOUT.ADDRESS);
  }
  const onBack = () => {
    if (step === STEP_CHECKOUT.INFOR_CART || previousStep === null) {
      return router.push(PRODUCTS);
    }
    setStep(previousStep);
  }
  return (
    <>
      <HeadGeneral title="Checkout" />
      <Container>
        <BreadCrumb.Steps className={styles.breadcrumb}>
          {STEP_BREADCRUMB.map((item) => {
            return (
              <BreadCrumb.Steps.Element key={item.step}>
                {item.label}
              </BreadCrumb.Steps.Element>
            );
          })}
        </BreadCrumb.Steps>
        {step === STEP_CHECKOUT.INFOR_CART && <CartPage onClick={onHandleClick}/>}
        {step === STEP_CHECKOUT.ADDRESS && <Address />}
        {step === STEP_CHECKOUT.CHECKOUT && <Payment/>}
        <Button onClick={onBack} className={styles.button} prefix="normal" color="inherit" variant="text">
          <IconCaretLeft variant="sm"/>
          {(step !== STEP_CHECKOUT.INFOR_CART) ? "Back" : "Continue Shopping"}
        </Button>
      </Container>
    </>
  );
};

Checkout.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Checkout;

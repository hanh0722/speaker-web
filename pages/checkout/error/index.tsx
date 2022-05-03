import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import { HeadGeneral } from "../../../components/common";
import { Button, Container } from "../../../components/core";
import MainLayout from "../../../components/layout/MainLayout";
import { HOME } from "../../../constants/path";
import useCallApi from "../../../hook/useCallApi";
import useInterval from "../../../hook/useInterval";
import { deleteTransactionError } from "../../../service/payment";
import { NextPageWithLayout } from "../../../types/layout";
import { BaseResponse } from "../../../types/request";
import styles from "./styles.module.scss";

const CheckoutError: NextPageWithLayout = () => {
  const router = useRouter();
  const {isActive, onSetInterval, timeValue} = useInterval(5, false);
  const onTransaction = () => {
    return deleteTransactionError(router.query["redirect_id"] as string);
  };
  const onHandleSuccess = (_: BaseResponse) => {
    onSetInterval(true, 5);
  };
  const { isLoading, onSendRequest } = useCallApi({
    request: onTransaction,
    onError: onHandleSuccess,
    onSuccess: onHandleSuccess,
  });
  useEffect(() => {
    onSendRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isActive && timeValue === 0) {
      router.push(HOME)
    }
  }, [isActive, timeValue, router]);
  return (
    <>
      <HeadGeneral title="Checkout Error" />
      <Container>
        <div
          className={`d-flex flex-column align-center justify-center ${styles.checkout}`}
        >
          <div className={styles.text}>
            <h1 className="f-64 text-uppercase">Oops!</h1>
            <p className={`f-20 lh-32 ${styles.title}`}>
              Your order is not completed!
            </p>
          </div>
          <Button
            variant="outlined"
            prefix="normal"
            color="inherit"
            size="large"
          >
            You will be redirect after {timeValue}s
          </Button>
        </div>
      </Container>
    </>
  );
};

CheckoutError.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default CheckoutError;

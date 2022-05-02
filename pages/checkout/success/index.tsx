import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { HeadGeneral } from "../../../components/common";
import { Button, Container, LoadingCore } from "../../../components/core";
import BreadCrumbDirection from "../../../components/core/BreadCrumbDirection";
import {
  IconCaretLeft,
  IconSuccessOrder,
} from "../../../components/core/Icons";
import { CARD, CASH } from "../../../constants/type";
import MainLayout from "../../../components/layout/MainLayout";
import { HOME, PRODUCT, SUCCESS_CHECKOUT } from "../../../constants/path";
import useCallApi from "../../../hook/useCallApi";
import { getTransactionResultPayment } from "../../../service/payment";
import { NextPageWithLayout } from "../../../types/layout";
import {
  ParamsPaymentOrderRequest,
  PaymentOrderResponse,
} from "../../../types/request";
import styles from "./styles.module.scss";
import { getLoadingPercent } from "../../../utils/load";

const Success: NextPageWithLayout = () => {
  const router = useRouter();
  const [percent, setPercent] = useState<number>(0);
  const [order, setOrder] = useState<string | null>(null);
  const redirectId = router.query["redirect_id"] as string;
  const orderId = router.query["order_id"] as string;

  const onGetLoadingEvent = (event: ProgressEvent) => {
    setPercent(getLoadingPercent(event));
  };
  const onFetchOrder = ({ id, typePayment }: ParamsPaymentOrderRequest) => {
    return getTransactionResultPayment({
      id,
      typePayment,
      callback: onGetLoadingEvent,
    });
  };

  const onHandleSuccess = (data: PaymentOrderResponse) => {
    const { _id } = data.data;
    setOrder(_id);
  };
  const { isLoading, onSendRequest } = useCallApi<PaymentOrderResponse>({
    request: onFetchOrder,
    onSuccess: onHandleSuccess,
    isToastNotification: true,
  });
  useEffect(() => {
    if (redirectId) {
      onSendRequest({
        id: redirectId,
        typePayment: CARD,
      });
    }
    if (orderId) {
      onSendRequest({
        id: orderId,
        typePayment: CASH,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId, redirectId]);
  return (
    <>
      <HeadGeneral title="Checkout Success" />
      <Container>
        <BreadCrumbDirection>
          <BreadCrumbDirection.Element href={HOME}>
            Home
          </BreadCrumbDirection.Element>
          <BreadCrumbDirection.Element href={PRODUCT}>
            Products
          </BreadCrumbDirection.Element>
          <BreadCrumbDirection.Element
            className={styles.pointer}
            href={SUCCESS_CHECKOUT}
          >
            Success
          </BreadCrumbDirection.Element>
        </BreadCrumbDirection>

        <div className={styles.main}>
          {isLoading && (
            <div
              className={`d-flex flex-column align-center justify-center ${styles["loading-container"]}`}
            >
              <LoadingCore />
              <p className={`text-center f-16 ${styles.loading}`}>
                We are checking your order, please wait for us a little bit
              </p>
            </div>
          )}
          {!isLoading && order && (
            <>
              <h4 className="f-24 weight-500 text-center">
                Thank you for your purchase!
              </h4>
              <div className={styles.img}>
                <IconSuccessOrder variant="unset" />
              </div>
              <div className={`${styles.content} lh-24 text-center`}>
                <p className={styles.title}>
                  Thanks for placing order{" "}
                  <span>{order}</span>
                </p>
                <p>
                  We will send you a notification within 2 days when it ships.
                </p>
                <p>
                  If you have any question or queries then feel to get in
                  contact us.
                </p>
              </div>
              <div className={`text-center ${styles.footer}`}>
                <Button variant="text" prefix="normal" color="inherit">
                  <IconCaretLeft variant="sm" /> Continue Shopping
                </Button>
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

Success.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Success;

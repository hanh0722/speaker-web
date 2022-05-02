import React, { FC } from "react";
import PropTypes from 'prop-types';
import { PaymentCheckoutProps } from "../../../../../types/components/PaymentCheckout";
import { classList } from "../../../../../utils/string";
import { Button } from "../../../../core";
import BoxLayout from "../../BoxLayout";
import BoxOrder from "./BoxOrder";
import styles from "./styles.module.scss";

const RightPayment: FC<PaymentCheckoutProps> = (props) => {
  const { address, isLoadingSubmit, className, ...restProps } = props;
  return (
    <div {...restProps} className={classList(styles.grid, className)}>
      <BoxLayout title="Billing Address">
        <div className={styles.info}>
          <h4 className="weight-400 lh-24 f-14">
            {address?.info?.full_name}{" "}
            <span className="text-capitalize color-gray">
              ({address?.info?.place.toLowerCase()})
            </span>
          </h4>
          <p className={styles.address}>
            Address:{" "}
            <span className="color-gray">
              {address?.info?.address} - {address?.info?.country}
            </span>
          </p>
          <p>
            Phone:{" "}
            <span className="color-gray">{address?.info?.phone_number}</span>
          </p>
        </div>
      </BoxLayout>
      <BoxOrder />
      <Button
        isLoading={isLoadingSubmit}
        type="submit"
        variant="outlined"
        prefix="normal"
        fullWidth
        size="large"
        className={styles.btn}
        color="inherit"
      >
        Complete Order
      </Button>
    </div>
  );
};

RightPayment.defaultProps = {
  isLoadingSubmit: false,
  address: undefined,
  className: '',
};

RightPayment.propTypes = {
  isLoadingSubmit: PropTypes.bool,
  address: PropTypes.any,
  className: PropTypes.string
};

export default RightPayment;

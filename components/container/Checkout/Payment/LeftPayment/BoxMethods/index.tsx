import React, { FC, useState } from "react";
import PropTypes from 'prop-types';
import { PAYMENT_METHODS_VALUE, PAYMENT_OPTIONS } from "../../../../../../constants/steps";
import { BoxMethodsProps } from "../../../../../../types/components/PaymentCheckout";
import { isFunction } from "../../../../../../types/type";
import { Grid, Radio } from "../../../../../core";
import BoxLayout from "../../../BoxLayout";
import Methods from "./Methods";
import styles from "./styles.module.scss";
import { classList } from "../../../../../../utils/string";

const BoxMethods: FC<BoxMethodsProps> = (props) => {
  const { className, onGetPayment, ...restProps } = props;
  const [keyMethod, setKeyMethod] = useState<string | number | undefined | PAYMENT_METHODS_VALUE>(PAYMENT_METHODS_VALUE.CASH);
  const onGetKeyHandler = (key: string | number | undefined) => {
    setKeyMethod(key);
    if (isFunction(onGetPayment)) {
      onGetPayment(key);
   }
  };

  return (
    <BoxLayout {...restProps} title="Payment Options" className={classList(styles.box, className)}>
      <Radio onGetKey={onGetKeyHandler} defaultKey={keyMethod}>
        <Grid prefix="lg" cols={1} className={styles.grid}>
          {PAYMENT_OPTIONS.map((item) => {
            return <Methods isActive={keyMethod === item.eventKey} data={item} key={item.eventKey} />;
          })}
        </Grid>
      </Radio>
    </BoxLayout>
  );
};

BoxMethods.defaultProps = {
  className: '',
  onGetPayment: (value) => {}
};

BoxMethods.propTypes = {
  className: PropTypes.string,
  onGetPayment: PropTypes.func
};

export default BoxMethods;

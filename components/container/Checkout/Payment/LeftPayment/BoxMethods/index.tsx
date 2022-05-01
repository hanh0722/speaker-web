import React, { useState } from "react";
import { PAYMENT_METHODS_VALUE, PAYMENT_OPTIONS } from "../../../../../../constants/steps";
import { Grid, Radio } from "../../../../../core";
import BoxLayout from "../../../BoxLayout";
import Methods from "./Methods";
import styles from "./styles.module.scss";

const BoxMethods = () => {
  const [keyMethod, setKeyMethod] = useState<string | number | undefined | PAYMENT_METHODS_VALUE>(PAYMENT_METHODS_VALUE.CASH);
  const onGetKeyHandler = (key: string | number | undefined) => {
    setKeyMethod(key);
  };

  return (
    <BoxLayout title="Payment Options" className={styles.box}>
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

export default BoxMethods;

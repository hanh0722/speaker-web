import React from "react";
import BoxLayout from "../../../BoxLayout";
import BoxOptions from "./BoxOptions";
import styles from "./styles.module.scss";

const DeliverOptions = () => {
  return (
    <BoxLayout title="Deliver Options">
      <div className={styles.box}>
        <BoxOptions isActive title="Standard Delivery (Free)" />
      </div>
    </BoxLayout>
  );
};

export default DeliverOptions;

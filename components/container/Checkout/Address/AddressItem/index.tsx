import React from "react";
import { Button } from "../../../../core";
import styles from './styles.module.scss';

const AddressItem = () => {
  return (
    <div className={`d-flex align-end ${styles.address}`}>
      <div className={styles.left}>
        <div className={`d-flex align-center ${styles.title}`}>
          <p className="weight-500">Jayvion Simon</p>
          <span className={styles.des}>(Home)</span>
          <span className={`f-12 lh-20 ${styles.default}`}>Default</span>
        </div>
        <p className={styles.add}>19034 Verna Unions Apt. 164 - Honolulu, RI / 87535</p>
        <p className="color-gray">365-374-4961</p>
      </div>
      <Button prefix="normal" size="small" variant="outlined" color="success">Deliver To This Address</Button>
    </div>
  )
};

export default AddressItem;
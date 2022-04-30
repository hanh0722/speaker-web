import React from "react";
import BoxTotalCart from "./BoxTotalCart";
import StatisticCart from "./StatisticCart";
import styles from './styles.module.scss';

const CartPage = () => {
  return (
    <>
      <div className={`d-flex ${styles.statistic}`}>
        <StatisticCart />
        <BoxTotalCart/>
      </div>
    </>
  );
};

export default CartPage;

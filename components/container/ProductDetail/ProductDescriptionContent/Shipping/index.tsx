import React from "react";
import styles from "./styles.module.scss";


const Shipping = () => {
  return (
    <div className={`color-gray f-16 lh-32 ${styles.content}`}>
      Shipping cost is based on weight. Just add products to your cart and use
      the Shipping Calculator to see the shipping price. We want you to be 100%
      satisfied with your purchase. Items can be returned or exchanged within 30
      days of delivery
    </div>
  );
};

export default Shipping;

import React, { FC } from "react";
import PropTypes from "prop-types";
import { StatusProducts } from "../../../../../../types/components/Dashboard";
import { classList } from "../../../../../../utils/string";
import styles from "./styles.module.scss";

const StatusProduct: FC<StatusProducts> = (props) => {
  const { quantity, className, ...restProps } = props;
  console.log(quantity);
  if (quantity === 0) {
    return (
      <div {...restProps} className={classList(styles.container, styles.out, className)}>
        Out of stock
      </div>
    )
  } 
  if (quantity <= 50) {
    return (
      <div {...restProps} className={classList(styles.container, styles.low, className)}>
        Low Stock
      </div>
    );
    }
  return (
    <div {...restProps} className={classList(styles.container, styles.normal)}>
      In stock
    </div>
  );
};

StatusProduct.defaultProps = {
  className: "",
};

StatusProduct.propTypes = {
  quantity: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default StatusProduct;

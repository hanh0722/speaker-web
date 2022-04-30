import React, { FC } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { CartStoreState } from "../../../../store/slices/cart";
import { ClassNameProps } from "../../../../types/string";
import { classList, toCurrency } from "../../../../utils/string";
import styles from "./styles.module.scss";
import { Button, Link, SkeletonLoading } from "../../../core";
import { CHECKOUT } from "../../../../constants/path";
import { generateArray } from "../../../../utils/array";

const BoxTotalCart: FC<ClassNameProps> = (props) => {
  const { className, ...restProps } = props;
  const { total, isLoadingCart } = useSelector<RootState, CartStoreState>(
    (state) => state.cart
  );
  return (
    <div {...restProps} className={classList("shadow-xs", styles.box, className)}>
      <h4 className="weight-500 f-18">Order Summary</h4>
      {isLoadingCart ? (
        generateArray(3).map((item) => (
          <SkeletonLoading className={styles.loading} key={item} />
        ))
      ) : (
        <>
          <ul className={styles.list}>
            <li>
              <span>Subtotal: </span>
              <span>{toCurrency(total)}</span>
            </li>
            <li>
              <span>Shipping:</span>
              <span>Free</span>
            </li>
          </ul>
          <div
            className={`d-flex justify-between align-center ${styles.total}`}
          >
            <span>Total:</span>
            <span>
              {toCurrency(total, undefined, { maximumFractionDigits: 0 })}
            </span>
          </div>
          <p className={`text-end color-gray f-12 ${styles.title}`}>
            (VAT included if applicable)
          </p>

          <Link href={CHECKOUT}>
            <Button
              className={styles.btn}
              prefix="normal"
              variant="outlined"
              color="inherit"
              size="large"
              fullWidth
            >
              Checkout
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

BoxTotalCart.defaultProps = {
  className: "",
  children: undefined,
};

BoxTotalCart.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default BoxTotalCart;

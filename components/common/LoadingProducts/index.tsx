import React, { FC } from "react";
import PropTypes from 'prop-types';
import { classList } from "../../../utils/string";
import { DEFAULT_PAGE_SIZE } from "../../../constants/products";
import { LoadingProductsProps } from "../../../types/components/Products";
import { generateArray } from "../../../utils/array";
import { SkeletonLoading } from "../../core";
import styles from "./styles.module.scss";

const LoadingProducts: FC<LoadingProductsProps> = (props) => {
  const { className, quantity = DEFAULT_PAGE_SIZE, ...restProps } = props;
  return (
    <>
      {generateArray(quantity).map((item) => {
        return (
          <div className={classList(styles.loading, className)} key={item}>
            <SkeletonLoading className={styles.image} variant="image" />
            <SkeletonLoading className={styles.line} variant="line" />
          </div>
        );
      })}
    </>
  );
};

LoadingProducts.defaultProps = {
  quantity: DEFAULT_PAGE_SIZE,
  className: ''
}

LoadingProducts.propTypes = {
  quantity: PropTypes.number,
  className: PropTypes.string,
}
export default LoadingProducts;

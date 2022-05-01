import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../store";
import { CartStoreState } from "../../../../../../store/slices/cart";
import { generateArray } from "../../../../../../utils/array";
import { toCurrency } from "../../../../../../utils/string";
import { Grid, SkeletonLoading } from "../../../../../core";
import BoxLayout from "../../../BoxLayout";
import styles from './styles.module.scss';

const BoxOrder = () => {
  const { isLoadingCart, total, totalProducts } = useSelector<RootState, CartStoreState>(state => state.cart);
  return (
    <BoxLayout className={styles.box} title="Order Summary">
      <Grid prefix="lg" className={styles.grid} cols={1}>
        {isLoadingCart && generateArray(5).map(item => <SkeletonLoading key={item} className={styles.loading}/>)}
        <p className="d-flex justify-between align-center">
          <span>Sub Total:</span>
          <span className="weight-500">{toCurrency(total)}</span>
        </p>
        <p className="d-flex justify-between align-center">
          <span>Shipping:</span>
          <span className="weight-500">Free</span>
        </p>
        <p className="d-flex justify-between align-center">
          <span>Total Products:</span>
          <span>{totalProducts}</span>
        </p>
        <div className={styles.total}>
          <p className="d-flex justify-between align-center">
            <span className="weight-500 f-16">Total:</span>
            <span className={styles.price}>{toCurrency(total)}</span>
          </p>
          <p className={`text-end ${styles.caption}`}>(VAT included if applicable)</p>
        </div>
      </Grid>
    </BoxLayout>
  )
};

export default BoxOrder;
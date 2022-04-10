import React, { FC, useState } from "react";
import PropTypes from 'prop-types';
import { CartItem } from "../../../../types/components/Cart";
import { classList, toCurrency } from "../../../../utils/string";
import { ButtonQuantity, ImageTransition } from "../../../common";
import styles from "./styles.module.scss";
import { Button } from "../../../core";

const CartItem: FC<CartItem> = (props) => {
  const { className, data, quantity, ...restProps } = props;
  const [prodQuantity, setProdQuantity] = useState(quantity);
  const onChangeQuantity = (value: number) => {
    setProdQuantity(value);
  }
  const onDeleteItem = () => {
    
  }
  return (
    <div {...restProps} className={classList('d-flex align-center', styles.item, className)}>
      <ImageTransition className={styles.image} images={data?.images} />
      <div className={styles.description}>
        <p className={`f-16 weight-500 ${styles.title}`}>{data.title}</p>
        <p className={`${styles.price}`}>{toCurrency(data.price)}</p>
        <ButtonQuantity onChange={onChangeQuantity} className={styles.quantity} defaultValue={quantity.toString()}/>
        <div className={`d-flex align-center ${styles.btn}`}>
          <Button onClick={onDeleteItem} variant="outlined" color="warning" prefix="normal">Delete</Button>
        </div>
      </div>
    </div>
  );
};

CartItem.defaultProps = {

}

CartItem.propTypes = {
  className: PropTypes.string,
  data: PropTypes.any,

}

export default CartItem;

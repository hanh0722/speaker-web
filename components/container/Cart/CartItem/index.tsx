import React, { FC, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { CartItem } from "../../../../types/components/Cart";
import { classList, toCurrency } from "../../../../utils/string";
import { ButtonQuantitySystem, ImageTransition } from "../../../common";
import styles from "./styles.module.scss";
import { Button } from "../../../core";
import { AppDispatch } from "../../../../store";
import { cartActions } from "../../../../store/slices/cart";
import { onDeleteItemCart } from "../../../../service/class/cart";
import { BOTTOM_LEFT } from "../../../../constants/toast";
import ToastNotification from "../../../core/ToastNotification";

const CartItem: FC<CartItem> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { className, data, quantity, ...restProps } = props;
  const onDeleteItem = async () => {
    setIsLoading(true);
    try {
      const response = await onDeleteItemCart(data._id, -1);
      if (response.data?.code >= 400 || response.status >= 400) {
        throw new Error(response.data?.message);
      }
      dispatch(
        cartActions.onDeleteItemCart({
          id: data._id,
          quantity: -1,
        })
      );
    } catch (err: any) {
      setError(err?.message);
    }
  };
  return (
    <div
      {...restProps}
      className={classList("d-flex align-center", styles.item, className)}
    >
      <ImageTransition className={styles.image} images={data?.images} />
      <div className={styles.description}>
        <p className={`f-16 weight-500 ${styles.title}`}>{data.title}</p>
        <p className={`${styles.price}`}>{toCurrency(data.price)}</p>
        <ButtonQuantitySystem productId={data._id} initialValue={quantity} />
        <div className={`d-flex align-center ${styles.btn}`}>
          <Button
            isLoading={isLoading}
            onClick={onDeleteItem}
            variant="outlined"
            color="warning"
            prefix="normal"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

CartItem.defaultProps = {
  className: "",
  children: null,
};

CartItem.propTypes = {
  className: PropTypes.string,
  data: PropTypes.any.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartItem;

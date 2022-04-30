import React, { FC, useEffect } from "react";
import PropTypes from 'prop-types';
import { CartRowStatisticProps } from "../../../../../types/components/Cart";
import { classList, isString, toCurrency } from "../../../../../utils/string";
import { ButtonQuantitySystem } from "../../../../common";
import { Button, Image, Link, Table, ToastNotification } from "../../../../core";
import { IconTrash } from "../../../../core/Icons";
import styles from "./styles.module.scss";
import { PRODUCT_DETAIL } from "../../../../../constants/link";
import { useDeleleItemCart } from "../../../../../hook/useCart";

const RowStatistic: FC<CartRowStatisticProps> = (props) => {
  const { isLoading, error, onDeleteItemInCart, data: dataDeleteProduct } = useDeleleItemCart();
  const {data, className, quantity, ...restProps } = props;

  const onDeleteItem = () => {
    onDeleteItemInCart(data._id, quantity);
  };
  useEffect(() => {
    if (!isLoading && isString(error)) {
      ToastNotification.error(error);
    };
    if (!isLoading && !error && dataDeleteProduct) {
      ToastNotification.success('Delete Product Successfully');
    }
  }, [isLoading, error, dataDeleteProduct]);
  
  return (
    <Table.Row className={classList(className)} {...restProps}>
      <Table.Cell align="start">
        <div className="d-flex align-center">
          <div className={styles.image}>
            <Image src={data?.images?.[0]} alt="" />
          </div>
          <div className={styles.info}>
            <Link href={PRODUCT_DETAIL(data?._id)}>{data?.title}</Link>
          </div>
        </div>
      </Table.Cell>
      <Table.Cell>{toCurrency(data?.discount_price || data?.price)}</Table.Cell>
      <Table.Cell>
        <ButtonQuantitySystem
          className={styles.quantity}
          initialValue={quantity}
          productId={data?._id}
        />
      </Table.Cell>
      <Table.Cell>{toCurrency((data?.discount_price || data?.price) * quantity)}</Table.Cell>
      <Table.Cell>
        <Button isLoading={isLoading} onClick={onDeleteItem} variant="text" prefix="normal" color="inherit" size="large">
          <IconTrash />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

RowStatistic.defaultProps = {
  className: ''
};  

RowStatistic.propTypes = {
  data: PropTypes.any.isRequired,
  className: PropTypes.string,
  quantity: PropTypes.number.isRequired
};

export default RowStatistic;

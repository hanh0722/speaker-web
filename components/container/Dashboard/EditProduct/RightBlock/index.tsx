import React, { ChangeEvent, FC, useEffect } from "react";
import PropTypes from "prop-types";
import useInput from "../../../../../hook/useInput";
import { RightEditProductProps } from "../../../../../types/components/EditProduct";
import { isFunction } from "../../../../../types/type";
import { classList, isPositive, isRequired } from "../../../../../utils/string";
import { ButtonToggle } from "../../../../common";
import { Button, Input } from "../../../../core";
import styles from "./styles.module.scss";

const RightBlock: FC<RightEditProductProps> = (props) => {
  const {
    product,
    className,
    onChangeQuantity,
    onChangeRegularPrice,
    onChangeSalePrice,
    isValid,
    isLoading,
    ...restProps
  } = props;
  const { forceUpdateValue, onChangeHandler, onTouchedHandler } =
    useInput(undefined);

  const {
    isTouched: isTouchedRegularPrice,
    isValid: isValidRegularPrice,
    forceUpdateValue: onUpdate,
    onChangeHandler: onChangePrice,
    onTouchedHandler: onTouchedRegularPrice,
  } = useInput("and", isRequired, isPositive);

  const {
    forceUpdateValue: forceUpdateSalePrice,
    onChangeHandler: onChangePriceSale,
    onTouchedHandler: onTouchSalePrice,
  } = useInput(undefined);

  useEffect(() => {
    if (product) {
      onUpdate(product.price.toString());
      forceUpdateValue(product.stock_quantity?.toString() || "");
      forceUpdateSalePrice(product.discount_price?.toString() || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  const onChangePriceHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChangePrice(event);
    if (isFunction(onChangeRegularPrice)) {
      onChangeRegularPrice(+event.target.value);
    }
  };

  const onChangeSalePriceHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChangePriceSale(event);
    if (isFunction(onChangeSalePrice)) {
      onChangeSalePrice(+event.target.value);
    }
  };
  const onChangeQuantityHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeHandler(event);
    if (isFunction(onChangeQuantity)) {
      onChangeQuantity(+event.target.value);
    }
  }
  return (
    <div {...restProps} className={classList(styles.container, className)}>
      <div className={styles.input}>
        <div className={`d-flex align-center ${styles["in-stock"]}`}>
          <ButtonToggle
            initialStatus={product?.stock_quantity > 0}
            className={styles.toggle}
          />
          <span>In Stock</span>
        </div>
        <Input
          className={styles.quantity}
          onChange={onChangeQuantityHandler}
          onBlur={onTouchedHandler}
          label="Product Quantity"
          type="number"
          defaultValue={product.stock_quantity?.toString()}
        />
      </div>
      <div className={styles.box}>
        <Input
          type="number"
          label="Regular Price ($)*"
          onChange={onChangePriceHandler}
          onBlur={onTouchedRegularPrice}
          defaultValue={product.price.toString()}
          error={!isValidRegularPrice && isTouchedRegularPrice}
          errorMessage="Regular Price is not valid"
        />
        <Input
          type="number"
          label="Sale Price"
          onChange={onChangeSalePriceHandler}
          onBlur={onTouchSalePrice}
          className={styles.sale}
          defaultValue={product.discount_price?.toString()}
        />
      </div>
      <div className={styles.btn}>
        <Button disabled={!isValid || isLoading} isLoading={isLoading} type="submit" size="large" fullWidth>
          Update Product
        </Button>
      </div>
    </div>
  );
};

RightBlock.defaultProps = {
  className: "",
  onChangeQuantity: (value) => {},
  onChangeRegularPrice: (value) => {},
  onChangeSalePrice: (value) => {},
};

RightBlock.propTypes = {
  className: PropTypes.string,
  onChangeQuantity: PropTypes.func,
  onChangeRegularPrice: PropTypes.func,
  onChangeSalePrice: PropTypes.func,
  product: PropTypes.any.isRequired,
};

export default RightBlock;

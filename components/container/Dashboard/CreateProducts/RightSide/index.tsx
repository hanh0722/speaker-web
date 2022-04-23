import React, { ChangeEvent, FC } from "react";
import PropTypes from 'prop-types';
import useInput from "../../../../../hook/useInput";
import { RightSideCreateProductsProps } from "../../../../../types/components/CreateProduct";
import { classList, isRequired } from "../../../../../utils/string";
import { ButtonToggle } from "../../../../common";
import { Button, Input } from "../../../../core";
import styles from "./styles.module.scss";

const RightSide: FC<RightSideCreateProductsProps> = (props) => {
  const { isTouched, isValid, onChangeHandler, onTouchedHandler, value } =
    useInput(null, isRequired);
  const {
    className,
    onChangePrice: onGetPrice,
    onChangeQuantity,
    isValid: isValidForm,
    onChangeSalePrice,
    isLoadingUpload,
    ...restProps
  } = props;

  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChangeHandler(event);
    if (onGetPrice) {
      onGetPrice(+value);
    }
  };

  const onChangeProductQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (onChangeQuantity) {
      onChangeQuantity(+value);
    }
  };

  const onChangePriceSale = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (onChangeSalePrice) {
      onChangeSalePrice(+value);
    }
  }

  return (
    <div {...restProps} className={classList(className)}>
      <div className={styles.right}>
        <ButtonToggle className={`d-flex align-center ${styles.btn}`}>
          <span className="f-14 lh-20">In Stock</span>
        </ButtonToggle>
        <Input
          onChange={onChangeProductQuantity}
          className={styles.hide}
          label="Product Quantity"
        />
      </div>
      <div className={`${styles.right} ${styles.price}`}>
        <Input
          onBlur={onTouchedHandler}
          onChange={onChangePrice}
          value={value}
          error={!isValid && isTouched}
          errorMessage="Regular price must be filled."
          label="Regular Price ($)*"
          type="number"
          placeholder="$0.00"
        />
        <Input onChange={onChangePriceSale} label="Sale Price" type="number" placeholder="$0.00" />
        <ButtonToggle className={`d-flex align-center ${styles.button}`}>
          <span className="f-14 lh-20">Price includes taxes</span>
        </ButtonToggle>
      </div>
      <div className={styles.upload}>
        <Button isLoading={isLoadingUpload} disabled={!isValidForm} type="submit" size="large" fullWidth>
          Create Product
        </Button>
      </div>
    </div>
  );
};

RightSide.defaultProps = {
  className: '',
  onChangePrice: (value) => {},
  onChangeQuantity: (value) => {},
  onChangeSalePrice: (value) => {},
  isLoadingUpload: false,
  isValid: false
};

RightSide.propTypes = {
  onChangePrice: PropTypes.func,
  onChangeQuantity: PropTypes.func,
  onChangeSalePrice: PropTypes.func,
  className: PropTypes.string,
  isLoadingUpload: PropTypes.bool,
  isValid: PropTypes.bool
}

export default RightSide;

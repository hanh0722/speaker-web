import React, { FC, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ProductPremiumProps } from "../../../types/components/ProductPremium";
import { classList, toCurrency } from "../../../utils/string";
import { Button, ParserElement, Link, ToastNotification } from "../../core";
import OptionProduct from "../OptionProduct";
import styles from "./styles.module.scss";
import ImageTransition from "../ImageTransition";
import { useAddCartService } from "../../../hook/useCart";
import { PRODUCT_DETAIL } from "../../../constants/link";

const ProductPremium: FC<ProductPremiumProps> = (props) => {
  const { isLoading, data, error, onAddItemToCart, onResetAsync } =
    useAddCartService();
  const [isActive, setIsActive] = useState(false);
  const { items, className, isShowDescription, isHiddenOptions, ...restProps } =
    props;

  const onAddProduct = () => {
    onAddItemToCart(items._id, 1);
  };
  const onEnter = () => {
    setIsActive(true);
  };
  const onLeave = () => {
    setIsActive(false);
  };
  useEffect(() => {
    if (!isLoading && data && !error) {
      ToastNotification.success('Add To Cart Successfully');
    }
  }, [onResetAsync, isLoading, data, error]);

  useEffect(() => {
    return () => {
      onResetAsync();
    }
  }, [onResetAsync]);

  return (
    <div
      {...restProps}
      className={classList(`text-center ${styles.product}`, className)}
    >
      <div
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className={`${styles.image} image-product`}
      >
        {items?.discount_price && <span className={`f-12 lh-20 weight-500 d-flex justify-center align-center ${styles.sale}`}>Sale</span>}
        <Link href={PRODUCT_DETAIL(items._id)}>
          <ImageTransition images={items.images} />
        </Link>
        {!isHiddenOptions && (
          <OptionProduct id={items?._id} isActive={isActive} />
        )}
      </div>
      <div className={`${styles.info} info-product`}>
        <p className={`f-12 lh-20 text-uppercase color-gray ${styles.brand}`}>
          Minimog
        </p>
        <Link href={PRODUCT_DETAIL(items._id)}><p className={`f-14 weight-400 ${styles.name}`}>{items?.title}</p></Link>
        <div
          className={`gap-14 f-14 d-flex justify-center align-center price-item ${styles.price}`}
        >
          {items?.discount_price && (
            <span>{toCurrency(items?.discount_price)}</span>
          )}
          <span>{toCurrency(items?.price)}</span>
        </div>
        {isShowDescription && (
          <ParserElement
            className={styles.description}
            content={items?.description}
          />
        )}
        <Button
          isLoading={isLoading}
          onClick={onAddProduct}
          requiredAuth
          prefix="normal"
          color="inherit"
          variant="outlined"
          size="large"
          className={styles.btn}
          disabled={items?.stock_quantity === 0}
        >
          {items?.stock_quantity === 0 ? 'Out of stock' : 'Quick Add'}
        </Button>
      </div>
    </div>
  );
};

ProductPremium.defaultProps = {
  isHiddenOptions: false,
};

ProductPremium.propTypes = {
  items: PropTypes.any,
  isHiddenOptions: PropTypes.bool,
};

export default ProductPremium;

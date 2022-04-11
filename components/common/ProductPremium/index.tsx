import React, { FC, useState } from "react";
import PropTypes from 'prop-types';
import { PRODUCT } from "../../../constants/path";
import { ProductPremiumProps } from "../../../types/components/ProductPremium";
import { classList, toCurrency } from "../../../utils/string";
import { Button, ParserElement, Link } from "../../core";
import OptionProduct from "../OptionProduct";
import styles from "./styles.module.scss";
import ImageTransition from "../ImageTransition";

const ProductPremium: FC<ProductPremiumProps> = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { items, className, isShowDescription, isHiddenOptions, ...restProps } = props;

  const onEnter = () => {
    setIsActive(true);
  };
  const onLeave = () => {
    setIsActive(false);
  };
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
        <Link href={`${PRODUCT}/${items._id}`}>
          <ImageTransition images={items.images}/>
        </Link>
        {!isHiddenOptions && <OptionProduct id={items?._id} isActive={isActive}/>}
      </div>
      <div className={`${styles.info} info-product`}>
        <p className={`f-12 lh-20 text-uppercase color-gray ${styles.brand}`}>
          Minimog
        </p>
        <p className={`f-16 weight-400 ${styles.name}`}>{items?.title}</p>
        <div
          className={`gap-14 f-16 d-flex justify-center align-center price-item ${styles.price}`}
        >
          <span className={`weight-500 ${styles["main-price"]}`}>
            {toCurrency(items?.price)}
          </span>
          {items?.discount_price && (
            <span className={`color-gray f-14 ${styles.discount}`}>
              {toCurrency(items?.discount_price)}
            </span>
          )}
        </div>
        {isShowDescription && <ParserElement className={styles.description} content={items?.description} />}
        <Button prefix="normal" color="inherit" variant="outlined" size="large" className={styles.btn}>Quick Add</Button>
      </div>
    </div>
  );
};

ProductPremium.defaultProps = {
  isHiddenOptions: false
}

ProductPremium.propTypes = {
  items: PropTypes.any,
  isHiddenOptions: PropTypes.bool
}

export default ProductPremium;

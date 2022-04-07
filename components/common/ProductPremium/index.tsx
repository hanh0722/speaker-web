import React, { FC, useState } from "react";
import PropTypes from 'prop-types';
import { PRODUCT } from "../../../constants/path";
import { ProductPremiumProps } from "../../../types/components/ProductPremium";
import { classList, toCurrency } from "../../../utils/string";
import { Button, Image, Link } from "../../core";
import OptionProduct from "../OptionProduct";
import styles from "./styles.module.scss";

const ProductPremium: FC<ProductPremiumProps> = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { items, className, ...restProps } = props;

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
        className={styles.image}
      >
        <Link href={`${PRODUCT}/${items._id}`}>
          {items.images.slice(0, 2).map((item, index) => {
            return <Image src={item} alt="" key={index} />;
          })}
        </Link>
        <OptionProduct id={items?._id} isActive={isActive}/>
      </div>
      <div className={styles.info}>
        <p className={`f-12 lh-20 text-uppercase color-gray ${styles.brand}`}>
          Minimog
        </p>
        <p className={`f-16 weight-400 ${styles.name}`}>{items?.title}</p>
        <div
          className={`gap-14 f-16 d-flex justify-center align-center ${styles.price}`}
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
        <Button prefix="normal" color="inherit" variant="outlined" size="large" className={styles.btn}>Quick Add</Button>
      </div>
    </div>
  );
};

ProductPremium.propTypes = {
  items: PropTypes.any
}

export default ProductPremium;

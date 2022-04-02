import React, { FC } from "react";
import { PRODUCT } from "../../../constants/path";
import { ProductPremiumProps } from "../../../types/components/ProductPremium";
import { classList, toCurrency } from "../../../utils/string";
import { Image, Link } from "../../core";
import styles from "./styles.module.scss";

const ProductPremium: FC<ProductPremiumProps> = (props) => {
  const { items, className, ...restProps } = props;
  return (
    <Link href={`${PRODUCT}/${items._id}`}>
      <div {...restProps} className={classList(`text-center ${styles.product}`, className)}>
        <div className={styles.image}>
          <Image src={items.images[0]} alt="" />
        </div>
        <div className={styles.info}>
          <p className={`f-12 lh-20 text-uppercase color-gray ${styles.brand}`}>
            Minimog
          </p>
          <p className={`f-16 weight-400 ${styles.name}`}>
           {items?.title}
          </p>
          <div
            className={`gap-14 f-16 d-flex justify-center align-center ${styles.price}`}
          >
            <span className={`weight-500 ${styles["main-price"]}`}>
              {toCurrency(items?.price)}
            </span>
            {items?.discount_price && <span className={`color-gray f-14 ${styles.discount}`}>{toCurrency(items?.discount_price)}</span>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductPremium;

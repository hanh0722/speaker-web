import React, { FC } from "react";
import { RightSideCreateProductsProps } from "../../../../../types/components/CreateProduct";
import { classList } from "../../../../../utils/string";
import { ButtonToggle } from "../../../../common";
import { Input } from "../../../../core";
import styles from "./styles.module.scss";

const RightSide: FC<RightSideCreateProductsProps> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div {...restProps} className={classList(className)}>
      <div className={styles.right}>
        <ButtonToggle className={`d-flex align-center ${styles.btn}`}>
          <span className="f-14 lh-20">In Stock</span>
        </ButtonToggle>
        <Input className={styles.hide} label="Product Quantity"/>
      </div>
      <div className={`${styles.right} ${styles.price}`}>
        <Input label="Regular Price ($)" type="number" placeholder="$0.00"/>
        <Input label="Sale Price" type="number" placeholder="$0.00"/>
        <ButtonToggle className={`d-flex align-center ${styles.button}`}>
          <span className="f-14 lh-20">Price includes taxes</span>
        </ButtonToggle>
      </div>
    </div>
  );
};

export default RightSide;

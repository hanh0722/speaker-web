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
        <Input label="Product Quantity"/>
      </div>
    </div>
  );
};

export default RightSide;

import React, { FC } from "react";
import { ClassNameProps } from "../../../../types/string";
import { generateArray } from "../../../../utils/array";
import { classList } from "../../../../utils/string";
import { SkeletonLoading } from "../../../core";
import styles from "./styles.module.scss";

const CartLoading: FC<ClassNameProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <div
      {...restProps}
      className={classList(`d-flex align-center ${styles.loading}`, className)}
    >
      <SkeletonLoading className={styles.image} variant="image" />
      <div className={styles.container}>
        {generateArray(5).map(item => {
          return <SkeletonLoading className={styles.line} key={item} variant="line"/>
        })}
        {children}
      </div>
    </div>
  );
};

export default CartLoading;

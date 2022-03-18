import React, { FC } from "react";
import { SkeletonLoadingProps } from "../../../types/component";
import { classList } from "../../../utils/string";
import styles from "./styles.module.scss";

const SkeletonLoading: FC<SkeletonLoadingProps> = (props) => {
  const {
    className,
    variant = "line",
    tagName: Component = "div",
    rounded,
  } = props;

  return (
    <Component
      {...props}
      className={classList(
        styles.skeleton,
        styles[`skeleton-${variant}`],
        rounded ? styles.rounded : "",
        className
      )}
    />
  );
};

export default SkeletonLoading;

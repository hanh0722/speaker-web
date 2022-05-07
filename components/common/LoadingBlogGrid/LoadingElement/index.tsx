import React, { FC } from "react";
import PropTypes from 'prop-types';
import { LoadingElementProps } from "../../../../types/components/LoadingBlogs";
import { SkeletonLoading } from "../../../core";
import styles from "./styles.module.scss";
import { classList } from "../../../../utils/string";

const LoadingElement: FC<LoadingElementProps> = (props) => {
  const { children, as: Component = 'div', className, ...restProps } = props;
  return (
    <Component {...restProps} className={classList(styles.loading, className)}>
      <div className={styles.main}>
        <SkeletonLoading className={styles.image} variant="image" />
      </div>
      <div className={`d-flex align-center ${styles.container}`}>
        <SkeletonLoading className={styles.small} variant="image" rounded />
        <SkeletonLoading className={styles.text} />
      </div>
    </Component>
  );
};

LoadingElement.defaultProps = {
  as: 'div',
  className: ''
};

LoadingElement.propTypes = {
  as: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType, PropTypes.any]),
  className: PropTypes.string
};

export default LoadingElement;

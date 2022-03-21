import React, { FC } from "react";
import PropTypes from 'prop-types';
import styles from "./styles.module.scss";
import { classList } from "../../../utils/string";
import { generateArray } from "../../../utils/array";
import { ClassNameProps } from "../../../types/string";

const LoadingSpinner: FC<ClassNameProps> = (props) => {
  const { className, style, children } = props;
  return (
    <div style={{...style}} className={classList(styles["lds-ring"], 'loading-spinner', className)}>
      {generateArray(4).map((item) => {
        return <div key={item} />;
      })}
      {children}
    </div>
  );
};

LoadingSpinner.defaultProps = {
    style: {},
    className: '',
    children: null
}
LoadingSpinner.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node
}
export default LoadingSpinner;

import React, { FC } from "react";
import PropTypes from "prop-types";
import { classList } from "../../../utils/string";
import styles from "./styles.module.scss";
import { ClassNameProps } from "../../../types/string";

const LoadingCore: FC<ClassNameProps> = (props) => {
  const { className, style } = props;
  return (
    <div style={{...style}} className={classList(styles.container, className)}>
      <div
        className={classList(styles["lds-ellipsis"])}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

LoadingCore.defaultProps = {
  className: "",
  style: {},
};

LoadingCore.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default LoadingCore;

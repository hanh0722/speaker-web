import { GridProps } from "../../../types/component";
import React, { FC } from "react";
import PropTypes from "prop-types";
import { classList } from "../../../utils/string";
import styles from "./styles.module.scss";

const Grid: FC<GridProps> = (props) => {
  const { children, className, cols, ...pProps } = props;
  return (
    <div {...pProps} className={classList("d-grid", styles[`grid-cols-${cols}`], className)}>
      {children}
    </div>
  );
};

Grid.defaultProps = {
  children: null,
  className: "",
  cols: 1,
  style: {},
};

Grid.propTypes = {
  cols: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};
export default Grid;

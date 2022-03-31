import { GridProps } from "../../../types/component";
import React, { FC } from "react";
import PropTypes from "prop-types";
import { classList } from "../../../utils/string";
import styles from "./styles.module.scss";

const Grid: FC<GridProps> = (props) => {
  const { children, className, cols, prefix, ...pProps } = props;
  return (
    <div {...pProps} className={classList("d-grid", styles[`grid-cols-${cols}`], styles[`grid-${prefix}`], className)}>
      {children}
    </div>
  );
};

Grid.defaultProps = {
  children: null,
  className: "",
  cols: 1,
  style: {},
  prefix: 'md'
};

Grid.propTypes = {
  cols: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  prefix: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl'])
};
export default Grid;

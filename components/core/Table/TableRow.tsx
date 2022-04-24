import React, { cloneElement, FC, isValidElement } from "react";
import PropTypes from "prop-types";
import { TableRowsProps } from "../../../types/components/Table";
import { classList } from "../../../utils/string";
import styles from "./styles.module.scss";

const TableRow: FC<TableRowsProps> = (props) => {
  const { className, children, component, ...restProps } = props;
  return (
    <tr {...restProps} className={classList(styles.row, className)}>
      {React.Children.map(children, (child) => {
        return isValidElement(child)
          ? cloneElement(child, { component })
          : child;
      })}
    </tr>
  );
};

TableRow.defaultProps = {
  className: "",
};

TableRow.propTypes = {
  className: PropTypes.string,
};

export default TableRow;

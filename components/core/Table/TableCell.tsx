import React, { FC } from "react";
import PropTypes from "prop-types";
import { TableCellProps } from "../../../types/components/Table";
import { classList } from "../../../utils/string";
import styles from "./styles.module.scss";

const TableCell: FC<TableCellProps> = (props) => {
  const {
    className,
    align,
    children,
    component: Component = "td",
    ...restProps
  } = props;
  return (
    <Component
      {...restProps}
      className={classList(
        styles.td,
        Component === "th" && styles.th,
        `text-${align}`,
        className
      )}
    >
      {children}
    </Component>
  );
};

TableCell.defaultProps = {
  align: "center",
  className: "",
  component: "td",
};

TableCell.propTypes = {
  align: PropTypes.oneOf(["center", "start", "end", "justify"]),
  className: PropTypes.string,
};

export default TableCell;

import React, { FC } from "react";
import PropTypes from "prop-types";
import { TableHeadingProps } from "../../../types/components/Table";
import { classList } from "../../../utils/string";
import styles from "./styles.module.scss";

const TableHead: FC<TableHeadingProps> = (props) => {
  const { children, align, className, ...restProps } = props;
  return (
    <thead
      {...restProps}
      className={classList(styles.head, `text-${align}`, className)}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {component: 'th'})
        }
        return child
      })}
    </thead>
  );
};

TableHead.defaultProps = {
  className: "",
  align: "center",
};

TableHead.propTypes = {
  className: PropTypes.string,
  align: PropTypes.oneOf(["center", "start", "end", "justify"]),
};
export default TableHead;

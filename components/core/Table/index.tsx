import React, { FC } from "react";
import PropTypes from 'prop-types';
import { TableProps } from "../../../types/components/Table";
import styles from './styles.module.scss';
import { classList } from "../../../utils/string";
import TableCell from "./TableCell";
import TableRow from "./TableRow";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table: FC<TableProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <table {...restProps} className={classList(styles.table, className)}>
      {children}
    </table>
  )
};

Table.defaultProps = {
  children: undefined,
  className: ''
};

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Object.assign(Table, {
  Cell: TableCell,
  Row: TableRow,
  Body: TableBody,
  Head: TableHead
});
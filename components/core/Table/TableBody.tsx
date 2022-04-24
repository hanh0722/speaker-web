import React, { FC } from "react";
import PropTypes from 'prop-types';
import { TableBodyProps } from "../../../types/components/Table";
import { classList } from "../../../utils/string";
import styles from './styles.module.scss';

const TableBody: FC<TableBodyProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <tbody className={classList(styles.tbody, className)}>
      {children}
    </tbody>
  )
}

TableBody.defaultProps = {
  className: ''
};

TableBody.propTypes = {
  className: PropTypes.string
};

export default TableBody;
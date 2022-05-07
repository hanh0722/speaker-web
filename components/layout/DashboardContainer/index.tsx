import React, { FC } from "react";
import PropTypes from 'prop-types';
import { ClassNameProps } from "../../../types/string";
import { classList } from "../../../utils/string";
import styles from './styles.module.scss';

const DashboardContainer: FC<ClassNameProps> = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <div {...restProps} className={classList(styles.container, className)}>
      {children}
    </div>
  )
};

DashboardContainer.defaultProps = {
  className: '',
  children: undefined,
};
DashboardContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default DashboardContainer;
import React, { FC } from "react";
import PropTypes from 'prop-types';
import { classList } from "../../../utils/string";
import { IconGroupProps } from "../../../types/component";
import styles from './styles.module.scss';
import IconTooltip from "./IconTooltip";

const IconGroup: FC<IconGroupProps> = (props) => {
  const { children, prefix, className, ...restProps } = props;
  return (
    <div {...restProps} className={classList('d-flex align-center', styles.icon, styles[`name-${prefix}`], className)}>
      {children}
    </div>
  )
}

IconGroup.defaultProps = {
  children: null,
  prefix: 'bottom',
  className: '',
  style: {}
}

IconGroup.propTypes = {
  children: PropTypes.node,
  prefix: PropTypes.oneOf(['left', 'right', 'bottom', 'top']),
  className: PropTypes.string,
  style: PropTypes.object
}
export default Object.assign(IconGroup, {
  ElementIcon: IconTooltip
});
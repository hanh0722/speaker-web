import React, { FC } from "react";
import PropTypes from 'prop-types';
import { ClassNameProps } from "../../../../types/string";
import { classList } from "../../../../utils/string";
import styles from './styles.module.scss';

const Element: FC<ClassNameProps> = (props) => {
  const { className, children, ...restProps } = props;
  return (
    <li {...restProps} className={classList(styles.element, className)}>
      {children}
    </li>
  )
}

Element.defaultProps = {
  className: '',
  children: null
}

Element.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}
export default Element;
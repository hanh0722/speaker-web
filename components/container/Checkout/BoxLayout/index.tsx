import React, { FC } from "react";
import PropTypes from 'prop-types';
import { BoxLayoutProps } from "../../../../types/components/PaymentCheckout";
import { classList } from "../../../../utils/string";
import styles from './styles.module.scss';

const BoxLayout: FC<BoxLayoutProps> = (props) => {
  const { className, title, children } = props;
  return (
    <div className={classList(styles.main, className)}>
      {title && <h4 className="f-16 weight-500 lh-24">{title}</h4>}
      {children}
    </div>
  )
};

BoxLayout.defaultProps = {
  className: '',
  title: ''
};

BoxLayout.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
};

export default BoxLayout;
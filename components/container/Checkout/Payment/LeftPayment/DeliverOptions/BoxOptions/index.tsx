import React, { FC } from "react";
import PropTypes from 'prop-types';
import { BoxOptionsProps } from "../../../../../../../types/components/PaymentCheckout";
import { classList } from "../../../../../../../utils/string";
import { getFullTimeAfterDays } from "../../../../../../../utils/time";
import { Radio } from "../../../../../../core";
import styles from './styles.module.scss';

const BoxOptions: FC<BoxOptionsProps> = (props) => {
  const { className, title, isActive, ...restProps } = props;
  return (
    <div {...restProps} className={classList(`d-flex align-center ${styles.options}`, isActive && styles.active, className)}>
      <Radio defaultKey="default">
        <Radio.Element eventKey="default"/>
      </Radio>
      <div className={styles.description}>
        <p>{title}</p>
        <p className="color-gray">Delivered on {getFullTimeAfterDays(2, 'days')}</p>
      </div>
    </div>
  )
};

BoxOptions.defaultProps = {
  className: '',
  title: '',
  isActive: false
};

BoxOptions.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  isActive: PropTypes.bool
};

export default BoxOptions;
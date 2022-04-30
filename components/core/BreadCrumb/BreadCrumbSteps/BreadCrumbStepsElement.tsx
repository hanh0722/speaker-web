import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { BreadCrumbStepsElementProps } from '../../../../types/components/BreadCrumb';
import styles from './styles.module.scss';
import { classList } from '../../../../utils/string';

const BreadCrumbStepsElement: FC<BreadCrumbStepsElementProps> = (props) => {
  const { className, children, ...restProps } = props;
  return (
    <div {...restProps} className={classList(`text-center d-flex flex-column align-center ${styles.step}`, className)}>
      <div className={styles.dot}></div>
      <div className={styles.info}>
        {children}
      </div>
    </div>
  )
};

BreadCrumbStepsElement.defaultProps = {
  className: ''
};

BreadCrumbStepsElement.propTypes = {
  className: PropTypes.string
};

export default BreadCrumbStepsElement;
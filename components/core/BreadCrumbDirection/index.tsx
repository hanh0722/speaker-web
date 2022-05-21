import React, { FC } from "react";
import PropTypes from 'prop-types';
import { BreadCrumbDirection } from "../../../types/components/BreadCrumb";
import { classList } from "../../../utils/string";
import BreadCrumbElement from "./BreadCrumbElement";
import styles from "./styles.module.scss";

const BreadCrumbDirection: FC<BreadCrumbDirection> = (props) => {
  const { children, title, className, left, ...restProps } = props;
  return (
    <>
      <div {...restProps} className={classList('text-center', styles.breadcrumb, className)}>
        {title && <h4 className="f-36 lh-48 weight-500">{title}</h4>}
        <div className={classList('d-flex justify-center align-center', left && styles.left)}>{children}</div>
      </div>
    </>
  );
};

BreadCrumbDirection.defaultProps = {
  left: false,
  className: '',
  title: '',
};

BreadCrumbDirection.propTypes = {
  left: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string
};

export default Object.assign(BreadCrumbDirection, {
  Element: BreadCrumbElement,
});

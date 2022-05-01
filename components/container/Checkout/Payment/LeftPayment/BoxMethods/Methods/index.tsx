import React, { FC } from "react";
import PropTypes from 'prop-types';
import { MethodsProps } from "../../../../../../../types/components/PaymentCheckout";
import { isArray } from "../../../../../../../utils/array";
import { classList } from "../../../../../../../utils/string";
import { Radio } from "../../../../../../core";
import styles from "./styles.module.scss";

const Methods: FC<MethodsProps> = (props) => {
  const { className, data, isActive, ...restProps } = props;
  return (
    <div
      {...restProps}
      className={classList("d-flex align-center justify-between", isActive && styles.active, styles.box)}
    >
      <Radio.Element eventKey={data?.eventKey} />
      <div className={styles.content}>
        <p>{data?.title}</p>
        <p className="color-gray">{data?.description}</p>
      </div>
      {isArray(data?.icons) && (
        <div className={`d-flex align-center ${styles.icons}`}>
          {data?.icons?.map((Component, index) => {
            return <Component variant="unset" key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

Methods.defaultProps = {
  className: '',
  data: undefined,
  isActive: false
};

Methods.propTypes = {
  className: PropTypes.string,
  data: PropTypes.any,
  isActive: PropTypes.bool
}

export default Methods;

import React, { FC, useContext } from "react";
import PropTypes from "prop-types";
import { BreadCrumbStepsElementProps } from "../../../../types/components/BreadCrumb";
import styles from "./styles.module.scss";
import { classList } from "../../../../utils/string";
import { BreadCrumbStepsContext } from "./BreadCrumbStepsContext";
import { IconCheck } from "../../Icons";

const BreadCrumbStepsElement: FC<BreadCrumbStepsElementProps> = (props) => {
  const { className, children, step, ...restProps } = props;
  const { keyActive } = useContext(BreadCrumbStepsContext);
  return (
    <div
      {...restProps}
      className={classList(
        `text-center d-flex flex-column align-center ${styles.step}`,
        keyActive === step && styles['active-element'],
        className
      )}
    >
      <div className={styles.container}>
        {keyActive === step ? <IconCheck/> : <span className={styles.dot}></span>}
      </div>
      <div className={styles.info}>{children}</div>
    </div>
  );
};

BreadCrumbStepsElement.defaultProps = {
  className: "",
};

BreadCrumbStepsElement.propTypes = {
  className: PropTypes.string,
};

export default BreadCrumbStepsElement;

import React, { FC } from "react";
import PropTypes from 'prop-types';
import { ClassNameProps } from "../../../../types/string";
import { classList } from "../../../../utils/string";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import styles from "./styles.module.scss";

const CreateProducts: FC<ClassNameProps> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div className={classList("d-flex justify-between", styles.container, className)}>
      <LeftSide className={styles.create}/>
      <RightSide className={`d-flex flex-column ${styles.option}`}/>
    </div>
  );
};

CreateProducts.defaultProps = {
  className: ''
};

CreateProducts.propTypes = {
  className: PropTypes.string
};

export default CreateProducts;

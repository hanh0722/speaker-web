import React, { FC } from "react";
import PropTypes from 'prop-types';
import { LeftSideCreateProductsProps } from "../../../../../types/components/CreateProduct";
import { classList } from "../../../../../utils/string";
import { Editor } from "../../../../common";
import { Input } from "../../../../core";
import styles from "./styles.module.scss";

const LeftSide: FC<LeftSideCreateProductsProps> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div {...restProps} className={classList(`shadow-xs ${styles.container}`, className)}>
      <Input type="text" label="Product Name" />
      <div className={styles.editor}>
        <p className={`lh-24 f-16 ${styles.title}`}>Description</p>
        <Editor />
      </div>
    </div>
  );
};

LeftSide.defaultProps = {
  className: ''
};  

LeftSide.propTypes = {
  className: PropTypes.string
}

export default LeftSide;

import React, { FC } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { ClassNameProps } from "../../../../types/string";
import { classList } from "../../../../utils/string";
import LeftEditAccount from "./LeftEditAccount";

const EditAccountContainer: FC<ClassNameProps> = (props) => {
  const { className, ...restProps } = props;
  return (
    <div {...restProps} className={classList('d-flex', className)}>
      <div
        className={styles.container}
      >
        <LeftEditAccount />
      </div>
    </div>
  );
};

EditAccountContainer.defaultProps = {
  className: "",
};

EditAccountContainer.propTypes = {
  className: PropTypes.string,
};

export default EditAccountContainer;

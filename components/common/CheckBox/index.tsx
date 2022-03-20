import React, { FC } from "react";
import styles from "./styles.module.scss";
import { classList } from "../../../utils/string";
import { CheckBoxProps } from "../../../types/component";
import { IconCheck } from "../../core/Icons";

const CheckBox: FC<CheckBoxProps> = (props) => {
  const { className, isCheck } = props;
  return (
    <div
      className={classList(
        "d-flex justify-center align-center",
        styles["check-box"],
        isCheck ? styles.active : '',
        className
      )}
    >
      {isCheck && <IconCheck />}
    </div>
  );
};

export default CheckBox;

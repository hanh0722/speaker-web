import React, { FC, useState } from "react";
import styles from "./styles.module.scss";
import { classList } from "../../../utils/string";
import { CheckBoxProps } from "../../../types/component";
import { IconCheck } from "../../core/Icons";

const CheckBox: FC<CheckBoxProps> = (props) => {
  const { className, isCheck, onChangeCheck } = props;
  const [inputIsCheck, setInputIsCheck] = useState(isCheck || false);
  const onChange = () => {
    setInputIsCheck((prevState) => !prevState);
    if (onChangeCheck) {
      onChangeCheck(!inputIsCheck);
    }
  };
  return (
    <div
      className={classList(
        "d-flex justify-center align-center",
        styles["check-box"],
        inputIsCheck ? styles.active : "",
        className
      )}
      onClick={onChange}
    >
      {isCheck && <IconCheck variant="sm"/>}
    </div>
  );
};

export default CheckBox;

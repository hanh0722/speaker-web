import React, { ChangeEvent, useEffect, useState } from "react";
import { TextField as InputComponent } from "@mui/material";
import styles from "./styles.module.scss";
import { InputProps } from "../../../types/component";
import { classList } from "../../../utils/string";

const Input = (props: InputProps) => {
  const { onChange, type, defaultValue, label, id, variant, className, error, hiddenLabel } =
    props;
  const [value, setValue] = useState(defaultValue || "");
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };
  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);
  return (
    <div className={classList(styles["form-group"], className)}>
      {label && !hiddenLabel &&  (
        <label className="d-block pb-10 f-14" htmlFor={id}>
          {label}
        </label>
      )}
      <InputComponent
        className={styles.input}
        variant={variant || "outlined"}
        id={id}
        {...props}
        value={value}
        type={type || "text"}
        onChange={onChangeHandler}
        error={error}
        color="warning"
      />
    </div>
  );
};

export default Input;

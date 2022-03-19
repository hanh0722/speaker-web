import React, { ChangeEvent, useEffect, useState } from "react";
import { TextField as InputComponent } from "@mui/material";
import styles from "./styles.module.scss";
import { InputProps } from "../../../types/component";
import { classList } from "../../../utils/string";

const Input = (props: InputProps) => {
  const {
    onChange,
    type,
    defaultValue,
    id,
    variant,
    className,
    error,
    iconName: IconComponent,
  } = props;
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
    <div className={classList(styles["form-group"], IconComponent ? styles['form-icon'] : '', className)}>
      <InputComponent
        className={styles.input}
        variant={variant || "outlined"}
        id={id}
        autoComplete="off"
        {...props}
        value={value}
        type={type || "text"}
        onChange={onChangeHandler}
        error={error}
        color="primary"
      />
      {IconComponent && <div className={styles.icon}><IconComponent/></div>}
    </div>
  );
};

export default Input;

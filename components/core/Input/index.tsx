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
    errorMessage,
    onClickIcon
  } = props;
  const [value, setValue] = useState(defaultValue || "");
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };
  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);
  return (
    <div
      className={classList(
        styles["form-group"],
        IconComponent ? styles["form-icon"] : "",
        className
      )}
    >
      <div className={styles.main}>
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
          color="success"
        />
        {IconComponent && (
          <div onClick={onClickIcon} className={styles.icon}>
            <IconComponent />
          </div>
        )}
      </div>
      {errorMessage && error && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export default Input;

import React, { ChangeEvent, forwardRef, useEffect, useState } from "react";
import { Alert, ButtonBase, TextField } from "@mui/material";
import styles from "./styles.module.scss";
import { InputProps } from "../../../types/component";
import { classList } from "../../../utils/string";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
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
      onClickIcon,
      inputProps,
      maxLength,
      ...rest
    } = props;
    const [value, setValue] = useState(defaultValue || "");
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      if (maxLength && value.length >= maxLength) {
        return;
      }
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
          <TextField
            inputRef={ref}
            className={styles.input}
            variant={variant || "outlined"}
            id={id}
            autoComplete="off"
            value={value}
            InputProps={{
              ...inputProps,
            }}
            type={type || "text"}
            onChange={onChangeHandler}
            error={error}
            color="success"
            {...rest}
          />
          {IconComponent && (
            <div onClick={onClickIcon} className={styles.icon}>
              <ButtonBase>
                <IconComponent />
              </ButtonBase>
            </div>
          )}
        </div>
        {errorMessage && error && (
          <Alert severity="error" className={styles.error}>
            {errorMessage}
          </Alert>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

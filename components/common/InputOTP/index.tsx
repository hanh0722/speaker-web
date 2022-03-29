import React, { ChangeEvent, createRef, FC, useState } from "react";
import { generateArray } from "../../../utils/array";
import { InputOTPProps } from "../../../types/component";
import { classList } from "../../../utils/string";
import { Grid, Input } from "../../core";
import styles from "./styles.module.scss";
import { BACKSPACE, Z } from "../../../constants/keyboard";

const InputOTP: FC<InputOTPProps> = (props) => {
  const { inputs, className, onGet } = props;
  const [otp, setOTP] = useState<Array<null | number>>(
    generateArray(inputs).map((_) => null)
  );
  const [ref] = useState(
    generateArray(inputs).map((_) => createRef<HTMLInputElement>())
  );
  const onSetOTP = (position: number, value: number | null) => {
    return otp.map((item, p) => {
      if (p === position) {
        return value;
      }
      return item;
    });
  };
  const positionNotHaveValue = (currentIndex: number) => {
    return otp.findIndex(
      (value, index) => value === null && index !== currentIndex
    );
  };
  const onFocusInput = (currentIndex: number) => {
    const indexFocus = positionNotHaveValue(currentIndex);
    if (indexFocus !== -1) {
      ref[indexFocus].current?.focus();
    }
  };
  const onChangeHandler = (event: ChangeEvent, index: number) => {
    const { value } = event.target as HTMLInputElement;
    if (otp[index]) {
      return;
    }
    const otpValue = onSetOTP(index, +value);
    if (onGet) {
      onGet(otpValue);
    }
    onFocusInput(index);
    setOTP(otpValue);
  };
  const onKeyDownHandler = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const isExistedOTP = otp.some((value, p) => p === index && value !== null);
    if (
      isExistedOTP &&
      (event.code === BACKSPACE ||
        (event.ctrlKey && event.key === Z) ||
        (event.metaKey && event.key === Z))
    ) {
      const otpNew = onSetOTP(index, null);
      if (onGet) {
        onGet(otpNew);
      }
      setOTP(otpNew);
    }
  };
  return (
    <>
      <Grid className={classList(styles.container, className)} cols={inputs}>
        {otp.map((item, index) => {
          return (
            <Input
              onChange={(event) => onChangeHandler(event, index)}
              ref={ref[index]}
              className={styles.input}
              key={index}
              value={item !== null ? item.toString() : ""}
              type="number"
              inputProps={{
                maxLength: 1,
              }}
              onKeyDown={(event) => onKeyDownHandler(event, index)}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default InputOTP;

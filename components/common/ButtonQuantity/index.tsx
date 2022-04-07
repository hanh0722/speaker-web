import { ButtonBase } from "@mui/material";
import React, { ChangeEvent, forwardRef, useState } from "react";
import { ButtonQuantityProps } from "../../../types/components/ButtonQuantity";
import { classList } from "../../../utils/string";
import { Input } from "../../core";
import { IconMinus, IconPlus } from "../../core/Icons";
import styles from "./styles.module.scss";

const ButtonQuantity = forwardRef<HTMLInputElement, ButtonQuantityProps>((props, ref) => {
  const { defaultValue, className, ...restProps } = props;
  const [quantity, setQuantity] = useState(defaultValue || "1");
  const onChange = (event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    if (quantity.length === 3) {
      return;
    }
    setQuantity(value);
  };
  const onIncrement = () => {
    setQuantity((prevState) => {
      return (+prevState + 1).toString();
    });
  };
  const onDecrement = () => {
    if (+quantity <= 1) {
      return;
    }
    setQuantity((prevState) => {
      return (+prevState - 1).toString();
    });
  };

  return (
    <div
      {...restProps}
      className={classList(styles["input-container"], className)}
    >
      <div className={classList(`d-inline-flex align-center ${styles.button}`)}>
        <ButtonBase onClick={onDecrement}>
          <IconMinus />
        </ButtonBase>
        <Input
          ref={ref}
          type="number"
          className={styles.input}
          value={quantity}
          onChange={onChange}
        />
        <ButtonBase onClick={onIncrement}>
          <IconPlus />
        </ButtonBase>
      </div>
    </div>
  );
});

ButtonQuantity.displayName = "ButtonQuantity";

ButtonQuantity.defaultProps = Input.defaultProps;
ButtonQuantity.propTypes = Input.propTypes;

export default ButtonQuantity;

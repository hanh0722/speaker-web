import { ButtonBase } from "@mui/material";
import PropTypes from 'prop-types';
import React, { ChangeEvent, forwardRef, useEffect, useState } from "react";
import { ButtonQuantityProps } from "../../../types/components/ButtonQuantity";
import { classList } from "../../../utils/string";
import { Input } from "../../core";
import { IconMinus, IconPlus } from "../../core/Icons";
import styles from "./styles.module.scss";

const ButtonQuantity = forwardRef<HTMLInputElement, ButtonQuantityProps>(
  (props, ref) => {
    const { defaultValue, className, onChange, ...restProps } = props;
    const [quantity, setQuantity] = useState(defaultValue || "1");
    useEffect(() => {
      if (!onChange) {
        return;
      }
      onChange(+quantity);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity]);
    const onChangeQuantity = (event: ChangeEvent) => {
      const { value } = event.target as HTMLInputElement;
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
        <div
          className={classList(`d-inline-flex align-center ${styles.button}`)}
        >
          <ButtonBase onClick={onDecrement}>
            <IconMinus />
          </ButtonBase>
          <Input
            ref={ref}
            type="number"
            className={styles.input}
            value={quantity}
            onChange={onChangeQuantity}
          />
          <ButtonBase onClick={onIncrement}>
            <IconPlus />
          </ButtonBase>
        </div>
      </div>
    );
  }
);

ButtonQuantity.displayName = "ButtonQuantity";

ButtonQuantity.defaultProps = {
  defaultValue: '1',
  onChange: (value: number) => {},
  className: '',
  style: {}
}

ButtonQuantity.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
}

export default ButtonQuantity;

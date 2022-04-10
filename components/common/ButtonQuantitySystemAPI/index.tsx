import React, { FC, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { classList } from "../../../utils/string";
import { ButtonQuantitySystemProps } from "../../../types/components/ButtonQuantitySystem";
import { IconMinus, IconPlus } from "../../core/Icons";
import { ButtonBase } from "@mui/material";
import { Button, Input } from "../../core";
import styles from "./styles.module.scss";
import { useAddCartService } from "../../../hook/useCart";
import { toast } from "react-toastify";

const ButtonQuantitySystem: FC<ButtonQuantitySystemProps> = (props) => {
  const { initialValue, className, productId } = props;
  const { isLoading: isLoadingAdd, data: dataAdd, error: errorAdd, onAddItemToCart, onResetAsync } = useAddCartService();
  const [value, setValue] = useState<number>(initialValue || 1);

  const onDecrementItem = () => {
    
  }

  const onAddItem = () => {
    onAddItemToCart(productId, 1);
  }
  useEffect(() => {
    if (!isLoadingAdd && dataAdd) {
      setValue(prevState => prevState + 1);
    }
  }, [isLoadingAdd, dataAdd]);
  return (
    <div className={classList("align-center", styles.button, className)}>
      <div className={styles.icon}>
        <Button color="inherit" prefix="normal" variant="outlined" onClick={onDecrementItem}>
          {<IconMinus variant="sm"/>}
        </Button>
      </div>
      <Input className={styles.input} type="number" value={value.toString()} />
      <div className={styles.icon}>
        <Button isLoading={isLoadingAdd} prefix="normal" variant="outlined" color="inherit" onClick={onAddItem}>
          {!isLoadingAdd && <IconPlus variant="sm"/>}
        </Button>
      </div>
    </div>
  );
};

ButtonQuantitySystem.defaultProps = {
  className: "",
  children: null,
};

ButtonQuantitySystem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  initialValue: PropTypes.number,
};

export default ButtonQuantitySystem;

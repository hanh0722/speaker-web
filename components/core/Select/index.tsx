import React, { ChangeEvent, FC, useState } from "react";
import PropTypes from "prop-types";
import { SelectCoreProps } from "../../../types/components/Select";
import { classList } from "../../../utils/string";
import styles from "./styles.module.scss";
import { IconCaret } from "../Icons";
import Element from './Element';
import { isFunction } from "../../../types/type";

const Select: FC<SelectCoreProps> = (props) => {
  const { className, children,  initValue, onChangeValue, ...restProps } = props;
  const [value, setValue] = useState<string | undefined>(
    initValue || undefined
  );

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setValue(value);
    if (isFunction(onChangeValue)){
      onChangeValue(value);
    }
  }

  return (
    <div className={styles.container}>
      <select {...restProps} value={value} onChange={onChangeSelect} className={classList(styles.select, className)}>
        {children}
      </select>
      <IconCaret variant="sm"/>
    </div>
  );
};

Select.defaultProps = {
  className: "",
  initValue: "",
};

Select.propTypes = {
  className: PropTypes.string,
  initValue: PropTypes.any,
};

export default Object.assign(Select, {
  Option: Element
});

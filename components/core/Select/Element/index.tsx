import React, { FC } from "react";
import PropTypes from 'prop-types';
import { SelectElemntProps } from "../../../../types/components/Select";
import { classList } from "../../../../utils/string";

const SelectElement: FC<SelectElemntProps> = (props) => {
  const { className, value, children, ...restProps } = props;
  return (
    <option {...restProps} className={classList(className)} value={value}>
      {children}
    </option>
  )
};

SelectElement.defaultProps = {
  className: '',
  value: ''
};

SelectElement.propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default SelectElement;
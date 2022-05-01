import React, { FC } from "react";
import PropTypes from 'prop-types';
import { RadioProps } from "../../../types/components/Radio";
import { classList } from "../../../utils/string";
import { RadioContextProvider } from "./RadioContext";
import Element from "./Element";

const Radio: FC<RadioProps> = (props) => {
  const { as: Component = 'div', children, className, onGetKey, defaultKey, ...restProps } = props;
  return (
    <RadioContextProvider onGetKey={onGetKey} defaultKey={defaultKey}>
      <Component {...restProps} className={classList(className)}>
        {children}
      </Component>
    </RadioContextProvider>
  );
};

Radio.defaultProps = {
  as: 'div',
  className: '',
  defaultKey: undefined,
};

Radio.propTypes = {
  as: PropTypes.oneOfType([PropTypes.elementType, PropTypes.any]),
  className: PropTypes.string,
  defaultKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Object.assign(Radio, {
  Element: Element
});

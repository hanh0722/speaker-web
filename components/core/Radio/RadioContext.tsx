import { createContext, FC } from "react";
import PropTypes from 'prop-types';
import useRadio from "./useRadio";

interface DefaultPropsContextProvider {
  defaultKey?: string | number | undefined;
  onGetKey?: (key: string | number | undefined) => void
}
interface RadioContextProps extends DefaultPropsContextProvider {
  onChangeKey: (value: string | number | undefined) => void,
  key: string | number | undefined
}
export const RadioContext = createContext<RadioContextProps>({
  defaultKey: undefined,
  onChangeKey: (key) => {},
  key: undefined
});

export const RadioContextProvider: FC<DefaultPropsContextProvider> = (props) => {
  const { defaultKey, onGetKey, children } = props;
  const { key, onChangeKeyHandler } = useRadio(defaultKey, onGetKey);
  return (
    <RadioContext.Provider value={{
      defaultKey: defaultKey,
      key: key,
      onChangeKey: onChangeKeyHandler
    }}>
      {children}
    </RadioContext.Provider>
  )
};


RadioContextProvider.defaultProps = {
  defaultKey: undefined,
};

RadioContextProvider.propTypes = {
  defaultKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
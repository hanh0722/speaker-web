import React, { FC } from "react";
import { InputSelectProps } from "../../../types/components/InputSelect";
import Element from "./Element";
import InputSelect from "./InputSelect";
import { InputSelectContextProvider } from "./InputSelectContext";

const InputSelectContainer: FC<InputSelectProps> = (props) => {
  const { children, onGetTag } = props;
  return (
    <InputSelectContextProvider onGetTag={onGetTag}>
      <InputSelect {...props}>
        {children}
      </InputSelect>
    </InputSelectContextProvider>
  );
};

export default Object.assign(InputSelectContainer, {
  Item: Element
});
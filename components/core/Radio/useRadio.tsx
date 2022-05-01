import { useState } from "react";
import { isFunction } from "../../../types/type";

const useRadio = (initKey?: string | number | undefined, onGetKey?: (key: string | number | undefined) => void) => {
  const [key, setKey] = useState(initKey || undefined);
  
  const onChangeKeyHandler = (value: string | number | undefined) => {
    if (isFunction(onGetKey)) {
      onGetKey(value);
    }
    setKey(value);
  };

  return {
    onChangeKeyHandler,
    key
  }
}

export default useRadio;
import { useState } from "react";
import { v4 } from "uuid";
import { isFunction } from "../../../types/type";
import { InputSelectProviderProps } from "./InputSelectContext";

export class InputTagState {
  constructor(public value: string, public id: string = v4()) {}
}

const useInputSelect = (props?: InputSelectProviderProps) => {
  const [tag, setTag] = useState<Array<InputTagState>>([]);

  const onPushTag = (value: string) => {
    const addTags = [...tag, new InputTagState(value)];
    if (isFunction(props?.onGetTag)) {
      props?.onGetTag(addTags);
    }
    setTag(addTags);
  };
  const onDeleteTag = (id: string) => {
    const filter = tag.filter(item => item.id !== id);
    if (isFunction(props?.onGetTag)) {
      props?.onGetTag(filter);
    }
    setTag(filter);
  }

  return {
    onPushTag,
    tag,
    onDeleteTag
  };
};

export default useInputSelect;
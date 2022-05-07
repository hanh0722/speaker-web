import { createContext, FC } from "react";
import useInputSelect, { InputTagState } from "./useInputSelect";

export interface InputSelectProviderProps {
  onGetTag?: (tags: Array<InputTagState>) => void;
}
interface InputSelectContextProps {
  onPushValue: (value: string) => void;
  tag?: Array<InputTagState>;
  onDeleteTag: (id: string) => void;
}
export const InputSelectContext = createContext<InputSelectContextProps>({
  onPushValue: (value) => {},
  tag: [],
  onDeleteTag: (id) => {},
});

export const InputSelectContextProvider: FC<InputSelectProviderProps> = (
  props
) => {
  const { children, onGetTag } = props;
  const { onPushTag, tag, onDeleteTag } = useInputSelect({
    onGetTag: onGetTag,
  });
  return (
    <InputSelectContext.Provider
      value={{
        tag: tag,
        onPushValue: onPushTag,
        onDeleteTag: onDeleteTag,
      }}
    >
      {children}
    </InputSelectContext.Provider>
  );
};

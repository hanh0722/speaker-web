import React from "react";
import { InputTagState } from "../../../components/core/InputSelect/useInputSelect";
import { ClassNameProps } from "../../string";

export interface InputSelectProps extends React.HTMLAttributes<HTMLInputElement>, ClassNameProps {
  titleList?: string;
  onGetValue?: (value: string) => void;
  show?: boolean;
  onGetTag?: (value: Array<InputTagState>) => void
};

export interface InputSelectElementProps extends ClassNameProps {
  text: string
};

export interface TagElementProps extends ClassNameProps {
  id: string
}
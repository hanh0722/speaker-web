import { RefObject } from "react";
import ReactQuill, { ReactQuillProps } from "react-quill";

export interface EditorProps extends ReactQuillProps {
  onChange?: (value: string) => void;
  ref?: RefObject<ReactQuill>;
  initialValue?: string;
  autoFocus?: boolean;
};
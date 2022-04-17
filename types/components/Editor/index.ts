import { ReactQuillProps } from "react-quill";
import { ClassNameProps } from "../../string";

export interface EditorProps extends ReactQuillProps {
  onChange?: (value: string) => void;
};
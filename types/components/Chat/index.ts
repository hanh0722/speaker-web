import { ClassNameProps } from "../../string";

export interface ChatSearchProps extends ClassNameProps {
  onChangeSearch?: (value: string) => void;
}
import { ClassNameProps } from "../../string";

export interface ButtonQuantityProps extends ClassNameProps {
  defaultValue?: string;
  onChange?: (value: number) => void;
}
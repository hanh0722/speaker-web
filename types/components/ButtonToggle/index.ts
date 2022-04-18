import { ClassNameProps } from "../../string";

export interface ButtonToggleProps extends ClassNameProps {
  initialStatus?: boolean;
  onChange?: (value: boolean) => void;
}
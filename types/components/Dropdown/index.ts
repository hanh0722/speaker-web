import { ElementType, ReactElement } from "react";
import { ClassNameProps } from "../../string";

export interface DropdownProps extends ClassNameProps {
  onCallbackDropdown?: (value: boolean) => void;
  as?: ElementType;
  trigger: ReactElement

}
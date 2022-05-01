import { ElementType } from "react";
import { ClassNameProps } from "../../string";

export interface RadioProps extends ClassNameProps {
  as?: ElementType,
  defaultKey?: string | number | undefined;
  onGetKey?: (key: string | number | undefined) => void
}

export interface ElementRadioProps extends ClassNameProps {
  eventKey?: string | number | undefined,
  as?: ElementType
}
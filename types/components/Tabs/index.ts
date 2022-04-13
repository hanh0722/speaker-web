import { ElementType } from "react";
import { ClassNameProps } from "../../string";

export interface TabProps extends ClassNameProps {
  as?: ElementType;
  eventKey: string | number
}

export interface TabContainerProps {
  defaultActiveKey?: string | number; 
  onSelect?: (key: string | number) => void;
}

export interface TabMainProps extends TabContainerProps, ClassNameProps {

}
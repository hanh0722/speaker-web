import { ClassNameProps } from "../../string";

export interface PlusAccordionProps extends ClassNameProps {
  isActive?: boolean
}

export interface AccordionElementProps extends ClassNameProps {
  id: number;
  title: string;
}

export interface Accordion {
  defaultId?: number
}
import { ClassNameProps } from "../../string";

export interface ImageTransitionProps extends ClassNameProps {
  images: Array<string> | string | undefined;
}
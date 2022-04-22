import { DropzoneInputProps, DropzoneOptions, FileWithPath } from "react-dropzone";
import { ImageProps } from "../../component";
import { ClassNameProps } from "../../string";

export interface DropzoneProps extends DropzoneInputProps, ClassNameProps {
  options?: DropzoneOptions;
  onGetFile?: (file: Array<FileWithPath>) => void
}

export interface ImageDropzoneProps extends ClassNameProps, ImageProps {
  onDelete?: (id: string) => void;
  id: string;
  isLoading?: boolean
}
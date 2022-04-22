import { FileWithPath } from "react-dropzone";
import { INTERNAL_LINK } from "../constants/link";

export const urlIsInternal = (url: string) => {
  try {
    return INTERNAL_LINK.some((value) => url[0] === value);
  } catch (err) {
    return false;
  }
};

export const fileToImage = (file: File | FileWithPath) => {
  return URL.createObjectURL(file);
}